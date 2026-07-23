export type ProjectStatus = 'live' | 'in-development';

export interface Project {
  /** Catalog tag shown in the index gutter, e.g. "W·01". */
  tag: string;
  name: string;
  /** Short working-title note, if the name isn't final. */
  note?: string;
  blurb: string;
  /** Platforms this product reaches. */
  reach: string[];
  status: ProjectStatus;
  /** Only set when there's a genuinely live URL to send people to. */
  href?: string;
}

export const projects: Project[] = [
  {
    tag: 'W·01',
    name: 'ProVinyl',
    blurb:
      'A collection manager for physical music, built on your Discogs library. Grade condition, value your shelves, export appraisal PDFs, and publish a public collection page — with spin tracking and a Pro tier for exports and AI cover scanning.',
    reach: ['iOS', 'Android', 'Web', 'API'],
    status: 'live',
    href: 'https://provinyl.io',
  },
  {
    tag: 'W·02',
    name: 'Dialed',
    blurb:
      'A local-first companion for coffee people. Store recipes, log brews, and track your beans and gear — with an optional membership that adds AI recipe generation, bag-scanning from a photo, and cloud backup.',
    reach: ['iOS', 'Backend'],
    status: 'in-development',
    // dialed.app is registered but still a parked domain — no link until it's real.
  },
  {
    tag: 'W·03',
    name: 'Sophun',
    blurb:
      'Networking treated as a skill you practice, not a personality you’re born with. One actionable challenge each week, plus AI help drafting introductions, bios, and follow-ups.',
    reach: ['iOS', 'Android', 'Web', 'API'],
    status: 'in-development',
    href: 'https://www.sophun.network',
  },
  {
    tag: 'W·04',
    name: 'Under the Hood',
    note: 'working title',
    blurb:
      'A garage companion for keeping a car healthy. Service and fuel logs, reminders by date or mileage, safety-recall checks, a document vault, and an AI “mechanic” that writes repair guides and explains dashboard lights.',
    reach: ['iOS', 'Android', 'Web', 'API'],
    status: 'in-development',
  },
];

/** The engineering signature shared across every project above. */
export const commonThread =
  'A thread runs through all of these: a TypeScript backend — Fastify or Express on MongoDB — shipped in Docker to Render, with Cloudflare R2 for storage and Claude for the AI features, behind native SwiftUI and Jetpack Compose clients. One full-stack pattern, reused and refined across products.';
