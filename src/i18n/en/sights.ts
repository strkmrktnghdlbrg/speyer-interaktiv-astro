/**
 * Englische Inhaltsdaten für die Sektion "sights".
 * Gekeyt nach dem DEUTSCHEN slug (Sight.slug). Enthaelt den neuen englischen
 * Slug plus alle uebersetzten Felder. Nicht-uebersetzte Felder (Koordinaten,
 * Preise, imageKey, websiteUrl, categories ...) kommen aus dem Basis-Eintrag.
 */
export type SightEn = {
  slug: string;
  name: string;
  type: string;
  shortDesc: string;
  longDesc: string;
  openingHours?: string;
};

export const sightsEn: Record<string, SightEn> = {
  kaiserdom: {
    slug: "imperial-cathedral",
    name: "Speyer Imperial Cathedral",
    type: "Landmark",
    shortDesc:
      "The largest surviving Romanesque church in the world. A UNESCO World Heritage Site since 1981 and the burial place of Salian and Hohenstaufen emperors.",
    longDesc:
      "The Imperial Cathedral (officially the Cathedral of St. Mary and St. Stephen) was begun under Conrad II from 1030 and consecrated in 1061. Henry IV had it rebuilt again, and the result is the largest surviving Romanesque church anywhere in the world. The pillared crypt beneath the choir and transept is the biggest of its kind and holds the tombs of eight emperors and kings, among them Conrad II and Henry IV. It has been a UNESCO World Heritage Site since 1981. In summer you can climb the southwest tower and look out over the Rhine all the way to the Palatinate Forest.",
    openingHours: "Apr-Oct: Mon-Sat 9:00-19:00, Sun 11:30-17:30 · Nov-Mar: shorter hours",
  },
  altpoertel: {
    slug: "altpoertel-gate",
    name: "Altpörtel Gate",
    type: "Landmark",
    shortDesc:
      "One of the tallest surviving city gates in Germany. Standing 55 meters high, it is the landmark of the Maximilianstraße.",
    longDesc:
      "The Altpörtel is the western gate of Speyer's former city fortifications. Its base dates from the 13th century, while the upper section was added in the 15th and 16th centuries, which explains the striking mix of defensive tower and Renaissance gallery on top. At 55 meters, it ranks among the tallest city gates in Germany. From the viewing platform you look straight down the Maximilianstraße toward the cathedral, from one landmark to the other.",
    openingHours: "Apr-Oct: Tue-Sun 10:00-12:00, 14:00-17:00",
  },
  maximilianstrasse: {
    slug: "maximilianstrasse",
    name: "Maximilianstraße",
    type: "Landmark",
    shortDesc:
      "The 600-meter promenade running from the Altpörtel gate to the cathedral. Speyer's main artery since the Middle Ages.",
    longDesc:
      "The Maximilianstraße has been Speyer's central axis since the Middle Ages. Once the imperial road of the Diets and the route of coronation processions, today it is a pedestrian zone lined with cafés, shops, ice-cream parlors and the town hall. Start at the Altpörtel gate and walk straight toward the cathedral and you are literally covering 2,000 years of the city's history.",
  },
  judenhof: {
    slug: "jewish-courtyard-mikvah",
    name: "Jewish Courtyard with Mikvah",
    type: "Landmark",
    shortDesc:
      "A ShUM UNESCO World Heritage Site since 2021. A medieval Jewish sacred quarter with a mikvah from 1128, one of the oldest surviving ritual baths in Europe.",
    longDesc:
      "The Jewish Courtyard on the Kleine Pfaffengasse takes in the remains of the medieval synagogue, the women's shul and the famous mikvah, a Jewish ritual bath built around 1128 that reaches deep down to the groundwater. In the Middle Ages Speyer belonged to the ShUM alliance (Speyer, Worms and Mainz). Since 2021 the Speyer sites have been part of the UNESCO World Heritage listing \"The ShUM Sites\". In the adjacent Museum SchPIRA, finds from the medieval Jewish community are on display.",
    openingHours: "Tue-Sun 10:00-17:00 · closed Mon",
  },
  "historisches-museum-der-pfalz": {
    slug: "historical-museum-palatinate",
    name: "Historical Museum of the Palatinate",
    type: "Museum",
    shortDesc:
      "Right on the cathedral square. Home to the Golden Hat, the Palatinate Wine Treasure and major special exhibitions on antiquity and the Middle Ages.",
    longDesc:
      "The Historical Museum of the Palatinate on the cathedral square is one of the most important cultural-history museums in Germany. Highlights of the permanent collection include the Bronze Age \"Golden Hat of Schifferstadt\", the oldest wine bottles in the world (the Palatinate Wine Treasure, 4th century) and the cathedral treasury collection. Its major special exhibitions, recently on the Vikings, the Habsburgs and Richard the Lionheart, draw visitors from far beyond the region.",
    openingHours: "Tue-Sun 10:00-18:00 · closed Mon",
  },
  "technik-museum": {
    slug: "technik-museum",
    name: "Technik Museum Speyer",
    type: "Museum",
    shortDesc:
      "One of the largest technology museums in Europe. A Lufthansa jumbo jet, the submarine U9, the Soviet Buran space shuttle and an IMAX dome.",
    longDesc:
      "The Technik Museum Speyer is a crowd magnet that draws visitors from well beyond the region. You can walk through a Lufthansa Boeing 747 and climb inside the submarine U9. The highlight is the Soviet Buran space shuttle in the spaceflight hall, the only one on display outside Russia. There are also classic cars, locomotives, aircraft, an IMAX dome cinema and a combined ticket with its sister museum in Sinsheim.",
    openingHours: "Daily 9:00-18:00",
  },
  dreifaltigkeitskirche: {
    slug: "holy-trinity-church",
    name: "Holy Trinity Church",
    type: "Church",
    shortDesc:
      "A Baroque Protestant court church from 1717. Its richly painted wooden vault makes it one of the finest Baroque churches in the Palatinate.",
    longDesc:
      "The Holy Trinity Church was built between 1701 and 1717 as the main Protestant church after the French destruction of Speyer. Its barrel vault is executed entirely in wood and covered with detailed biblical picture programs, complemented by wooden galleries and a Baroque stucco ceiling. Along with the Church of the Holy Spirit in Heidelberg, it is regarded as the most important Protestant Baroque church in the Palatinate.",
    openingHours: "Apr-Oct: Mon-Sat 10:00-17:00, Sun 11:30-17:00",
  },
  gedaechtniskirche: {
    slug: "memorial-church",
    name: "Memorial Church of the Protestation",
    type: "Church",
    shortDesc:
      "A neo-Gothic church from 1904 commemorating the Protestation of the Protestant estates at the 1529 Diet of Speyer.",
    longDesc:
      "The Memorial Church was built between 1893 and 1904 to commemorate the \"Speyer Protestation\" of 1529, the moment that gave rise to the term \"Protestants\". The neo-Gothic building, with a tower 100 meters tall, is Speyer's highest church after the cathedral and stands one minute from the Altpörtel gate. Stained-glass windows and reliefs tell the story of the Reformation.",
    openingHours: "Apr-Oct: daily 10:00-18:00",
  },
  "alte-muenze": {
    slug: "old-mint",
    name: "Old Mint",
    type: "Landmark",
    shortDesc:
      "A medieval mint house on the Korngasse, one of the few Speyer buildings to survive the destruction of the city in 1689.",
    longDesc:
      "The Old Mint on the Korngasse dates from the 14th century and is one of the few buildings to survive the devastation of Speyer by French troops in 1689 almost unscathed. Speyer coins were struck here in the Middle Ages; later the building served as a residence. Privately owned today, it remains an impressive example of late-medieval townhouse architecture when seen from the street.",
  },
  rathaus: {
    slug: "town-hall",
    name: "Town Hall",
    type: "Landmark",
    shortDesc:
      "The Baroque town hall on the Maximilianstraße, built between 1712 and 1726 after the destruction of the city in 1689.",
    longDesc:
      "Speyer's town hall on the Maximilianstraße was built between 1712 and 1726 to plans by Johann Adam Breunig, after the original city had been burned down by French troops during the War of the Palatine Succession in 1689. The Baroque building with its distinctive mansard roof shapes the streetscape and remains the seat of the city administration and the meeting place of the city council to this day.",
  },
  adenauerpark: {
    slug: "adenauer-park",
    name: "Adenauer Park & Medieval City Wall",
    type: "Park",
    shortDesc:
      "A city park on the western edge of the Old Town with the longest surviving stretch of the medieval city wall.",
    longDesc:
      "Adenauer Park runs along the longest surviving section of Speyer's medieval fortifications. Where a rampart walk and defensive towers once protected the townspeople, a shady footpath now leads through the greenery. A playground, lawns and a few remaining wall towers make the park a quiet break from the bustle of the Old Town.",
  },
  rheinstrand: {
    slug: "rhine-beach",
    name: "Rheinstrand Speyer",
    type: "Leisure",
    shortDesc:
      "Beach bar at the southern end of the Speyer riverside promenade: more than 1,500 square metres of deckchairs, hammocks and lounge seating right by the water.",
    longDesc:
      "The Rheinstrand is Speyer's beach bar, set at the southern end of the riverside promenade behind the Bademaxx swimming pool. The operator gives its size as more than 1,500 square metres, laid out with deckchairs, hammocks and lounge groups facing the shipping lane. It is a summer operation and weather dependent, opening daily from noon in season. Swimming in the Rhine is dangerous here because of the current, the suction of passing freighters and commercial traffic, and is prohibited along much of the bank, so the adjacent Bademaxx pool is the safe alternative. Half a kilometre upstream, at Leinpfad 1c, the Alter Hammer has been serving since 1919 and is the oldest beer garden in town, open daily from 11am with a full kitchen.",
    openingHours: "In season daily from 12:00",
  },
  fischertor: {
    slug: "fishermens-gate",
    name: "Fishermen's Gate",
    type: "Landmark",
    shortDesc:
      "The last surviving Rhine gate of the medieval city wall, marking the way to the old fishing quarter and the river.",
    longDesc:
      "The Fishermen's Gate was one of several Rhine gates in the medieval fortifications and is the only one still standing. It marks the transition from the cathedral quarter to the former Hasenpfuhl, the old fishing district right on the Rhine. With its plain defensive form and Romanesque lines, it makes a fine starting point for a walk along the river.",
  },
  "kloster-st-magdalena": {
    slug: "convent-st-magdalena",
    name: "Convent of St. Magdalena",
    type: "Church",
    shortDesc:
      "A Baroque Carmelite convent in the Edith Stein quarter, where the philosopher and saint Edith Stein worked from 1923 to 1931.",
    longDesc:
      "The Carmelite Convent of St. Magdalena southwest of the Old Town is an 18th-century complex with a Baroque convent church. It became famous through Edith Stein, who taught here at the attached lyceum from 1923 to 1931 before becoming a Carmelite herself. The Edith Stein memorial and the convent shop are open to the public; the enclosed cloister area is not.",
  },
  "sea-life": {
    slug: "sea-life",
    name: "Sea Life Speyer",
    type: "Museum",
    shortDesc:
      "An aquarium by the old harbor basin with around 30 tanks: Rhine fish, a deep-sea shark tunnel and a seahorse breeding station.",
    longDesc:
      "Sea Life Speyer sits by the old harbor basin between the Old Town and the Rhine. Its theme is the journey from a mountain stream down the Rhine and North Sea to the open ocean. The glass tunnel with sharks and rays is a family favorite, while the seahorse breeding station is an international research focus.",
    openingHours: "Daily 10:00-17:00 (until 18:00 in summer)",
  },
  "pfaelzische-landesbibliothek": {
    slug: "palatinate-state-library",
    name: "Palatinate State Library",
    type: "Museum",
    shortDesc:
      "An academic regional library with a Palatinate focus. A reading room in modern architecture, free to enter.",
    longDesc:
      "The Palatinate State Library is the academic regional library of the Palatinate, with a focus on Palatinate history, the Reformation and wine. The modern building on Otto-Mayer-Straße is open to the public during the day, and even without doing research the reading room is worth a look as a quiet place to pause.",
    openingHours: "Mon-Fri 9:00-19:00, Sat 9:00-13:00",
  },
};
