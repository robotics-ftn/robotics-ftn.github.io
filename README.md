# Robotics@FTN Website

Academic site for the **Robotics Research group at FTN**, Faculty of Technical Sciences, University of Novi Sad.

Built with [Hugo](https://gohugo.io/) + [Hugo Blox Academic](https://hugoblox.com/). Deployed to GitHub Pages via GitHub Actions.

**Languages:** English at `/` and Serbian Latin at `/sr/…` — header language switcher (globe icon). Legacy `/en/…` URLs redirect to the same English path at the site root.

**Theme:** Dark and light modes with header toggle (sun/moon). First visit follows OS `prefers-color-scheme`; choice persists in `localStorage` (`wc-color-theme`).

## Pages

| Route | Content |
| --- | --- |
| `/` or `/sr/` | Cinematic hero, research pillars, featured publications |
| `…/research/` | Research themes and collaborate CTA |
| `…/publications/` | Compact year-grouped list (Intent Lab style) with one still photo per paper, DOI, and BibTeX |
| `…/people/` | Faculty & staff from public FTN sources |
| `…/teaching/` | H308, H829, Mechatronics labs |
| `…/lab/` | MARKO, FTN hand, industrial cells |
| `…/join/` | Contact, location, thesis topics |

## Prerequisites

- Hugo Extended ≥ 0.162.0
- Node.js ≥ 23 (Tailwind CSS pipeline)
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
# → http://127.0.0.1:43123/  (Serbian: /sr/)
```

## Content sources

Real data from public FTN pages, Google Scholar, IEEE Xplore, and [github.com/robotics-ftn](https://github.com/robotics-ftn). Gaps (student roster, lab photos, open vacancies) are labeled in content.

Serbian UI strings: `i18n/sr.yaml`. Per-author bios: `data/sr/authors/`.

## Publication thumbnails

Drop one still photo or figure next to a paper as:

```
assets/media/publications/<slug>.jpg
assets/media/publications/<slug>.png
assets/media/publications/<slug>.webp
```

`<slug>` is the folder name under `content/en/publications/` (same file serves English and Serbian). Missing files show an empty frame until you add one. Thumbnails currently on the site are figures extracted from author-hosted or open-access copies of the papers.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages at `https://robotics-ftn.github.io/` (configure repo name accordingly).
