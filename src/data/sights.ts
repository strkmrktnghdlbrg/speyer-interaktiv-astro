export type Sight = {
  slug: string;
  name: string;
  /** Abweichender <title>, wenn H1 und Meta-Titel auseinanderfallen sollen */
  seoTitle?: string;
  /** Abweichende Meta-Description, sonst wird shortDesc verwendet */
  seoDescription?: string;
  district: string;
  type: "Wahrzeichen" | "Museum" | "Kirche" | "Park" | "Markt" | "Modern" | "Aussicht" | "Freizeit";
  priceFrom: number | null; // null = kostenlos
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string; // Key im src/data/images.ts Registry, sonst HueGradient-Fallback
  categories: string[]; // Slugs aus src/data/categories.ts
  coordinates: [number, number];
  openingHours?: string;
  websiteUrl?: string;
  /**
   * Optional: konkrete GetYourGuide-Activity-ID(s). Wenn gesetzt, wird auf
   * der Sight-Detail-Page das Verfügbarkeits-Widget gerendert (Direkt-Buchung).
   * Sonst Aktivitäten-Widget mit sight.name als Query (Auto-Match).
   * Mehrere IDs Komma-separiert: "12345,67890,11223"
   */
  gygActivityId?: string;
  /**
   * Optionale FAQ. Wird als eigener Abschnitt und als FAQPage-Schema
   * ausgespielt - sinnvoll ueberall dort, wo die SERP echte Fragen zeigt
   * (Oeffnungszeiten, Preise, Parken).
   */
  faq?: { q: string; a: string }[];
  /**
   * Realistische Aufenthaltsdauer, z. B. "45 bis 60 Min.". Gesetzt bei den
   * Zielen, die in der Top-Liste auf /sehenswuerdigkeiten/ stehen - die
   * Reihenfolge dieser Liste ergibt sich aus `rank`.
   */
  visitDuration?: string;
  /** Platz in der Top-Liste auf dem Hub; ohne rank taucht das Ziel dort nicht auf */
  rank?: number;
  /** Ein Satz, warum das Ziel auf der Liste steht */
  rankReason?: string;
  /** Stand-Vermerk fuer zeitsensible Angaben, z. B. "August 2026" */
  stand?: string;
  /** Offizielle Quelle der zeitsensiblen Angaben */
  quelle?: { label: string; url: string };
};

