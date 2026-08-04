# WEEKLY CHECKLIST – speyer-interaktiv.de (12 Wochen, 21.07.-18.10.2026)

> **STAND 04.08.2026:** Die Wochen 1 bis 5 und 7 bis 11 sind abgearbeitet (siehe
> `output/STATUS-2026-08-04.md`). Erledigte Punkte sind unten abgehakt. Offen bleiben die
> beiden Messpunkte, die GSC-Anbindung und die weiteren Portfolio-Links.

Budget: 5 h/Woche. Tags: **[Sonnet]** = günstiges Modell erledigt es (Draft, Schema, Meta, Redirect-Datei), **[Manual]** = selbst machen (Zugänge, Review, Publish-Entscheidung). Jede Content-Aufgabe endet erst mit: Live-Verifikation (curl), interne Links gesetzt, 0 Em-Dashes, echte Umlaute, Meta-Description vorhanden, RalfyIndex-Submit.

**Feste Regeln für alle Tasks:**
- Projektordner: `City Portale/speyer-interaktiv-astro`, Deploy = Commit + Push (CF Pages). Nach Push Deploy-Status prüfen (bekannter STAY22_API_KEY-Env-Blocker aus dem Projektstand beachten - falls Build rot, zuerst das lösen).
- POI-/Event-Seiten immer mit: Öffnungszeiten/Termine als eigene H2, Anreise + Parken-Sektion (Link auf /parken-in-speyer/), FAQ mit Schema, Stay22-Hotel-Block (lmaID des Projekts, Map nur über /embed/gm), GYG-Block wo Touren existieren. Affiliate dezent, keine Marktschreier-Claims.
- Keine erfundenen Fakten: Öffnungszeiten/Preise/Termine nur aus offiziellen Quellen (speyer.de, dom-zu-speyer.de, Betreiber), mit Stand-Datum im Text.
- Neue Seiten in Sitemap prüfen und in die interne Navigation/verwandte Seiten einhängen - keine Waisen.

---

## Woche 1 (21.-27.07.) – Der 404-Fix, der 36% des ETV rettet
- [x] **[Sonnet, 1 h]** `public/_redirects`: alle 100 Regeln um Trailing-Slash-Varianten ergänzen (je Quelle zusätzlich `<quelle>/ <ziel> 301`; bei Verzeichnis-Quellen wie /thema/ und /hotels-in-speyer/ zusätzlich Splat-Regeln `/thema/* /sehenswuerdigkeiten 301` erwägen - Reihenfolge: spezifisch vor Splat). `astro.config.mjs`-redirects synchron halten. Commit + Push.  ← erledigt 04.08.2026
- [x] **[Sonnet, 30 min]** Verifikation: alle 29 im BRIEF gelisteten 404-URLs (u.a. /der-speyerer-weihnachtsmarkt/, /thema/sehenswuerdigkeiten/, /hotels-in-speyer/hotels-speyer-nord/, /die-salier/) per curl auf 301 prüfen. Ergebnisliste in output/ ablegen.  ← erledigt 04.08.2026
- [x] **[Sonnet, 30 min]** RalfyIndex: alle 301-Ziel-URLs (Redirect-Ziele) + die Alt-URLs einreichen, damit Google die Weiterleitungen schnell sieht.  ← erledigt 04.08.2026
- [ ] **[Manual, 30 min]** GSC: Service-Account dashboard-reader@stark-analytics-501812.iam.gserviceaccount.com in die Property speyer-interaktiv.de einladen; GA4-Property-Zugriff prüfen. (Behebt die größte Datenlücke des Briefs.)

