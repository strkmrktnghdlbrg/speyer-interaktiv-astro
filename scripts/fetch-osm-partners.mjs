/**
 * fetch-osm-partners.mjs - echte Speyerer Betriebe aus OpenStreetMap.
 *
 * Quelle: Overpass API. Die Daten stehen unter der ODbL, die Namensnennung ist
 * daher Pflicht (siehe src/components/OsmAttribution.astro).
 *
 * Ergebnis: src/data/partners.osm.json - kostenlose Listings (plan "free",
 * verified false) fuer das bestehende Branchenverzeichnis. Diese Eintraege
 * bekommen bewusst KEINE Detailseite und KEINEN Website-Link: der Dofollow-Link
 * ist den zahlenden Premium-Partnern vorbehalten. Telefonnummern werden als
 * reiner Text uebernommen, E-Mail-Adressen grundsaetzlich nicht.
 *
 *   node scripts/fetch-osm-partners.mjs            # DRY: nur Statistik
 *   node scripts/fetch-osm-partners.mjs --write    # schreibt das JSON
 *   node scripts/fetch-osm-partners.mjs --refresh  # Cache ignorieren
 *
 * Sperrliste: src/data/osm-blocklist.json listet Betriebe, die die Loeschung
 * ihres Eintrags verlangt haben. Sie werden hier herausgefiltert, BEVOR
 * partners.osm.json geschrieben wird - ein Loeschwunsch bleibt damit auch
 * nach dem naechsten Import wirksam. Gesperrt ist, wessen osmId passt ODER
 * wessen normalisierter Name UND normalisierte Strasse passen. Dieselbe Liste
 * greift ein zweites Mal in der Datenschicht (src/data/osm-blocklist.ts).
 *
 * Gebiet: Speyer ist eine kreisfreie Stadt (admin_level 6). Die Relation wird
 * vor der eigentlichen Abfrage geprueft und per ID gepinnt - waechst oder
 * aendert sich der Treffersatz, bricht das Skript ab, statt stillschweigend
 * ein anderes Gebiet zu importieren.
 */
import { writeFileSync, existsSync, readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const WRITE = process.argv.includes("--write");
const REFRESH = process.argv.includes("--refresh");
const OUT = "src/data/partners.osm.json";
const CACHE = join(process.env.TEMP || "/tmp", "osm-raw-speyer.json");

const CITY = "Speyer";
/** Relation, die beim Probe-Lauf am 2026-08-02 eindeutig die Stadt war. */
const EXPECTED_REL = 62352;
const EXPECTED_WIKIDATA = "Q6829";

const ENDPOINTS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
  "https://maps.mail.ru/osm/tools/overpass/api/interpreter",
];

/** Beschreibender User-Agent - Overpass verlangt einen identifizierbaren Client. */
const UA =
  "speyer-interaktiv.de Branchenverzeichnis/1.0 (Stadtportal, Datenpflege; https://speyer-interaktiv.de)";

async function overpass(query, label) {
  for (const ep of ENDPOINTS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        console.error(`Overpass [${label}]: ${ep} (Versuch ${attempt})`);
        const res = await fetch(ep, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": UA,
          },
          body: "data=" + encodeURIComponent(query),
        });
        if (!res.ok) {
          console.error(`  HTTP ${res.status} - naechster Versuch`);
          if (res.status === 429 || res.status === 504) await sleep(5000);
          continue;
        }
        const txt = await res.text();
        if (!txt.trimStart().startsWith("{")) {
          console.error("  keine JSON-Antwort (Rate-Limit?) - naechster Versuch");
          await sleep(5000);
          continue;
        }
        return JSON.parse(txt);
      } catch (e) {
        console.error("  Fehler: " + e.message);
      }
    }
  }
  throw new Error(`Kein Overpass-Endpunkt erreichbar (${label}).`);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Gebiet NIE annehmen, sondern belegen: alle Verwaltungsgrenzen mit dem
 * Stadtnamen auflisten und pruefen, ob die erwartete Relation die einzige ist.
 */
