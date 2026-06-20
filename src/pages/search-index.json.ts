/**
 * Statischer Search-Index. Astro generiert daraus beim Build:
 * /search-index.json
 *
 * Wird von der /suche-Page clientseitig gefetcht und durchsucht.
 */
import type { APIRoute } from "astro";
import { sights } from "../data/sights";
import { hotels } from "../data/hotels";
import { restaurants } from "../data/restaurants";
import { districts } from "../data/districts";
import { wissenswertes } from "../data/wissenswertes";

export const prerender = true;

type SearchType =
  | "Sehenswürdigkeit"
  | "Hotel"
  | "Restaurant"
  | "Stadtteil"
  | "Wissenswertes";

type SearchEntry = {
  url: string;
  title: string;
  type: SearchType;
  district?: string;
  lead: string; // 1-2 Sätze für die Suchergebnis-Card
  keywords: string; // Tokens für die Suche (alles lowercased, raum-separiert)
};

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const districtName = (slug?: string) =>
  slug ? districts.find((d) => d.slug === slug)?.name ?? slug : undefined;

const entries: SearchEntry[] = [
  ...sights.map((s) => ({
    url: `/sehenswuerdigkeiten/${s.slug}/`,
    title: s.name,
    type: "Sehenswürdigkeit" as const,
    district: districtName(s.district),
    lead: s.shortDesc,
    keywords: norm(
      [s.name, s.type, districtName(s.district), s.shortDesc, ...s.categories]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...hotels.map((h) => ({
    url: `/hotels/${h.slug}/`,
    title: h.name,
    type: "Hotel" as const,
    district: districtName(h.district),
    lead: h.shortDesc,
    keywords: norm(
      [
        h.name,
        `${h.stars} sterne`,
        districtName(h.district),
        h.shortDesc,
        ...(h.amenities ?? []),
      ]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...restaurants.map((r) => ({
    url: `/restaurants/${r.slug}/`,
    title: r.name,
    type: "Restaurant" as const,
    district: districtName(r.district),
    lead: r.shortDesc,
    keywords: norm(
      [
        r.name,
        r.cuisine,
        r.priceLevel,
        districtName(r.district),
        r.shortDesc,
        ...r.categories,
      ]
        .filter(Boolean)
        .join(" "),
    ),
  })),
  ...districts.map((d) => ({
    url: `/stadtteile/${d.slug}/`,
    title: d.name,
    type: "Stadtteil" as const,
    lead: d.shortDesc,
    keywords: norm([d.name, d.shortDesc, ...d.characterTags].join(" ")),
  })),
  ...wissenswertes.map((w) => ({
    url: `/wissenswertes/${w.slug}/`,
    title: w.title,
    type: "Wissenswertes" as const,
    lead: w.shortDesc,
    keywords: norm([w.title, w.shortDesc, w.lead, ...w.categories].join(" ")),
  })),
];

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(entries), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
};
