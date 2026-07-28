/**
 * Englische Inhaltsdaten für die Sektion "guides" (Reiseplaner).
 * Gekeyt nach dem DEUTSCHEN slug. Struktur spiegelt guides.ts: Tage und Slots
 * in gleicher Reihenfolge. Zeit, Slot-Typ und Sight/Hotel/Restaurant-Referenzen
 * kommen aus dem Basis-Eintrag (per Index gemappt); hier nur uebersetzte Texte.
 */
export type GuideSlotEn = { title: string; description: string; tip?: string };
export type GuideDayEn = { title: string; intro: string; slots: GuideSlotEn[] };
export type GuideEn = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
  audience: string;
  bestSeason?: string;
  days: GuideDayEn[];
};

export const guidesEn: Record<string, GuideEn> = {
  "2-tage-speyer": {
    slug: "2-days-in-speyer",
    title: "2 Days in Speyer",
    shortDesc:
      "The perfect weekend trip: the Imperial Cathedral, the Maximilianstraße, the Jewish Courtyard, the Technik Museum and a glass of wine in a Palatinate tavern.",
    lead: "Two days are enough to read Speyer's layers: Romans, Salians, the Middle Ages, the Reformation, the Baroque and the modern era. This plan pairs the UNESCO highlights (the Imperial Cathedral and the ShUM Jewish Courtyard) with the Technik Museum as a second day's theme, and ends each day in a Palatinate wine tavern. The distances are short, because Speyer is compact.",
    audience: "First-time visitors",
    bestSeason: "April to October (the Altpörtel view and Adenauer Park are best outdoors)",
    days: [
      {
        title: "UNESCO World Heritage and the Old Town",
        intro: "The first day belongs to the cathedral and the Maximilianstraße. We start at the Altpörtel gate, walk the axis to the cathedral and dive into medieval Jewish Speyer in the afternoon.",
        slots: [
          {
            title: "Climb the Altpörtel gate",
            description:
              "Start at the station or on the Altpörtel square. Climb the 55-meter gate; from the top the Maximilianstraße runs dead straight toward the cathedral, giving you your first real sense of the city's layout.",
            tip: "Open April to October, Tue-Sun 10am-5pm. Admission under 2 euros. Wear sturdy shoes.",
          },
          {
            title: "The Maximilianstraße to the cathedral",
            description:
              "600 meters of old imperial road, today a pedestrian zone with cafés, confectioners, the town hall and ice-cream parlors. If you have time, step into Holy Trinity Church on the right: a wooden barrel vault from 1717.",
          },
          {
            title: "Lunch at the Domhof",
            description:
              "Right by the cathedral: a house brewery with a courtyard beer garden. Saumagen, liver dumplings or pork knuckle, with Domhof beer on tap. It does not get more classic than this.",
            tip: "Beer garden in summer, vaulted cellar in winter. A weekend reservation is a good idea.",
          },
          {
            title: "Imperial Cathedral: interior, crypt, tower",
            description:
              "Walk quietly through the interior and do not skip the crypt (the largest Romanesque pillared crypt, the burial place of eight emperors and kings). In summer, climb the southwest tower for a view over the Rhine to the Palatinate Forest.",
            tip: "Crypt access is via a separate staircase, admission free. The tower climb is paid and open only April to October.",
          },
          {
            title: "The Jewish Courtyard and Museum SchPIRA",
            description:
              "One minute from the cathedral into the Kleine Pfaffengasse: the remains of the medieval synagogue, the women's shul and the mikvah from 1128, one of the oldest surviving Jewish ritual baths in Europe. A UNESCO World Heritage Site since 2021.",
          },
          {
            title: "Dinner at Zum alten Engel",
            description:
              "In the historic vaulted cellar on Mühlturmstraße. A Palatinate menu (Saumagen, sausage, liver dumplings), a wine list of more than 60 local vintages and the atmosphere of a 300-year-old building.",
            tip: "An evening reservation is essential.",
          },
          {
            title: "Overnight at Hotel Goldener Engel",
            description:
              "A four-star town hotel on Mühlturmstraße, five minutes from the cathedral. Its own underground garage is a rarity in the Old Town and worth its weight in gold.",
          },
        ],
      },
      {
        title: "Technology, park and the Rhine",
        intro: "The second day brings a different world: the Technik Museum on the edge of town and a quiet afternoon in Adenauer Park and the harbor.",
        slots: [
          {
            title: "Technik Museum Speyer",
            description:
              "A walk-through Lufthansa Boeing 747, the submarine U9, the Soviet Buran space shuttle. One of the largest technology museums in Europe, for families and technology fans alike. Allow at least three hours.",
            tip: "The combined ticket with the sister museum in Sinsheim only pays off if you want to go there too. The IMAX dome is extra.",
          },
          {
            title: "Lunch at the hotel restaurant by the Technik Museum",
            description:
              "Right at the museum exit, with a hearty Palatinate menu and big portions for families. Unspectacular but practical.",
          },
          {
            title: "Adenauer Park and the city wall",
            description:
              "By bus or on foot (20 min) back toward the Old Town, following the medieval city wall along the western edge. Wall towers, a playground and lawns make a calm break after all the technology.",
          },
          {
            title: "Historical Museum of the Palatinate",
            description:
              "If you still have the energy: on the cathedral square, the Historical Museum with the Golden Hat (Bronze Age), the oldest wine bottles in the world (4th century) and the cathedral treasury. Its special exhibitions are worth a separate visit.",
            tip: "Last admission is usually an hour before closing, so check the schedule online first.",
          },
          {
            title: "Dinner by the Rhine at the Rheinblick",
            description:
              "To finish, head down to the Rhine and the harbor quarter. Fresh zander, sunset over the water and one last bottle of Palatinate wine.",
            tip: "Terrace seats in summer are only available with a reservation.",
          },
        ],
      },
    ],
  },
  "speyer-mit-kindern": {
    slug: "speyer-with-kids",
    title: "Speyer with Kids",
    shortDesc:
      "A family day plan: the Technik Museum, Sea Life and Adenauer Park - Speyer without the whining.",
    lead: "Speyer is surprisingly family-friendly if you get the order right. The Technik Museum (walk-through planes, a submarine), Sea Life with its shark tunnel, an ice-cream break on the Maximilianstraße and Adenauer Park in the evening to run off some energy. This plan works all year round.",
    audience: "Families",
    bestSeason: "year-round",
    days: [
      {
        title: "One day, three highlights",
        intro: "We make a loop: the Technik Museum in the morning, lunch in the Old Town, Sea Life in the afternoon and Adenauer Park in the evening.",
        slots: [
          {
            title: "Technik Museum Speyer",
            description:
              "Dive straight into the biggest family highlight: walk through a Boeing 747, climb aboard the submarine U9, sit in the cockpits of old locomotives. Three hours go by fast.",
            tip: "Buggy-friendly? The paths are paved. The IMAX dome can be booked separately - the 30-minute film is worth it for older kids.",
          },
          {
            title: "Lunch at Café Specht",
            description:
              "Family-friendly, big portions and house-made cakes for dessert. No kids' gimmicks, just relaxed and welcoming.",
          },
          {
            title: "Sea Life Speyer",
            description:
              "An aquarium at the old harbor basin. 30 tanks from a mountain stream to the open sea, a glass tunnel with sharks and rays, and a seahorse breeding station.",
            tip: "Online tickets are often cheaper.",
          },
          {
            title: "Adenauer Park to run off energy",
            description:
              "A playground with a climbing frame, the wall towers of the medieval city wall as a \"castle\" to play in, and lawns for a picnic. The last stop before heading home.",
          },
        ],
      },
    ],
  },
};
