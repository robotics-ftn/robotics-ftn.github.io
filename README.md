# Robotics@FTN Website

Academic site for the **Laboratory for Robotics and Mechatronics** at the Faculty of Technical Sciences (FTN), University of Novi Sad.

Built with [Hugo](https://gohugo.io/) + [Hugo Blox Academic](https://hugoblox.com/). Deployed to GitHub Pages via GitHub Actions.

**Languages:** English (`/en/…`) and Serbian Latin (`/sr/…`) — header language switcher (globe icon).

**Theme:** Dark and light modes with header toggle (sun/moon). First visit follows OS `prefers-color-scheme`; choice persists in `localStorage` (`wc-color-theme`).

## Pages

| Route | Content |
| --- | --- |
| `/en/` or `/sr/` | Cinematic hero, research pillars, featured publications |
| `…/research/` | Themes + GitHub project cards |
| `…/publications/` | Year-grouped papers with DOI + BibTeX |
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
# → http://127.0.0.1:43123/en/  (or /sr/)
```

## Content sources

Real data from public FTN pages, Google Scholar, IEEE Xplore, and [github.com/robotics-ftn](https://github.com/robotics-ftn). Gaps (student roster, lab photos, open vacancies) are labeled in content.

Serbian UI strings: `i18n/sr.yaml`. Per-author bios: `data/sr/authors/`.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages at `https://robotics-ftn.github.io/` (configure repo name accordingly).
