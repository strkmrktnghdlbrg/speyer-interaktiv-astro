/**
 * Read-Helpers für News-Pages.
 * -----------------------------
 * Lesen aus D1 zur Laufzeit (Pages Function). Fallback auf die
 * Seed-Daten aus src/data/news.ts wenn D1 nicht verfügbar oder leer
 * (z.B. im npm run dev OHNE wrangler-Proxy).
 */

import type { NewsRow } from "./types";
import { news as seedNews, type NewsItem } from "../../data/news";

const seedToRow = (n: NewsItem): NewsRow => ({
  slug: n.slug,
  title: n.title,
  lead: n.lead,
  summary: n.summary,
  district: n.district ?? null,
  category: n.category,
  published_at: n.publishedAt,
  image_key: n.imageKey ?? null,
  image_hue: n.imageHue,
  source_name: n.source.name,
  source_url: n.source.url,
  source_published_at: n.source.publishedAt,
  rewrite_model: "seed",
  rewrite_at: n.publishedAt,
  created_at: n.publishedAt,
});

export async function listNews(
  db: D1Database | undefined,
  limit = 50
): Promise<NewsRow[]> {
  if (!db) {
    return seedNews.map(seedToRow).slice(0, limit);
  }
  try {
    const res = await db
      .prepare(
        "SELECT * FROM news_articles ORDER BY published_at DESC LIMIT ?"
      )
      .bind(limit)
      .all<NewsRow>();
    const rows = res.results ?? [];
    if (rows.length === 0) {
      return seedNews.map(seedToRow).slice(0, limit);
    }
    return rows;
  } catch (e) {
    console.warn("[news] D1 read failed, falling back to seed", e);
    return seedNews.map(seedToRow).slice(0, limit);
  }
}

export async function getNewsBySlug(
  db: D1Database | undefined,
  slug: string
): Promise<NewsRow | null> {
  if (!db) {
    const seed = seedNews.find((n) => n.slug === slug);
    return seed ? seedToRow(seed) : null;
  }
  try {
    const row = await db
      .prepare("SELECT * FROM news_articles WHERE slug = ?")
      .bind(slug)
      .first<NewsRow>();
    if (row) return row;
    // Fallback: vielleicht ist es ein Seed-Slug der noch nicht in D1 ist
    const seed = seedNews.find((n) => n.slug === slug);
    return seed ? seedToRow(seed) : null;
  } catch (e) {
    console.warn("[news] D1 read failed for slug", slug, e);
    const seed = seedNews.find((n) => n.slug === slug);
    return seed ? seedToRow(seed) : null;
  }
}
