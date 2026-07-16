# Dovecot Websites

This repository is for maintaining Dovecot's public websites.

Map of websites

- main => dovecot.org website
- pigeonhole => pigeonhole.dovecot.org

## Building a Website

You can use npm run -w <website> run docs:build

## Adding New Website

Use `npm init -w ./name` to add new website. This should get added into package.json too.

## Testing

Push changes first to `develop` branch to make sure they work, this will deploy as <https://wwwdev.dovecot.org>.

Once you've checked your changes, create pull request to main branch.

Local testing can be accomplished via `npm run -w <website> dev`.

### Subdirectory Deployments (`BASE_PATH`)

If hosting a website under a custom subdirectory (for instance `/test/main`),
supply the `BASE_PATH` environment variable when building:

```bash
BASE_PATH=/test/main npm run -w main build
```

This updates SvelteKit's `paths.base` configuration so all routes and static assets resolve correctly.
