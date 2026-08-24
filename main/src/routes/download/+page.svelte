<script lang="ts">
	import { base } from '$app/paths';
	import RepoSection from './RepoSection.svelte';
	import { GitHubIcon } from '@dovecot/shared-ui';
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
						Migrate your Dovecot CE 2.3 configuration to 2.4 automatically. The online tool converts dovecot.conf and related config files — just paste your config and get the updated output.
					</p>
				</div>
				<div class="shrink-0 w-full md:w-auto">
					<a
						class="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/95 text-on-primary font-semibold px-6 py-3 rounded-lg shadow hover:shadow-md transition-all text-sm cursor-pointer"
						href="https://dovecot.org/upgrader/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span aria-hidden="true" class="material-symbols text-base">upgrade</span>
						Config Upgrader
					</a>
				</div>
			</div>
		</div>

		<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6 max-w-4xl mx-auto">Packages</h2>

		<!-- Warning disclaimer -->
		<div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-6 max-w-4xl mx-auto flex gap-4 items-start">
			<span aria-hidden="true" class="material-symbols text-amber-500 text-2xl shrink-0">warning</span>
			<div>
				<h3 class="font-headline-md text-sm font-bold text-amber-800 mb-1">Community Support Notice</h3>
				<p class="font-body-md text-xs text-amber-700 leading-relaxed">
					These repositories provide packages as a benefit to the community. They are provided with no official support, warranty, or SLAs. See <a href="{base}/support" class="link-subtle font-bold">Community support options</a>.
				</p>
			</div>
		</div>

		<!-- PGP + Repo section -->
		<RepoSection version="2.4" pgpKeyId="4EDC5219">
			{#snippet navExtra()}
				<div class="border-t border-outline-variant/20 my-2"></div>
				<a
					class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all cursor-pointer"
					href="{base}/download/eol"
				>
					<span aria-hidden="true" class="material-symbols text-lg">archive</span>
					End of Life (2.3)
				</a>
			{/snippet}
		</RepoSection>

		<!-- EOL Packages Link -->
		<div class="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 max-w-4xl mx-auto flex gap-4 items-start">
			<span aria-hidden="true" class="material-symbols text-amber-500 text-2xl shrink-0">warning</span>
			<div class="flex-1">
				<h3 class="font-headline-md text-sm font-bold text-amber-800 mb-1">End of Life Packages</h3>
				<p class="font-body-md text-xs text-amber-700 leading-relaxed">
					See: <a class="font-semibold underline" href="{base}/download/eol">Dovecot CE 2.3 Packages</a>.
				</p>
			</div>
		</div>

		<!-- Alternative Download Options -->
		<div class="pt-6 max-w-4xl mx-auto">
			<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6">Other Download Options</h2>
			<div class="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/30 shadow-sm">
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
						<span aria-hidden="true" class="material-symbols text-base">download</span>
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
						<span aria-hidden="true" class="material-symbols text-xs">open_in_new</span>
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
						<span aria-hidden="true" class="material-symbols text-base">grid_view</span>
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
						<span aria-hidden="true" class="material-symbols text-base">speed</span>
						ImapTest
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
