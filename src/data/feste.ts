/**
 * Speyerer Feste und Veranstaltungen
 * -----------------------------------
 * Wiederkehrende Stadt-Events mit kurzer Beschreibung und Termin-Pattern.
 * URL-Pfad: /feste/<slug>/
 */

export type FestGuide = {
  /** Absätze zu Termin und Ort */
  terminOrt: string[];
  /**
   * Reguläre Öffnungszeiten als Tabelle. Eigene H2 auf der Seite, weil
   * "<fest> öffnungszeiten" ein eigenständiges Suchmuster ist.
   */
  oeffnungszeiten?: { tage: string; zeit: string }[];
  /** Abweichende Zeiten an Feiertagen (24.12., Silvester, Neujahr ...) */
  sonderzeiten?: { tag: string; zeit: string }[];
  /** Absätze zu Ständen, Angebot und Programm */
  angebot?: string[];
  /** Absätze zu einem eigenständigen Folge-/Teilmarkt (z. B. Neujahrsmarkt) */
  neujahrsmarkt?: string[];
  /** Absätze zur Anreise */
  anreise: string[];
  /** Absätze zum Parken; ergänzt die Anreise um die Auto-Perspektive */
  parken?: string[];
  /** Praktische Tipps (Liste) */
  tipps: string[];
  /** Interne Links "In der Umgebung" — nur existierende Routen */
  umgebung: { label: string; href: string }[];
  /** 3 FAQs, werden als FAQPage-Schema ausgespielt */
  faq: { q: string; a: string }[];
  /** Stand-Vermerk für zeitsensible Angaben, z.B. "Juli 2026" */
  stand: string;
  /** Offizielle Quelle der Termin-/Zeitangaben, wird unter dem Stand genannt */
  quelle?: { label: string; url: string };
};

export type Fest = {
  slug: string;
  /** Offizieller Name, wird in Cards und im Event-Schema verwendet */
  name: string;
  /** Abweichende H1, wenn der offizielle Name nicht dem Suchmuster entspricht */
  headline?: string;
  /** Abweichender <title>, wenn H1 und Meta-Titel auseinanderfallen sollen */
  seoTitle?: string;
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
  /** ISO-Datum (YYYY-MM-DD) für Event-Schema, nur wenn offiziell bestätigt */
  startDate?: string;
  endDate?: string;
  /** Koordinaten des Marktgeländes für den Hotel-Block in der Nähe */
  geo?: { lat: number; lng: number; label: string };
  /** Slug einer /hotels-speyer-<slug>//-Landing mit echten Reisedaten */
  hotelEventSlug?: string;
};

