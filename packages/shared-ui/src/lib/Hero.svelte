<script lang="ts">
	import type { Snippet } from 'svelte';

	export interface HeroProps {
		badge?: string;
		badgeClass?: string;
		badgeIcon?: string;
		headline: string;
		description: string;
		image: any;
		imageAlt: string;
		imageClass?: string;
		title: Snippet;
		actions: Snippet;
	}

	let {
		badge,
		badgeClass = 'text-primary',
		badgeIcon,
		headline,
		description,
		image,
		imageAlt,
		imageClass,
		title,
		actions
	}: HeroProps = $props();
</script>

<section class="relative pt-16 pb-16 px-gutter overflow-hidden bg-grid-pattern transition-colors duration-300">
	<div class="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none"></div>

	<div class="max-w-container-max mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
		<!-- Left: Static Title + Content + Actions -->
		<div class="flex flex-col items-start gap-gutter w-full">
			<!-- Title Snippet -->
			{@render title()}

			<!-- Content (badge, headline, description) -->
			<div class="flex flex-col items-start gap-gutter w-full">
				{#if badge}
					<div class="flex flex-col items-start gap-3">
						<div class="inline-block bg-surface-container-highest px-3 py-1 rounded-full border border-outline-variant/30">
							<span class="font-label-md text-label-md tracking-widest uppercase flex items-center gap-1.5 {badgeClass}">
								{#if badgeIcon}
									<span aria-hidden="true" class="material-symbols text-sm" style="font-variation-settings: 'FILL' 1;">{badgeIcon}</span>
								{/if}
								{badge}
							</span>
						</div>
					</div>
				{/if}
				<h2 class="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-background max-w-2xl font-bold leading-tight">
					{@html headline}
				</h2>
				<p class="font-body-md text-body-md text-on-surface-variant max-w-xl">
					{@html description}
				</p>
			</div>

			<!-- Static Buttons -->
			<div class="flex flex-wrap gap-4 mt-2">
				{@render actions()}
			</div>
		</div>

		<!-- Right: Graphic -->
		<div class="flex flex-col items-center gap-4 w-full">
			<div class="relative w-full flex justify-center items-center">
				<div class="absolute inset-0 bg-primary-container/10 rounded-full blur-3xl scale-150 -z-10"></div>
				<enhanced:img alt={imageAlt} class="max-w-md w-full h-auto object-contain rounded-2xl {imageClass ?? ''}" src={image} />
			</div>
		</div>
	</div>
</section>
