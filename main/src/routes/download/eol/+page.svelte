<script lang="ts">
	import { base } from '$app/paths';
	import RepoSection from '../RepoSection.svelte';
</script>

<svelte:head>
	<title>Dovecot CE 2.3 — End of Life Packages</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-3xl mx-auto mb-12">
			<div class="flex items-center justify-center gap-3 mb-4">
				<a
					class="inline-flex items-center text-primary font-semibold hover:text-primary-container transition-colors"
					href="{base}/download"
				>
					<span aria-hidden="true" class="material-symbols mr-1 text-sm">arrow_back</span>
					Back to Download
				</a>
			</div>
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mt-4 mb-4">
				Dovecot CE 2.3 Packages
			</h1>
		</div>

		<!-- EOL Warning -->
		<div class="bg-error/10 border border-error/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto flex gap-4 items-start">
			<span aria-hidden="true" class="material-symbols text-error text-2xl shrink-0">error</span>
			<div>
				<h3 class="font-headline-md text-sm font-bold text-on-surface mb-1">End of Life — No Updates</h3>
				<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
					Dovecot CE 2.3 is
					<a
						class="text-primary font-semibold hover:text-primary-container transition-colors"
						href="https://dovecot.org/mailman3/archives/list/dovecot-news@dovecot.org/thread/3P45L76DOC3NKUNSSPIXQNKINGOCYH5K/"
						target="_blank"
						rel="noopener noreferrer"
					>
						End of Life as of 12 May 2025
					</a>.
					Dovecot CE 2.3 no longer receives security patches or bug fixes.
					We strongly recommend upgrading to
					<a class="text-primary font-semibold hover:text-primary-container transition-colors" href="{base}/download">Dovecot CE 2.4</a>
					as soon as possible.
				</p>
			</div>
		</div>

		<!-- Dovecot Pro Banner -->
		<div class="bg-gradient-to-r from-[#0e0d10] via-[#2d1543] to-[#3c036d] relative overflow-hidden rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
			<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#861be4]/20 via-transparent to-transparent pointer-events-none"></div>
			<div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div class="flex-1">
					<h3 class="font-['Space_Grotesk',sans-serif] text-base font-medium tracking-[0.02em] text-white mb-1">Extended Support for Dovecot 2.3</h3>
					<p class="font-['Ubuntu_Sans',sans-serif] text-xs md:text-sm leading-relaxed text-white/85">
						Extended support for Dovecot 2.3 is available in Dovecot Pro.
					</p>
				</div>
				<a
					class="font-['Space_Grotesk',sans-serif] text-sm font-medium tracking-[0.02em] shrink-0 inline-flex items-center justify-center bg-[#861be4] hover:bg-[#4a117b] text-white px-6 py-2.5 rounded-[14px] transition-all shadow-lg shadow-[#861be4]/30 hover:shadow-[#861be4]/50 cursor-pointer border border-white/10"
					href="https://www.dovecotpro.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn More
				</a>
			</div>
		</div>

		<h2 class="font-headline-xl text-2xl text-on-background font-bold mb-6 max-w-4xl mx-auto">Packages</h2>

		<!-- PGP + Repo section -->
		<RepoSection
			version="2.3"
			pgpKeyId="ED409DA1"
			copyIdSuffix="_eol"
			pgpNote="for Dovecot CE 2.3"
		/>
	</div>
</section>