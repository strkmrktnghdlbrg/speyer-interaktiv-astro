/**
 * Event-Kalender für Stay22-getriggerte Landing-Pages.
 * ------------------------------------------------------
 * Jedes Event bekommt eine eigene SEO-Landing unter:
 *   /hotels-speyer-<slug>/
 *
 * Die Page ruft Stay22 mit dem konkreten checkin/checkout Zeitraum auf
 * → liefert ECHTE Preise für genau dieses Wochenende statt generischer
 * "ab €X"-Anker. Hoch konvertierend für saisonale Suchanfragen
 * ("Hotel Speyer Brezelfest 2026", "Hotel Speyer Weihnachtsmarkt").
 *
 * Datum-Strategie:
 *   - Termine im Quellcode pflegen (1x pro Jahr aktualisieren)
 *   - Cron-Rebuild alle 6h hält Preise frisch
 *   - Wenn checkin in der Vergangenheit liegt: Page versteckt sich
 *     (siehe isUpcoming() Helper)
 */

export interface CityEvent {
  /** URL-Slug für /hotels-speyer-<slug>/. */
  slug: string;
  /** SEO-Titel. */
  title: string;
  /** Kurze Beschreibung über dem Hotel-Grid. */
  intro: string;
  /** Eyebrow-Label über der Headline. */
  eyebrow: string;
  /** ISO-Date YYYY-MM-DD. */
  checkin: string;
  /** ISO-Date YYYY-MM-DD. */
  checkout: string;
  /** SEO Meta-Description (155 Zeichen). */
  description: string;
  /** Such-Adresse für Stay22-Geo-Lookup. */
  address: string;
  /** Optional: lat/lng wenn präziser als Adresse (z. B. Dom-Umgebung). */
  lat?: number;
  lng?: number;
  /** Radius in m wenn lat/lng gesetzt. */
  radius?: number;
  /** Max. Preis pro Nacht in EUR. */
  maxPricePerNight?: number;
  /** Limit für Hotel-Grid. Default 12. */
  limit?: number;
}

