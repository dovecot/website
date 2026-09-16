<svelte:head>
	<title>Security - Pigeonhole</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<!-- Header -->
		<div class="text-center max-w-2xl mx-auto mb-12 space-y-4">
			<h1 class="font-headline-xl text-4xl text-on-background font-extrabold mb-4">
				Security
			</h1>
			<p class="font-body-md text-on-surface-variant leading-relaxed">
				Pigeonhole is developed and maintained by the Dovecot team with the same security standards as Dovecot itself. Security issues affect the Dovecot project as a whole, so vulnerability reporting and advisories are handled centrally.
			</p>
		</div>

		<!-- Reporting info grids -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
			<!-- Found a security bug? -->
			<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
				<div class="space-y-3">
					<div class="inline-flex items-center gap-2 bg-error/10 text-error px-3 py-1 rounded-full text-xs font-bold uppercase">
						<span aria-hidden="true" class="material-symbols text-sm">shield</span>
						Reporting Vulnerabilities
					</div>
					<h2 class="font-headline-lg text-xl text-on-background font-bold">Found a Security Bug?</h2>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						Do not report security issues via public mailing lists or public issues tracker. Please report vulnerabilities confidentially using our GPG encrypted mailbox at <strong class="text-on-background">security@dovecot.org</strong> or via our YesWeHack Bug Bounty Program.
					</p>
				</div>
				<div class="mt-6">
					<a
						href="https://yeswehack.com/programs/dovecot"
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
						<span aria-hidden="true" class="material-symbols text-sm">bug_report</span>
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

		<!-- Dovecot Pro Advisories Banner -->
		<div class="bg-gradient-to-r from-[#0e0d10] via-[#2d1543] to-[#3c036d] relative overflow-hidden rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
			<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#861be4]/20 via-transparent to-transparent pointer-events-none"></div>
			<div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
				<enhanced:img alt="" class="w-[200px] opacity-[0.06] blur-[1px] select-none" src="$lib/assets/pro-logo.png" />
			</div>
			<div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
				<div class="flex-1">
					<h3 class="font-['Space_Grotesk',sans-serif] text-base font-medium tracking-[0.02em] text-white mb-1">Dovecot Pro Security Advisories</h3>
					<p class="font-['Ubuntu_Sans',sans-serif] text-sm leading-relaxed text-white/85">
						Dovecot Pro is the commercial product and maintains its own security advisory program. Pro advisories may also be applicable to Dovecot and Pigeonhole Community Edition.
					</p>
				</div>
				<a
					class="font-['Space_Grotesk',sans-serif] text-sm font-medium tracking-[0.02em] shrink-0 inline-flex items-center justify-center bg-[#861be4]/50 hover:bg-[#4a117b]/70 text-white px-6 py-2.5 rounded-[14px] transition-all shadow-lg shadow-[#861be4]/30 hover:shadow-[#861be4]/50 cursor-pointer border border-white/10"
					href="https://documentation.open-xchange.com/dovecot/security/advisories/"
					target="_blank"
					rel="noopener noreferrer"
				>
					View Advisories
				</a>
			</div>
		</div>
	</div>
</section>
