/*
 * KEINE Gaeste-Bewertungen in dieser Datei.
 *
 * Bis 2026-08-03 trug jeder Eintrag ein handgepflegtes `rating`, `reviews`
 * und teils `guestFavorite: true`. Diese Zahlen hatten keine Quelle. Auf
 * bad-duerkheim-interaktiv.de wurden zwei davon gegen Booking.com geprueft:
 *   Mercure an den Salinen  -> Datei 8.6 / 1120,  real 7.9 / 1035
 *   Kurpark-Hotel           -> Datei 8.7 /  980,  real 7.8 / 1092
 * Beide zugunsten des Hauses geschoent, und sie gingen zusaetzlich als
 * schema.org/AggregateRating an Google (§ 5a UWG, Anhang Nr. 23b UWG).
 *
 * Der Live-Score der Stay22-v1-API taugt NICHT als Ersatz: er ist
 * ganzzahlig und schneidet ab statt zu runden (real 7.9 -> API 7).
 * Echte Bewertungen zeigt der Stay22-Block auf denselben Seiten.
 *
 * Wer hier wieder Bewertungen einbauen will: nur mit belegter Quelle UND
 * Stand-Datum.
 */
export type Hotel = {
  slug: string;
  name: string;
  district: string;
  stars: 2 | 3 | 4 | 5;
  priceFrom: number;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string; // Optional — Reuse aus Registry, siehe src/data/images.ts
  bookingUrl: string;
  amenities: string[];
};

/**
 * Speyerer Hotel-Auswahl. booking.com-URLs sind nach üblichem Pattern
 * angelegt (https://www.booking.com/hotel/de/<slug>.de.html). Vor Go-Live
 * Slug-Existenz pro Hotel verifizieren — siehe DEPLOYMENT-PLAN.md.
 *
 * Stay22-Snippet rewritet diese URLs zur Laufzeit auf Affiliate-Links,
 * sobald `affiliate.stay22.enabled = true` mit gültiger lmaID.
 */
