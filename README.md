# One Week With The Kids 🧡

A small, beautifully crafted family weekly planner — built mobile-first for iPhone and Safari, inspired by Apple's own design language (Calendar, Wallet, Weather).

**Live site:** `https://jeromenamnam.github.io/KidsWeeK/`

## What it does

- Shows one week (Saturday → Friday) as a list of elegant, collapsible day cards.
- Tap a day to expand it and see every activity, with time, person, status and location.
- Every confirmed address is a tap-to-navigate Google Maps link (opens the Maps app on iPhone, or Google Maps in the browser).
- Unconfirmed locations are clearly labelled "Location to be confirmed" and are never turned into a guessed map link.
- No login, no backend, no tracking — just a static site.

## Editing the schedule

Everything you'd want to change day-to-day lives in **one file**:

➡️ [`src/data/schedule.js`](src/data/schedule.js)

- `weekTitle`, `weekSubtitle`, `weekRange` — the header text.
- `days` — an array of day objects, each with a `date`, `summary`, and a list of `activities`.
- Each activity can set:
  - `address` → a Google Maps directions link is generated automatically.
  - `mapsUrl` → use this instead when you already have a specific Google Maps place link (e.g. a riding club).
  - neither → shows "Location to be confirmed" with no clickable link.
  - `status`: `"optional"`, `"tbc"`, or `"important"` → shows a small colored badge.
  - `category`: `"hockey" | "horseriding" | "music" | "school" | "speech"` → controls the accent color and icon.

Colors per category live in [`src/data/categories.js`](src/data/categories.js) if you want to retune the palette.

## Replacing the header photo

1. Put your photo in `src/assets/`, e.g. `src/assets/header.jpg`.
2. Open [`src/components/Header.jsx`](src/components/Header.jsx) and change the one import line:

   ```js
   import headerImage from "../assets/header.jpg";
   ```

That's it — the overlay, title and layout adapt automatically.

## Running locally

```bash
npm install
npm run dev
```

Open the printed `localhost` URL — resize your browser or use Safari's responsive mode to preview the iPhone layout.

## Building

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

This repo deploys automatically via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) on every push to `main`.

First-time setup on GitHub (only needed once):

1. Go to the repository's **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow builds the site and publishes it to GitHub Pages.

The Vite `base` path is already set to `/KidsWeeK/` in [`vite.config.js`](vite.config.js) to match this repository's name. If you ever rename the repo, update `base` to match.

## Tech stack

- React + Vite
- Plain modern CSS (no UI framework) — kept intentionally small and fast
- No backend, no analytics, no third-party scripts
