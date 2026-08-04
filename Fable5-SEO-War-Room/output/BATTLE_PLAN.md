# BATTLE PLAN – speyer-interaktiv.de (90 Tage, 21.07.-19.10.2026)

> **STAND 04.08.2026: Wetten 1 bis 6 sind umgesetzt und live verifiziert**, dazu die
> Inhalte der Wochen 7 bis 11. Was genau steht, was sich gegenüber der Annahme geändert
> hat und was offen bleibt: **`output/STATUS-2026-08-04.md`**. Der Plan unten bleibt als
> Begründungsgrundlage stehen, ist in den Abschnitten 1 und 3 aber überholt.
>
> Kurzfassung: 404-Keywords 29 → 0, Follow-Referring-Domains 0 → 3, zwölf Seiten über
> 700 Wörter statt einer. Offen sind der Messpunkt (frühestens ab Ende August), die
> GSC-Anbindung und die Follow-Links 4 bis 8.

Grundlage: `output/BRIEF.md` (DataForSEO 94 eigene + 4x300 Wettbewerber-Keywords, Backlink-Vergleich, 8 SERP-Snapshots, Live-Verifikation der Redirects, Stand 21.07.2026). Kapazität: 5 h/Woche. Ziel: Tourismus-Keywords in die Top 20, Monetarisierung Stay22 + GetYourGuide + AdSense.

**Getroffene Annahmen (statt Rückfragen):** (1) GSC/GA4 bleiben vorerst ohne API-Anbindung, werden aber in Woche 1 eingerichtet. (2) Deploy = Commit + Push auf CF Pages (bekannter STAY22_API_KEY-Env-Blocker aus dem Projektstand wird separat gelöst, blockiert die Content-Arbeit nicht). (3) Kein Budget für Linkkauf; Follow-Links kommen aus dem eigenen Portfolio-Netzwerk.

---

## 1. Was kaputt ist (Diagnose mit Zahlen)

1. **36% des ETV liegen auf 404-Seiten.** 29 von 94 Keywords (33.820 SV kombiniert, 71,0 von 199,9 ETV) ranken auf WP-Alt-URLs mit Trailing-Slash, die die `_redirects`-Datei nicht abdeckt: `/der-speyerer-weihnachtsmarkt/` -> 404 (9 Keywords, 22.840 SV Weihnachtsmarkt-Cluster), `/thema/sehenswuerdigkeiten/` -> 404 (4.400+4.400+720 SV), `/hotels-in-speyer/*/` -> 404 (10 Keywords), dazu /die-salier/, /das-fischertor/ u.a. Am 21.07. live per curl verifiziert: ohne Slash 301, mit Slash 404. Jeder Tag, den das steht, riskiert, dass Google die Alt-Rankings ersatzlos aus dem Index wirft - dann startet der Weihnachtsmarkt-Cluster im Herbst bei null.

2. **Null Sichtbarkeit im Klick-Bereich.** 0 Keywords in Top 20, bestes Ranking Pos 32. 54% aller Keywords (51 von 94) ranken auf der Homepage, weil Zielseiten fehlen oder nicht greifen: "speyer rheinstrand" (6.600 SV, Pos 84), "speyer alter hammer" (4.400), "speyer webcam" (2x 1.300), "speyer tourist info" (2x 1.000), "dom öffnungszeiten" (2x 390) - alles Homepage-Rankings ohne passende Landingpage.

3. **7 verweisende Domains, alle nofollow, Backlink-Rank 0.** visitspeyer hat 203 RD, selbst das Altportal speyer-info 87. Der direkte Beweis, dass es auch ohne viel Autorität geht, ist inside-speyer: 15 RD, 19 Backlinks - und trotzdem Top-10-Rankings für minigolf/indoorspielplatz/parken. Aber 0 Follow-Links sind ein hartes Handicap, das 2-3 Portfolio-Links sofort mildern.

4. **Der Trend ist intakt und darf nicht verspielt werden.** Keywords Mai->Juli: 17 -> 86, ETV 21 -> 198. Google indexiert die neue Astro-Site gerade aggressiv. Genau jetzt entscheidet sich, ob die 404-Cluster vererbt oder verworfen werden.

5. **Saisonfenster:** Weihnachtsmarkt-Suchvolumen (22.840 SV im Cluster) peakt Nov/Dez. Redirect-Fix + Content-Ausbau müssen bis spätestens Anfang Oktober stehen und indexiert sein.

## 2. Wo jeder Wettbewerber schlagbar ist

