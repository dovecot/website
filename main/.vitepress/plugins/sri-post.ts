/* Copyright (C) 2025 Open-Xchange Gmbh
   This file is licensed with CC-BY-SA-4.0
   See https://creativecommons.org/licenses/by-sa/4.0/deed.en
*/

import * as path from "node:path";
import { createHash } from "node:crypto";
import { promises as fsp } from "node:fs";

function sha384(buf: Buffer) {
  const h = createHash("sha384");
  h.update(buf);
  return `sha384-${h.digest("base64")}`;
}

function stripQueryHash(u: string) {
  const q = u.indexOf("?"), h = u.indexOf("#");
  const cut = Math.min(q === -1 ? u.length : q, h === -1 ? u.length : h);
  return u.slice(0, cut);
}

// Convert any href/src to a candidate relative path under dist (e.g., "assets/app.X.js" or "local.js")
function hrefToRel(href: string) {
  let s = stripQueryHash(href);
  if (s.startsWith("/")) s = s.slice(1);
  return s;
}

async function findByBasename(outDir: string, filename: string, maxDepth = 3): Promise<string | null> {
  async function walk(dir: string, depth: number): Promise<string | null> {
    let entries: import("node:fs").Dirent[];
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch (err: any) {
      // Only ignore "not found" or permission denied; rethrow others if you want stricter behavior
      if (err?.code !== "ENOENT" && err?.code !== "EACCES") throw err;
      return null;
    }
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (depth > 0) {
          const hit = await walk(p, depth - 1);
          if (hit) return hit;
        }
      } else if (e.isFile()) {
        if (path.basename(p) === filename) return p;
      }
    }
    return null;
  }
  return walk(outDir, maxDepth);
}

async function readAssetSmart(outDir: string, href: string): Promise<{ buf: Buffer | null; tried: string[] }> {
  const tried: string[] = [];
  const rel = hrefToRel(href); // e.g., "assets/chunks/metadata.9eb0c8b0.js" or "local.js"
  const direct = path.join(outDir, rel);
  tried.push(direct);

  try {
    return { buf: await fsp.readFile(direct), tried };
  } catch (err: any) {
    if (err?.code !== "ENOENT") {
      // Not "file missing": surface unusual errors
      console.error("[vitepress-sri] read error", { href, path: direct, code: err?.code, message: err?.message });
    }
  }

  // Look for precompressed variants (diagnostic / optional)
  for (const ext of [".br", ".gz"]) {
    const p = direct + ext;
    tried.push(p);
    try {
      const buf = await fsp.readFile(p);
      // Prefer hashing the uncompressed file; this fallback is only to help you debug layout.
      return { buf, tried };
    } catch (err: any) {
      if (err?.code !== "ENOENT") {
        console.error("[vitepress-sri] read error", { href, path: p, code: err?.code, message: err?.message });
      }
    }
  }

  // Final fallback: search by basename anywhere under outDir (depth-limited)
  const found = await findByBasename(outDir, path.basename(rel));
  if (found) {
    tried.push(found);
    try {
      return { buf: await fsp.readFile(found), tried };
    } catch (err: any) {
      console.error("[vitepress-sri] read error", { href, path: found, code: err?.code, message: err?.message });
    }
  }

  return { buf: null, tried };
}

const EXTERNAL = /^(?:https?:)?\/\//i;

