# Improvement-Plan: speyer-interaktiv.de

> Automatisches Audit vom 2026-07-04. Abarbeitbar von jeder Claude-Session. Vor Deploy: Hosting laut ClickUp-Task prüfen.

## 1. Status (Live?, Hosting/Deploy, Build-Stand)

- **Live:** Ja. Apex liefert HTTP 200 via Cloudflare (Pages, `pages_build_output_dir = "./dist"` in `wrangler.toml`). Sitemap live mit 98 URLs (`/sitemap-index.xml`, altes `/wp-sitemap.xml` wird sauber per 301 dorthin umgeleitet, WP ist abgelöst).
- **Repo:** `strkmrktnghdlbrg/speyer-interaktiv-astro` (GitHub), Branch `main` clean und synchron mit origin. Letzter Commit 2026-07-03 (Apotheken-Seiten). CF-Pages = Push ist Deploy.
- **Stack:** Astro 5 + Tailwind 4 + `@astrojs/cloudflare` (static output), Sitemap-Integration aktiv. Dev-Port 4327.
- **Build-Stand:** 33 Page-Dateien in `src/pages/` (Sehenswürdigkeiten, Stadtteile, Hotels, Restaurants, Feste, Wissenswertes, Reiseplaner, News, Kategorien, Suche, Apotheken x2, Hotel-Landingpages). 15 Wissenswertes-Bodies liegen in `src/content/wissenswertes/`.
- **WP-Migration:** Redirect-Mapping doppelt gepflegt (`astro.config.mjs` + `public/_redirects`, 98 Zeilen). Laut `../speyer-wp-ranking-audit.md` (2026-06-02) haben alle 52 WP-Sitemap-URLs einen 301; Stichprobe `/dom` liefert live 301 auf `/sehenswuerdigkeiten/kaiserdom`. Keine bezahlten Gastbeiträge im Audit vermerkt.
- **Phase 2 (News-Pipeline):** Vorbereitet aber aus. `features.news.enabled = false` in `src/data/features.ts`, D1-Binding in `wrangler.toml` auskommentiert (`REPLACE_AFTER_WRANGLER_D1_CREATE`), Cron-Worker `worker/cron.ts` nicht deployed.

## 2. Kritische Findings (Sicherheit, kaputte Links, Canonical)

1. **Impressum live mit TODO-Platzhaltern (rechtliches Risiko, höchste Priorität):** `https://speyer-interaktiv.de/impressum/` zeigt aktuell `TODO_STREET`, `TODO_POSTCODE`, `TODO_CITY`, `TODO_HOUSE_NUMBER`, `TODO_DIRECTOR_NAME` usw. Quelle: `src/data/legal.ts`. Zusätzlich falsche Rechtsform: dort steht "Limited Company (UK)" / "United Kingdom" - laut `WEBMAGICS-LTD-STAMMDATEN.md` ist Webmagics Ltd. aber in Zypern ansässig (Gladstonos 12-14, 8046 Paphos, USt-IdNr `CY10400045Y`). Stammdaten aus der Referenzdatei übernehmen, nichts erfinden.
2. **www/Apex-Canonical-Problem (Pflicht-Finding):** `https://speyer-interaktiv.de/` UND `https://www.speyer-interaktiv.de/` liefern beide HTTP 200, kein Redirect. Der Canonical-Tag zeigt zwar auf Apex (mildert Duplicate Content), aber laut Projektregel muss eine Variante hart per 301 auf die andere. Auf CF-Pages: `functions/_middleware.js` anlegen, das `www.` per 301 auf Apex umleitet (Apex = site-URL in `astro.config.mjs`).
3. **AdSense-Diskrepanz:** `public/ads.txt` ist live mit `pub-7432388986384363`, aber in `src/data/adsense.ts` ist `publisherId: ""` und `enabled: false` - es lädt also kein AdSense-Script, keine Ad-Einnahmen trotz ads.txt. Entweder Publisher-ID eintragen und aktivieren oder ads.txt-Zweck klären.
4. **Sicherheit: unauffällig.** Keine hartkodierten Secrets in `src/`, `worker/`, `public/` gefunden (Stay22-API-Key und `ANTHROPIC_API_KEY` sauber über Env-Vars, nur `.env.example` im Git). Keine `http://`-Links in src. Affiliate-`/r/`-Redirects funktionieren live (302 auf awin1.com mit clickref).

