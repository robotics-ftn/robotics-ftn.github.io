# Robotics Lab FTN Website

Academic website for the **Robotics Laboratory** at the Faculty of Technical Sciences (FTN), University of Novi Sad — built with [Hugo](https://gohugo.io/) and [Hugo Blox Academic](https://hugoblox.com/).

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Research | `/research/` |
| Publications | `/publications/` |
| People | `/people/` |
| Teaching | `/teaching/` |
| Lab | `/lab/` |
| Join | `/join/` |

## Prerequisites

- **Hugo Extended** ≥ 0.162.0 (see `hugoblox.yaml`)
- **Node.js** 23+ (required for Hugo Tailwind CSS pipeline; see `.nvmrc`)
- **pnpm** (recommended) or npm

Install Hugo Extended:

```bash
# Linux (example)
wget https://github.com/gohugoio/hugo/releases/download/v0.162.0/hugo_extended_0.162.0_linux-amd64.tar.gz
tar -xzf hugo_extended_0.162.0_linux-amd64.tar.gz
sudo mv hugo /usr/local/bin/
```

## Run locally

```bash
pnpm install
hugo server --port 43123 --bind 127.0.0.1 --disableFastRender
```

Open http://127.0.0.1:43123/

Alternative using npm scripts:

```bash
pnpm dev -- --port 43123 --bind 127.0.0.1
```

## Build for production

```bash
pnpm build
```

Output is written to `public/`.

## Content

- **People profiles:** `data/authors/*.yaml` + avatars in `assets/media/authors/`
- **Publications:** `content/publications/*/index.md` + `cite.bib`
- **Projects:** `content/projects/`
- **Courses:** `content/teaching/`
- **Static files:** `static/` (hero video, preprint PDFs)

Sample people, DOIs, and contact details are placeholders — replace with official lab data.

## Deploy

GitHub Actions workflows in `.github/workflows/` build the site and deploy to **GitHub Pages** when changes land on `main`. Set `baseURL` in `config/_default/hugo.yaml` to match your Pages URL.

## License

Site content © Robotics Lab FTN unless noted. Hugo Blox Kit components are MIT licensed — see `LICENSE.md`.
