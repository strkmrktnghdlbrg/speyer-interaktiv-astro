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
    // Offizieller Feed der Stadtverwaltung Speyer — zu 100 % Speyer-relevant,
    // daher KEIN Keyword-Filter (viele Titel nennen "Speyer" nicht explizit,
    // würden sonst fälschlich verworfen). URL verifiziert 2026-07-12 (200, rss+xml).
    name: "Stadt Speyer Pressemeldungen",
    rssUrl: "https://www.speyer.de/de/pressemeldungen/rss.xml",
    websiteUrl: "https://www.speyer.de",
    maxArticlesPerRun: 5,
  },
  {
    // Landesweiter SWR-Feed → Keyword-Filter auf Speyer zwingend.
    // URL verifiziert 2026-07-12 (200, rss+xml). Alte index~rss2.xml war 404.
    name: "SWR Aktuell Rheinland-Pfalz",
    rssUrl: "https://www.swr.de/~rss/swraktuell/rheinland-pfalz/index.xml",
    websiteUrl: "https://www.swr.de",
    keywords: ["Speyer", "Speyerer"],
    maxArticlesPerRun: 5,
  },
  {
    // Lokalressort Speyer (deckt auch das direkte Umland ab) → Keyword-Filter
    // hält die Auswahl auf Speyer fokussiert. Ersetzt den früheren Rheinpfalz-
    // Eintrag, der keinen öffentlichen RSS-Feed anbietet (Paywall).
    // URL verifiziert 2026-07-12 (200, rss+xml).
    name: "Wochenblatt-Reporter Speyer",
    rssUrl: "https://www.wochenblatt-reporter.de/speyer/rss",
    websiteUrl: "https://www.wochenblatt-reporter.de",
    keywords: ["Speyer", "Speyerer"],
    maxArticlesPerRun: 5,
  },
];

export const matchesKeywords = (text: string, keywords?: string[]): boolean => {
  if (!keywords || keywords.length === 0) return true;
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
};
