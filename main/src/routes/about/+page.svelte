<script lang="ts">
	import features from '$lib/data/features.json';
</script>

<svelte:head>
	<title>About - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<div class="text-center mb-12 flex flex-col items-center">
			<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary shadow-sm">
				<span aria-hidden="true" class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">info</span>
			</div>
			<h1 class="font-headline-xl text-3xl md:text-5xl text-on-background font-extrabold tracking-tight mb-4">Dovecot Features and Highlights</h1>
			<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
				Engineered for performance, security, and open standards compliance.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
			{#each features as feat}
				<div class="bg-surface-container-lowest rounded-2xl p-gutter border border-outline-variant shadow-[0px_4px_20px_rgba(26,31,43,0.02)] hover:shadow-[0px_8px_30px_rgba(26,31,43,0.06)] transition-shadow duration-300">
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-3xl" style="font-variation-settings: 'FILL' 1;">{feat.icon}</span>
					</div>
					<h2 class="font-headline-lg text-headline-lg-mobile text-on-surface mb-3">{feat.title}</h2>
					<p class="font-body-md text-body-md text-on-surface-variant">{@html feat.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