## 3. Vollendung (was zum Fertigstellen fehlt)

- **Impressum/Datenschutz-Daten:** `src/data/legal.ts` komplett füllen (siehe Finding 1). Telefon/E-Mail prüfen (`kontakt@speyer-interaktiv.de` als Annahme markiert).
- **GTM-ID fehlt:** `src/data/analytics.ts` hat `// TODO: GTM-ID für Speyer-Interaktiv nachreichen`. Ohne GTM kein Tracking/Consent-Management über Dashboard.
- **AdSense:** Publisher-ID + `enabled: true` in `src/data/adsense.ts` (Auto-Ads-Modus vorbereitet).
- **News-Pipeline (Phase 2, optional):** `wrangler d1 create speyer-news`, ID in `wrangler.toml` eintragen, Migrationen aus `migrations/` anwenden, `worker/cron.ts` deployen, dann `features.news.enabled = true`. Bis dahin laufen die News-Routen mit Seed-Fallback.
- **DEPLOYMENT-PLAN.md aktualisieren:** Der Plan beschreibt teils veralteten Stand ("Stay22 enabled: false", "Bodies noch zu migrieren") - Stay22/GYG sind live enabled, 15 Wissenswertes-Bodies liegen in `src/content/wissenswertes/`. Kurz abgleichen und Erledigtes abhaken.

## 4. Monetarisierung (vorhanden / fehlend / kaputt)

**Vorhanden und live:**
- **Stay22:** `lmaId: "6a1c4a776b16982d6c05db05"` + `apiAid: "starkmarketinggmbh"` in `src/data/affiliate.ts`, enabled, letmeallez.js lädt auf der Live-Homepage. Map-Embed nutzt korrekt `/embed/gm` (Fix in Commit 51b6ba5). Komponenten: `Stay22Map`, `Stay22TopHotels`, `Stay22NearbyHotels`. Prüfen: lmaID gegen `STAY22-IDS-REFERENCE.md` verifizieren, dass es die individuelle Speyer-Property ist (Pflicht laut Projektregel, nie von anderem Portal übernehmen).
- **GetYourGuide:** Partner-ID `1UPZQQB`, enabled, City-Frame lädt live. Kuratierte Offer-Map in `src/data/gygOffers.ts` (Widget nur wo echtes Inventar existiert - gutes Pattern).
- **Apotheken-Duo:** `/apotheken-speyer/` (lokal) + `/online-apotheke-speyer/` (Awin-Vergleich) nach Frankfurt-Vorbild, mit `/r/`-Redirects (DocMorris, Shop-Apotheke, Mediherz) in `public/_redirects` UND `public/.htaccess` (Apache-Fallback). Live getestet: `/r/docmorris` = 302 auf awin1.com.

**Fehlend:**
- **AdSense** (siehe Finding 3) und **GTM** (siehe §3) - beide Hooks in `BaseLayout.astro` vorhanden, nur IDs fehlen.
- **Parken-und-Fliegen-Landingpage:** Pattern läuft in 9 Portalen (Awin mid 14793, `/r/parken-fliegen`), Speyer fehlt. Naheliegend: `/parken-flughafen-frankfurt/` oder Stuttgart-Variante (Speyer liegt zwischen FRA und STR), siehe `reference_parken_und_fliegen_affiliate.md`.
- **Eventbrite:** nicht integriert (in Köln vorhanden) - für Speyer optional, Feste-Sektion existiert bereits.

**Kaputt:** nichts Funktionales gefunden.

## 5. SEO & Traffic (Struktur, interne Links, GEO/AI-Search)

