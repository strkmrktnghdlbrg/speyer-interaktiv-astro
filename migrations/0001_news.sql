-- News-Artikel-Tabelle
-- ---------------------
-- Speichert die finalen, AI-rewriteten Kurz-Zusammenfassungen.
-- Die Originalquelle wird IMMER referenziert (Lizenz-Pflicht).

CREATE TABLE IF NOT EXISTS news_articles (
  slug TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  lead TEXT NOT NULL,
  summary TEXT NOT NULL,           -- AI-rewriteter Body (200-400 Wörter)
  district TEXT,                    -- FK-artig zu districts (kein hard FK in D1)
  category TEXT NOT NULL,           -- "Verkehr" | "Kultur" | ...
  published_at TEXT NOT NULL,       -- ISO-8601
  image_key TEXT,                   -- Reuse aus Image-Registry
  image_hue INTEGER NOT NULL DEFAULT 1,

  -- Source-Tracking (Pflicht für Attribution)
  source_name TEXT NOT NULL,
  source_url TEXT NOT NULL,
  source_published_at TEXT NOT NULL,

  -- Pipeline-Metadaten
  rewrite_model TEXT,               -- z.B. "claude-sonnet-4-6"
  rewrite_at TEXT NOT NULL,         -- ISO-8601, wann der Rewrite passiert ist
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_news_published_at ON news_articles(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_news_district ON news_articles(district);
CREATE INDEX IF NOT EXISTS idx_news_source_url ON news_articles(source_url);

-- Crawl-Log für Dedup + Robots.txt-Tracking
CREATE TABLE IF NOT EXISTS news_crawl_log (
  source_url TEXT PRIMARY KEY,      -- Original-URL der Quelle
  source_name TEXT NOT NULL,
  rss_guid TEXT,                    -- Falls vorhanden, der RSS guid-Wert
  crawled_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL,             -- "rewritten" | "skipped:duplicate" | "skipped:robots" | "skipped:filter" | "error:api" | "error:network"
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_crawl_log_crawled_at ON news_crawl_log(crawled_at DESC);
