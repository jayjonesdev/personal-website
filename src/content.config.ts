import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "Field Notes" — Markdown posts in src/content/notes/*.md
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Optional interactive field-card checklist, rendered after the post.
    // Value is a key in src/data/checklists.ts.
    checklist: z.string().optional(),
    // Optional image slideshow. `src` is relative to src/assets/notes/.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { notes };
