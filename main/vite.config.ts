import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { parseMarkdownPlugin } from './scripts/parse-markdown.js';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { svelteSitemap } from 'svelte-sitemap/vite';

export default defineConfig({
	plugins: [
		parseMarkdownPlugin(),
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			preprocess: vitePreprocess(),
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			paths: {
				// @ts-ignore
				base: typeof process !== 'undefined' && process.env.BASE_PATH ? process.env.BASE_PATH : ''
			}
		}),
		svelteSitemap({ domain: 'https://dovecot.org' }),
	]
});

