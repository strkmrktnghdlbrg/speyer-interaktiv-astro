export type Hotel = {
  slug: string;
  name: string;
  district: string;
  stars: 2 | 3 | 4 | 5;
  priceFrom: number;
  rating: number; // Booking-Skala 0-10
  reviews: number;
  guestFavorite?: boolean;
  shortDesc: string;
  longDesc: string;
  imageHue: number;
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
    rating: 8.6,
    reviews: 720,
    guestFavorite: true,
    shortDesc:
      "Familiengeführtes Hotel direkt am Dom. Eigene Brauerei mit Speyerer Bier im Innenhof.",
    longDesc:
      "Das Hotel Domhof liegt eine Minute zu Fuß vom Kaiserdom entfernt im Bauhof. Familiengeführt, eigene Hausbrauerei (Domhof-Bräu) mit großem Innenhof-Biergarten, gemütlich-traditionelle Zimmer. Beliebt bei Dom-Besuchern, die zentral und unprätentiös übernachten wollen.",
    imageHue: 1,
    bookingUrl: "https://www.booking.com/hotel/de/hotel-domhof.de.html",
    amenities: ["Hausbrauerei", "Biergarten", "Familiengeführt", "Dom-nah"],
  },
  {
    slug: "hotel-goldener-engel",
    name: "Hotel Goldener Engel",
    district: "altstadt",
    stars: 4,
    priceFrom: 115,
    rating: 8.8,
    reviews: 980,
    guestFavorite: true,
    shortDesc:
      "Historisches Stadthaus an der Mühlturmstraße. Frühstücksbüfett, Tiefgarage, fußläufig zur Maximilianstraße.",
    longDesc:
      "Das Hotel Goldener Engel ist in einem historischen Speyerer Stadthaus eingerichtet, eine Minute von der Maximilianstraße. 4-Sterne-Komfort, klassisch eingerichtete Zimmer, gutes Frühstücksbüfett. Hotel-eigene Tiefgarage — in der Altstadt selten und Gold wert.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/goldener-engel-speyer.de.html",
    amenities: ["Tiefgarage", "Frühstück", "Zentral", "Altstadt"],
  },
  {
    slug: "best-western-plus-hotel-domus",
    name: "Best Western Plus Hotel Domus",
    district: "altstadt",
    stars: 4,
    priceFrom: 125,
    rating: 8.7,
    reviews: 1240,
    shortDesc:
      "Modernes 4-Sterne-Hotel in der Theresienstraße. Wellness-Bereich, gehobene Ausstattung.",
    longDesc:
      "Das Best Western Plus Hotel Domus liegt in der Theresienstraße im Altstadt-Kern. Modern eingerichtete Zimmer, kleiner Wellness-Bereich mit Sauna, sehr gut bewertet bei Geschäftsreisenden. Vom Hotel ist man in 5 Minuten am Dom.",
    imageHue: 4,
    bookingUrl: "https://www.booking.com/hotel/de/domus-speyer.de.html",
    amenities: ["Sauna", "Business", "Klimaanlage", "Restaurant"],
  },
  {
    slug: "hotel-zum-goldenen-hirschen",
    name: "Hotel zum Goldenen Hirschen",
    district: "altstadt",
    stars: 3,
    priceFrom: 85,
    rating: 8.4,
    reviews: 510,
    shortDesc:
      "Klassisches Stadthotel mit Restaurant. Traditionsküche, ruhige Lage in der Altstadt.",
    longDesc:
      "Das Hotel zum Goldenen Hirschen ist ein klassisches Speyerer Stadthotel mit angeschlossenem Restaurant — pfälzische Hausmannskost und saisonale Karte. Zimmer einfach, aber sauber und ruhig. Gute Wahl für Reisende, die Wert auf bezahlbare Innenstadtlage mit Restaurant-Anschluss legen.",
    imageHue: 1,
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
    rating: 8.9,
    reviews: 2150,
    guestFavorite: true,
    shortDesc:
      "Wellness-Resort am Binshof mit Thermalbad-Anschluss. 4-Sterne-Superior, Golfplatz und großer Spa.",
    longDesc:
      "Das Lindner Hotel & Spa Binshof am südlichen Stadtrand ist Speyers Wellness-Adresse. 130 Zimmer, eigener Thermal-Spa-Bereich mit Anschluss an die benachbarte Therme, 18-Loch-Golfplatz nebenan. Beliebt bei Wellness-Reisenden und für längere Aufenthalte mit Auto. Zur Altstadt rund 8 Minuten mit dem Wagen.",
    imageHue: 3,
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
    rating: 8.5,
    reviews: 830,
    shortDesc:
      "Direkt am Technik Museum, 4-Sterne, Familien-orientiert. Großes Frühstück, Parkplätze.",
    longDesc:
      "Das Hotel Speyer am Technik Museum liegt direkt neben dem Museumsgelände — ideal, wenn Technik- oder Raumfahrt-Fans über zwei Tage Museum und Sinsheim kombinieren wollen. Familienzimmer, kostenlose Parkplätze, gutes Frühstücksbüfett. Zur Altstadt 10 Minuten mit Auto oder Bus.",
    imageHue: 2,
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
    rating: 8.0,
    reviews: 690,
    shortDesc:
      "Klassisches Stadthotel am Bahnhof. Bezahlbar, 8 Gehminuten zum Altpörtel.",
    longDesc:
      "Das Trip Inn Hotel Speyer liegt direkt am Hauptbahnhof — die kürzeste Anreise ohne Auto. Standard-Zimmer, gutes Preis-Leistungs-Verhältnis, in 8 Minuten Fußweg am Altpörtel. Gute Wahl für Wochenend-Trips ohne Auto.",
    imageHue: 5,
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
    rating: 8.3,
    reviews: 1480,
    shortDesc:
      "Modernes Designhotel am Rheinhafen. Buntes Konzept, gute Anbindung, Frühstück inklusive.",
    longDesc:
      "Das ibis Styles Speyer am neuen Rheinhafen ist Speyers modernes 3-Sterne-Hotel. Frisches Designkonzept (typisch ibis Styles), zeitgemäß ausgestattete Zimmer, kostenfreie Parkplätze und gutes Frühstücksbüfett inklusive. Zur Altstadt 10-15 Minuten zu Fuß am Rhein entlang.",
    imageHue: 2,
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
