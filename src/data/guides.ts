/**
 * Reiseplaner-Guides
 * --------------------
 * Long-Form-Content für SEO und Erstbesucher. Jeder Guide ist als
 * Day-by-Day-Plan strukturiert. Slots referenzieren bestehende
 * Sight/Restaurant/Hotel-Slugs, statt Inhalte zu duplizieren.
 *
 * Schema.org: Article + ItemList pro Tag.
 */

export type SlotType = "morgens" | "mittagessen" | "nachmittag" | "abendessen" | "abends" | "uebernachten";

export type GuideSlot = {
  time: string;             // freier Text z.B. "9:00 – 11:30"
  type: SlotType;
  title: string;
  description: string;
  sightSlug?: string;
  restaurantSlug?: string;
  hotelSlug?: string;
  districtSlug?: string;
  tip?: string;
};

export type GuideDay = {
  number: number;
  title: string;
  intro: string;
  slots: GuideSlot[];
};

export type Guide = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  duration: number;
  audience: string;
  bestSeason?: string;
  imageKey?: string;
  imageHue: number;
  days: GuideDay[];
};

export const guides: Guide[] = [
  {
    slug: "2-tage-speyer",
    title: "2 Tage in Speyer",
    shortDesc:
      "Der perfekte Wochenend-Trip: Kaiserdom, Maximilianstraße, Judenhof, Technik Museum und ein Schoppe in der Pfälzer Weinstube.",
    lead: "Zwei Tage reichen, um Speyers Schichten zu erkennen - Römer, Salier, Mittelalter, Reformation, Barock, Moderne. Dieser Plan kombiniert die UNESCO-Highlights (Kaiserdom, SchUM-Judenhof) mit dem Technik Museum als zweitem Tagesthema und endet jeweils in einer Pfälzer Weinstube. Kurze Wege, weil Speyer kompakt ist.",
    duration: 2,
    audience: "Erstbesucher",
    bestSeason: "April bis Oktober (Altpörtel-Aussicht und Adenauerpark draußen lohnen sich)",
    imageKey: "sight:kaiserdom",
    imageHue: 1,
    days: [
      {
        number: 1,
        title: "Tag 1 - UNESCO-Welterbe und Altstadt",
        intro: "Der erste Tag gehört dem Dom und der Maximilianstraße. Wir starten am Altpörtel, laufen die Achse zum Dom und tauchen am Nachmittag in das mittelalterliche jüdische Speyer ein.",
        slots: [
          {
            time: "9:30 – 10:30",
            type: "morgens",
            title: "Aufstieg aufs Altpörtel",
            description:
              "Start am Bahnhof oder am Altpörtel-Platz. Aufstieg auf das 55-Meter-Tor, von oben hat man die Maximilianstraße geradlinig auf den Dom zu - die erste richtige Einordnung der Stadt.",
            sightSlug: "altpoertel",
            tip: "Im April-Oktober Di-So 10-17 Uhr geöffnet. Eintritt unter 2 €. Festes Schuhwerk.",
          },
          {
            time: "10:30 – 12:00",
            type: "morgens",
            title: "Maximilianstraße zum Dom",
            description:
              "600 Meter alte Reichsstraße - heute Fußgängerzone mit Cafés, Confiserien, Rathaus, Eisdielen. Wer Zeit hat, geht in die Dreifaltigkeitskirche rechts ab: hölzernes Tonnengewölbe von 1717.",
            sightSlug: "maximilianstrasse",
          },
          {
            time: "12:00 – 14:00",
            type: "mittagessen",
            title: "Mittag im Domhof",
            description:
              "Direkt am Dom: Hausbrauerei mit Innenhof-Biergarten. Saumagen, Leberknödel oder Schweinshaxe, dazu Domhof-Bräu vom Fass. Klassischer als hier geht's nicht.",
            restaurantSlug: "domhof-hausbrauerei",
            tip: "Im Sommer Biergarten, im Winter Gewölbekeller. Reservierung am Wochenende sinnvoll.",
          },
          {
            time: "14:00 – 16:30",
            type: "nachmittag",
            title: "Kaiserdom: Innenraum, Krypta, Turm",
            description:
              "Innenraum ruhig durchgehen, Krypta nicht auslassen (größte Hallenkrypta der Romanik, Grablege von acht Kaisern und Königen). Im Sommer Turmaufstieg auf den Südwestturm mit Blick über den Rhein bis in den Pfälzerwald.",
            sightSlug: "kaiserdom",
            tip: "Krypta-Zugang über separates Treppenhaus, Eintritt frei. Turmaufstieg kostenpflichtig, nur April-Oktober.",
          },
          {
            time: "16:30 – 18:00",
            type: "nachmittag",
            title: "Judenhof und Museum SchPIRA",
            description:
              "Eine Minute vom Dom in die Kleine Pfaffengasse: Reste der mittelalterlichen Synagoge, Frauenschul und die Mikwe von 1128 - eines der ältesten erhaltenen jüdischen Ritualbäder Europas. Seit 2021 UNESCO-Welterbe.",
            sightSlug: "judenhof",
            districtSlug: "altstadt",
          },
          {
            time: "19:00 – 22:00",
            type: "abendessen",
            title: "Abendessen Zum alten Engel",
            description:
              "Im historischen Gewölbekeller an der Mühlturmstraße. Pfälzer Karte (Saumagen, Bratwurst, Leberknödel), Weinkarte mit über 60 Pfälzer Tropfen, dazu das Klima eines 300 Jahre alten Hauses.",
            restaurantSlug: "zum-alten-engel",
            tip: "Reservierung am Abend Pflicht.",
          },
          {
            time: "22:30",
            type: "uebernachten",
            title: "Übernachten im Hotel Goldener Engel",
            description:
              "Vier-Sterne-Stadthotel an der Mühlturmstraße, in 5 Minuten am Dom. Eigene Tiefgarage - in der Altstadt selten und Gold wert.",
            hotelSlug: "hotel-goldener-engel",
          },
        ],
      },
      {
        number: 2,
        title: "Tag 2 - Technik, Park, Rhein",
        intro: "Der zweite Tag bringt eine andere Welt: das Technik Museum am Stadtrand und einen ruhigen Nachmittag im Adenauerpark plus Hafen.",
        slots: [
          {
            time: "9:30 – 13:00",
            type: "morgens",
            title: "Technik Museum Speyer",
            description:
              "Begehbare Lufthansa-Boeing 747, U-Boot U9, die sowjetische Raumfähre Buran. Eines der größten technischen Museen Europas, für Familien und Technikfans gleichermaßen. Mindestens 3 Stunden einplanen.",
            sightSlug: "technik-museum",
            tip: "Kombi-Ticket mit Schwestermuseum Sinsheim lohnt sich nur, wenn man auch dort hin will. IMAX-Dome extra.",
          },
          {
            time: "13:00 – 14:30",
            type: "mittagessen",
            title: "Mittag im Hotel-Restaurant am Technik Museum",
            description:
              "Direkt am Museumsausgang, gutbürgerlich-pfälzische Karte, große Portionen für Familien. Unspektakulär, aber praktisch.",
            hotelSlug: "hotel-speyer-am-technik-museum",
          },
          {
            time: "15:00 – 16:30",
            type: "nachmittag",
            title: "Adenauerpark und Stadtmauer",
            description:
              "Mit Bus oder zu Fuß (20 min) zurück Richtung Altstadt, am westlichen Stadtrand entlang die mittelalterliche Stadtmauer abgehen. Wehrtürme, Spielplatz, Liegewiesen - ruhige Pause nach dem Technik-Trubel.",
            sightSlug: "adenauerpark",
          },
          {
            time: "16:45 – 17:30",
            type: "nachmittag",
            title: "Historisches Museum der Pfalz",
            description:
              "Wenn die Energie reicht: am Domplatz das Historische Museum mit dem Goldenen Hut (Bronzezeit), den ältesten Weinflaschen der Welt (4. Jh.) und dem Domschatz. Die Sonderausstellungen lohnen den separaten Besuch.",
            sightSlug: "historisches-museum-der-pfalz",
            tip: "Letzter Einlass meist eine Stunde vor Schließung - vorher Online-Plan checken.",
          },
          {
            time: "18:00 – 21:30",
            type: "abendessen",
            title: "Abendessen am Rhein im Rheinblick",
            description:
              "Zum Abschluss runter an den Rhein, ins Rheinhafen-Quartier. Frischer Zander, Sonnenuntergang über dem Wasser, eine letzte Flasche Pfälzer Wein.",
            restaurantSlug: "rheinblick-speyer",
            tip: "Terrassen-Plätze nur mit Reservierung im Sommer.",
          },
        ],
      },
    ],
  },
  {
    slug: "speyer-mit-kindern",
    title: "Speyer mit Kindern",
    shortDesc:
      "Familien-Tagesplan: Technik Museum, Sea Life, Adenauerpark - Speyer ohne Quengel-Faktor.",
    lead: "Speyer ist überraschend familien-geeignet, wenn man die richtige Reihenfolge nimmt. Technik Museum (begehbare Flugzeuge, U-Boot), Sea Life mit Hai-Tunnel, Eis-Pause auf der Maximilianstraße, abends Adenauerpark zum Auslaufen. Dieser Plan funktioniert ganzjährig.",
    duration: 1,
    audience: "Familien",
    bestSeason: "ganzjährig",
    imageKey: "sight:technik-museum",
    imageHue: 2,
    days: [
      {
        number: 1,
        title: "Ein Tag, drei Highlights",
        intro: "Wir machen einen Bogen: Vormittag Technik Museum, Mittag in der Altstadt, Nachmittag Sea Life, Abend Adenauerpark.",
        slots: [
          {
            time: "9:30 – 12:30",
            type: "morgens",
            title: "Technik Museum Speyer",
            description:
              "Direkter Einstieg in das größte Familien-Highlight: Boeing 747 begehen, U-Boot U9 erklettern, im Cockpit alter Lokomotiven sitzen. Drei Stunden vergehen schnell.",
            sightSlug: "technik-museum",
            tip: "Kinderwagen am Eingang oder Buggy-tauglich? Wege sind asphaltiert. IMAX-Dome zusätzlich buchbar - bei größeren Kindern lohnt der 30-Minuten-Film.",
          },
          {
            time: "13:00 – 14:30",
            type: "mittagessen",
            title: "Mittag im Café Specht",
            description:
              "Familienfreundlich, große Portionen, hausgemachte Kuchen für die Nachspeise. Kein Kinder-Schnickschnack, aber unaufgeregt und freundlich.",
            restaurantSlug: "cafe-specht",
          },
          {
            time: "14:45 – 16:45",
            type: "nachmittag",
            title: "Sea Life Speyer",
            description:
              "Aquarium am alten Hafenbecken. 30 Becken vom Quellbach bis zum offenen Meer, Glas-Tunnel mit Haien und Rochen, Seepferdchen-Zuchtstation.",
            sightSlug: "sea-life",
            tip: "Online-Tickets sind oft günstiger.",
          },
          {
            time: "17:00 – 18:30",
            type: "nachmittag",
            title: "Adenauerpark zum Auslaufen",
            description:
              'Spielplatz mit Klettergerüst, Wehrtürme der mittelalterlichen Stadtmauer als "Burg" zum Spielen, Liegewiesen für Picknick. Letzter Stopp vor dem Heimweg.',
            sightSlug: "adenauerpark",
          },
        ],
      },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
