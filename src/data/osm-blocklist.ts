/**
 * Sperrliste für OSM-Einträge (Löschwunsch)
 * ------------------------------------------
 * Die Betriebe im Branchenverzeichnis stammen zu einem großen Teil aus
 * OpenStreetMap. Sie haben ihrem Eintrag nie zugestimmt. Wer die Löschung
 * verlangt, muss dauerhaft verschwinden - ein Eintrag, den der nächste Lauf
 * von `scripts/fetch-osm-partners.mjs` wieder einsammelt, ist keine Löschung.
 *
 * Genau dafür ist `osm-blocklist.json` da: die Liste ist der dauerhafte
 * Aus-Schalter. Sie greift an zwei Stellen (Redundanz mit Absicht):
 *   1. im Skript, bevor `partners.osm.json` geschrieben wird, und
 *   2. hier in der Datenschicht, damit auch eine veraltete `partners.osm.json`
 *      einen gesperrten Betrieb nicht mehr ausspielt.
 *
 * Aufbau eines Eintrags (alle Felder optional, aber sinnvoll gefüllt):
 *
 *   {
 *     "osmId": "node/123456789",   // exakteste Kennung, aus partners.osm.json
 *     "name": "Muster Baeckerei",  // Alternative bzw. Ergaenzung zur osmId
 *     "street": "Hauptstrasse 5",  // gehoert immer zu "name"
 *     "reason": "Loeschwunsch per E-Mail",
 *     "date": "2026-08-02"
 *   }
 *
 * Trefferregel: Ein Betrieb gilt als gesperrt, wenn
 *   - die osmId übereinstimmt, ODER
 *   - normalisierter Name UND normalisierte Straße übereinstimmen.
 * Normalisiert heißt: Kleinschreibung, Umlaute aufgelöst (ae/oe/ue/ss), ohne
 * Satzzeichen und Leerzeichen.
 *
 * Ein Eintrag mit nur `name` (ohne `street`) sperrt bewusst nichts - sonst
 * würden Ketten und Namensgleichheiten fremde Betriebe mitreißen.
 *
 * Die Liste ist standardmäßig leer. Es wird niemals ein Eintrag "auf Verdacht"
 * hinzugefügt, sondern nur auf tatsächliche Aufforderung eines Betriebs.
 */
import blocklistRaw from "./osm-blocklist.json";

export type OsmBlockEntry = {
  /** OSM-Kennung, z. B. "node/123456789" */
  osmId?: string;
  /** Name des Betriebs - wirkt nur zusammen mit `street` */
  name?: string;
  /** Straße (mit oder ohne Hausnummer) - wirkt nur zusammen mit `name` */
  street?: string;
  /** Warum gesperrt, in einem kurzen Satz */
  reason?: string;
  /** Datum des Löschwunsches, ISO (JJJJ-MM-TT) */
  date?: string;
};

export const osmBlocklist: OsmBlockEntry[] = blocklistRaw as OsmBlockEntry[];

/**
 * Kleinschreibung, Umlaute aufgeloest (ae/oe/ue/ss), ohne Satzzeichen und
 * Leerzeichen. Die Umlaut-Aufloesung ist Absicht: "Waldseer Strasse" und
 * "Waldseer Straße" müssen denselben Betrieb treffen, sonst scheitert ein
 * Löschwunsch an einer Schreibweise. Identisch zu `normBlock` in
 * scripts/fetch-osm-partners.mjs.
 */
export const normalisiere = (value?: string): string =>
  (value || "")
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]/g, "");

type BlockCandidate = {
  osmId?: string;
  name?: string;
  /** Straße; im Portal heißt das Feld `strasse` */
  street?: string;
};

/** Ist dieser Betrieb gesperrt? */
export function istGesperrt(rec: BlockCandidate): boolean {
  const id = (rec.osmId || "").trim().toLowerCase();
  const name = normalisiere(rec.name);
  const street = normalisiere(rec.street);

  return osmBlocklist.some((b) => {
    const bId = (b.osmId || "").trim().toLowerCase();
    if (bId && id && bId === id) return true;
    const bName = normalisiere(b.name);
    const bStreet = normalisiere(b.street);
    if (!bName || !bStreet) return false;
    return bName === name && bStreet === street;
  });
}

/** Alle gesperrten Datensätze aus einer Liste entfernen. */
export const ohneGesperrte = <T extends BlockCandidate>(rows: T[]): T[] =>
  rows.filter((r) => !istGesperrt(r));
