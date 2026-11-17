# AI Agent Development Guide — Shared

## Stack

- SvelteKit + Svelte 5 Runes (`$state`, `$derived`, `$effect`)
- Tailwind CSS v4 + TypeScript (strict compilation check)

## Rules

- **Icons**: Use the `<Icon name="icon_name" />` component from `@dovecot/shared-ui` (backed by `unplugin-icons` / `@iconify-json/material-symbols`). Register new icons in `packages/shared-ui/src/lib/Icon.svelte`.
- **A11y**: Use `<span>`/`<p>` instead of `<label>` for static visual wrapping to pass accessibility checks.
- **TypeScript**: Safely cast dynamic dictionary index references (e.g. `versions[activeVersion]`) inside a `$derived.by` block to prevent build compile errors.
