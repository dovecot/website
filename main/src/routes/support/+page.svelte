<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Support & Help - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter bg-grid-pattern transition-colors duration-300">
	<div class="max-w-container-max mx-auto">
		<div class="text-center max-w-2xl mx-auto mb-12">
			<h1 class="font-headline-xl text-4xl text-on-background dark:text-white font-extrabold mb-4">
				Support & Community
			</h1>
			<p class="font-body-md text-on-surface-variant dark:text-outline-variant">
				Ask the community, subscribe to mailing lists, or submit software bug reports.
			</p>
		</div>

		<!-- Support Channels -->
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
			<!-- Mailing Lists -->
			<div class="bg-surface-container-low dark:bg-inverse-surface/40 p-6 rounded-2xl border border-outline-variant/40 dark:border-white/5 flex flex-col justify-between">
				<div>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-2xl">mail</span>
					</div>
					<h2 class="font-headline-lg text-xl text-on-background dark:text-white font-bold mb-3">Community Mailing Lists</h2>
					<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed mb-6">
						The primary venue for support, general questions, and technical discussions. Read archives or post your Dovecot queries.
					</p>
				</div>
				<a
					href="https://dovecot.org/mailman/listinfo/dovecot"
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center justify-center bg-white hover:bg-surface-container-low text-primary border border-outline-variant/60 dark:bg-inverse-surface dark:text-primary-fixed dark:border-outline/40 dark:hover:bg-white/5 font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
				>
					Mailing List Info
				</a>
			</div>

			<!-- Bug Tracking -->
			<div class="bg-surface-container-low dark:bg-inverse-surface/40 p-6 rounded-2xl border border-outline-variant/40 dark:border-white/5 flex flex-col justify-between">
				<div>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-2xl">bug_report</span>
					</div>
					<h2 class="font-headline-lg text-xl text-on-background dark:text-white font-bold mb-3">Report Issues</h2>
					<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed mb-6">
						Encountered a Dovecot bug? Report general bugs on GitHub or security issues via our security notification process.
					</p>
				</div>
				<a
					href="https://github.com/dovecot/core/issues"
					target="_blank"
					rel="noreferrer"
					class="inline-flex items-center justify-center bg-white hover:bg-surface-container-low text-primary border border-outline-variant/60 dark:bg-inverse-surface dark:text-primary-fixed dark:border-outline/40 dark:hover:bg-white/5 font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
				>
					Submit GitHub Issue
				</a>
				<a
					href="{base}/security"
					class="w-full md:w-auto inline-flex items-center justify-center bg-error hover:bg-error/90 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors cursor-pointer"
				>
					Security Reports
				</a>
			</div>

			<!-- IRC Chat -->
			<div class="bg-surface-container-low dark:bg-inverse-surface/40 p-6 rounded-2xl border border-outline-variant/40 dark:border-white/5 flex flex-col justify-between">
				<div>
					<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 text-primary">
						<span aria-hidden="true" class="material-symbols-outlined text-2xl">forum</span>
					</div>
					<h2 class="font-headline-lg text-xl text-on-background dark:text-white font-bold mb-3">IRC Chat Support</h2>
					<p class="font-body-md text-sm text-on-surface-variant dark:text-outline-variant leading-relaxed mb-4">
						You can get real-time support and chat with the Dovecot developer and community team on IRC. Connect to the #dovecot channel on the OFTC IRC network.
					</p>
					<div class="bg-black/5 dark:bg-black/20 p-3 rounded-lg text-xs space-y-1 mb-6 border border-outline-variant/20 font-mono text-on-surface-variant dark:text-outline-variant">
						<p><span class="font-semibold text-on-background dark:text-white">Network:</span> irc.oftc.net</p>
						<p><span class="font-semibold text-on-background dark:text-white">Channel:</span> #dovecot</p>
					</div>
				</div>
				<a
					href="ircs://irc.oftc.net:6697/dovecot"
					class="inline-flex items-center justify-center bg-white hover:bg-surface-container-low text-primary border border-outline-variant/60 dark:bg-inverse-surface dark:text-primary-fixed dark:border-outline/40 dark:hover:bg-white/5 font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all"
				>
					Connect on IRC
				</a>
			</div>
		</div>
	</div>
</section>
