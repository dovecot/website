import { defineConfig } from 'vite';
import { svelteSitemap } from 'svelte-sitemap/vite';
import { createViteConfig } from '../packages/shared-ui/vite.config.base.js';

export default defineConfig(async () => {
	const base = await createViteConfig();
	const plugins = [...(base.plugins ?? []), svelteSitemap({ domain: 'https://pigeonhole.dovecot.org' })];
	return { ...base, plugins };
});
