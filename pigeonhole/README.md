# Pigeonhole Website

Sieve Support for Dovecot. Svelte 5 (runes) + Tailwind CSS v4.

## Quick start

```
npm install
npm run dev        # http://localhost:5173
npm run check      # lint + type-check
npm run build      # production build
npm run preview    # preview production build, http://localhost:4173
```

## Doing a release

1. **Update `src/lib/data/releases.json`** — bump the `stable` entry (version,
   tarball, sig, news URL) and move the old stable to `legacy` if needed.
2. Build, deploy, done.

## Data files

All content lives under `src/lib/data/` — read the JSON files directly for schema details:

| File | Used for |
|---|---|
| `features.json` | feature cards |
| `releases.json` | release download data |
| `pgp-keys.json` | PGP key display |
| `slides.json` | presentation/slides data |
| `rfc-extensions.json` | RFC extension listings |
| `dovecot-extensions.json` | Dovecot extension listings |