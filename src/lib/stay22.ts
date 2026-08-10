/**
 * Stay22 Direct Travel API — Helper
 * ----------------------------------
 * Build-Time-Fetch von Live-Hotel-Daten via /v1/accommodations.
 *
 * Patterns aus dem Stay22 Playbook:
 *   - X-API-Key Header
 *   - 60min HTTP-Caching erlaubt (KEIN persistenter DB-Storage)
 *   - Pattern A: Build-Time + GitHub-Action-Cron-Rebuild alle 6h
 *
 * WICHTIG: Die API antwortet HTTP 400, wenn `address` Umlaute enthält.
 * Daher in events.ts und Defaults immer "Cologne" statt "Köln" verwenden,
 * oder lat/lng setzen.
 *
 * Env-Var: STAY22_API_KEY
 *   Wenn nicht gesetzt: Helper gibt null zurück (graceful degradation).
 *
 * Schema-Normalisierung:
 *   Die Roh-Antwort hat verschachtelte Felder (location.coordinates.lat,
 *   rating.value, media.thumbnail, links.url). Wir flachen das im Helper
 *   zu einer einheitlichen `Stay22Accommodation` ab, damit Components
 *   nicht die Schema-Quirks kennen müssen.
 */

export interface Stay22Accommodation {
  id?: string;
  name: string;
  type?: string;
  image?: string;
  /** Vollständige Affiliate-URL inkl. lmaID — direkt im href verwenden. */
  link?: string;
  rating?: {
    /** 0–10. */
    score?: number;
    count?: number;
  };
  starRating?: number;
  price?: {
    /** Gesamtpreis für den Zeitraum, in der angefragten Währung. */
    total?: number;
    /** Preis pro Nacht (errechnet). */
    perNight?: number;
    currency?: string;
    formattedTotal?: string;
    formattedPerNight?: string;
  };
  address?: {
    full?: string;
    cityName?: string;
    areaName?: string;
  };
  distance?: number;
  geo?: { lat?: number; lng?: number };
  policies?: { freeCancellation?: boolean; instantBook?: boolean };
}

export interface Stay22SearchOptions {
  provider?: "booking" | "expedia" | "vrbo" | "hotelscom";
  /**
   * Volltext-Adresse für Geo-Lookup. Keine Umlaute — die API antwortet
   * sonst mit HTTP 400 (empty body). Beispiel: "Cologne, Germany".
   */
  address?: string;
  lat?: number;
  lng?: number;
  /** Suchradius in Metern (nur mit lat/lng). Default 10000. */
  radius?: number;
  /** "hotel" | "rental" */
  type?: string;
  minguestrating?: number;
  /** 0–5. */
  minstarrating?: number;
  /** Min-/Max-Preis pro Nacht. API erwartet USD-Range, EUR-Konvertierung erfolgt danach. */
  min?: number;
  max?: number;
  limit?: number;
  currency?: string;
  lang?: string;
  checkin?: string;
  checkout?: string;
  adults?: number;
  children?: number;
  rooms?: number;
  campaign?: string;
  /** lmaID — Pflicht für Affiliate-Attribution. */
  aid?: string;
}

const API_BASE = "https://api.stay22.com/v1";

/**
 * In-Memory-Cache pro Build-Run.
 * Verhindert doppelte Calls für gleiche URLs (typisch: viele Sights/Events
 * teilen sich Stadt-Zentrum-Koordinaten).
 */
const responseCache = new Map<string, Stay22Accommodation[] | null>();

/**
 * Globaler Throttle. Stay22 erlaubt ~1 Call/s, sonst HTTP 429.
 * Wir warten 1200ms zwischen Calls — entspricht ~50 req/min.
 */
let lastCallAt = 0;
const MIN_INTERVAL_MS = 1200;

async function throttle(): Promise<void> {
  const now = Date.now();
  const wait = lastCallAt + MIN_INTERVAL_MS - now;
  if (wait > 0) {
    await new Promise((r) => setTimeout(r, wait));
  }
  lastCallAt = Date.now();
}

function getApiKey(): string | null {
  // @ts-expect-error — import.meta.env existiert in Astro/Vite
  const viteKey = typeof import.meta !== "undefined" ? import.meta.env?.STAY22_API_KEY : undefined;
  const nodeKey = typeof process !== "undefined" ? process.env?.STAY22_API_KEY : undefined;
  const key = viteKey || nodeKey;
  return typeof key === "string" && key.length > 0 ? key : null;
}

/**
 * Formatiert einen Betrag als deutsches Preis-Label.
 * Beispiel: 478 → "478 €", 478.5 → "478,50 €".
 */
