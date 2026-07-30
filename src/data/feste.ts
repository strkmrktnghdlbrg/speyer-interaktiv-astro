/**
 * Speyerer Feste und Veranstaltungen
 * -----------------------------------
 * Wiederkehrende Stadt-Events mit kurzer Beschreibung und Termin-Pattern.
 * URL-Pfad: /feste/<slug>/
 */

export type FestGuide = {
  /** Absätze zu Termin und Ort */
  terminOrt: string[];
  /** Absätze zur Anreise */
  anreise: string[];
  /** Praktische Tipps (Liste) */
  tipps: string[];
  /** Interne Links "In der Umgebung" — nur existierende Routen */
  umgebung: { label: string; href: string }[];
  /** 3 FAQs, werden als FAQPage-Schema ausgespielt */
  faq: { q: string; a: string }[];
  /** Stand-Vermerk für zeitsensible Angaben, z.B. "Juli 2026" */
  stand: string;
};

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
  guide?: FestGuide;
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
    imageKey: "fest:weihnachtsmarkt",
    guide: {
      terminOrt: [
        "Der Altdeutsche Weihnachtsmarkt öffnet jährlich von Ende November bis zum 23. Dezember. Die Buden stehen in der Altstadt zwischen Altpörtel und Dom, also entlang der Maximilianstraße. Das Riesenrad im Domgarten gehört zu den bekanntesten Motiven des Marktes: Von oben blickt man auf den beleuchteten Kaiserdom.",
        "Parallel zum Markt läuft in mehreren Speyerer Kirchen ein Krippenpfad, der sich gut mit einem Marktbesuch verbinden lässt.",
      ],
      anreise: [
        "Die Altstadt ist vom Hauptbahnhof Speyer aus fußläufig erreichbar, der Weg zur Maximilianstraße dauert nur wenige Minuten. Wer mit dem Auto kommt, nutzt am besten die innenstadtnahen Parkhäuser, denn in der Altstadt selbst gelten Verkehrsberuhigungen. In der Adventszeit ist die Anreise mit der Bahn die entspannteste Option.",
      ],
      tipps: [
        "Abends kommen: Erst mit der Beleuchtung entfalten Buden, Dom und Riesenrad ihre volle Wirkung.",
        "Wochenenden im Advent sind am vollsten - wer es ruhiger mag, kommt unter der Woche.",
        "Eine Fahrt im Riesenrad im Domgarten einplanen: Der Blick auf den beleuchteten Kaiserdom ist selten.",
        "Den Krippenpfad durch die Kirchen mitnehmen - er liegt auf dem Weg und ist eine ruhige Ergänzung zum Markttrubel.",
      ],
      umgebung: [
        { label: "Kaiserdom zu Speyer", href: "/sehenswuerdigkeiten/kaiserdom/" },
        { label: "Altpörtel", href: "/sehenswuerdigkeiten/altpoertel/" },
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Stadtteil Altstadt", href: "/stadtteile/altstadt/" },
      ],
      faq: [
        {
          q: "Wann findet der Speyerer Weihnachtsmarkt statt?",
          a: "Der Altdeutsche Weihnachtsmarkt läuft jährlich von Ende November bis zum 23. Dezember (Stand Juli 2026, die genauen Tage veröffentlicht die Stadt vor Saisonbeginn).",
        },
        {
          q: "Wo genau stehen die Buden?",
          a: "In der Altstadt zwischen Altpörtel und Dom, entlang der Maximilianstraße. Das Riesenrad steht im Domgarten direkt beim Kaiserdom.",
        },
        {
          q: "Was macht den Markt besonders?",
          a: "Das altdeutsche Konzept, die Kulisse aus Altpörtel und Kaiserdom, das Riesenrad mit Blick auf den beleuchteten Dom und der Krippenpfad, der parallel in mehreren Kirchen gezeigt wird.",
        },
      ],
      stand: "Juli 2026",
    },
  },
  {
    slug: "fastnacht",
    name: "Speyerer Fastnacht",
    shortDesc:
      "Pfälzer Fastnacht zwischen Domplatz und Maximilianstraße: Umzug, Närrische Sitzungen, Faschingsdienstag-Verbrennung.",
    lead: "Die Speyerer Fastnacht ist Teil der traditionsreichen Pfälzer Karnevalstradition. Vom 11.11. bis zum Aschermittwoch organisiert sich das närrische Speyer in Vereinen und Sitzungsabenden. Höhepunkt ist der Fastnachts-Sonntag-Umzug durch die Innenstadt - Pfälzer Witz statt Kölner Karneval-Industrie.",
    termin: "11.11. bis Aschermittwoch (Hauptsaison Februar/März)",
    district: "altstadt",
    imageHue: 4,
    imageKey: "fest:fastnacht",
    guide: {
      terminOrt: [
        "Die Fastnachtskampagne beginnt wie überall in der Pfalz am 11.11. und endet am Aschermittwoch. Die Hauptsaison mit Sitzungen und Umzug liegt im Februar beziehungsweise März, abhängig vom beweglichen Ostertermin. Höhepunkt ist der Umzug am Fastnachts-Sonntag durch die Innenstadt zwischen Domplatz und Maximilianstraße.",
        "Getragen wird die Speyerer Fastnacht von den örtlichen Vereinen, die über die Kampagne verteilt Sitzungsabende veranstalten.",
      ],
      anreise: [
        "Zum Umzug ist die Innenstadt gesperrt oder stark eingeschränkt befahrbar - die Anreise mit der Bahn zum Hauptbahnhof Speyer und der kurze Fußweg in die Altstadt sind an diesem Tag klar die beste Wahl.",
      ],
      tipps: [
        "Zum Umzug am Fastnachts-Sonntag früh kommen, die besten Plätze entlang der Maximilianstraße sind schnell belegt.",
        "Sitzungsabende der Vereine finden über die ganze Kampagne verteilt statt - Termine veröffentlichen die Vereine jeweils selbst.",
        "Mit Kindern eher an den Straßenrand der breiteren Abschnitte stellen, dort ist mehr Platz.",
      ],
      umgebung: [
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Altpörtel", href: "/sehenswuerdigkeiten/altpoertel/" },
        { label: "Stadtteil Altstadt", href: "/stadtteile/altstadt/" },
        { label: "Restaurants in Speyer", href: "/restaurants/" },
      ],
      faq: [
        {
          q: "Wann ist die Hauptsaison der Speyerer Fastnacht?",
          a: "Die Kampagne läuft vom 11.11. bis Aschermittwoch, die Hauptsaison mit Sitzungen und Umzug liegt im Februar/März (Stand Juli 2026).",
        },
        {
          q: "Was ist der Höhepunkt?",
          a: "Der Umzug am Fastnachts-Sonntag durch die Innenstadt zwischen Domplatz und Maximilianstraße.",
        },
        {
          q: "Wie unterscheidet sich die Pfälzer Fastnacht vom rheinischen Karneval?",
          a: "Sie ist kleiner, vereinsgetragen und näher am Publikum: Pfälzer Witz und Sitzungsabende der örtlichen Vereine statt großer Karnevalsindustrie.",
        },
      ],
      stand: "Juli 2026",
    },
  },
];

export const getFest = (slug: string) => feste.find((f) => f.slug === slug);
