<script lang="ts">
	import { base } from '$app/paths';
	import newsData from '$lib/data/news.json';
	import features from '$lib/data/features.json';
	const updates = newsData.slice(0, 3);

	import logoSrc from '$lib/assets/logo.png?enhanced';
	import anniversaryImgSrc from '$lib/assets/anniversary.png?enhanced';
	import { GitHubIcon } from '@dovecot/shared-ui';

	const proLogoSrc = "https://www.dovecotpro.com/hs-fs/hubfs/Dovecot%20Pro%20logo%20web%20header.png";

	let activeSlide = $state(0);
	let intervalId: any;
	let isPaused = $state(false);

	const slides = [
		{
			tagText: "",
			tagClass: "text-on-surface-variant border-outline-variant bg-surface-container-low",
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
			tagText: "",
			tagClass: "text-tertiary border-tertiary-container/30 bg-tertiary-container/10",
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

	function startInterval() {
		if (isPaused) return;
		intervalId = setInterval(() => {
			activeSlide = (activeSlide + 1) % slides.length;
		}, 8000);
	}

	function resetInterval() {
		if (intervalId) {
			clearInterval(intervalId);
		}
		startInterval();
	}

	function togglePause() {
		isPaused = !isPaused;
		if (isPaused) {
			if (intervalId) clearInterval(intervalId);
		} else {
			startInterval();
		}
	}

	$effect(() => {
		startInterval();
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});
</script>

<!-- Hero Section -->
<section class="relative pt-8 pb-10 px-gutter overflow-hidden bg-grid-pattern transition-colors duration-300">
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none"></div>

	<!-- Slide Container (relative, overlays) -->
	<div class="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[500px] lg:min-h-[550px]">
		<!-- Left: Text Content Grid (cross-faded) -->
		<div class="grid grid-cols-1 grid-rows-1 items-start w-full">
			{#each slides as slide, idx}
				<div class="col-start-1 row-start-1 flex flex-col items-start gap-gutter transition-all duration-700 ease-in-out transform {activeSlide === idx ? 'opacity-100 translate-x-0 z-10 pointer-events-auto' : 'opacity-0 -translate-x-4 z-0 pointer-events-none'}" aria-hidden={activeSlide !== idx}>
					<div class="flex flex-col items-start gap-3">
						<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
							<span class="font-headline-xl text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container select-none">
								Dovecot
							</span>
							{#if slide.tagText}
								<span class="text-xs uppercase tracking-widest font-bold border px-2.5 py-0.5 rounded {slide.tagClass}">
									{slide.tagText}
								</span>
							{/if}
						</div>
						<div class="inline-block bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
							<span class="font-label-md text-label-md tracking-widest uppercase flex items-center gap-1.5 {slide.badgeClass}">
								{#if slide.badgeIcon}
									<span aria-hidden="true" class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">{slide.badgeIcon}</span>
								{/if}
								{slide.badge}
							</span>
						</div>
					</div>
					<h1 class="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background max-w-2xl font-bold leading-tight">
						{@html slide.headline}
					</h1>
					<p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
						{slide.description}
					</p>

					<!-- Buttons (Same for both slides) -->
					<div class="flex flex-wrap gap-4 mt-2">
						<a
							class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm cursor-pointer gap-2"
							href="{base}/download"
						>
							<span aria-hidden="true" class="material-symbols-outlined text-xl">download</span>
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
					</div>
				</div>
			{/each}
		</div>

		<!-- Right: Graphic Grid (cross-faded with zoom effect) & Arrows underneath -->
		<div class="flex flex-col items-center gap-4 w-full">
			<div class="relative w-full h-[400px] lg:h-[500px] grid grid-cols-1 grid-rows-1 justify-center items-center">
				<div class="absolute inset-0 bg-primary-container/10 rounded-full blur-3xl scale-150 -z-10"></div>
				{#each slides as slide, idx}
					<div class="col-start-1 row-start-1 flex justify-center items-center transition-all duration-700 ease-in-out transform {activeSlide === idx ? 'opacity-100 scale-100 z-10 pointer-events-auto' : 'opacity-0 scale-95 z-0 pointer-events-none'}" aria-hidden={activeSlide !== idx}>
						<enhanced:img alt={slide.imageAlt} class="max-w-md w-full h-auto object-contain rounded-2xl {slide.imageClass}" src={slide.image} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Dot Indicators + Pause/Play (WCAG 2.2.1 Timing Adjustable) -->
	<div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-25">
		{#each slides as _, idx}
			<button
				onclick={() => { activeSlide = idx; resetInterval(); }}
				class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer {activeSlide === idx ? 'bg-primary w-6' : 'bg-outline-variant/60 hover:bg-outline-variant'}"
				aria-label="Go to slide {idx + 1}"
			></button>
		{/each}
		<button
			onclick={togglePause}
			class="ml-2 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-on-surface transition-colors cursor-pointer"
			aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
		>
			<span aria-hidden="true" class="material-symbols-outlined text-sm">{isPaused ? 'play_arrow' : 'pause'}</span>
		</button>
	</div>

	<!-- Aria-live for slide changes (WCAG 4.1.3) -->
	<div aria-live="polite" class="sr-only">
		Slide {activeSlide + 1} of {slides.length}: {slides[activeSlide].badge}
	</div>
</section>

<!-- Dovecot Pro Promo Section -->
<section class="bg-gradient-to-r from-[#0e0d10] via-[#2d1543] to-[#3c036d] relative overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#861be4]/20 via-transparent to-transparent pointer-events-none"></div>
	<div class="max-w-container-max mx-auto px-gutter py-gutter md:py-12 flex flex-col md:flex-row items-center justify-between gap-gutter relative z-10">
		<div class="flex-1">
			<div class="bg-white/10 backdrop-blur-sm inline-block p-4 rounded-xl mb-6 border border-white/10">
				<img alt="Dovecot Pro" class="h-10 w-auto object-contain" src={proLogoSrc}>
			</div>
			<h2 class="font-['Space_Grotesk',sans-serif] text-2xl md:text-4xl font-medium tracking-[0.02em] leading-tight text-white mb-4">Need Enterprise-Grade Scalability?</h2>
			<p class="font-['Ubuntu_Sans',sans-serif] text-base md:text-lg leading-[1.75] text-white/85 max-w-2xl">
				Dovecot Pro is a full-service email platform that delivers dynamic scalability, high performance, efficient utilization of hardware, and outstanding support to the world's largest Telcos, ISPs, and Hosters.
			</p>
		</div>
		<div class="shrink-0 w-full md:w-auto text-center">
			<a
				class="font-['Space_Grotesk',sans-serif] text-base font-medium tracking-[0.02em] inline-flex items-center justify-center bg-[#861be4] hover:bg-[#4a117b] text-white px-8 py-4 rounded-[14px] transition-all shadow-lg shadow-[#861be4]/30 hover:shadow-[#861be4]/50 cursor-pointer w-full md:w-auto border border-white/10"
				href="https://www.dovecotpro.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn More about Dovecot Pro
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
				View all news <span aria-hidden="true" class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
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
						<span aria-hidden="true" class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">north_east</span>
					</div>
				</a>
			{/each}
		</div>
		<div class="mt-6 text-center sm:hidden">
			<a class="inline-flex items-center text-primary font-semibold hover:text-primary-container transition-colors" href="{base}/news">
				View all news <span aria-hidden="true" class="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
			</a>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<div class="flex justify-between items-end mb-gutter">
			<h2 class="font-headline-xl text-3xl md:text-4xl text-on-background font-extrabold tracking-tight">Features</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
			{#each features as feat}
				<div class="bg-surface-container-lowest rounded-2xl p-gutter border border-outline-variant shadow-[0px_4px_20px_rgba(26,31,43,0.02)] hover:shadow-[0px_8px_30px_rgba(26,31,43,0.06)] transition-shadow duration-300">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">{feat.icon}</span>
					</div>
					<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-3">{feat.title}</h3>
					<p class="font-body-md text-body-md text-on-surface-variant">{@html feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Open Source -->
<section class="py-10 px-gutter border-t border-outline-variant/30">
	<div class="max-w-container-max mx-auto flex justify-center items-center gap-3">
		<div class="w-8 h-8 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
			<span aria-hidden="true" class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">verified</span>
		</div>
		<p class="font-body-md text-base text-on-surface-variant text-center">
			Dovecot Community Edition is open source, distributed under the
			<a class="text-primary font-semibold hover:text-primary-container transition-colors" href="https://raw.githubusercontent.com/dovecot/core/refs/heads/main/COPYING" target="_blank" rel="noopener noreferrer">LGPLv2.1 license</a>
			(with a few exceptions).
		</p>
	</div>
</section>


