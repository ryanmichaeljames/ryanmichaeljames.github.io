# Copilot Instructions

## Project

Personal website for Ryan James — Technical Lead / DevOps Engineer, Auckland NZ.
React SPA, statically hosted on GitHub Pages at `www.ryanjames.dev`.

## Tech stack

- Vite + React + TypeScript
- Pure CSS (no framework)
- `react-router-dom` for routing
- `react-markdown` for blog post rendering
- `react-helmet-async` for SEO metadata
- GitHub Actions for deployment

## Structure

```
src/
  components/   # Section components (Hero, About, Projects, Resume, Footer)
  pages/        # Route-level pages (BlogPost)
  posts/        # Blog post content as .md files
  data/
    content.ts  # Profile, resume data
    posts.ts    # Post metadata + raw .md imports
  hooks/
    useGitHubRepos.ts  # Fetches public repos from GitHub API
  index.css     # Design system (CSS variables, base styles)
```

## Conventions

- All copy lives in `src/data/content.ts`. No hardcoded strings in components.
- Blog posts are always `.md` files in `src/posts/`. Import via `?raw` in `posts.ts`. Never inline post content as strings.
- CSS uses custom properties defined in `src/index.css`. No inline styles.
- No CSS framework, no utility classes.
- No tracking, no analytics, no cookies, no backend.
- GitHub repos are fetched dynamically via `useGitHubRepos`. Not hardcoded.

## Design

- Monochrome only: black (`#0a0a0a`), white, and greys (`--grey-50` through `--grey-800`)
- Minimalist — no decorative elements, no shadows, no gradients
- Font: Inter (body), monospace stack (code/meta)
- Spacing via CSS variables: `--spacing-xs` through `--spacing-xl`

## Adding a blog post

1. Create `src/posts/your-slug.md`
2. Import it in `src/data/posts.ts` with `import content from "../posts/your-slug.md?raw"`
3. Add metadata entry to the `posts` array
4. Re-enable `<Writing />` in `src/App.tsx` Home component when ready

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages.
Custom domain: `www.ryanjames.dev` (configured via `public/CNAME`).
