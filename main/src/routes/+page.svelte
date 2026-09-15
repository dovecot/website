<script lang="ts">
	import { base } from '$app/paths';
	import newsData from '$lib/data/news.json';
	const updates = newsData.slice(0, 3);

	import logoSrc from '$lib/assets/logo.png?enhanced';
	import anniversaryImgSrc from '$lib/assets/anniversary.png?enhanced';
	import { GitHubIcon, HeroCarousel } from '@dovecot/shared-ui';

	import proLogoSrc from '$lib/assets/pro-logo.png?enhanced';

	const slides = [
		{
			badge: "The Secure, High Performance Email Server",
			badgeClass: "text-primary",
			badgeIcon: "",
			headline: "Powering over <a href='https://openemailsurvey.org/' class='link-subtle'>75%</a> of the World’s Email Servers.",
			description: "Dovecot Community Edition is the world's most trusted open-source email server. Secure by design and fully standards-compliant, it delivers exceptional performance with effortless migration and self-healing reliability.",
			image: logoSrc,
			imageAlt: "Dovecot Logo",
			imageClass: "max-w-l"
		},
		{
			badge: "Celebrating 25 Years",
			badgeClass: "text-tertiary",
			badgeIcon: "workspace_premium",
			headline: "A Quarter Century of Keeping the World Connected.",
			description: "Since our first release in 2002, Dovecot has set the benchmark for fast, secure, and compliant mail servers. We celebrate 25 years of open-source excellence, shaped by the community and trusted by millions worldwide. Thank you to the global community of developers and administrators who have trusted and built with us during this time.",
			image: anniversaryImgSrc,
			imageAlt: "Dovecot 25th Anniversary Graphic",
			imageClass: "shadow-lg border border-outline-variant/30"
		}
	];
</script>

{#snippet heroTitle()}
	<span class="font-headline-xl text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container select-none" role="heading" aria-level="1">
		Dovecot
	</span>
{/snippet}

{#snippet heroActions()}
		<a
				class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm cursor-pointer gap-2"
				href="{base}/download"
			>
				<span aria-hidden="true" class="material-symbols text-xl">download</span>
				Download
			</a>
			<a
				class="inline-flex items-center justify-center bg-surface hover:bg-surface-dim text-primary border border-outline-variant font-body-md text-body-md font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer gap-2"
				href="https://github.com/dovecot/core"
				target="_blank"
				rel="noopener noreferrer"
			>
				<GitHubIcon iconClass="w-5 h-5 fill-current" />
				Code
			</a>
			<a
				class="inline-flex items-center justify-center bg-surface hover:bg-surface-dim text-primary border border-outline-variant font-body-md text-body-md font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
				href="https://doc.dovecot.org/"
			>
				Documentation
			</a>
{/snippet}

<!-- Hero Section -->
<HeroCarousel slides={slides} title={heroTitle} actions={heroActions} />

<!-- Dovecot Pro Promo Section -->
<section class="bg-gradient-to-r from-[#0e0d10] via-[#2d1543] to-[#3c036d] relative overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#861be4]/20 via-transparent to-transparent pointer-events-none"></div>
	<!-- Subtle background watermark -->
	<div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
		<enhanced:img alt="" class="w-[600px] md:w-[800px] opacity-[0.06] blur-[1px] select-none" src={proLogoSrc} />
	</div>
	<div class="max-w-container-max mx-auto px-gutter py-gutter md:py-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-gutter">
		<div class="flex-1 max-w-2xl">
			<h2 class="font-['Space_Grotesk',sans-serif] text-2xl md:text-4xl font-medium tracking-[0.02em] leading-tight text-white mb-4">From Mail Server to Mail Infrastructure</h2>
			<p class="font-['Ubuntu_Sans',sans-serif] text-base md:text-lg leading-[1.75] text-white/85">
				Stop piecing together your architecture. Dovecot Pro seamlessly evolves the core power of Dovecot into a fully supported, comprehensive, high-availability platform. Get the rock-solid stability, architectural optimization, and dynamic scalability required by the world's most demanding service providers.
			</p>
		</div>
		<div class="shrink-0">
			<a
				class="font-['Space_Grotesk',sans-serif] text-base font-medium tracking-[0.02em] inline-flex items-center justify-center bg-[#861be4]/50 hover:bg-[#4a117b]/70 text-white px-8 py-4 rounded-[14px] transition-all shadow-lg shadow-[#861be4]/30 hover:shadow-[#861be4]/50 cursor-pointer border border-white/10"
				href="https://www.dovecotpro.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Discover Dovecot Pro
			</a>
		</div>
	</div>
</section>

<!-- News Section (Bento Grid) -->
<section class="py-margin-desktop px-gutter bg-surface-container-lowest border-y border-outline-variant/30">
	<div class="max-w-container-max mx-auto">
		<div class="flex justify-between items-end mb-gutter">
			<h2 class="font-headline-xl text-3xl md:text-4xl text-on-background font-extrabold tracking-tight">Latest Updates</h2>
			<a class="hidden sm:inline-flex items-center text-primary font-semibold hover:text-primary-container transition-colors" href="{base}/news">
				View all news <span aria-hidden="true" class="material-symbols ml-1 text-sm">arrow_forward</span>
			</a>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
			{#each updates as card}
				<a
					class="group flex flex-col justify-between bg-surface-bright rounded-xl p-gutter border border-outline-variant shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 relative overflow-hidden"
					href={card.href.startsWith('/') ? base + card.href : card.href}
				>
					{#if card.isSecurity}
						<div class="absolute top-0 left-0 w-full h-1 bg-error"></div>
					{/if}
					<div>
						<div class="flex items-center gap-2 mb-4">
							{#if card.isSecurity}
								<span class="bg-error-container text-error px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Security</span>
							{:else}
								<span class="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">Release</span>
							{/if}
							<span class="text-sm text-outline">{card.date}</span>
						</div>
						<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface group-hover:text-primary transition-colors">
							{card.title}
						</h3>
					</div>
					<div class="mt-6 flex justify-end">
						<span aria-hidden="true" class="material-symbols text-outline group-hover:text-primary transition-colors">north_east</span>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-6 text-center sm:hidden">
			<a class="inline-flex items-center text-primary font-semibold hover:text-primary-container transition-colors" href="{base}/news">
				View all news <span aria-hidden="true" class="material-symbols ml-1 text-sm">arrow_forward</span>
			</a>
		</div>
	</div>
</section>

<!-- Open Source -->
<section class="py-6 px-gutter border-t border-b border-outline-variant/30">
	<div class="max-w-container-max mx-auto flex justify-center items-center gap-3">
		<div class="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
			<span aria-hidden="true" class="material-symbols text-xl" style="font-variation-settings: 'FILL' 1;">verified</span>
		</div>
		<p class="font-body-md text-base text-on-surface-variant text-center">
			Dovecot Community Edition is open source, distributed under the
			<a class="text-primary font-semibold hover:text-primary-container transition-colors" href="https://raw.githubusercontent.com/dovecot/core/refs/heads/main/COPYING" target="_blank" rel="noopener noreferrer">LGPLv2.1 license</a>
			(with a few exceptions).
		</p>
	</div>
</section>


