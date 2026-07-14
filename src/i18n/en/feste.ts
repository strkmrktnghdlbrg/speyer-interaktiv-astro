/**
 * Englische Inhaltsdaten fuer die Sektion "feste" (Festivals).
 * Gekeyt nach dem DEUTSCHEN slug. Nicht uebersetzt: imageKey, imageHue,
 * websiteUrl, district.
 */
export type FestEn = {
  slug: string;
  name: string;
  shortDesc: string;
  lead: string;
  termin: string;
};

export const festeEn: Record<string, FestEn> = {
  weihnachtsmarkt: {
    slug: "christmas-market",
    name: "Speyer Old German Christmas Market",
    shortDesc:
      "Four weeks of cathedral-city glow: the Old German Christmas market in front of the Maximilianstraße, with a Ferris wheel, Domhof mulled wine and a nativity trail.",
    lead: "The Speyer Christmas market is one of the most tradition-rich in the Palatinate. From late November until just before Christmas Eve, the stalls stand between the Altpörtel gate and the cathedral, the Ferris wheel in the cathedral garden offers a rare view of the illuminated Imperial Cathedral, and a nativity trail runs through several churches at the same time.",
    termin: "Late November to December 23 (annually)",
  },
  fastnacht: {
    slug: "carnival",
    name: "Speyer Carnival",
    shortDesc:
      "Palatinate carnival between the cathedral square and the Maximilianstraße: a parade, comic sessions and the Shrove Tuesday burning.",
    lead: "Speyer's carnival is part of the tradition-rich Palatinate carnival culture. From November 11 to Ash Wednesday, carnival Speyer organizes itself into clubs and session evenings. The highlight is the carnival Sunday parade through the city center - Palatinate wit rather than the Cologne carnival industry.",
    termin: "November 11 to Ash Wednesday (main season February/March)",
  },
};