export const events: CityEvent[] = [
  {
    slug: "brezelfest",
    title: "Hotels in Speyer zum Brezelfest",
    eyebrow: "Brezelfest 2026",
    intro:
      "Das Speyerer Brezelfest ist das größte Heimat- und Volksfest der Pfalz und zieht jedes Jahr im Juli rund 600.000 Besucher in die Altstadt und auf die Festwiese am Rhein. Hotels in der Altstadt und am Rheinhafen sind die ganze Festwoche entsprechend gefragt.",
    description:
      "Hotels in Speyer zum Brezelfest 2026 — Live-Preise und Verfügbarkeit für die 2. Juliwoche. Direktbuchung via Booking.com.",
    checkin: "2026-07-09",
    checkout: "2026-07-13",
    address: "Speyer, Deutschland",
    lat: 49.3175,
    lng: 8.4413,
    radius: 3000,
    maxPricePerNight: 400,
    limit: 12,
  },
  {
    slug: "weihnachtsmarkt",
    title: "Hotels in Speyer zum Weihnachtsmarkt",
    eyebrow: "Weihnachtsmarkt 2026",
    intro:
      "Vier Wochen Altdeutscher Weihnachtsmarkt zwischen Altpörtel und Dom, dazu das Riesenrad am Domgarten mit Blick auf den beleuchteten Kaiserdom. Hotels in der Altstadt sind besonders an den Adventswochenenden früh ausgebucht.",
    description:
      "Hotels in Speyer zum Weihnachtsmarkt 2026 — Live-Preise für die Adventszeit, Ende November bis 23. Dezember.",
    checkin: "2026-12-04",
    checkout: "2026-12-06",
    address: "Speyer Altstadt, Deutschland",
    lat: 49.3175,
    lng: 8.4413,
    radius: 2500,
    maxPricePerNight: 350,
    limit: 12,
  },
  {
    slug: "fastnacht",
    title: "Hotels in Speyer zur Fastnacht",
    eyebrow: "Fastnacht 2027",
    intro:
      "Speyerer Fastnacht ist Teil der traditionsreichen Pfälzer Karnevalstradition. Höhepunkt ist der Fastnachts-Sonntag-Umzug durch die Innenstadt. Hotels rund um die Maximilianstraße sind das Fastnachts-Wochenende beliebt.",
    description:
      "Hotels in Speyer zur Fastnacht 2027 — Live-Preise für das Fastnachts-Wochenende mit Umzug. Direktbuchung via Booking.com.",
    checkin: "2027-02-05",
    checkout: "2027-02-09",
    address: "Speyer Altstadt, Deutschland",
    lat: 49.3175,
    lng: 8.4413,
    radius: 2500,
    maxPricePerNight: 300,
    limit: 12,
  },
  {
    slug: "kaisertafel",
    title: "Hotels in Speyer zur Kaisertafel",
    eyebrow: "Kaisertafel 2026",
    intro:
      "Die Kaisertafel verwandelt einmal im Sommer die Maximilianstraße in die längste Tafel der Pfalz. Tausende Gäste essen, trinken Pfälzer Wein und feiern entlang der Achse Altpörtel - Dom. Hotels in fußläufiger Nähe sind dann sehr gefragt.",
    description:
      "Hotels in Speyer zur Kaisertafel 2026 — Live-Preise und Verfügbarkeit für das Festwochenende auf der Maximilianstraße.",
    checkin: "2026-09-04",
    checkout: "2026-09-06",
    address: "Speyer Altstadt, Deutschland",
    lat: 49.3179,
    lng: 8.4393,
    radius: 2000,
    maxPricePerNight: 300,
    limit: 12,
  },
  {
    slug: "musiktage-dom",
    title: "Hotels in Speyer zu den Internationalen Musiktagen Dom zu Speyer",
    eyebrow: "Musiktage Dom 2026",
    intro:
      "Die Internationalen Musiktage Dom zu Speyer sind eines der renommiertesten Kirchenmusik-Festivals Deutschlands. Über drei Wochen im Spätsommer und Herbst spielen internationale Ensembles im Kaiserdom. Hotels in der Altstadt sind an den Konzert-Wochenenden besonders nachgefragt.",
    description:
      "Hotels in Speyer zu den Internationalen Musiktagen Dom zu Speyer 2026 — Live-Preise und Verfügbarkeit für die Festival-Wochenenden.",
    checkin: "2026-09-25",
    checkout: "2026-09-27",
    address: "Speyer Altstadt, Deutschland",
    lat: 49.3173,
    lng: 8.4427,
    radius: 2500,
    maxPricePerNight: 320,
    limit: 12,
  },
  {
    slug: "silvester",
    title: "Hotels in Speyer zu Silvester",
    eyebrow: "Silvester 2026/27",
    intro:
      "Silvester in der Domstadt — der Jahreswechsel mit Blick auf den beleuchteten Kaiserdom und das Feuerwerk über dem Rhein. Hotels mit Dom-Lage oder am Rheinufer sind erfahrungsgemäß zuerst ausgebucht.",
    description:
      "Hotels in Speyer zu Silvester 2026/27 — Live-Preise für den Jahreswechsel. Domnahe und am Rheinufer.",
    checkin: "2026-12-30",
    checkout: "2027-01-02",
    address: "Speyer Altstadt, Deutschland",
    lat: 49.3175,
    lng: 8.4413,
    radius: 3000,
    maxPricePerNight: 400,
    limit: 12,
  },
];

/** Hilfreich um Pages dynamisch zu verstecken, wenn checkin vorbei ist. */
export function isUpcoming(event: CityEvent, now = new Date()): boolean {
  return new Date(event.checkin) >= now;
}

export function getEvent(slug: string): CityEvent | undefined {
  return events.find((e) => e.slug === slug);
}
