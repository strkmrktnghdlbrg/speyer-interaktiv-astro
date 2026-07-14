/**
 * Englische Uebersetzungen der Kategorien, gekeyt nach deutschem slug.
 * Enthaelt den englischen slug + uebersetzte Felder (name, shortDesc).
 * Nicht uebersetzt: icon (bleibt aus dem Basis-Eintrag).
 */
export type CategoryEn = { slug: string; name: string; shortDesc: string };

export const categoriesEn: Record<string, CategoryEn> = {
  wahrzeichen: {
    slug: "landmarks",
    name: "Landmarks",
    shortDesc: "The iconic buildings of the cathedral city",
  },
  "unesco-welterbe": {
    slug: "unesco-world-heritage",
    name: "UNESCO World Heritage",
    shortDesc: "The Imperial Cathedral and the ShUM sites",
  },
  museen: {
    slug: "museums",
    name: "Museums",
    shortDesc: "Culture, history and technology",
  },
  kirchen: {
    slug: "churches",
    name: "Churches",
    shortDesc: "The cathedral, Holy Trinity, the Memorial Church and more",
  },
  "juedisches-erbe": {
    slug: "jewish-heritage",
    name: "Jewish Heritage",
    shortDesc: "The ShUM sites and the Museum SchPIRA",
  },
  mittelalter: {
    slug: "middle-ages",
    name: "Middle Ages",
    shortDesc: "The city wall, the Altpörtel gate and Salian history",
  },
  barock: {
    slug: "baroque",
    name: "Baroque",
    shortDesc: "The town hall, Holy Trinity Church and St. Magdalena convent",
  },
  parks: {
    slug: "parks-and-rhine",
    name: "Parks & the Rhine",
    shortDesc: "Green recreation by the water and outdoors",
  },
  familie: {
    slug: "family",
    name: "Family",
    shortDesc: "Speyer with kids: the Technik Museum, Sea Life, playgrounds",
  },
  shopping: {
    slug: "shopping",
    name: "Shopping",
    shortDesc: "The Maximilianstraße and the Old Town quarters",
  },
};
