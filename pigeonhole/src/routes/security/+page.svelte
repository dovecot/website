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
	</div>
</section>
