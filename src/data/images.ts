/**
 * Central Image Registry
 * ----------------------
 * Astro 5 verwendet astro:assets für alle Entity-Bilder. Bilder werden
 * via import.meta.glob aus src/assets/images/{sights,districts}/ geladen,
 * von astro:assets zu WebP/AVIF konvertiert und in responsiven Varianten
 * ausgespielt.
 *
 * Phase 1 für Speyer: Asset-Folder noch leer. Solange keine Bilder
 * gepflegt sind, gibt getImage() undefined zurück und ContentImage
 * fällt automatisch auf den HueGradient zurück.
 *
 * Bilder-Workflow siehe CITY-PORTAL-PLAYBOOK.md Sektion 5b:
 * Wikimedia-Recherche → 1600x1200 (4:3) Normalisierung → in
 * src/assets/images/sights/ bzw. /districts/ ablegen → Eintrag
 * im `images`-Record unten mit asset("...","<slug>") + Credit.
 *
 * Lizenz-Disziplin:
 * - Wikimedia/Unsplash/Pexels → Caption mit Autor + Lizenz + Quellen-Link Pflicht
 * - Eigene Bilder → kein credit-Block notwendig, aber alt-Text Pflicht
 */

import type { ImageMetadata } from "astro";

export type ImageSource = "wikimedia" | "unsplash" | "pexels" | "own" | "manufacturer";

export type Credit = {
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
};

export type ImageEntry = {
  src: ImageMetadata;
  alt: string;
  source: ImageSource;
  credit?: Credit;
  /**
   * true = generisches Stock-Foto (Unsplash/Pexels), das nur den Stil/die
   * Kategorie zeigt, NICHT das tatsächliche Gebäude/die tatsächliche Location.
   * ContentImage zeigt in dem Fall zusätzlich ein "Symbolbild"-Badge.
   */
  illustrative?: boolean;
};

// Bulk-Import aller Asset-Bilder (eager: true damit zur Build-Zeit aufgelöst)
const sightModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/sights/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);
const districtModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/districts/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);
const hotelModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/hotels/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);
const restaurantModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/restaurants/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);
const festModules = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/feste/*.{jpg,JPG,jpeg,png,webp}",
  { eager: true }
);

const folderModules = {
  sights: sightModules,
  districts: districtModules,
  hotels: hotelModules,
  restaurants: restaurantModules,
  feste: festModules,
} as const;

/**
 * Returns the resolved ImageMetadata, or undefined if the asset file
 * is missing. ContentImage rendert in dem Fall den HueGradient-Fallback.
 */
function asset(folder: keyof typeof folderModules, slug: string): ImageMetadata | undefined {
  const modules = folderModules[folder];
  const match = Object.entries(modules).find(([path]) =>
    path.match(new RegExp(`/${slug}\\.(jpg|JPG|jpeg|png|webp)$`))
  );
  return match?.[1].default;
}

/**
 * Speyer-Bildregistry — Phase 1 leer. Hier nachpflegen, sobald
 * Wikimedia-Recherche pro Sight/District abgeschlossen ist.
 *
 * Vorlage:
 *
 *   "sight:kaiserdom": {
 *     src: asset("sights", "kaiserdom")!,
 *     alt: "Speyerer Kaiserdom, Westfassade mit beiden Türmen",
 *     source: "wikimedia",
 *     credit: {
 *       author: "Foto-Autor",
 *       license: "CC BY-SA 4.0",
 *       licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
 *       sourceUrl: "https://commons.wikimedia.org/wiki/File:...",
 *     },
 *   },
 */
