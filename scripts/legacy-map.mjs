// Einzige Quelle der Wahrheit fuer alle Alt-URL-Weiterleitungen (WordPress -> Astro).
//
// Von hier aus werden generiert:
//   public/_redirects   -> node scripts/build-redirects.mjs
//   Pruefung live/lokal -> node scripts/verify-redirects.mjs <basis-url>
//
// Quellen der Alt-URLs: City Portale/speyer-wp-extracts.md ("URL alt:"),
// speyer-wp-ranking-audit.md (WP-Sitemap) und der DataForSEO-Befund im
// War Room (Fable5-SEO-War-Room/output/BRIEF.md).
//
// Pfade OHNE Schraegstrich notieren; der Generator erzeugt beide Schreibweisen.

export const GROUPS = [
  {
    title: "Sehenswuerdigkeiten (WP-Posts)",
    rules: [
      ["/dom", "/sehenswuerdigkeiten/kaiserdom"],
      ["/der-kaiserdom", "/sehenswuerdigkeiten/kaiserdom"],
      ["/kaiser-und-mariendom", "/sehenswuerdigkeiten/kaiserdom"],
      ["/altpoertel", "/sehenswuerdigkeiten/altpoertel"],
      ["/das-historische-museum-der-pfalz", "/sehenswuerdigkeiten/historisches-museum-der-pfalz"],
      ["/das-technik-museum", "/sehenswuerdigkeiten/technik-museum"],
      ["/die-dreifaltigkeitskirche", "/sehenswuerdigkeiten/dreifaltigkeitskirche"],
      ["/die-gedaechtniskirche-der-protestation", "/sehenswuerdigkeiten/gedaechtniskirche"],
      ["/juedisches-erbe", "/sehenswuerdigkeiten/judenhof"],
      ["/das-adenauerpark-und-die-mittelalterlichen-stadtmauern", "/sehenswuerdigkeiten/adenauerpark"],
      ["/die-alte-muenze", "/sehenswuerdigkeiten/alte-muenze"],
      ["/das-fischertor", "/sehenswuerdigkeiten/fischertor"],
      ["/rathaus", "/sehenswuerdigkeiten/rathaus"],
      ["/pfaelzische-landesbibliothek", "/sehenswuerdigkeiten/pfaelzische-landesbibliothek"],
      ["/stadtbefestigung", "/sehenswuerdigkeiten/adenauerpark"],
      ["/historische-gasthaeuser", "/wissenswertes/historische-gasthaeuser"],
      ["/altstadt", "/stadtteile/altstadt"],
    ],
  },
  {
    title: "Themen / Wissenswertes (Geschichts-Posts)",
    rules: [
      ["/roemisches-speyer", "/wissenswertes/roemisches-speyer"],
      ["/mittelalterliches-speyer", "/wissenswertes/mittelalterliches-speyer"],
      ["/zeitalter-der-reformation", "/wissenswertes/reformation"],
      ["/dreissigjaehrigen-krieg", "/wissenswertes/dreissigjaehriger-krieg"],
      ["/die-salier", "/wissenswertes/salier"],
      ["/die-hexenverfolgung", "/wissenswertes/hexenverfolgung"],
      ["/die-baukunst", "/wissenswertes/baukunst"],
      ["/archaeologische-funde", "/wissenswertes/archaeologische-funde"],
      ["/kulturerbe", "/wissenswertes/kulturerbe"],
      ["/die-landung-des-grafen-zeppelin", "/wissenswertes/zeppelin-landung"],
      ["/kriegsdenkmaeler", "/wissenswertes/kriegsdenkmaeler"],
      ["/bim-speyer-zukunft", "/wissenswertes/bim-speyer-zukunft"],
      ["/weshalb-du-einen-makler-beauftragen-solltest", "/wissenswertes/makler-beauftragen"],
      ["/hochzeitsplanung", "/wissenswertes/hochzeitsplanung"],
    ],
  },
  {
    title: "Feste / Veranstaltungen",
    rules: [
      ["/der-speyerer-weihnachtsmarkt", "/feste/weihnachtsmarkt"],
      ["/speyerer-fastnacht", "/feste/fastnacht"],
    ],
  },
  {
    // Zwei WP-Generationen: erst /hotels/<sub>/ (so in den Extracts belegt),
    // spaeter /hotels-in-speyer/<sub>/ (so in der WP-Sitemap und im
    // DataForSEO-Ranking). Beide Familien bekommen Regeln.
    title: "Hotels-Stadtteile (alte WP-Subpages, beide Generationen)",
    rules: [
      ["/hotels-in-speyer", "/hotels"],
      ["/hotels-in-speyer/hotels-in-speyer-altstadt", "/stadtteile/altstadt"],
      ["/hotels-in-speyer/hotels-speyer-kernstadt", "/stadtteile/altstadt"],
      ["/hotels-in-speyer/hotels-speyer-nord", "/stadtteile/nord"],
      ["/hotels-in-speyer/hotels-speyer-sud", "/stadtteile/sued"],
      ["/hotels-in-speyer/hotels-speyer-west", "/stadtteile/west"],
      ["/hotels-in-speyer/hotels-speyer-erlach", "/stadtteile/erlach"],
      ["/hotels-in-speyer/hotels-speyer-im-neuen-rheinhafen", "/stadtteile/rheinhafen"],
      ["/hotels-in-speyer/unterkunft-speyer-ost", "/stadtteile/erlach"],
      ["/hotels-in-speyer/unterkunft-speyer-edith-stein-viertel", "/stadtteile/edith-stein-viertel"],
      ["/hotels-in-speyer/unterkunft-speyer-schifferstadt-grenze", "/stadtteile/sued"],
      ["/hotels/hotels-in-speyer-altstadt", "/stadtteile/altstadt"],
      ["/hotels/hotels-speyer-kernstadt", "/stadtteile/altstadt"],
      ["/hotels/hotels-speyer-nord", "/stadtteile/nord"],
      ["/hotels/hotels-speyer-sud", "/stadtteile/sued"],
      ["/hotels/hotels-speyer-west", "/stadtteile/west"],
      ["/hotels/hotels-speyer-erlach", "/stadtteile/erlach"],
      ["/hotels/hotels-speyer-im-neuen-rheinhafen", "/stadtteile/rheinhafen"],
      ["/hotels/unterkunft-speyer-ost", "/stadtteile/erlach"],
      ["/hotels/unterkunft-speyer-edith-stein-viertel", "/stadtteile/edith-stein-viertel"],
      ["/hotels/unterkunft-speyer-schifferstadt-grenze", "/stadtteile/sued"],
    ],
  },
  {
    title: "WP-Kategorien /thema/*",
    rules: [
      ["/thema/sehenswuerdigkeiten", "/sehenswuerdigkeiten"],
      ["/thema/tourismus", "/sehenswuerdigkeiten"],
      ["/thema/veranstaltungen", "/feste"],
      ["/thema/dienstleistungen", "/branchenverzeichnis"],
      ["/thema/immobilien", "/wissenswertes"],
      ["/thema/hochzeitsplanung", "/wissenswertes/hochzeitsplanung"],
      ["/thema/technologie", "/wissenswertes"],
      ["/thema/leben-in-speyer", "/wissenswertes"],
      ["/thema/freizeit", "/sehenswuerdigkeiten"],
      ["/branchen", "/branchenverzeichnis"],
    ],
  },
  {
    title: "WP-Sitemaps (Yoast) -> neue Sitemap",
    rules: [
      ["/wp-sitemap.xml", "/sitemap-index.xml"],
      ["/sitemap.xml", "/sitemap-index.xml"],
      ["/post-sitemap.xml", "/sitemap-index.xml"],
      ["/page-sitemap.xml", "/sitemap-index.xml"],
      ["/category-sitemap.xml", "/sitemap-index.xml"],
    ],
  },
];

