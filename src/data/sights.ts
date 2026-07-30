export type Sight = {
  slug: string;
  name: string;
  district: string;
  type: "Wahrzeichen" | "Museum" | "Kirche" | "Park" | "Markt" | "Modern" | "Aussicht";
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
    imageHue: 1,
    coordinates: [49.3173, 8.4427],
    openingHours: "April-Okt: Mo-Sa 9:00-19:00, So 11:30-17:30 · Nov-März: kürzer",
    websiteUrl: "https://www.dom-zu-speyer.de",
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
    imageHue: 3,
    coordinates: [49.3196, 8.4378],
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
