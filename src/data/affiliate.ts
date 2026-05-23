/**
 * Affiliate-Konfiguration pro Projekt.
 * --------------------------------------
 * Stay22 lmaID + GetYourGuide Partner-ID sind pro Projekt individuell.
 * Beim Setup vom Projekt-Owner einholen, NIEMALS aus anderem Portal
 * übernehmen — sonst landen Provisionen auf dem falschen Konto.
 *
 * Solange enabled=false oder ID leer ist: Snippet wird NICHT geladen
 * (Dev/Staging-Schutz, DSGVO-Hygiene).
 */

export const affiliate = {
  stay22: {
    // TODO: lmaID vom Speyer-Stay22-Account beim User nachreichen
    lmaId: "",
    enabled: false,
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
