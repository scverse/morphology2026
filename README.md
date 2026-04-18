# scverse event-template

A reusable Hugo site template for scverse hackathons and conferences. Covers every event in the [Unifying Omics](https://scverse.org/events/) series.

**Features**
- scverse brand identity (Inter, neutral greys, signature gradient) — locked in.
- Per-event colour palette — 4 lines in `hugo.toml`.
- Sections: hero · about · workstreams · schedule · organisers · partners · sponsors · contact.
- Partners + sponsors rendered automatically from YAML (sections hidden when empty).
- Fully responsive (mobile-first, Bootstrap 5 grid).
- GitHub Actions deploy to GitHub Pages.

---

## Quickstart (10 steps)

### 1 — Create your event repo

Click **"Use this template"** on [scverse/event-template](https://github.com/scverse/event-template) and name the new repo `YYYY_hackathon_<name>` (or any name you prefer).

### 2 — Set event identity

Edit `hugo.toml`:

```toml
baseURL       = "https://scverse.github.io/your-repo-name/"
title         = "scverse x Your Event 20XX"

[params]
  eventName     = "scverse x Your Event"
  eventDates    = "June 1–4, 2026"
  eventLocation = "Berlin, Germany"
  venueName     = "Your Venue"
  contactEmail  = "you@scverse.org"
  githubRepo    = "https://github.com/scverse/your-event-repo"
  zulipChannel  = "https://scverse.zulipchat.com/#narrow/channel/..."

  [params.cta]
    label = "Apply to join"
    url   = "https://forms.gle/your-form"
```

### 3 — Pick a colour palette

Still in `hugo.toml`, edit `[params.theme]`. Three presets to copy from the comments in that file:

| Preset | accent | gradientEnd |
|---|---|---|
| Default blue | `#262fb5` | `#74c8fa` |
| Morphology orange | `#e5864b` | `#fbb822` |
| Spatial teal | `#40a9ff` | `#6cf1a1` |
| Single-cell pink | `#de367b` | `#969dea` |

### 4 — Add logos

Drop partner logos (SVG preferred) into `static/img/partners/`, then edit `data/partners.yml`:

```yaml
- name: "CytoData Society"
  logo: "/img/partners/cytodata.svg"
  url:  "https://cytodata.org"
  blurb: "Co-organising partner."
```

For sponsors, same pattern in `static/img/sponsors/` + `data/sponsors.yml`. Delete all entries to hide the section.

### 5 — Replace the hero image

Replace `static/img/hero/scverse_symbol.png` with your event's hero photo (or set `heroVideo` in `hugo.toml`).

### 6 — Edit the about text

Edit `content/_index.md`. Plain markdown — anything under the `+++` front matter becomes the "About the event" paragraph.

### 7 — Add workstreams

Edit `data/workstreams.yml`. Each entry becomes a card:

```yaml
- title: "Morphology Integration"
  description: "Bridging morphological profiling with transcriptomics."
  lead: "your-github-handle"
```

### 8 — Add the schedule (optional)

Edit `data/schedule.yml`. Delete the file to show "Schedule TBA" automatically.

### 9 — Add organisers

Edit `data/organisers.yml`. Avatars are fetched from GitHub automatically if you supply a handle.

### 10 — Deploy

Push to `main` → the GitHub Action builds and publishes to the `gh-pages` branch.

Then: **Settings → Pages → Source = `gh-pages` branch**.

The site will be live at `https://scverse.github.io/your-repo-name/`.

To surface it at `scverse.org/<event>/`, open a one-line PR to [scverse/scverse.github.io](https://github.com/scverse/scverse.github.io):

```
Copy static/morphology2026/index.html → static/<your-event>/index.html
Change the <meta http-equiv="refresh"> URL to your GH Pages URL
```

---

## Local development

Requires [Hugo extended](https://gohugo.io/installation/) ≥ 0.128.

```sh
hugo server --buildFuture -D
```

See [SETUP.md](SETUP.md) for full details including font vendoring and pre-commit setup.
