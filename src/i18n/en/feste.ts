/**
 * Englische Inhaltsdaten für die Sektion "feste" (Festivals).
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
    name: "Speyer Christmas and New Year Market",
    shortDesc:
      "Seven weeks of cathedral-city glow: the Christmas and New Year market around the Imperial Cathedral, from 23 November 2026 to 10 January 2027.",
    lead: "Speyer runs one of the few German Christmas markets that stays open beyond New Year. In its 51st edition it runs from 23 November 2026 to 10 January 2027, with the stalls set out in the city centre in front of Europe's largest Romanesque church. Visitors arriving between Christmas and early January still find the market fully in place, long after most others have closed.",
    termin: "23 November 2026 to 10 January 2027",
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