async function resolveArea() {
  const json = await overpass(
    `[out:json][timeout:90];
rel["name"="${CITY}"]["boundary"="administrative"];
out tags;`,
    "Gebietspruefung",
  );
  const hits = json.elements || [];
  console.error(`Verwaltungsgrenzen mit Namen "${CITY}": ${hits.length}`);
  for (const h of hits) {
    const t = h.tags || {};
    console.error(
      `  rel/${h.id}  admin_level=${t.admin_level}  wikidata=${t.wikidata || "-"}  de:place=${t["de:place"] || t.place || "-"}`,
    );
  }
  const match = hits.find((h) => h.id === EXPECTED_REL);
  if (!match) {
    throw new Error(
      `Erwartete Relation ${EXPECTED_REL} nicht gefunden. OSM hat sich geaendert - Gebiet neu pruefen, bevor importiert wird.`,
    );
  }
  const wd = (match.tags || {}).wikidata;
  if (wd && wd !== EXPECTED_WIKIDATA) {
    throw new Error(
      `Relation ${EXPECTED_REL} zeigt jetzt auf ${wd} statt ${EXPECTED_WIKIDATA} - Abbruch.`,
    );
  }
  const others = hits.filter((h) => h.id !== EXPECTED_REL);
  if (others.length) {
    throw new Error(
      `Zusaetzliche Verwaltungsgrenzen mit Namen "${CITY}": ${others.map((o) => "rel/" + o.id).join(", ")}. Gebiet manuell pruefen, damit nicht das falsche importiert wird.`,
    );
  }
  const adminLevel = (match.tags || {}).admin_level;
  console.error(`Gebiet bestaetigt: rel/${EXPECTED_REL} (${CITY}, admin_level ${adminLevel})`);
  return { areaId: 3600000000 + EXPECTED_REL, adminLevel };
}

const dataQuery = (areaId) => `[out:json][timeout:180];
area(id:${areaId})->.a;
(
  nwr["shop"]["name"](area.a);
  nwr["amenity"~"^(restaurant|cafe|bar|pub|fast_food|ice_cream|biergarten|pharmacy|dentist|doctors|clinic|veterinary|driving_school|fuel|car_wash|car_rental|bank|nightclub|cinema|theatre)$"]["name"](area.a);
  nwr["craft"]["name"](area.a);
  nwr["office"]["name"](area.a);
  nwr["healthcare"]["name"](area.a);
  nwr["leisure"~"^(fitness_centre|sports_centre|dance|bowling_alley)$"]["name"](area.a);
  nwr["tourism"~"^(hotel|guest_house|hostel|apartment|motel)$"]["name"](area.a);
);
out center tags;`;

// ---------------------------------------------------------------------------
// OSM-Tag -> [Branche (Feinlabel), Kategorie-Slug aus src/data/branchenbuch.ts]
// Die acht bestehenden Kategorie-Slugs bleiben unveraendert, die Branche ist
// nur eine Untergliederung innerhalb der jeweiligen Kategorie.
// ---------------------------------------------------------------------------
const KAT = {
  GASTRO: "gastronomie",
  HOTEL: "hotels",
  GESUND: "gesundheit",
  BANK: "banken",
  HANDWERK: "handwerk",
  HANDEL: "einzelhandel",
  DIENST: "dienstleistungen",
  FREIZEIT: "freizeit-kultur",
};

const CRAFT = {
  electrician: "Elektriker",
  plumber: "Sanitaer & Heizung",
  hvac: "Sanitaer & Heizung",
  carpenter: "Schreinerei",
  joiner: "Schreinerei",
  painter: "Maler & Lackierer",
  gardener: "Garten & Landschaftsbau",
  roofer: "Dachdecker",
  tiler: "Fliesenleger",
  locksmith: "Schlosserei",
  metal_construction: "Metallbau",
  shoemaker: "Schuhmacher",
  tailor: "Schneiderei",
  photographer: "Fotograf",
  caterer: "Catering",
  chimney_sweeper: "Schornsteinfeger",
  plasterer: "Stuckateur",
  glaziery: "Glaserei",
  window_construction: "Fensterbau",
  scaffolder: "Geruestbau",
  stonemason: "Steinmetz",
  upholsterer: "Polsterei",
  bakery: "Baeckerei",
  brewery: "Brauerei",
  winery: "Weingut",
  key_cutter: "Schluesseldienst",
  parquet_layer: "Bodenleger",
  floorer: "Bodenleger",
  insulation: "Daemmtechnik",
  sawmill: "Saegewerk",
  handicraft: "Handwerksbetrieb",
  builder: "Bauunternehmen",
  electronics_repair: "Elektronik-Reparatur",
};