- **Sitemap:** `@astrojs/sitemap` aktiv, 98 URLs live, Feature-Flag-Filter blendet deaktivierte Bereiche aus. Gut.
- **JSON-LD:** breit aufgestellt: `City`, `TouristAttraction`, `Hotel` (mit `AggregateRating`), `Restaurant`, `Event`, `FAQPage` (2x mit 7 Questions), `ItemList`/`ListItem` (Breadcrumbs), `WebSite`+`SearchAction`, `Organization`. Achtung Projektregel: Organization/publisher darf nicht auf Webmagics zeigen (nur Impressum) - kurz prüfen, wie `Organization` befüllt ist.
- **Interne Verlinkung:** Silo-Verlinkung frisch eingebaut (Commit 7e4b20f: Related-/Sibling-Blöcke + Hub-Spoke-Links). Startseiten-Suche mit `/suche` + `search-index.json` vorhanden.
- **GEO/AI-Search:** FAQPage-Schema bisher nur auf den 2 Apotheken-Seiten. Ausbau nötig: frage-basierte FAQ-Blöcke (+ Schema) auf die Money-Pages (Hotels-Index, Top-10-Hotels, Wellness-Hotels, Technik-Museum, Kaiserdom, Reiseplaner) bringen - Fragen wie "Wo übernachtet man in Speyer am besten?", "Was kostet der Eintritt ins Technik Museum Speyer?". Kontext-Attribute (Preise, Entfernungen zum Dom, Öffnungszeiten) in extrahierbaren Listen/Tabellen halten.
- **WP-Redirects:** vollständig laut Ranking-Audit, doppelt gepflegt (`_redirects` gewinnt). Bei künftigen URL-Änderungen beide Quellen synchron halten.
- **Faktenbasis:** `../speyer-recherche.md` als verifizierte Quelle nutzen, keine erfundenen Hotels/Slugs (goldene Regel dort beachten).

## 6. Neue Buyer-Intent-Seiten (Tabelle: URL | Keyword-Idee | Monetarisierung)

Bereits vorhanden: `/top-10-hotels-speyer/`, `/wellness-hotels-speyer/`, `/hotels-speyer-[event]/` (11 Events inkl. Brezelfest, Weihnachtsmarkt, Rhein in Flammen), Apotheken-Duo. Lücken:

| URL | Keyword-Idee | Monetarisierung |
|---|---|---|
| `/hotels-speyer-dom-naehe/` | hotel speyer nähe dom / hotel am dom speyer | Stay22 (TopHotels + Map, Filter Umkreis Dom) |
| `/technik-museum-speyer-tickets/` | technik museum speyer tickets preise, eintritt | GYG-Widget (Tickets) + Stay22 NearbyHotels als Kombi "Ticket + Hotel" |
| `/ferienwohnungen-speyer/` | ferienwohnung speyer altstadt / zentrum | Stay22 (letmeallez rewritet auch Apartment-Links, Map-Widget) |
| `/sea-life-speyer/` | sea life speyer tickets preise öffnungszeiten | GYG (Tickets), Stay22 NearbyHotels, intern zu Reiseplaner mit-Kindern |
| `/weinprobe-pfalz-ab-speyer/` | weinprobe pfalz, weintour deutsche weinstraße ab speyer | GYG (Weintouren-Query), Stay22 für Übernachtung |
| `/parken-in-speyer/` | parken speyer altstadt kostenlos, parkhaus dom | Informational-Hook + interner Link auf Parken-Fliegen-Seite + AdSense |
| `/parken-flughafen-frankfurt/` (oder Stuttgart) | parken flughafen frankfurt günstig | Awin mid 14793 via `/r/parken-fliegen` (Pattern aus `reference_parken_und_fliegen_affiliate.md`) |
| `/schifffahrt-speyer/` | rheinschifffahrt speyer, schiffsrundfahrt | GYG (Bootstouren-Query), Stay22 |
| `/tagungshotels-speyer/` | tagungshotel speyer, businesshotel | Stay22 (Event-Key `geschaeftsreise` existiert schon in `src/data/events.ts` - verlinken) |
| `/romantik-wochenende-speyer/` | romantisches wochenende pfalz zu zweit | Stay22 (Wellness-Hotels verlinken) + GYG (Dinner/Touren) |

