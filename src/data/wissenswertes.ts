/**
 * Wissenswertes — Speyer-spezifische Hintergrund-Artikel.
 * URL-Pfad: /wissenswertes/<slug>/
 *
 * Aus der alten WP-Site migriert (siehe speyer-wp-extracts.md im
 * Eltern-Verzeichnis für die Originaltexte). Volltext-Bodies liegen
 * in src/content/wissenswertes/<slug>.md oder werden iterativ in
 * src/pages/wissenswertes/[slug].astro nachgepflegt.
 */

export type WissenItem = {
  slug: string;
  title: string;
  /** Original-Slug der alten WP-URL (für interne Verweise + Migration) */
  legacyWpUrl?: string;
  /** 1-2 Sätze, ~140 Zeichen — Card-Teaser */
  shortDesc: string;
  /** Längerer Lead-Absatz für Detail-Page-Intro (3-5 Sätze) */
  lead: string;
  imageHue: number;
  imageKey?: string;
  categories: string[];
  /** Ungefähre Wortzahl im Volltext (für Lesezeit-Anzeige) */
  wordCount?: number;
  /** Datum der ursprünglichen Veröffentlichung, falls bekannt */
  publishedAt?: string;
};

export const wissenswertes: WissenItem[] = [
  {
    slug: "roemisches-speyer",
    title: "Römisches Speyer — die Anfänge am Rhein",
    legacyWpUrl: "https://speyer-interaktiv.de/roemisches-speyer/",
    shortDesc:
      "Vom Militärlager Noviomagus zur römischen Civitas: Speyers Anfänge als bedeutende Siedlung am Rhein.",
    lead: "Lange bevor die Salier den Dom bauten, war Speyer eine römische Siedlung. Noviomagus, später Civitas Nemetum, lag strategisch am Rhein und entwickelte sich vom Militärlager zur zivilen Stadt mit Handel und Verwaltung. Funde im Stadtgebiet zeugen bis heute von dieser Epoche.",
    imageHue: 5,
    categories: ["mittelalter"],
    wordCount: 1450,
  },
  {
    slug: "mittelalterliches-speyer",
    title: "Mittelalterliches Speyer — Reichsstadt der Kaiser",
    legacyWpUrl: "https://speyer-interaktiv.de/mittelalterliches-speyer/",
    shortDesc:
      "Salier, Reichstage, Hexenverfolgung: Speyer als eine der wichtigsten Städte des Heiligen Römischen Reichs.",
    lead: 'Im Mittelalter wurde Speyer Bischofssitz, Reichsstadt und Tagungsort bedeutender Reichstage. Hier wurde 1529 die Protestation der evangelischen Stände formuliert, die dem Protestantismus seinen Namen gab. Der Dom als Grablege der Kaiser machte Speyer zur "Caput Sedis" — dem Haupt des Reichs.',
    imageHue: 4,
    categories: ["mittelalter"],
    wordCount: 1380,
  },
  {
    slug: "reformation",
    title: "Speyer und das Zeitalter der Reformation",
    legacyWpUrl: "https://speyer-interaktiv.de/zeitalter-der-reformation/",
    shortDesc:
      "Reichstag 1526 und Protestation 1529: Wie Speyer dem Protestantismus seinen Namen gab.",
    lead: 'Auf dem Reichstag von 1529 protestierten sechs evangelische Fürsten und vierzehn Reichsstädte gegen die Beschlüsse der katholischen Mehrheit. Aus dieser "Speyerer Protestation" entstand der Begriff "Protestanten". Die Gedächtniskirche, fertiggestellt 1904, erinnert bis heute an das Ereignis.',
    imageHue: 4,
    categories: ["mittelalter"],
    wordCount: 1420,
  },
  {
    slug: "dreissigjaehriger-krieg",
    title: "Speyer im Dreißigjährigen Krieg",
    legacyWpUrl: "https://speyer-interaktiv.de/dreissigjaehrigen-krieg/",
    shortDesc:
      "Belagerungen, Konfessionskonflikt, Bevölkerungseinbruch: Speyer in der Katastrophe von 1618-1648.",
    lead: "Der Dreißigjährige Krieg traf Speyer mehrfach — durch Truppendurchzüge, Belagerungen und religiöse Spannungen. Bevölkerung und Wirtschaft brachen ein, die Stadt brauchte Jahrzehnte zur Erholung. Erst die zweite Katastrophe folgte: die fast vollständige Zerstörung 1689 durch französische Truppen.",
    imageHue: 5,
    categories: [],
    wordCount: 1340,
  },
  {
    slug: "salier",
    title: "Die Salier — Speyers Kaiserdynastie",
    legacyWpUrl: "https://speyer-interaktiv.de/die-salier/",
    shortDesc:
      "Konrad II., Heinrich III., Heinrich IV., Heinrich V.: Vier salische Kaiser, die Speyer und das Reich prägten.",
    lead: "Die Salier waren das herrschende Geschlecht des Heiligen Römischen Reichs zwischen 1024 und 1125. Konrad II. begann den Dombau, Heinrich IV. trug ihn zur Vollendung. Alle vier salischen Kaiser fanden ihre letzte Ruhestätte in der Krypta des Speyerer Doms — der bis heute als Symbol mittelalterlichen Kaisertums gilt.",
    imageHue: 1,
    categories: ["mittelalter"],
    wordCount: 1410,
  },
  {
    slug: "hexenverfolgung",
    title: "Die Hexenverfolgung in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/die-hexenverfolgung/",
    shortDesc:
      "Im 16. und 17. Jahrhundert wurden auch in Speyer Frauen wegen vermeintlicher Hexerei verurteilt und hingerichtet.",
    lead: "Die Hexenverfolgung der frühen Neuzeit erreichte auch Speyer. Vor allem im 16. und 17. Jahrhundert kam es zu Prozessen, in denen meist Frauen unter Folter Geständnisse abgelegt und anschließend hingerichtet wurden. Die Forschung hat in den letzten Jahrzehnten begonnen, die Schicksale aufzuarbeiten.",
    imageHue: 4,
    categories: [],
    wordCount: 1390,
  },
  {
    slug: "baukunst",
    title: "Die Baukunst Speyers",
    legacyWpUrl: "https://speyer-interaktiv.de/die-baukunst/",
    shortDesc:
      "Vom romanischen Dom über barocke Bürgerhäuser bis zur neugotischen Gedächtniskirche — 1000 Jahre Architektur.",
    lead: "Speyers Baugeschichte spannt einen Bogen von der hochromanischen Architektur des Doms über die barocke Wiederaufbau-Phase nach 1689 bis zur historistischen Gedächtniskirche und der Moderne am Rheinhafen. Wer durch die Stadt geht, liest Jahrhunderte ab.",
    imageHue: 1,
    categories: ["barock", "mittelalter"],
    wordCount: 1360,
  },
  {
    slug: "archaeologische-funde",
    title: "Archäologische Funde in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/archaeologische-funde/",
    shortDesc:
      "Vom jungsteinzeitlichen Skelett bis zum keltischen Fürstengrab: was die Erde unter Speyer alles freigibt.",
    lead: "Die Stadtarchäologie Speyer hat in den vergangenen Jahrzehnten beeindruckende Funde gemacht — von jungsteinzeitlichen Skeletten über römische Gräber bis zu mittelalterlichen Stadtbefestigungen. Das Archäologische Schaufenster zeigt einen Teil davon publikumsnah.",
    imageHue: 5,
    categories: ["museen"],
    wordCount: 1390,
  },
  {
    slug: "kulturerbe",
    title: "Speyers Kulturerbe — UNESCO und mehr",
    legacyWpUrl: "https://speyer-interaktiv.de/kulturerbe/",
    shortDesc:
      "Zweimal UNESCO: der Kaiserdom seit 1981, die SchUM-Stätten seit 2021 — und was beides für die Stadt bedeutet.",
    lead: "Speyer trägt gleich zwei UNESCO-Welterbe-Titel: den Kaiserdom seit 1981 und die SchUM-Stätten (Speyer-Worms-Mainz) seit 2021. Beide Auszeichnungen prägen das Selbstverständnis der Stadt und ziehen ein internationales Publikum an.",
    imageHue: 1,
    categories: ["unesco-welterbe"],
    wordCount: 1410,
  },
  {
    slug: "zeppelin-landung",
    title: "Die Landung des Grafen Zeppelin in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/die-landung-des-grafen-zeppelin/",
    shortDesc:
      "Ein historisches Ereignis der frühen Luftfahrt: Zeppelins Landung in Speyer und ihre Bedeutung für die Stadt.",
    lead: "Speyer war Schauplatz einer der frühen spektakulären Zeppelin-Landungen. Das Ereignis blieb der Stadt im Gedächtnis und passt heute thematisch zum nahegelegenen Technik Museum mit seinen historischen Luftfahrt-Exponaten.",
    imageHue: 2,
    categories: [],
    wordCount: 1330,
  },
  {
    slug: "kriegsdenkmaeler",
    title: "Kriegsdenkmäler in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/kriegsdenkmaeler/",
    shortDesc:
      "Wie sich Speyer an die Opfer der Kriege erinnert — und wie sich der Umgang mit Denkmälern über die Jahrzehnte verändert hat.",
    lead: "In Speyer erinnern mehrere Denkmäler an die Opfer der großen Kriege des 19. und 20. Jahrhunderts. Die Auswahl, Gestaltung und das Verständnis dieser Erinnerungsorte hat sich über die Generationen gewandelt — vom heroischen zum mahnenden Gestus.",
    imageHue: 4,
    categories: [],
    wordCount: 1380,
  },
  {
    slug: "historische-gasthaeuser",
    title: "Historische Gasthäuser in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/historische-gasthaeuser/",
    shortDesc:
      "Wo schon Kaiser und Bischöfe einkehrten: Speyers historische Gasthaus-Tradition und was davon erhalten ist.",
    lead: "Speyers Gasthäuser haben Jahrhunderte Geschichte. Manche der historischen Adressen existieren heute noch, andere sind verschwunden. Eine kleine Rundreise durch die kulinarische und gesellschaftliche Geschichte der Stadt.",
    imageHue: 5,
    categories: [],
    wordCount: 1380,
  },
  {
    slug: "bim-speyer-zukunft",
    title: "BIM — Building Information Modeling in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/bim-speyer-zukunft/",
    shortDesc:
      "Wie moderne 3D-Modellierung dabei hilft, historische Bauten zu erhalten und neue Quartiere zu planen.",
    lead: "Building Information Modeling (BIM) verändert das Bauen weltweit. In Speyer ist die Methode besonders spannend, weil sie das digitale Erfassen historischer Substanz mit der Planung moderner Erweiterungen verbindet — Brücke zwischen Welterbe und Zukunft.",
    imageHue: 2,
    categories: [],
    wordCount: 1450,
  },
  {
    slug: "makler-beauftragen",
    title: "Weshalb du einen Makler beauftragen solltest",
    legacyWpUrl: "https://speyer-interaktiv.de/weshalb-du-einen-makler-beauftragen-solltest/",
    shortDesc:
      "Ratgeber-Artikel zum Immobilienmarkt: Wann sich ein Makler in Speyer und der Pfalz lohnt.",
    lead: "Der Immobilienmarkt in Speyer ist überschaubarer als in Großstädten, aber genauso anspruchsvoll. Dieser Ratgeber-Artikel erklärt, wann der Gang zum Makler sinnvoll ist und worauf bei der Auswahl zu achten ist.",
    imageHue: 5,
    categories: [],
    wordCount: 570,
  },
  {
    slug: "hochzeitsplanung",
    title: "Hochzeitsplanung in Speyer",
    legacyWpUrl: "https://speyer-interaktiv.de/hochzeitsplanung/",
    shortDesc:
      "Wo man in Speyer heiraten kann, vom Dom bis zum Kloster — und was bei der Planung zu beachten ist.",
    lead: "Speyer ist als Hochzeitsstadt überraschend vielfältig — vom Dom über die Dreifaltigkeitskirche bis zur Klosterkapelle St. Magdalena gibt es atmosphärische Trauungsorte. Dieser Ratgeber führt durch die wichtigsten Optionen und Planungsschritte.",
    imageHue: 4,
    categories: [],
    wordCount: 620,
  },
];

export const getWissen = (slug: string) =>
  wissenswertes.find((w) => w.slug === slug);
