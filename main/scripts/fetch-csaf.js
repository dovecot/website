// @ts-nocheck
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CSAF_ROOT = 'https://documentation.open-xchange.com/dovecot/security/advisories/csaf/';

const projectRoot = path.resolve(__dirname, '..');
const legacySecurityPath = path.join(projectRoot, 'src/lib/data/legacy-security.json');
const outputSecurity = path.join(projectRoot, 'src/lib/data/security.json');

const DUMMY_ENTRY = [
	{
		id: 'CVE-0000-00000',
		severity: 'moderate',
		date: '01 Jan 2024',
		description:
			'Dev mode placeholder — CSAF data not fetched. Run npm run dev-production to fetch real data.',
		link: ''
	}
];

// --- Date helpers ---

function normalizeDate(isoDate) {
	const d = new Date(isoDate);
	if (isNaN(d)) return isoDate;
	const months = [
		'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
	];
	return `${String(d.getUTCDate()).padStart(2, '0')} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// --- Severity helpers ---

function normalizeSeverity(baseSeverity) {
	return { HIGH: 'high', CRITICAL: 'high', LOW: 'low' }[(baseSeverity || '').toUpperCase()] || 'moderate';
}

// --- CE product filtering helpers ---

/**
 * Collects the product IDs that belong to the "OX Dovecot CE" branch.
 * Returns null when the product_tree has no such branch (pre-split era,
 * where "OX Dovecot Pro core" covered both Pro and CE — show everything).
 */
function collectCeProductIds(productTree) {
	for (const vendorBranch of productTree?.branches || []) {
		for (const productBranch of vendorBranch.branches || []) {
			if (productBranch.name !== 'OX Dovecot CE') continue;
			const ceIds = new Set();
			for (const versionBranch of productBranch.branches || []) {
				if (versionBranch.product?.product_id) {
					ceIds.add(versionBranch.product.product_id);
				}
			}
			return ceIds;
		}
	}
	return null;
}

// Post-split: show only if a CE product ID appears in known/last_affected.
function affectsCe(vulnerability, ceIds) {
	if (!ceIds) return true; // pre-split or no product_tree: Pro core == CE
	const status = vulnerability.product_status || {};
	const candidates = [...(status.known_affected || []), ...(status.last_affected || [])];
	return candidates.some((id) => ceIds.has(id));
}

// Post-split: prefer the score entry whose products list includes a CE product ID.
function pickSeverity(vulnerability, ceIds) {
	const scores = vulnerability.scores || [];
	if (!scores.length) return 'moderate';

	if (ceIds) {
		const ceScore = scores.find((s) => (s.products || []).some((p) => ceIds.has(p)));
		if (ceScore) return normalizeSeverity(ceScore.cvss_v3?.baseSeverity);
	}

	return normalizeSeverity(scores[0]?.cvss_v3?.baseSeverity);
}

// --- CSAF file parsing ---

/**
 * Parses a single CSAF document into zero or more normalized CVE records.
 * Only records that affect Community Edition are returned.
 */
function parseCsafFile(csaf) {
	const ceIds = collectCeProductIds(csaf.product_tree);

	const date = normalizeDate(csaf.document.tracking.current_release_date);

	const htmlRef = (csaf.document.references || []).find(
		(r) => r.summary === 'HTML representation'
	);
	const link = htmlRef?.url || '';

	const entries = [];
	for (const vuln of csaf.vulnerabilities || []) {
		if (!affectsCe(vuln, ceIds)) continue;

		const description =
			(vuln.notes || []).find((n) => n.category === 'description')?.text || vuln.title || '';
		const severity = pickSeverity(vuln, ceIds);

		entries.push({
			id: vuln.cve,
			severity,
			date,
			description,
			link
		});
	}
	return entries;
}

// --- Fetch + verify ---

/**
 * Fetches a CSAF JSON file from the given URL, verifies its SHA-512 checksum,
 * and returns the parsed JSON object.
 * Throws on network errors or checksum mismatches.
 */
async function fetchAndVerify(url) {
	const [jsonRes, shaRes] = await Promise.all([fetch(url), fetch(`${url}.sha512`)]);

	if (!jsonRes.ok) throw new Error(`Failed to fetch ${url}: HTTP ${jsonRes.status}`);
	if (!shaRes.ok)
		throw new Error(`Failed to fetch checksum for ${url}: HTTP ${shaRes.status}`);

	const jsonText = await jsonRes.text();
	const shaText = (await shaRes.text()).trim();

	// GNU coreutils ("<hash>  <filename>"), BSD ("SHA512 (file) = <hash>"), or bare hash.
	const expectedHash = shaText.match(/[0-9a-f]{128}/)?.[0] ?? '';

	const actualHash = crypto.createHash('sha512').update(jsonText).digest('hex');

	if (actualHash !== expectedHash) {
		throw new Error(
			`SHA-512 checksum mismatch for ${url}\n` +
				`  expected: ${expectedHash}\n` +
				`  actual:   ${actualHash}`
		);
	}

	return JSON.parse(jsonText);
}

// --- Main pipeline ---

/**
 * Fetches all CSAF advisories, merges with legacy local data,
 * and writes the result to security.json.
 */
export async function fetchAndMerge(logger) {
	logger?.info('[fetch-csaf] Fetching CSAF index...');

	const indexRes = await fetch(`${CSAF_ROOT}index.txt`);
	if (!indexRes.ok)
		throw new Error(`Failed to fetch CSAF index: HTTP ${indexRes.status}`);

	const indexText = await indexRes.text();
	const advisoryPaths = indexText
		.split('\n')
		.map((l) => l.trim())
		.filter(Boolean);

	logger?.info(`[fetch-csaf] Found ${advisoryPaths.length} advisories in index.`);

	const csafEntries = [];
	for (const relPath of advisoryPaths) {
		const url = `${CSAF_ROOT}${relPath}`;
		logger?.info(`[fetch-csaf] Fetching ${relPath}...`);
		const csaf = await fetchAndVerify(url);
		const entries = parseCsafFile(csaf);
		logger?.info(`[fetch-csaf]   → ${entries.length} CE CVE(s) extracted.`);
		csafEntries.push(...entries);
	}

	const legacy = JSON.parse(fs.readFileSync(legacySecurityPath, 'utf8'));

	// Deduplicate by CVE ID (CSAF takes precedence over legacy if both somehow exist)
	const seen = new Set();
	const merged = [];
	for (const entry of [...csafEntries, ...legacy]) {
		if (!seen.has(entry.id)) {
			seen.add(entry.id);
			merged.push(entry);
		}
	}

	merged.sort((a, b) => new Date(b.date) - new Date(a.date));

	fs.writeFileSync(outputSecurity, JSON.stringify(merged, null, 2));
	logger?.info(
		`[fetch-csaf] Wrote ${outputSecurity} — ` +
			`${merged.length} total entries (${csafEntries.length} from CSAF, ${legacy.length} legacy).`
	);
}

// --- Vite plugin ---

export function fetchCsafPlugin() {
	let mode = 'production';
	let viteLogger;

	return {
		name: 'fetch-csaf',

		configResolved(config) {
			mode = config.mode;
			viteLogger = config.logger;
		},

		async buildStart() {
			if (mode === 'development') {
				fs.writeFileSync(outputSecurity, JSON.stringify(DUMMY_ENTRY, null, 2));
				viteLogger?.info(
					'[fetch-csaf] Dev mode: writing dummy security entry (no CSAF fetch).'
				);
			} else {
				await fetchAndMerge(viteLogger);
			}
		}
	};
}

// Allow running as a standalone script: node scripts/fetch-csaf.js
const isMain =
	process.argv[1] && fs.realpathSync(process.argv[1]) === fs.realpathSync(__filename);
if (isMain) {
	fetchAndMerge(console).catch((err) => {
		console.error(err);
		process.exit(1);
	});
}
