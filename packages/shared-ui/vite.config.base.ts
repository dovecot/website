import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import type { PluginOption, UserConfig } from 'vite';

/**
 * Shared Vite configuration for dovecot-website sites.
 * Each site imports this and merges site-specific overrides.
 */
export async function createViteConfig(overrides: UserConfig = {}): Promise<UserConfig> {
	const [tw, img, kit] = await Promise.all([
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
				// @ts-expect-error
				base: typeof process !== 'undefined' && process.env.BASE_PATH ? process.env.BASE_PATH : ''
			}
		})
	]);
	const plugins: PluginOption[] = [...tw, ...img, ...kit];
	return {
		plugins,
		...overrides
	};
}
