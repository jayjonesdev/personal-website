# Jerrell Jones — personal website

A warm, editorial one-page site — "The Curator's Index" — introducing Jerrell
Jones (curator · engineer · designer · enthusiast), his passions, and the
products he builds after hours. Built with [Astro](https://astro.build).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # static output in ./dist
npm run preview    # preview the production build locally
```

`dist/` is plain static files — deploy it to Netlify, Vercel, Cloudflare Pages,
GitHub Pages, or any static host.

## Project map

| Path | What it holds |
| --- | --- |
| `src/data/projects.ts` | The four featured projects (name, blurb, reach, status, link) |
| `src/data/passions.ts` | The five passions + the hero "Currently" strip |
| `src/components/` | `Nav`, `Masthead`, `About`, `Passions`, `Projects`, `ProjectCard`, `Contact`, `Footer` |
| `src/styles/global.css` | Design tokens, themes, type scale, shared primitives |
| `src/assets/jerrell.jpg` | Portrait (optimized at build via `astro:assets`) |
| `scripts/generate-og.mjs` | Regenerates `public/og.png` social card |

## Editing content

- **Projects / passions** — edit the two files in `src/data/`. Add a project by
  appending to the `projects` array; omit `href` to show it as "Not yet public".
- **Copy** — the About, hero, and section text lives in the matching component.
- **Colors & type** — all tokens are CSS custom properties at the top of
  `src/styles/global.css` (light `:root`, dark `:root[data-theme='dark']`).

## Before deploying

1. Set your real domain in `astro.config.mjs` (`site:`) so canonical +
   Open Graph URLs are absolute.
2. Swap `src/assets/jerrell.jpg` if you want a different portrait.
3. Regenerate the social card with `npm run og` if you change the name/tagline.

## Design notes

- **Type:** Newsreader (display serif) + Space Mono (catalog/utility), both
  self-hosted via `@fontsource` — no external requests.
- **Palette:** warm kraft paper + espresso ink + caramel "crema" accent, with a
  single deep "WR-blue" pulled from the '04 STi used sparingly for live links
  and active states. A warm "Roast" dark theme is available via the toggle.
- **Accessibility:** semantic landmarks, visible keyboard focus, a skip link,
  `prefers-reduced-motion` respected, and content that renders fully with
  JavaScript disabled.
