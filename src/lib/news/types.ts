/**
 * News-Pipeline Type-Definitionen
 * --------------------------------
 * Drei Stufen:
 *  1. RawArticle   = aus RSS gefetcht, noch nicht rewritten
 *  2. RewriteJob   = an Claude geschickt, mit Output-Schema
 *  3. NewsRow      = finaler D1-Datensatz, gelesen vom Astro-SSR
 */

export type RawArticle = {
  sourceName: string;          // z.B. "Die Rheinpfalz"
  sourceUrl: string;            // Permalink des Originals
  title: string;
  lead: string;                 // RSS-Description (~200-400 Zeichen)
  publishedAt: string;          // ISO-8601
  rssGuid?: string;             // RSS-eigener Identifier wenn vorhanden
};

export type ClaudeRewriteOutput = {
  rewritten_title: string;
  lead: string;                 // 1-2 Sätze Teaser
  summary: string;              // 200-400 Wörter, eigene Formulierung
  district: string | null;      // einer aus der districts.ts oder null
  category: "Verkehr" | "Kultur" | "Stadtleben" | "Gastro" | "Sport" | "Politik";
  image_key: string | null;     // empfohlene Reuse aus images.ts oder null
  slug: string;                 // kebab-case, deutsch, max 80 Zeichen
};

export type NewsRow = {
  slug: string;
  title: string;
  lead: string;
  summary: string;
  district: string | null;
  category: string;
  published_at: string;
  image_key: string | null;
  image_hue: number;
  source_name: string;
  source_url: string;
  source_published_at: string;
  rewrite_model: string | null;
  rewrite_at: string;
  created_at: string;
};

export type CrawlLogEntry = {
  source_url: string;
  source_name: string;
  rss_guid: string | null;
  crawled_at: string;
  status:
    | "rewritten"
    | "skipped:duplicate"
    | "skipped:robots"
    | "skipped:filter"
    | "error:api"
    | "error:network";
  error_message: string | null;
};
