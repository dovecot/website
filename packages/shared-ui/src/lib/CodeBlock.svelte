<script lang="ts">
	let { label, code, copyId, ariaLabel = 'Copy Code' } = $props<{
		label: string;
		code: string;
		copyId: string;
		ariaLabel?: string;
	}>();

	let copiedStates: Record<string, boolean> = $state({});

	function copyToClipboard(id: string, text: string) {
		navigator.clipboard.writeText(text);
		copiedStates[id] = true;
		setTimeout(() => copiedStates[id] = false, 2000);
	}
</script>

<div class="space-y-2">
	<span class="block text-xs font-bold text-slate-500 dark:text-slate-400">{label}</span>
	<div class="relative bg-[#1A1F2B] rounded-lg overflow-hidden group">
		<pre class="p-4 text-xs font-mono text-slate-200 overflow-x-auto"><code>{code}</code></pre>
		<button
			onclick={() => copyToClipboard(copyId, code)}
			class="absolute right-3 top-3 bg-white/10 hover:bg-white/20 text-white p-1 rounded flex items-center justify-center cursor-pointer transition-colors"
			aria-label={ariaLabel}
			aria-live="polite"
		>
			<span class="material-symbols" aria-hidden="true" style="font-size:16px">{copiedStates[copyId] ? 'check' : 'content_copy'}</span>
		</button>
		<!-- Screen reader copy feedback (WCAG 4.1.2) -->
		<div aria-live="polite" class="sr-only">
			{copiedStates[copyId] ? 'Copied to clipboard' : ''}
		</div>
	</div>
</div>
