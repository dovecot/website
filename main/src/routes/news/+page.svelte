<script lang="ts">
	import newsItems from '$lib/data/news.json';
	import { page } from '$app/state';


	export function load({ url }: { url: URL }) {
		return { hash: url.hash.replace('#', '') };
	}

	let selectedCategory = $state('all');
	let searchQuery = $state('');

	$effect(() => {
		const hash = page.data.hash;
		if (hash) {
			const el = document.getElementById(hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
			page.data.hash = '';
		}
	});

	let filteredNews = $derived(newsItems.filter(item =>
		(selectedCategory === 'all' ||
		 (selectedCategory === 'releases' && item.type === 'Release') ||
		 (selectedCategory === 'security' && item.type === 'Security')) &&
		[item.title, item.desc].some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
	));
</script>

<svelte:head>
	<title>Latest Updates & News - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-2xl mx-auto mb-12">
			<h1 class="font-headline-xl text-4xl text-on-background dark:text-white font-extrabold mb-4">
				Latest Updates & News
			</h1>
			<p class="font-body-md text-on-surface-variant dark:text-outline-variant">
				Stay updated with the latest releases, security notices, and announcement history from the Dovecot team.
			</p>
		</div>

		<!-- Filter and Search Bar -->
		<div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
			<!-- Search (WCAG 1.3.1, 1.3.5) -->
			<form role="search" class="relative flex-grow max-w-md" onsubmit={(e) => e.preventDefault()}>
				<label for="news-search" class="sr-only">Search news</label>
				<span aria-hidden="true" class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline dark:text-outline-variant text-lg">search</span>
				<input
					id="news-search"
					type="search"
					bind:value={searchQuery}
					autocomplete="off"
					placeholder="Search news..."
					class="w-full bg-white dark:bg-inverse-surface border border-outline-variant dark:border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:text-white"
				/>
			</form>

			<!-- Filter categories -->
			<div class="flex gap-2 self-start md:self-auto overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
				{#each [ { id: 'all', label: 'All Updates' }, { id: 'releases', label: 'Releases' }, { id: 'security', label: 'Security' } ] as filter}
					<button
						onclick={() => selectedCategory = filter.id}
						class="px-3.5 py-1.5 rounded-lg border text-xs font-semibold capitalize transition-all cursor-pointer whitespace-nowrap {selectedCategory === filter.id ? 'bg-primary text-on-primary border-primary dark:bg-primary-container dark:text-on-primary-container' : 'bg-white dark:bg-inverse-surface border-outline-variant text-on-surface-variant dark:text-outline-variant'}"
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</div>

		<!-- News list grid -->
		<div class="max-w-3xl mx-auto flex flex-col gap-6">
			{#if filteredNews.length === 0}
				<div class="bg-surface-container-lowest dark:bg-inverse-surface/10 rounded-xl border border-outline-variant/30 p-12 text-center text-on-surface-variant dark:text-outline-variant">
					<span aria-hidden="true" class="material-symbols-outlined text-4xl block mb-2">find_in_page</span>
					No news items match your search or category selection.
				</div>
			{:else}
				{#each filteredNews as item}
					<a
						id={item.id}
						href="#{item.id}"
						class="group flex flex-col justify-between bg-surface-bright dark:bg-inverse-surface/40 rounded-xl p-6 border border-outline-variant/40 dark:border-white/5 shadow-sm hover:shadow-md hover:border-primary/50 dark:hover:border-primary-fixed/40 transition-all duration-300 relative overflow-hidden"
					>
						{#if item.isSecurity}
							<div class="absolute top-0 left-0 w-full h-1 bg-error"></div>
						{/if}
						<div>
							<div class="flex items-center gap-2 mb-4">
								{#if item.isSecurity}
<span class="bg-error-container text-error px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Security</span>
								{:else}
									<span class="bg-primary/10 text-primary dark:bg-primary-fixed/15 dark:text-primary-fixed px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider">Release</span>
								{/if}
								<span class="text-xs text-outline dark:text-outline-variant">{item.date}</span>
							</div>
							<h2 class="font-headline-lg text-lg text-on-surface dark:text-white font-bold mb-3 group-hover:text-primary transition-colors">
								{item.title}
							</h2>
							<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed">
								{item.desc}
							</p>
						</div>
						<div class="mt-6 flex justify-end">
							<span aria-hidden="true" class="material-symbols-outlined text-outline group-hover:text-primary transition-colors">north_east</span>
						</div>
					</a>
				{/each}
			{/if}
		</div>
	</div>
</section>
