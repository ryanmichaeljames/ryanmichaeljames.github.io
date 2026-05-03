# ryanjames.dev

Personal website for Ryan James — Solution Architect based in Auckland, New Zealand.

Built with React + Vite + TypeScript, deployed to GitHub Pages via GitHub Actions.

## Stack

- **Framework**: React 19 + TypeScript
- **Build tool**: Vite 8
- **Styling**: CSS custom properties (no framework)
- **SEO**: react-helmet-async
- **Hosting**: GitHub Pages (custom domain: ryanjames.dev)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview with `npm run preview`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and deploys to GitHub Pages automatically.

> **Note:** Before pushing, ensure GitHub Pages is configured to deploy from GitHub Actions (Settings → Pages → Source → GitHub Actions).

## Content

All site content lives in `src/data/content.ts`. To update projects, writing links, or bio copy, edit that file.

## Design

- Monochrome palette: black, white, and greys only
- Font: [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)
- No tracking, no analytics, no cookies, no backend
