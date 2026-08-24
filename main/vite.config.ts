import { defineConfig } from 'vite';
import { parseMarkdownPlugin } from './scripts/parse-markdown.js';
import { svelteSitemap } from 'svelte-sitemap/vite';
import { createViteConfig } from '../packages/shared-ui/vite.config.base.js';

export default defineConfig(async () => {
	const base = await createViteConfig();
	const plugins = [...(base.plugins ?? []), parseMarkdownPlugin(), svelteSitemap({ domain: 'https://dovecot.org' })];
	return { ...base, plugins };
});