export const hotels: Hotel[] = [
  // === ALTSTADT / KERNSTADT ===
  {
    slug: "hotel-domhof",
    name: "Hotel Domhof",
    district: "altstadt",
    stars: 3,
    priceFrom: 95,
    shortDesc:
      "Hotel im Bauhof, eine Minute vom Dom. 43 Zimmer und drei Suiten, Rezeption rund um die Uhr, eigene Parkplätze auf dem Grundstück.",
    longDesc:
      "Das Hotel Domhof liegt im Bauhof, rund eine Gehminute vom Kaiserdom entfernt. Es hat nach eigenen Angaben 43 Zimmer und drei Suiten, die 2019 und 2021 renoviert wurden, dazu Rezeption und Bar rund um die Uhr, Frühstücksbuffet, Innenhofterrasse und kostenfreies WLAN. Auf dem Grundstück stehen eigene, kostenpflichtige Parkplätze zur Verfügung. Die bekannte Hausbrauerei Domhof ist ein eigener Betrieb wenige Schritte entfernt in der Großen Himmelsgasse, nicht Teil des Hotels.",
    imageHue: 1,
    imageKey: "hotel:hotel-domhof",
    bookingUrl: "https://www.booking.com/hotel/de/hotel-domhof.de.html",
    amenities: ["24h-Rezeption", "Eigene Parkplätze", "Frühstücksbuffet", "Dom-nah"],
  },
  {
    slug: "hotel-goldener-engel",
    name: "Hotel Goldener Engel",
    district: "altstadt",
    stars: 4,
    priceFrom: 115,
    shortDesc:
      "Historisches Stadthaus an der Mühlturmstraße. Frühstücksbüfett, Tiefgarage, fußläufig zur Maximilianstraße.",
    longDesc:
      "Das Hotel Goldener Engel ist in einem historischen Speyerer Stadthaus eingerichtet, eine Minute von der Maximilianstraße. 4-Sterne-Komfort, klassisch eingerichtete Zimmer, gutes Frühstücksbüfett. Hotel-eigene Tiefgarage - in der Altstadt selten und Gold wert.",
    imageHue: 4,
    imageKey: "hotel:hotel-goldener-engel",
    bookingUrl: "https://www.booking.com/hotel/de/goldener-engel-speyer.de.html",
    amenities: ["Tiefgarage", "Frühstück", "Zentral", "Altstadt"],
  },
  {
    slug: "best-western-plus-hotel-domus",
    name: "Best Western Plus Hotel Domus",
    district: "altstadt",
    stars: 4,
    priceFrom: 125,
    shortDesc:
      "Modernes 4-Sterne-Hotel in der Theresienstraße. Wellness-Bereich, gehobene Ausstattung.",
    longDesc:
      "Das Best Western Plus Hotel Domus liegt in der Theresienstraße im Altstadt-Kern. Modern eingerichtete Zimmer, kleiner Wellness-Bereich mit Sauna, sehr gut bewertet bei Geschäftsreisenden. Vom Hotel ist man in 5 Minuten am Dom.",
    imageHue: 4,
    imageKey: "hotel:best-western-plus-hotel-domus",
    bookingUrl: "https://www.booking.com/hotel/de/domus-speyer.de.html",
    amenities: ["Sauna", "Business", "Klimaanlage", "Restaurant"],
  },
  {
    slug: "hotel-zum-goldenen-hirschen",
    name: "Hotel zum Goldenen Hirschen",
    district: "altstadt",
    stars: 3,
    priceFrom: 85,
    shortDesc:
      "Klassisches Stadthotel mit Restaurant. Traditionsküche, ruhige Lage in der Altstadt.",
    longDesc:
      "Das Hotel zum Goldenen Hirschen ist ein klassisches Speyerer Stadthotel mit angeschlossenem Restaurant - pfälzische Hausmannskost und saisonale Karte. Zimmer einfach, aber sauber und ruhig. Gute Wahl für Reisende, die Wert auf bezahlbare Innenstadtlage mit Restaurant-Anschluss legen.",
    imageHue: 1,
    imageKey: "hotel:hotel-zum-goldenen-hirschen",
    bookingUrl: "https://www.booking.com/hotel/de/zum-goldenen-hirschen-speyer.de.html",
    amenities: ["Restaurant", "Pfälzische Küche", "Altstadt", "Bezahlbar"],
  },

  // === SPEYER-SÜD / BINSHOF ===
  {
    slug: "lindner-hotel-spa-binshof",
    name: "Lindner Hotel & Spa Binshof",
    district: "sued",
    stars: 4,
    priceFrom: 165,
    shortDesc:
      "Wellness-Resort am Binshof mit Thermalbad-Anschluss. 4-Sterne-Superior, Golfplatz und großer Spa.",
    longDesc:
      "Das Lindner Hotel & Spa Binshof am südlichen Stadtrand ist Speyers Wellness-Adresse. 130 Zimmer, eigener Thermal-Spa-Bereich mit Anschluss an die benachbarte Therme, 18-Loch-Golfplatz nebenan. Beliebt bei Wellness-Reisenden und für längere Aufenthalte mit Auto. Zur Altstadt rund 8 Minuten mit dem Wagen.",
    imageHue: 3,
    imageKey: "hotel:lindner-hotel-spa-binshof",
    bookingUrl: "https://www.booking.com/hotel/de/lindner-park-hagenbeck-binshof.de.html",
    amenities: ["Spa", "Thermalbad", "Golfplatz", "Restaurant", "Pool"],
  },

  // === SPEYER-WEST ===
  {
    slug: "hotel-speyer-am-technik-museum",
    name: "Hotel Speyer am Technik Museum",
    district: "west",
    stars: 4,
    priceFrom: 110,
    shortDesc:
      "Direkt am Technik Museum, 4-Sterne, Familien-orientiert. Großes Frühstück, Parkplätze.",
    longDesc:
      "Das Hotel Speyer am Technik Museum liegt direkt neben dem Museumsgelände - ideal, wenn Technik- oder Raumfahrt-Fans über zwei Tage Museum und Sinsheim kombinieren wollen. Familienzimmer, kostenlose Parkplätze, gutes Frühstücksbüfett. Zur Altstadt 10 Minuten mit Auto oder Bus.",
    imageHue: 2,
    imageKey: "hotel:hotel-speyer-am-technik-museum",
    bookingUrl: "https://www.booking.com/hotel/de/speyer-am-technik-museum.de.html",
    amenities: ["Familien", "Parkplatz", "Frühstück", "Museums-nah"],
  },

  // === BAHNHOF / WEST (Übergang) ===
  {
    slug: "trip-inn-hotel-speyer",
    name: "Trip Inn Hotel Speyer",
    district: "west",
    stars: 3,
    priceFrom: 75,
    shortDesc:
      "Klassisches Stadthotel am Bahnhof. Bezahlbar, 8 Gehminuten zum Altpörtel.",
    longDesc:
      "Das Trip Inn Hotel Speyer liegt direkt am Hauptbahnhof - die kürzeste Anreise ohne Auto. Standard-Zimmer, gutes Preis-Leistungs-Verhältnis, in 8 Minuten Fußweg am Altpörtel. Gute Wahl für Wochenend-Trips ohne Auto.",
    imageHue: 5,
    imageKey: "hotel:trip-inn-hotel-speyer",
    bookingUrl: "https://www.booking.com/hotel/de/trip-inn-speyer.de.html",
    amenities: ["Bahnhof-nah", "Bezahlbar", "Business", "Frühstück"],
  },

  // === RHEINHAFEN / OST ===
  {
    slug: "ibis-styles-speyer",
    name: "ibis Styles Speyer",
    district: "rheinhafen",
    stars: 3,
    priceFrom: 85,
    shortDesc:
      "Modernes Designhotel am Rheinhafen. Buntes Konzept, gute Anbindung, Frühstück inklusive.",
    longDesc:
      "Das ibis Styles Speyer am neuen Rheinhafen ist Speyers modernes 3-Sterne-Hotel. Frisches Designkonzept (typisch ibis Styles), zeitgemäß ausgestattete Zimmer, kostenfreie Parkplätze und gutes Frühstücksbüfett inklusive. Zur Altstadt 10-15 Minuten zu Fuß am Rhein entlang.",
    imageHue: 2,
    imageKey: "hotel:ibis-styles-speyer",
    bookingUrl: "https://www.booking.com/hotel/de/ibis-styles-speyer.de.html",
    amenities: ["Design", "Frühstück inklusive", "Parkplatz", "Rhein-nah"],
  },
];

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);
export const hotelsByDistrict = (district: string) =>
  hotels.filter((h) => h.district === district);

/** Top-N Hotels eines Stadtteils, sortiert nach Rating × Reviews-Volume */
export const topHotelsByDistrict = (district: string, n = 5) =>
  hotelsByDistrict(district)
    .slice()
    .sort((a, b) => b.rating * Math.log(b.reviews + 1) - a.rating * Math.log(a.reviews + 1))
    .slice(0, n);
