# GTA Cheats — GTA 5 Cheat Codes Website

A lightweight, SEO-optimized reference site for GTA V cheat codes on PC, PS5, PS4, and Xbox. Built with React, Vite, TypeScript, and Tailwind CSS. No backend, no database, fully static.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- Static data (`src/data/cheats.ts`, `src/data/faq.ts`) — no API, no database
- Ships as a static site, deployable to Vercel with zero config

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # serve the production build locally to sanity-check it
```

Output goes to `dist/`.

## Deploying to Vercel

1. Push this folder to a GitHub repo (or run `vercel` from inside it with the Vercel CLI).
2. Import the repo in Vercel. Framework preset: **Vite**. No environment variables needed.
3. `vercel.json` is already included with a rewrite so every path (including `/gta-5-cheat-codes`) serves the app correctly.

## Content

- All cheat codes live in `src/data/cheats.ts`, grouped by platform → category → cheat. Add or edit entries there; the UI (search, cards, counts) updates automatically.
- FAQ content lives in `src/data/faq.ts`. If you add/remove/edit questions, also update the matching `FAQPage` JSON-LD block in `index.html` so structured data stays in sync.

## Before going live

- Swap every `https://www.gtacheats.example` placeholder in `index.html` (canonical URL, Open Graph, Twitter Card, JSON-LD) for your real production domain.
- Add a real `og-image.png` (1200×630) to `public/` and confirm the `og:image` / `twitter:image` URLs point to it.
- Update `public/sitemap.xml` and `public/robots.txt` with your real domain.

## Disclaimer

Fan-made reference site. Not affiliated with, endorsed by, or sponsored by Rockstar Games or Take-Two Interactive.
