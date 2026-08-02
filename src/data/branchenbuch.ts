/**
 * Branchenverzeichnis Speyer
 * ---------------------------
 * Datenmodell für /branchenverzeichnis/.
 *
 * Grundsätze:
 * - Freie Einträge werden aus Inhalten GENERIERT, die das Portal bereits
 *   hat (Restaurants, Hotels, in Ratgeber-Artikeln genannte Betriebe mit
 *   Adresse) — nie erfunden, nie dupliziert: wo eine Detailseite existiert,
 *   wird dorthin verlinkt statt eine zweite Seite zu erzeugen.
 * - Dazu kommen Betriebe aus OpenStreetMap (partners.osm.json, Pflege über
 *   `node scripts/fetch-osm-partners.mjs --write`). Diese Daten stehen unter
 *   der ODbL, die Namensnennung ist Pflicht: überall dort, wo sie erscheinen,
 *   steht die OsmAttribution-Zeile. OSM-Einträge sind reine Listings — sie
 *   bekommen KEINE eigene Detailseite und KEINEN Website-Link. Die Telefon-
 *   nummer wird als reiner Text gezeigt, E-Mail-Adressen gar nicht.
 * - `premiumPartner` bleibt LEER, bis tatsächlich jemand bucht.
 *   Niemals Beispiel-Firmen einpflegen.
 * - Alphabetische Sortierung der freien Einträge übernimmt die Page.
 *
 * Die acht Kategorie-Slugs sind unverändert geblieben — bestehende URLs
 * bleiben gültig. Neu ist nur die Feingliederung („Branche“) innerhalb einer
 * Kategorie: Branchen ab sechs Einträgen bekommen eine eigene Unterseite,
 * kleinere laufen auf der Kategorie-Seite mit.
 */

import { restaurants } from "./restaurants";
import { hotels } from "./hotels";
import { districts } from "./districts";
import osmRaw from "./partners.osm.json";

export type BranchenKategorie = {
  slug: string;
  name: string;
  desc: string;
};

export type BranchenEintrag = {
  name: string;
  /** Kategorie-Slug aus `kategorien` */
  kategorie: string;
  /** Adresse oder Stadtteil (Angaben ohne Gewähr) */
  ort?: string;
  telefon?: string;
  /** Interne Detailseite — verlinken statt duplizieren */
  detailPath?: string;
  /** Interner Ratgeber, aus dem die Angaben stammen */
  quellePath?: string;
  /** Feingliederung innerhalb der Kategorie (nur OSM-Einträge) */
  branche?: string;
  brancheSlug?: string;
  /** Freie Einträge sind immer "free" — Premium liegt in `premiumPartner`. */
  plan?: "free" | "premium";
  /** true erst, wenn der Betrieb den Eintrag selbst bestätigt hat. */
  verified?: boolean;
  /** Herkunft des Eintrags. */
  quelle?: "portal" | "ratgeber" | "osm";
};

export type PremiumPartner = {
  slug: string;
  name: string;
  kategorie: string;
  beschreibung: string;
  websiteUrl: string;
  email?: string;
  /** 1-2 Buchstaben für das Logo-Feld */
  initialen: string;
};

export const kategorien: BranchenKategorie[] = [
  {
    slug: "gastronomie",
    name: "Restaurants & Cafés",
    desc: "Pfälzer Küche, Hausbrauereien, Cafés und Italiener in Speyer.",
  },
  {
    slug: "hotels",
    name: "Hotels & Übernachten",
    desc: "Hotels und Unterkünfte in der Domstadt und den Stadtteilen.",
  },
  {
    slug: "gesundheit",
    name: "Gesundheit & Apotheken",
    desc: "Apotheken, Hörakustiker und weitere Gesundheitsanbieter.",
  },
  {
    slug: "banken",
    name: "Banken & Finanzen",
    desc: "Filialbanken und Finanzdienstleister in Speyer.",
  },
  {
    slug: "handwerk",
    name: "Handwerk & Bau",
    desc: "Handwerksbetriebe aus Speyer und Umgebung.",
  },
  {
    slug: "einzelhandel",
    name: "Einzelhandel",
    desc: "Geschäfte und Läden von der Maximilianstraße bis in die Stadtteile.",
  },
  {
    slug: "dienstleistungen",
    name: "Dienstleistungen",
    desc: "Von Agentur bis Steuerberatung - Dienstleister in Speyer.",
  },
  {
    slug: "freizeit-kultur",
    name: "Freizeit & Kultur",
    desc: "Museen, Vereine, Freizeit- und Kulturangebote.",
  },
];

