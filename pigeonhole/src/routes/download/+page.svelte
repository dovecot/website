<script lang="ts">
	import { CodeBlock } from '@dovecot/shared-ui';

	const releases = {
		stable: {
			version: "v2.4.3",
			dovecotVersion: "v2.4.3",
			tarball: "https://pigeonhole.dovecot.org/releases/2.4/dovecot-pigeonhole-2.4.3.tar.gz",
			sig: "https://pigeonhole.dovecot.org/releases/2.4/dovecot-pigeonhole-2.4.3.tar.gz.sig",
			news: "https://raw.githubusercontent.com/dovecot/pigeonhole/2.4.3/NEWS"
		},
		legacy: [
			{
				version: "v0.5.21.1",
				dovecotVersion: "v2.3",
				tarball: "https://pigeonhole.dovecot.org/releases/2.3/dovecot-2.3-pigeonhole-0.5.21.1.tar.gz",
				sig: "https://pigeonhole.dovecot.org/releases/2.3/dovecot-2.3-pigeonhole-0.5.21.1.tar.gz.sig",
				news: "https://raw.githubusercontent.com/dovecot/pigeonhole/0.5.21.1/NEWS"
			},
			{
				version: "v0.4.24.2",
				dovecotVersion: "v2.2",
				tarball: "https://pigeonhole.dovecot.org/releases/2.2/dovecot-2.2-pigeonhole-0.4.24.2.tar.gz",
				sig: "https://pigeonhole.dovecot.org/releases/2.2/dovecot-2.2-pigeonhole-0.4.24.2.tar.gz.sig",
				news: "https://raw.githubusercontent.com/dovecot/pigeonhole/0.4.24.2/NEWS"
			}
		]
	};

	const pgpKeys = [
		{
			id: "4EDC5219",
			period: "Releases since 2.4.0",
			fingerprint: "EF08 8207 9FD4 ED32 BF8B 23B2 A1B0 9EF8 4EDC 5219",
			link: "https://dovecot.org/gpgkeys/DOVECOT-REPO-GPG-2.4"
		},
		{
			id: "ED409DA1",
			period: "Releases since 0.5.5",
			fingerprint: "2BE7 4AAB 3EE7 54DF B9C8 0D33 18A3 48AE ED40 9DA1",
			link: "https://dovecot.org/gpgkeys/DOVECOT-REPO-GPG-2.3"
		},
		{
			id: "3DFBB4F4",
			period: "Releases before 0.5.5",
			fingerprint: "42F3 CD50 D4F2 5A41 833B EE37 04D6 2B1E 3DFB B4F4",
			link: "https://dovecot.org/gpgkeys/PIGEONHOLE-OLD"
		}
	];
</script>

