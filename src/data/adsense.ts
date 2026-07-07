/**
 * Google AdSense — Konfiguration pro Projekt.
 * ---------------------------------------------
 * Publisher-ID + Slot-IDs sind PRO PROJEKT individuell (wie Stay22 lmaID).
 * Niemals aus einem anderen Portal übernehmen.
 *
 * Aktueller Modus: Auto Ads (kein manuelles Slot-Placement notwendig).
 * AdSense entscheidet im Dashboard, wo Anzeigen platziert werden.
 */

export const adsense = {
  // Webmagics-AdSense-Konto (info@webmagics.net), identisch mit Live-ads.txt
  publisherId: "ca-pub-7432388986384363",
  enabled: true,

  // Falls Manual Placement gewünscht: Slot-IDs hier hinterlegen.
  // Auto Ads ignoriert diese.
  slots: {
    newsInArticle: "",
    districtSidebar: "",
    sightsFooter: "",
  },
};

export const adsenseEnabled =
  adsense.enabled && adsense.publisherId.length > 0;
