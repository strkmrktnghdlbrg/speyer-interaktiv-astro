/**
 * Feature-Flags für das Portal.
 * ------------------------------
 * Schaltet einzelne Bereiche an/aus, OHNE Code zu löschen.
 * Wenn ein Feature off ist:
 *  - Header- und Footer-Nav blendet den Link aus
 *  - Index- und Detail-Pages zeigen ein "Demnächst"-Placeholder
 *    bzw. werden via Astro.redirect zur Homepage geschickt
 *  - Sitemap-Filter in astro.config.mjs blendet die URLs aus
 *
 * Aktivieren = Flag auf true setzen. Kein weiterer Eingriff nötig.
 */

export const features = {
  /** News-Pipeline. Off solange D1 + Cron-Worker nicht deployed sind. */
  news: {
    enabled: false,
  },
  /** Reiseplaner-Guides — bleibt aktiv für Köln. */
  reiseplaner: {
    enabled: true,
  },
  /** Werbung & Listings-Marktplatz. */
  werben: {
    enabled: true,
  },
  /** Branchen-Verzeichnis (Phase 2 — Self-Service-Listings via Stripe). */
  branchen: {
    enabled: false,
  },
};
