<script lang="ts">
	import './layout.css';
	import { SiteLayout } from '@dovecot/shared-ui';
	import logoSrc from '$lib/assets/pigeonhole_logo_only.png?enhanced';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	const canonicalUrl = `https://pigeonhole.dovecot.org${page.url.pathname}`;

	const jsonLdData = JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Pigeonhole", url: "https://pigeonhole.dovecot.org", description: "Sieve mail filtering and ManageSieve protocol support for Dovecot", sameAs: "https://github.com/dovecot/pigeonhole"});

	const navItems = [
		{ name: 'About', href: '/about' },
		{ name: 'Download', href: '/download' },
		{ name: 'Documentation', href: 'https://doc.dovecot.org/', target: '_blank' },
		{ name: 'Support', href: '/support' },
		{ name: 'Dovecot', href: 'https://dovecot.org/', target: '_blank' }
	];
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.ico" />
	<link rel="canonical" href="{canonicalUrl}" />
	<meta name="description" content="Pigeonhole adds Sieve mail filtering and the ManageSieve protocol to Dovecot. Securely compile and execute mail filters at delivery time." />
	<meta property="og:title" content="Pigeonhole - Sieve Support for Dovecot" />
	<meta property="og:description" content="Pigeonhole adds Sieve mail filtering and the ManageSieve protocol to Dovecot." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{canonicalUrl}" />
	{@html '<script type="application/ld+json">' + jsonLdData + '</script>'}
</svelte:head>

<SiteLayout
	{logoSrc}
	logoAlt="Pigeonhole Logo"
	logoTitle="Pigeonhole"
	logoSubtitle="Dovecot Sieve Support"
	logoTitleClass="text-primary-fixed-dim"
	logoSubtitleClass="text-white/60 font-light hidden sm:inline"
	logoImgClass="h-10 w-auto"
	{navItems}
	githubUrl="https://github.com/dovecot/pigeonhole/"
>
	{@render children()}
</SiteLayout>
