import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const wissenswertes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wissenswertes" }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
  }),
});

const sights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sights" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
  }),
});

export const collections = { wissenswertes, sights };
