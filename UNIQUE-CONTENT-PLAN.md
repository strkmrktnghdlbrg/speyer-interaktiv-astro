# UNIQUE-CONTENT-PLAN — speyer-interaktiv

> Kickoff-Datei für eine nachfolgende Session. Arbeite das
> **`UNIQUE-CONTENT-REVIEWS-PLAYBOOK.md`** (Workspace-Root) Schritt 2-9 ab.
> Referenz-Implementierung: `Affiliate projects/bankscore-de-astro`.

## Portal-Inputs
- **Domain:** speyer-interaktiv
- **Entitäts-Typ:** Lokale Business-Profile (Hotels, Restaurants, Sehenswürdigkeiten, Branchenbuch)
- **Anzahl Profile:** ~30-60/Typ
- **Daten-Datei:** `src/data/{hotels,restaurants,sights,branchenbuch,cafes,events}.ts`
- **Detailseite:** `src/pages/{hotels,restaurants,sehenswuerdigkeiten,branchenbuch}/[slug].astro`
- **Einordnung:** Lokales Verzeichnis
- **Stadt/Standort:** Ja — Stadt-Dimension vorhanden. Google-**Standort**-Aggregat je Stadt sinnvoll (mehrere Standorte pro Stadt gewichtet mitteln).

## Empfohlene Synthese-Dimensionen
je Typ: Hotels=Lage/Ausstattung/Preis; Restaurants=Küche/Ambiente/Service/Preis; Sehenswürdigkeiten=Erlebnis/Zugänglichkeit/Andrang

> Diese Dimensionen auf die tatsächlich in der Daten-Datei vorhandenen Felder
> mappen. Wenn noch keine Score-/Merkmal-Felder existieren: entweder aus
> vorhandenen Beschreibungen/Kategorien ableiten oder ein schlankes Score-Schema
> ergänzen (wie banks.ts). NIE Fakten erfinden — nur aus echten Daten ableiten.

## Zwei Bausteine (aus dem Playbook)
1. **`src/data/sentimentSynthesis.ts`** — `buildSynthesis(entität, stadt, profil)`,
   Satzpools auf die Dimensionen oben zugeschnitten, Rehash-Hash für Streuung,
   keine erfundenen Zitate (Framing: Portal-Einschätzung).
2. **`src/data/googleReviews.ts` + `components/GoogleAggregate.astro` +
   `scripts/fetch-google-aggregates.mjs`** — nur Fakten (Rating-Schnitt + Anzahl),
   Google-Attribution, kein AggregateRating-JSON-LD, graceful Fallback.
   Ziel-Matrix im Fetch-Script: wichtigste Profile × größte Städte.

## Go-Live
- `npx astro check` + `npm run build`; Preview via /tmp-rsync verifizieren.
- Live-Pfad mit TEMPORÄREM Test-Aggregat prüfen, danach entfernen — **nie Fake-Zahlen committen**.
- `GOOGLE_PLACES_API_KEY=… npm run fetch:google` für echte Zahlen (eigener Places-API-Key).
- Präzises Git-Staging, commit + push (= Deploy).

## Leitplanken
Kein Scraping. Nur Zahlen von Google speichern, nie Rezensionstexte/Namen/Fotos.
Echte Umlaute, keine Em-Dashes. Keine echten Personennamen auf der Site.
