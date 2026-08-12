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
| `src/components/` | `Nav`, `Masthead`, `About`, `Passions`, `Projects`, `ProjectCard`, `Contact`, `Footer`, `NoteList`, `Slideshow`, `Checklist` |
| `src/data/checklists.ts` | Field-card checklists a post can attach (see below) |
| `src/content/notes/` | Field Notes posts — one Markdown file per post |
| `src/content.config.ts` | Field Notes collection schema (title, description, pubDate, tags) |
| `src/pages/notes/` | Blog listing, per-post pages, and tag pages |
| `src/pages/rss.xml.js` | RSS feed served at `/rss.xml` |
| `src/styles/global.css` | Design tokens, themes, type scale, shared primitives, `.prose` |
| `src/assets/jerrell.jpg` | Portrait (optimized at build via `astro:assets`) |
| `scripts/generate-og.mjs` | Regenerates `public/og.png` social card |

## Editing content

- **Projects / passions** — edit the two files in `src/data/`. Add a project by
  appending to the `projects` array; omit `href` to show it as "Not yet public".
- **Copy** — the About, hero, and section text lives in the matching component.
- **Colors & type** — all tokens are CSS custom properties at the top of
  `src/styles/global.css` (light `:root`, dark `:root[data-theme='dark']`).

## Writing a Field Note (blog)

Posts live at **`/notes`**. To publish one, drop a Markdown file in
`src/content/notes/` — the filename becomes the URL slug
(`my-post.md` → `/notes/my-post/`):

```markdown
---
title: My post title
description: One or two sentences shown in the list, meta, and RSS.
pubDate: 2026-08-01
tags: ['coffee', 'ritual']   # optional; each becomes a /notes/tags/<tag> page
# updatedDate: 2026-08-05     # optional
---

Write in Markdown. Headings, lists, **bold**, _italics_, > blockquotes,
`code`, and images are all styled to match the site.
```

Posts auto-sort newest-first, generate their own page, add their tags to the
tag index, and appear in the RSS feed at `/rss.xml`. The frontmatter is
type-checked at build against `src/content.config.ts`, so a typo fails the
build instead of shipping broken.

### Adding a photo slideshow

Any post can include an image carousel. Put web-friendly images (JPEG/PNG/WebP —
**not** HEIC, which browsers can't display) under `src/assets/notes/`, then add
a `gallery` list to the post's frontmatter:

```yaml
gallery:
  - src: coffee-bar-one/IMG_0722.jpg      # path relative to src/assets/notes/
    caption: Optional caption for this slide.
  - src: coffee-bar-one/IMG_1433.jpg
```

Images are optimized to responsive WebP at build, and the slideshow supports
arrows, keyboard (←/→), swipe, and a slide counter. `caption` and `alt` are
optional per image.

The gallery lands after the whole post by default. To put it partway through,
name the heading it should sit above:

```yaml
galleryBefore: The parts   # matched on the heading's text, case-insensitive
```

A heading text that matches nothing fails the build. This one option can't be
combined with images placed inline in the Markdown body — it works by splitting
the rendered HTML, and inline images are placeholders that only survive the
normal render path. That combination fails the build too, rather than shipping
broken images.

### Adding a field-card checklist

A how-it-went post can end with an interactive "field card" — a tickable
checklist grouped into phases, with a progress bar that remembers what's been
checked (per post, in `localStorage`). Define the card in
`src/data/checklists.ts`, then name its key in the post's frontmatter:

```yaml
checklist: recirculation
```

A card is a list of `phases`, each holding `rows`. A row is one of three shapes,
and they render in the order you write them:

```ts
{ check: 'Power the unit off', sub: 'Optional second line.' }  // a checkbox
{ tree: '[Menu] ─► Setting ─► [OK]\n  ├─ …' }                  // ASCII menu map
{ note: 'An aside that sits inside the phase.' }               // callout
```

Inside `check` / `sub` / `note` / caution text, `*emphasis*` becomes bold and
`{…}` becomes a small pill — `{HOT}` and `{COLD}` are tinted for the hot and
cold water lines, anything else (`{EXT}`, `{H + C}`) renders neutral. Referencing
a key that doesn't exist fails the build rather than silently dropping the card.

The progress bar and reset button are hidden without JavaScript; the checkboxes
themselves still work.

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