// Returns [updatedHtml, countExternalized]
async function externalizeInlineScripts(
  html: string,
  outDir: string,
  options?: {
    // base output folder under dist
    inlineDir?: string; // default: "assets/inline"
    // set to false to keep <script type="module"> inline (default: true = externalize modules too)
    externalizeModules?: boolean; // default: true
    // trim script text before hashing/writing
    trim?: boolean; // default: true
  }
): Promise<[string, number]> {
  const inlineDir = options?.inlineDir ?? "assets/inline";
  const externalizeModules = options?.externalizeModules ?? true;
  const trim = options?.trim ?? true;

  const targetDir = path.join(outDir, inlineDir);
  await fsp.mkdir(targetDir, { recursive: true });

  let count = 0;
  const pending: Promise<void>[] = [];
  const replaceMap = new Map<string, string>();

  // Match ANY script, grab attrs + content. We’ll filter out ones that have src= in code.
  html = html.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (full, rawAttrs, body) => {
      const attrs = rawAttrs || "";

      // Skip if it already has src=
      if (/\bsrc\s*=/.test(attrs)) return full;

      // Find type= (default to "text/javascript" if absent)
      const type = (attrs.match(/\btype\s*=\s*["']([^"']+)["']/i) || [,"text/javascript"])[1].toLowerCase();

      // Only externalize JS / module scripts. Skip JSON-LD, importmap, web manifest, etc.
      const isModule = type === "module" || type === "text/module" || /\btype\s*=\s*["']module["']/i.test(attrs);
      const isJsType =
        type === "text/javascript" ||
        type === "application/javascript" ||
        type === "application/ecmascript" ||
        isModule ||
        // no type attribute => treat as JS
        !/\btype\s*=/.test(attrs);

      if (!isJsType) return full;
      if (!externalizeModules && isModule) return full;

      // If body is effectively empty, leave it
      const text = trim ? body.trim() : body;
      if (!text) return full;

      // Build deterministic-ish filename using content hash
      const bodyBuf = Buffer.from(text, "utf8");
      const h = createHash("sha1").update(bodyBuf).digest("hex").slice(0, 12);
      // Preserve module vs classic via suffix for readability
      const fname = isModule ? `inline.mod.${h}.js` : `inline.${h}.js`;
      const relOut = `${inlineDir}/${fname}`;
      const absOut = path.join(outDir, relOut);

      const marker = `__SRI_INLINE_${Math.random().toString(36).slice(2)}__`;
      pending.push((async () => {
        // write file (idempotent)
        try { await fsp.writeFile(absOut, bodyBuf, { flag: "wx" }); }
        catch (err: any) {
          // If file exists, ignore; otherwise rethrow
          if (err?.code !== "EEXIST") throw err;
        }

        // hash for SRI
        const integrity = sha384(bodyBuf);

        // rebuild attrs: keep async/defer/nonce/crossorigin/etc, but remove nonce (nonce no longer needed)
        let newAttrs = attrs
        .replace(/\bnonce\s*=\s*["'][^"']*["']/ig, "")   // drop nonce if present
        .replace(/\s+/g, " ")                            // tidy spacing
        .trim();

        // Ensure correct type is preserved for module scripts
        if (isModule && !/\btype\s*=/.test(newAttrs)) {
          newAttrs = (newAttrs ? newAttrs + " " : "") + `type="module"`;
        }

        // Add src, integrity, crossorigin
        const needsCross = !/\bcrossorigin\s*=/.test(newAttrs);
        const attrsWithSrc =
          (newAttrs ? " " + newAttrs : "") +
          ` src="/${relOut}"` +
          (needsCross ? ` crossorigin="anonymous"` : "") +
          ` integrity="${integrity}"`;

        replaceMap.set(marker, `<script${attrsWithSrc}></script>`);
      })());

      count++;
      return marker;
    }
  );

  await Promise.all(pending);
  for (const [marker, replacement] of replaceMap) {
    html = html.replace(marker, replacement);
  }
  return [html, count];
}

