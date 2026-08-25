# Dovecot Websites

This repository is for maintaining Dovecot's public websites.

Map of websites

- main => dovecot.org website
- pigeonhole => pigeonhole.dovecot.org
- repo => repository index redirect page (host/path set in the `repo` environment)

## Building a Website

`npm run -w <website> build`

## Adding New Website

Use `npm init -w ./name` to add new website. This should get added into package.json too.

## Testing

Push changes first to `develop` branch to make sure they work, this will deploy as <https://wwwdev.dovecot.org>.

Once you've checked your changes, create pull request to main branch.

Local testing can be accomplished via `npm run -w <website> dev`.

## Deployment

Deployment is driven by GitHub Actions environments, one per site:

| Environment  | Branch    | Source           |
|--------------|-----------|------------------|
| `dovecot`    | `main`    | `main/build`     |
| `dovecot-dev`| `develop` | `main/build`     |
| `pigeonhole` | `main`    | `pigeonhole/build` |
| `repo`       | `main`    | `repo/` (copied as-is) |

Each environment supplies `HOST` and `REMOTEPATH` as environment variables and
`DEPLOY_KEY` as an environment secret. A missing `DEPLOY_KEY` makes that
environment's deploy step skip silently, as does a missing `HOST` or
`REMOTEPATH`.

The `repo` deployment deliberately omits rsync's `--delete`: its target is a
package repository, and deleting remote files not present in `repo/` would
destroy the archive.

### Subdirectory Deployments (`BASE_PATH`)

If hosting a website under a custom subdirectory (for instance `/test/main`),
supply the `BASE_PATH` environment variable when building:

```bash
BASE_PATH=/test/main npm run -w main build
```

This updates SvelteKit's `paths.base` configuration so all routes and static assets resolve correctly.