function formatPrice(amount: number | undefined, currency: string = "EUR"): string | undefined {
  if (amount === undefined || amount === null || Number.isNaN(amount)) return undefined;
  const symbol = currency === "EUR" ? "€" : currency === "USD" ? "$" : currency;
  const rounded = Math.round(amount);
  return `${rounded.toLocaleString("de-DE")} ${symbol}`;
}

/**
 * Normalisiert die verschachtelte API-Antwort in unsere flache
 * Stay22Accommodation. Defensive Casts für jeden Pfad.
 */
function normalize(
  raw: any,
  meta: { nights?: number; currency?: string } = {},
): Stay22Accommodation {
  const currency = meta.currency || raw?.price?.currency || "EUR";
  const total: number | undefined = raw?.price?.total;
  const perNight =
    total !== undefined && meta.nights && meta.nights > 0
      ? total / meta.nights
      : undefined;

  return {
    id: raw?.id ? String(raw.id) : undefined,
    name: raw?.name ?? "",
    type: raw?.type,
    image: raw?.media?.thumbnail,
    link: raw?.links?.url,
    rating: raw?.rating
      ? { score: raw.rating.value, count: raw.rating.count }
      : undefined,
    starRating: raw?.rating?.hotelStars,
    price: {
      total,
      perNight,
      currency,
      formattedTotal: formatPrice(total, currency),
      formattedPerNight: formatPrice(perNight, currency),
    },
    address: raw?.location
      ? {
          full: raw.location.address,
          cityName: raw.location.cityName,
          areaName: raw.location.areaName,
        }
      : undefined,
    distance: raw?.location?.distanceInMeters,
    geo: raw?.location?.coordinates
      ? { lat: raw.location.coordinates.lat, lng: raw.location.coordinates.lng }
      : undefined,
    policies: raw?.policies,
  };
}

/**
 * Sucht Live-Accommodations via Stay22 API.
 *
 * Returns null wenn STAY22_API_KEY fehlt — Caller muss das defensiv
 * handhaben (Component versteckt sich, Page zeigt nur statische Hotels).
 *
 * Quirk: Die API-Parameter minguestrating und minstarrating liefern in
 * der Praxis 0 Treffer für City-Searches, auch wenn die Roh-Daten passen
 * würden. Wir filtern deshalb CLIENT-SEITE nach dem Fetch — Reihenfolge:
 *   1. API-Call ohne Rating-Filter (bekommt alle Hotels)
 *   2. Lokales Filtern via minguestrating-/minstarrating-Optionen
 *   3. Slice auf limit
 */
