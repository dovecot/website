<svelte:head>
	<title>Support & Contact - Pigeonhole</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<div class="text-center max-w-2xl mx-auto mb-12">
			<h1 class="font-headline-xl text-4xl text-on-background dark:text-white font-extrabold mb-4">
				Support & Contact
			</h1>
			<p class="font-body-md text-on-surface-variant dark:text-outline-variant">
				Get assistance from the community mailing lists or contact the developer directly.
			</p>
		</div>

		<!-- Support Channels -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
			<!-- Mailing Lists -->
			<div class="bg-surface-container-low dark:bg-inverse-surface/40 p-6 rounded-2xl border border-outline-variant/40 dark:border-white/5 flex flex-col justify-between">
				<div>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-2xl">mail</span>
					</div>
					<h2 class="font-headline-lg text-xl text-on-background dark:text-white font-bold mb-3">Community Mailing Lists</h2>
					<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed mb-6">
						For questions, bug reports, or general Sieve discussions, please use the official Dovecot mailing lists.
					</p>
				</div>
				<div>
					<a
						href="http://dovecot.org/support"
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-on-primary font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
					>
						Dovecot Mailing Lists
					</a>
				</div>
			</div>

			<!-- Direct Contact -->
			<div class="bg-surface-container-low dark:bg-inverse-surface/40 p-6 rounded-2xl border border-outline-variant/40 dark:border-white/5 flex flex-col justify-between">
				<div>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-2xl">person</span>
					</div>
					<h2 class="font-headline-lg text-xl text-on-background dark:text-white font-bold mb-3">Direct Contact</h2>
					<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed mb-6">
						You can contact the primary developer and maintainer of the Pigeonhole project directly for development inquiries:
					</p>
					<div class="bg-black/5 dark:bg-black/20 p-4 rounded-lg text-xs space-y-1 mb-6 border border-outline-variant/20 font-mono text-on-surface-variant dark:text-outline-variant">
						<p><span class="font-semibold text-on-background dark:text-white">Developer:</span> Stephan Bosch</p>
						<p><span class="font-semibold text-on-background dark:text-white">Email:</span> <span class="select-all text-primary dark:text-primary-fixed">stephan.bosch at open-xchange dot com</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
