<script lang="ts">
	import { base } from '$app/paths';
	import repoData from '$lib/data/repositories.json';
	import packageCategories from '$lib/data/package-categories.json';
	import pgpData from '$lib/data/pgp-keys.json';
	import { CodeBlock, GitHubIcon } from '@dovecot/shared-ui';

	let activeDist = $state('debian');
	let activeVersion = $state('2.4'); // '2.4' or '2.3'

	// Helper to find the current active distribution
	let currentDist = $derived(repoData.distributions.find(d => d.id === activeDist) || repoData.distributions[0]);

	// Extract active releases
	let activeReleases = $derived.by(() => (currentDist?.versions as Record<string, any[]> | undefined)?.[activeVersion] ?? []);

	const categoryOrder = Object.keys(packageCategories);

	let categorizedPackages = $derived.by(() => {
		const allPkgs = new Set(currentDist.packages ?? []);
		return categoryOrder
			.map((cat: string) => ({ category: cat, packages: (packageCategories as Record<string, string[]>)[cat].filter((p: string) => allPkgs.has(p)) }))
			.filter(g => g.packages.length > 0);
	});

	// pgpData keys use relative paths; preface with base at render time.
	const pgpKeys = $derived(pgpData.keys.map(k => ({ ...k, link: base + k.link })));
</script>

