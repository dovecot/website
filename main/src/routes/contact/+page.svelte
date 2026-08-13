<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Contact Us - Dovecot</title>
</svelte:head>

<section class="py-12 px-gutter max-w-3xl mx-auto">
	<h1 class="font-headline-xl text-3xl text-on-background font-extrabold mb-6 pb-2 border-b border-outline-variant/20">
		Contact Dovecot
	</h1>

	<div class="space-y-6 font-body-md text-on-surface-variant text-sm leading-relaxed">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
			<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40">
				<h2 class="font-headline-md text-lg text-on-background font-bold mb-2">General Inquiry</h2>
				<p class="font-semibold text-primary">info@dovecot.org</p>
			</div>

			<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/40">
				<h2 class="font-headline-md text-lg text-on-background font-bold mb-2">Commercial / Pro</h2>
				<a
					href="https://www.dovecotpro.com"
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold link-subtle"
				>
					Dovecot Pro Queries
				</a>
			</div>
		</div>

		<div class="text-center mt-12 bg-surface-container-low p-6 rounded-xl border border-outline-variant/40">
			<p class="font-semibold mb-2 text-lg text-on-background">Looking for technical help?</p>
			<a href="{base}/support" class="inline-flex items-center gap-1.5 bg-primary text-on-primary text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/95 transition-colors">
				<span aria-hidden="true" class="material-symbols-outlined text-sm">contact_support</span>
				Go to Support Page
			</a>
		</div>
	</div>
</section>
