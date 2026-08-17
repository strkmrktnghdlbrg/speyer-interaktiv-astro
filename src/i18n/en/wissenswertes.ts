/**
 * Englische Metadaten der Wissenswertes-Artikel, gekeyt nach dem DEUTSCHEN
 * slug (wie sights/districts/guides). Volltexte liegen als Markdown in
 * src/content/wissenswertes-en/<de-slug>.md.
 *
 * fahrzeugbeschriftung-marketingkanal fehlt hier BEWUSST: bezahlter
 * Gastartikel mit Kundenlink, beauftragt war nur die deutsche Seite.
 */
export type WissenEn = {
  slug: string;
  title: string;
  shortDesc: string;
  lead: string;
};

export const wissenEn: Record<string, WissenEn> = {
  "roemisches-speyer": {
    slug: "roman-speyer",
    title: "Roman Speyer - the Beginnings on the Rhine",
    shortDesc:
      "From the military camp of Noviomagus to a Roman civitas: Speyer's beginnings as a major settlement on the Rhine.",
    lead: "Long before the Salians built the cathedral, Speyer was a Roman settlement. Noviomagus, later Civitas Nemetum, lay strategically on the Rhine and grew from a military camp into a civilian town with trade and administration. Finds across the city bear witness to this era to this day.",
  },
  "mittelalterliches-speyer": {
    slug: "medieval-speyer",
    title: "Medieval Speyer - Imperial City of the Emperors",
    shortDesc:
      "Salians, imperial diets, witch trials: Speyer as one of the most important cities of the Holy Roman Empire.",
    lead: "In the Middle Ages Speyer became a bishop's see, a free imperial city and the meeting place of major imperial diets. In 1529 the Protestation of the Protestant estates was formulated here, giving Protestantism its name. The cathedral, as the burial place of the emperors, made Speyer the Caput Sedis - the head of the Empire.",
  },
  reformation: {
    slug: "reformation-era",
    title: "Speyer and the Age of the Reformation",
    shortDesc:
      "The Diet of 1526 and the Protestation of 1529: how Speyer gave Protestantism its name.",
    lead: "At the Diet of 1529, six Protestant princes and fourteen imperial cities protested against the resolutions of the Catholic majority. The term Protestants was born from this Protestation of Speyer. The Memorial Church, completed in 1904, commemorates the event to this day.",
  },
  "dreissigjaehriger-krieg": {
    slug: "thirty-years-war",
    title: "Speyer in the Thirty Years' War",
    shortDesc:
      "Sieges, confessional conflict, population collapse: Speyer in the catastrophe of 1618-1648.",
    lead: "The Thirty Years' War struck Speyer repeatedly - through troop movements, sieges and religious tensions. Population and economy collapsed, and the city needed decades to recover. Then came the second catastrophe: the almost complete destruction of 1689 by French troops.",
  },
  salier: {
    slug: "salian-emperors",
    title: "The Salians - Speyer's Imperial Dynasty",
    shortDesc:
      "Conrad II, Henry III, Henry IV, Henry V: four Salian emperors who shaped Speyer and the Empire.",
    lead: "The Salians were the ruling dynasty of the Holy Roman Empire between 1024 and 1125. Conrad II began the cathedral, Henry IV carried it to completion. All four Salian emperors found their final resting place in the crypt of Speyer Cathedral - which remains a symbol of medieval imperial power to this day.",
  },
  hexenverfolgung: {
    slug: "witch-trials",
    title: "The Witch Trials in Speyer",
    shortDesc:
      "In the 16th and 17th centuries, women in Speyer too were convicted of alleged witchcraft and executed.",
    lead: "The witch hunts of the early modern period reached Speyer as well. Especially in the 16th and 17th centuries there were trials in which mostly women confessed under torture and were then executed. In recent decades, historical research has begun to reconstruct their fates.",
  },
  baukunst: {
    slug: "architecture",
    title: "The Architecture of Speyer",
    shortDesc:
      "From the Romanesque cathedral to Baroque townhouses and the neo-Gothic Memorial Church - 1,000 years of architecture.",
    lead: "Speyer's building history spans an arc from the High Romanesque architecture of the cathedral through the Baroque reconstruction after 1689 to the historicist Memorial Church and the modern buildings at the Rhine harbor. Walking through the city, you read off the centuries.",
  },
  "archaeologische-funde": {
    slug: "archaeological-finds",
    title: "Archaeological Finds in Speyer",
    shortDesc:
      "From a Neolithic skeleton to a Celtic princely grave: what the earth beneath Speyer keeps revealing.",
    lead: "The city archaeology of Speyer has made impressive finds over the past decades - from Bronze Age burials and Roman graves to medieval city fortifications. The Archaeological Window in the city center presents a selection to the public.",
  },
  kulturerbe: {
    slug: "unesco-world-heritage",
    title: "Speyer's Cultural Heritage - UNESCO and More",
    shortDesc:
      "Twice UNESCO: the Imperial Cathedral since 1981, the ShUM sites since 2021 - and what both mean for the city.",
    lead: "Speyer holds two UNESCO World Heritage titles: the Imperial Cathedral since 1981 and the ShUM sites (Speyer-Worms-Mainz) since 2021. Both distinctions shape the city's identity and attract an international audience.",
  },
  "zeppelin-landung": {
    slug: "zeppelin-landing",
    title: "The Landing of Count Zeppelin's Airship in Speyer",
    shortDesc:
      "A landmark event of early aviation: the Zeppelin landing in Speyer and what it meant for the city.",
    lead: "Speyer was the scene of one of the early spectacular Zeppelin landings. The event stayed in the city's memory and today connects thematically with the nearby Technik Museum and its historic aviation exhibits.",
  },
  kriegsdenkmaeler: {
    slug: "war-memorials",
    title: "War Memorials in Speyer",
    shortDesc:
      "How Speyer remembers the victims of the wars - and how the treatment of memorials has changed over the decades.",
    lead: "Several memorials in Speyer commemorate the victims of the great wars of the 19th and 20th centuries. The selection, design and understanding of these places of remembrance have shifted across the generations - from a heroic to an admonitory gesture.",
  },
  "historische-gasthaeuser": {
    slug: "historic-inns",
    title: "Historic Inns in Speyer",
    shortDesc:
      "Where emperors and bishops once stopped for the night: Speyer's historic inn tradition and what survives of it.",
    lead: "Speyer's inns carry centuries of history. Some of the historic addresses still exist today, others have vanished. A short tour through the culinary and social history of the city.",
  },
  "bim-speyer-zukunft": {
    slug: "building-information-modeling",
    title: "BIM - Building Information Modeling in Speyer",
    shortDesc:
      "How modern 3D modeling helps preserve historic buildings and plan new quarters.",
    lead: "Building Information Modeling (BIM) is changing construction worldwide. In Speyer the method is especially interesting because it combines the digital documentation of historic fabric with the planning of modern extensions - a bridge between World Heritage and the future.",
  },
  "makler-beauftragen": {
    slug: "real-estate-agent",
    title: "Why You Should Hire a Real Estate Agent",
    shortDesc:
      "A guide to the property market: when hiring an agent in Speyer and the Palatinate pays off.",
    lead: "The property market in Speyer is smaller than in the big cities, but just as demanding. This guide explains when going to an agent makes sense and what to look for when choosing one.",
  },
  hochzeitsplanung: {
    slug: "wedding-planning",
    title: "Wedding Planning in Speyer",
    shortDesc:
      "Where to get married in Speyer, from the cathedral to the convent - and what to consider when planning.",
    lead: "As a wedding city, Speyer is surprisingly versatile - from the cathedral and Holy Trinity Church to the convent chapel of St. Magdalena, there are atmospheric wedding venues. This guide walks through the main options and planning steps.",
  },
};