const districtName = (slug: string) =>
  districts.find((d) => d.slug === slug)?.name ?? slug;

/** Aus bestehenden Portal-Daten generierte freie Einträge */
const restaurantEintraege: BranchenEintrag[] = restaurants.map((r) => ({
  name: r.name,
  kategorie: "gastronomie",
  ort: districtName(r.district),
  detailPath: `/restaurants/${r.slug}/`,
  plan: "free" as const,
  quelle: "portal" as const,
}));

const hotelEintraege: BranchenEintrag[] = hotels.map((h) => ({
  name: h.name,
  kategorie: "hotels",
  ort: districtName(h.district),
  detailPath: `/hotels/${h.slug}/`,
  plan: "free" as const,
  quelle: "portal" as const,
}));

/**
 * Betriebe, die in Ratgeber-Artikeln des Portals mit Adresse genannt sind.
 * Quelle jeweils der verlinkte Artikel — Angaben ohne Gewähr.
 */
const ratgeberEintraege: BranchenEintrag[] = [
  // Quelle: /apotheken-speyer/
  {
    name: "Sonnen-Apotheke",
    kategorie: "gesundheit",
    ort: "Maximilianstraße 40, 67346 Speyer",
    quellePath: "/apotheken-speyer/",
  },
  {
    name: "Einhorn-Apotheke",
    kategorie: "gesundheit",
    ort: "Maximilianstraße 23, 67346 Speyer",
    quellePath: "/apotheken-speyer/",
  },
  // Quelle: /hoerakustiker-speyer/
  {
    name: "Hörakustik Am Roßmarkt GmbH",
    kategorie: "gesundheit",
    ort: "Schulplätzel 2, 67346 Speyer",
    telefon: "06232/28582",
    quellePath: "/hoerakustiker-speyer/",
  },
  {
    name: "Jürgen Leist Hörgeräte Akustik GmbH",
    kategorie: "gesundheit",
    ort: "Landauer Str. 1, 67346 Speyer",
    telefon: "06232/74831",
    quellePath: "/hoerakustiker-speyer/",
  },
  // Quelle: /banken-in-speyer/
  {
    name: "Sparkasse Vorderpfalz",
    kategorie: "banken",
    ort: "Postplatz 1, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "Vereinigte VR Bank Kur- und Rheinpfalz",
    kategorie: "banken",
    ort: "Bahnhofstraße 19, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "Santander",
    kategorie: "banken",
    ort: "Schulergasse 2, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "Commerzbank",
    kategorie: "banken",
    ort: "Maximilianstraße 47, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "Deutsche Bank",
    kategorie: "banken",
    ort: "Postplatz 4, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "Targobank",
    kategorie: "banken",
    ort: "Maximilianstraße 27, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
  {
    name: "HypoVereinsbank",
    kategorie: "banken",
    ort: "Ludwigstraße 9, 67346 Speyer",
    quellePath: "/banken-in-speyer/",
  },
].map((e) => ({ ...e, plan: "free" as const, quelle: "ratgeber" as const }));

/**
 * OpenStreetMap-Betriebe (ODbL). Reine Listings: keine Detailseite, kein
 * Website-Link — der dofollow-Link bleibt den Premium-Partnern vorbehalten.
 * Angaben stammen unverändert aus OSM und sind ohne Gewähr.
 */
type OsmRow = {
  name: string;
  kategorie: string;
  branche: string;
  brancheSlug: string;
  strasse: string;
  plz: string;
  ort: string;
  telefon: string;
};

const osmEintraege: BranchenEintrag[] = (osmRaw as OsmRow[]).map((r) => ({
  name: r.name,
  kategorie: r.kategorie,
  ort: [r.strasse, [r.plz, r.ort].filter(Boolean).join(" ")].filter(Boolean).join(", "),
  telefon: r.telefon || undefined,
  branche: r.branche,
  brancheSlug: r.brancheSlug,
  plan: "free" as const,
  verified: false,
  quelle: "osm" as const,
}));

export const freieEintraege: BranchenEintrag[] = [
  ...restaurantEintraege,
  ...hotelEintraege,
  ...ratgeberEintraege,
  ...osmEintraege,
];

/**
 * Premium-Partner erscheinen in ihrer Kategorie ZUERST, mit Logo-Initialen,
 * Beschreibung, dofollow Website-/E-Mail-Buttons und ★-Badge.
 * LEER lassen, bis eine echte Buchung vorliegt.
 */
export const premiumPartner: PremiumPartner[] = [];

export const eintraegeByKategorie = (slug: string) =>
  freieEintraege
    .filter((e) => e.kategorie === slug)
    .sort((a, b) => a.name.localeCompare(b.name, "de"));

export const premiumByKategorie = (slug: string) =>
  premiumPartner.filter((p) => p.kategorie === slug);

export const getKategorie = (slug: string) =>
  kategorien.find((k) => k.slug === slug);

// ---------------------------------------------------------------------------
// Branchen — Feingliederung innerhalb einer Kategorie
// ---------------------------------------------------------------------------
/**
 * Ab wie vielen Einträgen lohnt eine eigene Branchen-Seite? Darunter wäre es
 * eine dünne Seite mit drei Zeilen — solche Branchen laufen auf der
 * Kategorie-Seite mit.
 */
export const MIN_BRANCHE_SEITE = 6;

export type Branche = {
  slug: string;
  name: string;
  kategorie: string;
  count: number;
  /** true = eigene Unterseite, false = läuft auf der Kategorie-Seite mit */
  eigeneSeite: boolean;
};

const brancheIndex: Branche[] = (() => {
  const acc = new Map<string, Branche>();
  for (const e of freieEintraege) {
    if (!e.branche || !e.brancheSlug) continue;
    const key = e.kategorie + "/" + e.brancheSlug;
    const found = acc.get(key);
    if (found) found.count += 1;
    else
      acc.set(key, {
        slug: e.brancheSlug,
        name: e.branche,
        kategorie: e.kategorie,
        count: 1,
        eigeneSeite: false,
      });
  }
  const list = [...acc.values()];
  for (const b of list) b.eigeneSeite = b.count >= MIN_BRANCHE_SEITE;
  return list.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "de"));
})();