export const feste: Fest[] = [
  {
    slug: "weihnachtsmarkt",
    name: "Speyerer Weihnachts- und Neujahrsmarkt",
    headline: "Weihnachtsmarkt Speyer 2026/27",
    seoTitle: "Weihnachtsmarkt Speyer 2026: Termine, Öffnungszeiten, Neujahrsmarkt",
    shortDesc:
      "Sieben Wochen Domstadt im Advent: Weihnachts- und Neujahrsmarkt rund um den Kaiserdom, vom 23. November 2026 bis 10. Januar 2027.",
    lead: "Der Speyerer Weihnachtsmarkt ist einer der wenigen deutschen Weihnachtsmärkte, die über den Jahreswechsel hinaus geöffnet bleiben: Als Weihnachts- und Neujahrsmarkt läuft er 2026/27 in seiner 51. Auflage vom 23. November 2026 bis zum 10. Januar 2027. Die Stände stehen mitten in der Innenstadt vor Europas größter romanischer Kirche, dem Kaiserdom. Wer erst zwischen den Jahren Zeit hat, findet hier also noch einen kompletten Markt vor, während anderswo längst abgebaut ist.",
    termin: "23. November 2026 bis 10. Januar 2027",
    district: "altstadt",
    imageHue: 1,
    imageKey: "fest:weihnachtsmarkt",
    startDate: "2026-11-23",
    endDate: "2027-01-10",
    geo: { lat: 49.3172, lng: 8.441, label: "Weihnachtsmarkt am Kaiserdom" },
    hotelEventSlug: "weihnachtsmarkt",
    guide: {
      terminOrt: [
        "Der 51. Speyerer Weihnachts- und Neujahrsmarkt läuft vom 23. November 2026 bis zum 10. Januar 2027. Eröffnet wird er am Montag, dem 23. November 2026, um 18 Uhr. Damit ist er rund sieben Wochen geöffnet und deutlich länger als die meisten Märkte der Region, die um den 23. Dezember herum schließen.",
        "Die Stände stehen mitten in der Innenstadt rund um den Kaiserdom und entlang der Maximilianstraße, der Fußgängerachse zwischen Altpörtel und Dom. Beides liegt so nah beieinander, dass sich der gesamte Markt zu Fuß in wenigen Minuten ablaufen lässt. Am Altpörtel steht zusätzlich eine Schlittschuhbahn.",
        "Neben dem eigentlichen Markt gibt es zwei kleinere Formate an den vier Adventswochenenden: einen Kunsthandwerkermarkt in den Höfen des Rathausensembles (freitags 16 bis 20 Uhr, samstags und sonntags 11 bis 20 Uhr) und den Weihnachtsmarkt der Partnerstädte im Erdgeschoss des Rathauses (täglich 11 bis 18 Uhr).",
      ],
      oeffnungszeiten: [
        { tage: "Montag bis Donnerstag und Sonntag", zeit: "11 bis 21 Uhr (Imbiss- und Ausschankstände)" },
        { tage: "Freitag und Samstag", zeit: "11 bis 22 Uhr (Imbiss- und Ausschankstände)" },
        { tage: "Täglich", zeit: "11 bis 20 Uhr (Verkaufsstände)" },
      ],
      sonderzeiten: [
        { tag: "Eröffnung, Montag 23. November 2026", zeit: "ab 18 Uhr" },
        { tag: "Verkaufsoffener Sonntag, 29. November 2026", zeit: "13 bis 18 Uhr" },
        { tag: "Heiligabend, 24. Dezember", zeit: "10 bis 13 Uhr" },
        { tag: "1. und 2. Weihnachtsfeiertag, 25. und 26. Dezember", zeit: "geschlossen" },
        { tag: "Silvester, 31. Dezember", zeit: "11 bis 15 Uhr" },
        { tag: "Neujahr, 1. Januar 2027", zeit: "13 bis 21 Uhr" },
      ],
      angebot: [
        "Der Markt trägt das altdeutsche Konzept im Namen und im Budenbild: Holzstände, warme Beleuchtung und ein Angebot, das zwischen Kunsthandwerk, Weihnachtsschmuck und Kulinarik aufgeteilt ist. Die Imbiss- und Ausschankstände haben abends länger geöffnet als die Verkaufsstände, der Markt kippt also im Lauf des Abends vom Einkaufen ins Beisammensein.",
        "Der Kunsthandwerkermarkt an den Adventswochenenden ist der Teil für alle, die gezielt nach Handgemachtem suchen. Er liegt in den Höfen des Rathausensembles und ist damit räumlich vom Trubel der Hauptachse getrennt. Der Weihnachtsmarkt der Partnerstädte im Rathaus-Erdgeschoss zeigt Stände aus den europäischen Partnerstädten Speyers.",
        "Die Schlittschuhbahn am Altpörtel ist das Angebot für Familien und für alle, die nicht nur bummeln wollen. Sie liegt am westlichen Ende der Maximilianstraße, also am Anfang der Marktachse, wenn man vom Bahnhof oder vom Parkhaus Zentrum kommt.",
      ],
      neujahrsmarkt: [
        "Der Neujahrsmarkt ist kein zweiter, separater Markt, sondern die Verlängerung desselben Marktes über den Jahreswechsel hinaus bis zum 10. Januar 2027. Genau das unterscheidet Speyer von fast allen Nachbarstädten: Wer nach Weihnachten anreist, findet noch einen vollständig aufgebauten Markt vor.",
        "Praktisch heißt das: Am 25. und 26. Dezember bleibt alles geschlossen, ab dem 27. Dezember läuft der Markt zu den regulären Zeiten weiter. An Silvester ist von 11 bis 15 Uhr geöffnet, am Neujahrstag von 13 bis 21 Uhr. Die erste Januarwoche ist die ruhigste Zeit des gesamten Marktes und die beste Gelegenheit für alle, denen die Adventswochenenden zu voll sind.",
      ],
      anreise: [
        "Vom Hauptbahnhof Speyer sind es zu Fuß nur wenige Minuten in die Maximilianstraße. In der Adventszeit ist die Bahn die entspannteste Anreise, weil die Innenstadt verkehrsberuhigt ist und rund um den Markt zusätzliche Verkehrsregelungen gelten.",
        "Aus der Region fahren Buslinien in die Innenstadt. Wer aus Mannheim, Ludwigshafen, Heidelberg oder Karlsruhe kommt, ist mit Bahn und Bus meist schneller am Markt als mit dem Auto samt Parkplatzsuche.",
      ],
      parken: [
        "Mit dem Auto sind die innenstadtnahen Parkhäuser die erste Wahl: das Parkhaus Zentrum in der Heydenreichstraße und die Tiefgarage Postgalerie liegen beide wenige Gehminuten von der Maximilianstraße entfernt. Direkt am Dom liegt der Domparkplatz am Edith-Stein-Platz, der an Adventswochenenden allerdings früh voll ist.",
        "Günstiger und deutlich größer sind der Festplatz und der Parkplatz Naturfreundehaus in Tarifzone D, in der die erste Stunde gebührenfrei ist. Rund 1.050 Plätze bietet der Parkplatz am Technik Museum, der als Ausweichfläche an vollen Tagen funktioniert. Alle Tarife, Kapazitäten und die kostenfreien Alternativen stehen im Überblick zum Parken in Speyer.",
      ],
      tipps: [
        "Zwischen den Jahren kommen: Der Markt läuft bis zum 10. Januar 2027 weiter und ist in der ersten Januarwoche am ruhigsten.",
        "Abends kommen: Erst mit der Beleuchtung entfaltet die Kulisse aus Altpörtel, Maximilianstraße und Dom ihre Wirkung.",
        "Verkaufsstände schließen um 20 Uhr, Imbiss- und Ausschankstände bleiben länger offen. Wer einkaufen will, sollte vorher da sein.",
        "Den Kunsthandwerkermarkt in den Rathaushöfen einplanen, er läuft nur an den vier Adventswochenenden.",
        "Am 24. Dezember ist nur vormittags von 10 bis 13 Uhr geöffnet, am 25. und 26. Dezember gar nicht.",
        "Der verkaufsoffene Sonntag am 29. November 2026 (13 bis 18 Uhr) verbindet Markt und Innenstadt-Shopping, ist aber entsprechend voll.",
      ],
      umgebung: [
        { label: "Kaiserdom zu Speyer", href: "/sehenswuerdigkeiten/kaiserdom/" },
        { label: "Altpörtel", href: "/sehenswuerdigkeiten/altpoertel/" },
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Parken in Speyer", href: "/parken-in-speyer/" },
        { label: "Hotels in Speyer", href: "/hotels/" },
        { label: "Stadtteil Altstadt", href: "/stadtteile/altstadt/" },
      ],
      faq: [
        {
          q: "Wann ist der Weihnachtsmarkt in Speyer 2026?",
          a: "Der 51. Speyerer Weihnachts- und Neujahrsmarkt läuft vom 23. November 2026 bis zum 10. Januar 2027. Eröffnet wird er am 23. November 2026 um 18 Uhr (Quelle: Stadt Speyer, Stand August 2026).",
        },
        {
          q: "Welche Öffnungszeiten hat der Weihnachtsmarkt Speyer?",
          a: "Imbiss- und Ausschankstände öffnen montags bis donnerstags und sonntags von 11 bis 21 Uhr, freitags und samstags von 11 bis 22 Uhr. Die Verkaufsstände haben täglich von 11 bis 20 Uhr geöffnet.",
        },
        {
          q: "Hat der Weihnachtsmarkt Speyer an Weihnachten und Silvester geöffnet?",
          a: "Am 24. Dezember ist von 10 bis 13 Uhr geöffnet, am 25. und 26. Dezember bleibt der Markt geschlossen. An Silvester läuft er von 11 bis 15 Uhr, am Neujahrstag von 13 bis 21 Uhr.",
        },
        {
          q: "Was ist der Speyerer Neujahrsmarkt?",
          a: "Der Neujahrsmarkt ist kein eigener Markt, sondern die Verlängerung des Weihnachtsmarkts über den Jahreswechsel hinaus bis zum 10. Januar 2027. Speyer gehört damit zu den wenigen Städten, in denen der Markt auch nach Neujahr noch steht.",
        },
        {
          q: "Wo genau stehen die Stände?",
          a: "Mitten in der Innenstadt rund um den Kaiserdom und entlang der Maximilianstraße zwischen Altpörtel und Dom. Am Altpörtel steht zusätzlich eine Schlittschuhbahn, an den Adventswochenenden kommen der Kunsthandwerkermarkt in den Rathaushöfen und der Weihnachtsmarkt der Partnerstädte im Rathaus dazu.",
        },
        {
          q: "Wo kann man zum Weihnachtsmarkt in Speyer parken?",
          a: "Am nächsten liegen das Parkhaus Zentrum und die Tiefgarage Postgalerie, direkt am Dom der Domparkplatz am Edith-Stein-Platz. Günstiger sind Festplatz und Naturfreundehaus in Tarifzone D mit gebührenfreier erster Stunde, als Ausweichfläche dient der große Parkplatz am Technik Museum.",
        },
      ],
      stand: "August 2026",
      quelle: {
        label: "Stadt Speyer, 51. Speyerer Weihnachts- und Neujahrsmarkt",
        url: "https://www.speyer.de/de/veranstaltungen/messen-maerkte-und-veranstaltungen/weihnachts-neujahrsmarkt/",
      },
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
