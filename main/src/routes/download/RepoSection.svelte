<script lang="ts">
	import { base } from '$app/paths';
	import repoData from '$lib/data/repositories.json';
	import packageCategories from '$lib/data/package-categories.json';
	import pgpData from '$lib/data/pgp-keys.json';
	import { CodeBlock } from '@dovecot/shared-ui';

	import type { Snippet } from 'svelte';

	let {
		version,            // '2.4' | '2.3'
		pgpKeyId,           // key id to show
		copyIdSuffix = '',  // appended to copy IDs
		pgpNote,            // custom text after "packages" in PGP description
		navExtra,           // optional extra nav links snippet
	}: {
		version: string;
		pgpKeyId: string;
		copyIdSuffix?: string;
		pgpNote?: string;
		navExtra?: Snippet;
	} = $props();

	let activeDist = $state('debian');

	const filteredDists = $derived(
		repoData.distributions.filter(
			(d) => (d.versions as Record<string, any[]> | undefined)?.[version]
		)
	);

	let currentDist = $derived(
		filteredDists.find((d) => d.id === activeDist) || filteredDists[0]
	);

	let activeReleases = $derived.by(() =>
		(currentDist?.versions as Record<string, any[]> | undefined)?.[version] ?? []
	);

	const categoryOrder = Object.keys(packageCategories);

	let categorizedPackages = $derived.by(() => {
		const allPkgs = new Set(currentDist.packages ?? []);
		return categoryOrder
			.map((cat: string) => ({
				category: cat,
				packages: (packageCategories as Record<string, string[]>)[cat].filter(
					(p: string) => allPkgs.has(p)
				),
			}))
			.filter((g) => g.packages.length > 0);
	});

	const pgpKey = $derived(pgpData.keys.find((k) => k.id === pgpKeyId));
</script>

<!-- PGP Signing Key Section -->
<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 max-w-xl mx-auto mb-12 space-y-4">
	<div class="flex items-center gap-3">
		<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
			<span aria-hidden="true" class="material-symbols text-2xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
		</div>
		<div>
			<h3 class="font-headline-lg text-lg text-on-background font-bold">PGP Signing Key</h3>
			<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
				Use this GPG public key to verify downloaded repository metadata and packages{pgpNote ? ` ${pgpNote}` : ''}:
			</p>
		</div>
	</div>

	{#if pgpKey}
		<div class="p-4 bg-surface rounded-xl border border-outline-variant/20 space-y-2">
			<div class="flex justify-end">
				{#if pgpKey.link}
					<a
						href={base + pgpKey.link}
						target="_blank"
						rel="noopener noreferrer"
						class="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded font-semibold hover:underline"
					>
						Download Key
					</a>
				{/if}
			</div>

			<div class="space-y-1">
				<span class="block text-[11px] uppercase tracking-wider font-bold text-outline">Key ID</span>
				<code class="block text-xs font-mono p-2 bg-black/10 text-on-surface-variant rounded select-all break-all leading-normal">
					{pgpKey.id}
				</code>
				<span class="block text-[11px] uppercase tracking-wider font-bold text-outline">Fingerprint</span>
				<code class="block text-xs font-mono p-2 bg-black/10 text-on-surface-variant rounded select-all break-all leading-normal">
					{pgpKey.fingerprint}
				</code>
			</div>
		</div>
	{/if}
</div>

<!-- Main Repo Setup Grid Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

	<!-- Left Navigation Panel -->
	<div class="lg:col-span-3 flex flex-col gap-2 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
		<span class="text-xs uppercase font-bold tracking-wider px-3 mb-2 text-outline">Distribution</span>
		{#each filteredDists as dist}
			<button
				onclick={() => activeDist = dist.id}
				class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-semibold transition-all cursor-pointer {activeDist === dist.id ? 'bg-primary text-on-primary shadow' : 'hover:bg-surface-container-high text-on-surface-variant'}"
			>
				<span aria-hidden="true" class="material-symbols text-lg">{dist.icon || 'terminal'}</span>
				{dist.name}
			</button>
		{/each}
		{#if navExtra}
			{@render navExtra()}
		{/if}
	</div>

	<!-- Right Content Panel -->
	<div class="lg:col-span-9 space-y-6">

		<div class="flex items-center border-b border-outline-variant/20 pb-4">
			<h2 class="font-headline-lg text-xl text-on-background font-bold capitalize">
				{currentDist.name} Repository Guide
			</h2>
		</div>

		<div class="space-y-6">
			{#each activeReleases as rel}
				<div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-4">
					<div class="flex justify-between items-start gap-4">
						<h3 class="font-headline-md text-lg text-on-background font-bold">{rel.codename}</h3>
						{#if rel.warning}
							<span class="bg-amber-500/10 text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/20">{rel.warning}</span>
						{/if}
					</div>

					{#if rel.gpgCmd && rel.gpgPath}
						<CodeBlock
							label={'1. Setup GPG keyring (' + rel.gpgPath + ')'}
							code={rel.gpgCmd}
							copyId={rel.codename + '_gpg' + copyIdSuffix}
							ariaLabel="Copy GPG Command"
						/>
					{/if}

					{#if rel.sourcesContent && rel.sourcesPath}
						<CodeBlock
							label={'2. Configure sources config path file (' + rel.sourcesPath + ')'}
							code={rel.sourcesContent}
							copyId={rel.codename + '_sources' + copyIdSuffix}
							ariaLabel="Copy Sources Configuration"
						/>
					{/if}

					{#if rel.repoContent && rel.repoPath}
						<CodeBlock
							label={'Configure repo path file (' + rel.repoPath + ')'}
							code={rel.repoContent}
							copyId={rel.codename + '_repo' + copyIdSuffix}
							ariaLabel="Copy Repo Setup"
						/>
					{/if}
				</div>
			{/each}

			<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 space-y-4">
				<h3 class="font-headline-md text-sm font-bold text-on-background">Installation & Package commands</h3>
				<CodeBlock
					label="Update repository database and install packages:"
					code={currentDist.installCmd}
					copyId={currentDist.id + '_install' + copyIdSuffix}
					ariaLabel="Copy Installation Command"
				/>
				{#if currentDist.packages}
					<div class="pt-4 border-t border-outline-variant">
						<span class="block text-xs font-bold text-slate-500 mb-2">Available packages in repository</span>
						{#each categorizedPackages as group}
							<div class="mb-2 last:mb-0">
								<span class="block text-xs font-semibold text-on-surface-variant mb-1">{group.category}</span>
								<div class="flex flex-wrap gap-1.5">
									{#each group.packages as pkg}
										<span class="font-mono text-xs bg-surface-container-high text-on-surface px-2 py-0.5 rounded border border-outline-variant/20">{pkg}</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>