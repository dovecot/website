<script lang="ts">
	import features from '$lib/data/features.json';
</script>

<svelte:head>
	<title>Features - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<div class="text-center max-w-2xl mx-auto mb-12">
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mb-4">
				Features
			</h1>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
			{#each features as feat}
				<div class="bg-surface-container-lowest rounded-2xl p-gutter border border-outline-variant shadow-[0px_4px_20px_rgba(26,31,43,0.02)] hover:shadow-[0px_8px_30px_rgba(26,31,43,0.06)] transition-shadow duration-300">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
						<span aria-hidden="true" class="material-symbols text-3xl" style="font-variation-settings: 'FILL' 1;">{feat.icon}</span>
					</div>
					<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-3">{feat.title}</h3>
					<p class="font-body-md text-body-md text-on-surface-variant">{@html feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
