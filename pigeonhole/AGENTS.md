# AI Agent Development Guide

## Stack

- SvelteKit + Svelte 5 Runes (`$state`, `$derived`, `$effect`)
- Tailwind CSS v4 + TypeScript (strict compilation check)

## Structure

- `src/routes/`: Route templates (all views are statically defined)
- `src/lib/assets/`: Static asset files (e.g., Pigeonhole logo)

## Rules

- **Branding**: Top bar (utilizing the `<Header>` component from `@dovecot/shared-ui`) displays the Pigeonhole logo beside "Pigeonhole" (title) and "Sieve Support" (subtitle).
- See [../packages/shared-ui/AGENTS.md](../packages/shared-ui/AGENTS.md) for shared rules (Icons, A11y, TypeScript).
