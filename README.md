# Robotics@FTN Website

Academic site for the **Robotics Research group at FTN**, Faculty of Technical Sciences, University of Novi Sad.

Built with [Hugo](https://gohugo.io/) + [Hugo Blox Academic](https://hugoblox.com/). Deployed to GitHub Pages via GitHub Actions.

**Languages:** English at `/` and Serbian Latin at `/sr/…` — header language switcher (globe icon). Legacy `/en/…` URLs redirect to the same English path at the site root.

**Theme:** Dark and light modes with header toggle (sun/moon). First visit follows OS `prefers-color-scheme`; choice persists in `localStorage` (`wc-color-theme`).

## Pages

| Route | Content |
| --- | --- |
| `/` or `/sr/` | Cinematic hero, research pillars, featured publications |
| `…/research/` | Research themes; each card opens a theme page with paper figures and related publications |
| `…/publications/` | Compact year-grouped list (Intent Lab style) with one still photo per paper, DOI, and BibTeX |
| `…/people/` | Founder, faculty, teaching assistants, students, staff, alumni |
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

Real data from public FTN pages, CVs of prof. dr Mirko Raković and prof. dr Milutin Nikolić (PDFs under `assets/media/cv/`), Google Scholar, IEEE Xplore, ISR Lisbon / VisLab author records, and [github.com/robotics-ftn](https://github.com/robotics-ftn). Gaps (photos, remaining conference papers) are labeled in content or left for later expansion.

Serbian UI strings: `i18n/sr.yaml`. Per-author bios: `data/sr/authors/`.

## Publication thumbnails

Drop one still photo or figure next to a paper as:

```
assets/media/publications/<slug>.jpg
assets/media/publications/<slug>.png
assets/media/publications/<slug>.webp
```

`<slug>` is the folder name under `content/en/publications/` (same file serves English and Serbian). Missing files show an empty frame until you add one. Thumbnails currently on the site are figures extracted from author-hosted or open-access copies of the papers.

Open-access or author PDF copies, when available, live next to the still as `assets/media/publications/<slug>.pdf` and are linked from the publications list (`/media/publications/<slug>.pdf`).

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages at `https://robotics-ftn.github.io/` (configure repo name accordingly).