**visitspeyer.de (203 RD, ETV 99.762)** - offizielle Tourismus-Site, auf Head-Terms ("speyer" Pos 5, "dom zu speyer" Pos 5-8, "technik museum" Pos 4) nicht angreifbar. Schlagbar bei transaktionalen Longtail-Modifiern, die eine Behördenseite nicht bedient: Öffnungszeiten-Kombis ("speyer dom öffnungszeiten": zwei private Blogs auf Pos 5 und 7!), Parken-am-POI, Hotel-nahe-POI (Stay22-Winkel), "X mit Kindern". visitspeyer verlinkt zudem keine Buchungs-/Touren-Partner - GYG-intentionierte Suchen sind offen (getyourguide selbst rankt Pos 9 für "sehenswürdigkeiten speyer").

**speyer-kurier.de (1.078 RD)** - Lokalnews, gewinnt News- und Behörden-Keywords. Für unser Tourismus-Ziel irrelevant; wir treten nicht gegen eine Redaktion an. Kein Investment.

**inside-speyer.de (15 RD, 357 KW)** - gleiche Gewichtsklasse, reiner Content-Blog. Rankt Top 10 für "minigolf speyer" (880), "indoorspielplatz speyer" (3x 480), "bowling speyer" (260), "speyer parken zentrum" (210), "kostenlos parken speyer dom" (170). Schlagbar mit besseren, strukturierteren Seiten (Tabellen, Preise, Karten, aktuelle Daten) auf exakt denselben Themen - unsere /parken-in-speyer/-Seite existiert bereits als Fundament. Das ist der fairste 1:1-Kampf im Datensatz.

**speyer-info.de (87 RD, 650 KW)** - verwaistes Altportal, rankt mit einzelnen Restaurant-/Café-Seiten ("café hindenburg" 4x 1.900 SV, "mediterraneo" 1.600, "currysau" 390). Beweis, dass Gastro-Einzelseiten in Speyer ranken. Unser /restaurants/-Bereich braucht Einzelseiten für die meistgesuchten Läden statt reiner Listen. Mittelfristig komplett überholbar.

**Strategische Wahrheit:** Kein Wettbewerber kombiniert POI-Content mit Buchbarkeit (Hotels + Touren). visitspeyer informiert amtlich, die Blogs sind dünn, speyer-info ist tot. Die Lücke für speyer-interaktiv: die kommerzielle Tourismus-Antwort - POI + Öffnungszeiten + Parken + Hotel + Tour auf einer Seite.

## 3. Priorisierte Wetten (90 Tage)

### Wette 1 - Trailing-Slash-Redirect-Fix (Woche 1, ~1 h)
`public/_redirects`: für alle 100 Regeln Slash-Varianten ergänzen (bzw. Quellen als Splat `/pfad/*` absichern), deployen, alle 29 betroffenen Alt-URLs per curl verifizieren, dann Ziel-URLs via RalfyIndex einreichen.
- **Impact:** maximal - rettet 31% der Keyword-Basis und 36% des ETV (Weihnachtsmarkt 22.840 SV, Sehenswürdigkeiten 9.660 SV) vor dem Index-Rauswurf und vererbt sie auf die neuen URLs.
- **Aufwand:** minimal, eine Datei.
- **Begründung Platz 1:** höchster Impact pro Stunde im gesamten Plan; alles Weitere baut auf den vererbten Rankings auf.

### Wette 2 - Weihnachtsmarkt-Seite zur besten inoffiziellen Quelle ausbauen (Woche 2-3, dann Pflege ab Oktober)
/feste/weihnachtsmarkt/ auf 1.200+ Wörter: Termine 2026/27, Öffnungszeiten (eigene H2, 720 SV), Stände/Angebot, Anreise + Parken (interner Link /parken-in-speyer/), Neujahrsmarkt-Sektion (590 SV), FAQ-Schema, Event-Schema, Hotel-Block (Stay22).
- **Impact:** hoch - 22.840 SV Cluster; SERP ab Pos 7 nur generische Aggregatoren (deutsche-weihnachtsmaerkte, weihnachtsmarkt-magazin, holidaycheck). speyer.de #1 ist unantastbar, Pos 5-10 zur Saison realistisch.
- **Aufwand:** 1 Seiten-Ausbau + saisonale Aktualisierung.
- **Begründung Platz 2:** größter monetärer Hebel (Hotel-Buchungen zur Weihnachtsmarkt-Zeit = Stay22-Kernszenario), hartes Saisonfenster.

### Wette 3 - Rheinstrand + Alter Hammer: die fehlende Seite fürs beliebteste Ausflugsziel (Woche 3-4)
Neue Seite /sehenswuerdigkeiten/rheinstrand/ (oder Freizeit-Sektion): Rheinstrand (6.600 SV, aktuell Homepage Pos 84), Alter Hammer Biergarten daneben (4.400 + 1.000 SV), Anfahrt, Parken, Saison-Infos, FAQ.
- **Impact:** hoch - 12.000 SV kombiniert, in der SERP steht kein einziges lokales Portal (nur Betreiber-Site, Socials, Landes-Tourismus). Pos 5-10 erreichbar.
- **Aufwand:** 1 neue Seite.
- **Begründung Platz 3:** größtes unbesetztes Einzelthema; zahlt direkt auf Sehenswürdigkeiten-Hub und interne Verlinkung ein.

