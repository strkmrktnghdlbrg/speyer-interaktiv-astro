/**
 * Cron-Worker für die News-Pipeline.
 * -----------------------------------
 * Läuft einmal täglich, fetcht alle konfigurierten RSS-Feeds, dedupt
 * gegen das Crawl-Log in D1, lässt neue Items von Claude rewriten,
 * schreibt sie in news_articles.
 *
 * Deploy:
 *   wrangler deploy worker/cron.ts
 *
 * Trigger lokal testen:
 *   wrangler dev worker/cron.ts --test-scheduled
 *   curl "http://localhost:8787/__scheduled?cron=0+6+*+*+*"
 */

import { newsSources } from "../src/lib/news/sources";
import { fetchRss, filterArticles, isAllowedByRobots } from "../src/lib/news/scraper";
import { rewriteArticle, REWRITE_MODEL_NAME } from "../src/lib/news/client";
import type { ClaudeRewriteOutput, RawArticle } from "../src/lib/news/types";

type WorkerEnv = {
  DB: D1Database;
  ANTHROPIC_API_KEY: string;
};

export default {
  async scheduled(event: ScheduledController, env: WorkerEnv): Promise<void> {
    const start = Date.now();
    console.log(`[news-cron] Start at ${new Date(start).toISOString()}`);
    const counters = {
      fetched: 0,
      filtered_out: 0,
      duplicates: 0,
      rewritten: 0,
      skipped_filter: 0,
      errors: 0,
    };

    for (const source of newsSources) {
      try {
        const allowed = await isAllowedByRobots(source);
        if (!allowed) {
          console.log(`[news-cron] robots.txt blocks ${source.name}, skipping`);
          continue;
        }

        const raw = await fetchRss(source);
        const candidates = filterArticles(raw, source);
        counters.fetched += candidates.length;

        for (const article of candidates) {
          const dup = await isDuplicate(env.DB, article);
          if (dup) {
            counters.duplicates++;
            await logCrawl(env.DB, article, "skipped:duplicate");
            continue;
          }

          const rewrite = await rewriteArticle(env.ANTHROPIC_API_KEY, article);
          if (!rewrite.ok) {
            counters.errors++;
            await logCrawl(env.DB, article, "error:api", JSON.stringify(rewrite.error));
            continue;
          }

          // Filter-Marker aus dem Prompt: wenn slug startet mit _filter:, überspringen
          if (rewrite.output.slug.startsWith("_filter:")) {
            counters.skipped_filter++;
            await logCrawl(env.DB, article, "skipped:filter");
            continue;
          }

          await insertNews(env.DB, article, rewrite.output);
          await logCrawl(env.DB, article, "rewritten");
          counters.rewritten++;
        }
      } catch (e) {
        counters.errors++;
        console.error(`[news-cron] Fehler bei ${source.name}:`, e);
      }
    }

    const dur = Math.round((Date.now() - start) / 1000);
    console.log(`[news-cron] Done in ${dur}s`, counters);
  },
};

// ---------- D1 Helpers ----------

async function isDuplicate(db: D1Database, article: RawArticle): Promise<boolean> {
  const res = await db
    .prepare("SELECT 1 FROM news_crawl_log WHERE source_url = ? LIMIT 1")
    .bind(article.sourceUrl)
    .first();
  return res !== null;
}

async function insertNews(
  db: D1Database,
  article: RawArticle,
  out: ClaudeRewriteOutput
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO news_articles
        (slug, title, lead, summary,
         district, category, published_at,
         image_key, image_hue,
         source_name, source_url, source_published_at,
         rewrite_model, rewrite_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(slug) DO NOTHING`
    )
    .bind(
      out.slug,
      out.rewritten_title,
      out.lead,
      out.summary,
      out.district,
      out.category,
      new Date().toISOString(),
      out.image_key,
      pickHueFor(out.district, out.category),
      article.sourceName,
      article.sourceUrl,
      article.publishedAt,
      REWRITE_MODEL_NAME,
      new Date().toISOString()
    )
    .run();
}

async function logCrawl(
  db: D1Database,
  article: RawArticle,
  status: string,
  errorMessage?: string
): Promise<void> {
  await db
    .prepare(
      `INSERT INTO news_crawl_log
        (source_url, source_name, rss_guid, status, error_message)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(source_url) DO UPDATE SET
         status = excluded.status,
         crawled_at = CURRENT_TIMESTAMP,
         error_message = excluded.error_message`
    )
    .bind(
      article.sourceUrl,
      article.sourceName,
      article.rssGuid ?? null,
      status,
      errorMessage ?? null
    )
    .run();
}

function pickHueFor(district: string | null, _category: string): number {
  if (!district) return 1;
  // Konsistent mit den Bezirks-Hues aus districts.ts
  const map: Record<string, number> = {
    altstadt: 1,
    "belgisches-viertel": 2,
    ehrenfeld: 3,
    rheinauhafen: 4,
    suedstadt: 5,
    deutz: 2,
    lindenthal: 3,
    nippes: 4,
    kalk: 5,
  };
  return map[district] ?? 1;
}