## Woche 2 (28.07.-03.08.) – Weihnachtsmarkt Teil 1
- [x] **[Sonnet, 2-3 h]** /feste/weihnachtsmarkt/ ausbauen (Ziel 1.200+ Wörter): Termine 2026/27 (offizielle Quelle speyer.de, Stand-Datum nennen), Öffnungszeiten als eigene H2 ("speyer weihnachtsmarkt öffnungszeiten" 720 SV), Stände/kulinarisches Angebot, Neujahrsmarkt-Sektion ("speyer neujahrsmarkt" 590 SV), Anreise + Parken.  ← erledigt 04.08.2026
- [x] **[Sonnet, 1 h]** Event-Schema + FAQ-Schema auf die Seite; Title/H1 auf "Weihnachtsmarkt Speyer" ausrichten (8.100 + 2x 6.600 SV).  ← erledigt 04.08.2026
- [x] **[Manual, 1 h]** Faktencheck Termine/Zeiten gegen speyer.de, Review, Publish, RalfyIndex.  ← erledigt 04.08.2026

## Woche 3 (04.-10.08.) – Weihnachtsmarkt Teil 2 + Rheinstrand-Start
- [x] **[Sonnet, 1 h]** Weihnachtsmarkt: Stay22-Hotel-Block einbauen ("Hotels zum Weihnachtsmarkt"), interne Links von /feste/, Startseite (Winter-Teaser), /hotels/ setzen.  ← erledigt 04.08.2026
- [x] **[Sonnet, 2-3 h]** Neue Seite Rheinstrand: Lage/Anfahrt/Parken, Saison- und Freizeitinfos, Alter Hammer als eigene H2 ("speyer alter hammer" 4.400 SV + "hammer speyer" 1.000 SV), Abgrenzung Strandbar vs. Biergarten, FAQ-Schema. Keyword-Ziel "speyer rheinstrand" (6.600 SV, aktuell Homepage Pos 84).  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review + Publish + RalfyIndex + interner Link von /sehenswuerdigkeiten/ und Startseite.  ← erledigt 04.08.2026

## Woche 4 (11.-17.08.) – Erster Portfolio-Link + Sehenswürdigkeiten-Hub Teil 1
- [x] **[Manual, 1 h]** 2 Follow-Links aus dem Portfolio setzen: je 1 kontextueller Link von 2 thematisch passenden eigenen Portalen (z.B. Nachbarstadt-Portal Reiseartikel, parken-in-Stadt-Netz) auf /feste/weihnachtsmarkt/ und /sehenswuerdigkeiten/. Anker natürlich variieren, kein Sitewide-Footer.  ← erledigt 04.08.2026
- [x] **[Sonnet, 2-3 h]** /sehenswuerdigkeiten/ Hub-Ausbau: kuratierte Top-10-Liste mit Kurzbeschreibungen und Bildern, Vergleichstabelle (Dauer, Eintritt, für wen), Karte, interne Links auf alle 15 POI-Seiten. Ziel: "sehenswürdigkeiten speyer" (2x 4.400 + 720 SV) - SERP-Beweis: hoteldomhof.de #6 und 22places.de #8 ranken ohne Autorität.  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review + Publish + RalfyIndex.  ← erledigt 04.08.2026 (publiziert, 129 URLs an RalfyIndex)

## Woche 5 (18.-24.08.) – Sehenswürdigkeiten Teil 2: GYG + Dom
- [x] **[Sonnet, 1 h]** GYG-Touren-Block auf /sehenswuerdigkeiten/ und /sehenswuerdigkeiten/kaiserdom/ (getyourguide rankt selbst Pos 9 in dieser SERP - die Buchungs-Intention ist belegt).  ← erledigt 04.08.2026
- [x] **[Sonnet, 2 h]** /sehenswuerdigkeiten/kaiserdom/: Sektionen Öffnungszeiten + Eintrittspreise + Turmbesteigung/Kaisersaal ergänzen ("speyer dom öffnungszeiten" 2x 390 SV; Blogs ranken dort Pos 5/7). Quelle: dom-zu-speyer.de, Stand-Datum nennen. FAQ-Schema.  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review + Publish + RalfyIndex.  ← erledigt 04.08.2026 (publiziert, 129 URLs an RalfyIndex)

