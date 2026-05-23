/**
 * Speyerer Feste und Veranstaltungen
 * -----------------------------------
 * Wiederkehrende Stadt-Events mit kurzer Beschreibung und Termin-Pattern.
 * URL-Pfad: /feste/<slug>/
 */

export type Fest = {
  slug: string;
  name: string;
  /** 1-2 Sätze für Card */
  shortDesc: string;
  /** Längerer Lead für Detail-Page */
  lead: string;
  /** Jährliches Termin-Pattern (frei formuliert), z.B. "Ende November bis Heiligabend" */
  termin: string;
  /** Stadtteil, falls verortet */
  district?: string;
  imageHue: number;
  imageKey?: string;
  websiteUrl?: string;
};

export const feste: Fest[] = [
  {
    slug: "weihnachtsmarkt",
    name: "Speyerer Altdeutscher Weihnachtsmarkt",
    shortDesc:
      "Vier Wochen Domstadt-Glanz: Altdeutscher Weihnachtsmarkt vor der Maximilianstraße mit Riesenrad, Domhof-Glühwein und Krippenpfad.",
    lead: "Der Speyerer Weihnachtsmarkt zählt zu den traditionsreichsten Pfälzer Weihnachtsmärkten. Von Ende November bis kurz vor Heiligabend stehen die Buden zwischen Altpörtel und Dom, das Riesenrad im Domgarten bietet einen seltenen Blick auf den beleuchteten Kaiserdom, und in mehreren Kirchen läuft parallel ein Krippenpfad.",
    termin: "Ende November bis 23. Dezember (jährlich)",
    district: "altstadt",
    imageHue: 1,
  },
  {
    slug: "fastnacht",
    name: "Speyerer Fastnacht",
    shortDesc:
      "Pfälzer Fastnacht zwischen Domplatz und Maximilianstraße: Umzug, Närrische Sitzungen, Faschingsdienstag-Verbrennung.",
    lead: "Die Speyerer Fastnacht ist Teil der traditionsreichen Pfälzer Karnevalstradition. Vom 11.11. bis zum Aschermittwoch organisiert sich das närrische Speyer in Vereinen und Sitzungsabenden. Höhepunkt ist der Fastnachts-Sonntag-Umzug durch die Innenstadt — Pfälzer Witz statt Kölner Karneval-Industrie.",
    termin: "11.11. bis Aschermittwoch (Hauptsaison Februar/März)",
    district: "altstadt",
    imageHue: 4,
  },
];

export const getFest = (slug: string) => feste.find((f) => f.slug === slug);
