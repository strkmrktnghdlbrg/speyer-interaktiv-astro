/**
 * GetYourGuide-Angebote pro Seite — recherchierte Platzierungs-Konfiguration.
 * ----------------------------------------------------------------------------
 * Zentrale Map: Seiten-/Entity-Key → GYG-Widget-Konfiguration.
 *
 * Statt auf jeder Seite Mode + Query + Copy hartzucodieren, liegt hier EINE
 * kuratierte Tabelle. <GetYourGuideWidget offerKey="..."> löst den Eintrag auf
 * und rendert nur dann ein Widget, wenn ein Eintrag existiert. Seiten ohne
 * passendes Touren-Angebot (z.B. reine Wohn-Stadtteile, Service-Ratgeber)
 * stehen bewusst NICHT in dieser Map und bekommen damit kein Widget.
 *
 * Key-Schema:
 *   category:<slug>   — Kategorie-Seite        (/kategorien/<slug>/)
 *   district:<slug>   — Stadtteil-Seite        (/stadtteile/<slug>/)
 *   fest:<slug>       — Fest-Seite             (/feste/<slug>/)
 *   article:<slug>    — Wissenswertes-Artikel  (/wissenswertes/<slug>/)
 *   page:<name>       — Index- & Landing-Page
 *
 * Die Inhalte (mode, q/cityQuery, Titel, Lead) wurden via Workflow gegen das
 * reale GetYourGuide-Inventar für Speyer & Umgebung recherchiert.
 */

export type GygOffer = {
  /** "city" = Top-Touren (data-gyg-q = cityQuery) · "activities" = themen-Query (data-gyg-q = q) */
  mode: "city" | "activities";
  /** Such-Query für mode="activities" */
  q?: string;
  /** Stadt-Query für mode="city" (i.d.R. "Speyer") */
  cityQuery?: string;
  /** Anzahl Items (Default 3, breite Listing-Seiten 4) */
  numberOfItems?: number;
  /** Titel über dem Widget */
  title: string;
  /** Ein-Satz-Lead unter dem Titel */
  lead: string;
};

