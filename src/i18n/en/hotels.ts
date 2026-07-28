/**
 * Englische Inhaltsdaten für die Sektion "hotels".
 * Gekeyt nach dem DEUTSCHEN slug (Hotel.slug). Nicht uebersetzt: stars,
 * priceFrom, rating, reviews, bookingUrl, imageKey, coordinates.
 */
export type HotelEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  amenities: string[];
};

export const hotelsEn: Record<string, HotelEn> = {
  "hotel-domhof": {
    slug: "hotel-domhof",
    name: "Hotel Domhof",
    shortDesc:
      "A family-run hotel right by the cathedral, with its own brewery serving Speyer beer in the courtyard.",
    longDesc:
      "Hotel Domhof sits a one-minute walk from the Imperial Cathedral in the Bauhof. Family-run, it has its own house brewery (Domhof-Bräu) with a large courtyard beer garden and cozy, traditional rooms. It is a favorite with cathedral visitors who want a central, unpretentious base.",
    amenities: ["House brewery", "Beer garden", "Family-run", "Near the cathedral"],
  },
  "hotel-goldener-engel": {
    slug: "hotel-goldener-engel",
    name: "Hotel Goldener Engel",
    shortDesc:
      "A historic townhouse on Mühlturmstraße with a breakfast buffet, underground parking and the Maximilianstraße on foot.",
    longDesc:
      "Hotel Goldener Engel occupies a historic Speyer townhouse one minute from the Maximilianstraße. It offers four-star comfort, classically furnished rooms and a good breakfast buffet. Its own underground garage is a rarity in the Old Town and worth its weight in gold.",
    amenities: ["Underground parking", "Breakfast", "Central", "Old Town"],
  },
  "best-western-plus-hotel-domus": {
    slug: "best-western-plus-hotel-domus",
    name: "Best Western Plus Hotel Domus",
    shortDesc:
      "A modern four-star hotel on Theresienstraße with a wellness area and upscale furnishings.",
    longDesc:
      "The Best Western Plus Hotel Domus is on Theresienstraße in the heart of the Old Town. It has modern rooms, a small wellness area with a sauna and consistently strong ratings from business travelers. The cathedral is a five-minute walk away.",
    amenities: ["Sauna", "Business", "Air conditioning", "Restaurant"],
  },
  "hotel-zum-goldenen-hirschen": {
    slug: "hotel-zum-goldenen-hirschen",
    name: "Hotel zum Goldenen Hirschen",
    shortDesc:
      "A classic town hotel with restaurant, traditional cuisine and a quiet Old Town location.",
    longDesc:
      "Hotel zum Goldenen Hirschen is a classic Speyer town hotel with an attached restaurant serving Palatinate home cooking and a seasonal menu. The rooms are simple but clean and quiet. It is a good choice for travelers who want an affordable downtown location with a restaurant on site.",
    amenities: ["Restaurant", "Palatinate cuisine", "Old Town", "Affordable"],
  },
  "lindner-hotel-spa-binshof": {
    slug: "lindner-hotel-spa-binshof",
    name: "Lindner Hotel & Spa Binshof",
    shortDesc:
      "A wellness resort at Binshof with thermal-bath access, four-star superior comfort, a golf course and a large spa.",
    longDesc:
      "The Lindner Hotel & Spa Binshof on the southern edge of town is Speyer's wellness address. It has 130 rooms, its own thermal spa area connected to the neighboring thermal baths and an 18-hole golf course next door. It is popular with wellness travelers and for longer stays by car. The Old Town is about eight minutes away by car.",
    amenities: ["Spa", "Thermal baths", "Golf course", "Restaurant", "Pool"],
  },
  "hotel-speyer-am-technik-museum": {
    slug: "hotel-speyer-am-technik-museum",
    name: "Hotel Speyer am Technik Museum",
    shortDesc:
      "Right next to the Technik Museum, four stars and family-friendly, with a big breakfast and parking.",
    longDesc:
      "Hotel Speyer am Technik Museum sits directly beside the museum grounds, ideal if technology or spaceflight fans want to combine the museum and Sinsheim over two days. It offers family rooms, free parking and a good breakfast buffet. The Old Town is 10 minutes away by car or bus.",
    amenities: ["Family rooms", "Parking", "Breakfast", "Near the museum"],
  },
  "trip-inn-hotel-speyer": {
    slug: "trip-inn-hotel-speyer",
    name: "Trip Inn Hotel Speyer",
    shortDesc:
      "A classic town hotel by the station. Affordable and an 8-minute walk to the Altpörtel gate.",
    longDesc:
      "Trip Inn Hotel Speyer is right by the main station, the shortest arrival if you are traveling without a car. It has standard rooms, good value for money and an 8-minute walk to the Altpörtel gate. A solid choice for a weekend trip without a car.",
    amenities: ["Near the station", "Affordable", "Business", "Breakfast"],
  },
  "ibis-styles-speyer": {
    slug: "ibis-styles-speyer",
    name: "ibis Styles Speyer",
    shortDesc:
      "A modern design hotel by the Rhine harbor. A colorful concept, good transport links and breakfast included.",
    longDesc:
      "The ibis Styles Speyer by the new Rhine harbor is Speyer's modern three-star hotel. It has a fresh design concept (typical of ibis Styles), contemporary rooms, free parking and a good breakfast buffet included. The Old Town is a 10 to 15-minute walk along the Rhine.",
    amenities: ["Design", "Breakfast included", "Parking", "Near the Rhine"],
  },
};