### Wette 4 - Sehenswürdigkeiten-Hub + Dom-Modifier (Woche 4-6)
/sehenswuerdigkeiten/ als echte Top-10-Kandidatenseite ausbauen (4.400+4.400+720 SV; SERP: Hotel-Domhof #6 und 22places #8 beweisen, dass Nicht-Autoritäten ranken): Top-10-Ranking-Liste mit Bildern, Karte, Dauer/Preis-Tabelle, GYG-Touren-Block. Parallel /sehenswuerdigkeiten/kaiserdom/ um Öffnungszeiten/Preise/Turmbesteigung-Sektionen erweitern ("speyer dom öffnungszeiten" 2x 390 SV - Blogs ranken dort Pos 5/7).
- **Impact:** mittel-hoch - 10.000+ SV, GYG-Monetarisierung genau hier (getyourguide rankt selbst in dieser SERP).
- **Aufwand:** 2 Seiten-Upgrades.
- **Begründung Platz 4:** nach dem Redirect-Fix erbt der Hub die /thema/-Rankings - dann muss die Seite den Anspruch auch einlösen.

### Wette 5 - inside-speyer frontal angreifen: Parken + Freizeit (Woche 6-9)
/parken-in-speyer/ ausbauen (Zentrum/Dom/Festplatz/kostenlos-Sektionen; inside-speyer rankt dafür Pos 7-10 mit 15 RD) + 2 neue Freizeit-Seiten: Minigolf/Freizeitaktivitäten (880 SV) und Indoorspielplatz/mit-Kindern (3x 480 SV).
- **Impact:** mittel - einzelne Keywords klein, aber der Gegner ist exakt gleich schwer (15 vs. 7 RD) und die Intention (Familien, Tagesgäste) füttert AdSense + interne POI-Links.
- **Aufwand:** 1 Upgrade + 2 neue Seiten.
- **Begründung Platz 5:** realistischste Top-10-Rankings kurzfristig, weil der SERP-Beweis von einer gleich schwachen Domain stammt.

### Wette 6 - Follow-Links aus dem Portfolio + laufende Indexierung (ab Woche 2, ~30 min/Woche)
Von 0 Follow-RD auf 8-10: kontextuelle Links von thematisch passenden eigenen Portalen (Nachbarstädte-Portale, parken-in-Stadt-Netz, Hotel-/Reise-Listicles), Anker variieren; jede neue/geänderte Seite nach Deploy in RalfyIndex.
- **Impact:** multiplikativ - hebt alle Wetten; bei 7 nofollow-RD ist jeder einzelne Follow-Link messbar.
- **Aufwand:** klein, konstant.
- **Begründung Platz 6:** Verstärker, kein eigener Hebel; Reihenfolge der Linkziele: Weihnachtsmarkt -> Sehenswürdigkeiten-Hub -> Rheinstrand.

**Bewusst NICHT im Plan:** "speyer" (201.000 SV), "technik museum speyer" (49.500), "sea life" (60.500) frontal - SERPs gehören visitspeyer/Betreibern/Mega-Plattformen; die bestehenden POI-Seiten laufen als Longtail-Fänger mit. "speyerer straße" (12.100 SV, Pos 91) - Fehlintention, bringt keine Speyer-Besucher. News-Keywords (speyer-kurier-Territorium). Webcam-Seite (ohne eigene Webcam kein echtes Angebot). "notapotheke speyer" - SERP verlangt Live-Notdienstdaten, die wir nicht haben.

## 4. Messpunkte (90 Tage)

| Metrik | Ist (21.07.) | Ziel (19.10.) |
|---|---|---|
| Keywords gesamt (DataForSEO) | 94 | 200+ |
| Keywords Top 20 | 0 | 10+ |
| Keywords Pos 21-50 | 1 | 25+ |
| ETV | 200 | 600+ |
| Keywords auf 404-URLs | 29 | 0 |
| Follow-Referring-Domains | 0 | 8+ |

Messung: Woche 6 und Woche 12 per DataForSEO-Re-Pull (`Tools/war-room-fetch/war_room_fetch.py full`), ab Woche 2 zusätzlich GSC. Abbruchkriterium: Wenn der Weihnachtsmarkt-Cluster in Woche 6 nicht auf /feste/weihnachtsmarkt/ konsolidiert ist (site:-Check + DataForSEO-URL), hat der Redirect-Fix nicht gegriffen - dann Ursache vor allem anderen klären.
