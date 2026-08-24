# AI Agent Development Guide

## Stack

- SvelteKit + Svelte 5 Runes (`$state`, `$derived`, `$effect`)
- Tailwind CSS v4 + TypeScript (strict compilation check)

## Build Scripts

- `scripts/parse-markdown.js`: Generates `src/lib/data/security.json` and `src/lib/data/news.json` from markdown files in `src/lib/data/security/` and `src/lib/data/news/` respectively. All dates are normalized to "DD Mon YYYY" format (e.g., "04 Jan 2021"). **Do not hardcode JSON entries** — always run this script after adding or modifying source markdown files.

## Structure

- `src/lib/components/`: Header, Footer
- `src/lib/data/`: Centralized JSON feeds (Do not hardcode template text)
  - `news.json`: Release & security advisory feed for `/news`
  - `security.json`: Vuln index for `/security`
  - `repositories.json`: Target OS repository installation configurations for `/download`
  - `features.json`: Homepage feature details

## Rules

- **Branding**: Top bar utilizes dark `bg-inverse-surface` layout containing the logo beside "Dovecot Community Edition".
- **Icons**: Use Google's Material Symbols Outlined font. Use the 'material-symbols' class so the source font can be easily swapped (`<span class="material-symbols">icon_name</span>`).
- **A11y**: Use `<span>`/`<p>` instead of `<label>` for static visual wrapping to pass accessibility checks.
- **TypeScript**: Safely cast dynamic dictionary index references (e.g. `versions[activeVersion]`) inside a `$derived.by` block to prevent build compile errors.