const AWIN = (params) => `https://www.awin1.com/${params}&clickref=speyer-interaktiv.de`;

export const AFFILIATE = [
  ["/r/docmorris", AWIN("cread.php?s=2490784&v=14485&q=372737&r=514869")],
  ["/r/docmorris-10euro", AWIN("cread.php?s=2490784&v=14485&q=372737&r=514869")],
  ["/r/shop-apotheke", AWIN("cread.php?s=3450028&v=13808&q=471107&r=514869")],
  ["/r/shop-apotheke-rezept", AWIN("cread.php?s=3450028&v=13808&q=471107&r=514869")],
  ["/r/mediherz", AWIN("cread.php?s=2269210&v=11630&q=348918&r=514869")],
  ["/r/mediherz-gutscheine", AWIN("cread.php?s=2269210&v=11630&q=348918&r=514869")],
  ["/r/medpex", AWIN("awclick.php?gid=447437&mid=36320&awinaffid=514869&linkid=3237938")],
  ["/r/medpex-zuzahlungsfrei", AWIN("awclick.php?gid=447437&mid=36320&awinaffid=514869&linkid=3237938")],
  [
    "/r/fliegende-pillen",
    "https://t.adcell.com/p/click?promoId=120221&slotId=78194&subId=speyer-interaktiv.de&param0=https://www.fliegende-pillen.de/",
  ],
  ["/r/parken-fliegen", AWIN("cread.php?awinmid=14793&awinaffid=514869")],
];
