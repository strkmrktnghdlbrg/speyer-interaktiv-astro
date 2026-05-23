/**
 * RSS-Fetcher und Dedup.
 * ----------------------
 * Bewusst minimal: kein xml2js-Dep, einfacher Regex-Parser. RSS 2.0 ist
 * stabil genug, dass das funktioniert. Für komplexere Feeds (Atom, RSS 1.0)
 * später `fast-xml-parser` einbauen.
 *
 * Robots.txt-Check passiert vor dem RSS-Fetch.
 */

import type { NewsSource } from "./sources";
import { matchesKeywords } from "./sources";
import type { RawArticle } from "./types";

/** Prüft ob die Source-Domain RSS-Fetches erlaubt. */
export async function isAllowedByRobots(source: NewsSource): Promise<boolean> {
  try {
    const robotsUrl = new URL("/robots.txt", source.websiteUrl).toString();
    const res = await fetch(robotsUrl, { redirect: "follow" });
    if (!res.ok) return true; // robots.txt nicht vorhanden = alles erlaubt
    const text = await res.text();
    // Pessimistische Auslegung: wenn "User-agent: *" gefolgt von "Disallow: /"
    // existiert, NICHT crawlen. Sonst durchlassen.
    // Wir cawlen nur RSS-Feeds, das wird selten verboten.
    const blocks = text.split(/\r?\n\r?\n/);
    for (const block of blocks) {
      const lines = block.split(/\r?\n/).map((l) => l.trim());
      const isGlobalUA = lines.some((l) => /^user-agent:\s*\*$/i.test(l));
      if (isGlobalUA) {
        const blocksAll = lines.some((l) => /^disallow:\s*\/$/i.test(l));
        if (blocksAll) return false;
      }
    }
    return true;
  } catch {
    // Bei Robots-Fehler vorsichtshalber durchlassen — Source ist offizielles RSS
    return true;
  }
}

/** Holt + parst einen RSS-Feed in eine flache Liste RawArticle. */
export async function fetchRss(source: NewsSource): Promise<RawArticle[]> {
  const res = await fetch(source.rssUrl, {
    headers: { "user-agent": "speyer-interaktiv-bot/1.0 (+https://speyer-interaktiv.de)" },
  });
  if (!res.ok) throw new Error(`RSS fetch failed for ${source.name}: ${res.status}`);
  const xml = await res.text();
  return parseRss(xml, source);
}

function parseRss(xml: string, source: NewsSource): RawArticle[] {
  const items = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];
  return items
    .map((raw) => parseItem(raw, source))
    .filter((a): a is RawArticle => a !== null);
}

function parseItem(raw: string, source: NewsSource): RawArticle | null {
  const title = extractTag(raw, "title");
  const link = extractTag(raw, "link");
  const pubDate = extractTag(raw, "pubDate");
  const description = extractTag(raw, "description");
  const guid = extractTag(raw, "guid");

  if (!title || !link || !pubDate) return null;

  const publishedAt = new Date(pubDate);
  if (Number.isNaN(publishedAt.getTime())) return null;

  return {
    sourceName: source.name,
    sourceUrl: link,
    title: stripHtml(title).trim(),
    lead: stripHtml(description ?? "").trim().slice(0, 600),
    publishedAt: publishedAt.toISOString(),
    rssGuid: guid ?? undefined,
  };
}

function extractTag(xml: string, tag: string): string | null {
  // Unterstützt CDATA + nicht-CDATA
  const re = new RegExp(`<${tag}\\b[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, "i");
  const m = xml.match(re);
  return m ? m[1] : null;
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ");
}

/** Filtert die Roh-Artikel nach Keywords + Max-Limit pro Source. */
export function filterArticles(articles: RawArticle[], source: NewsSource): RawArticle[] {
  const filtered = articles.filter((a) =>
    matchesKeywords(`${a.title} ${a.lead}`, source.keywords)
  );
  const limit = source.maxArticlesPerRun ?? 5;
  return filtered
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
