<script lang="ts">
	import rfcExtensions from '$lib/data/rfc-extensions.json';
	import dovecotExtensions from '$lib/data/dovecot-extensions.json';
</script>

<svelte:head>
	<title>About - Pigeonhole</title>
</svelte:head>

<!-- Overview Section -->
<section class="py-12 px-gutter bg-surface-container-low border-b border-outline-variant/30">
	<div class="max-w-container-max mx-auto">
		<div class="text-center max-w-2xl mx-auto mb-10">
			<h2 class="font-headline-xl text-3xl text-on-background font-extrabold mb-3">Project Overview</h2>
			<div class="h-1 w-16 bg-primary mx-auto rounded"></div>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 font-body-md text-on-surface-variant leading-relaxed text-sm md:text-base">
			<div class="space-y-4">
				<p>
					<strong>Pigeonhole</strong> adds support for the <a href="http://www.sieve.info" target="_blank" rel="noopener noreferrer" class="link-subtle font-semibold">Sieve language</a> (<a href="https://tools.ietf.org/html/rfc5228/" target="_blank" rel="noopener noreferrer" class="link-subtle">RFC 5228</a>) and the <a href="https://tools.ietf.org/html/rfc5804" target="_blank" rel="noopener noreferrer" class="link-subtle font-semibold">ManageSieve protocol</a> (<a href="https://tools.ietf.org/html/rfc5804" target="_blank" rel="noopener noreferrer" class="link-subtle">RFC 5804</a>) to the <a href="https://dovecot.org/" target="_blank" rel="noopener noreferrer" class="link-subtle font-semibold">Dovecot Secure IMAP Server</a>.
				</p>
				<p>
					Literally, a <em>pigeonhole</em> is a recess within a dovecot where pigeons nest. It also refers to a series of small, open compartments in a cabinet used for sorting mail. As a verb, "to pigeonhole" describes the act of placing an item into one of these compartments.
				</p>
				<p class="bg-primary/5 border border-primary-container/20 p-4 rounded-xl italic">
					Accordingly, the name "Pigeonhole" aptly describes a core functionality this project adds to Dovecot: the sorting and filing of email messages.
				</p>
			</div>
			
			<div class="space-y-4">
				<p>
					The Sieve language is used to specify how email should be processed. By writing Sieve scripts, users can customize message delivery—for example, determining whether messages are forwarded or stored in specific folders. Unwanted messages can be discarded or rejected, and the Sieve interpreter can send automated replies when a user is unavailable.
				</p>
				<p>
					Above all, the Sieve language is designed to be simple, extensible, and system-independent. Unlike most mail-filtering languages, it does not allow users to execute arbitrary programs. This is critical for preventing virtual users from gaining full access to the mail store; the language is intentionally restricted to ensure users cannot perform actions more complex (or dangerous) than writing simple mail filters.
				</p>
				<p>
					The Pigeonhole project provides Sieve support as a plugin for Dovecot's Local Delivery Agent (LDA). Additionally, the ManageSieve protocol is provided as a service alongside Dovecot's POP3 and IMAP services.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Standards & RFC Support Section -->
<section class="py-16 px-gutter bg-surface-container-lowest border-t border-outline-variant/30">
	<div class="max-w-container-max mx-auto">
		<div class="text-center mb-12 flex flex-col items-center">
			<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary shadow-sm">
				<span aria-hidden="true" class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">integration_instructions</span>
			</div>
			<h2 class="font-headline-xl text-3xl md:text-5xl text-on-background font-extrabold tracking-tight mb-4">Standards & Extensions Support</h2>
			<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
				Pigeonhole maintains compliance with standard Sieve extensions while providing powerful custom hooks.
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
			<!-- Core and RFC Extensions -->
			<div class="lg:col-span-8 bg-surface-container-low p-6 md:p-8 rounded-2xl border border-outline-variant/40 space-y-6">
				<div>
					<h3 class="font-headline-lg text-xl text-on-background font-bold mb-2">Sieve Language & RFC Extensions</h3>
					<p class="font-body-md text-sm text-on-surface-variant">
						The core Sieve language is fully supported (including encoded-character, fileinto, and envelope), alongside a wide variety of Sieve capability extensions.
					</p>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
					{#each rfcExtensions as ext}
						<a 
							href={ext.link} 
							target="_blank" 
							rel="noopener noreferrer"
							class="flex flex-col p-3 rounded-xl bg-surface hover:bg-surface-dim border border-outline-variant/30 transition-all hover:scale-[1.01] hover:border-primary/50 group"
						>
							<div class="flex justify-between items-center">
								<span class="font-mono text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
									{ext.name}
								</span>
								{#if ext.version}
									<span class="text-[11px] bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">{ext.version}</span>
								{/if}
							</div>
							<span class="text-[11px] text-on-surface-variant/70 font-mono mt-1">{ext.rfc}</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Right Column: Dovecot Specific, ManageSieve, Roadmap -->
			<div class="lg:col-span-4 space-y-8">
				<!-- ManageSieve Protocol -->
				<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 space-y-3">
					<div class="flex items-center gap-3">
						<span aria-hidden="true" class="material-symbols-outlined text-primary text-2xl">dns</span>
						<h3 class="font-headline-lg text-lg text-on-background font-bold">ManageSieve</h3>
					</div>
					<p class="font-body-md text-sm text-on-surface-variant leading-relaxed">
						The <strong>ManageSieve protocol</strong> (<a href="https://tools.ietf.org/html/rfc5804" target="_blank" rel="noopener noreferrer" class="link-subtle">RFC 5804</a>) is fully supported, allowing secure remote script uploads and management.
					</p>
				</div>

				<!-- Dovecot-specific Sieve Extensions -->
				<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 space-y-4">
					<div>
						<h3 class="font-headline-lg text-lg text-on-background font-bold mb-1">Dovecot Specific Extensions</h3>
						<p class="font-body-md text-xs text-on-surface-variant">
							Proprietary extensions enabling custom command execution and integration (disabled by default).
						</p>
					</div>

					<div class="space-y-2">
						{#each dovecotExtensions as ext}
							<div class="p-3 bg-surface rounded-xl border border-outline-variant/20 space-y-1">
								<div class="flex justify-between items-center">
									<a href={ext.link} target="_blank" rel="noopener noreferrer" class="font-mono text-xs font-bold link-subtle">
										{ext.name}
									</a>
									<span class="text-[11px] bg-slate-100 text-on-surface-variant px-1.5 py-0.5 rounded font-mono font-bold">{ext.version}</span>
								</div>
								<p class="text-xs text-on-surface-variant leading-relaxed">{ext.desc}</p>
							</div>
						{/each}
					</div>
				</div>

			</div>
		</div>
	</div>
</section>