<svelte:head>
	<title>Downloads & Releases - Pigeonhole</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-3xl mx-auto mb-12">
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mt-4 mb-4">
				Download Pigeonhole Sieve
			</h1>
			<p class="font-body-md text-on-surface-variant leading-relaxed">
				Access stable and legacy source code releases, binary repositories, and the Git source.
			</p>
		</div>

		<!-- Warning / PGP verification check info box -->
		<div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12 max-w-4xl mx-auto flex gap-4 items-start shadow-sm">
			<span aria-hidden="true" class="material-symbols-outlined text-amber-600 text-2xl shrink-0">security</span>
			<div>
				<h3 class="font-headline-md text-sm font-bold text-amber-800 mb-1">Verify Signatures</h3>
				<p class="font-body-md text-xs text-amber-700 leading-relaxed">
					All tarballs are signed with public PGP keys.
					Verify downloads using the keys listed below.
				</p>
			</div>
		</div>

		<!-- Main Download Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			
			<!-- Left/Top: Releases & Git -->
			<div class="lg:col-span-8 space-y-8">
				
				<!-- Stable Releases -->
				<div class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 space-y-6">
					<div class="flex items-center gap-3">
						<span aria-hidden="true" class="material-symbols-outlined text-primary text-3xl">verified</span>
						<h2 class="font-headline-xl text-2xl text-on-background font-bold">Stable Release</h2>
					</div>
					
					<div class="p-6 bg-surface rounded-xl border border-outline-variant/30 space-y-4">
						<div class="flex justify-between items-center flex-wrap gap-2">
							<div>
								<span class="text-xs uppercase font-bold tracking-wider text-primary">Latest Release</span>
								<h3 class="font-mono text-xl font-extrabold text-on-background mt-1">
									dovecot-pigeonhole-{releases.stable.version}
								</h3>
							</div>
							<span class="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold font-mono">
								For Dovecot {releases.stable.dovecotVersion}
							</span>
						</div>

						<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
							Download source code to compile with Dovecot. Direct binary distributions can also be fetched from the official Dovecot repositories.
						</p>

						<div class="flex flex-wrap gap-3 pt-2">
							<a 
								href={releases.stable.tarball} 
								class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/95 text-on-primary transition-all shadow-sm"
							>
								<span aria-hidden="true" class="material-symbols-outlined text-sm">download</span>
								Download Sources
							</a>
							<a 
								href={releases.stable.sig} 
								class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface transition-all"
							>
								<span aria-hidden="true" class="material-symbols-outlined text-sm">enhanced_encryption</span>
								PGP Signature
							</a>
							<a 
								href={releases.stable.news} 
								target="_blank" 
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant text-on-surface transition-all"
							>
								<span aria-hidden="true" class="material-symbols-outlined text-sm">description</span>
								Change Log
							</a>
						</div>
					</div>

					<!-- Binaries and Docker -->
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div class="p-5 bg-surface rounded-xl border border-outline-variant/30 space-y-2">
							<h4 class="font-headline-lg text-sm text-on-background font-bold flex items-center gap-2">
								<span aria-hidden="true" class="material-symbols-outlined text-primary text-base">dns</span>
								Binary Packages
							</h4>
							<p class="text-xs text-on-surface-variant leading-relaxed">
								Pre-built packages of Dovecot Sieve can be installed directly from the Dovecot package repository.
							</p>
							<a href="https://repo.dovecot.org/" target="_blank" rel="noopener noreferrer" class="inline-flex text-xs font-bold link-subtle items-center gap-1 pt-2">
								Visit package repository <span aria-hidden="true" class="material-symbols-outlined text-xs">arrow_forward</span>
							</a>
						</div>

						<div class="p-5 bg-surface rounded-xl border border-outline-variant/30 space-y-2">
							<h4 class="font-headline-lg text-sm text-on-background font-bold flex items-center gap-2">
								<span aria-hidden="true" class="material-symbols-outlined text-primary text-base">grid_view</span>
								Docker Containers
							</h4>
							<p class="text-xs text-on-surface-variant leading-relaxed">
								Official Docker image comes with full Pigeonhole Sieve support.
							</p>
							<a href="https://hub.docker.com/r/dovecot/dovecot" target="_blank" rel="noopener noreferrer" class="inline-flex text-xs font-bold link-subtle items-center gap-1 pt-2">
								View on Docker Hub <span aria-hidden="true" class="material-symbols-outlined text-xs">arrow_forward</span>
							</a>
						</div>
					</div>
				</div>

				<!-- Old Stable Releases -->
				<div class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 space-y-6">
					<div class="flex items-center gap-3">
						<span aria-hidden="true" class="material-symbols-outlined text-on-surface-variant text-3xl">history</span>
						<h2 class="font-headline-xl text-2xl text-on-background font-bold">Old Stable Releases</h2>
					</div>

					<div class="space-y-4">
						{#each releases.legacy as rel}
							<div class="p-5 bg-surface rounded-xl border border-outline-variant/30 flex justify-between items-center flex-wrap gap-4">
								<div class="space-y-1">
									<h3 class="font-mono text-sm font-extrabold text-on-background">
										dovecot-{rel.version}
									</h3>
									<p class="text-xs text-on-surface-variant">
										Sieve support package for Dovecot {rel.dovecotVersion}
									</p>
								</div>

								<div class="flex flex-wrap gap-2">
									<a 
										href={rel.tarball} 
										class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
									>
										<span aria-hidden="true" class="material-symbols-outlined text-xs">download</span>
										Sources
									</a>
									<a 
										href={rel.sig} 
										class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
									>
										<span aria-hidden="true" class="material-symbols-outlined text-xs">lock</span>
										Signature
									</a>
									<a 
										href={rel.news} 
										target="_blank" 
										rel="noopener noreferrer"
										class="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 text-on-surface transition-all"
									>
										<span aria-hidden="true" class="material-symbols-outlined text-xs">description</span>
										News
									</a>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<!-- Git Repository -->
				<div class="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 space-y-6">
					<div class="flex items-center gap-3">
						<span aria-hidden="true" class="material-symbols-outlined text-primary text-3xl">developer_mode</span>
						<h2 class="font-headline-xl text-2xl text-on-background font-bold">Git Repository</h2>
					</div>
					
					<div class="space-y-4">
						<CodeBlock 
							code="git clone https://github.com/dovecot/pigeonhole.git"
							copyId="git_clone"
							label="Clone Repository"
						/>
						
						<p class="text-xs text-on-surface-variant leading-relaxed">
							Refer to the <a href="https://raw.githubusercontent.com/dovecot/pigeonhole/main/README" target="_blank" rel="noopener noreferrer" class="link-subtle font-bold">README</a> and <a href="https://raw.githubusercontent.com/dovecot/pigeonhole/main/INSTALL" target="_blank" rel="noopener noreferrer" class="link-subtle font-bold">INSTALL</a> instructions files inside the repository for custom compilation flags and setup details.
						</p>
					</div>
				</div>
			</div>

			<!-- Right/Bottom: PGP keys -->
			<div class="lg:col-span-4 space-y-6">
				<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 space-y-4">
					<div>
						<h3 class="font-headline-lg text-lg text-on-background font-bold mb-1">PGP Signing Keys</h3>
						<p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
							Use these GPG public keys to verify downloaded Sieve files:
						</p>
					</div>

					<div class="space-y-4">
						{#each pgpKeys as key}
							<div class="p-4 bg-surface rounded-xl border border-outline-variant/20 space-y-2">
								<div class="flex justify-between items-start flex-wrap gap-1 border-b border-outline-variant/10 pb-2">
									<div>
										<h4 class="font-mono text-xs font-bold text-on-background">
											Key ID: {key.id}
										</h4>
										<span class="text-xs text-on-surface-variant/70 italic">
											{key.period}
										</span>
									</div>
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
<span class="block text-[11px] uppercase tracking-wider font-bold text-outline">Fingerprint</span>
									<code class="block text-xs font-mono p-2 bg-black/10 text-on-surface-variant rounded select-all break-all leading-normal">
										{key.fingerprint}
									</code>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
