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

| Environment  | Source                 |
|--------------|------------------------|
| `dovecot`    | `main/build`           |
| `pigeonhole` | `pigeonhole/build`     |
| `repo`       | `repo/` (copied as-is) |

Every environment deploys from both `main` and `develop`.

Each environment supplies `HOST`, `USER` and `REMOTEPATH` as environment
variables and `DEPLOY_KEY` as an environment secret. `REMOTEPATH` is the base directory; the
branch name is appended to it, so each site keeps its `main` and `develop`
copies side by side under `/home/website/public_html/<component>/<branch>`;
<https://wwwdev.dovecot.org> is served from the `dovecot` environment's
`develop` one.

A missing `DEPLOY_KEY`, `HOST`, `USER` or `REMOTEPATH` makes that environment's
deploy step skip silently.

### Subdirectory Deployments (`BASE_PATH`)

If hosting a website under a custom subdirectory (for instance `/test/main`),
supply the `BASE_PATH` environment variable when building:

```bash
BASE_PATH=/test/main npm run -w main build
```

This updates SvelteKit's `paths.base` configuration so all routes and static assets resolve correctly.
