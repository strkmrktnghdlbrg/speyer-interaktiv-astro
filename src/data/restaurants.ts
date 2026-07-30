export type Restaurant = {
  slug: string;
  name: string;
  district: string;
  cuisine: string; // z.B. "Pfälzisch", "Italienisch", "Mediterran"
  priceLevel: "€" | "€€" | "€€€" | "€€€€";
  shortDesc: string;
  longDesc: string;
  imageHue: number;
  imageKey?: string; // Optional — Reuse aus Registry oder eigenes Bild
  openingHours?: string;
  websiteUrl?: string;
  reservation?: boolean;
  categories: string[]; // Slugs aus src/data/categories.ts
};

/**
 * Speyerer Gastro-Auswahl. Adressen und Öffnungszeiten vor Go-Live
 * verifizieren — siehe DEPLOYMENT-PLAN.md.
 *
 * Charakter Pfalz: Hausmannskost (Saumagen, Leberknödel, Pfälzer Wein),
 * Italiener, Brauhäuser/Hausbrauereien, moderne Bistros.
 */
export const restaurants: Restaurant[] = [
  // === ALTSTADT ===
  {
    slug: "backmulde",
    name: "Backmulde",
    categories: ["mittelalter"],
    district: "altstadt",
    cuisine: "Mediterran-Pfälzisch",
    priceLevel: "€€€",
    shortDesc:
      "Gehobene Adresse in einem historischen Backhaus. Saisonale Karte mit pfälzischen und mediterranen Akzenten.",
    longDesc:
      "Die Backmulde ist seit Jahren eine der gehobeneren Speyerer Adressen. Untergebracht in einem historischen Backhaus an der Karmeliterstraße, mit Steingewölbe und ruhigem Innenhof. Die Karte wechselt saisonal zwischen pfälzischen Klassikern und mediterranen Tellern, dazu eine fokussierte pfälzische Weinkarte.",
    imageHue: 4,
    imageKey: "restaurant:backmulde",
    openingHours: "Mi-Sa ab 18:00 · So ab 12:00",
    reservation: true,
  },
  {
    slug: "domhof-hausbrauerei",
    name: "Domhof Hausbrauerei",
    categories: ["familie"],
    district: "altstadt",
    cuisine: "Brauhaus / Pfälzisch",
    priceLevel: "€€",
    shortDesc:
      "Hausbrauerei direkt am Dom. Eigenes Domhof-Bier, großer Innenhof-Biergarten, Pfälzer Klassiker.",
    longDesc:
      "Der Domhof am Bauhof ist Speyers bekanntester Brauhaus-Garten. Das eigene Domhof-Bier wird im Haus gebraut, der Biergarten unter Kastanien fasst mehrere hundert Gäste. Die Karte ist klassisch pfälzisch: Saumagen, Leberknödel, Schweinshaxe - solide und ohne Überraschungen.",
    imageHue: 1,
    imageKey: "restaurant:domhof-hausbrauerei",
    openingHours: "Mo-So 11:00-23:00",
    websiteUrl: "https://www.domhof.de",
    reservation: true,
  },
  {
    slug: "zum-alten-engel",
    name: "Zum alten Engel",
    categories: ["mittelalter"],
    district: "altstadt",
    cuisine: "Pfälzisch",
    priceLevel: "€€",
    shortDesc:
      "Weinkeller-Restaurant in einem Gewölbe von 1700. Traditionelle Pfalz-Küche, große Auswahl an Pfälzer Weinen.",
    longDesc:
      'Im historischen Gewölbekeller des "Alten Engel" an der Mühlturmstraße sitzt man zwischen Sandsteinmauern aus 1700. Die Karte ist klassisch Pfälzisch - Saumagen, Leberknödel mit Sauerkraut, Pfälzer Bratwurst - die Weinkarte umfasst über 60 Pfälzer Tropfen. Authentisch, ohne Touristenfalle.',
    imageHue: 4,
    imageKey: "restaurant:zum-alten-engel",
    openingHours: "Di-So ab 17:00",
    reservation: true,
  },
  {
    slug: "wirtschaft-zum-halbmond",
    name: "Wirtschaft zum Halbmond",
    categories: [],
    district: "altstadt",
    cuisine: "Pfälzisch",
    priceLevel: "€€",
    shortDesc:
      "Klassische Wirtshaus-Atmosphäre. Schoppe-Stuwe mit Pfälzer Karte und kleiner Bühne für Weinabende.",
    longDesc:
      "Die Wirtschaft zum Halbmond ist eine klassische Schoppe-Stuwe in der Altstadt - also Weinstube mit Schank-Tradition. Pfälzer Karte mit Saumagen-Klassikern und saisonalen Spezialitäten, dazu eine fundierte Auswahl pfälzischer Riesling- und Burgunder-Weine. Regelmäßig Weinprobeabende.",
    imageHue: 1,
    imageKey: "restaurant:wirtschaft-zum-halbmond",
    openingHours: "Mi-Mo ab 17:00",
    reservation: true,
  },
  {
    slug: "ratskeller-speyer",
    name: "Ratskeller Speyer",
    categories: ["barock"],
    district: "altstadt",
    cuisine: "Pfälzisch-International",
    priceLevel: "€€",
    shortDesc:
      "Unter dem barocken Rathaus. Gewölbekeller mit pfälzischer und internationaler Karte, schöne Terrasse.",
    longDesc:
      "Der Ratskeller im Untergeschoss des Speyerer Rathauses kombiniert historische Gewölbe-Atmosphäre mit einer breit aufgestellten Karte - von Pfälzer Klassikern bis zu internationalen Bistro-Tellern. Die Terrasse in der Maximilianstraße macht ihn im Sommer zu einer der gefragtesten Adressen der Stadt.",
    imageHue: 4,
    imageKey: "restaurant:ratskeller-speyer",
    openingHours: "Di-So 11:30-23:00",
    reservation: true,
  },
  {
    slug: "da-toni",
    name: "Da Toni",
    categories: [],
    district: "altstadt",
    cuisine: "Italienisch",
    priceLevel: "€€",
    shortDesc:
      "Familiärer Italiener an der Maximilianstraße. Hausgemachte Pasta, Holzofen-Pizza, Karaffe Hausweißen.",
    longDesc:
      "Da Toni ist Speyers verlässlicher Italiener - familiengeführt, Hausgemachte Pasta, klassische Holzofen-Pizza, anständige Karaffe Hauswein. Mittagstische sind solide, abends die Spezialitätenkarte mit Saisonprodukten. Reservierung am Wochenende empfohlen.",
    imageHue: 2,
    imageKey: "restaurant:da-toni",
    openingHours: "Di-So 11:30-14:30, 17:30-23:00",
    reservation: true,
  },
  {
    slug: "restaurant-maximilian",
    name: "Restaurant Maximilian",
    categories: [],
    district: "altstadt",
    cuisine: "Mediterran",
    priceLevel: "€€€",
    shortDesc:
      "Modernes Bistro mit mediterraner Karte. Frische Fische, viel Gemüse, freundlicher Service.",
    longDesc:
      "Das Restaurant Maximilian an der gleichnamigen Straße steht für moderne mediterrane Küche - viel Fisch, Pasta, Risotto, viel Gemüse, gute Weinkarte. Stilvolles Ambiente, freundlich-aufmerksamer Service. Beliebt bei Hochzeiten und Geschäftsessen.",
    imageHue: 3,
    imageKey: "restaurant:restaurant-maximilian",
    openingHours: "Di-Sa 12:00-14:30, 18:00-22:30",
    reservation: true,
  },
  {
    slug: "cafe-specht",
    name: "Café Specht",
    categories: ["familie"],
    district: "altstadt",
    cuisine: "Café / Kuchen",
    priceLevel: "€",
    shortDesc:
      "Klassisches Familiencafé. Hausgemachte Torten, Frühstück, kleine warme Karte. Beliebt bei Speyerern.",
    longDesc:
      "Das Café Specht ist seit Generationen eine Speyerer Institution - am Vormittag Frühstück mit Pfälzer Brötchen, mittags eine kleine Mittagskarte, nachmittags hausgemachte Torten und Kuchen. Beliebter Treffpunkt der Speyerer Stammgäste, nicht Touristenfalle.",
    imageHue: 5,
    imageKey: "restaurant:cafe-specht",
    openingHours: "Mo-Sa 8:00-18:00 · So 9:00-17:00",
  },

  // === SÜD / SUEDWEST ===
  {
    slug: "lindner-restaurant-binshof",
    name: "Lindner Restaurant Binshof",
    categories: [],
    district: "sued",
    cuisine: "Internationale Küche",
    priceLevel: "€€€",
    shortDesc:
      "Hotel-Restaurant im Lindner am Binshof. Saisonale Karte, große Weinauswahl, Bankett-tauglich.",
    longDesc:
      "Das Restaurant im Lindner Hotel & Spa Binshof ist das gepflegteste Hotel-Restaurant Speyers - saisonal-internationale Karte, gute Weinauswahl, im Sommer Terrasse mit Blick in den Park. Auch ohne Hotelübernachtung gut zu besuchen, am Wochenende reservieren.",
    imageHue: 3,
    // Restaurant liegt im Lindner Hotel & Spa Binshof — registriertes Hotelfoto wiederverwenden.
    imageKey: "hotel:lindner-hotel-spa-binshof",
    openingHours: "Täglich 18:00-22:00",
    websiteUrl: "https://www.lindner.de/speyer-hotel-binshof",
    reservation: true,
  },

  // === RHEINHAFEN ===
  {
    slug: "rheinblick-speyer",
    name: "Rheinblick Speyer",
    categories: [],
    district: "rheinhafen",
    cuisine: "Fisch / International",
    priceLevel: "€€€",
    shortDesc:
      "Restaurant mit Terrasse über dem Rhein. Frischer Fisch, Sommerterrasse, Sonnenuntergang inklusive.",
    longDesc:
      "Der Rheinblick im Rheinhafen-Quartier ist Speyers Wahl für Abende mit Wasserblick. Schwerpunkt frischer Fisch (Zander, Forelle, saisonal Hecht), dazu Klassiker der internationalen Küche. Die Sommerterrasse direkt überm Wasser ist die längste in Speyer - Reservierung Pflicht bei gutem Wetter.",
    imageHue: 2,
    imageKey: "restaurant:rheinblick-speyer",
    openingHours: "Mi-So 12:00-22:00",
    reservation: true,
  },
];

export const getRestaurant = (slug: string) =>
  restaurants.find((r) => r.slug === slug);
export const restaurantsByDistrict = (district: string) =>
  restaurants.filter((r) => r.district === district);
export const restaurantsByCategory = (slug: string) =>
  restaurants.filter((r) => r.categories.includes(slug));
