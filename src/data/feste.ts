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
    slug: "brezelfest",
    name: "Speyerer Brezelfest",
    seoTitle: "Brezelfest Speyer: Termin, Festumzug und Festplatz",
    shortDesc:
      "Das größte Heimat- und Volksfest der Pfalz: fünf Tage Festplatz, Festumzug und Brezelkönigin, immer am zweiten Juli-Wochenende.",
    lead: "Das Brezelfest ist das größte Heimat- und Volksfest der Pfalz und der Termin, an dem Speyer im Ausnahmezustand ist. Es findet traditionell am zweiten Juli-Wochenende statt, beginnt donnerstags mit Eröffnung und Bieranstich und läuft auf dem Festplatz. Höhepunkt ist der Festumzug am Brezelfest-Sonntag um 13:30 Uhr.",
    termin: "Jährlich am zweiten Juli-Wochenende, Beginn donnerstags",
    district: "altstadt",
    imageHue: 3,
    geo: { lat: 49.3205, lng: 8.4412, label: "Festplatz Speyer" },
    hotelEventSlug: "brezelfest",
    websiteUrl: "https://www.speyerer-brezelfest.de/",
    guide: {
      terminOrt: [
        "Das Brezelfest findet nach Angaben des Veranstalters immer am zweiten Wochenende im Juli statt. Der Startschuss fällt donnerstags mit der feierlichen Eröffnung und dem Brezelfestbieranstich, danach läuft das Fest über das gesamte Wochenende.",
        "Veranstaltungsort ist der Festplatz unterhalb des Doms, dieselbe Fläche, auf der im Oktober die Herbstmesse steht. Der Weg von dort in die Altstadt und zum Dom dauert nur wenige Minuten zu Fuß.",
      ],
      angebot: [
        "Das Brezelfest ist ein klassisches Volksfest mit Fahrgeschäften, Festzelten und Schaustellerbetrieben, ergänzt um die Speyerer Eigenheiten: die Brezelkönigin, das Brezelfestbier und den Umzug. Der Name kommt vom Brauch, bei dem Umzug Brezeln in die Menge zu werfen.",
        "Der traditionelle Straßenumzug startet am Brezelfest-Sonntag um 13:30 Uhr und zieht durch die Stadt. Er ist der meistbesuchte Programmpunkt und der Grund, warum am Sonntagmittag die halbe Region in Speyer ist. Das genaue Programm und die Umzugsstrecke veröffentlicht der Veranstalter jeweils im Frühsommer.",
      ],
      anreise: [
        "Zum Brezelfest ist die Bahn die klar bessere Wahl. Vom Hauptbahnhof Speyer sind es wenige Minuten zu Fuß, und die Innenstadt ist rund um Umzug und Festbetrieb streckenweise gesperrt.",
      ],
      parken: [
        "Der Festplatz selbst fällt während des Fests als Parkfläche komplett aus, was die Parksituation in der ganzen Innenstadt verschärft. Wer mit dem Auto kommt, plant großzügig Zeit ein und weicht auf den Parkplatz am Technik Museum oder auf das Naturfreundehaus aus. Alle Optionen stehen im Überblick zum Parken in Speyer.",
      ],
      tipps: [
        "Zum Umzug am Sonntag deutlich vor 13:30 Uhr einen Platz an der Strecke suchen.",
        "Der Donnerstag mit Eröffnung und Bieranstich ist der ruhigste Tag des Fests.",
        "Unterkünfte in Speyer sind zur Festwoche früh ausgebucht, das gilt auch für die Nachbarorte.",
        "Der Festplatz liegt in Gehweite zum Dom: Ein Vormittag in der Altstadt und ein Nachmittag auf dem Fest lassen sich gut verbinden.",
      ],
      umgebung: [
        { label: "Kaiserdom zu Speyer", href: "/sehenswuerdigkeiten/kaiserdom/" },
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Herbstmesse auf demselben Platz", href: "/feste/herbstmesse/" },
        { label: "Parken in Speyer", href: "/parken-in-speyer/" },
        { label: "Hotels in Speyer", href: "/hotels/" },
      ],
      faq: [
        {
          q: "Wann findet das Speyerer Brezelfest statt?",
          a: "Immer am zweiten Wochenende im Juli. Es beginnt donnerstags mit der feierlichen Eröffnung und dem Brezelfestbieranstich. Die genauen Tage und das Programm veröffentlicht der Veranstalter jeweils im Frühsommer.",
        },
        {
          q: "Wann ist der Brezelfestumzug?",
          a: "Am Brezelfest-Sonntag um 13:30 Uhr. Der Straßenumzug ist der bekannteste Programmpunkt des Fests, dabei werden traditionell Brezeln in die Menge geworfen.",
        },
        {
          q: "Wo findet das Brezelfest statt?",
          a: "Auf dem Festplatz unterhalb des Doms, derselben Fläche, auf der im Oktober die Herbstmesse steht. Von dort sind es nur wenige Minuten zu Fuß in die Altstadt und zum Dom.",
        },
        {
          q: "Warum heißt es Brezelfest?",
          a: "Die Brezel ist das Wahrzeichen des Fests: Beim Umzug werden Brezeln in die Menge geworfen, und das Fest hat mit der Brezelkönigin eine eigene Repräsentantin. Es gilt als größtes Heimat- und Volksfest der Pfalz.",
        },
      ],
      stand: "August 2026",
      quelle: {
        label: "Speyerer Brezelfest, häufige Fragen",
        url: "https://www.speyerer-brezelfest.de/faqs",
      },
    },
  },
  {
    slug: "altstadtfest",
    name: "Speyerer Altstadtfest",
    headline: "Altstadtfest Speyer 2026",
    seoTitle: "Altstadtfest Speyer 2026: Termin, Programm und Entenrennen",
    shortDesc:
      "Zwei Tage Livemusik und Gastronomie in den Gassen der Altstadt: Das 49. Altstadtfest läuft am 11. und 12. September 2026.",
    lead: "Das Altstadtfest ist das Fest, bei dem die Speyerer Vereine und die Anwohnerinnen und Anwohner der Altstadt die Gassen selbst bespielen. 2026 findet es in der 49. Auflage am Freitag, dem 11., und Samstag, dem 12. September statt, mit Bühnen quer durch die Altstadt und dem Entenrennen auf dem Speyerbach als traditionellem Höhepunkt am Samstag.",
    termin: "11. und 12. September 2026",
    district: "altstadt",
    imageHue: 2,
    startDate: "2026-09-11",
    endDate: "2026-09-12",
    geo: { lat: 49.3179, lng: 8.4393, label: "Altstadtfest in der Speyerer Altstadt" },
    guide: {
      terminOrt: [
        "Das 49. Altstadtfest läuft am Freitag, dem 11. September 2026, und am Samstag, dem 12. September 2026. Gefeiert wird in den Gassen der Speyerer Altstadt, also im Quartier rund um die Maximilianstraße zwischen Altpörtel und Dom.",
        "Getragen wird das Fest von den Anwohnerinnen und Anwohnern der Altstadt und von den Speyerer Vereinen, die die Stände und Bühnen betreiben. Das unterscheidet es von den großen Volksfesten der Stadt: Das Programm entsteht in der Nachbarschaft, nicht auf einem Festplatz.",
      ],
      oeffnungszeiten: [
        { tage: "Freitag, 11. September 2026", zeit: "16 bis 1 Uhr, Musik bis 24 Uhr" },
        { tage: "Samstag, 12. September 2026", zeit: "11 bis 1 Uhr, Musik bis 24 Uhr" },
      ],
      angebot: [
        "Auf den Bühnen spielen Bands unterschiedlicher Stilrichtungen, dazu kommt ein breites gastronomisches Angebot der Vereine und Anwohner. Weil sich das Fest über mehrere Gassen verteilt, lohnt es sich, einmal komplett durchzulaufen, statt an der ersten Bühne stehen zu bleiben.",
        "Höhepunkt am Samstag ist das traditionelle Entenrennen auf dem Speyerbach. Es ist der Programmpunkt, für den auch Familien mit kleineren Kindern anreisen, und entsprechend voll wird es an den Brücken entlang der Strecke.",
      ],
      anreise: [
        "Die Altstadt ist während des Fests weitgehend gesperrt oder nur eingeschränkt befahrbar. Vom Hauptbahnhof Speyer sind es wenige Minuten zu Fuß in die Maximilianstraße, das ist an beiden Tagen die entspannteste Anreise.",
      ],
      parken: [
        "Mit dem Auto sind die innenstadtnahen Parkhäuser und die großen Flächen am Rand der Altstadt die Wahl: Parkhaus Zentrum, Tiefgarage Postgalerie, Festplatz und Naturfreundehaus. Der Domparkplatz am Edith-Stein-Platz ist am Festsamstag früh belegt.",
      ],
      tipps: [
        "Freitagabend ist entspannter als der Samstag, das Fest startet dort erst um 16 Uhr.",
        "Zum Entenrennen am Samstag früh an den Speyerbach kommen, die Plätze an den Brücken sind schnell besetzt.",
        "Die Musik endet an beiden Tagen um Mitternacht, ausgeschenkt wird bis 1 Uhr.",
        "Einmal komplett durch die Gassen laufen: Das Programm verteilt sich, jede Ecke hat ein eigenes Publikum.",
      ],
      umgebung: [
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Kaiserdom zu Speyer", href: "/sehenswuerdigkeiten/kaiserdom/" },
        { label: "Stadtteil Altstadt", href: "/stadtteile/altstadt/" },
        { label: "Parken in Speyer", href: "/parken-in-speyer/" },
        { label: "Restaurants in Speyer", href: "/restaurants/" },
      ],
      faq: [
        {
          q: "Wann ist das Altstadtfest in Speyer 2026?",
          a: "Am Freitag, dem 11. September 2026, von 16 bis 1 Uhr und am Samstag, dem 12. September 2026, von 11 bis 1 Uhr. Die Musik spielt an beiden Tagen bis Mitternacht (Quelle: Stadt Speyer, Stand August 2026).",
        },
        {
          q: "Wo findet das Altstadtfest statt?",
          a: "In den Gassen der Speyerer Altstadt rund um die Maximilianstraße zwischen Altpörtel und Dom. Es gibt keinen einzelnen Festplatz, das Programm verteilt sich über das ganze Quartier.",
        },
        {
          q: "Was ist das Entenrennen beim Altstadtfest?",
          a: "Am Samstag findet auf dem Speyerbach das traditionelle Entenrennen statt, bei dem nummerierte Plastikenten die Strecke hinuntertreiben. Es ist der bekannteste Programmpunkt des Fests und besonders bei Familien beliebt.",
        },
        {
          q: "Kostet das Altstadtfest Eintritt?",
          a: "Das Fest findet im öffentlichen Straßenraum der Altstadt statt und ist frei zugänglich. Bezahlt wird an den Ständen der Vereine und Anwohner.",
        },
      ],
      stand: "August 2026",
      quelle: {
        label: "Stadt Speyer, 49. Altstadtfest",
        url: "https://www.speyer.de/de/veranstaltungen/messen-maerkte-und-veranstaltungen/altstadtfest/",
      },
    },
  },
  {
    slug: "herbstmesse",
    name: "Speyerer Herbstmesse",
    headline: "Herbstmesse Speyer 2026",
    seoTitle: "Herbstmesse Speyer 2026: Termine, Öffnungszeiten und Fahrgeschäfte",
    shortDesc:
      "Zehn Tage Volksfest auf dem Festplatz unterhalb des Doms: Die 779. Speyerer Herbstmesse läuft vom 16. bis 25. Oktober 2026.",
    lead: "Die Speyerer Herbstmesse ist mit ihrer 779. Auflage eines der ältesten Volksfeste der Region. Vom 16. bis 25. Oktober 2026 bauen die Schausteller ihre Fahrgeschäfte auf dem Festplatz unterhalb des Doms auf, von Riesenrad und Skooter bis zu Biergärten und Imbissständen mit rund 600 Sitzplätzen.",
    termin: "16. bis 25. Oktober 2026",
    district: "altstadt",
    imageHue: 6,
    startDate: "2026-10-16",
    endDate: "2026-10-25",
    geo: { lat: 49.3205, lng: 8.4412, label: "Festplatz Speyer" },
    guide: {
      terminOrt: [
        "Die 779. Speyerer Herbstmesse läuft vom 16. bis zum 25. Oktober 2026 und damit über zwei Wochenenden. Aufgebaut wird auf dem Festplatz unterhalb des Doms, in Gehweite zum Domplatz.",
        "Die Zahl im Namen ist kein Marketing: Die Messe gehört zu den ältesten durchgehend veranstalteten Volksfesten in Deutschland und ist neben dem Brezelfest im Juli der zweite große Volksfesttermin im Speyerer Jahr.",
      ],
      oeffnungszeiten: [
        { tage: "Montag bis Donnerstag", zeit: "14 bis 22 Uhr" },
        { tage: "Freitag, Samstag und Tage vor Feiertagen", zeit: "14 bis 23 Uhr" },
        { tage: "Sonn- und Feiertage", zeit: "12 bis 22 Uhr" },
      ],
      angebot: [
        "Auf dem Platz stehen Riesenrad, Rundfahrgeschäfte, ein Automatik-Skooter, eine Hochfahrattraktion und mehrere Kinderfahrgeschäfte. Dazu kommen die klassischen Geschicklichkeitsstände mit Ball-, Pfeil- und Ringwerfen, Angeln und Schießständen.",
        "Für die Gastronomie sind Biergärten und Imbissstände mit rund 600 Sitzplätzen angekündigt, dazu Süßwaren-, Eis- und Crêpewagen sowie Verkaufsstände. Sonntags öffnet die Messe bereits um 12 Uhr und ist damit der beste Termin für einen Besuch mit kleineren Kindern.",
      ],
      anreise: [
        "Vom Hauptbahnhof Speyer sind es rund 15 Minuten zu Fuß. Weil der Festplatz während der Messe belegt ist, fällt er als Parkfläche für die Altstadt aus, was den Parkdruck in der Innenstadt spürbar erhöht.",
      ],
      parken: [
        "Genau deshalb ist die Bahn während der Messe die bessere Wahl. Wer mit dem Auto kommt, weicht auf das Parkhaus Zentrum, die Tiefgarage Postgalerie, den Parkplatz Naturfreundehaus oder den großen Parkplatz am Technik Museum aus.",
      ],
      tipps: [
        "Sonntags öffnet die Messe schon um 12 Uhr, das ist der ruhigste Zeitpunkt für Familien.",
        "Freitag und Samstag ist bis 23 Uhr geöffnet, unter der Woche endet der Betrieb um 22 Uhr.",
        "Der Festplatz fällt während der Messe als Parkplatz aus, das im Zeitplan einkalkulieren.",
        "Der Weg zum Dom dauert vom Festplatz nur wenige Minuten, ein Messebesuch lässt sich gut mit der Altstadt verbinden.",
      ],
      umgebung: [
        { label: "Kaiserdom zu Speyer", href: "/sehenswuerdigkeiten/kaiserdom/" },
        { label: "Maximilianstraße", href: "/sehenswuerdigkeiten/maximilianstrasse/" },
        { label: "Parken in Speyer", href: "/parken-in-speyer/" },
        { label: "Speyer mit Kindern", href: "/speyer-mit-kindern/" },
        { label: "Hotels in Speyer", href: "/hotels/" },
      ],
      faq: [
        {
          q: "Wann ist die Herbstmesse in Speyer 2026?",
          a: "Die 779. Speyerer Herbstmesse läuft vom 16. bis 25. Oktober 2026 (Quelle: Stadt Speyer, Stand August 2026).",
        },
        {
          q: "Welche Öffnungszeiten hat die Speyerer Herbstmesse?",
          a: "Montags bis donnerstags von 14 bis 22 Uhr, freitags, samstags und an Tagen vor Feiertagen von 14 bis 23 Uhr, sonn- und feiertags von 12 bis 22 Uhr.",
        },
        {
          q: "Wo findet die Herbstmesse in Speyer statt?",
          a: "Auf dem Festplatz unterhalb des Doms. Der Platz ist vom Domplatz und vom Hauptbahnhof aus zu Fuß erreichbar.",
        },
        {
          q: "Welche Fahrgeschäfte gibt es auf der Herbstmesse?",
          a: "Angekündigt sind unter anderem ein Riesenrad, Rundfahrgeschäfte, ein Automatik-Skooter, eine Hochfahrattraktion und mehrere Kinderfahrgeschäfte, dazu Geschicklichkeitsstände, Biergärten und Imbissstände mit rund 600 Sitzplätzen.",
        },
      ],
      stand: "August 2026",
      quelle: {
        label: "Stadt Speyer, 779. Herbstmesse",
        url: "https://www.speyer.de/de/veranstaltungen/messen-maerkte-und-veranstaltungen/herbstmesse/",
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
