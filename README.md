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
| `…/publications/` | Compact year-grouped list (Intent Lab style) with one still photo per paper, `paper | pdf | cite` (publisher, hosted PDF when present, BibTeX) |
| `…/people/` | Founder, faculty, teaching assistants, students, staff, alumni |
| `…/lab/` | MARKO, FTN hand, industrial cells |
| `…/join/` | Heads’ contact (email / office hours when known) and lab location |

Teaching is unpublished. `/teaching/` and `/sr/teaching/` redirect home. Course Markdown is kept in `held/teaching/` to restore later.

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

**Public URL:** [https://robotics-ftn.github.io/](https://robotics-ftn.github.io/) (English `/`, Serbian `/sr/`).

This repo is the source of truth. Publish it to **`robotics-ftn/robotics-ftn.github.io`** on branch `main`. Pushing `main` runs `.github/workflows/deploy.yml` → GitHub Actions → Pages.

Hugo `baseURL` is `https://robotics-ftn.github.io/` (trailing slash). Do not deploy this site as a project page under `/website/`.

### What is live today

`https://robotics-ftn.github.io/` already responds **200** from GitHub Pages, but it is the **17 Sep 2026 stub** (`index.html` only, commit `b08ebb9`). This Hugo site is not on that repo yet. The public Pages API also shows `has_pages: true` and the default `pages-build-deployment` (branch) workflow — not this Actions deploy.

### Publish from a machine that can write to the org repo

The Cursor cloud agent **cannot** push to GitHub: no `GITHUB_TOKEN`/`GH_TOKEN`, `gh` is not logged in, HTTPS push fails with `could not read Username for 'https://github.com'`, and SSH fails with `Permission denied (publickey)`. A Cursor remote named `gh-robotics-ftn` returns **403**.

Someone with **write** on `robotics-ftn/robotics-ftn.github.io` (typically an org owner/admin; Settings → Pages needs **admin**) should:

1. **Pages source:** repo **Settings → Pages → Build and deployment → Source: GitHub Actions**. Leave it on “Deploy from a branch” and a `main` force-push of this Hugo tree will publish raw source instead of the built site.
2. **Actions:** org/repo Actions allowed (not disabled). The workflow already requests `pages: write` and `id-token: write`. First deploy uses the `github-pages` environment — approve it if protection rules require a reviewer.
3. **Push this branch to `main`** (histories are unrelated; force-push is expected):

```bash
# Authenticate as a robotics-ftn member (gh auth login, or SSH key on GitHub).
git remote add pages https://github.com/robotics-ftn/robotics-ftn.github.io.git
git fetch pages
git push --force pages cursor/robotics-ftn-website-5c84:main
```

4. Open **Actions → Deploy website to GitHub Pages**. When it is green, hard-refresh [https://robotics-ftn.github.io/](https://robotics-ftn.github.io/) and check `/sr/`.

Do not invent a token or add the agent as an org member from this environment. If push is blocked, the missing piece is a GitHub credential with `contents: write` on that repo (and `workflow` if GitHub reports “refusing to allow a GitHub App to create or update workflow”). If Settings → Pages is missing, the account needs **admin** on the repo or org **Pages** enabled.
