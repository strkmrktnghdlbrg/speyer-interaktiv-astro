# Speyer-Interaktiv — Deployment-Plan

> Go-Live-Workflow für den Wechsel von WordPress (speyer-interaktiv.de)
> zu Astro/Cloudflare Pages. Schritt-für-Schritt, was wann muss.

---

## 1. Aktueller Stand (Phase 1)

**Lokal lauffähig:** `npm install && npm run build` (Cloudflare-Adapter, Static-Output).
**Astro-Port:** `4327` (`npm run dev`)

**Was funktioniert:**
- Brand-Layer (Domstein-Rot, Fraunces/Inter)
- 16 Sehenswürdigkeiten, 8 Stadtteile, 8 Hotels, 10 Restaurants, 10 Kategorien
- 14 Wissenswertes-Posts (Meta + Lead, Bodies noch zu migrieren)
- 2 Feste (Weihnachtsmarkt, Fastnacht)
- 2 Reiseplaner-Guides (2-Tage-Speyer, mit-Kindern)
- 301-Redirects WP → Astro (sowohl in astro.config.mjs als auch in public/_redirects)
- Stay22-Integration (Snippet + Map-Widget Component, derzeit `enabled: false`)
- GetYourGuide-Integration (Widget-Komponente, derzeit `enabled: false`)
- GTM + AdSense Integration (Hook in BaseLayout, derzeit `enabled: false`)
- News-Routes mit Seed-Fallback (Feature-Flag `news.enabled = false`)
- Sitemap-Filter, robots.txt, Favicon, Logo

**Was fehlt vor Go-Live:**
- Tracking-IDs (Stay22, GYG, GTM, AdSense) → siehe Sektion 4
- Bilder im Image-Registry (`src/data/images.ts`) → Wikimedia-Recherche pro Sight/Stadtteil
- Volltext-Migration der 14 Wissenswertes-Artikel (siehe `../speyer-wp-extracts.md`)
- Hotel-/Restaurant-Verifikation (booking.com-Slugs, Adressen, Öffnungszeiten)
- Echte Impressums-Daten in `src/data/legal.ts`
- Domain im Cloudflare-Account
- DNS-Umzug von WordPress-Hoster zu Cloudflare

---

## 2. Vorbereitende Schritte

### 2.1 Impressum/Datenschutz pflegen
Editieren: `src/data/legal.ts`
- `companyNumber` (Companies-House-Nummer)
- `registeredOffice.street/postcode/city`
- `directors` Array
- `phone`
- `vatId`
- `contentResponsible.name`

### 2.2 Cloudflare-Setup
1. `cloudflare.com` Account, falls noch nicht vorhanden
2. Pages-Projekt anlegen: **`speyer-interaktiv`**
3. Git-Hook konfigurieren (GitHub-Repo) ODER manuelles `wrangler pages deploy`
4. Build-Settings:
   - Build Command: `npm run build`
   - Output: `dist`
   - Node-Version: 20

### 2.3 Custom Domain
1. In Pages-Projekt: **speyer-interaktiv.de** als Custom Domain hinzufügen
2. DNS-Hinweis von Cloudflare folgen (CNAME oder NS-Wechsel)
3. **WICHTIG:** TTL bei aktueller DNS-Konfiguration auf 300s (5 Min) reduzieren, **24h vor Umzug**. Damit propagiert der Wechsel schneller.
4. SSL-Zertifikat: Cloudflare stellt automatisch aus

### 2.4 Search Console
- Property `speyer-interaktiv.de` neu verifizieren via DNS-TXT-Record oder HTML-Tag
- Sitemap einreichen: `https://speyer-interaktiv.de/sitemap-index.xml`
- Bestehende URL-Inspections **nach dem Switch** durchgehen — alte URLs sollten 301 zeigen

---

## 3. Build & Deploy (lokal)

```bash
# Sauberer Build
cd speyer-interaktiv-astro
rm -rf dist node_modules/.astro
npm install
npm run build

# Smoke-Test lokal
npm run preview
# → http://localhost:4327 öffnen

# ZIP für manuelles Upload (falls nicht via Git-Hook)
mkdir -p releases
zip -rq releases/speyer-interaktiv-build-$(date +%Y%m%d-%H%M).zip dist/
```

---

## 4. Feature-Aktivierung (Reihenfolge)

