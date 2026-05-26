/**
 * Affiliate-Konfiguration pro Projekt.
 * --------------------------------------
 * Stay22 lmaID + GetYourGuide Partner-ID sind pro Projekt individuell.
 * Beim Setup vom Projekt-Owner einholen, NIEMALS aus anderem Portal
 * übernehmen — sonst landen Provisionen auf dem falschen Konto.
 *
 * Solange enabled=false oder ID leer ist: Snippet wird NICHT geladen
 * (Dev/Staging-Schutz, DSGVO-Hygiene).
 *
 * Stay22 Direct Travel API:
 *   STAY22_API_KEY als Env-Var bzw. Cloudflare-Secret setzen, sonst
 *   liefern die Stay22*-Components keine Live-Hotels (graceful degrade).
 */

export const affiliate = {
  stay22: {
    // TODO: lmaID vom Speyer-Stay22-Account beim User nachreichen.
    // Erst dann auf enabled: true setzen.
    lmaId: "",
    enabled: false,
    /**
     * Optionale, im Stay22-Dashboard vorgebaute Widget-ID.
     * Wenn gesetzt, nutzt <Stay22Map> das vorkonfigurierte Embed
     * (https://stay22.com/embed/<id>) statt die Parameter-URL.
     * Branding und Pin-Konfiguration kommen dann aus dem Dashboard.
     */
    mapEmbedId: "",
  },
  getYourGuide: {
    // TODO: Speyer GYG Partner-ID nachreichen (im GYG-Partner-Dashboard
    // unter "Tools & Widgets" — alphanumerisch, ~7 Zeichen)
    partnerId: "",
    locale: "de-DE",
    enabled: false,
    /**
     * Default-Query für das Städte-Widget. GetYourGuide löst "Speyer"
     * via eigener Geo-Suche zur Speyer-Location auf.
     */
    cityQuery: "Speyer",
  },
};

export const stay22Enabled =
  affiliate.stay22.enabled && affiliate.stay22.lmaId.length > 0;

export const gygEnabled =
  affiliate.getYourGuide.enabled && affiliate.getYourGuide.partnerId.length > 0;
