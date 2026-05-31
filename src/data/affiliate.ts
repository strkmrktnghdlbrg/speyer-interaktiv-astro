/**
 * Affiliate-Konfiguration pro Projekt.
 * --------------------------------------
 * Stay22 lmaID + GetYourGuide Partner-ID sind pro Projekt individuell.
 *
 * Stay22 Direct Travel API:
 *   STAY22_API_KEY als Env-Var bzw. Hosting-Secret setzen (siehe .env.example).
 *   Wenn nicht gesetzt: graceful degradation, statische Hotels bleiben sichtbar.
 *
 * Stay22 lmaID (= aid-Query-Param):
 *   Wird an Stay22-API/Snippet als Tracking-Identifier mitgegeben. Speyer nutzt
 *   die UUID-Komponente des API-Tokens als aid (Stay22-Konvention bei
 *   Single-Account-Setups).
 */

export const affiliate = {
  stay22: {
    // Stay22-Account-Identifier (aus API-Antwort verifiziert).
    // Wird vom Stay22-Snippet als ?lmaid=... mitgegeben.
    lmaId: "starkmarketinggmbh",
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