### 4.1 Stay22 (Hotel-Affiliate)
1. **lmaID einholen** beim Stay22-Account-Owner (NICHT von anderem Projekt übernehmen)
2. In `src/data/affiliate.ts`:
   ```ts
   stay22: {
     lmaId: "<deine-lmaID>",
     enabled: true,
   }
   ```
3. Rebuild + Deploy
4. **Verifikation:** In Browser-DevTools auf einer Hotel-Detail-Page prüfen, ob das Stay22-Snippet im `<head>` lädt und der booking.com-CTA mit `?aid=stay22&...` rewritet wird.
5. **Hotel-Slugs prüfen:** vor Aktivierung jeden `bookingUrl` in `src/data/hotels.ts` mit `curl -I` prüfen — 404er = nicht-existenter booking.com-Slug, Hotel umbenennen oder URL korrigieren.

### 4.2 GetYourGuide (Touren/Tickets)
1. **Partner-ID einholen** (GYG-Dashboard, "Tools & Widgets", ~7 alphanumerische Zeichen)
2. In `src/data/affiliate.ts`:
   ```ts
   getYourGuide: {
     partnerId: "<deine-PartnerID>",
     enabled: true,
   }
   ```
3. Rebuild + Deploy
4. **Verifikation:** Sight-Detail-Page öffnen (z.B. `/sehenswuerdigkeiten/kaiserdom/`) → Widget sollte im Loader-Iframe das GYG-Inventar für „Kaiserdom Speyer" anzeigen.
5. **Tour-IDs für Top-Sights pflegen** (optional, höhere Conversion):
   - Pro Top-Sight via `WebSearch "site:getyourguide.com Speyer <Sight-Name>"` → Tour-ID extrahieren
   - In `src/data/sights.ts` als `gygActivityId: "412451"` etc.

### 4.3 GTM
1. **Container-ID einholen** (GTM-XXXXXXX, pro Projekt individuell)
2. In `src/data/analytics.ts`:
   ```ts
   gtmId: "GTM-XXXXXXX",
   enabled: true,
   ```
3. Rebuild + Deploy
4. Im GTM-Dashboard: GA4-Konfiguration, Search-Console-Verifizierung (falls Meta-Tag-Methode), Marketing-Pixel einrichten
5. **Verifikation:** Browser-DevTools → Network-Tab → `gtm.js?id=GTM-...` sollte laden, `dataLayer` muss Pageview enthalten

### 4.4 AdSense
1. **Publisher-ID einholen** (ca-pub-XXXXX, pro Projekt individuell)
2. In `src/data/adsense.ts`: ID setzen, `enabled: true`
3. **`public/ads.txt`** ergänzen: `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`
4. Rebuild + Deploy
5. Im AdSense-Dashboard: Speyer-Interaktiv-Property hinzufügen, ads.txt-Status checken (kann 24-48h dauern)
6. **Auto Ads** aktivieren oder Manual Slots in `adsense.ts.slots` pflegen

### 4.5 News-Pipeline (Phase 2 — wenn gewünscht)
Optional, kann auch erst Wochen nach Go-Live aktiviert werden.
1. `wrangler d1 create speyer-news` → ID in **beiden** wrangler.toml eintragen (Pages + Worker)
2. `wrangler d1 migrations apply speyer-news --remote`
3. Pages-Projekt: D1-Binding `DB` setzen
4. `wrangler secret put ANTHROPIC_API_KEY --config worker/wrangler.toml`
5. `wrangler deploy --config worker/wrangler.toml`
6. `src/lib/news/sources.ts` final pflegen (Rheinpfalz, SWR, Stadt-Speyer-RSS)
7. `src/data/features.ts`: `news.enabled = true`
8. Sitemap-Filter in `astro.config.mjs`: `!page.includes("/news/")` entfernen
9. Rebuild + Deploy
10. Cron im Cloudflare-Dashboard manuell triggern, `news_articles` verifizieren

---

## 5. Verifikation nach Go-Live

### 5.1 Smoke-Tests
- `curl -I https://speyer-interaktiv.de` → 200, HTTPS aktiv
- `curl -I https://speyer-interaktiv.de/sehenswuerdigkeiten/kaiserdom/` → 200
- `curl -I https://speyer-interaktiv.de/stadtteile/altstadt/` → 200
- `curl -I https://speyer-interaktiv.de/hotels/` → 200
- `curl -I https://speyer-interaktiv.de/reiseplaner/2-tage-speyer/` → 200
- `curl -I https://speyer-interaktiv.de/sitemap-index.xml` → 200