/** Branchen einer Kategorie, die eine eigene Unterseite bekommen. */
export const branchenMitSeite = (katSlug: string): Branche[] =>
  brancheIndex.filter((b) => b.kategorie === katSlug && b.eigeneSeite);

/** Alle Branchen-Seiten (für getStaticPaths). */
export const alleBranchenSeiten = (): Branche[] => brancheIndex.filter((b) => b.eigeneSeite);

export const getBranche = (katSlug: string, brancheSlug: string): Branche | undefined =>
  brancheIndex.find((b) => b.kategorie === katSlug && b.slug === brancheSlug);

export const eintraegeByBranche = (katSlug: string, brancheSlug: string) =>
  freieEintraege
    .filter((e) => e.kategorie === katSlug && e.brancheSlug === brancheSlug)
    .sort((a, b) => a.name.localeCompare(b.name, "de"));

/**
 * Was auf der Kategorie-Seite selbst gelistet wird: die redaktionellen
 * Einträge des Portals plus alle Betriebe aus Branchen, die zu klein für eine
 * eigene Seite sind. Kein Eintrag geht dabei verloren.
 */
export const eintraegeAufKategorieSeite = (katSlug: string) => {
  const seiten = new Set(branchenMitSeite(katSlug).map((b) => b.slug));
  return freieEintraege
    .filter((e) => e.kategorie === katSlug && !(e.brancheSlug && seiten.has(e.brancheSlug)))
    .sort((a, b) => a.name.localeCompare(b.name, "de"));
};

/** Steuert die ODbL-Attribution: enthält diese Liste OSM-Daten? */
export const hatOsm = (eintraege: BranchenEintrag[]): boolean =>
  eintraege.some((e) => e.quelle === "osm");

export const kategorieHatOsm = (katSlug: string): boolean =>
  freieEintraege.some((e) => e.kategorie === katSlug && e.quelle === "osm");

export const branchenbuchStats = {
  gesamt: freieEintraege.length,
  portal: restaurantEintraege.length + hotelEintraege.length,
  ratgeber: ratgeberEintraege.length,
  osm: osmEintraege.length,
  branchenSeiten: brancheIndex.filter((b) => b.eigeneSeite).length,
};
