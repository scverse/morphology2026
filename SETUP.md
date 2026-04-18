# Setup guide

## Prerequisites

- [Hugo extended](https://gohugo.io/installation/) ≥ 0.128 (the `extended` variant is required for SCSS compilation).
- Git.

## Vendoring the Inter font (optional but recommended for production)

The template references Inter from `static/fonts/Inter/Inter-VariableFont_slnt,wght.ttf`. This is the same path used by [scverse.org](https://scverse.org).

If you have a local clone of [scverse/scverse.github.io](https://github.com/scverse/scverse.github.io):

```sh
cp -r ../scverse.github.io/static/fonts/Inter static/fonts/
```

Without the font file, browsers will fall back to system-ui (acceptable during development). For production, vendor the font so the site works without external dependencies.

## Pre-commit hooks (optional)

Prettier with go-template support keeps HTML templates consistently formatted.

```sh
pip install pre-commit
pre-commit install
```

## Favicon

Replace the placeholder files in `static/img/favicon/` with your event's favicon. At minimum, provide:
- `favicon.svg` — scalable version
- `favicon.png` — 32×32 fallback

## scverse logo

The nav uses `static/img/logo/scverse_symbol.svg`. Copy it from `scverse/scverse.github.io/static/img/logo/scverse_symbol.svg`.

## Adding a custom domain (subdomain approach, alternative to subpath)

If you want `yourvent.scverse.org` instead of `scverse.org/yourevent/`:

1. Add `static/CNAME` containing only `yourevent.scverse.org`.
2. Ask the scverse core team to add a DNS `CNAME` record pointing `yourevent.scverse.org` → `scverse.github.io`.
3. Update `baseURL` in `hugo.toml` to `https://yourevent.scverse.org/`.
4. Enable "Enforce HTTPS" in the repo's Pages settings once the DNS has propagated.

## Hugo version pinning

The workflow uses `hugo-version: "latest"`. To pin a specific version (more stable):

```yaml
- name: Setup Hugo
  uses: peaceiris/actions-hugo@v2
  with:
    hugo-version: "0.147.0"
    extended: true
```

## Removing sections

| Section | How to disable |
|---|---|
| Workstreams | Clear `data/workstreams.yml` (empty list `[]`) |
| Schedule | Delete `data/schedule.yml` or set `days: []` |
| Partners | Clear `data/partners.yml` |
| Sponsors | Clear `data/sponsors.yml` |
| Organisers | Clear `data/organisers.yml` |
| Calendar link | Remove `calendarURL` from `hugo.toml` |
| Map link | Remove `venueMapURL` from `hugo.toml` |
