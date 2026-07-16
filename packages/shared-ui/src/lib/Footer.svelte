<script lang="ts">
	import { base } from '$app/paths';
	import GitHubIcon from './GitHubIcon.svelte';

	let {
		copyrightName = 'Open-Xchange Oy',
		githubUrl = 'https://github.com/dovecot/website/',
		contactUrl = ''
	} = $props<{
		copyrightName?: string;
		githubUrl?: string;
		contactUrl?: string;
	}>();

	function resolveHref(href: string) {
		return /^https?:/.test(href) ? href : `${base}${href}`;
	}
</script>

<footer class="bg-surface-container-lowest dark:bg-inverse-surface border-t border-outline-variant/30 transition-colors duration-300 w-full">
	<div class="max-w-container-max mx-auto px-gutter py-8 flex flex-col md:flex-row justify-between items-center gap-4">
		<div class="text-body-md text-on-surface-variant dark:text-outline-variant">
			<span>© {new Date().getFullYear()} {copyrightName}</span>
		</div>
		<div class="flex items-center gap-6">
			<a
				href={resolveHref('/legal')}
				class="text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
			>
				Legal
			</a>
			{#if contactUrl}
				<a
					href={resolveHref(contactUrl)}
					class="text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
				>
					Contact
				</a>
			{/if}
			<a
				href={githubUrl}
				target="_blank"
				rel="noreferrer"
				class="flex items-center gap-2 text-body-md text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
			>
				<GitHubIcon iconClass="w-5 h-5 fill-current" />
				Website Source
			</a>
		</div>
	</div>
</footer>
