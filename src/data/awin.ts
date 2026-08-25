/**
 * AWIN-Affiliate-Konfiguration speyer-interaktiv.de
 * ============================================================
 *
 * Konto: **514869** ("WebMagics Ltd. 01"). speyer-interaktiv.de liegt dort als
 * Promotional Space - eine andere `awinaffid` wuerde auf ein fremdes Konto
 * tracken und hier nichts verguetens.
 *
 * Freigeschaltet und hier genutzt: **Tiqets DE, mid 8616** (Date Joined
 * 25.08.2026). 6 % fuer Content-Seiten auf den Gesamtbuchungswert,
 * Cookie 30 Tage.
 *
 * ⚠️ Tiqets-Rabattcodes nur nach ausdruecklicher Freigabe veroeffentlichen -
 *    deshalb steht hier keiner.
 * ⚠️ `awc=` nie hartkodieren, das ist eine pro Klick erzeugte Click-ID.
 *    Den Deeplink schreibt `integrations/outbound-gate.mjs` beim Build auf
 *    `/go/?u=<base64url>` um.
 */

export const awin = {
  publisherId: "514869",
  clickref: "speyer-interaktiv",
  merchants: {
    tiqets: { name: "Tiqets", mid: "8616", active: true },
  },
};

export const awinEnabled = awin.publisherId.length > 0;

export type TiqetsTarget = {
  /** Ziel-URL bei Tiqets (deutschsprachig). */
  url: string;
  /** Was dort konkret verkauft wird - dient als Linktext. */
  label: string;
  /** Ein Satz Kontext ueber dem Link. */
  lead: string;
};

const CITY = "https://www.tiqets.com/de/speyer-sehenswuerdigkeiten-c64402";

/**
 * Tiqets-Ziele je Seite.
 *
 * ⚠️ **Nur nachgeschlagene URLs, nie geratene.** Tiqets beantwortet unbekannte
 * Stadt-IDs mit HTTP 200 und schiebt still auf eine fremde Landesseite. Alle
 * Eintraege hier sind am 25.08.2026 einzeln aufgerufen worden.
 *
 * Bewusst leer, weil Tiqets dort nichts verkauft: Kaiserdom, Altpoertel,
 * Judenhof, Historisches Museum der Pfalz.
 */
export const tiqetsTargets: Record<string, TiqetsTarget> = {
  "sight:technik-museum": {
    url: `${CITY}/tickets-fur-technik-museum-speyer-eintritt-imax-kinokarte-p1131563/`,
    label: "Technik-Museum-Ticket bei Tiqets",
    lead: "Eintritt samt IMAX-Kinokarte, buchbar mit Sofortbestätigung aufs Handy.",
  },
  "sight:sea-life": {
    url: `${CITY}/tickets-fur-sea-life-speyer-eintrittskarte-p1010348/`,
    label: "SEA-LIFE-Ticket bei Tiqets",
    lead: "Die Eintrittskarte lässt sich vorab sichern, ohne an der Kasse anzustehen.",
  },
  "page:sehenswuerdigkeiten": {
    url: `${CITY}/`,
    label: "Speyer-Tickets bei Tiqets",
    lead: "Eintritte für die Häuser der Stadt, direkt aufs Handy.",
  },
};

/** Getrackter Deeplink; ohne aktives Programm der rohe Link. */
export function tiqetsLink(target: TiqetsTarget, clickref?: string): string {
  const m = awin.merchants.tiqets;
  if (!awinEnabled || !m.active) return target.url;

  const params = new URLSearchParams({
    awinmid: m.mid,
    awinaffid: awin.publisherId,
    clickref: clickref ?? awin.clickref,
    ued: target.url,
  });
  return `https://www.awin1.com/cread.php?${params.toString()}`;
}

/**
 * Ziel fuer einen Schluessel, oder null.
 *
 * ⚠️ Nur fuer die deutschsprachigen Seiten: die Produkt-URLs sind die
 * `/de/`-Varianten, die `/en/`-Fassungen werden nicht geraten.
 */
export function tiqetsFuer(key: string): TiqetsTarget | null {
  return tiqetsTargets[key] ?? null;
}
