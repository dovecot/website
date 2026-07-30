<script lang="ts">
	import { base } from '$app/paths';
	import artworkSrc from '$lib/assets/pigeonhole_artwork.jpg?enhanced';
	import { GitHubIcon } from '@dovecot/shared-ui';

	let activeSlide = $state(0);
	let intervalId: any;
	let isPaused = $state(false);

	const slides = [
		{
			tagText: "",
			tagClass: "text-primary border-primary-container/30 bg-primary-container/10",
			badge: "Sieve Mail Filtering",
			badgeClass: "text-primary",
			badgeIcon: "filter_alt",
			headline: "Sorting and filing email messages with absolute precision and safety.",
			description: "<strong>Pigeonhole</strong> adds <a href='http://www.sieve.info/' target='_blank' rel='noreferrer' class='link-subtle'>Sieve mail filtering</a> and the <a href='http://tools.ietf.org/html/rfc5804' target='_blank' rel='noreferrer' class='link-subtle'>ManageSieve protocol</a> to <a href='https://dovecot.org/' target='_blank' rel='noreferrer' class='link-subtle'>Dovecot</a>. Securely compile and execute mail filters at delivery time, keeping your mail store organized and safe.",
			image: artworkSrc,
			imageAlt: "Pigeonhole Sorting Illustration",
			imageClass: "shadow-2xl border border-outline-variant/30"
		},
	];

	function startInterval() {
		if (slides.length <= 1 || isPaused) return;
		intervalId = setInterval(() => {
			activeSlide = (activeSlide + 1) % slides.length;
		}, 8000);
	}

	function resetInterval() {
		if (slides.length <= 1) return;
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
		if (slides.length > 1) {
			startInterval();
		}
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});

	const features = [
		{
			title: "Admin & User Friendly",
			desc: "Common error messages are made as clear as possible. The compiler reports multiple script errors at once to make debugging more efficient.",
			icon: "display_settings"
		},
		{
			title: "Highly Extensible",
			desc: "Modular design supports third-party Sieve capability plugins through a generic extension interface without changes to core engine code.",
			icon: "extension"
		},
		{
			title: "Backwards Compatible",
			desc: "Completely backwards compatible with the legacy CMUSieve plugin, including support for deprecated Sieve extensions when enabled.",
			icon: "history"
		},
		{
			title: "Sequential Scripts",
			desc: "Supports executing multiple Sieve scripts sequentially. Admins can run scripts before and after personal user scripts safely.",
			icon: "splitscreen"
		},
		{
			title: "Comprehensive Test Suite",
			desc: "Includes an extensible test suite written as a Sieve language extension, ensuring reliable execution and compiler correctness.",
			icon: "fact_check"
		},
		{
			title: "Local Debugging CLI",
			desc: "Ships with the sieve-test tool, a command-line utility that simplifies compiling, executing, and debugging Sieve scripts locally.",
			icon: "terminal"
		}
	];
</script>

<svelte:head>
	<title>Pigeonhole - Sieve Support for Dovecot</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative pt-8 pb-10 px-gutter overflow-hidden bg-grid-pattern transition-colors duration-300">
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none"></div>

	<!-- Slide Container -->
	<div class="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center min-h-[500px] lg:min-h-[550px]">
		<!-- Left: Text Content -->
		<div class="grid grid-cols-1 grid-rows-1 items-start w-full">
			{#each slides as slide, idx}
				<div class="col-start-1 row-start-1 flex flex-col items-start gap-gutter transition-all duration-700 ease-in-out transform {activeSlide === idx ? 'opacity-100 translate-x-0 z-10 pointer-events-auto' : 'opacity-0 -translate-x-4 z-0 pointer-events-none'}" aria-hidden={activeSlide !== idx}>
					<div class="flex flex-col items-start gap-3">
						<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
							<span class="inline-block font-headline-xl text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container select-none  leading-snug">
								Pigeonhole
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
						{slide.headline}
					</h1>
					<p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
						{@html slide.description}
					</p>

					<!-- Buttons -->
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
							href="https://github.com/dovecot/pigeonhole"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon iconClass="w-5 h-5 fill-current" />
							Code
						</a>
						<a
							class="inline-flex items-center justify-center bg-surface hover:bg-surface-dim text-primary border border-outline-variant font-body-md text-body-md font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
							href="https://doc.dovecot.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Documentation
						</a>
					</div>
				</div>
			{/each}
		</div>

		<!-- Right: Graphic Grid -->
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
	{#if slides.length > 1}
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
	{/if}
</section>

<!-- Features Grid Section -->
<section class="py-16 px-gutter bg-surface">
	<div class="max-w-container-max mx-auto">
		<div class="text-center mb-12 flex flex-col items-center">
			<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary shadow-sm">
				<span aria-hidden="true" class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">star</span>
			</div>
			<h2 class="font-headline-xl text-3xl md:text-5xl text-on-background font-extrabold tracking-tight mb-4">Key Features</h2>
			<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
				Built with reliability and extensibility at its core, mimicking Dovecot's robust design.
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
			{#each features as feat}
				<div class="bg-surface-container-lowest rounded-2xl p-gutter border border-outline-variant shadow-[0px_4px_20px_rgba(26,31,43,0.02)] hover:shadow-[0px_8px_30px_rgba(26,31,43,0.06)] transition-shadow duration-300">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">{feat.icon}</span>
					</div>
					<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-3">{feat.title}</h3>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- License CTA -->
<section class="py-12 px-gutter bg-surface-container-low border-t border-outline-variant/30">
	<div class="max-w-2xl mx-auto">
		<!-- License Card -->
		<div class="bg-surface-bright p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between">
			<div>
				<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
					<span aria-hidden="true" class="material-symbols-outlined text-2xl">verified_user</span>
				</div>
				<h3 class="font-headline-lg text-xl text-on-background font-bold mb-3">Open Source License</h3>
				<p class="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
					Pigeonhole is open source and distributed under the same license as Dovecot: the GNU Lesser General Public License (LGPL) version 2.1.
				</p>
			</div>
			<div>
				<a
					href="https://raw.githubusercontent.com/dovecot/pigeonhole/refs/heads/main/COPYING.LGPL"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center bg-white hover:bg-surface-container-low text-primary border border-outline-variant/60 font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
				>
					View LGPL v2.1 License
				</a>
			</div>
		</div>
	</div>
</section>
