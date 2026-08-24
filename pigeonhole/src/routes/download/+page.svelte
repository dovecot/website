<script lang="ts">
	import { base } from '$app/paths';
	import releases from '$lib/data/releases.json';
	import pgpKeys from '$lib/data/pgp-keys.json';
	import { GitHubIcon } from '@dovecot/shared-ui';
</script>

<svelte:head>
	<title>Downloads & Releases - Pigeonhole</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-3xl mx-auto mb-12">
			<span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
				Download
			</span>
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mt-4 mb-4">
				Download Pigeonhole
			</h1>
			<p class="font-body-md text-on-surface-variant leading-relaxed">
				Download Pigeonhole via source tarballs, the Dovecot package repositories, Docker images, or the Git repository.
			</p>
		</div>

		<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6 max-w-4xl mx-auto">Packages</h2>

		<!-- Package Installation Notice -->
		<div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-6 max-w-4xl mx-auto flex gap-4 items-start">
			<span aria-hidden="true" class="material-symbols text-amber-500 text-2xl shrink-0">warning</span>
			<div>
				<h3 class="font-headline-md text-sm font-bold text-amber-800 mb-1">Community Support Notice</h3>
				<p class="font-body-md text-xs text-amber-700 leading-relaxed">
					Packages are provided as a benefit to the community. They are provided with no official support, warranty, or SLAs. See <a href="{base}/support" class="link-subtle font-bold">Community support options</a>.
				</p>
			</div>
		</div>

		<!-- Package Installation -->
		<div class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 max-w-4xl mx-auto mb-12 space-y-6">
			<div class="flex items-center gap-3">
				<span aria-hidden="true" class="material-symbols text-primary text-3xl">dns</span>
				<h2 class="font-headline-xl text-2xl text-on-background font-bold">Package Installation</h2>
			</div>

			<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
				Pigeonhole is bundled with Dovecot and available through the official Dovecot package repositories. Follow the Dovecot installation guide for your distribution to install Pigeonhole alongside Dovecot.
			</p>

			<div class="flex flex-wrap gap-3">
				<a
					href="https://dovecot.org/download"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-5 py-3 rounded-lg text-sm shadow hover:shadow-md transition-all cursor-pointer"
				>
					<span aria-hidden="true" class="material-symbols text-base">dns</span>
					Dovecot Download Page
				</a>
				<a
					href="https://repo.dovecot.org/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-1.5 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer"
				>
					<span aria-hidden="true" class="material-symbols text-base">folder_open</span>
					Browse Repository
				</a>
			</div>

			<!-- PGP Signing Keys Subsection -->
			<div class="border-t border-outline-variant/30 pt-6 space-y-4">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
						<span aria-hidden="true" class="material-symbols text-xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
					</div>
					<div>
						<h3 class="font-headline-lg text-lg text-on-background font-bold">PGP Signing Keys</h3>
						<p class="font-body-md text-xs text-amber-700 leading-relaxed">
							All tarballs are signed with public PGP keys.
						</p>
						<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
							Pigeonhole 2.4.0+ uses the Dovecot <a href="https://dovecot.org/download" class="link-subtle" target="_blank" rel="noopener noreferrer"><code class="font-mono text-xs bg-black/10 px-1 py-0.5 rounded">4EDC5219</code></a> key.
						</p>
						<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
							Pigeonhole 0.5.5x uses the Dovecot <a href="https://dovecot.org/download" class="link-subtle" target="_blank" rel="noopener noreferrer"><code class="font-mono text-xs bg-black/10 px-1 py-0.5 rounded">ED409DA1</code></a> key.
						</p>
					</div>
				</div>

				{#each pgpKeys as key}
					<div class="p-4 bg-surface rounded-xl border border-outline-variant/20 space-y-2 ml-0 md:ml-14">
						<div class="flex justify-between items-start flex-wrap gap-1 border-b border-outline-variant/10 pb-2">
							<span class="text-xs font-semibold bg-secondary/10 text-secondary px-2 py-0.5 rounded-full border border-secondary/20">
								{key.period}
							</span>
							{#if key.link}
								<a
									href="{base}{key.link}"
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

		<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6 max-w-4xl mx-auto mt-16">Source Code Downloads</h2>

		<!-- Stable Release -->
		<div class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 max-w-4xl mx-auto mb-6 space-y-6">
			<div class="flex items-center gap-3">
				<span aria-hidden="true" class="material-symbols text-primary text-3xl">download</span>
				<h3 class="font-headline-xl text-2xl text-on-background font-bold">Stable Release</h3>
			</div>

			<div class="p-6 bg-surface rounded-xl border border-outline-variant/30 space-y-4">
				<div class="flex justify-between items-center flex-wrap gap-2">
					<div>
						<span class="text-xs uppercase font-bold tracking-wider text-primary">Latest Release</span>
						<h4 class="font-mono text-xl font-extrabold text-on-background mt-1">
							dovecot-pigeonhole-{releases.stable.version}
						</h4>
					</div>
					<span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold font-mono">
						For Dovecot {releases.stable.dovecotVersion}
					</span>
				</div>

				<div class="flex flex-wrap gap-3">
					<a
						href={releases.stable.tarball}
						class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-on-primary transition-all shadow-sm"
					>
						<span aria-hidden="true" class="material-symbols text-sm">download</span>
						Download Sources
					</a>
					<a
						href={releases.stable.sig}
						class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface transition-all"
					>
						<span aria-hidden="true" class="material-symbols text-sm">enhanced_encryption</span>
						PGP Signature
					</a>
					<a
						href={releases.stable.news}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface transition-all"
					>
						<span aria-hidden="true" class="material-symbols text-sm">description</span>
						Change Log
					</a>
				</div>
			</div>

			<!-- Legacy Releases -->
			<div class="space-y-3">
				<span class="text-sm font-bold text-on-background">Old Releases</span>
				{#each releases.legacy as rel}
					<div class="p-4 bg-surface rounded-xl border border-outline-variant/30 flex justify-between items-center flex-wrap gap-4">
						<div>
							<h4 class="font-mono text-sm font-extrabold text-on-background">
								dovecot-pigeonhole-{rel.version}
							</h4>
							<p class="text-xs text-on-surface-variant">For Dovecot {rel.dovecotVersion}</p>
						</div>
						<div class="flex flex-wrap gap-2">
							<a
								href={rel.tarball}
								class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
							>
								<span aria-hidden="true" class="material-symbols text-xs">download</span>
								Sources
							</a>
							<a
								href={rel.sig}
								class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
							>
								<span aria-hidden="true" class="material-symbols text-xs">lock</span>
								Signature
							</a>
							<a
								href={rel.news}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
							>
								<span aria-hidden="true" class="material-symbols text-xs">description</span>
								News
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Alternative Download Options -->
		<div class="mt-16 pt-12 border-t border-outline-variant/30 max-w-4xl mx-auto">
			<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6">Other Download Options</h2>

			<!-- Source Code -->
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm mb-6">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Source Code
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Access Source Code & Build from Source</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Download source tarballs or clone the Git repository to build Pigeonhole from source alongside Dovecot.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto flex flex-wrap justify-center gap-3">
					<a
						href="https://github.com/dovecot/pigeonhole"
						target="_blank"
						rel="noopener noreferrer"
						class="w-fit inline-flex items-center justify-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface font-semibold px-5 py-3 rounded-lg text-sm transition-all cursor-pointer"
					>
						<GitHubIcon iconClass="w-4 h-4 fill-current" />
						GitHub Repository
					</a>
				</div>
			</div>

			<!-- Docker Hub Images -->
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
				<div class="space-y-2 flex-1">
					<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
						Container Image
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Official Docker Hub Images</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Official pre-built Docker containers come with full Pigeonhole Sieve support, configured with secure defaults and optimized for easy deployment.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto">
					<a
						href="https://hub.docker.com/r/dovecot/dovecot"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-all text-sm cursor-pointer"
					>
						<span aria-hidden="true" class="material-symbols text-base">grid_view</span>
						Docker Hub Images
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