export async function searchAccommodations(
  options: Stay22SearchOptions,
): Promise<Stay22Accommodation[] | null> {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("[stay22] STAY22_API_KEY env var fehlt - Live-Hotels werden übersprungen.");
    return null;
  }

  // Rating-Filter clientseitig anwenden — die API-Variante scheint
  // 0 Treffer für City-Searches zu liefern. Wir merken sie hier vor
  // und entfernen sie aus den URL-Params unten.
  const minGuest = options.minguestrating;
  const minStar = options.minstarrating;
  const userLimit = options.limit ?? 10;

  // Stay22 antwortet HTTP 400 wenn die address Umlaute enthält.
  // Transparent ersetzen, damit Callsites "Köln" schreiben können.
  const safeOptions: Stay22SearchOptions = { ...options };
  // Diese Filter NICHT an die API schicken — wir filtern lokal.
  delete safeOptions.minguestrating;
  delete safeOptions.minstarrating;
  // Höheres API-Limit holen, damit nach lokalem Filtern noch genug übrig ist.
  if (minGuest || minStar) {
    // Die API deckelt `limit` bei 100 und quittiert alles darueber mit
    // HTTP 400 (VALIDATION_ERROR). Das ist hier real passiert: getTopHotels
    // multipliziert fuer den Stadt-Filter schon mit 3 (8 -> 30), hier kaeme
    // dann noch mal *4 dazu (-> 120). Ergebnis war ein leerer Hotelblock.
    safeOptions.limit = Math.min(Math.max(userLimit * 4, 40), 100);
  }
  if (typeof safeOptions.address === "string") {
    safeOptions.address = safeOptions.address
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/Ä/g, "Ae")
      .replace(/Ö/g, "Oe")
      .replace(/Ü/g, "Ue")
      .replace(/ß/g, "ss");
    // Stay22 versteht "Cologne" zuverlässiger als "Koeln" — hart mappen.
    safeOptions.address = safeOptions.address.replace(/\bKoeln\b/g, "Cologne");
  }

  const params = new URLSearchParams();
  Object.entries(safeOptions).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") {
      params.set(k, String(v));
    }
  });

  const url = `${API_BASE}/accommodations?${params.toString()}`;

  // Cache-Hit: return identical result without API call
  if (responseCache.has(url)) {
    return responseCache.get(url) ?? null;
  }

  // Throttle, damit wir die Rate-Limit-Grenze (~1 req/s) nicht reissen
  await throttle();

  try {
    const res = await fetch(url, {
      headers: {
        "X-API-Key": apiKey,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(
        `[stay22] API ${res.status} für ${options.address ?? "lat/lng-search"}: ${body.slice(0, 200)}`,
      );
      // Retry once with backoff on 429 (rate limit)
      if (res.status === 429) {
        await new Promise((r) => setTimeout(r, 3000));
        lastCallAt = Date.now();
        const retry = await fetch(url, {
          headers: { "X-API-Key": apiKey, Accept: "application/json" },
        });
        if (retry.ok) {
          const data = await retry.json();
          const results = Array.isArray(data) ? data : (data?.results ?? []);
          const meta = !Array.isArray(data) ? data?.meta : undefined;
          const normalized = results
            .map((r: any) => normalize(r, meta || {}))
            .filter((h: Stay22Accommodation) => {
              if (minGuest !== undefined && (h.rating?.score ?? 0) < minGuest) return false;
              if (minStar !== undefined && (h.starRating ?? 0) < minStar) return false;
              return true;
            })
            .slice(0, userLimit);
          responseCache.set(url, normalized);
          return normalized;
        }
      }
      responseCache.set(url, null);
      return null;
    }

    const data = (await res.json()) as
      | { results?: any[]; meta?: { nights?: number; currency?: string } }
      | any[];

    const results = Array.isArray(data) ? data : data.results ?? [];
    const meta = !Array.isArray(data) ? data.meta : undefined;

    let normalized = results.map((r) => normalize(r, meta || {}));

    // Client-side Rating-Filter (siehe Quirk-Erklärung oben).
    if (minGuest !== undefined) {
      normalized = normalized.filter((h) => (h.rating?.score ?? 0) >= minGuest);
    }
    if (minStar !== undefined) {
      normalized = normalized.filter((h) => (h.starRating ?? 0) >= minStar);
    }

    const final = normalized.slice(0, userLimit);
    responseCache.set(url, final);
    return final;
  } catch (err) {
    console.error("[stay22] Fetch fehlgeschlagen:", err);
    responseCache.set(url, null);
    return null;
  }
}

/**
 * Convenience: Top-Hotels nach Adresse + Bewertung.
 * Default-Filter: ab 8.0 Gäste-Score, 3+ Sterne.
 */
/**
 * Haeuser, die nicht in der Zielstadt liegen, fliegen raus.
 *
 * Eine reine address-Suche liefert auch Haeuser der Nachbarstadt - auf
 * ludwigshafen standen fuenf von acht "bestbewerteten Hotels" auf der
 * Mannheimer Rheinseite. Deshalb: enger Radius um die Stadtkoordinate plus
 * Abgleich des von der API gelieferten Ortsnamens.
 */
export function isInCity(h: Stay22Accommodation, cityName: string): boolean {
  const fold = (s: string) =>
    s.toLowerCase()
      .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");
  const needle = fold(cityName);
  const haystack = fold(
    [h.address?.cityName, h.address?.full].filter(Boolean).join(" "),
  );
  // Ohne Ortsangabe der API laesst sich nichts widerlegen -> drin lassen,
  // der Radius-Filter hat dann schon gegriffen.
  if (!haystack.trim()) return true;
  return haystack.includes(needle);
}

export async function getTopHotels(
  address: string,
  lmaId: string,
  opts: Partial<Stay22SearchOptions> & { cityName?: string } = {},
): Promise<Stay22Accommodation[] | null> {
  const { cityName, ...searchOpts } = opts;
  const wanted = searchOpts.limit ?? 12;
  // Koordinate + Radius schlagen die Adresse: beides gleichzeitig zu schicken
  // ueberlaesst der API die Wahl. Nur eines von beidem geht raus.
  const byGeo = searchOpts.lat !== undefined && searchOpts.lng !== undefined;

  const results = await searchAccommodations({
    provider: "booking",
    ...(byGeo ? {} : { address }),
    type: "hotel",
    minguestrating: 8.0,
    minstarrating: 3,
    currency: "EUR",
    lang: "de",
    aid: lmaId,
    campaign: lmaId,
    ...searchOpts,
    // Nach dem Stadt-Filter bleibt weniger uebrig, als die API liefert.
    limit: cityName ? Math.max(wanted * 3, 30) : wanted,
  });

  if (!results || !cityName) return results;
  return results.filter((h) => isInCity(h, cityName)).slice(0, wanted);
}
