/**
 * Claude-Prompt für News-Rewrites.
 * ---------------------------------
 * Output-Schema MUSS strukturiertes JSON sein, damit der Cron-Worker
 * deterministisch in D1 schreiben kann. Wir nutzen tool_use mit einem
 * Schema statt freiem Text.
 */

import type { RawArticle } from "./types";

export const REWRITE_TOOL = {
  name: "publish_news",
  description: "Veröffentliche eine umformulierte Kurz-Zusammenfassung einer lokalen Nachricht aus Speyer.",
  input_schema: {
    type: "object" as const,
    properties: {
      rewritten_title: {
        type: "string",
        description:
          "Eigene Überschrift, nicht 1:1 vom Original. Auf Deutsch, max 80 Zeichen, neutraler journalistischer Stil. Keine Em-Dashes, keine ASCII-Umlaute.",
      },
      lead: {
        type: "string",
        description:
          "1-2 Sätze Teaser unterhalb der Headline. 120-200 Zeichen. Beantwortet Was/Wo/Wann.",
      },
      summary: {
        type: "string",
        description:
          "200-400 Wörter Fließtext, eigene Formulierung. Faktentreu zum Original, aber Wortwahl und Satzbau eigenständig. Keine wörtlichen Zitate aus der Originalquelle. Schluss-Satz nennt nächste Schritte oder offene Fragen.",
      },
      district: {
        type: ["string", "null"],
        enum: [
          "altstadt",
          "nord",
          "sued",
          "west",
          "suedwest",
          "edith-stein-viertel",
          "rheinhafen",
          "erlach",
          null,
        ],
        description:
          "Stadtteil-Slug wenn der Artikel klar einem Quartier zuzuordnen ist. null bei stadtweiten Themen.",
      },
      category: {
        type: "string",
        enum: ["Verkehr", "Kultur", "Stadtleben", "Gastro", "Sport", "Politik"],
        description: "Themen-Kategorie für News-Filter und Card-Pill.",
      },
      image_key: {
        type: ["string", "null"],
        description:
          'Optionaler Image-Registry-Key für Reuse, z.B. "district:altstadt" oder "sight:kaiserdom". null wenn nicht passend.',
      },
      slug: {
        type: "string",
        description:
          "URL-Slug auf Deutsch, kebab-case, ohne Umlaute (ö→oe, ä→ae, ü→ue, ß→ss), max 80 Zeichen. Beschreibt den Artikel-Inhalt.",
      },
    },
    required: ["rewritten_title", "lead", "summary", "category", "slug"],
  },
};

export const SYSTEM_PROMPT = `Du bist eine Lokalredakteurin für ein Speyerer Stadtportal. Deine Aufgabe: aus einem RSS-Eintrag einer Pfälzer Tageszeitung oder eines Rundfunksenders eine eigene Kurz-Zusammenfassung schreiben, die rechtlich sauber ist (eigene Formulierung, keine wörtlichen Übernahmen) und sich vom Original abhebt.

Stil:
- Faktentreu, neutral-journalistisch, kein Werbe-Ton.
- Erste Sätze beantworten Was/Wo/Wann. Letzter Satz nennt Konsequenz oder offene Frage.
- Keine Em-Dashes (—), nutze Bindestriche oder Komma-Sätze.
- Echte Umlaute (ö ä ü ß), nicht oe/ae/ue/ss.
- Kein Lokal-Klischee ('Im Herzen der schönsten Domstadt am Rhein...'). Sachlich.
- Wenn die Quelle Quellen-Personen nennt (Stadt-Sprecherin, Polizist, etc.), darfst du die übernehmen.

Strenge Vorgaben:
- KEINE wörtlichen Zitate aus der Original-RSS-Beschreibung — paraphrasiere.
- Wenn der Artikel nicht zu Speyer passt (anderer Ort, bundesweit, Sport-Nationalmannschaft), gib einen schlechten Slug "_filter:nicht-lokal" zurück und summary "Skip".
- Die summary MUSS 200-400 Wörter haben. Kürzer reicht nicht, länger ist verboten.

Output-Format: nutze ausschließlich das publish_news-Tool. Antworte nicht in Plain-Text.`;

export const buildUserPrompt = (article: RawArticle): string => `Quelle: ${article.sourceName}
Veröffentlicht: ${article.publishedAt}
Original-URL: ${article.sourceUrl}

ORIGINAL-TITEL:
${article.title}

ORIGINAL-LEAD (RSS-Description):
${article.lead}

Erstelle einen rechtlich sauberen Rewrite. Quellen-Attribution wird automatisch
unter dem Artikel angefügt — du musst sie NICHT erwähnen.`;
