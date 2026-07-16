<script lang="ts">
	import './layout.css';
	import { Header, Footer } from '@dovecot/shared-ui';
	import logoSrc from '$lib/assets/pigeonhole_logo_only.png?enhanced';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let { children } = $props();

	const navItems = [
		{ name: 'About', href: '/about' },
		{ name: 'Download', href: '/download' },
		{ name: 'Documentation', href: 'https://doc.dovecot.org/', target: '_blank' },
		{ name: 'Support', href: '/support' },
		{ name: 'Dovecot', href: 'https://dovecot.org/', target: '_blank' }
	];

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.ico" />
	<title>Pigeonhole - Sieve Support for Dovecot</title>
	<meta name="description" content="Pigeonhole adds Sieve mail filtering and the ManageSieve protocol to Dovecot. Securely compile and execute mail filters at delivery time." />
</svelte:head>

<div class="min-h-screen flex flex-col transition-colors duration-300 bg-background text-on-background dark:bg-inverse-surface/35 dark:text-on-surface">
	<!-- Skip to content link (WCAG 2.4.1 Bypass Blocks) -->
	<a href="#main-content" class="sr-only absolute top-0 left-0 z-[100] -translate-x-full focus:translate-x-0 bg-primary text-on-primary px-4 py-2 text-sm font-semibold no-underline">
		Skip to main content
	</a>

	<Header
		{logoSrc}
		logoAlt="Pigeonhole Logo"
		logoTitle="Pigeonhole"
		logoSubtitle="Dovecot Sieve Support"
		logoTitleClass="text-primary-fixed-dim"
		logoSubtitleClass="text-white/60 font-light hidden sm:inline"
		logoImgClass="h-10 w-auto"
		{navItems}
		githubUrl="https://github.com/dovecot/pigeonhole/"
	/>

	<main id="main-content" class="flex-grow w-full" aria-label="Main content">
		{@render children()}
	</main>

	<Footer
		copyrightName="Open-Xchange Oy"
		githubUrl="https://github.com/dovecot/website/"
	/>
</div>
