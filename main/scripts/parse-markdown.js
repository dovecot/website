// @ts-nocheck
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function normalizeDate(dateStr) {
  if (/^\d{1,2}\s\w{3}\s\d{4}$/.test(dateStr)) {
    const [day, mon, year] = dateStr.split(/\s+/);
    return `${String(day).padStart(2, '0')} ${mon} ${year}`;
  }
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${String(d.getUTCDate()).padStart(2, '0')} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const projectRoot = path.resolve(__dirname, '..');
const newsDir = path.join(projectRoot, 'src/lib/data/news');
const securityDir = path.join(projectRoot, 'src/lib/data/security');
const outputNews = path.join(projectRoot, 'src/lib/data/news.json');
const outputSecurity = path.join(projectRoot, 'src/lib/data/security.json');

const dateSort = (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime();

function parseMarkdownDir(dirPath, outputFile, fields) {
	const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
	const items = files.map(file => {
		const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
		const { data, content: body } = matter(content);
		return fields(file, data, body);
	});

	items.sort(dateSort);

	fs.writeFileSync(outputFile, JSON.stringify(items, null, 2));
	console.log(`Generated ${outputFile} with ${items.length} items.`);
}

export function parseMarkdown() {
	fs.mkdirSync(path.join(projectRoot, 'src/lib/data'), { recursive: true });

	// --- 1. Parse News ---
	if (fs.existsSync(newsDir)) {
		parseMarkdownDir(newsDir, outputNews,
			(file, data, body) => {
				const id = file.replace('.md', '');
				const title = data.title || 'Untitled Update';
				const dateStr = data.date || 'Unknown Date';
				const externalLink = data.link || '';

				const isSecurity = id.includes('advisory') || id.includes('cve') || title.toLowerCase().includes('security') || title.toLowerCase().includes('cve');

				let desc;
				if (body.trim()) {
					desc = body.trim();
				} else if (isSecurity) {
					desc = `Security advisory: ${title}.`;
				} else {
					desc = 'Release update for Dovecot.';
				}

				return {
					id,
					type: isSecurity ? 'Security' : 'Release',
					date: normalizeDate(dateStr),
					title,
					desc,
					isSecurity,
					href: externalLink || `/news/${id}`
				};
			}
		);
	}

	// --- 2. Parse CVEs ---
	if (fs.existsSync(securityDir)) {
		parseMarkdownDir(securityDir, outputSecurity, (file, data, body) => {
			const id = file.replace('.md', '');
			const title = data.title || id;
			const excerpt = data.excerpt || '';
			const link = data.link || '';
			const dateStr = data.date || 'Unknown Date';

			let severity = 'moderate';
			const text = `${title} ${excerpt}`.toLowerCase();
			if (text.includes('remote code execution') || text.includes('privilege escalation') || text.includes('rce') || text.includes('high severity')) {
				severity = 'high';
			} else if (text.includes('low severity') || text.includes('minor')) {
				severity = 'low';
			}

			return {
				id,
				title,
				severity,
				date: normalizeDate(dateStr),
				description: excerpt || body.trim() || `Security advisory regarding ${title}.`,
				link
			};
		});
	}
}

export function parseMarkdownPlugin() {
	return {
		name: 'parse-markdown',
		buildStart() {
			parseMarkdown();
		},
		configureServer(server) {
			const watcher = server.watcher;
			watcher.add([newsDir, securityDir]);
			
			const onChange = (filePath) => {
				const relativePath = path.normalize(filePath);
				if (relativePath.startsWith(newsDir) || relativePath.startsWith(securityDir)) {
					if (relativePath.endsWith('.md')) {
						server.config.logger.info(`[parse-markdown] Markdown file changed: ${path.basename(filePath)}. Regenerating JSON...`);
						try {
							parseMarkdown();
						} catch (err) {
							server.config.logger.error(`[parse-markdown] Error parsing markdown: ${err.message}`);
						}
					}
				}
			};

			watcher.on('add', onChange);
			watcher.on('change', onChange);
			watcher.on('unlink', onChange);
		}
	};
}

const isMain = process.argv[1] && fs.realpathSync(process.argv[1]) === fs.realpathSync(__filename);
if (isMain) {
	parseMarkdown();
}