const OFFICE = {
  lawyer: "Rechtsanwalt",
  notary: "Notar",
  accountant: "Steuerberatung",
  tax_advisor: "Steuerberatung",
  insurance: "Versicherung",
  estate_agent: "Immobilien",
  property_management: "Hausverwaltung",
  it: "IT-Dienstleister",
  telecommunication: "IT & Telekommunikation",
  architect: "Architekturbuero",
  engineer: "Ingenieurbuero",
  surveyor: "Vermessungsbuero",
  financial: "Finanzberatung",
  financial_advisor: "Finanzberatung",
  employment_agency: "Personalvermittlung",
  advertising_agency: "Werbeagentur",
  travel_agent: "Reisebuero",
  coworking: "Coworking",
  logistics: "Logistik",
  energy_supplier: "Energieversorger",
  therapist: "Therapie & Beratung",
  moving_company: "Umzugsunternehmen",
  security: "Sicherheitsdienst",
  newspaper: "Verlag & Redaktion",
  publisher: "Verlag & Redaktion",
  consulting: "Unternehmensberatung",
  company: "Unternehmen",
  yes: "Unternehmen",
};

const SHOP = {
  supermarket: "Supermarkt",
  convenience: "Kiosk & Nahversorgung",
  kiosk: "Kiosk & Nahversorgung",
  clothes: "Mode & Bekleidung",
  boutique: "Mode & Bekleidung",
  fabric: "Stoffe & Kurzwaren",
  shoes: "Schuhe",
  bag: "Taschen & Lederwaren",
  leather: "Taschen & Lederwaren",
  jewelry: "Schmuck & Uhren",
  watches: "Schmuck & Uhren",
  books: "Buchhandlung",
  newsagent: "Zeitschriften & Tabak",
  tobacco: "Zeitschriften & Tabak",
  e_cigarette: "E-Zigaretten",
  furniture: "Moebel & Einrichtung",
  interior_decoration: "Moebel & Einrichtung",
  houseware: "Haushaltswaren",
  kitchen: "Kuechenstudio",
  bed: "Betten & Matratzen",
  curtain: "Raumausstattung",
  carpet: "Teppiche & Boeden",
  flooring: "Teppiche & Boeden",
  bicycle: "Fahrradgeschaeft",
  motorcycle: "Motorradhandel",
  mobile_phone: "Handy & Telekommunikation",
  computer: "Computer & Elektronik",
  electronics: "Computer & Elektronik",
  hifi: "Computer & Elektronik",
  video_games: "Games & Medien",
  music: "Musik & Instrumente",
  musical_instrument: "Musik & Instrumente",
  toys: "Spielwaren",
  baby_goods: "Babyausstattung",
  sports: "Sportgeschaeft",
  outdoor: "Outdoor & Camping",
  fishing: "Angelbedarf",
  hunting: "Jagdbedarf",
  car_parts: "Kfz-Teile & Zubehoer",
  tyres: "Reifenservice",
  pet: "Zoofachhandel",
  pet_grooming: "Tierpflege",
  stationery: "Schreibwaren",
  copyshop: "Copyshop",
  gift: "Geschenke & Deko",
  art: "Kunst & Galerie",
  frame: "Rahmen & Bilder",
  antiques: "Antiquitaeten",
  second_hand: "Secondhand",
  charity: "Secondhand",
  variety_store: "Kaufhaus",
  department_store: "Kaufhaus",
  garden_centre: "Gartencenter",
  agrarian: "Landhandel",
  trade: "Fachhandel",
  paint: "Farben & Lacke",
  lighting: "Leuchten",
  erotic: "Erotikfachhandel",
  photo: "Fotofachhandel",
  medical_supply: "Sanitaetshaus",
  herbalist: "Reformhaus",
  health_food: "Reformhaus",
  farm: "Hofladen",
  seafood: "Fischhandel",
  coffee: "Kaffee & Tee",
  tea: "Kaffee & Tee",
  chocolate: "Suesswaren",
  nutrition_supplements: "Nahrungsergaenzung",
  funeral_directors: "Bestattungen",
  travel_agency: "Reisebuero",
  ticket: "Ticketverkauf",
  locksmith: "Schluesseldienst",
  rental: "Vermietung",
  storage_rental: "Lagervermietung",
  weapons: "Waffenfachhandel",
  religion: "Devotionalien",
  wholesale: "Grosshandel",
};

