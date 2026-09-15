<script lang="ts">
	import type { Snippet } from 'svelte';

	export interface HeroSlide {
		badge: string;
		badgeClass?: string;
		badgeIcon?: string;
		headline: string;
		description: string;
		image: any;
		imageAlt: string;
		imageClass?: string;
	}

	let {
		slides,
		title,
		actions,
		intervalMs = 12000
	}: {
		slides: HeroSlide[];
		title: Snippet;
		actions: Snippet;
		intervalMs?: number;
	} = $props();

	let activeSlide = $state(0);
	let intervalId: any;
	let isPaused = $state(false);

	const rotating = $derived(slides.length > 1);

	function startInterval() {
		if (!rotating || isPaused) return;
		intervalId = setInterval(() => {
			activeSlide = (activeSlide + 1) % slides.length;
		}, intervalMs);
	}

	function resetInterval() {
		if (!rotating) return;
		if (intervalId) clearInterval(intervalId);
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
		if (rotating) startInterval();
		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

<section class="relative pt-16 pb-16 px-gutter overflow-hidden bg-grid-pattern transition-colors duration-300">
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none"></div>

	<!-- Slide Container (relative, overlays) -->
	<div class="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
		<!-- Left: Static Title + Rotating Slide Content -->
		<div class="flex flex-col items-start gap-gutter w-full">
			<!-- Static Title -->
			{@render title()}
			<!-- Rotating Slide Content (badge, headline, description) -->
			<div class="grid grid-cols-1 grid-rows-1 items-start w-full">
				{#each slides as slide, idx}
					<div class="col-start-1 row-start-1 flex flex-col items-start gap-gutter transition-all duration-700 ease-in-out transform {activeSlide === idx ? 'opacity-100 translate-x-0 z-10 pointer-events-auto' : 'opacity-0 -translate-x-4 z-0 pointer-events-none'}" aria-hidden={activeSlide !== idx}>
						<div class="flex flex-col items-start gap-3">
							<div class="inline-block bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
								<span class="font-label-md text-label-md tracking-widest uppercase flex items-center gap-1.5 {slide.badgeClass ?? ''}">
									{#if slide.badgeIcon}
										<span aria-hidden="true" class="material-symbols text-sm" style="font-variation-settings: 'FILL' 1;">{slide.badgeIcon}</span>
									{/if}
									{slide.badge}
								</span>
							</div>
						</div>
						<h2 class="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background max-w-2xl font-bold leading-tight">
							{@html slide.headline}
						</h2>
						<p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
							{@html slide.description}
						</p>
					</div>
				{/each}
			</div>
			<!-- Static Buttons (Same for all slides) -->
			<div class="flex flex-wrap gap-4 mt-2">
				{@render actions()}
			</div>
		</div>

		<!-- Right: Graphic Grid (cross-faded with zoom effect) -->
		<div class="flex flex-col items-center gap-4 w-full">
			<div class="relative w-full grid grid-cols-1 grid-rows-1 justify-center items-center">
				<div class="absolute inset-0 bg-primary-container/10 rounded-full blur-3xl scale-150 -z-10"></div>
				{#each slides as slide, idx}
					<div class="col-start-1 row-start-1 flex justify-center items-center transition-all duration-700 ease-in-out transform {activeSlide === idx ? 'opacity-100 scale-100 z-10 pointer-events-auto' : 'opacity-0 scale-95 z-0 pointer-events-none'}" aria-hidden={activeSlide !== idx}>
						<enhanced:img alt={slide.imageAlt} class="max-w-md w-full h-auto object-contain rounded-2xl {slide.imageClass ?? ''}" src={slide.image} />
					</div>
				{/each}
			</div>
		</div>
	</div>

	{#if rotating}
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
				class="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-on-surface transition-colors cursor-pointer flex items-center justify-center"
				aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
			>
				<span aria-hidden="true" class="material-symbols text-xs">{isPaused ? 'play_arrow' : 'pause'}</span>
			</button>
		</div>

		<!-- Aria-live for slide changes (WCAG 4.1.3) -->
		<div aria-live="polite" class="sr-only">
			Slide {activeSlide + 1} of {slides.length}: {slides[activeSlide].badge}
		</div>
	{/if}
</section>