<svelte:head>
	<title>Download Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
				Download
			</span>
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mt-4 mb-4">
				Get Dovecot
			</h1>
			<p class="font-body-md text-on-surface-variant leading-relaxed">
				Download Dovecot via package repositories, source tarballs, Docker images, or the GitHub repository.
			</p>


		</div>

		<!-- Config Upgrader -->
		<div class="mt-2 mb-6 max-w-4xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-secondary-container/20 p-6 md:p-8 rounded-2xl border border-secondary-container shadow-sm">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Migration Tool
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Configuration Upgrader</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Migrate your Dovecot 2.3 configuration to 2.4 automatically. The online tool converts dovecot.conf and related config files — just paste your config and get the updated output.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto">
					<a
						class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-all text-sm cursor-pointer"
						href="https://dovecot.org/upgrader/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span aria-hidden="true" class="material-symbols-outlined text-base">upgrade</span>
						Config Upgrader
					</a>
				</div>
			</div>
		</div>

		<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6 max-w-4xl mx-auto">Packages</h2>

		<!-- Warning disclaimer -->
		<div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-6 max-w-4xl mx-auto flex gap-4 items-start">
			<span aria-hidden="true" class="material-symbols-outlined text-amber-500 text-2xl shrink-0">warning</span>
			<div>
				<h3 class="font-headline-md text-sm font-bold text-amber-800 mb-1">Community Support Notice</h3>
				<p class="font-body-md text-xs text-amber-700 leading-relaxed">
					These repositories provide packages as a benefit to the community. They are provided with no official support, warranty, or SLAs. See <a href="{base}/support" class="link-subtle font-bold">Community support options</a>.
				</p>
			</div>
		</div>

		<!-- PGP Signing Keys Section -->
		<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 max-w-4xl mx-auto mb-12 space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
					<span aria-hidden="true" class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
				</div>
				<div>
					<h3 class="font-headline-lg text-lg text-on-background font-bold">PGP Signing Keys</h3>
					<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
						Use these GPG public keys to verify downloaded repository metadata and packages:
					</p>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#each pgpKeys as key}
					<div class="p-4 bg-surface rounded-xl border border-outline-variant/20 space-y-2">
						<div class="flex justify-between items-start flex-wrap gap-1 border-b border-outline-variant/10 pb-2">
							<span class="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">
								{key.period}
							</span>
							{#if key.link}
								<a
									href={key.link}
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
								{key.id}
							</code>
							<span class="block text-[11px] uppercase tracking-wider font-bold text-outline">Fingerprint</span>
							<code class="block text-xs font-mono p-2 bg-black/10 text-on-surface-variant rounded select-all break-all leading-normal">
								{key.fingerprint}
							</code>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Main Repo Setup Grid Layout -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

			<!-- Left Navigation Panel -->
			<div class="lg:col-span-3 flex flex-col gap-2 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
				<span class="text-xs uppercase font-bold tracking-wider px-3 mb-2 text-outline">Distribution</span>
				{#each repoData.distributions as dist}
					<button
						onclick={() => activeDist = dist.id}
						class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-semibold transition-all cursor-pointer {activeDist === dist.id ? 'bg-primary text-on-primary shadow' : 'hover:bg-surface-container-high text-on-surface-variant'}"
					>
						<span aria-hidden="true" class="material-symbols-outlined text-lg">{dist.icon || 'terminal'}</span>
						{dist.name}
					</button>
				{/each}
			</div>

			<!-- Right Content Panel -->
			<div class="lg:col-span-9 space-y-6">

				<!-- Version selector if not special -->
				{#if currentDist.versions}
					<div class="flex justify-between items-center border-b border-outline-variant/20 pb-4">
						<h2 class="font-headline-lg text-xl text-on-background font-bold capitalize">
							{currentDist.name} Repository Guide
						</h2>
						<div class="flex bg-surface-container p-1 rounded-lg border border-outline-variant/30">
							{#each Object.keys(currentDist.versions).sort().reverse() as ver}
								<button
									onclick={() => activeVersion = ver}
									class="px-4 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer {activeVersion === ver ? 'bg-primary text-on-primary shadow' : 'text-on-surface-variant'}"
								>
									Dovecot {ver} {ver === '2.4' ? '(Latest)' : '(EOL)'}
								</button>
							{/each}
						</div>
					</div>
				{/if}

				{#if currentDist.versions}
					<div class="space-y-6">
						{#each activeReleases as rel}
							<div class="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 space-y-4">
								<div class="flex justify-between items-start gap-4">
									<h3 class="font-headline-md text-lg text-on-background font-bold">{rel.codename}</h3>
									{#if rel.warning}
										<span class="bg-amber-500/10 text-amber-600 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-500/20">{rel.warning}</span>
									{/if}
								</div>

								<!-- Step 1: GPG Key if present -->
								{#if rel.gpgCmd && rel.gpgPath}
									<CodeBlock
										label={'1. Setup GPG keyring (' + rel.gpgPath + ')'}
										code={rel.gpgCmd}
										copyId={rel.codename + '_gpg'}
										ariaLabel="Copy GPG Command"
									/>
								{/if}

								<!-- Step 2: Sources list if present -->
								{#if rel.sourcesContent && rel.sourcesPath}
									<CodeBlock
										label={'2. Configure sources config path file (' + rel.sourcesPath + ')'}
										code={rel.sourcesContent}
										copyId={rel.codename + '_sources'}
										ariaLabel="Copy Sources Configuration"
									/>
								{/if}

								<!-- Repo configuration for RHEL / CentOS -->
								{#if rel.repoContent && rel.repoPath}
									<CodeBlock
										label={'Configure repo path file (' + rel.repoPath + ')'}
										code={rel.repoContent}
										copyId={rel.codename + '_repo'}
										ariaLabel="Copy Repo Setup"
									/>
								{/if}
							</div>
						{/each}

						<!-- Standard installation commands -->
						<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 space-y-4">
							<h3 class="font-headline-md text-sm font-bold text-on-background">Installation & Package commands</h3>
							<CodeBlock
								label="Update repository database and install packages:"
								code={currentDist.installCmd}
								copyId={currentDist.id + '_install'}
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
				{/if}

			</div>
		</div>

		<!-- Alternative Download Options -->
		<div class="mt-16 pt-12 border-t border-outline-variant/30 max-w-4xl mx-auto">
			<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6">Other Download Options</h2>
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm mb-6">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Source Code
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Access Source Code & Build from Source</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						You can access the official Dovecot Core source repository directly on GitHub to view code history, clone, or contribute. For detailed compiling and building instructions from source tarballs, please refer to the official installation guide.
					</p>
				</div>
				<div class="shrink-0 w-full md:max-w-[390px] flex flex-wrap justify-center gap-3">
					<a
						href="https://dovecot.org/releases/"
						target="_blank"
						rel="noopener noreferrer"
						class="w-fit inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer"
					>
						<span aria-hidden="true" class="material-symbols-outlined text-base">download</span>
						Source Tarballs
					</a>
					<a
						href="https://github.com/dovecot/core"
						target="_blank"
						rel="noopener noreferrer"
						class="w-fit inline-flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer"
					>
						<GitHubIcon iconClass="w-4 h-4 fill-current" />
						GitHub Repository
					</a>
					<a
						href="https://doc.dovecot.org/latest/installation/installation.html"
						target="_blank"
						rel="noopener noreferrer"
						class="w-fit inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-5 py-3 rounded-lg text-sm shadow hover:shadow-md transition-all cursor-pointer"
					>
						Installation Guide
						<span aria-hidden="true" class="material-symbols-outlined text-xs">open_in_new</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Docker Hub Images -->
		<div class="pt-6 max-w-4xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Container Image
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Official Docker Hub Images</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Official pre-built Docker containers are available on Docker Hub, configured with secure defaults and optimized configurations for easy deployment.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto">
					<a
						href="https://hub.docker.com/r/dovecot/dovecot"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-all text-sm cursor-pointer"
					>
						<span aria-hidden="true" class="material-symbols-outlined text-base">grid_view</span>
						Docker Hub Images
					</a>
				</div>
			</div>
		</div>

		<!-- Imaptest -->
		<div class="pt-6 max-w-4xl mx-auto">
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Testing
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">ImapTest benchmarking & verification tool</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						ImapTest is a testing tool for IMAP and POP3 servers. Although provided by the Dovecot development team, it is developed as a separate utility and is not packaged as part of the core Dovecot mail server itself. Source code and issue tracking are hosted publicly on GitHub.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto">
					<a
						href="https://dovecot.github.io/imaptest/"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-all text-sm cursor-pointer"
					>
						<span aria-hidden="true" class="material-symbols-outlined text-base">speed</span>
						ImapTest
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