function classify(t) {
  const s = t.shop,
    a = t.amenity,
    c = t.craft,
    o = t.office,
    h = t.healthcare,
    l = t.leisure,
    tm = t.tourism;

  // Behoerden, Parteien, Verbaende und aehnliche Nicht-Betriebe verwerfen.
  const dropOffice = new Set([
    "government", "administrative", "diplomatic", "political_party", "ngo",
    "association", "research", "educational_institution", "foundation",
    "religion", "guild", "quango", "charity", "union", "water_utility",
  ]);
  if (a === "government" || (o && dropOffice.has(o))) return null;

  // Gastronomie
  if (a === "restaurant") return ["Restaurant", KAT.GASTRO];
  if (a === "cafe") return ["Cafe", KAT.GASTRO];
  if (a === "fast_food") return ["Imbiss & Schnellrestaurant", KAT.GASTRO];
  if (a === "bar" || a === "pub" || a === "biergarten") return ["Bar & Kneipe", KAT.GASTRO];
  if (a === "ice_cream") return ["Eisdiele", KAT.GASTRO];
  if (s === "bakery") return ["Baeckerei", KAT.GASTRO];
  if (s === "butcher") return ["Metzgerei", KAT.GASTRO];
  if (s === "confectionery" || s === "pastry") return ["Konditorei", KAT.GASTRO];
  if (s === "wine" || s === "alcohol") return ["Wein & Spirituosen", KAT.GASTRO];
  if (s === "beverages") return ["Getraenkemarkt", KAT.GASTRO];
  if (s === "greengrocer" || s === "deli" || s === "cheese") return ["Feinkost & Hofprodukte", KAT.GASTRO];

  // Unterkunft
  if (tm) {
    const map = { hotel: "Hotel", guest_house: "Pension", hostel: "Hostel", apartment: "Ferienwohnung", motel: "Motel" };
    return [map[tm] || "Unterkunft", KAT.HOTEL];
  }

  // Gesundheit
  if (a === "pharmacy") return ["Apotheke", KAT.GESUND];
  if (a === "dentist" || h === "dentist") return ["Zahnarztpraxis", KAT.GESUND];
  if (a === "doctors" || h === "doctor") return ["Arztpraxis", KAT.GESUND];
  if (a === "clinic" || h === "clinic" || h === "hospital") return ["Klinik & Medizinisches Zentrum", KAT.GESUND];
  if (a === "veterinary" || h === "veterinary") return ["Tierarztpraxis", KAT.GESUND];
  if (h === "physiotherapist") return ["Physiotherapie", KAT.GESUND];
  if (h === "psychotherapist") return ["Psychotherapie", KAT.GESUND];
  if (h === "alternative") return ["Heilpraktiker", KAT.GESUND];
  if (h === "midwife") return ["Hebamme", KAT.GESUND];
  if (h === "speech_therapist") return ["Logopaedie", KAT.GESUND];
  if (h === "occupational_therapist") return ["Ergotherapie", KAT.GESUND];
  if (h === "laboratory") return ["Labor", KAT.GESUND];
  if (h === "nursing_home" || h === "nurse") return ["Pflegedienst", KAT.GESUND];
  if (s === "optician") return ["Optiker", KAT.GESUND];
  if (s === "hearing_aids") return ["Hoerakustiker", KAT.GESUND];
  if (s === "chemist") return ["Drogerie", KAT.GESUND];
  if (s === "massage") return ["Massage", KAT.GESUND];
  if (l === "fitness_centre") return ["Fitnessstudio", KAT.GESUND];
  if (h) return ["Gesundheit & Therapie", KAT.GESUND];

  // Banken & Finanzen
  if (a === "bank") return ["Bank & Sparkasse", KAT.BANK];
  if (o === "insurance") return ["Versicherung", KAT.BANK];
  if (o === "financial" || o === "financial_advisor") return ["Finanzberatung", KAT.BANK];

  // Handwerk & Bau
  if (c) return [CRAFT[c] || "Handwerksbetrieb", KAT.HANDWERK];
  if (s === "hardware" || s === "doityourself" || s === "trade") return ["Baumarkt & Fachhandel", KAT.HANDWERK];
  if (s === "building_materials") return ["Baustoffhandel", KAT.HANDWERK];

  // Freizeit & Kultur
  if (a === "nightclub") return ["Club & Nachtleben", KAT.FREIZEIT];
  if (a === "cinema") return ["Kino", KAT.FREIZEIT];
  if (a === "theatre") return ["Theater & Buehne", KAT.FREIZEIT];
  if (l === "dance") return ["Tanzschule", KAT.FREIZEIT];
  if (l === "sports_centre") return ["Sportzentrum", KAT.FREIZEIT];
  if (l === "bowling_alley") return ["Bowling & Kegeln", KAT.FREIZEIT];

  // Dienstleistungen
  if (s === "hairdresser") return ["Friseur", KAT.DIENST];
  if (s === "beauty" || s === "cosmetics" || s === "nails" || s === "tattoo") return ["Kosmetik & Koerperpflege", KAT.DIENST];
  if (s === "laundry" || s === "dry_cleaning") return ["Reinigung & Waescherei", KAT.DIENST];
  if (s === "car" || s === "car_repair") return ["Autohaus & Kfz-Werkstatt", KAT.DIENST];
  if (a === "car_wash") return ["Autowaesche", KAT.DIENST];
  if (a === "car_rental") return ["Autovermietung", KAT.DIENST];
  if (a === "fuel") return ["Tankstelle", KAT.DIENST];
  if (a === "driving_school") return ["Fahrschule", KAT.DIENST];
  if (o) return [OFFICE[o] || "Buero & Dienstleistung", KAT.DIENST];

  // Einzelhandel
  if (s === "florist") return ["Blumen & Floristik", KAT.HANDEL];
  if (s === "funeral_directors") return ["Bestattungen", KAT.DIENST];
  if (s === "travel_agency") return ["Reisebuero", KAT.DIENST];
  if (s) return [SHOP[s] || "Einzelhandel", KAT.HANDEL];
  return null;
}

