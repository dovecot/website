<script lang="ts">
	import Icon from './Icon.svelte';
	let { label, code, ariaLabel = 'Copy Code' } = $props<{
		label: string;
		code: string;
		ariaLabel?: string;
	}>();

	let copied = $state(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}
</script>

<div class="space-y-2">
	<span class="block text-xs font-bold text-slate-500 dark:text-slate-400">{label}</span>
	<div class="relative bg-[#1A1F2B] rounded-lg overflow-hidden group">
		<pre class="p-4 text-xs font-mono text-slate-200 overflow-x-auto"><code>{code}</code></pre>
		<button
			onclick={copyToClipboard}
			class="absolute right-3 top-3 bg-white/10 hover:bg-white/20 text-white p-1 rounded flex items-center justify-center cursor-pointer transition-colors"
			aria-label={ariaLabel}
			aria-live="polite"
		>
			<Icon name={copied ? 'check' : 'content_copy'} style="font-size:16px" />
		</button>
		<!-- Screen reader copy feedback (WCAG 4.1.2) -->
		<div aria-live="polite" class="sr-only">
			{copied ? 'Copied to clipboard' : ''}
		</div>
	</div>
</div>