## Woche 6 (25.-31.08.) – MESSPUNKT 1
- [ ] **[Sonnet, 1 h]** Re-Pull: `war_room_fetch.py full speyer-interaktiv.de ...` + GSC-Blick. Kernfragen: (a) 404-Keywords auf 0? Ranken Weihnachtsmarkt-Keywords jetzt auf /feste/weihnachtsmarkt/? (b) Bewegung bei Rheinstrand/Sehenswürdigkeiten? Delta-Memo nach output/CHECKPOINT-W6.md.
- [ ] **[Manual, 30 min]** Entscheidung nach Battle-Plan-Regel: Wenn Weihnachtsmarkt-Cluster nicht konsolidiert -> Redirect-Ursache klären (CF-Pages-Verhalten, Cache), sonst weiter im Plan.
- [x] **[Sonnet, 2 h]** /parken-in-speyer/ ausbauen: eigene H2-Sektionen "Parken am Dom / Zentrum" (210 SV), "Kostenlos parken" (170 + 70 SV), "Festplatz" (170 SV), Parkhaus-Tabelle mit Preisen/Öffnungszeiten, Anfahrts-Tipps. Gegner: inside-speyer Pos 7-10 mit nur 15 RD.  ← erledigt 04.08.2026

## Woche 7 (01.-07.09.) – Feste-Seite + Herbstmesse
- [x] **[Sonnet, 2 h]** /feste/ stärken: Altstadtfest-Sektion konkretisieren (2x 2.400 SV + "altstadtfest speyer 2025/2026" 1.300 SV - Termine, Programm-Rahmen, Anreise), Herbstmesse-Sektion ("speyer herbstmesse" 1.300 SV), Event-Schema je Fest. Prüfen ob Einzelseiten /feste/altstadtfest/ sinnvoll (nur wenn genug eigener Inhalt, sonst Kannibalisierung der Hub-Seite).  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Faktencheck Termine gegen speyer.de/Veranstalter, Publish, RalfyIndex.  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Follow-Link Nr. 3 aus dem Portfolio auf /feste/ oder die Rheinstrand-Seite.  ← erledigt 04.08.2026

## Woche 8 (08.-14.09.) – Freizeit-Angriff auf inside-speyer
- [x] **[Sonnet, 2-3 h]** Neue Seite "Freizeitaktivitäten in Speyer" (Ziel-Keywords: "minigolf speyer" 880 SV, "bowling speyer" 260, "hochseilgarten speyer" 140): strukturierte Anbieter-Liste mit Preisen, Öffnungszeiten, Adressen, Karte; interne Links auf Stadtteile und Parken.  ← erledigt 04.08.2026
- [x] **[Sonnet, 1-2 h]** Neue Seite "Speyer mit Kindern / Indoorspielplätze" ("indoorspielplatz speyer" 3x 480 SV, "playmobil ausstellung speyer" 90 SV, Sea-Life- und Technik-Museum-Querlinks).  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review beider Seiten (echte Anbieter, echte Daten), Publish, RalfyIndex.  ← erledigt 04.08.2026