/** Slugs ohne Umlaute - die Labels selbst tragen weiter echte Umlaute. */
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/&/g, "und")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Die Umlaut-freien Labels aus den Maps wieder in echte deutsche Schreibweise. */
const UMLAUT_FIX = [
  [/Baeckerei/g, "Bäckerei"], [/Sanitaetshaus/g, "Sanitätshaus"], [/Sanitaer/g, "Sanitär"], [/Geruestbau/g, "Gerüstbau"],
  [/Saegewerk/g, "Sägewerk"], [/Daemmtechnik/g, "Dämmtechnik"], [/Reisebuero/g, "Reisebüro"],
  [/Architekturbuero/g, "Architekturbüro"], [/Ingenieurbuero/g, "Ingenieurbüro"],
  [/Vermessungsbuero/g, "Vermessungsbüro"], [/Buero/g, "Büro"], [/Kuechenstudio/g, "Küchenstudio"],
  [/Boeden/g, "Böden"], [/Fahrradgeschaeft/g, "Fahrradgeschäft"], [/Sportgeschaeft/g, "Sportgeschäft"],
  [/Zubehoer/g, "Zubehör"], [/Antiquitaeten/g, "Antiquitäten"], [/Suesswaren/g, "Süßwaren"],
  [/Nahrungsergaenzung/g, "Nahrungsergänzung"], [/Moebel/g, "Möbel"], [/Cafe/g, "Café"],
  [/Getraenkemarkt/g, "Getränkemarkt"], [/Hoerakustiker/g, "Hörakustiker"],
  [/Logopaedie/g, "Logopädie"], [/Buehne/g, "Bühne"], [/Koerperpflege/g, "Körperpflege"],
  [/Waescherei/g, "Wäscherei"], [/Autowaesche/g, "Autowäsche"], [/Schluesseldienst/g, "Schlüsseldienst"],
  [/Grosshandel/g, "Großhandel"], [/Behoerden/g, "Behörden"], [/Schnellrestaurant/g, "Schnellrestaurant"],
  [/Getraenke/g, "Getränke"], [/Waffenfachhandel/g, "Waffenfachhandel"],
];
const deLabel = (s) => UMLAUT_FIX.reduce((acc, [re, to]) => acc.replace(re, to), s);

