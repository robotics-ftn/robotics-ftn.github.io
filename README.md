# Robotics@FTN Website

Dark, hardware-forward academic site for the **Laboratory for Robotics and Mechatronics** at the Faculty of Technical Sciences (FTN), University of Novi Sad.

Built with [Hugo](https://gohugo.io/) + [Hugo Blox Academic](https://hugoblox.com/). Deployed to GitHub Pages via GitHub Actions.

## Pages

| Route | Content |
| --- | --- |
| `/` | Cinematic hero, research pillars, featured publications |
| `/research/` | Themes + GitHub project cards |
| `/publications/` | Year-grouped papers with DOI + BibTeX |
| `/people/` | Faculty & staff from public FTN sources |
| `/teaching/` | H308, H829, Mechatronics labs |
| `/lab/` | MARKO, FTN hand, industrial cells |
| `/join/` | Contact, location, thesis topics |

## Prerequisites

- Hugo Extended ≥ 0.162.0
- Node.js ≥ 23 (Tailwind CSS pipeline)
- pnpm

## Run locally

```bash
pnpm install
pnpm dev
# → http://127.0.0.1:43123/
```

## Content sources

Real data from public FTN pages, Google Scholar, IEEE Xplore, and [github.com/robotics-ftn](https://github.com/robotics-ftn). Gaps (student roster, lab photos, open vacancies) are labeled in content.

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml` → GitHub Pages at `https://robotics-ftn.github.io/` (configure repo name accordingly).
