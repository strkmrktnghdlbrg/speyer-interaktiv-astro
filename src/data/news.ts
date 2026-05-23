export type NewsItem = {
  slug: string;
  title: string;
  lead: string;
  summary: string; // 200-400 Wörter, eigene Formulierung
  district?: string;
  category: "Verkehr" | "Kultur" | "Stadtleben" | "Gastro" | "Sport" | "Politik";
  publishedAt: string; // ISO
  source: {
    name: string;
    url: string;
    publishedAt: string;
  };
  imageHue: number;
  imageKey?: string;
};

/**
 * Seed-News für Speyer-Interaktiv.
 *
 * Phase 1 (aktuell): manuell redaktionell. News-Feature in
 * `features.ts` ist `enabled: false`, d.h. die /news-Routes sind
 * unter der Sitemap-Schwelle und nicht in der Navigation. Sobald
 * D1 + Cron-Worker aufgesetzt sind, Flag flippen und Pipeline
 * (siehe NEWS-PIPELINE-SETUP.md im Köln-Projekt) übertragen.
 *
 * Empfohlene Quellen für Speyer-Crawler (in src/lib/news/sources.ts):
 *  - Die Rheinpfalz / SPEYER kurier (Lokalblatt)
 *  - SWR Aktuell Rheinland-Pfalz
 *  - Pressemitteilungen der Stadt Speyer
 */
export const news: NewsItem[] = [];

export const getNewsItem = (slug: string) => news.find((n) => n.slug === slug);

/** Letzte N News (chronologisch), für Homepage-News-Strip. */
export const recentNews = (n = 6) =>
  news
    .slice()
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, n);
