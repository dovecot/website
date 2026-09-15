<script lang="ts">
	import { base } from '$app/paths';
	import artworkSrc from '$lib/assets/pigeonhole_artwork.jpg?enhanced';
	import { GitHubIcon, HeroCarousel } from '@dovecot/shared-ui';
	import rawSlides from '$lib/data/slides.json';
	import rawFeatures from '$lib/data/features.json';

	const slides = rawSlides.map(slide => ({ ...slide, image: artworkSrc }));
	const features = rawFeatures;
</script>

<svelte:head>
	<title>Pigeonhole - Sieve Support for Dovecot</title>
</svelte:head>

{#snippet heroTitle()}
	<span class="inline-block font-headline-xl text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-container select-none leading-snug" role="heading" aria-level="1">
		Pigeonhole
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
{/snippet}

<!-- Hero Section -->
<HeroCarousel slides={slides} title={heroTitle} actions={heroActions} />

<!-- Features Grid Section -->
<section class="py-16 px-gutter bg-surface">
	<div class="max-w-container-max mx-auto">
		<div class="text-center mb-12 flex flex-col items-center">
			<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary shadow-sm">
				<span aria-hidden="true" class="material-symbols text-4xl" style="font-variation-settings: 'FILL' 1;">star</span>
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
						<span aria-hidden="true" class="material-symbols text-3xl" style="font-variation-settings: 'FILL' 1;">{feat.icon}</span>
					</div>
					<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-3">{feat.title}</h3>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
				</div>
			{/each}
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
			Pigeonhole is open source, distributed under the
			<a class="text-primary font-semibold hover:text-primary-container transition-colors" href="https://raw.githubusercontent.com/dovecot/pigeonhole/refs/heads/main/COPYING.LGPL" target="_blank" rel="noopener noreferrer">LGPLv2.1 license</a>.
		</p>
	</div>
</section>
