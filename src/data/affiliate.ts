/**
 * Affiliate-Konfiguration pro Projekt.
 * --------------------------------------
 * Stay22 hat zwei IDs, die unterschiedlich genutzt werden:
 *
 *  1. lmaID (Stay22-Account-Hash, MongoDB-Style):
 *     - Vom offiziellen letmeallez.js-Snippet als s.Stay22.params.lmaID erwartet
 *     - Rewritet booking.com-Links im Browser zur Laufzeit
 *
 *  2. apiAid (Account-Slug, klartext):
 *     - Wird in der Stay22 Direct Travel API als `aid`-Param mitgegeben
 *     - Erscheint in den affiliate-getaggten Deep-Links in der API-Antwort
 *
 * Beide gehören zum selben Stay22-Account (starkmarketinggmbh), werden aber
 * pro Schnittstelle anders formatiert. STAY22_API_KEY (separat, in .env)
 * authentifiziert die API-Calls.
 */

export const affiliate = {
  stay22: {
    /** Stay22 lmaID — für das letmeallez.js-Snippet (Browser-Rewrite). */
    lmaId: "6a1c4a776b16982d6c05db05",
    /** Stay22 Account-Slug — für Direct-Travel-API `aid`-Param + Stay22Map. */
    apiAid: "starkmarketinggmbh",
    enabled: true,
    /**
     * Optionale, im Stay22-Dashboard vorgebaute Widget-ID für die Map.
     * Solange leer: Parameter-Fallback (lat/lng/zoom/maincolor).
     */
    mapEmbedId: "",
  },
  getYourGuide: {
    // TODO: GYG Partner-ID nachreichen
    partnerId: "",
    locale: "de-DE",
    enabled: false,
    cityQuery: "Speyer",
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
