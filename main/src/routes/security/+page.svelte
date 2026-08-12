<script lang="ts">
	import advisories from '$lib/data/security.json';

	let selectedFilter = $state('all');
	let searchQuery = $state('');

	// Filtered advisories
	let filteredAdvisories = $derived(advisories.filter(adv =>
		(selectedFilter === 'all' || adv.severity === selectedFilter) &&
		[adv.id, adv.title, adv.description].some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
	));
</script>

<svelte:head>
	<title>Security Advisories & Policies - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mb-4">
				Security Advisories & Policy
			</h1>
			<p class="font-body-md text-on-surface-variant leading-relaxed">
				Dovecot was designed since the beginning with security in mind and with many ways to provide privilege separation. Although the code is written with C, it’s a Dovecot-hardened special C variant that makes it much more difficult to write security holes than with most other C-based projects.
			</p>
		</div>

		<!-- Reporting info grids -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
			<!-- Found a security bug? -->
			<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
				<div class="space-y-3">
					<div class="inline-flex items-center gap-2 bg-error/10 text-error px-3 py-1 rounded-full text-xs font-bold uppercase">
						<span aria-hidden="true" class="material-symbols-outlined text-sm">shield</span>
						Reporting Vulnerabilities
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Found a Security Bug?</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Do not report security issues via public mailing lists or public issues tracker. Please report vulnerabilities confidentially using our GPG encrypted mailbox at <strong class="text-on-background">security@dovecot.org</strong> or via our YesWeHack Bug Bounty Program.
					</p>
				</div>
				<div class="mt-6">
					<a
						href="https://vdp.open-xchange.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full md:w-auto inline-flex items-center justify-center bg-error hover:bg-error/90 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors text-sm cursor-pointer"
					>
						YesWeHack Program
					</a>
				</div>
			</div>

			<!-- General bug reports -->
			<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
				<div class="space-y-3">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
						<span aria-hidden="true" class="material-symbols-outlined text-sm">bug_report</span>
						General Bugs
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">General Bug Reporting</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						For non-security related bugs, technical defects, or configuration issues, please consult the guidelines before submitting.
					</p>
				</div>
				<div class="mt-6">
					<a
						href="https://doc.dovecot.org/latest/issues.html"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-surface-container-low text-primary border border-outline-variant/60 font-semibold px-6 py-3 rounded-lg shadow-sm transition-colors text-sm cursor-pointer"
					>
						Bug Reporting Guidelines
					</a>
				</div>
			</div>
		</div>

		<!-- Advisories Title and Filter -->
		<div class="mb-8 space-y-4">
			<h2 class="font-headline-lg text-2xl text-on-background font-bold">Security Advisories</h2>

			<div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
				<!-- Search (WCAG 1.3.1, 1.3.5) -->
				<form role="search" class="relative flex-grow max-w-md" onsubmit={(e) => e.preventDefault()}>
					<label for="security-search" class="sr-only">Search advisories</label>
					<span aria-hidden="true" class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span>
					<input
						id="security-search"
						type="search"
						bind:value={searchQuery}
						autocomplete="off"
						placeholder="Search by advisory, CVE, content..."
						class="w-full bg-white border border-outline-variant rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
					/>
				</form>

				<!-- Severity filter -->
				<div class="flex gap-2">
					{#each ['all', 'high', 'moderate', 'low'] as filter}
						<button
							onclick={() => selectedFilter = filter}
							class="px-3.5 py-1.5 rounded-lg border text-xs font-semibold capitalize transition-all cursor-pointer {selectedFilter === filter ? 'bg-primary text-on-primary border-primary' : 'bg-white border-outline-variant text-on-surface-variant'}"
						>
							{filter}
						</button>
					{/each}
				</div>
			</div>
		</div>

		<!-- List of advisories -->
		<div class="space-y-4">
			{#if filteredAdvisories.length === 0}
				<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-12 text-center text-on-surface-variant">
					<span aria-hidden="true" class="material-symbols-outlined text-4xl block mb-2">find_in_page</span>
					No advisories match your search or filter requirements.
				</div>
			{:else}
				{#each filteredAdvisories as adv}
					<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-6 relative overflow-hidden transition-all shadow-sm">
						<div class="absolute left-0 top-0 h-full w-1.5 {adv.severity === 'high' ? 'bg-rose-500' : adv.severity === 'moderate' ? 'bg-amber-500' : 'bg-slate-400'}"></div>

						<div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
							<div class="flex items-center gap-3">
								<span class="font-mono text-sm font-bold text-primary">{adv.id}</span>
								<span class="text-xs text-outline">•</span>
								<span class="text-xs text-outline font-semibold">{adv.date}</span>
							</div>
							<div class="flex items-center gap-2">
								<span class="text-xs uppercase font-extrabold px-2.5 py-0.5 rounded-full {adv.severity === 'high' ? 'bg-rose-500/10 text-rose-500' : adv.severity === 'moderate' ? 'bg-amber-500/10 text-amber-600' : 'bg-slate-500/10 text-slate-500'}">
									{adv.severity} Severity
								</span>
							</div>
						</div>

						<p class="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4">
							{adv.description}
						</p>

						{#if adv.link}
							<div class="flex justify-end pt-4">
								<a
									href={adv.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-1.5 bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 text-on-surface px-3 py-1.5 rounded-lg font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all text-[11px] cursor-pointer"
								>
									View Full Advisory
									<span aria-hidden="true" class="material-symbols-outlined text-xs">north_east</span>
								</a>
							</div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>
