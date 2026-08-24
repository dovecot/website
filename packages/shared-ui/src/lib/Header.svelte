<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import GitHubIcon from './GitHubIcon.svelte';

	interface NavItem {
		name: string;
		href: string;
		target?: string;
	}

	let {
		logoSrc,
		logoAlt = 'Logo',
		logoTitle = 'Dovecot',
		logoSubtitle = '',
		logoTitleClass = 'text-white',
		logoSubtitleClass = 'text-white/60 font-light',
		logoImgClass = 'h-8 w-auto',
		logoHref = '/',
		navItems = [],
		githubUrl = 'https://github.com/dovecot/core/'
	} = $props<{
		logoSrc: any;
		logoAlt?: string;
		logoTitle?: string;
		logoSubtitle?: string;
		logoTitleClass?: string;
		logoSubtitleClass?: string;
		logoImgClass?: string;
		logoHref?: string;
		navItems: NavItem[];
		githubUrl?: string;
	}>();

	let mobileMenuOpen = $state(false);
	let mobileNavRef: HTMLElement | undefined = $state();
	let menuToggleRef: HTMLElement | undefined = $state();

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (mobileMenuOpen && menuToggleRef) {
			// Move focus to first nav item when menu opens (WCAG 2.1.2)
			setTimeout(() => {
				const firstLink = mobileNavRef?.querySelector('a');
				firstLink?.focus();
			}, 0);
		}
	}

	function resolveHref(href: string) {
		return /^https?:/.test(href) ? href : `${base}${href}`;
	}
</script>

<header class="bg-inverse-surface border-b border-white/10 shadow-lg w-full sticky top-0 z-50 transition-colors duration-300">
	<div class="flex justify-between items-center w-full px-gutter h-16 max-w-container-max mx-auto">
		<!-- Logo -->
		<a class="flex items-center gap-3 hover:scale-[1.02] active:scale-98 transition-transform" href={resolveHref(logoHref)}>
			<div class="h-8 w-auto flex items-center">
				<enhanced:img alt={logoAlt} class="{logoImgClass} object-contain brightness-100" src={logoSrc} />
			</div>
			<span class="font-sans text-lg text-white select-none flex items-center gap-1.5">
				<span class="font-semibold {logoTitleClass}">{logoTitle}</span>
				{#if logoSubtitle}
					<span class={logoSubtitleClass}>{logoSubtitle}</span>
				{/if}
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-6 justify-end flex-1 h-full overflow-visible" aria-label="Main navigation">
			{#each navItems as item}
				{@const resolved = resolveHref(item.href)}
				{@const isActive = page.url.pathname === resolved}
				<a
					class="h-full flex items-center relative font-body-md text-body-md hover:text-primary-fixed transition-all duration-200 cursor-pointer active:opacity-80 {isActive ? 'text-primary-fixed-dim font-semibold' : 'text-on-primary'}"
					href={resolved}
					{...item.target ? { target: item.target, rel: 'noopener noreferrer' } : {}}
					{...isActive ? { 'aria-current': 'page' } : {}}
				>
					{item.name}
					{#if isActive}
						<div class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-fixed-dim"></div>
					{/if}
				</a>
			{/each}

			<!-- GitHub Repository Link -->
			<a
				href={githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="h-full flex items-center font-body-md text-body-md hover:text-primary-fixed transition-colors duration-200 cursor-pointer active:opacity-80 text-on-primary"
				aria-label="GitHub Repository"
			>
				<GitHubIcon />
			</a>
		</nav>

		<!-- Mobile Navigation Toggle -->
		<div class="flex items-center gap-2 md:hidden">
			<button
				bind:this={menuToggleRef}
				onclick={toggleMobileMenu}
				class="p-2 text-primary-fixed hover:bg-white/10 rounded-lg active:scale-95 transition-transform"
				aria-label="Toggle mobile menu"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-nav"
			>
				{#if mobileMenuOpen}
					<span class="material-symbols" aria-hidden="true" style="font-variation-settings: 'FILL' 0;">close</span>
				{:else}
					<span class="material-symbols" aria-hidden="true" style="font-variation-settings: 'FILL' 0;">menu</span>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Dropdown Drawer -->
	{#if mobileMenuOpen}
		<nav id="mobile-nav" bind:this={mobileNavRef} class="md:hidden bg-inverse-surface/95 backdrop-blur-md border-t border-white/10 px-gutter py-4 flex flex-col gap-4 animate-fade-in absolute w-full left-0 shadow-xl" aria-label="Mobile navigation">
			{#each navItems as item}
				{@const resolved = resolveHref(item.href)}
				{@const isActive = page.url.pathname === resolved}
				<a
					onclick={() => mobileMenuOpen = false}
					class="font-body-md text-body-md py-2 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors {isActive ? 'text-primary-fixed font-semibold bg-white/5' : 'text-on-primary'}"
					href={resolved}
					{...item.target ? { target: item.target, rel: 'noopener noreferrer' } : {}}
					{...isActive ? { 'aria-current': 'page' } : {}}
				>
					{item.name}
				</a>
			{/each}
			<a
				href={githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				onclick={() => mobileMenuOpen = false}
				class="font-body-md text-body-md py-2 px-3 rounded-lg hover:bg-white/5 text-on-primary flex items-center gap-2"
				aria-label="GitHub Repository"
			>
				<GitHubIcon iconClass="w-5 h-5 fill-current" />
				GitHub Repository
			</a>
		</nav>
	{/if}
</header>
