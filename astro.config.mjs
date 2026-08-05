// @ts-check
import { defineConfig } from 'astro/config';

// NOTE: update `site` to your real domain before deploying — it's used for
// canonical + Open Graph absolute URLs.
export default defineConfig({
  // Use the canonical www host — the apex 301-redirects to www, and social
  // scrapers won't follow a redirect for og:image, breaking link previews.
  site: 'https://www.jayjones.dev',
  markdown: {
    // Plain code blocks styled by .prose (keeps posts on the warm palette
    // instead of a clashing Shiki syntax theme). Re-enable if you want
    // syntax highlighting in Field Notes.
    syntaxHighlight: false,
  },
});
