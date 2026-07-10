export type District = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  hue: number; // Stadtteil-Gradient-Index 1-5
  imageKey?: string; // Key im src/data/images.ts Registry
  coordinates: [number, number];
  characterTags: string[];
};

/**
 * Speyer hat offiziell 5 Stadtteile (Kernstadt, Süd, Nord, West, Südwest).
 * Wir ergänzen drei Quartiere/Sondergebiete, die im Sprachgebrauch und in
 * der Hotel-Landschaft eigenständig auftreten:
 *  - Edith-Stein-Viertel (Quartier in Speyer-West / Kernstadt-Rand)
 *  - Rheinhafen (Neues Wohn- und Gewerbegebiet am Rhein)
 *  - Erlach / Ost (außerhalb Kernstadt, Wohngebiet + Industrie)
 *
 * Damit bleiben die bestehenden WP-Hotel-URLs sinnvoll mappbar
 * (siehe redirects in astro.config.mjs).
 */
export const districts: District[] = [
  {
    slug: "altstadt",
    imageKey: "district:altstadt",
    name: "Altstadt",
    shortDesc:
      "Der historische Stadtkern zwischen Kaiserdom, Maximilianstraße und Altpörtel. UNESCO-Welterbe und lebendige Innenstadt zugleich.",
    longDesc:
      "Die Altstadt - offiziell die Kernstadt - entspricht dem Gebiet innerhalb der mittelalterlichen Stadtmauer. Hier verdichten sich Dom, Judenhof, Historisches Museum, die Dreifaltigkeitskirche und die rund 600 Meter lange Maximilianstraße als Flaniermeile. Die Altstadt ist das touristische Herz Speyers, gleichzeitig Wohn- und Einkaufsquartier.",
    hue: 1,
    coordinates: [49.3175, 8.4413],
    characterTags: ["UNESCO", "Touristisch", "Maximilianstraße"],
  },
  {
    slug: "nord",
    imageKey: "district:nord",
    name: "Speyer-Nord",
    shortDesc:
      "Wohnviertel nördlich der Kernstadt mit Naherholung am Rhein und am Russenweiher.",
    longDesc:
      "Speyer-Nord schließt nördlich an die Altstadt an und ist überwiegend Wohngebiet. Vom Rhein-Ufer bis zur Bundesstraße 9 reicht das Quartier. Naherholung am Russenweiher, Sportanlagen und gewachsene Nachbarschaften prägen den Charakter.",
    hue: 2,
    coordinates: [49.3289, 8.4424],
    characterTags: ["Wohnen", "Rhein", "Naherholung"],
  },
  {
    slug: "sued",
    imageKey: "district:sued",
    name: "Speyer-Süd",
    shortDesc:
      "Süd mit den Siedlungen Im Oberkämmerer, Neuland und Vogelgesang - Wohnen und Naherholung.",
    longDesc:
      "Speyer-Süd umfasst die Siedlungen Im Oberkämmerer, Neuland und Vogelgesang. Es handelt sich überwiegend um Einfamilienhaus-Quartiere mit Schulen, Sportplätzen und dem Vogelgesang als grüner Lunge. Wer in Speyer ruhig und familienfreundlich wohnen will, landet meist hier.",
    hue: 3,
    coordinates: [49.3023, 8.4467],
    characterTags: ["Wohnen", "Familien", "Vogelgesang"],
  },
  {
    slug: "west",
    imageKey: "district:west",
    name: "Speyer-West",
    shortDesc:
      "Westlich der Bahnlinie. Wohngebiete, Schulen, Anbindung an die A61.",
    longDesc:
      "Speyer-West liegt westlich der Bahntrasse und ist verkehrlich über die A61 angebunden. Das Quartier verbindet Wohnen mit Gewerbeflächen, Schulen und Sport. Wer in Speyer arbeitet, wohnt häufig hier.",
    hue: 4,
    coordinates: [49.3199, 8.4187],
    characterTags: ["Wohnen", "Gewerbe", "A61"],
  },
  {
    slug: "suedwest",
    imageKey: "district:suedwest",
    name: "Speyer-Südwest",
    shortDesc:
      "Sondergebiet mit Kloster, Hochschule, Krankenhaus und Sportanlagen - der grüne Bildungsgürtel.",
    longDesc:
      "Speyer-Südwest ist ein Sondergebiet im Westen der Kernstadt. Hier konzentrieren sich Klosteranlagen (St. Magdalena), die Deutsche Universität für Verwaltungswissenschaften, das Diakonissen-Stiftungs-Krankenhaus, die Hochschule und mehrere Sportanlagen. Wohnen spielt hier eine Nebenrolle.",
    hue: 5,
    coordinates: [49.3107, 8.4198],
    characterTags: ["Bildung", "Klöster", "Krankenhaus"],
  },
  {
    slug: "edith-stein-viertel",
    imageKey: "district:edith-stein-viertel",
    name: "Edith-Stein-Viertel",
    shortDesc:
      "Ruhiges Quartier am westlichen Altstadtrand, benannt nach der Speyerer Lehrerin und Heiligen Edith Stein.",
    longDesc:
      "Das Edith-Stein-Viertel ist ein Wohnquartier am westlichen Rand der Kernstadt, benannt nach Edith Stein, die hier ab 1923 als Lehrerin am Lyzeum St. Magdalena wirkte. Kleinteilige Wohnbebauung, Nähe zur Altstadt und zum Klosterareal St. Magdalena machen das Quartier zur ruhigen Wohnadresse.",
    hue: 4,
    coordinates: [49.3145, 8.4282],
    characterTags: ["Wohnen", "Ruhig", "Altstadt-nah"],
  },
  {
    slug: "rheinhafen",
    imageKey: "district:rheinhafen",
    name: "Neuer Rheinhafen",
    shortDesc:
      "Modernes Quartier mit Hafen, neuen Wohnungen und Gewerbe am östlichen Stadtrand.",
    longDesc:
      'Der Neue Rheinhafen ist Speyers jüngstes Quartier. Aus dem reinen Gewerbestandort am Rhein wurde ein Mix aus Hafen-Logistik, modernen Wohnungen, Restaurants mit Wasserblick und Freizeitangeboten. Das Stadtfest "Brezelfest" hat hier einen wichtigen Standort, und Rheinkreuzfahrten legen in der Nähe an.',
    hue: 2,
    coordinates: [49.3253, 8.4541],
    characterTags: ["Hafen", "Modern", "Wasserlage"],
  },
  {
    slug: "erlach",
    imageKey: "district:erlach",
    name: "Erlach",
    shortDesc:
      "Wohn- und Gewerbegebiet östlich der Bundesstraße 9 - Industriestandort mit Stadtnähe.",
    longDesc:
      "Erlach liegt östlich der Bundesstraße 9 und ist ein gemischtes Quartier aus Gewerbeflächen, Logistik und Wohnen. Hier sind einige Speyerer Unternehmen ansässig, und die Lage an der B9 macht den Standort verkehrlich attraktiv.",
    hue: 5,
    coordinates: [49.3132, 8.4587],
    characterTags: ["Gewerbe", "Wohnen", "B9"],
  },
];

export const getDistrict = (slug: string) =>
  districts.find((d) => d.slug === slug);
