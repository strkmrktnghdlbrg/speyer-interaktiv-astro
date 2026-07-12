/**
 * Google Tag Manager + Analytics-Konfiguration.
 * ----------------------------------------------
 * GTM Container-ID ist PRO PROJEKT individuell. Niemals aus einem
 * anderen Portal übernehmen.
 *
 * GTM ist der zentrale Tag-Manager — Marketing-Pixel, GA4, Conversion-
 * Tracking etc. werden ueber das GTM-Dashboard verwaltet, nicht hier.
 */

export const analytics = {
  // GTM-Container für speyer-interaktiv.de (WEBMAGICS-Konto), provisioniert
  // 2026-07-09. GA4 (G-EGMPZ5SQ1M) läuft über den GA4-Config-Tag im Container.
  gtmId: "GTM-W2JFBBW3",
  enabled: true,
};

export const gtmEnabled = analytics.enabled && analytics.gtmId.length > 0;
