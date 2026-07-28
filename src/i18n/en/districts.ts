/**
 * Englische Inhaltsdaten für die Sektion "districts" (Stadtteile).
 * Gekeyt nach dem DEUTSCHEN slug. Nicht uebersetzt: hue, imageKey, coordinates.
 */
export type DistrictEn = {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  characterTags: string[];
};

export const districtsEn: Record<string, DistrictEn> = {
  altstadt: {
    slug: "old-town",
    name: "Old Town",
    shortDesc:
      "The historic core between the Imperial Cathedral, the Maximilianstraße and the Altpörtel gate. A UNESCO World Heritage Site and a lively downtown in one.",
    longDesc:
      "The Old Town, officially the city core, corresponds to the area within the medieval walls. This is where the cathedral, the Jewish Courtyard, the Historical Museum, Holy Trinity Church and the roughly 600-meter Maximilianstraße promenade are packed together. The Old Town is the tourist heart of Speyer and, at the same time, a residential and shopping quarter.",
    characterTags: ["UNESCO", "Touristy", "Maximilianstraße"],
  },
  nord: {
    slug: "speyer-nord",
    name: "Speyer-Nord",
    shortDesc:
      "A residential district north of the city core, with green recreation along the Rhine and the Russenweiher pond.",
    longDesc:
      "Speyer-Nord adjoins the Old Town to the north and is largely residential, stretching from the Rhine bank to the B9 highway. Green recreation at the Russenweiher pond, sports facilities and established neighborhoods define its character.",
    characterTags: ["Residential", "Rhine", "Green recreation"],
  },
  sued: {
    slug: "speyer-sued",
    name: "Speyer-Süd",
    shortDesc:
      "The south, with the Im Oberkämmerer, Neuland and Vogelgesang settlements - living and green recreation.",
    longDesc:
      "Speyer-Süd takes in the Im Oberkämmerer, Neuland and Vogelgesang settlements. It is mostly a single-family-home area with schools, sports grounds and the Vogelgesang as its green lung. Anyone looking for a quiet, family-friendly place to live in Speyer usually ends up here.",
    characterTags: ["Residential", "Families", "Vogelgesang"],
  },
  west: {
    slug: "speyer-west",
    name: "Speyer-West",
    shortDesc:
      "West of the railway line. Residential areas, schools and a connection to the A61 motorway.",
    longDesc:
      "Speyer-West lies west of the railway and is linked to the A61 motorway. The district combines housing with commercial areas, schools and sports. Many of those who work in Speyer live here.",
    characterTags: ["Residential", "Commercial", "A61"],
  },
  suedwest: {
    slug: "speyer-suedwest",
    name: "Speyer-Südwest",
    shortDesc:
      "A special-purpose area with a convent, a university, a hospital and sports facilities - the green education belt.",
    longDesc:
      "Speyer-Südwest is a special-purpose area to the west of the city core. It concentrates convent buildings (St. Magdalena), the German University of Administrative Sciences, the Diakonissen foundation hospital, the university of applied sciences and several sports facilities. Housing plays only a minor role here.",
    characterTags: ["Education", "Convents", "Hospital"],
  },
  "edith-stein-viertel": {
    slug: "edith-stein-quarter",
    name: "Edith Stein Quarter",
    shortDesc:
      "A quiet quarter on the western edge of the Old Town, named after the Speyer teacher and saint Edith Stein.",
    longDesc:
      "The Edith Stein Quarter is a residential area on the western edge of the city core, named after Edith Stein, who taught at the St. Magdalena lyceum here from 1923. Small-scale housing and its closeness to the Old Town and the St. Magdalena convent grounds make it a quiet place to live.",
    characterTags: ["Residential", "Quiet", "Near the Old Town"],
  },
  rheinhafen: {
    slug: "new-rhine-harbor",
    name: "New Rhine Harbor",
    shortDesc:
      "A modern quarter with a harbor, new housing and commerce on the eastern edge of town.",
    longDesc:
      "The New Rhine Harbor is Speyer's youngest quarter. A former purely commercial harbor site on the Rhine has become a mix of harbor logistics, modern apartments, restaurants with water views and leisure options. The Brezelfest festival has an important venue here, and Rhine cruises dock nearby.",
    characterTags: ["Harbor", "Modern", "Waterside"],
  },
  erlach: {
    slug: "erlach",
    name: "Erlach",
    shortDesc:
      "A residential and commercial area east of the B9 highway - an industrial location close to the city.",
    longDesc:
      "Erlach lies east of the B9 highway and is a mixed quarter of commercial areas, logistics and housing. Several Speyer companies are based here, and the location on the B9 makes it attractive for transport.",
    characterTags: ["Commercial", "Residential", "B9"],
  },
};
