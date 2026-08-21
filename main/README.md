# Dovecot Community Website

Svelte 5 (runes) + Tailwind CSS v4.

## Quick start

```
npm install
npm run dev        # http://localhost:5173
npm run check      # lint + type-check
npm run build      # production build
npm run preview    # preview production build, http://localhost:4173
```

## Doing a release

1. **Add a news entry** — create `src/lib/data/news/YYYY-MM-DD-dovecot-released.md`:

   ```yaml
   ---
   date: 12 May 2026, 04:14 UTC
   title: Dovecot v2.4.4 released
   link: https://dovecot.org/mailman3/archives/list/dovecot-news@dovecot.org/thread/.../
   ---
   ```

2. **Add security entries (if applicable)** — for each new CVE, create
   `src/lib/data/security/CVE-YYYY-XXXX.md`:

   ```yaml
   ---
   title: CVE-2021-33515
   excerpt: SMTP Submission service STARTTLS injection
   link: https://dovecot.org/pipermail/dovecot-news/2021-June/000462.html
   date: 21 Jun 2021
   ---
   ```

3. Build, deploy, done. The Vite plugin (`scripts/parse-markdown.js`) compiles
   all `.md` files into `news.json` and `security.json` at build time.

## Other data files

Everything else lives under `src/lib/data/`:

| File | Used on |
|---|---|
| `features.json` | `/about` feature cards |
| `repositories.json` | `/download` repo guides |
| `package-categories.json` | `/download` package grouping |
| `pgp-keys.json` | PGP key display on download pages |

The JSON is self-documenting — read the file to see the schema.