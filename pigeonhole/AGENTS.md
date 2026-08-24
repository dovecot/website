# AI Agent Development Guide

## Stack

- SvelteKit + Svelte 5 Runes (`$state`, `$derived`, `$effect`)
- Tailwind CSS v4 + TypeScript (strict compilation check)

## Structure

- `src/routes/`: Route templates (all views are statically defined)
- `src/lib/assets/`: Static asset files (e.g., Pigeonhole logo)

## Rules

- **Branding**: Top bar (utilizing the `<Header>` component from `@dovecot/shared-ui`) displays the Pigeonhole logo beside "Pigeonhole" (title) and "Sieve Support" (subtitle).
- **Icons**: Use Google's Material Symbols Outlined font. Use the 'material-symbols' class so the source font can be easily swapped (`<span class="material-symbols">icon_name</span>`).
- **A11y**: Use `<span>`/`<p>` instead of `<label>` for static visual wrapping to pass accessibility checks.
- **TypeScript**: Safely cast dynamic dictionary index references (e.g. `versions[activeVersion]`) inside a `$derived.by` block to prevent build compile errors.