export const sights: Sight[] = [
  // === ALTSTADT — UNESCO-Welterbe & Wahrzeichen ===
  {
    slug: "kaiserdom",
    imageKey: "sight:kaiserdom",
    name: "Kaiserdom zu Speyer",
    gygActivityId: "644577",
    categories: ["wahrzeichen", "kirchen", "unesco-welterbe", "mittelalter"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Die größte erhaltene romanische Kirche der Welt. UNESCO-Welterbe seit 1981, Grabstätte salischer und staufischer Kaiser.",
    longDesc:
      "Der Kaiserdom (offiziell Domkirche St. Maria und St. Stephan) wurde unter Konrad II. ab 1030 begonnen und 1061 geweiht. Heinrich IV. ließ ihn nochmals umbauen - das Resultat ist die größte erhaltene romanische Kirche weltweit. Die Hallenkrypta unter Chor und Querhaus ist die größte ihrer Art und beherbergt die Grablege von acht Kaisern und Königen, darunter Konrad II. und Heinrich IV. Seit 1981 UNESCO-Welterbe. Im Sommer steigt man auf den Südwestturm und schaut über den Rhein bis in den Pfälzerwald.",
    seoTitle: "Dom zu Speyer: Öffnungszeiten, Eintritt und Turmbesteigung",
    seoDescription:
      "Kaiserdom Speyer: Öffnungszeiten im Sommer und Winter, Eintritt und Tickets für Krypta und Kaisersaal, Turmbesteigung, Anfahrt und Parken.",
    rank: 1,
    visitDuration: "60 bis 90 Min.",
    rankReason:
      "Größte erhaltene romanische Kirche der Welt und seit 1981 UNESCO-Welterbe. Ohne den Dom kein Speyer-Besuch.",
    imageHue: 1,
    coordinates: [49.3173, 8.4427],
    openingHours: "Apr-Okt: Mo-Sa 9-19, So 11:30-17:30 Uhr · Nov-März: Mo-Sa 9-17, So 11:30-17 Uhr",
    websiteUrl: "https://www.dom-zu-speyer.de",
    stand: "August 2026",
    quelle: {
      label: "Dom zu Speyer, Öffnungszeiten",
      url: "https://www.dom-zu-speyer.de/besuchen/oeffnungszeiten/",
    },
    faq: [
      {
        q: "Welche Öffnungszeiten hat der Dom zu Speyer?",
        a: "Von April bis Oktober ist der Dom montags bis samstags von 9 bis 19 Uhr und sonntags von 11:30 bis 17:30 Uhr geöffnet. Von November bis März schließt er früher: montags bis samstags 9 bis 17 Uhr, sonntags 11:30 bis 17 Uhr. An Feiertagen und zu besonderen Anlässen gelten abweichende Zeiten.",
      },
      {
        q: "Was kostet der Eintritt in den Dom zu Speyer?",
        a: "Der Eintritt in den Dom ist frei. Eine Gebühr wird nur für Krypta und Kaisergräber sowie für Kaisersaal und Aussichtsplattform erhoben. Tickets gibt es in der Dom-Info oder am Eingang zur Krypta, die aktuellen Preise nennt die Dombauverwaltung.",
      },
      {
        q: "Kann man den Turm des Speyerer Doms besteigen?",
        a: "Ja, von April bis Oktober. Der Aufstieg über den Südwestturm führt in den Kaisersaal und weiter auf die Aussichtsplattform, letzter Einlass ist montags bis samstags um 17 Uhr, sonntags ab 12 Uhr bis 17 Uhr. Von November bis März sind beide Bereiche für Einzelbesucher geschlossen, Führungen bleiben möglich.",
      },
      {
        q: "Wann hat die Krypta geöffnet?",
        a: "Die Krypta mit den Kaisergräbern öffnet eine halbe Stunde nach dem Dom und schließt eine halbe Stunde vor ihm. Sie ist die größte Hallenkrypta der Romanik und Grablege von acht Kaisern und Königen.",
      },
      {
        q: "Wo parkt man am Dom zu Speyer?",
        a: "Am nächsten liegt der Domparkplatz am Edith-Stein-Platz mit rund 160 Plätzen. Günstiger sind Festplatz und Naturfreundehaus in Tarifzone D mit gebührenfreier erster Stunde, wetterfest parkt man im Parkhaus Zentrum oder in der Tiefgarage Postgalerie.",
      },
    ],
  },
  {
    slug: "altpoertel",
    imageKey: "sight:altpoertel",
    name: "Altpörtel",
    categories: ["wahrzeichen", "mittelalter"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: 1,
    shortDesc:
      "Eines der höchsten erhaltenen Stadttore Deutschlands. 55 Meter hoch, Wahrzeichen der Maximilianstraße.",
    longDesc:
      "Das Altpörtel ist das westliche Tor der ehemaligen Speyerer Stadtbefestigung. Der Unterbau stammt aus dem 13. Jahrhundert, der Aufbau wurde im 15. und 16. Jahrhundert ergänzt - daher die markante Mischung aus Wehrturm und Renaissance-Galerie oben. Mit 55 Metern Höhe gehört es zu den höchsten Stadttoren Deutschlands. Von der Aussichtsplattform schaut man die Maximilianstraße entlang direkt auf den Dom - vom einen Wahrzeichen zum anderen.",
    seoTitle: "Altpörtel Speyer: das Stadttor, Aussichtsplattform und Öffnungszeiten",
    seoDescription:
      "Das Altpörtel ist das Stadttor von Speyer: 55 Meter hoch, 154 Stufen zur Aussichtsplattform. Öffnungszeiten, Aussicht und die Verwechslung mit dem Speyerer Tor.",
    faq: [
      {
        q: "Heißt das Stadttor von Speyer Speyerer Tor?",
        a: "Nein. Das Stadttor von Speyer heißt Altpörtel. Speyerer Tor heißen jene Stadttore in Nachbarstädten wie Germersheim, Landau oder Bruchsal, die in Richtung Speyer zeigten. Die Bezeichnung beschreibt dort die Richtung, nicht den Standort.",
      },
      {
        q: "Wie hoch ist das Altpörtel und wie viele Stufen hat es?",
        a: "Das Altpörtel ist 55 Meter hoch und gehört damit zu den höchsten erhaltenen Stadttoren Deutschlands. Zur Aussichtsplattform führen 154 Stufen.",
      },
      {
        q: "Wann kann man das Altpörtel besteigen?",
        a: "Von April bis Oktober dienstags bis sonntags, jeweils von 10 bis 12 Uhr und von 14 bis 17 Uhr. Von November bis März bleibt der Aufstieg für Einzelbesucher geschlossen, gebuchte Führungen sind ganzjährig möglich.",
      },
    ],
    rank: 5,
    visitDuration: "30 Min.",
    rankReason:
      "55 Meter hohes Stadttor mit Aussichtsplattform und dem Blick die Maximilianstraße hinunter auf den Dom.",
    imageHue: 1,
    coordinates: [49.3186, 8.4359],
    openingHours: "April-Okt: Di-So 10:00-12:00, 14:00-17:00",
  },
  {
    slug: "maximilianstrasse",
    imageKey: "sight:maximilianstrasse",
    name: "Maximilianstraße",
    categories: ["wahrzeichen", "shopping"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Die 600 Meter lange Flaniermeile vom Altpörtel bis zum Dom. Speyers Lebensader seit dem Mittelalter.",
    longDesc:
      "Die Maximilianstraße ist seit dem Mittelalter Speyers zentrale Achse. Sie war Kaiserstraße der Reichstage und Krönungszug-Route, heute ist sie Fußgängerzone mit Cafés, Geschäften, Eis-Cafés und dem Rathaus. Wer am Altpörtel startet und gerade auf den Dom zugeht, läuft buchstäblich 2000 Jahre Stadtgeschichte ab.",
    seoTitle: "Maximilianstraße Speyer: Fußgängerzone zwischen Altpörtel und Dom",
    seoDescription:
      "Die Maximilianstraße in Speyer: 600 Meter Fußgängerzone vom Altpörtel bis zum Kaiserdom, mit Geschäften, Gastronomie, Anfahrt und Parken.",
    faq: [
      {
        q: "Wie lang ist die Maximilianstraße in Speyer?",
        a: "Rund 600 Meter, vom Altpörtel im Westen bis zum Domplatz im Osten. Ohne Stopps läuft man die Strecke in etwa zehn Minuten, mit Bummel und Pause sind zwei bis drei Stunden realistisch.",
      },
      {
        q: "Ist die Maximilianstraße eine Fußgängerzone?",
        a: "Ja, sie ist auf voller Länge autofrei und barrierearm. Sie ist zugleich die Einkaufsachse der Stadt mit Filialisten, inhabergeführten Geschäften, Bäckereien, Cafés und Eisdielen.",
      },
      {
        q: "Wo parkt man an der Maximilianstraße?",
        a: "Am nächsten liegen das Parkhaus Zentrum in der Heydenreichstraße und die Tiefgarage Postgalerie, beide wenige Schritte abseits der Achse. Günstiger sind Festplatz und Naturfreundehaus in Tarifzone D mit gebührenfreier erster Stunde.",
      },
    ],
    rank: 6,
    visitDuration: "45 bis 60 Min.",
    rankReason:
      "Die Achse der Altstadt zwischen Altpörtel und Dom, zugleich die Einkaufs- und Caféstraße der Stadt.",
    imageHue: 1,
    coordinates: [49.3179, 8.4393],
  },
  {
    slug: "judenhof",
    gygActivityId: "453478",
    imageKey: "sight:judenhof",
    name: "Judenhof mit Mikwe",
    categories: ["juedisches-erbe", "unesco-welterbe", "mittelalter", "museen"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: 4,
    shortDesc:
      "UNESCO-Welterbe SchUM seit 2021. Mittelalterlicher jüdischer Sakralbezirk mit Mikwe von 1128 - eines der ältesten erhaltenen Ritualbäder Europas.",
    longDesc:
      'Der Judenhof in der Kleinen Pfaffengasse umfasst die Reste der mittelalterlichen Synagoge, die Frauenschul und die berühmte Mikwe - ein um 1128 angelegtes jüdisches Ritualbad, das tief in den Grundwasserspiegel hinabreicht. Speyer war im Mittelalter Teil des SchUM-Bunds (Schpira-Warmaisa-Magenza, also Speyer-Worms-Mainz). Seit 2021 zählen die Speyerer Stätten zum UNESCO-Welterbe "Die SchUM-Stätten". Im Museum SchPIRA daneben sind Funde aus der mittelalterlichen jüdischen Gemeinde ausgestellt.',
    rank: 4,
    visitDuration: "30 bis 45 Min.",
    rankReason:
      "Älteste erhaltene Mikwe Mitteleuropas, seit 2021 als SchUM-Stätte ebenfalls UNESCO-Welterbe.",
    imageHue: 4,
    coordinates: [49.3164, 8.4412],
    openingHours: "Di-So 10:00-17:00 · Mo geschlossen",
    websiteUrl: "https://museum.speyer.de/judenhof",
  },
  {
    slug: "historisches-museum-der-pfalz",
    imageKey: "sight:historisches-museum-der-pfalz",
    name: "Historisches Museum der Pfalz",
    categories: ["museen", "mittelalter"],
    district: "altstadt",
    type: "Museum",
    priceFrom: 8,
    shortDesc:
      "Direkt am Domplatz. Goldener Hut, Pfälzischer Wein-Schatz, große Sonderausstellungen zu Antike und Mittelalter.",
    longDesc:
      'Das Historische Museum der Pfalz am Domplatz zählt zu den bedeutendsten kulturhistorischen Museen Deutschlands. Highlights der Dauerausstellung sind der bronzezeitliche "Goldene Hut von Schifferstadt", die ältesten Weinflaschen der Welt (Pfälzischer Wein-Schatz, 4. Jh.) und die Domschatz-Sammlung. Die großen Sonderausstellungen - zuletzt etwa zu den Wikingern, den Habsburgern oder Richard Löwenherz - sind überregional Programm.',
    rank: 3,
    visitDuration: "2 bis 3 Std.",
    rankReason:
      "Goldener Hut, Pfälzischer Wein-Schatz und die großen Sonderausstellungen direkt am Domplatz.",
    imageHue: 4,
    coordinates: [49.3170, 8.4422],
    openingHours: "Di-So 10:00-18:00 · Mo geschlossen",
    websiteUrl: "https://museum.speyer.de",
  },
  {
    slug: "technik-museum",
    gygActivityId: "433020",
    imageKey: "sight:technik-museum",
    name: "Technik Museum Speyer",
    categories: ["museen", "familie"],
    district: "west",
    type: "Museum",
    priceFrom: 18,
    shortDesc:
      "Eines der größten Technikmuseen Europas. Lufthansa-Jumbo, U-Boot U9, russische Buran-Raumfähre, IMAX-Dome.",
    longDesc:
      "Das Technik Museum Speyer ist ein Publikumsmagnet weit über die Region hinaus. Eine Lufthansa-Boeing 747 lässt sich begehen, ebenso das U-Boot U9. Highlight ist die sowjetische Raumfähre Buran in der Raumfahrt-Halle - das einzige Exemplar außerhalb Russlands. Dazu Oldtimer, Lokomotiven, Flugzeuge, ein IMAX-Dome-Kino und ein gemeinsames Kombiticket mit dem Schwester-Museum in Sinsheim.",
    rank: 2,
    visitDuration: "3 bis 4 Std.",
    rankReason:
      "Begehbare Boeing 747, U-Boot und Raumfahrthalle. Das Ziel, für das Familien eine eigene Anreise planen.",
    imageHue: 2,
    coordinates: [49.3036, 8.4477],
    openingHours: "Täglich 9:00-18:00",
    websiteUrl: "https://speyer.technik-museum.de",
  },
  {
    slug: "dreifaltigkeitskirche",
    gygActivityId: "453478",
    imageKey: "sight:dreifaltigkeitskirche",
    name: "Dreifaltigkeitskirche",
    categories: ["kirchen", "barock"],
    district: "altstadt",
    type: "Kirche",
    priceFrom: null,
    shortDesc:
      "Barocke evangelische Hofkirche von 1717. Reich bemaltes Holzgewölbe, eine der schönsten Barockkirchen der Pfalz.",
    longDesc:
      "Die Dreifaltigkeitskirche wurde 1701-1717 als evangelische Hauptkirche nach der französischen Zerstörung Speyers errichtet. Bemerkenswert ist das vollständig in Holz ausgeführte Tonnengewölbe mit ausführlichen Bibel-Bildprogrammen, dazu die hölzernen Emporen und die barocke Stuckdecke. Sie gilt neben der Heidelberger Heiliggeistkirche als wichtigste protestantische Barockkirche der Pfalz.",
    rank: 8,
    visitDuration: "20 bis 30 Min.",
    rankReason:
      "Barocke Predigtkirche mit vollständig erhaltener Holzausstattung und bemalten Emporen.",
    imageHue: 1,
    coordinates: [49.3179, 8.4399],
    openingHours: "April-Okt: Mo-Sa 10:00-17:00, So 11:30-17:00",
  },
  {
    slug: "gedaechtniskirche",
    imageKey: "sight:gedaechtniskirche",
    name: "Gedächtniskirche der Protestation",
    categories: ["kirchen"],
    district: "altstadt",
    type: "Kirche",
    priceFrom: null,
    shortDesc:
      "Neugotische Kirche von 1904. Erinnert an die Protestation der evangelischen Stände vor dem Reichstag zu Speyer 1529.",
    longDesc:
      'Die Gedächtniskirche wurde 1893-1904 erbaut, um an die "Speyerer Protestation" von 1529 zu erinnern - die Geburtsstunde des Begriffs "Protestanten". Der neugotische Bau mit 100 Meter hohem Turm ist Speyers höchste Kirche nach dem Dom und liegt eine Minute vom Altpörtel entfernt. Glasfenster und Reliefs erzählen die Reformationsgeschichte.',
    imageHue: 1,
    coordinates: [49.3203, 8.4361],
    openingHours: "April-Okt: täglich 10:00-18:00",
  },
  {
    slug: "alte-muenze",
    imageKey: "sight:alte-muenze",
    name: "Alte Münze",
    categories: ["mittelalter"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Mittelalterliches Münzprägehaus in der Korngasse. Eines der wenigen Speyerer Bauten, die die Stadtzerstörung 1689 überstanden.",
    longDesc:
      "Die Alte Münze in der Korngasse stammt aus dem 14. Jahrhundert und gehört zu den wenigen Gebäuden, die die Verwüstung Speyers durch französische Truppen 1689 nahezu unbeschadet überstanden. Hier wurden im Mittelalter Speyerer Münzen geprägt, später diente das Gebäude als Wohnhaus. Heute Privatbesitz, aber von außen ein eindrucksvolles Zeugnis spätmittelalterlicher Bürgerbauten.",
    imageHue: 4,
    coordinates: [49.3171, 8.4395],
  },
  {
    slug: "rathaus",
    imageKey: "sight:rathaus",
    name: "Stadthaus / Rathaus",
    categories: ["wahrzeichen", "barock"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Barockes Rathaus an der Maximilianstraße. Erbaut 1712-1726 nach der Stadtzerstörung von 1689.",
    longDesc:
      "Das Speyerer Rathaus an der Maximilianstraße wurde 1712-1726 nach Plänen von Johann Adam Breunig errichtet, nachdem die ursprüngliche Stadt 1689 im Pfälzischen Erbfolgekrieg durch französische Truppen niedergebrannt worden war. Der barocke Bau mit dem charakteristischen Mansarddach prägt das Stadtbild und ist bis heute Sitz der Verwaltung und Tagungsort des Stadtrats.",
    imageHue: 4,
    coordinates: [49.3175, 8.4391],
  },
  {
    slug: "adenauerpark",
    imageKey: "sight:adenauerpark",
    name: "Adenauerpark & Mittelalterliche Stadtmauer",
    categories: ["parks", "mittelalter"],
    district: "altstadt",
    type: "Park",
    priceFrom: null,
    shortDesc:
      "Stadtpark am westlichen Altstadtrand mit dem längsten erhaltenen Teil der mittelalterlichen Stadtmauer.",
    longDesc:
      "Der Adenauerpark zieht sich entlang des längsten erhaltenen Abschnitts der mittelalterlichen Speyerer Stadtbefestigung. Wo einst Wehrgang und Verteidigungstürme die Bürger schützten, läuft heute ein schattiger Spazierweg. Spielplatz, Liegewiesen und vereinzelte Wehrtürme machen den Park zu einer ruhigen Pause vom Altstadt-Trubel.",
    rank: 10,
    visitDuration: "30 bis 45 Min.",
    rankReason:
      "Längster erhaltener Abschnitt der mittelalterlichen Stadtbefestigung, als schattiger Spazierweg angelegt.",
    imageHue: 3,
    coordinates: [49.3196, 8.4378],
  },
  {
    slug: "rheinstrand",
    name: "Rheinstrand Speyer",
    seoTitle: "Rheinstrand Speyer: Strandbar am Rhein, Anfahrt und Parken",
    seoDescription:
      "Rheinstrand Speyer: Strandbar am südlichen Ende der Rheinpromenade hinter dem Bademaxx, mit Liegestühlen und Hängematten. Dazu der Biergarten Alter Hammer, Anfahrt und Parken.",
    categories: ["parks", "familie"],
    district: "rheinhafen",
    type: "Freizeit",
    priceFrom: null,
    shortDesc:
      "Strandbar am südlichen Ende der Speyerer Rheinpromenade: über 1.500 Quadratmeter mit Liegestühlen, Hängematten und Blick auf die Rheinschifffahrt.",
    longDesc:
      "Der Rheinstrand Speyer ist die Strandbar am südlichen Ende der Uferpromenade, hinter dem Freizeitbad Bademaxx. Auf über 1.500 Quadratmetern stehen Liegestühle, Hängematten und Loungegruppen direkt am Wasser. Ein paar hundert Meter flussaufwärts liegt mit dem Alter Hammer der älteste Biergarten der Stadt. Beides zusammen macht das Speyerer Rheinufer zum wichtigsten Sommer-Ausflugsziel neben der Altstadt.",
    rank: 9,
    visitDuration: "2 bis 3 Std.",
    rankReason:
      "Strandbar am südlichen Ende der Uferpromenade, im Sommer das Gegenprogramm zur Altstadt.",
    imageHue: 5,
    coordinates: [49.3138, 8.4537],
    openingHours: "In der Saison täglich ab 12 Uhr",
    websiteUrl: "https://www.rheinstrand-speyer.de/",
    stand: "August 2026",
    quelle: {
      label: "Betreiberangaben rheinstrand-speyer.de und alter-hammer.de",
      url: "https://www.rheinstrand-speyer.de/",
    },
    faq: [
      {
        q: "Wo ist der Rheinstrand in Speyer?",
        a: "Am südlichen Ende der Speyerer Uferpromenade, hinter dem Freizeitbad Bademaxx, Adresse Am Neuen Rheinhafen 1. Von der Altstadt sind es rund 25 Minuten zu Fuß über die Rheinpromenade, mit dem Rad etwa zehn.",
      },
      {
        q: "Wann hat der Rheinstrand Speyer geöffnet?",
        a: "Der Betreiber nennt für die Saison täglich ab 12 Uhr. Die Strandbar ist ein Sommerbetrieb und stark wetterabhängig, deshalb vor der Anfahrt kurz die Seite des Betreibers prüfen (Stand August 2026).",
      },
      {
        q: "Kann man am Rheinstrand Speyer baden?",
        a: "Der Rheinstrand ist eine Strandbar, kein bewachtes Freibad. Das Baden im Rhein ist wegen Strömung, Sog und Berufsschifffahrt gefährlich und in weiten Abschnitten verboten. Zum Schwimmen ist das direkt benachbarte Bademaxx die sichere Alternative.",
      },
      {
        q: "Was ist der Unterschied zwischen Rheinstrand und Alter Hammer?",
        a: "Der Rheinstrand ist eine Strandbar mit Liegestühlen, Hängematten und Barbetrieb. Der Alter Hammer an der Adresse Leinpfad 1c ist ein klassischer Biergarten mit Restaurant und warmer Küche, der seit 1919 besteht und täglich ab 11 Uhr öffnet.",
      },
      {
        q: "Wo parkt man am Rheinstrand Speyer?",
        a: "Direkt daneben liegt der gebührenfreie Parkplatz am Bademaxx (P9). Er ist der einzige kostenlose Parkplatz in Speyer und an heißen Sommertagen entsprechend früh voll. Ausweichfläche ist der große Parkplatz am Technik Museum.",
      },
    ],
  },
  {
    slug: "fischertor",
    imageKey: "sight:fischertor",
    name: "Fischertor",
    categories: ["mittelalter"],
    district: "altstadt",
    type: "Wahrzeichen",
    priceFrom: null,
    shortDesc:
      "Das letzte erhaltene Rheintor der mittelalterlichen Stadtmauer. Tor zum Fischerquartier und zum Fluss.",
    longDesc:
      "Das Fischertor war eines von mehreren Rheintoren der mittelalterlichen Stadtbefestigung. Heute ist es das einzige erhaltene. Es markiert den Übergang vom Domquartier zum ehemaligen Hasenpfuhl, dem alten Fischerviertel direkt am Rhein. Schlichter Wehrbau, romanische Linien - und ein guter Anlaufpunkt für einen Rhein-Spaziergang.",
    imageHue: 4,
    coordinates: [49.3158, 8.4453],
  },
  {
    slug: "kloster-st-magdalena",
    imageKey: "sight:kloster-st-magdalena",
    name: "Kloster St. Magdalena",
    categories: ["kirchen", "barock"],
    district: "suedwest",
    type: "Kirche",
    priceFrom: null,
    shortDesc:
      "Barockes Karmelitinnen-Kloster im Edith-Stein-Viertel. Wirkungsstätte der Philosophin und Heiligen Edith Stein 1923-1931.",
    longDesc:
      "Das Karmelitinnen-Kloster St. Magdalena südwestlich der Altstadt ist eine Anlage des 18. Jahrhunderts mit barocker Klosterkirche. Berühmt wurde es durch Edith Stein, die hier von 1923 bis 1931 als Lehrerin am angeschlossenen Lyzeum unterrichtete, ehe sie selbst Karmelitin wurde. Edith-Stein-Gedenkstätte und Klosterladen sind öffentlich, der Klausurbereich nicht.",
    imageHue: 5,
    coordinates: [49.3138, 8.4258],
    websiteUrl: "https://www.st-magdalena-speyer.de",
  },
  {
    slug: "sea-life",
    gygActivityId: "40356",
    // Keine freilizenzierte Außenaufnahme auf Commons (nur MS Sea Life Schiff) — HueGradient-Placeholder.
    name: "Sea Life Speyer",
    categories: ["familie"],
    district: "altstadt",
    type: "Museum",
    priceFrom: 19,
    shortDesc:
      "Aquarium am Hafenbecken mit ~30 Becken: Rhein-Fische, Hochsee-Hai-Tunnel, Seepferdchen-Zuchtstation.",
    longDesc:
      "Das Sea Life Speyer liegt am alten Hafenbecken zwischen Altstadt und Rhein. Schwerpunkt ist die Reise vom Quellbach über Rhein und Nordsee bis ins offene Meer. Der Glas-Tunnel mit Haien und Rochen ist Familien-Magnet, die Seepferdchen-Zuchtstation ein internationaler Forschungsschwerpunkt.",
    rank: 7,
    visitDuration: "2 Std.",
    rankReason:
      "Großes Aquarium mitten in der Altstadt, das zweite Schlechtwetter-Ziel für Familien neben dem Technik Museum.",
    imageHue: 2,
    coordinates: [49.3219, 8.4490],
    openingHours: "Täglich 10:00-17:00 (Sommer bis 18:00)",
    websiteUrl: "https://www.visitsealife.com/speyer",
  },
  {
    slug: "pfaelzische-landesbibliothek",
    imageKey: "sight:pfaelzische-landesbibliothek",
    name: "Pfälzische Landesbibliothek",
    categories: ["museen"],
    district: "altstadt",
    type: "Museum",
    priceFrom: null,
    shortDesc:
      "Wissenschaftliche Landesbibliothek mit Pfalz-Schwerpunkt. Lesesaal in moderner Architektur, kostenfrei zugänglich.",
    longDesc:
      "Die Pfälzische Landesbibliothek ist die wissenschaftliche Regionalbibliothek der Pfalz. Schwerpunkte sind pfälzische Landesgeschichte, Reformation und Wein. Der moderne Neubau an der Otto-Mayer-Straße ist tagsüber öffentlich zugänglich - auch wenn man keine Recherche betreibt, lohnt sich der Lesesaal als ruhiger Anlaufpunkt.",
    imageHue: 4,
    coordinates: [49.3201, 8.4356],
    openingHours: "Mo-Fr 9:00-19:00, Sa 9:00-13:00",
    websiteUrl: "https://www.lbz.rlp.de/standorte/pfaelzische-landesbibliothek-speyer/",
  },
];

export const getSight = (slug: string) => sights.find((s) => s.slug === slug);
export const sightsByDistrict = (district: string) =>
  sights.filter((s) => s.district === district);
export const sightsByCategory = (slug: string) =>
  sights.filter((s) => s.categories.includes(slug));