Umsetzung jeweils als eigene `.astro`-Page nach Vorbild `src/pages/wellness-hotels-speyer.astro` (FAQ-Block + FAQPage-Schema + Stay22/GYG-Komponenten), Fakten gegen `../speyer-recherche.md` verifizieren.

## 7. Priorisierte Tasks (nummerierte [ ]-Checkliste, konkret für eine frische Session, mit Dateipfaden)

1. [ ] **Impressum fixen (SOFORT):** `src/data/legal.ts` - alle `TODO_*`-Platzhalter durch echte Webmagics-Ltd.-Stammdaten aus `/Users/joshuastark/Documents/Claude Code/WEBMAGICS-LTD-STAMMDATEN.md` ersetzen (Gladstonos 12-14, 8046 Paphos, Zypern, `CY10400045Y`); Rechtsform-Angabe "Limited Company (UK)" korrigieren. Danach build + push (CF-Pages deployt automatisch).
2. [x] **www-301 einrichten:** (erledigt 2026-07-04: functions/_middleware.js angelegt) `functions/_middleware.js` im Projektroot anlegen (CF-Pages-Pattern wie bei safercity.de): Requests mit Host `www.speyer-interaktiv.de` per 301 auf `https://speyer-interaktiv.de` + Pfad umleiten. Verifizieren: `curl -sI https://www.speyer-interaktiv.de/` muss 301 liefern.
3. [ ] **Stay22 lmaID verifizieren:** `6a1c4a776b16982d6c05db05` in `src/data/affiliate.ts` gegen `/Users/joshuastark/Documents/Claude Code/STAY22-IDS-REFERENCE.md` prüfen - muss die individuelle Speyer-Property sein, sonst beim User die richtige lmaID erfragen.
4. [ ] **AdSense klären/aktivieren:** Publisher-ID vom User erfragen (ads.txt enthält bereits `pub-7432388986384363`), in `src/data/adsense.ts` eintragen und `enabled: true` setzen. Parallel GTM-ID für `src/data/analytics.ts` erfragen.
5. [ ] **Organization-Schema prüfen:** in `src/layouts/BaseLayout.astro` bzw. Schema-Komponenten sicherstellen, dass Webmagics nicht als publisher/Betreiber außerhalb des Impressums auftaucht (Projektregel: Footer/Schema = Marke, Betreiber nur im Impressum).
6. [ ] **Parken-Fliegen-Landingpage bauen:** `/parken-flughafen-frankfurt/` nach Pattern aus `reference_parken_und_fliegen_affiliate.md` (Awin mid 14793, `/r/parken-fliegen`-Redirect in `public/_redirects` + `public/.htaccess` ergänzen).
7. [ ] **2-3 Buyer-Intent-Seiten aus §6 umsetzen:** Start mit `/hotels-speyer-dom-naehe/`, `/technik-museum-speyer-tickets/`, `/ferienwohnungen-speyer/` - Vorlage `src/pages/wellness-hotels-speyer.astro`, GYG-Einträge in `src/data/gygOffers.ts` ergänzen, Fakten aus `../speyer-recherche.md`.
8. [ ] **FAQ/GEO-Ausbau:** FAQ-Blöcke + FAQPage-Schema auf `src/pages/hotels/index.astro`, `src/pages/top-10-hotels-speyer.astro` und die Kaiserdom-/Technik-Museum-Sights ergänzen (frage-basierte H2/H3, extrahierbare Antworten in 2-4 Sätzen).
9. [ ] **News-Pipeline aktivieren (optional, Phase 2):** `wrangler d1 create speyer-news`, ID in `wrangler.toml` einkommentieren, `wrangler d1 migrations apply speyer-news --remote`, `wrangler deploy worker/cron.ts` (Secret `ANTHROPIC_API_KEY` setzen), dann `news.enabled = true` in `src/data/features.ts`.
10. [ ] **DEPLOYMENT-PLAN.md abgleichen:** erledigte Punkte (Stay22/GYG enabled, Bodies migriert, Domain live) als erledigt markieren, damit künftige Sessions nicht Veraltetes abarbeiten.
