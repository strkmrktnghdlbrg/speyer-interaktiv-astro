/**
 * RSS-Quellen-Konfiguration für die News-Pipeline.
 * ------------------------------------------------
 * Pro Stadt-Portal: Verlage mit offiziellen RSS-Feeds, die Bots
 * explizit erlauben (Robots-Check ist trotzdem Pflicht beim Crawl).
 *
 * `keywords` filtert auf stadt-/lokalrelevante Artikel — RSS-Feeds
 * von überregionalen Tageszeitungen bringen sonst zu viel Bundesweites.
 * Match: Titel ODER Lead enthalten mindestens eines der Keywords (case-insensitive).
 */

export type NewsSource = {
  name: string;
  rssUrl: string;
  websiteUrl: string;          // für Robots.txt-Lookup
  keywords?: string[];          // optional, Filter
  maxArticlesPerRun?: number;   // hard limit (Default 5)
};

export const newsSources: NewsSource[] = [
  {
    name: "Die Rheinpfalz",
    // TODO: RSS-URL verifizieren — Rheinpfalz bietet Ressort-Feeds an
    rssUrl: "https://www.rheinpfalz.de/rss.feed?resourceId=11717312",
    websiteUrl: "https://www.rheinpfalz.de",
    keywords: ["Speyer", "Speyerer"],
    maxArticlesPerRun: 5,
  },
  {
    name: "SWR Aktuell Rheinland-Pfalz",
    rssUrl: "https://www.swr.de/swraktuell/rheinland-pfalz/index~rss2.xml",
    websiteUrl: "https://www.swr.de",
    keywords: ["Speyer", "Speyerer"],
    maxArticlesPerRun: 5,
  },
  {
    name: "Stadt Speyer Pressemitteilungen",
    // TODO: RSS-Feed der Stadt Speyer prüfen — derzeit Platzhalter
    rssUrl: "https://www.speyer.de/rss-pressemitteilungen.xml",
    websiteUrl: "https://www.speyer.de",
    keywords: ["Speyer", "Speyerer"],
    maxArticlesPerRun: 5,
  },
];

export const matchesKeywords = (text: string, keywords?: string[]): boolean => {
  if (!keywords || keywords.length === 0) return true;
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
};
