import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@tailwindcss/vite";

/**
 * Affiliate-Links laufen portfolioweit ueber ein robots-gesperrtes /go/-Gate,
 * damit Crawler und Link-Checker keine Klicks in den Partnerprogrammen
 * erzeugen. Die Integration arbeitet auf dem fertigen HTML - das passt hier,
 * weil `output: "static"` alles prerendert; einzige SSR-Route ist /news/*,
 * und dort stehen keine Affiliate-Links.
 */
import outboundGate from "./integrations/outbound-gate.mjs";

import { unverifiedRestaurantSlugs } from "./src/data/restaurants.ts";
import { restaurantsEn } from "./src/i18n/en/restaurants.ts";

/**
 * Zurueckgezogene Betriebe gehoeren nicht in die Sitemap. Die Detailseite
 * traegt bereits noindex; die Sitemap wuerde Google sonst weiter aktiv auf
 * sie hinweisen. Deutsche und englische URL beide raus.
 */
const withdrawnPaths = new Set([
  ...[...unverifiedRestaurantSlugs].flatMap((slug) => [
    `/restaurants/${slug}/`,
    ...(restaurantsEn[slug] ? [`/en/restaurants/${restaurantsEn[slug].slug}/`] : []),
  ]),
]);

const isWithdrawn = (page) => withdrawnPaths.has(new URL(page).pathname);

export default defineConfig({
  site: "https://speyer-interaktiv.de",
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
    platformProxy: { enabled: true },
  }),
  // -------------------------------------------------------------------
  // 301-Redirects WordPress → Astro
  // -------------------------------------------------------------------
  // Konsolidiert die alten WP-URLs auf neue Astro-Routen.
  // Bei statischem Output erzeugt Astro HTML-Meta-Refresh statt echter
  // 301 — auf Cloudflare Pages liefert `public/_redirects` echte 301.
  // Beide Quellen werden zusammengeführt.
  redirects: {
    // --- Sehenswürdigkeiten (Sights aus WP-Posts) ---
    "/dom": "/sehenswuerdigkeiten/kaiserdom",
    "/der-kaiserdom": "/sehenswuerdigkeiten/kaiserdom",
    "/kaiser-und-mariendom": "/sehenswuerdigkeiten/kaiserdom",
    "/altpoertel": "/sehenswuerdigkeiten/altpoertel",
    "/das-historische-museum-der-pfalz": "/sehenswuerdigkeiten/historisches-museum-der-pfalz",
    "/das-technik-museum": "/sehenswuerdigkeiten/technik-museum",
    "/die-dreifaltigkeitskirche": "/sehenswuerdigkeiten/dreifaltigkeitskirche",
    "/die-gedaechtniskirche-der-protestation": "/sehenswuerdigkeiten/gedaechtniskirche",
    "/juedisches-erbe": "/sehenswuerdigkeiten/judenhof",
    "/das-adenauerpark-und-die-mittelalterlichen-stadtmauern": "/sehenswuerdigkeiten/adenauerpark",
    "/die-alte-muenze": "/sehenswuerdigkeiten/alte-muenze",
    "/das-fischertor": "/sehenswuerdigkeiten/fischertor",
    "/rathaus": "/sehenswuerdigkeiten/rathaus",
    "/pfaelzische-landesbibliothek": "/sehenswuerdigkeiten/pfaelzische-landesbibliothek",
    "/stadtbefestigung": "/sehenswuerdigkeiten/adenauerpark",
    "/historische-gasthaeuser": "/wissenswertes/historische-gasthaeuser",
    "/altstadt": "/stadtteile/altstadt",

    // --- Themen / Wissenswertes (Geschichts-Posts) ---
    "/roemisches-speyer": "/wissenswertes/roemisches-speyer",
    "/mittelalterliches-speyer": "/wissenswertes/mittelalterliches-speyer",
    "/zeitalter-der-reformation": "/wissenswertes/reformation",
    "/dreissigjaehrigen-krieg": "/wissenswertes/dreissigjaehriger-krieg",
    "/die-salier": "/wissenswertes/salier",
    "/die-hexenverfolgung": "/wissenswertes/hexenverfolgung",
    "/die-baukunst": "/wissenswertes/baukunst",
    "/archaeologische-funde": "/wissenswertes/archaeologische-funde",
    "/kulturerbe": "/wissenswertes/kulturerbe",
    "/die-landung-des-grafen-zeppelin": "/wissenswertes/zeppelin-landung",
    "/kriegsdenkmaeler": "/wissenswertes/kriegsdenkmaeler",
    "/bim-speyer-zukunft": "/wissenswertes/bim-speyer-zukunft",
    "/weshalb-du-einen-makler-beauftragen-solltest": "/wissenswertes/makler-beauftragen",
    "/hochzeitsplanung": "/wissenswertes/hochzeitsplanung",

    // --- Feste / Veranstaltungen ---
    "/der-speyerer-weihnachtsmarkt": "/feste/weihnachtsmarkt",
    "/speyerer-fastnacht": "/feste/fastnacht",

    // --- Hotels-Stadtteile (alte WP-Subpages) → neue Stadtteil-Hubs ---
    "/hotels-in-speyer": "/hotels",
    "/hotels-in-speyer/hotels-in-speyer-altstadt": "/stadtteile/altstadt",
    "/hotels-in-speyer/hotels-speyer-kernstadt": "/stadtteile/altstadt",
    "/hotels-in-speyer/hotels-speyer-nord": "/stadtteile/nord",
    "/hotels-in-speyer/hotels-speyer-sud": "/stadtteile/sued",
    "/hotels-in-speyer/hotels-speyer-west": "/stadtteile/west",
    "/hotels-in-speyer/hotels-speyer-erlach": "/stadtteile/erlach",
    "/hotels-in-speyer/hotels-speyer-im-neuen-rheinhafen": "/stadtteile/rheinhafen",
    "/hotels-in-speyer/unterkunft-speyer-ost": "/stadtteile/erlach",
    "/hotels-in-speyer/unterkunft-speyer-edith-stein-viertel": "/stadtteile/edith-stein-viertel",
    "/hotels-in-speyer/unterkunft-speyer-schifferstadt-grenze": "/stadtteile/sued",

    // --- WP-Kategorien /thema/* → neue Hubs ---
    "/thema/sehenswuerdigkeiten": "/sehenswuerdigkeiten",
    "/thema/tourismus": "/sehenswuerdigkeiten",
    "/thema/veranstaltungen": "/feste",
    "/thema/dienstleistungen": "/branchenverzeichnis",
    // Alter Stub /branchen → neues Verzeichnis
    "/branchen": "/branchenverzeichnis",
    "/thema/immobilien": "/wissenswertes",
    "/thema/hochzeitsplanung": "/wissenswertes/hochzeitsplanung",
    "/thema/technologie": "/wissenswertes",
    "/thema/leben-in-speyer": "/wissenswertes",
    "/thema/freizeit": "/sehenswuerdigkeiten",
  },
  integrations: [
    outboundGate({ siteName: "speyer-interaktiv.de" }),
    sitemap({
      filter: (page) =>
        !isWithdrawn(page) &&
        !page.includes("/impressum") &&
        !page.includes("/datenschutz") &&
        !page.includes("/agb") &&
        !page.includes("/en/imprint") &&
        !page.includes("/en/privacy") &&
        !page.includes("/en/terms") &&
        !page.includes("/404") &&
        !page.includes("/suche") &&
        !page.includes("/werben/buchen") &&
        !page.includes("/news/"),
    }),
  ],
  vite: {
    plugins: [tailwind()],
  },
});
