// Generates public/og.png (1200x630) from an inline SVG, using the copy of
// `sharp` that ships with Astro. Run: `npm run og`.
// Text is rasterized with system fonts (a serif + monospace fallback), so it
// won't match Newsreader exactly — good enough for a social preview card.
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f2eadd"/>
  <rect x="0" y="0" width="1200" height="10" fill="#b6772e"/>
  <g font-family="ui-monospace, 'Space Mono', monospace" fill="#8a7a67">
    <text x="80" y="120" font-size="26" letter-spacing="6">PERSONAL CATALOG — Nº 01</text>
  </g>
  <g font-family="Georgia, 'Newsreader', serif" fill="#241b14">
    <text x="76" y="330" font-size="150" font-weight="500" letter-spacing="-3">Jerrell Jones</text>
  </g>
  <g font-family="ui-monospace, 'Space Mono', monospace" fill="#9a6222">
    <text x="80" y="410" font-size="34" letter-spacing="2">Curator · Engineer · Designer · Enthusiast</text>
  </g>
  <line x1="80" y1="470" x2="1120" y2="470" stroke="#d9cab2" stroke-width="2"/>
  <g font-family="Georgia, 'Newsreader', serif" fill="#4c3d2f">
    <text x="80" y="540" font-size="32">Complete products, built end to end — plus coffee, vinyl, and an ’04 STi.</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
