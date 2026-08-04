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
  brezelfest: {
    slug: "pretzel-festival",
    name: "Speyer Brezelfest",
    shortDesc:
      "The largest folk festival in the Palatinate: five days on the fairground, a street parade and the pretzel queen, always on the second weekend in July.",
    lead: "The Brezelfest is the largest heritage and folk festival in the Palatinate and the week when Speyer is in a state of happy emergency. It takes place on the second weekend in July, opens on the Thursday with the ceremonial beer tapping and runs on the fairground below the cathedral. The highlight is the street parade on Brezelfest Sunday at 1:30pm, when pretzels are thrown into the crowd.",
    termin: "Annually on the second weekend in July, starting Thursday",
  },
  altstadtfest: {
    slug: "old-town-festival",
    name: "Speyer Old Town Festival",
    shortDesc:
      "Two days of live music and food in the lanes of the old town: the 49th Altstadtfest runs on 11 and 12 September 2026.",
    lead: "The Altstadtfest is the festival where Speyer's residents and clubs take over the lanes of the old town themselves. The 49th edition runs on Friday 11 and Saturday 12 September 2026, with stages spread across the quarter around Maximilianstraße and the traditional duck race on the Speyerbach as the Saturday highlight.",
    termin: "11 and 12 September 2026",
  },
  herbstmesse: {
    slug: "autumn-fair",
    name: "Speyer Autumn Fair",
    shortDesc:
      "Ten days of funfair on the fairground below the cathedral: the 779th Speyerer Herbstmesse runs from 16 to 25 October 2026.",
    lead: "With its 779th edition, the Speyer Autumn Fair is one of the oldest funfairs in the region. From 16 to 25 October 2026 the showmen set up on the fairground below the cathedral, with a Ferris wheel, dodgems, ride attractions, beer gardens and food stalls seating around 600.",
    termin: "16 to 25 October 2026",
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