export async function addSriToDist(outDir: string) {
  // collect .html files
  async function listHtml(dir: string): Promise<string[]> {
    const acc: string[] = [];
    async function walk(d: string) {
      const entries = await fsp.readdir(d, { withFileTypes: true });
      for (const e of entries) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) await walk(p);
        else if (e.isFile() && p.endsWith(".html")) acc.push(p);
      }
    }
    await walk(dir);
    return acc;
  }

  const htmlFiles = await listHtml(outDir);
  let foundScripts = 0, updScripts = 0;
  let foundStyles = 0, updStyles = 0;
  let foundMP = 0, updMP = 0;

  for (const htmlPath of htmlFiles) {
    let html = await fsp.readFile(htmlPath, "utf8");
    let changed = false;

    // prepare these BEFORE using them in replace callbacks
    const pending: Promise<void>[] = [];
    const replaceMap = new Map<string, string>();

    // <script ... src="..."></script>
    html = html.replace(
      /<script\b([^>]*\bsrc=["']([^"']+)["'][^>]*)>\s*<\/script>/gi,
      (full, attrs) => {
        const src = (attrs.match(/\bsrc=["']([^"']+)["']/i) || [,""])[1];
        if (/\bintegrity\s*=\s*["']/i.test(attrs)) return full;
        if (EXTERNAL.test(src)) return full;

        const marker = `__SRI_SCRIPT_${Math.random().toString(36).slice(2)}__`;
        pending.push((async () => {
          const { buf, tried } = await readAssetSmart(outDir, src);
          if (!buf) {
            console.warn("[vitepress-sri] miss", { kind: "script", href: src, tried });
            return;
          }
          const integrity = sha384(buf);
          let open = `<script ${attrs}`;
          if (!/\bcrossorigin\s*=/i.test(attrs)) open += ` crossorigin="anonymous"`;
          open += ` integrity="${integrity}">`;
          replaceMap.set(marker, `${open}</script>`);
          changed = true;
          updScripts++;
        })());
        foundScripts++;
        return marker;
      }
    );

    html = html.replace(
      /<script\b([^>]*\bid=["']([^"']+)["'][^>]*)>\s*<\/script>/gi,
      (full, attrs) => {
        console.log(full);
        return full;
      }
    );

    // <link rel="stylesheet" href="...">
    html = html.replace(
      /<link\b([^>]*\brel=["'].*stylesheet["'][^>]*)\/?>/gi,
      (full, attrs) => {
        const href = (attrs.match(/\bhref=["']([^"']+)["']/i) || [,""])[1];
        if (/\bintegrity\s*=\s*["']/i.test(attrs)) return full;
        if (EXTERNAL.test(href)) return full;

        const marker = `__SRI_STYLE_${Math.random().toString(36).slice(2)}__`;
        pending.push((async () => {
          const { buf, tried } = await readAssetSmart(outDir, href);
          if (!buf) {
            console.warn("[vitepress-sri] miss", { kind: "style", href, tried });
            return;
          }
          const integrity = sha384(buf);
          let open = `<link ${attrs}`;
          if (!/\bcrossorigin\s*=/i.test(attrs)) open += ` crossorigin="anonymous"`;
          open += ` integrity="${integrity}"`;
          const out = /\/>$/.test(full) ? `${open}/>` : `${open}>`;
          replaceMap.set(marker, out);
          changed = true;
          updStyles++;
        })());
        foundStyles++;
        return marker;
      }
    );

    // <link rel="modulepreload" href="...">
    html = html.replace(
      /<link\b([^>]*\brel=["']modulepreload["'][^>]*)\/?>/gi,
      (full, attrs) => {
        const href = (attrs.match(/\bhref=["']([^"']+)["']/i) || [,""])[1];
        if (/\bintegrity\s*=\s*["']/i.test(attrs)) return full;
        if (EXTERNAL.test(href)) return full;

        const marker = `__SRI_MP_${Math.random().toString(36).slice(2)}__`;
        pending.push((async () => {
          const { buf, tried } = await readAssetSmart(outDir, href);
          if (!buf) {
            console.warn("[vitepress-sri] miss", { kind: "modulepreload", href, tried });
            return;
          }
          const integrity = sha384(buf);
          let open = `<link ${attrs}`;
          if (!/\bcrossorigin\s*=/i.test(attrs)) open += ` crossorigin="anonymous"`;
          open += ` integrity="${integrity}"`;
          const out = /\/>$/.test(full) ? `${open}/>` : `${open}>`;
          replaceMap.set(marker, out);
          changed = true;
          updMP++;
        })());
        foundMP++;
        return marker;
      });

      let extCount = 0;
      [html, extCount] = await externalizeInlineScripts(html, outDir, {
        inlineDir: "assets/inline",
        externalizeModules: true,
        trim: true,
      });
      if (extCount > 0) changed = true;

      // wait for all file reads/hashes
      await Promise.all(pending);

      // swap markers with finalized tags
      for (const [marker, value] of replaceMap) {
        html = html.replace(marker, value);
      }

      if (changed) await fsp.writeFile(htmlPath, html, "utf8");
  }

  console.log(
    `[vitepress-sri] scanned files=${htmlFiles.length}; ` +
      `scripts found=${foundScripts} updated=${updScripts}; ` +
      `styles found=${foundStyles} updated=${updStyles}; ` +
      `modulepreload found=${foundMP} updated=${updMP}`
  );
}
