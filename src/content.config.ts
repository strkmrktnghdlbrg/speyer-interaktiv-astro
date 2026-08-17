import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const wissenswertes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wissenswertes" }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
  }),
});

// Englische Volltexte der Wissenswertes-Artikel, gekeyt nach dem DEUTSCHEN
// Slug (Dateiname identisch zum DE-Pendant; der EN-URL-Slug kommt aus
// src/i18n/en/wissenswertes.ts). fahrzeugbeschriftung-marketingkanal bleibt
// bewusst ohne Uebersetzung (bezahlter Gastartikel, nur DE beauftragt).
const wissenswertesEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/wissenswertes-en" }),
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

const hotels = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/hotels" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
  }),
});

const restaurants = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/restaurants" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
  }),
});

const districts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/districts" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
  }),
});

export const collections = { wissenswertes, wissenswertesEn, sights, hotels, restaurants, districts };
