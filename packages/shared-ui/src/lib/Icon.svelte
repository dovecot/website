<script module lang="ts">
	/**
	 * Static icon registry backed by `unplugin-icons`
	 * (`@iconify-json/material-symbols`).
	 *
	 * Explicit imports are required so Vite can tree-shake and inline only
	 * the used SVGs at build time.
	 *
	 * To add a new icon:
	 * 1. Convert the snake_case Material Symbol name to kebab-case (e.g.
	 * `my_icon` -> `my-icon`).
	 * 2. Use `<slug>-outline` for outlined icons (or `<slug>` for filled
	 * icons / icons without an `-outline` variant).
	 * 3. Import it from `~icons/material-symbols/<slug>` and add an entry
	 * to `ICONS` below.
	 */
	import type { Component } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import archiveOutline from '~icons/material-symbols/archive-outline';
	import arrowBack from '~icons/material-symbols/arrow-back';
	import arrowForward from '~icons/material-symbols/arrow-forward';
	import bugReportOutline from '~icons/material-symbols/bug-report-outline';
	import check from '~icons/material-symbols/check';
	import close from '~icons/material-symbols/close';
	import code from '~icons/material-symbols/code';
	import contactSupportOutline from '~icons/material-symbols/contact-support-outline';
	import contentCopyOutline from '~icons/material-symbols/content-copy-outline';
	import descriptionOutline from '~icons/material-symbols/description-outline';
	import displaySettings from '~icons/material-symbols/display-settings';
	import dnsOutline from '~icons/material-symbols/dns-outline';
	import download from '~icons/material-symbols/download';
	import enhancedEncryptionOutline from '~icons/material-symbols/enhanced-encryption-outline';
	import errorOutline from '~icons/material-symbols/error-outline';
	import extension from '~icons/material-symbols/extension';
	import factCheck from '~icons/material-symbols/fact-check';
	import filterAlt from '~icons/material-symbols/filter-alt';
	import findInPageOutline from '~icons/material-symbols/find-in-page-outline';
	import folderOpenOutline from '~icons/material-symbols/folder-open-outline';
	import forumOutline from '~icons/material-symbols/forum-outline';
	import gridViewOutline from '~icons/material-symbols/grid-view-outline';
	import healing from '~icons/material-symbols/healing';
	import history from '~icons/material-symbols/history';
	import integrationInstructions from '~icons/material-symbols/integration-instructions';
	import lockOutline from '~icons/material-symbols/lock-outline';
	import mailOutline from '~icons/material-symbols/mail-outline';
	import menu from '~icons/material-symbols/menu';
	import monitoring from '~icons/material-symbols/monitoring';
	import northEast from '~icons/material-symbols/north-east';
	import openInNew from '~icons/material-symbols/open-in-new';
	import personOutline from '~icons/material-symbols/person-outline';
	import rocketLaunch from '~icons/material-symbols/rocket-launch';
	import search from '~icons/material-symbols/search';
	import shieldLock from '~icons/material-symbols/shield-lock';
	import shieldOutline from '~icons/material-symbols/shield-outline';
	import speedOutline from '~icons/material-symbols/speed-outline';
	import splitscreen from '~icons/material-symbols/splitscreen';
	import star from '~icons/material-symbols/star';
	import terminal from '~icons/material-symbols/terminal';
	import upgrade from '~icons/material-symbols/upgrade';
	import verified from '~icons/material-symbols/verified';
	import verifiedUser from '~icons/material-symbols/verified-user';
	import warningOutline from '~icons/material-symbols/warning-outline';
	import workspacePremium from '~icons/material-symbols/workspace-premium';

	const ICONS = {
		archive: archiveOutline,
		arrow_back: arrowBack,
		arrow_forward: arrowForward,
		bug_report: bugReportOutline,
		check,
		close,
		code,
		contact_support: contactSupportOutline,
		content_copy: contentCopyOutline,
		description: descriptionOutline,
		display_settings: displaySettings,
		dns: dnsOutline,
		download,
		enhanced_encryption: enhancedEncryptionOutline,
		error: errorOutline,
		extension,
		fact_check: factCheck,
		filter_alt: filterAlt,
		find_in_page: findInPageOutline,
		folder_open: folderOpenOutline,
		forum: forumOutline,
		grid_view: gridViewOutline,
		healing,
		history,
		integration_instructions: integrationInstructions,
		lock: lockOutline,
		mail: mailOutline,
		menu,
		monitoring,
		north_east: northEast,
		open_in_new: openInNew,
		person: personOutline,
		rocket_launch: rocketLaunch,
		search,
		shield: shieldOutline,
		shield_lock: shieldLock,
		speed: speedOutline,
		splitscreen,
		star,
		terminal,
		upgrade,
		verified,
		verified_user: verifiedUser,
		warning: warningOutline,
		workspace_premium: workspacePremium
	} as const satisfies Record<string, Component<SvelteHTMLElements['svg']>>;

	export type IconName = keyof typeof ICONS;
</script>

<script lang="ts">
	let {
		name,
		class: className = '',
		style = ''
	}: {
		name: IconName;
		class?: string;
		style?: string;
	} = $props();

	const IconComponent = $derived.by(() => {
		const component = ICONS[name];
		if (!component) {
			throw new Error(`Unknown icon: ${name}`);
		}
		return component;
	});
</script>

<IconComponent
	aria-hidden="true"
	class="inline-block shrink-0 align-middle leading-none {className}"
	style="width: 1em; height: 1em; {style}"
/>