### 5.2 301-Redirects (wichtig für SEO-Erhalt!)
```bash
for url in \
  "/der-kaiserdom" \
  "/altpoertel" \
  "/juedisches-erbe" \
  "/das-technik-museum" \
  "/hotels-in-speyer/hotels-speyer-altstadt" \
  "/thema/sehenswuerdigkeiten" \
  "/der-speyerer-weihnachtsmarkt"; do
  echo "=== $url ==="
  curl -sI "https://speyer-interaktiv.de$url" | head -3
done
```
Erwartung: `HTTP/2 301` + `location:` auf neue URL.

### 5.3 noindex-Check
```bash
for p in impressum datenschutz agb 404; do
  curl -s "https://speyer-interaktiv.de/$p/" | grep -q 'noindex' && echo "✓ $p" || echo "✗ $p"
done
```

### 5.4 Schema.org-Markup
- 3-5 zufällige Detail-Pages durch [Schema-Validator](https://validator.schema.org/) jagen
- Erwartet: TouristAttraction, Hotel, Restaurant, BreadcrumbList je nach Page-Typ

### 5.5 Performance
- Lighthouse-Run auf Homepage + Detail-Page
- Zielwerte: Performance > 90, Accessibility > 95, SEO 100, BestPractices > 95
- LCP < 2.5s, CLS < 0.1

---

## 6. Domain-Umzug (Reihenfolge am Tag X)

1. **24-48h vorher:** DNS-TTL auf 300s reduzieren
2. **Tag X morgens:**
   - Final-Build auf Cloudflare Pages live (manuell oder via Git-Push)
   - WP-Hoster: Site in Wartungsmodus oder einfach IP-Wechsel akzeptieren
3. **DNS bei der Domain umstellen** auf Cloudflare-Nameserver oder Cloudflare-CNAME
4. **Verifikation:** `dig speyer-interaktiv.de @8.8.8.8` → Cloudflare-IPs
5. **Search Console:** „URL prüfen" auf 5 wichtige Seiten → sollte „URL ist live" zeigen
6. **6-24h später:** alte 301-Redirects in Search Console anpingen via Sitemap-Re-Submit
7. **Eine Woche später:** Coverage-Report in GSC prüfen — alte URLs sollten als „Weitergeleitet" markiert sein

---

## 7. Rollback-Plan (wenn am Tag X etwas schiefgeht)

| Problem | Sofort-Maßnahme |
|---|---|
| Cloudflare 521 / 522 | Bei Pages: Build-Logs checken, rollback auf vorherigen Build |
| Falsche DNS | Nameserver-Eintrag rückgängig, TTL kurz halten |
| 301-Redirects greifen nicht | `public/_redirects` prüfen, Cloudflare-Cache leeren (Purge Everything) |
| Stay22 lädt nicht | `affiliate.stay22.enabled = false` und sofort deploy |
| Sitemap fehlt | `astro.config.mjs` `site:` prüfen, rebuild |
| Falsches Favicon | `public/favicon.svg` prüfen, hardrefresh im Browser |

**Worst Case:** Cloudflare-DNS auf WP-Hoster-IP zurücksetzen — WordPress läuft dann wieder. Dann in Ruhe debuggen, nochmal deployen.

---

## 8. Phase-1.5 — Nach Go-Live, vor Vollausbau

### 8.1 Wissenswertes-Volltext-Migration
Aktuell zeigen die 14 Wissenswertes-Pages nur den Lead. Originaltexte stehen in `../speyer-wp-extracts.md`.

**Workflow:**
1. Pro Slug die Sektion aus `speyer-wp-extracts.md` rauskopieren
2. Texte um 30-50% kürzen (Ziel ~700-900 Wörter):
   - Wichtige Erkenntnisse-Boxen behalten
   - „Fazit"-Sektion oft redundant — weglassen oder als Lead nutzen
   - AI-typische Phrasen rausstreichen: „Nicht nur…, sondern auch", „Letztendlich", „Es ist wichtig zu beachten", redundante Adjektive
   - FAQ-Sektion KANN bleiben (Schema.org FAQ-Boost)
3. Als Astro-Fragment in `src/pages/wissenswertes/[slug].astro` ergänzen (Body unter dem Lead) ODER als MD in `src/content/wissenswertes/<slug>.md` mit Content-Collection-Setup
4. Faktencheck mit `../speyer-recherche.md`

### 8.2 Hotels & Restaurants verifizieren
Pro Eintrag:
- Adresse via Google Maps prüfen
- Website-URL (HTTP 200?)
- booking.com-Slug für Hotels: `curl -I "https://www.booking.com/hotel/de/<slug>.de.html"` → 200 erwartet, sonst Slug anpassen
- Restaurant-Öffnungszeiten gegen Restaurant-Website abgleichen
- Sterne und Reviews-Counts durch echte booking.com-Daten ersetzen (oder Felder leer lassen)

### 8.3 Bilder-Migration
Pro Sight + Stadtteil:
1. Wikipedia-Artikel öffnen, Infobox-Bild notieren
2. Commons-Metadaten via API: `curl "https://commons.wikimedia.org/w/api.php?action=query&titles=File:<NAME>&prop=imageinfo&iiprop=url|extmetadata&format=json"`
3. Bild herunterladen: `curl "https://commons.wikimedia.org/wiki/Special:FilePath/<FILENAME>?width=1600" -o src/assets/images/sights/<slug>.jpg`
4. Auf 1600x1200 (4:3) normalisieren (siehe Playbook Sektion 5b crop-Script)
5. Eintrag in `src/data/images.ts` mit Credit
6. ContentImage rendert ab dann das Bild statt HueGradient

### 8.4 Weitere Stadtfeste ergänzen
Speyer hat mehr als nur Weihnachtsmarkt und Fastnacht. Ergänzungs-Kandidaten in `src/data/feste.ts`:
- **Brezelfest** (Juli, größtes Heimatfest der Pfalz)
- **Kaisertafel** (lange Tafel auf Maximilianstraße)
- **Internationale Musiktage Dom zu Speyer** (Herbst)

### 8.5 Branchenverzeichnis-Phase
Wenn `features.branchen.enabled = true`:
- D1-Schema migrieren (siehe Köln-Vorlage)
- Stripe-Checkout-Tiers (Basic 0€, Premium 49€, Featured 149€)
- Magic-Link-Auth via Resend
- Self-Service-Listings unter `/branchen/<kategorie>/<slug>/`

---

## 9. Wichtige Pfade (Spickzettel)

```
speyer-interaktiv-astro/
├── src/data/                  # Alle Inhalte
│   ├── city.ts                # Speyer-Stammdaten
│   ├── districts.ts           # 8 Stadtteile
│   ├── sights.ts              # 16 Sehenswürdigkeiten
│   ├── hotels.ts              # 8 Hotels (booking.com-URLs zu verifizieren)
│   ├── restaurants.ts         # 10 Restaurants
│   ├── categories.ts          # 10 Kategorien
│   ├── guides.ts              # 2 Reiseplaner-Guides
│   ├── feste.ts               # 2 Feste
│   ├── wissenswertes.ts       # 14 Themen-Artikel (Meta, Body migriert)
│   ├── news.ts                # leer; Feature aus
│   ├── images.ts              # leer; HueGradient-Fallback aktiv
│   ├── features.ts            # Feature-Flags
│   ├── affiliate.ts           # Stay22 + GYG (IDs nachreichen)
│   ├── analytics.ts           # GTM (ID nachreichen)
│   ├── adsense.ts             # AdSense (ID nachreichen)
│   └── legal.ts               # Impressums-Daten (TODOs)
├── src/styles/
│   ├── global.css             # Universelle Basis (nie ändern)
│   └── brand.css              # Domstein-Rot + Fraunces — Speyer-spezifisch
├── src/pages/                 # Astro-Routen
├── src/components/            # Wiederverwendbare Komponenten
├── src/layouts/               # BaseLayout, BlogArticle
├── astro.config.mjs           # 301-Redirects + Sitemap-Filter
├── public/
│   ├── _redirects             # Cloudflare echte 301
│   ├── robots.txt
│   ├── ads.txt                # AdSense pub-ID nachreichen
│   └── favicon.svg
└── wrangler.toml              # Cloudflare Pages-Konfig
```

---

## 10. Kontakte & Verantwortlich

- **Projekt-Owner:** Joshua Stark (j.stark@stark.marketing)
- **Cloudflare-Account:** TODO
- **Stay22-Account:** TODO
- **GYG-Account:** TODO
- **AdSense-Property:** TODO
- **GTM-Container:** TODO
