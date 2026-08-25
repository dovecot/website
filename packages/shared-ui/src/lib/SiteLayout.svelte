<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import type { Snippet } from 'svelte';

	export interface SiteLayoutProps {
		logoSrc: string;
		logoAlt?: string;
		logoTitle: string;
		logoSubtitle?: string;
		logoTitleClass?: string;
		logoSubtitleClass?: string;
		logoImgClass?: string;
		navItems: Array<{ name: string; href: string; target?: string }>;
		githubUrl: string;
		copyrightName?: string;
		contactUrl?: string;
		proUrl?: string;
	}

	let {
		logoSrc,
		logoAlt = 'Logo',
		logoTitle,
		logoSubtitle = '',
		logoTitleClass,
		logoSubtitleClass,
		logoImgClass,
		navItems,
		githubUrl,
		copyrightName = 'Open-Xchange Oy',
		contactUrl = '',
		proUrl = '',
		children
	}: SiteLayoutProps & { children: Snippet } = $props();
</script>

<div class="min-h-screen flex flex-col bg-background text-on-background">
	<!-- Skip to content link (WCAG 2.4.1 Bypass Blocks) -->
	<a href="#main-content" class="sr-only absolute top-0 left-0 z-[100] -translate-x-full focus:translate-x-0 bg-primary text-on-primary px-4 py-2 text-sm font-semibold no-underline">
		Skip to main content
	</a>

	<Header
		{logoSrc}
		{logoAlt}
		{logoTitle}
		{logoSubtitle}
		{logoTitleClass}
		{logoSubtitleClass}
		{logoImgClass}
		{navItems}
		{githubUrl}
	/>

	<main id="main-content" class="flex-grow w-full" aria-label="Main content">
		{@render children()}
	</main>

	<Footer
		{copyrightName}
		githubUrl="https://github.com/dovecot/website"
		{contactUrl}
		{proUrl}
	/>
</div>
