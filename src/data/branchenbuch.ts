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
 * - `premiumPartner` bleibt LEER, bis tatsächlich jemand bucht.
 *   Niemals Beispiel-Firmen einpflegen.
 * - Alphabetische Sortierung der freien Einträge übernimmt die Page.
 */

import { restaurants } from "./restaurants";
import { hotels } from "./hotels";
import { districts } from "./districts";

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
}));

const hotelEintraege: BranchenEintrag[] = hotels.map((h) => ({
  name: h.name,
  kategorie: "hotels",
  ort: districtName(h.district),
  detailPath: `/hotels/${h.slug}/`,
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
];

export const freieEintraege: BranchenEintrag[] = [
  ...restaurantEintraege,
  ...hotelEintraege,
  ...ratgeberEintraege,
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
