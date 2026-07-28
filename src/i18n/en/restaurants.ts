/**
 * Englische Inhaltsdaten für die Sektion "restaurants".
 * Gekeyt nach dem DEUTSCHEN slug. Nicht uebersetzt: priceLevel, openingHours-
 * Zeiten (Wochentage werden im UI uebersetzt), websiteUrl, imageKey, categories.
 */
export type RestaurantEn = {
  slug: string;
  name: string;
  cuisine: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
};

export const restaurantsEn: Record<string, RestaurantEn> = {
  backmulde: {
    slug: "backmulde",
    name: "Backmulde",
    cuisine: "Mediterranean-Palatinate",
    shortDesc:
      "An upscale address in a historic bakehouse, with a seasonal menu that balances Palatinate and Mediterranean flavors.",
    longDesc:
      "The Backmulde has been one of Speyer's more refined addresses for years. Set in a historic bakehouse on Karmeliterstraße, with stone vaulting and a quiet courtyard, its menu shifts with the seasons between Palatinate classics and Mediterranean plates, backed by a focused Palatinate wine list.",
    openingHours: "Wed-Sat from 18:00 · Sun from 12:00",
  },
  "domhof-hausbrauerei": {
    slug: "domhof-brewery",
    name: "Domhof Brewery",
    cuisine: "Brewpub / Palatinate",
    shortDesc:
      "A house brewery right by the cathedral. House-brewed Domhof beer, a large courtyard beer garden and Palatinate classics.",
    longDesc:
      "The Domhof in the Bauhof is Speyer's best-known brewpub garden. Its own Domhof beer is brewed on site, and the beer garden under chestnut trees seats several hundred guests. The menu is classic Palatinate fare: Saumagen (stuffed pork stomach), liver dumplings and pork knuckle, all solid and without surprises.",
    openingHours: "Mon-Sun 11:00-23:00",
  },
  "zum-alten-engel": {
    slug: "zum-alten-engel",
    name: "Zum alten Engel",
    cuisine: "Palatinate",
    shortDesc:
      "A wine-cellar restaurant in a vaulted room from 1700. Traditional Palatinate cooking and a wide choice of Palatinate wines.",
    longDesc:
      "In the historic vaulted cellar of the \"Alter Engel\" on Mühlturmstraße you sit among sandstone walls dating from 1700. The menu is classic Palatinate, from Saumagen and liver dumplings with sauerkraut to Palatinate sausage, while the wine list runs to more than 60 local vintages. Authentic, and not a tourist trap.",
    openingHours: "Tue-Sun from 17:00",
  },
  "wirtschaft-zum-halbmond": {
    slug: "wirtschaft-zum-halbmond",
    name: "Wirtschaft zum Halbmond",
    cuisine: "Palatinate",
    shortDesc:
      "A classic Palatinate tavern with a Palatinate menu and a small stage for wine evenings.",
    longDesc:
      "The Wirtschaft zum Halbmond is a classic Schoppe-Stuwe in the Old Town, a wine tavern in the old serving tradition. Expect a Palatinate menu with Saumagen classics and seasonal specialties, plus a well-chosen selection of Palatinate Riesling and Pinot wines. Wine-tasting evenings are held regularly.",
    openingHours: "Wed-Mon from 17:00",
  },
  "ratskeller-speyer": {
    slug: "ratskeller-speyer",
    name: "Ratskeller Speyer",
    cuisine: "Palatinate-International",
    shortDesc:
      "Beneath the Baroque town hall. A vaulted cellar with a Palatinate and international menu and a lovely terrace.",
    longDesc:
      "The Ratskeller in the basement of Speyer's town hall combines a historic vaulted setting with a broad menu, from Palatinate classics to international bistro plates. Its terrace on the Maximilianstraße makes it one of the most sought-after spots in the city in summer.",
    openingHours: "Tue-Sun 11:30-23:00",
  },
  "da-toni": {
    slug: "da-toni",
    name: "Da Toni",
    cuisine: "Italian",
    shortDesc:
      "A friendly family-run Italian on the Maximilianstraße with house-made pasta, wood-fired pizza and a carafe of house white.",
    longDesc:
      "Da Toni is Speyer's dependable Italian: family-run, with house-made pasta, classic wood-fired pizza and an honest carafe of house wine. The lunch specials are solid, and the evening menu leans on seasonal specialties. Reservations are recommended on weekends.",
    openingHours: "Tue-Sun 11:30-14:30, 17:30-23:00",
  },
  "restaurant-maximilian": {
    slug: "restaurant-maximilian",
    name: "Restaurant Maximilian",
    cuisine: "Mediterranean",
    shortDesc:
      "A modern bistro with a Mediterranean menu: fresh fish, plenty of vegetables and friendly service.",
    longDesc:
      "Restaurant Maximilian, on the street of the same name, stands for modern Mediterranean cooking, with plenty of fish, pasta, risotto and vegetables and a good wine list. The setting is stylish and the service warm and attentive. It is a popular choice for weddings and business dinners.",
    openingHours: "Tue-Sat 12:00-14:30, 18:00-22:30",
  },
  "cafe-specht": {
    slug: "cafe-specht",
    name: "Café Specht",
    cuisine: "Café / Cakes",
    shortDesc:
      "A classic family café with house-made cakes, breakfast and a small hot menu. Beloved by locals.",
    longDesc:
      "Café Specht has been a Speyer institution for generations: breakfast with Palatinate rolls in the morning, a small lunch menu at midday and house-made cakes and tarts in the afternoon. It is a favorite meeting point for Speyer regulars, not a tourist trap.",
    openingHours: "Mon-Sat 8:00-18:00 · Sun 9:00-17:00",
  },
  "lindner-restaurant-binshof": {
    slug: "lindner-restaurant-binshof",
    name: "Lindner Restaurant Binshof",
    cuisine: "International",
    shortDesc:
      "The hotel restaurant at the Lindner Binshof. A seasonal menu, a large wine selection and space for events.",
    longDesc:
      "The restaurant at the Lindner Hotel & Spa Binshof is the most polished hotel restaurant in Speyer, with a seasonal international menu, a good wine selection and, in summer, a terrace overlooking the park. It is well worth a visit even without staying at the hotel; reserve on weekends.",
    openingHours: "Daily 18:00-22:00",
  },
  "rheinblick-speyer": {
    slug: "rheinblick-speyer",
    name: "Rheinblick Speyer",
    cuisine: "Fish / International",
    shortDesc:
      "A restaurant with a terrace over the Rhine. Fresh fish, a summer terrace and the sunset included.",
    longDesc:
      "The Rheinblick in the Rhine harbor quarter is Speyer's choice for evenings by the water. The focus is fresh fish (zander, trout, pike in season) alongside international classics. Its summer terrace right over the water is the longest in Speyer, so a reservation is essential in fine weather.",
    openingHours: "Wed-Sun 12:00-22:00",
  },
};
