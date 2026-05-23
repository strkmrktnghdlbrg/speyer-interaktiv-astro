export type Category = {
  slug: string;
  name: string;
  shortDesc: string;
  icon: string;
};

export const categories: Category[] = [
  { slug: "wahrzeichen", name: "Wahrzeichen", shortDesc: "Die ikonischen Bauten der Domstadt", icon: "landmark" },
  { slug: "unesco-welterbe", name: "UNESCO-Welterbe", shortDesc: "Kaiserdom und SchUM-Stätten", icon: "globe" },
  { slug: "museen", name: "Museen", shortDesc: "Kultur, Geschichte und Technik", icon: "museum" },
  { slug: "kirchen", name: "Kirchen", shortDesc: "Dom, Dreifaltigkeit, Gedächtniskirche und mehr", icon: "church" },
  { slug: "juedisches-erbe", name: "Jüdisches Erbe", shortDesc: "SchUM-Stätten und Museum SchPIRA", icon: "star-of-david" },
  { slug: "mittelalter", name: "Mittelalter", shortDesc: "Stadtmauer, Altpörtel, Salier-Geschichte", icon: "castle" },
  { slug: "barock", name: "Barock", shortDesc: "Rathaus, Dreifaltigkeitskirche, Kloster St. Magdalena", icon: "crown" },
  { slug: "parks", name: "Parks & Rhein", shortDesc: "Naherholung am Wasser und im Grünen", icon: "tree" },
  { slug: "familie", name: "Familie", shortDesc: "Mit Kindern in Speyer: Technik Museum, Sea Life, Spielplätze", icon: "family" },
  { slug: "shopping", name: "Shopping", shortDesc: "Maximilianstraße und Altstadt-Quartiere", icon: "shopping" },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
