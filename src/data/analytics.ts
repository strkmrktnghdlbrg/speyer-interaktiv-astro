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
  // TODO: GTM-ID für Speyer-Interaktiv nachreichen (Format GTM-XXXXXXX)
  gtmId: "",
  enabled: false,
};

export const gtmEnabled = analytics.enabled && analytics.gtmId.length > 0;