// ---------------------------------------------------------------------------
/**
 * Die Gebietspruefung ist ein eigener Overpass-Call und laeuft nur, wenn auch
 * wirklich neu geladen wird. Der Cache haelt die geprueften Relations-Daten
 * fest, damit auch ein Cache-Lauf noch belegt, aus welchem Gebiet er stammt -
 * und abbricht, wenn dort etwas anderes steht als erwartet.
 */
let data;
if (existsSync(CACHE) && !REFRESH) {
  const cached = JSON.parse(readFileSync(CACHE, "utf8"));
  const meta = cached.__area;
  if (!meta || meta.rel !== EXPECTED_REL || meta.wikidata !== EXPECTED_WIKIDATA) {
    throw new Error(
      `Cache ${CACHE} stammt aus einem anderen Gebiet (${JSON.stringify(meta)}) als erwartet (rel/${EXPECTED_REL}, ${EXPECTED_WIKIDATA}). Mit --refresh neu laden.`,
    );
  }
  console.error(`(nutze Cache ${CACHE}, Gebiet rel/${meta.rel} (${meta.wikidata}); --refresh laedt neu)`);
  data = cached;
} else {
  const area = await resolveArea();
  data = await overpass(dataQuery(area.areaId), "Betriebe");
  data.__area = { rel: EXPECTED_REL, wikidata: EXPECTED_WIKIDATA, adminLevel: area.adminLevel };
  writeFileSync(CACHE, JSON.stringify(data), "utf8");
}

const seen = new Set();
const rows = [];
const brancheCount = {};
const katCount = {};
let raw = 0, withStreet = 0, withPhone = 0, dropped = 0;

for (const el of data.elements || []) {
  const t = el.tags || {};
  const name = (t.name || "").trim();
  if (!name || name.length > 90) continue;
  raw++;

  const cls = classify(t);
  if (!cls) { dropped++; continue; }
  const [brancheRaw, kategorie] = cls;
  const branche = deLabel(brancheRaw);

  const strasse = [t["addr:street"], t["addr:housenumber"]].filter(Boolean).join(" ");
  const plz = t["addr:postcode"] || "";
  const ort = t["addr:city"] || CITY;
  const telefon = (t.phone || t["contact:phone"] || "").trim();

  // Dedup innerhalb von OSM: gleicher Name an gleicher Adresse = ein Betrieb.
  const key = name.toLowerCase() + "|" + (strasse.toLowerCase() || "n/a");
  if (seen.has(key)) continue;
  seen.add(key);

  if (strasse) withStreet++;
  if (telefon) withPhone++;
  brancheCount[branche] = (brancheCount[branche] || 0) + 1;
  katCount[kategorie] = (katCount[kategorie] || 0) + 1;

  rows.push({
    name,
    slug: slugify(name) + "-" + el.id,
    kategorie,
    branche,
    brancheSlug: slugify(branche),
    strasse,
    plz,
    ort,
    telefon,
    osmId: `${el.type}/${el.id}`,
  });
}

console.log("");
console.log(`-- OSM-Betriebe ${CITY} (rel/${EXPECTED_REL}) --`);
console.log("Roh-Elemente mit Namen:        " + raw);
console.log("  davon verworfen (Behoerden): " + dropped);
console.log("Nach Klassifizierung + Dedup:  " + rows.length);
console.log("  mit Strasse:                 " + withStreet);
console.log("  mit Telefon:                 " + withPhone);
console.log("");
console.log("Nach Kategorie:", katCount);