export const gygOffers: Record<string, GygOffer> = {
  // === Kategorie-Seiten (/kategorien/<slug>/) ===
  "category:wahrzeichen": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Speyers Wahrzeichen erleben",
    lead: "Stadtführungen und Touren zu Dom, Altpörtel und Maximilianstraße – Speyers Wahrzeichen auf einen Streifzug.",
  },
  "category:unesco-welterbe": {
    mode: "activities",
    q: "Speyer Dom Altstadt",
    title: "UNESCO-Welterbe in Speyer",
    lead: "Führungen rund um Kaiserdom und SchUM-Stätten – das UNESCO-Welterbe in Speyer mit Guide entdecken.",
  },
  "category:museen": {
    mode: "activities",
    q: "Technik Museum Speyer",
    title: "Museen in Speyer",
    lead: "Tickets fürs Technik Museum und weitere Erlebnisse – Speyers Museen ohne Wartezeit besuchen.",
  },
  "category:kirchen": {
    mode: "activities",
    q: "Speyer Dom",
    title: "Kirchen in Speyer",
    lead: "Führungen rund um Kaiserdom, Dreifaltigkeitskirche und Gedächtniskirche – Speyers Sakralbauten erleben.",
  },
  "category:juedisches-erbe": {
    mode: "activities",
    q: "Speyer Dom Altstadt",
    title: "Jüdisches Erbe in Speyer",
    lead: "Rundgänge zu Judenhof, Mikwe und SchUM-Welterbe – das jüdische Erbe Speyers mit Guide entdecken.",
  },
  "category:mittelalter": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Mittelalter in Speyer",
    lead: "Touren zu Stadtmauer, Altpörtel und Salier-Erbe – das mittelalterliche Speyer auf Schritt und Tritt.",
  },
  "category:barock": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Barockes Speyer",
    lead: "Stadtführungen vorbei an Rathaus und Dreifaltigkeitskirche – das barocke Speyer mit kundigem Guide.",
  },
  "category:parks": {
    mode: "activities",
    q: "Speyer Rhein Schifffahrt",
    title: "Parks & Rhein in Speyer",
    lead: "Erlebnisse am Wasser rund um Speyer und den Rhein – Natur und Schifffahrt für entspannte Stunden.",
  },
  "category:familie": {
    mode: "activities",
    q: "SEA LIFE Speyer",
    title: "Familienausflüge in Speyer",
    lead: "Tickets für SEA LIFE, Technik Museum und mehr – Erlebnisse für die ganze Familie in Speyer.",
  },
  "category:shopping": {
    mode: "city",
    cityQuery: "Speyer",
    title: "Speyer entdecken",
    lead: "Bummeln auf der Maximilianstraße und mehr – die beliebtesten Touren & Tickets in Speyer auf einen Blick.",
  },

  // === Stadtteil-Seiten (/stadtteile/<slug>/) ===
  // Nur touristisch relevante Quartiere. Reine Wohngebiete (nord, west,
  // suedwest, edith-stein-viertel, erlach) stehen bewusst NICHT hier.
  "district:altstadt": {
    mode: "activities",
    q: "Speyer Stadtführung Altstadt",
    title: "Altstadt entdecken: Touren & Tickets",
    lead: "Erkunde Dom, Judenhof und Maximilianstraße bei geführten Stadtrundgängen durch die Speyerer Altstadt.",
  },
  "district:sued": {
    mode: "activities",
    q: "Technik Museum Speyer",
    title: "Speyer-Süd: Museum & Familienspaß",
    lead: "Technik Museum und SEA LIFE liegen im Süden – sichere dir vorab Tickets für die großen Attraktionen.",
  },
  "district:rheinhafen": {
    mode: "city",
    cityQuery: "Speyer",
    title: "Am Rhein: Erlebnisse in Speyer",
    lead: "Rund um Rhein und Hafen warten Touren und Tickets für deinen Ausflug in Speyer und Umgebung.",
  },

  // === Fest-Seiten (/feste/<slug>/) ===
  // GYG verkauft keine Fest-Tickets, aber Besucher buchen ergänzend Touren.
  "fest:weihnachtsmarkt": {
    mode: "city",
    cityQuery: "Speyer",
    title: "Erlebnisse rund um den Speyerer Weihnachtsmarkt",
    lead: "Du bist im Advent in Speyer? Entdecke Touren & Tickets rund um Dom und Altstadt fürs Drumherum.",
  },
  "fest:fastnacht": {
    mode: "city",
    cityQuery: "Speyer",
    title: "Touren & Tickets rund um die Speyerer Fastnacht",
    lead: "Wenn du zur Fastnacht in Speyer bist, lohnen sich Stadtführungen und Erlebnisse in der Domstadt.",
  },

  // === Wissenswertes-Artikel (/wissenswertes/<slug>/) ===
  // Nur Tourismus-/Geschichtsthemen. Service-Ratgeber (makler-beauftragen,
  // hochzeitsplanung) und Fachthemen (bim-speyer-zukunft) ohne Eintrag.
  "article:roemisches-speyer": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Auf römischen Spuren durch Speyer",
    lead: "Bei einer Stadtführung durch Speyer entdeckst du, wo die römische Vergangenheit der Domstadt bis heute sichtbar ist.",
  },
  "article:mittelalterliches-speyer": {
    mode: "activities",
    q: "Speyer Dom Altstadt",
    title: "Mittelalterliches Speyer hautnah",
    lead: "Eine Führung durch Dom und Altstadt zeigt dir, wie Speyer im Mittelalter zur bedeutenden Reichsstadt wurde.",
  },
  "article:reformation": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Speyer und die Reformation",
    lead: "Bei einem Rundgang durch die Altstadt erlebst du die Orte, an denen die Reformationsgeschichte Speyers geschrieben wurde.",
  },
  "article:dreissigjaehriger-krieg": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Speyer im Dreißigjährigen Krieg",
    lead: "Eine Stadtführung verbindet die bewegte Kriegsgeschichte mit den historischen Orten der Domstadt.",
  },
  "article:salier": {
    mode: "activities",
    q: "Speyer Dom",
    title: "Die Salier und der Kaiserdom",
    lead: "Bei einer Dom-Führung stehst du dort, wo die Salierkaiser in der größten romanischen Kirche Europas ruhen.",
  },
  "article:hexenverfolgung": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Hexenverfolgung in Speyer",
    lead: "Eine Stadtführung führt dich zu den Schauplätzen dieses dunklen Kapitels der Speyerer Geschichte.",
  },
  "article:baukunst": {
    mode: "activities",
    q: "Speyer Dom",
    title: "Speyers Baukunst entdecken",
    lead: "Eine Führung rund um den Kaiserdom zeigt dir die romanische Baukunst, die Speyer weltberühmt gemacht hat.",
  },
  "article:archaeologische-funde": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Archäologische Schätze aus Speyer",
    lead: "Bei einer Führung durch die Domstadt kommst du den archäologischen Funden aus Speyers Vergangenheit näher.",
  },
  "article:kulturerbe": {
    mode: "activities",
    q: "Speyer Dom Altstadt",
    title: "UNESCO-Kulturerbe in Speyer",
    lead: "Eine Führung zu Dom und jüdischem Erbe macht das Speyerer Welterbe lebendig erlebbar.",
  },
  "article:zeppelin-landung": {
    mode: "activities",
    q: "Technik Museum Speyer",
    title: "Luftfahrtgeschichte im Technik Museum",
    lead: "Im Technik Museum Speyer erlebst du Luftfahrt zum Anfassen – vom historischen Fluggerät bis zur Raumfahrt.",
  },
  "article:kriegsdenkmaeler": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Denkmäler und Erinnerung in Speyer",
    lead: "Eine Stadtführung verbindet die Mahnmale Speyers mit der Geschichte dahinter.",
  },
  "article:historische-gasthaeuser": {
    mode: "activities",
    q: "Speyer Dom Altstadt",
    title: "Historische Gasthäuser der Altstadt",
    lead: "Bei einem Altstadtrundgang entdeckst du die traditionsreichen Gasthäuser und Ecken der Domstadt.",
  },

  // === Index- & Landing-Seiten ===
  "page:sehenswuerdigkeiten": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Touren & Tickets für Speyers Sehenswürdigkeiten",
    lead: "Vom Kaiserdom bis zum Technik Museum: Sichere dir die beliebtesten Touren und Tickets rund um Speyers Highlights.",
  },
  "page:restaurants": {
    mode: "activities",
    q: "Pfalz Weinprobe",
    title: "Genießen rund um Speyer: Wein & Kulinarik",
    lead: "Nach dem Essen weiter genießen: Weinproben und kulinarische Erlebnisse in der Pfalz rund um Speyer.",
  },
  "page:reiseplaner": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Erlebnisse für deine Speyer-Reise",
    lead: "Plane deinen Besuch: die beliebtesten Touren und Tickets in Speyer und Umgebung auf einen Blick.",
  },
  "page:feste": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Zwischen den Festen: Touren & Tickets in Speyer",
    lead: "Wenn du für ein Fest in Speyer bist: Erlebnisse und Tickets für die Stadt und Umgebung.",
  },
  "page:kategorien": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Erlebnisse in Speyer entdecken",
    lead: "Stöbere durch die beliebtesten Touren und Tickets in Speyer und der Umgebung.",
  },
  "page:stadtteile": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Touren & Tickets in ganz Speyer",
    lead: "Quer durch die Domstadt: die beliebtesten Erlebnisse in Speyer und Umgebung.",
  },
  "page:wissenswertes": {
    mode: "activities",
    q: "Speyer Stadtführung",
    title: "Speyers Geschichte erleben: Stadtführungen",
    lead: "Vom Kaiserdom bis zum jüdischen Erbe: Stadtführungen, die Speyers Geschichte lebendig machen.",
  },
  "page:hotels": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Schon gebucht? Das kannst du in Speyer erleben",
    lead: "Passend zu deinem Hotel: die beliebtesten Touren und Tickets in Speyer und Umgebung.",
  },
  "page:top-10-hotels": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Dein Hotel steht – jetzt Speyer erleben",
    lead: "Mach mehr aus deinem Aufenthalt: beliebte Touren und Tickets rund um Speyer.",
  },
  "page:wellness-hotels": {
    mode: "activities",
    q: "Pfalz Weinprobe",
    title: "Auszeit verlängern: Wein & Genuss in der Pfalz",
    lead: "Zum Wellness-Wochenende dazu: entspannte Weinproben und Genuss-Erlebnisse in der Pfalz.",
  },
  "page:hotels-event": {
    mode: "city",
    cityQuery: "Speyer",
    numberOfItems: 4,
    title: "Schon in Speyer? Touren & Tickets für deinen Trip",
    lead: "Rund um dein Event: die beliebtesten Erlebnisse in Speyer und Umgebung.",
  },

  // === Sight-spezifische Activities-Queries (recherchiert via Workflow) ===
  // Sights mit direct-ticket nutzen gygActivityId in sights.ts (availability-Widget).
  // Hier nur die Sights mit Auto-Match-Query.
  "sight:altpoertel": {
    mode: "activities",
    q: "Speyer Altstadt Führung Altpörtel",
    title: "Stadtführungen am Altpörtel",
    lead: "Geführte Altstadt-Touren mit Stopp am höchsten Stadttor Deutschlands.",
  },
  "sight:maximilianstrasse": {
    mode: "activities",
    q: "Speyer Altstadt Stadtrundgang",
    title: "Speyerer Altstadt erkunden",
    lead: "Stadtrundgänge entlang der Maximilianstraße - Altpörtel zum Kaiserdom.",
  },
  "sight:historisches-museum-der-pfalz": {
    mode: "activities",
    q: "Speyer Altstadt Führung",
    title: "Stadtführungen mit Museumsbezug",
    lead: "Geführte Touren durch die Altstadt, Domplatz inklusive.",
  },
  "sight:gedaechtniskirche": {
    mode: "activities",
    q: "Speyer Altstadt Führung",
    title: "Stadtführungen rund um die Gedächtniskirche",
    lead: "Altstadt-Touren mit Halt bei der Erinnerung an die Speyerer Protestation 1529.",
  },
  "sight:alte-muenze": {
    mode: "activities",
    q: "Speyer Altstadt",
    title: "Altstadt-Touren mit der Alten Münze",
    lead: "Stadtführungen durch das historische Speyer, vorbei am mittelalterlichen Münzgebäude.",
  },
  "sight:rathaus": {
    mode: "activities",
    q: "Speyer Altstadt Rathaus Führung",
    title: "Stadtführungen mit Rathaus-Stopp",
    lead: "Altstadt-Touren entlang der Maximilianstraße, Speyerer Rathaus inklusive.",
  },
  "sight:adenauerpark": {
    mode: "activities",
    q: "Speyer Altstadt Stadtführung",
    title: "Stadtmauer & Adenauerpark entdecken",
    lead: "Altstadt-Touren mit Spaziergang entlang der mittelalterlichen Stadtbefestigung.",
  },
  "sight:fischertor": {
    mode: "activities",
    q: "Speyer Altstadt Führung",
    title: "Stadtführungen am Fischertor",
    lead: "Altstadt-Touren mit Halt am letzten erhaltenen Rheintor.",
  },
  "sight:kloster-st-magdalena": {
    mode: "activities",
    q: "Speyer Altstadt Führung Kloster",
    title: "Stadtführungen mit Kloster-Bezug",
    lead: "Altstadt-Touren, die das Kloster St. Magdalena tangieren.",
  },
  "sight:pfaelzische-landesbibliothek": {
    mode: "activities",
    q: "Speyer Altstadt Führung Kultur",
    title: "Kulturelle Stadtführungen",
    lead: "Altstadt-Touren mit Schwerpunkt auf Speyers kulturellem Erbe.",
  },
};

export const getGygOffer = (key: string): GygOffer | undefined => gygOffers[key];