export const images: Record<string, ImageEntry> = {
  // === SEHENSWÜRDIGKEITEN ===
  "sight:kaiserdom": {
    src: asset("sights", "kaiserdom")!,
    alt: "Speyerer Kaiserdom, Außenansicht mit Vierungsturm und beiden Westtürmen",
    source: "wikimedia",
    credit: {
      author: "Sail over",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_dom_11.jpg",
    },
  },
  "sight:altpoertel": {
    src: asset("sights", "altpoertel")!,
    alt: "Altpörtel in Speyer, Stadttor mit Glockenstuhl von der Maximilianstraße aus",
    source: "wikimedia",
    credit: {
      author: "Rigorius",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_Altpoertel_Glockenstuhl_20240330_124917.jpg",
    },
  },
  "sight:maximilianstrasse": {
    src: asset("sights", "maximilianstrasse")!,
    alt: "Maximilianstraße in Speyer, Blickachse zum Dom",
    source: "wikimedia",
    credit: {
      author: "PQ3",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Maximilianstra%C3%9FeSpeyer.jpg",
    },
  },
  "sight:judenhof": {
    src: asset("sights", "judenhof")!,
    alt: "Judenhof in Speyer, mittelalterlicher SchUM-Hof mit Mikwe-Eingang",
    source: "wikimedia",
    credit: {
      author: "Sundar1",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:SpeyerJudenhof.JPG",
    },
  },
  "sight:historisches-museum-der-pfalz": {
    src: asset("sights", "historisches-museum-der-pfalz")!,
    alt: "Historisches Museum der Pfalz in Speyer, Hauptfassade",
    source: "wikimedia",
    credit: {
      author: "Altera levatur",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer,_Museum_der_Pfalz.JPG",
    },
  },
  "sight:technik-museum": {
    src: asset("sights", "technik-museum")!,
    alt: "Technik Museum Speyer, Boeing 747 als Außenexponat über der Liller Halle",
    source: "wikimedia",
    credit: {
      author: "Triple-green",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Boeing_747_%C3%BCber_Liller_Halle_(37024522593).jpg",
    },
  },
  "sight:dreifaltigkeitskirche": {
    src: asset("sights", "dreifaltigkeitskirche")!,
    alt: "Dreifaltigkeitskirche in Speyer, Barockfassade an der Großen Himmelsgasse",
    source: "wikimedia",
    credit: {
      author: "Friedrich Haag",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_Gro%C3%9Fe_Himmelsgasse_4_002_2021_02_26.jpg",
    },
  },
  "sight:gedaechtniskirche": {
    src: asset("sights", "gedaechtniskirche")!,
    alt: "Gedächtniskirche der Protestation in Speyer, neugotischer Turm",
    source: "wikimedia",
    credit: {
      author: "Gerd Eichmann",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer-08-Gedaechtniskirche-gje.jpg",
    },
  },
  "sight:alte-muenze": {
    src: asset("sights", "alte-muenze")!,
    alt: "Alte Münze in Speyer, historisches Münzgebäude an der Maximilianstraße",
    source: "wikimedia",
    credit: {
      author: "Grossbildjaeger",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Alte_M%C3%BCnze_Speyer_Deutschland.jpg",
    },
  },
  "sight:rathaus": {
    src: asset("sights", "rathaus")!,
    alt: "Historisches Rathaus in Speyer bei Nacht, beleuchtete Barockfassade",
    source: "wikimedia",
    credit: {
      author: "Immanuel Giel",
      license: "Public Domain",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rathaus_Speyer_Nacht.jpg",
    },
  },
  "sight:adenauerpark": {
    src: asset("sights", "adenauerpark")!,
    alt: "Adenauerpark in Speyer, Wegführung im Park entlang der Stadtmauer",
    source: "wikimedia",
    credit: {
      author: "Z thomas",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Adenauerpark_Speyer_2020-08-29_1.jpg",
    },
  },
  "sight:fischertor": {
    src: asset("sights", "fischertor")!,
    alt: "Hasenpfuhl in Speyer beim Altstadtfest, historisches Fischerquartier am ehemaligen Fischertor",
    source: "wikimedia",
    credit: {
      author: "Kmtextor",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Altstadtfest_speyer_hasenpfuhl.jpg",
    },
  },
  "sight:kloster-st-magdalena": {
    src: asset("sights", "kloster-st-magdalena")!,
    alt: "Kloster St. Magdalena in Speyer, Portal in der Hasenpfuhlstraße",
    source: "wikimedia",
    credit: {
      author: "Manuae",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hasenpfuhlstrasse_32_Portal_Speyer_a.jpg",
    },
  },
  // sight:sea-life — keine freilizenzierte Außenaufnahme verfügbar (verfügbare Innenaufnahmen <1024px, MS Sea Life ist ein Schiff anderen Bezugs), HueGradient-Fallback aktiv
  "sight:pfaelzische-landesbibliothek": {
    src: asset("sights", "pfaelzische-landesbibliothek")!,
    alt: "Pfälzische Landesbibliothek in Speyer, moderner Bibliotheksbau",
    source: "wikimedia",
    credit: {
      author: "3268zauber",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_Labi.JPG",
    },
  },

  // === STADTTEILE ===
  "district:altstadt": {
    src: asset("districts", "altstadt")!,
    alt: "Speyerer Altstadt vom Altpörtel aus, Blick über die Maximilianstraße zur Domfassade in Abendsonne",
    source: "wikimedia",
    credit: {
      author: "Roman Eisele",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_-_Altstadt_-_Altp%C3%B6rtel_-_Blick_auf_Domfassade_und_Kircht%C3%BCrme_mit_Abendsonne.jpg",
    },
  },
  "district:nord": {
    src: asset("districts", "nord")!,
    alt: "Stadtteil Speyer-Nord, Pfarrkirche St. Konrad von Südwesten",
    source: "wikimedia",
    credit: {
      author: "Claus Ableiter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:St._Konrad_(Speyer)_S%C3%BCdwestansicht.JPG",
    },
  },
  "district:sued": {
    src: asset("districts", "sued")!,
    alt: "Hasenpfuhl-Quartier in Speyer-Süd an der Sonnenbrücke, Fachwerkhäuser im historischen Fischerviertel",
    source: "wikimedia",
    credit: {
      author: "Sundar1",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:SpeyerHasenpfuhl1.JPG",
    },
  },
  "district:west": {
    src: asset("districts", "west")!,
    alt: "Stadtteil Speyer-West, Burgfeldschule von Südosten",
    source: "wikimedia",
    credit: {
      author: "Claus Ableiter",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Burgfeldschule_Speyer_von_S%C3%BCdosten.jpg",
    },
  },
  "district:suedwest": {
    src: asset("districts", "suedwest")!,
    alt: "Mutterhaus der Diakonissenanstalt in Speyer-Südwest, denkmalgeschützter Backsteinbau an der Hilgardstraße",
    source: "wikimedia",
    credit: {
      author: "Klaus Landry",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Mutterhaus_Diakonissenanstalt_Speyer.jpg",
    },
  },
  "district:edith-stein-viertel": {
    src: asset("districts", "edith-stein-viertel")!,
    alt: "Edith-Stein-Viertel in Speyer, Skulptur und Gedenkstätte für Edith Stein",
    source: "wikimedia",
    credit: {
      author: "Immanuel Giel",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Edith_Stein_(Speyer)_(4).jpg",
    },
  },
  "district:rheinhafen": {
    src: asset("districts", "rheinhafen")!,
    alt: "Rheinhafen in Speyer im Herbst, Hafenbecken mit Schiffen",
    source: "wikimedia",
    credit: {
      author: "Kmtextor",
      license: "CC BY 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_Hafen_Herbst.jpg",
    },
  },
  // district:erlach — kein freilizenziertes Foto gefunden, HueGradient-Fallback aktiv

  // === HOTELS ===
  // 2 von 8 Hotels haben ein echtes Wikimedia-Foto des Gebäudes. Für die
  // übrigen 6 (keine Wikimedia-Abdeckung gefunden) siehe Symbolbild-Sektion
  // weiter unten — dort explizit als Illustrationsfoto gekennzeichnet.
  "hotel:hotel-domhof": {
    src: asset("hotels", "hotel-domhof")!,
    alt: "Hotel Domhof in Speyer, Fachwerk-Fassade und Innenhof-Biergarten am Bauhof",
    source: "wikimedia",
    credit: {
      author: "GFreihalter",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_Hotel_Domhof_981.jpg",
    },
  },
  "hotel:lindner-hotel-spa-binshof": {
    src: asset("hotels", "lindner-hotel-spa-binshof")!,
    alt: "Lindner Hotel & Spa Binshof in Speyer, Außenansicht des Wellness-Resorts",
    source: "wikimedia",
    credit: {
      author: "Lindner Hotels",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lindner_Hotel_Binshof.jpg",
    },
  },

  // === RESTAURANTS ===
  // 5 von 10 Restaurants haben ein echtes Wikimedia-Foto des Gebäudes. Für
  // die übrigen 5 siehe Symbolbild-Sektion weiter unten.
  "restaurant:backmulde": {
    src: asset("restaurants", "backmulde")!,
    alt: "Historisches Gebäude in der Karmeliterstraße in Speyer, Standort der Backmulde",
    source: "wikimedia",
    credit: {
      author: "Manuae",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Karmeliterstrasse_13_Speyer.jpg",
    },
  },
  "restaurant:domhof-hausbrauerei": {
    src: asset("restaurants", "domhof-hausbrauerei")!,
    alt: "Domhof Hausbrauerei in Speyer, Außenansicht mit Biergarten am Bauhof",
    source: "wikimedia",
    credit: {
      author: "fotogoocom",
      license: "CC BY 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Domhof_Hausbrauerei_in_Speyer_-_panoramio.jpg",
    },
  },
  "restaurant:wirtschaft-zum-halbmond": {
    src: asset("restaurants", "wirtschaft-zum-halbmond")!,
    alt: "Fachwerkhaus Halbmond in der Speyerer Sonnengasse, Standort der Wirtschaft zum Halbmond",
    source: "wikimedia",
    credit: {
      author: "Franzfoto",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Speyer_-_Sonnengasse_mit_Fachwerkhaus_Halbmond.jpg",
    },
  },
  "restaurant:ratskeller-speyer": {
    src: asset("restaurants", "ratskeller-speyer")!,
    alt: "Historisches Rathaus in Speyer an der Maximilianstraße, im Untergeschoss der Ratskeller",
    source: "wikimedia",
    credit: {
      author: "José Luiz",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Rathaus_-_Maximilianstra%C3%9Fe_-_Speyer_-_Germany_2017.jpg",
    },
  },
  "restaurant:lindner-restaurant-binshof": {
    // Gleiches Gebäude wie hotel:lindner-hotel-spa-binshof, kein separates Innenfoto verfügbar
    src: asset("hotels", "lindner-hotel-spa-binshof")!,
    alt: "Lindner Hotel & Spa Binshof in Speyer, Gebäude mit dem hoteleigenen Restaurant",
    source: "wikimedia",
    credit: {
      author: "Lindner Hotels",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Lindner_Hotel_Binshof.jpg",
    },
  },

  // === FESTE ===
  // Nur Weihnachtsmarkt hat ein verifiziertes freilizenziertes Foto;
  // für Fastnacht existiert keine passende Commons-Aufnahme, HueGradient-Fallback aktiv.
  "fest:weihnachtsmarkt": {
    src: asset("feste", "weihnachtsmarkt")!,
    alt: "Speyerer Weihnachtsmarkt, beleuchtete Verkaufsstände in der Altstadt",
    source: "wikimedia",
    credit: {
      author: "Sundar1",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:SPWeihnachtsmN.JPG",
    },
  },
  // fest:fastnacht — keine Aufnahme der echten Speyerer Fastnacht auf Wikimedia
  // verfügbar. Symbolbild (Karnevalsumzug, nicht Speyer-spezifisch).
  "fest:fastnacht": {
    src: asset("feste", "fastnacht")!,
    alt: "Symbolbild: Karnevalsumzug mit Kostümen und Konfetti (Illustrationsfoto, nicht die tatsächliche Speyerer Fastnacht)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Irene Wahl",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/a-parade-with-people-dressed-in-costumes-and-a-gold-fish-20331958/",
    },
  },

  // === HOTELS OHNE WIKIMEDIA-FOTO: SYMBOLBILDER ===
  // Keine Wikimedia-Abdeckung für diese 6 Hotels gefunden (siehe Recherche-
  // Historie). Generische, freilizenzierte Stock-Fotos passend zu Kategorie/
  // Sterne-Klasse — zeigen NICHT das tatsächliche Gebäude/Zimmer.
  "hotel:hotel-goldener-engel": {
    src: asset("hotels", "hotel-goldener-engel")!,
    alt: "Symbolbild: elegantes historisches Hotelzimmer (Illustrationsfoto, nicht das tatsächliche Zimmer)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Maria Orlova",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/vintage-interior-of-cozy-room-in-hotel-4906520/",
    },
  },
  "hotel:best-western-plus-hotel-domus": {
    src: asset("hotels", "best-western-plus-hotel-domus")!,
    alt: "Symbolbild: moderner Wellness-/Spa-Bereich (Illustrationsfoto, nicht der tatsächliche Wellness-Bereich)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Max Vakhtbovych",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/interior-of-modern-luxury-spa-zone-with-loungers-and-bathtubs-7031704/",
    },
  },
  "hotel:hotel-zum-goldenen-hirschen": {
    src: asset("hotels", "hotel-zum-goldenen-hirschen")!,
    alt: "Symbolbild: gemütlicher rustikaler Gastraum mit Holzbalken (Illustrationsfoto, nicht das tatsächliche Restaurant)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Kate Filatova",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/cozy-rustic-restaurant-interior-with-wooden-beams-30457533/",
    },
  },
  "hotel:hotel-speyer-am-technik-museum": {
    src: asset("hotels", "hotel-speyer-am-technik-museum")!,
    alt: "Symbolbild: helles modernes Hotelzimmer (Illustrationsfoto, nicht das tatsächliche Zimmer)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Raphael Loquellano",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/interior-of-a-modern-hotel-room-18703869/",
    },
  },
  "hotel:trip-inn-hotel-speyer": {
    src: asset("hotels", "trip-inn-hotel-speyer")!,
    alt: "Symbolbild: einfaches, funktionales Hotelzimmer (Illustrationsfoto, nicht das tatsächliche Zimmer)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Christopher Moon",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/bed-in-hotel-room-14580368/",
    },
  },
  "hotel:ibis-styles-speyer": {
    src: asset("hotels", "ibis-styles-speyer")!,
    alt: "Symbolbild: modern gestaltetes Hotelzimmer (Illustrationsfoto, nicht das tatsächliche Zimmer)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Curtis Adams",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/interior-design-of-hotel-room-16641319/",
    },
  },

  // === RESTAURANTS OHNE WIKIMEDIA-FOTO: SYMBOLBILDER ===
  "restaurant:zum-alten-engel": {
    src: asset("restaurants", "zum-alten-engel")!,
    alt: "Symbolbild: gemütlich beleuchteter Restauranttisch (Illustrationsfoto, nicht der tatsächliche Gewölbekeller)",
    source: "unsplash",
    illustrative: true,
    credit: {
      author: "Maximilian Bungart",
      license: "Unsplash License",
      licenseUrl: "https://unsplash.com/license",
      sourceUrl: "https://unsplash.com/photos/cozy-dimly-lit-restaurant-table-with-cutlery-and-glasses-OXYQkz4sFyM",
    },
  },
  "restaurant:da-toni": {
    src: asset("restaurants", "da-toni")!,
    alt: "Symbolbild: Pizza im Holzofen (Illustrationsfoto, nicht aus der tatsächlichen Küche)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Eneida Nieves",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/baked-pizza-on-pizza-peel-in-oven-905847/",
    },
  },
  "restaurant:restaurant-maximilian": {
    src: asset("restaurants", "restaurant-maximilian")!,
    alt: "Symbolbild: helles modernes Bistro-Interieur mit Gästen (Illustrationsfoto, nicht das tatsächliche Restaurant)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Bingqian Li",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/cozy-french-bistro-interior-with-diners-31517300/",
    },
  },
  "restaurant:cafe-specht": {
    src: asset("restaurants", "cafe-specht")!,
    alt: "Symbolbild: Torten und Kuchen in einer Café-Vitrine (Illustrationsfoto, nicht die tatsächliche Auswahl)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Roman Odintsov",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/cakes-and-cookies-on-display-behind-a-cafe-window-5840513/",
    },
  },
  "restaurant:rheinblick-speyer": {
    src: asset("restaurants", "rheinblick-speyer")!,
    alt: "Symbolbild: Restaurant-Terrasse am Fluss bei Sonnenuntergang (Illustrationsfoto, nicht die tatsächliche Terrasse)",
    source: "pexels",
    illustrative: true,
    credit: {
      author: "Zak Mogel",
      license: "Pexels License",
      licenseUrl: "https://www.pexels.com/license/",
      sourceUrl: "https://www.pexels.com/photo/35758347/",
    },
  },
};

export const getImage = (key: string): ImageEntry | undefined => {
  const entry = images[key];
  // Wenn Registry-Eintrag fehlt oder asset() undefined zurückgab → undefined
  if (!entry || !entry.src) return undefined;
  return entry;
};
