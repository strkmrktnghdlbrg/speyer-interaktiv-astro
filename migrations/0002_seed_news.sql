-- Seed: die 3 manuell verfassten News-Items aus src/data/news.ts.
-- Bleiben in D1 als Baseline, damit das News-Index nicht leer ist,
-- bis der Cron-Worker das erste Mal gelaufen ist.

INSERT INTO news_articles (
  slug, title, lead, summary,
  district, category, published_at,
  image_key, image_hue,
  source_name, source_url, source_published_at,
  rewrite_model, rewrite_at
) VALUES
(
  'neue-fahrradstrasse-zwischen-ehrenfeld-und-belgisches-viertel',
  'Neue Fahrradstraße verbindet Ehrenfeld mit Belgischem Viertel',
  'Ab Juni rollen Räder bevorrechtigt über die Vogelsanger Straße. Anwohner reagieren gemischt, Handel sorgt sich um Lieferverkehr.',
  'Die Stadt Köln richtet ab dem 17. Juni eine durchgehende Fahrradstraße zwischen Ehrenfeld und dem Belgischen Viertel ein. Auf der Vogelsanger Straße haben Radfahrende künftig Vorrang, Autos bleiben als Anlieger erlaubt, dürfen aber nur in Schrittgeschwindigkeit fahren. Das Verkehrsdezernat verspricht sich davon eine Entlastung der parallel verlaufenden Venloer Straße. Anwohner-Initiativen begrüßen den Schritt, beklagen aber die Halteverbote, durch die rund 80 Parkplätze entfallen. Der lokale Einzelhandel sieht den Lieferverkehr gefährdet und fordert eine zeitliche Beschränkung der Schrittgeschwindigkeit auf Tageszeiten außerhalb der Öffnungszeiten. Die Stadt hält an ihrem Konzept fest und kündigt eine Evaluierung nach sechs Monaten an.',
  'ehrenfeld', 'Verkehr', '2026-05-21T08:30:00+02:00',
  'district:ehrenfeld', 3,
  'Kölner Stadt-Anzeiger',
  'https://www.ksta.de/koeln/ehrenfeld/fahrradstrasse-vogelsanger-strasse-12345',
  '2026-05-20T19:15:00+02:00',
  'seed', '2026-05-21T08:30:00+02:00'
),
(
  'kranhaeuser-rooftop-bar-eroeffnet',
  'Neue Rooftop-Bar im mittleren Kranhaus eröffnet',
  'Auf der 17. Etage des Pandion-Kranhauses am Rheinauhafen öffnet ab nächstem Wochenende die Bar Skyloft mit 360-Grad-Blick.',
  'Im mittleren der drei Kranhäuser am Rheinauhafen öffnet am 31. Mai eine neue Rooftop-Bar. Das Skyloft auf der 17. Etage soll mit 360-Grad-Blick über Köln und Karte aus saisonalen Cocktails zur neuen Adresse für After-Work werden. Betrieben wird die Bar von der Gastro-Gruppe hinter dem Bootshaus Alteburg. Reservierungen ab dem 25. Mai online möglich, ein Dresscode wird nicht durchgesetzt. Eintritt ist frei, eine Mindestkonsumation am Wochenende soll erst ab 23 Uhr greifen. Der Aufzug ist barrierefrei, fasst aber nur acht Personen, weshalb mit Wartezeiten zu rechnen sei.',
  'rheinauhafen', 'Gastro', '2026-05-19T14:00:00+02:00',
  'sight:rheinauhafen-kranhaeuser', 4,
  'Express Köln',
  'https://www.express.de/koeln/rheinauhafen/rooftop-bar-skyloft-67890',
  '2026-05-19T11:30:00+02:00',
  'seed', '2026-05-19T14:00:00+02:00'
),
(
  'museum-ludwig-warhol-sonderausstellung',
  'Museum Ludwig zeigt unbekannte Warhol-Polaroids',
  'Bis September präsentiert das Museum 280 nie ausgestellte Polaroids aus Andy Warhols Studio-Nachlass.',
  'Das Museum Ludwig kuratiert ab dem 12. Juni eine Sonderausstellung mit bislang unveröffentlichten Polaroid-Aufnahmen Andy Warhols aus den Jahren 1976 bis 1986. Die 280 Bilder stammen aus dem Studio-Nachlass und wurden dem Museum als Leihgabe der Warhol Foundation überlassen. Zu sehen sind Porträts von Bowie, Basquiat und Mick Jagger neben Selbstporträts und Alltagsszenen aus der Factory. Die Ausstellung ergänzt die ohnehin umfangreiche Pop-Art-Sammlung des Museums. Eintritt ist im regulären Museumsticket enthalten, Führungen jeden Sonntag um 14 Uhr.',
  'altstadt', 'Kultur', '2026-05-18T10:15:00+02:00',
  'sight:museum-ludwig', 2,
  'Kölnische Rundschau',
  'https://www.rundschau-online.de/kultur/museum-ludwig-warhol-55443',
  '2026-05-17T17:00:00+02:00',
  'seed', '2026-05-18T10:15:00+02:00'
);
