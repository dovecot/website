<script lang="ts">
	import './layout.css';
	import { Header, Footer } from '@dovecot/shared-ui';
	import logoSrc from '$lib/assets/logo_only.png?enhanced';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();

	const navItems = [
		{ name: 'Download', href: '/download' },
		{ name: 'Documentation', href: 'https://doc.dovecot.org/', target: '_blank' },
		{ name: 'Support', href: '/support' },
		{ name: 'Security', href: '/security' },
		{ name: 'Pigeonhole', href: 'https://pigeonhole.dovecot.org/', target: '_blank' }
	];

	const ldData = JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Dovecot","url":"https://dovecot.org","logo":"https://dovecot.org/favicon.ico","sameAs":["https://github.com/dovecot/core","https://www.dovecotpro.com"]});
	const jsonLd = '<script type="application/ld+json">' + ldData + '<' + '/script>';
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.ico" />
	<title>Dovecot — The Secure, High Performance Email Server</title>
	<meta name="description" content="Dovecot is the world's most trusted open-source email server. Secure, fast, and fully standards-compliant IMAP and POP3 server." />

	<!-- Open Graph -->
	<meta property="og:title" content="Dovecot — The Secure, High Performance Email Server" />
	<meta property="og:description" content="Dovecot is the world's most trusted open-source email server. Secure, fast, and fully standards-compliant IMAP and POP3 server." />
	<meta property="og:image" content="https://dovecot.org/favicon.ico" />
	<meta property="og:type" content="website" />
	<link rel="canonical" href="https://dovecot.org{page.url.pathname}" />

	{@html jsonLd}
</svelte:head>

<div class="min-h-screen flex flex-col bg-background text-on-background">
	<!-- Skip to content link (WCAG 2.4.1 Bypass Blocks) -->
	<a href="#main-content" class="sr-only absolute top-0 left-0 z-[100] -translate-x-full focus:translate-x-0 bg-primary text-on-primary px-4 py-2 text-sm font-semibold no-underline">
		Skip to main content
	</a>

	<Header
		{logoSrc}
		logoAlt="Dovecot Logo"
		logoTitle="Dovecot"
		logoSubtitle="Community Edition"
		{navItems}
		githubUrl="https://github.com/dovecot/core/"
	/>

	<main id="main-content" class="flex-grow w-full" aria-label="Main content">
		{@render children()}
	</main>

	<Footer
		copyrightName="Open-Xchange Oy"
		githubUrl="https://github.com/dovecot/website/"
		contactUrl="/contact"
		proUrl="https://www.dovecotpro.com/"
	/>
</div>
