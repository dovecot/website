<script lang="ts">
	const rfcExtensions = [
		{ name: "encoded-character", rfc: "RFC 5228; Section 2.4.2.4", link: "http://tools.ietf.org/html/rfc5228#section-2.4.2.4" },
		{ name: "fileinto", rfc: "RFC 5228; Section 4.1", link: "http://tools.ietf.org/html/rfc5228#section-4.1" },
		{ name: "envelope", rfc: "RFC 5228; Section 5.4", link: "http://tools.ietf.org/html/rfc5228#section-5.4" },
		{ name: "copy", rfc: "RFC 3894", link: "http://tools.ietf.org/html/rfc3894/" },
		{ name: "body", rfc: "RFC 5173", link: "http://tools.ietf.org/html/rfc5173/" },
		{ name: "environment", rfc: "RFC 5183", version: "v0.4.0+", link: "http://tools.ietf.org/html/rfc5183/" },
		{ name: "variables", rfc: "RFC 5229", link: "http://tools.ietf.org/html/rfc5229/" },
		{ name: "vacation", rfc: "RFC 5230", link: "http://tools.ietf.org/html/rfc5230/" },
		{ name: "vacation-seconds", rfc: "RFC 6131", version: "v0.2.3+", link: "http://tools.ietf.org/html/rfc6131" },
		{ name: "relational", rfc: "RFC 5231", link: "http://tools.ietf.org/html/rfc5231/" },
		{ name: "imap4flags", rfc: "RFC 5232", link: "http://tools.ietf.org/html/rfc5232/" },
		{ name: "subaddress", rfc: "RFC 5233", link: "http://tools.ietf.org/html/rfc5233/" },
		{ name: "spamtest", rfc: "RFC 5235", version: "v0.1.16+", link: "http://tools.ietf.org/html/rfc5235/" },
		{ name: "virustest", rfc: "RFC 5235", version: "v0.1.16+", link: "http://tools.ietf.org/html/rfc5235/" },
		{ name: "date", rfc: "RFC 5260; Section 4", version: "v0.1.12+", link: "http://tools.ietf.org/html/rfc5260#section-4" },
		{ name: "index", rfc: "RFC 5260; Section 6", version: "v0.4.7+", link: "http://tools.ietf.org/html/rfc5260#section-6" },
		{ name: "editheader", rfc: "RFC 5293", version: "v0.3.0+", link: "http://tools.ietf.org/html/rfc5293/" },
		{ name: "reject", rfc: "RFC 5429; Section 2.2", link: "http://tools.ietf.org/html/rfc5429#section-2.2" },
		{ name: "enotify", rfc: "RFC 5435", version: "v0.1.3+", link: "http://tools.ietf.org/html/rfc5435/" },
		{ name: "mailto (enotify)", rfc: "RFC 5436", version: "v0.1.3+", link: "http://tools.ietf.org/html/rfc5436/" },
		{ name: "ihave", rfc: "RFC 5463", version: "v0.2.4+", link: "http://tools.ietf.org/html/rfc5463" },
		{ name: "mailbox", rfc: "RFC 5490; Section 3", version: "v0.1.10+", link: "http://tools.ietf.org/html/rfc5490#section-3" },
		{ name: "mboxmetadata", rfc: "RFC 5490", version: "v0.4.7+", link: "http://tools.ietf.org/html/rfc5490" },
		{ name: "servermetadata", rfc: "RFC 5490", version: "v0.4.7+", link: "http://tools.ietf.org/html/rfc5490" },
		{ name: "foreverypart", rfc: "RFC 5703; Section 3", version: "v0.4.10+", link: "http://tools.ietf.org/html/rfc5703#section-3" },
		{ name: "mime", rfc: "RFC 5703; Section 4", version: "v0.4.10+", link: "http://tools.ietf.org/html/rfc5703#section-4" },
		{ name: "extracttext", rfc: "RFC 5703; Section 7", version: "v0.4.12+", link: "http://tools.ietf.org/html/rfc5703#section-7" },
		{ name: "include", rfc: "RFC 6609", version: "v0.4.0+", link: "http://tools.ietf.org/html/rfc6609" },
		{ name: "imapsieve", rfc: "RFC 6785", version: "v0.4.14+", link: "https://tools.ietf.org/html/rfc6785" },
		{ name: "duplicate", rfc: "RFC 7352", version: "v0.4.3+", link: "http://tools.ietf.org/html/rfc7352" },
		{ name: "regex", rfc: "draft v08", link: "http://tools.ietf.org/html/draft-murchison-sieve-regex-08/" }
	];

	const dovecotExtensions = [
		{ name: "vnd.dovecot.debug", spec: "specification", version: "v0.3.0+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-debug.txt", desc: "Allows logging custom debug messages within Sieve scripts." },
		{ name: "vnd.dovecot.environment", spec: "specification", version: "v0.4.14+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-dovecot-environment.txt", desc: "Extends standard environment extension with Dovecot metadata and variables namespace." },
		{ name: "vnd.dovecot.execute", spec: "specification", version: "v0.4.0+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt", desc: "Executes a pre-defined set of external programs and processes string data." },
		{ name: "vnd.dovecot.filter", spec: "specification", version: "v0.4.0+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt", desc: "Filters complete email messages through a pre-defined set of external programs." },
		{ name: "vnd.dovecot.pipe", spec: "specification", version: "v0.4.0+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-extprograms.txt", desc: "Pipes email messages directly to external program inputs." },
		{ name: "vnd.dovecot.report", spec: "specification", version: "v0.4.14+", link: "https://raw.githubusercontent.com/dovecot/pigeonhole/master/doc/rfc/spec-bosch-sieve-report.txt", desc: "Implements sending Messaging Abuse Reporting Format (MARF) reports (RFC 5965)." }
	];

	const otherExtensions = {
		deprecated: [
			{ name: "imapflags", rfc: "obsolete draft", version: "v0.1.3+", link: "http://tools.ietf.org/html/draft-melnikov-sieve-imapflags-03" },
			{ name: "notify", rfc: "obsolete draft", version: "v0.1.15+", link: "http://tools.ietf.org/html/draft-martin-sieve-notify-01" }
		],
		underDev: [
			{ name: "ereject", rfc: "RFC 5429; Section 2.1", link: "http://tools.ietf.org/html/rfc5429#section-2.1", status: "implemented, but currently equal to reject" },
			{ name: "xmpp (enotify)", rfc: "RFC 5437", link: "http://tools.ietf.org/html/rfc5437/", status: "under development, will become available as plugin" }
		],
		planned: [
			{ name: "replace", rfc: "RFC 5703; Section 5", link: "http://tools.ietf.org/html/rfc5703#section-5" },
			{ name: "enclose", rfc: "RFC 5703; Section 6", link: "http://tools.ietf.org/html/rfc5703#section-6" },
			{ name: "envelope-dsn / redirect-dsn", rfc: "RFC 6009", link: "http://tools.ietf.org/html/rfc6009", note: "depends on lib-smtp changes in Dovecot" },
			{ name: "extlists", rfc: "RFC 6134", link: "http://tools.ietf.org/html/rfc6134" },
			{ name: "convert", rfc: "RFC 6558", link: "http://tools.ietf.org/html/rfc6558" }
		]
	};
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
					<strong>Pigeonhole</strong> adds support for the <a href="http://www.sieve.info" target="_blank" rel="noreferrer" class="link-subtle font-semibold">Sieve language</a> (<a href="http://tools.ietf.org/html/rfc5228/" target="_blank" rel="noreferrer" class="link-subtle">RFC 5228</a>) and the <a href="http://tools.ietf.org/html/rfc5804" target="_blank" rel="noreferrer" class="link-subtle font-semibold">ManageSieve protocol</a> (<a href="http://tools.ietf.org/html/rfc5804" target="_blank" rel="noreferrer" class="link-subtle">RFC 5804</a>) to the <a href="https://dovecot.org/" target="_blank" rel="noreferrer" class="link-subtle font-semibold">Dovecot Secure IMAP Server</a>.
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
							rel="noreferrer"
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
						The <strong>ManageSieve protocol</strong> (<a href="http://tools.ietf.org/html/rfc5804" target="_blank" rel="noreferrer" class="link-subtle">RFC 5804</a>) is fully supported, allowing secure remote script uploads and management.
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
									<a href={ext.link} target="_blank" rel="noreferrer" class="font-mono text-xs font-bold link-subtle">
										{ext.name}
									</a>
									<span class="text-[11px] bg-slate-100 text-on-surface-variant px-1.5 py-0.5 rounded font-mono font-bold">{ext.version}</span>
								</div>
								<p class="text-xs text-on-surface-variant leading-relaxed">{ext.desc}</p>
							</div>
						{/each}
					</div>
				</div>

				<!-- Roadmap and Roadmap Drafts -->
				<div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 space-y-4">
					<div>
						<h3 class="font-headline-lg text-lg text-on-background font-bold mb-1">Under Development & Planned</h3>
						<p class="font-body-md text-xs text-on-surface-variant">
							Future additions and features being developed for upcoming releases.
						</p>
					</div>

					<div class="space-y-3 text-xs text-on-surface-variant">
						<!-- Under dev -->
						<div>
							<h4 class="font-bold text-on-background mb-1.5 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Under Development</h4>
							<ul class="space-y-1.5 pl-3 list-disc">
								{#each otherExtensions.underDev as item}
									<li>
										<a href={item.link} target="_blank" rel="noreferrer" class="font-mono text-[11px] underline hover:text-primary">{item.name}</a>: <span class="italic">{item.status}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Planned -->
						<div class="border-t border-outline-variant/20 pt-3">
							<h4 class="font-bold text-on-background mb-1.5 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Planned Extensions</h4>
							<ul class="space-y-1 pl-3 list-disc">
								{#each otherExtensions.planned as item}
									<li>
										<a href={item.link} target="_blank" rel="noreferrer" class="font-mono text-[11px] underline hover:text-primary">{item.name}</a> ({item.rfc})
										{#if item.note}
											- <span class="italic text-xs text-amber-600">{item.note}</span>
										{/if}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