## Woche 9 (15.-21.09.) – Hotels + Domhof-Chance
- [x] **[Sonnet, 2 h]** /hotels/hotel-domhof/ ausbauen: strukturierte Öffnungszeiten/Kontakt-Sektion, Abgrenzung Hotel Domhof vs. Domhof-Hausbrauerei (genau das sucht "domhof speyer öffnungszeiten" 260 SV, unsere Pos 54 - bestes Nicht-404-Chancen-Keyword), Link auf beide offiziellen Sites, Stay22-Block.  ← erledigt 04.08.2026
- [x] **[Sonnet, 1-2 h]** /stadtteile/nord und /stadtteile/west um Unterkunfts-Sektionen ergänzen (erben per Redirect die /hotels-in-speyer/*-Keywords, u.a. "rezensionen für hotel speyer am technik museum" 50 SV Pos 59; "speyer nord" 3x 1.900 SV, "speyer west" 2x 880 SV).  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review + Publish + RalfyIndex.  ← erledigt 04.08.2026 (publiziert, 129 URLs an RalfyIndex)

## Woche 10 (22.-28.09.) – Weihnachtsmarkt-Saisonfrische + Tourist-Info
- [ ] **[Sonnet, 1-2 h]** /feste/weihnachtsmarkt/ Saison-Update: finale Termine/Öffnungszeiten 2026 einpflegen (ab jetzt monatlich prüfen bis Dezember), "Stand: [Datum]"-Zeile aktualisieren, ggf. Programm-Highlights.
- [x] **[Sonnet, 2 h]** Neue Sektion oder Seite "Tourist-Information Speyer" ("speyer tourist info(rmation)" 2x 1.000 SV, aktuell Homepage Pos 86-92): Adresse, Zeiten, Leistungen der offiziellen Tourist-Info + was unser Portal ergänzt; fair auf visitspeyer verweisen.  ← erledigt 04.08.2026
- [ ] **[Manual, 30 min]** Review + Publish + RalfyIndex + Follow-Link Nr. 4-5 aus dem Portfolio (Ziel: Weihnachtsmarkt-Seite vor der Saison).

## Woche 11 (29.09.-05.10.) – Maximilianstraße + Altpörtel-Modifier
- [x] **[Sonnet, 2 h]** /sehenswuerdigkeiten/maximilianstrasse/ ausbauen ("speyer maximilianstraße" 720 SV + "fußgängerzone speyer" 2x 390 SV als H2: Geschäfte, Gastronomie, Feste auf der Maxstraße, Parken).  ← erledigt 04.08.2026
- [x] **[Sonnet, 1 h]** /sehenswuerdigkeiten/altpoertel/: "Speyerer Tor"-Begriffe als Synonym in Title/H2 aufnehmen ("speyer tor" + "speyerer tor" 2x 880 SV ranken auf Homepage Pos 108-111).  ← erledigt 04.08.2026
- [x] **[Manual, 30 min]** Review + Publish + RalfyIndex.  ← erledigt 04.08.2026 (publiziert, 129 URLs an RalfyIndex)

## Woche 12 (06.-18.10.) – MESSPUNKT 2 + Quartalsübergabe
- [ ] **[Sonnet, 2 h]** Voller Re-Pull (DataForSEO + GSC/GA4 falls angebunden), Vergleich gegen Battle-Plan-Zieltabelle (200+ KW, 10+ Top-20, 0 404-Keywords, 8+ Follow-RD), output/CHECKPOINT-W12.md: was lieferte, was nicht, Decay-Kandidaten, nächste Keyword-Fenster.
- [ ] **[Sonnet, 1 h]** SERP-Snapshots der 8 Brief-Keywords wiederholen (`war_room_fetch.py serp`), Positionsdeltas dokumentieren.
- [ ] **[Manual, 1 h]** Übergabe-Entscheidung: Q4-Fokus ist die Weihnachtsmarkt-Ernte (Saison-Pflege, letzte Links); neue Fable-Session nur, falls der Redirect-Fix die Cluster NICHT konsolidiert hat oder die Strategie kippt. Kandidaten fürs nächste Quartal laut Daten: Restaurant-Einzelseiten (café hindenburg 4x 1.900 SV Muster von speyer-info), Technik-Museum-Longtail, EN-Ausbau.

---

**Stehende Wochenroutine (zählt ins 5-h-Budget):** Montags 15 min GSC-Blick (sobald angebunden): neue Impressions-Keywords Pos 8-30 = nächste Ausbau-Kandidaten; 404-/Soft-404-Meldungen sofort prüfen. Nach jedem Push: Deploy grün? Seite live per curl?