// ---------------------------------------------------------------------------
// Verzeichnis-Qualitaet: Name UND Strasse, dedupliziert gegen die bereits
// gepflegten Portal-Eintraege (restaurants.ts, hotels.ts, branchenbuch.ts).
// ---------------------------------------------------------------------------
const norm = (x) => (x || "").toLowerCase().replace(/[^a-z0-9äöüß]/g, "");
const existing = new Set();
for (const file of ["src/data/restaurants.ts", "src/data/hotels.ts", "src/data/branchenbuch.ts"]) {
  if (!existsSync(file)) continue;
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/\bname:\s*"([^"]+)"/g)) existing.add(norm(m[1]));
}
console.log("");
console.log("Dedup-Basis (bestehende Portal-Eintraege): " + existing.size);

const quality = rows
  .filter((r) => r.strasse)
  .filter((r) => !existing.has(norm(r.name)));

console.log("Verzeichnis-Qualitaet (Name + Strasse, dedupliziert): " + quality.length);

// ---------------------------------------------------------------------------
// Sperrliste: Betriebe, die die Loeschung ihres Eintrags verlangt haben.
// Sie fliegen raus, BEVOR geschrieben wird - sonst holt der naechste Lauf sie
// zurueck. Gesperrt ist, wessen osmId passt ODER wessen normalisierter Name
// UND normalisierte Strasse passen. Ein Eintrag nur mit Name (ohne Strasse)
// sperrt bewusst nichts, damit keine namensgleichen Betriebe mitgerissen
// werden. Die Trefferregel ist identisch zu src/data/osm-blocklist.ts -
// wer sie hier aendert, muss sie dort mitaendern.
// ---------------------------------------------------------------------------
const BLOCKLIST_FILE = "src/data/osm-blocklist.json";
const blocklist = existsSync(BLOCKLIST_FILE)
  ? JSON.parse(readFileSync(BLOCKLIST_FILE, "utf8"))
  : [];

// Eigener Normalisierer, absichtlich nicht `norm` von oben: der steuert die
// Deduplizierung und darf sich nicht aendern. Hier werden zusaetzlich Umlaute
// aufgeloest, damit "Waldseer Strasse" und "Waldseer Straße" denselben Betrieb
// treffen - an einer Schreibweise darf ein Loeschwunsch nicht scheitern.
const normBlock = (x) =>
  (x || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]/g, "");

const istGesperrt = (r) => {
  const id = (r.osmId || "").trim().toLowerCase();
  const name = normBlock(r.name);
  const strasse = normBlock(r.strasse);
  return blocklist.some((b) => {
    const bId = (b.osmId || "").trim().toLowerCase();
    if (bId && id && bId === id) return true;
    const bName = normBlock(b.name);
    const bStreet = normBlock(b.street);
    if (!bName || !bStreet) return false;
    return bName === name && bStreet === strasse;
  });
};

const erlaubt = quality.filter((r) => !istGesperrt(r));
const unterdrueckt = quality.length - erlaubt.length;
console.log(
  `Sperrliste (${BLOCKLIST_FILE}): ${blocklist.length} Eintraege, ${unterdrueckt} Betriebe unterdrueckt`,
);
console.log("Verbleibend fuer das Verzeichnis: " + erlaubt.length);

const qBranche = {};
for (const r of erlaubt) qBranche[r.branche] = (qBranche[r.branche] || 0) + 1;
console.log("");
console.log("Top-Branchen (Qualitaet):");
Object.entries(qBranche)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 30)
  .forEach(([k, v]) => console.log("  " + String(v).padStart(4) + "  " + k));

if (WRITE) {
  mkdirSync(dirname(OUT), { recursive: true });
  erlaubt.sort((a, b) => a.name.localeCompare(b.name, "de"));
  writeFileSync(OUT, JSON.stringify(erlaubt, null, 2) + "\n", "utf8");
  console.log("");
  console.log(`Geschrieben: ${erlaubt.length} Betriebe -> ${OUT}`);
  console.log(`Durch die Sperrliste unterdrueckt: ${unterdrueckt}`);
}
