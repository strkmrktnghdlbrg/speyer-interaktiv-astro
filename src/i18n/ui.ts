/**
 * UI-Wortschatz (Oberflächen-Strings) de/en.
 * Zugriff via t(locale, "key"). Platzhalter {x} via tf(locale, key, {x: ...}).
 */
import type { Locale } from "./config";

export const ui = {
  // Navigation / global
  "nav.sights": { de: "Sehenswürdigkeiten", en: "Attractions" },
  "nav.hotels": { de: "Hotels", en: "Hotels" },
  "nav.restaurants": { de: "Restaurants", en: "Restaurants" },
  "nav.districts": { de: "Stadtteile", en: "Districts" },
  "nav.categories": { de: "Kategorien", en: "Categories" },
  "nav.guides": { de: "Reiseplaner", en: "Travel Planner" },
  "nav.wissen": { de: "Wissenswertes", en: "Good to Know" },
  "nav.feste": { de: "Feste", en: "Festivals" },
  "nav.about": { de: "Über uns", en: "About" },
  "nav.imprint": { de: "Impressum", en: "Imprint" },
  "nav.privacy": { de: "Datenschutz", en: "Privacy" },
  "nav.terms": { de: "AGB", en: "Terms" },
  "nav.advertise": { de: "Werben", en: "Advertise" },
  "nav.home": { de: "Startseite", en: "Home" },

  "aria.mainNav": { de: "Hauptnavigation", en: "Main navigation" },
  "aria.langSwitch": { de: "Sprache wechseln", en: "Switch language" },
  "aria.search": { de: "Suche in {site}", en: "Search {site}" },
  "search.placeholder": { de: "Suche in {site}…", en: "Search {site}…" },

  // Footer
  "footer.districts": { de: "Stadtteile", en: "Districts" },
  "footer.categories": { de: "Kategorien", en: "Categories" },
  "footer.service": { de: "Service", en: "Service" },
  "footer.about": { de: "Über uns", en: "About" },
  "footer.advertise": { de: "Werben auf {site}-Interaktiv", en: "Advertise on {site}-Interaktiv" },
  "footer.copyright": { de: "{year} {site}-Interaktiv. Inhalte unter Quellenangabe.", en: "{year} {site}-Interaktiv. Content with source attribution." },

  // Home
  "home.eyebrow": { de: "Das Stadtportal für {site}", en: "The city guide for {site}" },
  "home.heroTitle": { de: "Was läuft heute in {site}?", en: "Discover {site} on the Rhine" },
  "home.heroTagline": {
    de: "Zweitausend Jahre Geschichte zwischen Kaiserdom und Rhein. Sehenswürdigkeiten, Hotels, Stadtteile, Feste und Wissenswertes auf einem Portal.",
    en: "Two thousand years of history between the Imperial Cathedral and the Rhine. Attractions, hotels, neighborhoods, festivals and the stories worth knowing - all on one portal, ready for your trip.",
  },
  "home.ctaSights": { de: "Sehenswürdigkeiten entdecken", en: "Discover attractions" },
  "home.ctaGuides": { de: "Reiseplaner", en: "Travel planner" },
  "home.ctaHotels": { de: "Hotels", en: "Hotels" },
  "home.statSights": { de: "Sehenswürdigkeiten", en: "Attractions" },
  "home.statHotels": { de: "Hotels", en: "Hotels" },
  "home.statRestaurants": { de: "Restaurants", en: "Restaurants" },
  "home.statDistricts": { de: "Stadtteile", en: "Neighborhoods" },
  "home.sightsEyebrow": { de: "Sehenswürdigkeiten", en: "Attractions" },
  "home.sightsHeading": { de: "{site} in einem Tag erleben", en: "Experience {site} in a day" },
  "home.allSights": { de: "Alle Sehenswürdigkeiten →", en: "All attractions →" },
  "home.hotelsEyebrow": { de: "Hotels", en: "Hotels" },
  "home.hotelsHeading": { de: "Übernachten mit Stil", en: "Where to stay in style" },
  "home.allHotels": { de: "Alle Hotels →", en: "All hotels →" },
  "home.restaurantsEyebrow": { de: "Essen gehen", en: "Where to eat" },
  "home.restaurantsHeading": { de: "Weinstube, Brauhaus und Sterne-Küche", en: "Wine taverns, brewpubs and fine dining" },
  "home.allRestaurants": { de: "Alle Restaurants →", en: "All restaurants →" },
  "home.districtsEyebrow": { de: "Stadtteile", en: "Neighborhoods" },
  "home.districtsHeading": { de: "{site} nach Quartier", en: "{site} by neighborhood" },
  "home.allDistricts": { de: "Alle Stadtteile →", en: "All neighborhoods →" },
  "home.toursTitle": { de: "Top-Touren in {site}", en: "Top tours in {site}" },
  "home.toursLead": {
    de: "Die meistgebuchten Erlebnisse für deine {site}-Reise. Tickets direkt online buchen, kostenfrei stornierbar.",
    en: "The most-booked experiences for your trip to {site}. Book tickets online, free cancellation on most options.",
  },

  // Listing / index pages
  "sights.count": { de: "{n} Einträge", en: "{n} entries" },
  "sights.eyebrow": { de: "Entdecken", en: "Discover" },
  "sights.heading": { de: "Sehenswürdigkeiten in {site}", en: "Attractions in {site}" },
  "sights.intro": {
    de: "Vom Kaiserdom über den Judenhof bis zum Technik Museum, von der Maximilianstraße bis zum Altpörtel. Alle Highlights mit Stadtteil, Eintrittspreis und Anfahrt.",
    en: "From the Imperial Cathedral and the medieval Jewish courtyard to the Technik Museum, from the Maximilianstraße to the Altpörtel gate. Every highlight with its neighborhood, admission price and how to get there.",
  },
  "sights.metaDescription": {
    de: "Alle Wahrzeichen, Museen und Aussichtspunkte in {site}. Vom Kaiserdom bis zum Technik Museum.",
    en: "Every landmark, museum and viewpoint in {site} - from the UNESCO Imperial Cathedral to the Technik Museum.",
  },

  "hotels.eyebrow": { de: "Übernachten", en: "Where to stay" },
  "hotels.heading": { de: "Hotels in {site}", en: "Hotels in {site}" },
  "hotels.intro": {
    de: "Von der Domhof-Tradition bis zur Designherberge, von der Altstadt bis zum Rheinhafen. Alle Hotels mit Bewertung, Preis ab und direktem Booking-Link.",
    en: "From the traditional Domhof brewery hotel to modern design stays, from the Old Town to the new Rhine harbor. Every hotel with its rating, starting price and a direct booking link.",
  },
  "hotels.metaDescription": {
    de: "Hotels in {site}, von 3 bis 5 Sternen, sortiert nach Bewertung. Direkter Booking-Link, beste Preisgarantie.",
    en: "Hotels in {site} from 3 to 5 stars, sorted by star category and entry-level price. Direct booking links and live prices.",
  },
  "hotels.mapTitle": { de: "{site} auf einen Blick", en: "{site} at a glance" },
  "hotels.mapLead": {
    de: "Alle Hotels mit Live-Preisen und Verfügbarkeit. Klick auf einen Marker zeigt Details.",
    en: "Every hotel with live prices and availability. Click a marker for details.",
  },
  "hotels.topLiveTitle": { de: "Aktuell bestbewertete Hotels in {site}", en: "Currently top-rated hotels in {site}" },
  "hotels.topLiveLead": {
    de: "Live von Booking.com via Stay22. Frische Preise und Bewertungen, aktualisiert bei jedem Build.",
    en: "Live from Booking.com via Stay22 - fresh prices and ratings, updated with every build.",
  },
  "hotels.editorial": { de: "Kuratierte Hotel-Auswahl", en: "Our curated hotel selection" },

  "restaurants.eyebrow": { de: "Essen gehen", en: "Where to eat" },
  "restaurants.heading": { de: "Restaurants in {site}", en: "Restaurants in {site}" },
  "restaurants.intro": {
    de: "Pfälzer Weinstuben, Brauhäuser, italienische Trattorien und kreative Bistros in der Altstadt. {n} Adressen sortiert von A bis Z.",
    en: "Palatinate wine taverns, brewpubs, Italian trattorias and creative bistros across the Old Town. {n} places, sorted A to Z.",
  },
  "restaurants.metaDescription": {
    de: "Pfälzer Küche, Weinstuben, Brauhäuser, italienische Trattorien und kreative Bistros in allen Stadtteilen von {site}.",
    en: "Palatinate cuisine, wine taverns, brewpubs, Italian trattorias and creative bistros in every {site} neighborhood.",
  },

  "districts.eyebrow": { de: "Quartiere", en: "Neighborhoods" },
  "districts.heading": { de: "Stadtteile in {site}", en: "Neighborhoods in {site}" },
  "districts.intro": {
    de: "Jeder Stadtteil hat seinen eigenen Charakter. Hier findest du Sehenswürdigkeiten, Hotels und Restaurants gebündelt pro Quartier.",
    en: "Every neighborhood has its own character. Here you'll find attractions, hotels and restaurants grouped by district.",
  },
  "districts.metaDescription": {
    de: "Alle Stadtteile und Quartiere von {site} im Überblick. Von der Altstadt über Speyer-Nord bis zum Rheinhafen.",
    en: "All neighborhoods and quarters of {site} at a glance - from the Old Town and Speyer-Nord to the new Rhine harbor.",
  },
  "districts.detailHeading": { de: "{name} – Stadtteil in {site}", en: "{name} – a neighborhood in {site}" },

  "categories.eyebrow": { de: "Themen", en: "Topics" },
  "categories.detailEyebrow": { de: "Kategorie", en: "Category" },
  "categories.heading": { de: "{site} nach Kategorien", en: "{site} by category" },
  "categories.intro": {
    de: "Alle Sehenswürdigkeiten gebündelt nach Interesse. Der Kaiserdom und romanische Kirchen, die wichtigsten Museen, die schönsten Parks, Feste und mehr.",
    en: "Every attraction grouped by interest: the Imperial Cathedral and Romanesque churches, the leading museums, the loveliest parks, festivals and more.",
  },
  "categories.metaDescription": {
    de: "{site} nach Interessen entdecken: Wahrzeichen, Museen, Kirchen, Parks, Familienspots und Feste.",
    en: "Explore {site} by interest: landmarks, museums, churches, parks, family spots and festivals.",
  },
  "categories.detailHeading": { de: "{name} in {site}", en: "{name} in {site}" },
  "categories.detailMeta": { de: "Alle {name} in {site} auf einen Blick. {desc}", en: "Every {name} in {site} at a glance. {desc}" },
  "categories.sightsHeading": { de: "Sehenswürdigkeiten", en: "Attractions" },
  "categories.restaurantsHeading": { de: "Restaurants", en: "Restaurants" },
  "categories.otherHeading": { de: "Weitere Kategorien in {site}", en: "More categories in {site}" },
  "categories.all": { de: "Alle Kategorien →", en: "All categories →" },

  "guides.eyebrow": { de: "Routen", en: "Itineraries" },
  "guides.heading": { de: "Reiseplaner für {site}", en: "Travel planner for {site}" },
  "guides.intro": {
    de: "Fertige Routen für Erstbesuche, kurze Wochenenden und besondere Anlässe. Tagespläne mit konkreten Sehenswürdigkeiten, Restaurant-Tipps und Hotel-Empfehlungen, zum Direkt-Loslaufen.",
    en: "Ready-made itineraries for first visits, short weekends and special occasions. Day-by-day plans with specific attractions, restaurant picks and hotel recommendations - ready to follow.",
  },
  "guides.metaDescription": {
    de: "Vorgeplante {site}-Reisen für jeden Anlass: 2 Tage als Erstbesuch, Wochenende mit Kindern. Fertige Tagespläne mit Hotels und Restaurants.",
    en: "Pre-planned {site} trips for every occasion: a 2-day first visit or a family weekend. Day-by-day plans with hotels and restaurants.",
  },
  "guides.days": { de: "{n} Tage", en: "{n} days" },
  "guides.day": { de: "Tag {n}", en: "Day {n}" },
  "guides.bestSeason": { de: "Beste Reisezeit:", en: "Best time to visit:" },
  "guides.toc": { de: "Inhaltsverzeichnis", en: "Contents" },
  "guides.tip": { de: "Tipp:", en: "Tip:" },
  "guides.until": { de: "bis {t}", en: "until {t}" },

  "feste.eyebrow": { de: "Feste", en: "Festivals" },
  "feste.heading": { de: "Feste in {site}", en: "Festivals in {site}" },
  "feste.intro": {
    de: "Vom Altdeutschen Weihnachtsmarkt rund um den Dom bis zur Pfälzer Fastnacht: die wiederkehrenden Stadtfeste, die {site} prägen.",
    en: "From the Old German Christmas market around the cathedral to the Palatinate carnival: the recurring festivals that define {site}.",
  },
  "feste.metaDescription": {
    de: "Wiederkehrende Stadtfeste in {site}: Altdeutscher Weihnachtsmarkt, Fastnacht und weitere Höhepunkte des Speyerer Jahres.",
    en: "Recurring festivals in {site}: the Old German Christmas market, carnival and other highlights of the Speyer year.",
  },
  "feste.officialWebsite": { de: "Offizielle Website {name} →", en: "Official {name} website →" },

  // Slot labels for travel planner
  "slot.morgens": { de: "Morgens", en: "Morning" },
  "slot.mittagessen": { de: "Mittagessen", en: "Lunch" },
  "slot.nachmittag": { de: "Nachmittag", en: "Afternoon" },
  "slot.abendessen": { de: "Abendessen", en: "Dinner" },
  "slot.abends": { de: "Abends", en: "Evening" },
  "slot.uebernachten": { de: "Übernachten", en: "Stay overnight" },
  "slot.district": { de: "Stadtteil: {name}", en: "Neighborhood: {name}" },

  // Detail pages
  "detail.freeEntry": { de: "Eintritt frei", en: "Free entry" },
  "detail.free": { de: "Gratis", en: "Free" },
  "detail.priceFrom": { de: "ab {n} EUR", en: "from {n} EUR" },
  "detail.perNight": { de: "/ Nacht", en: "/ night" },
  "detail.officialWebsite": { de: "Offizielle Website →", en: "Official website →" },
  "detail.website": { de: "Website besuchen →", en: "Visit website →" },
  "detail.ataGlance": { de: "Auf einen Blick", en: "At a glance" },
  "detail.district": { de: "Stadtteil", en: "Neighborhood" },
  "detail.category": { de: "Kategorie", en: "Category" },
  "detail.admission": { de: "Eintritt", en: "Admission" },
  "detail.opening": { de: "Öffnung", en: "Opening hours" },
  "detail.cuisine": { de: "Küche", en: "Cuisine" },
  "detail.priceLevel": { de: "Preisklasse", en: "Price range" },
  "detail.reservation": { de: "Reservierung", en: "Reservation" },
  "detail.reservationRecommended": { de: "Empfohlen", en: "Recommended" },
  "detail.reservationPossible": { de: "Reservierung möglich", en: "Reservations accepted" },
  "detail.walkIn": { de: "Walk-in only", en: "Walk-in only" },
  "detail.nearbyHotels": { de: "Hotels in der Nähe", en: "Hotels nearby" },
  "detail.guestReviews": { de: "{n} Bewertungen auf Booking.com", en: "{n} reviews on Booking.com" },
  "detail.guestFavorite": { de: "★ Gästeliebling", en: "★ Guest favorite" },
  "detail.amenities": { de: "Ausstattung", en: "Amenities" },
  "detail.bookDirect": { de: "Direkt buchen", en: "Book direct" },
  "detail.checkBooking": { de: "Auf Booking.com prüfen →", en: "Check on Booking.com →" },
  "detail.affiliateNote": {
    de: "* Affiliate-Link: Beim Buchen über diesen Link erhalten wir eine Provision, du zahlst keinen Cent mehr.",
    en: "* Affiliate link: if you book through this link we earn a commission, at no extra cost to you.",
  },
  "detail.inGuides": { de: "Teil dieser Reiseplaner", en: "Part of these travel planners" },

  // Related items
  "related.sights": { de: "Weitere Sehenswürdigkeiten im Stadtteil", en: "More attractions in this neighborhood" },
  "related.hotels": { de: "Weitere Hotels in der Umgebung", en: "More hotels nearby" },
  "related.hotelsDistrict": { de: "Hotels im Stadtteil", en: "Hotels in this neighborhood" },
  "related.restaurantsIn": { de: "Weitere Restaurants in {name}", en: "More restaurants in {name}" },
  "related.otherDistricts": { de: "Andere Stadtteile entdecken", en: "Discover other neighborhoods" },
  "related.sightsIn": { de: "Sehenswürdigkeiten in {name}", en: "Attractions in {name}" },
  "related.hotelsIn": { de: "Hotels in {name}", en: "Hotels in {name}" },
  "related.restaurantsInDistrict": { de: "Restaurants in {name}", en: "Restaurants in {name}" },
  "related.allSights": { de: "Alle Sehenswürdigkeiten →", en: "All attractions →" },
  "related.allHotels": { de: "Alle Hotels →", en: "All hotels →" },
  "related.allRestaurants": { de: "Alle Restaurants →", en: "All restaurants →" },

  // Widgets
  "gyg.eyebrow": { de: "Touren & Tickets", en: "Tours & tickets" },
  "gyg.note": {
    de: "* Touren & Tickets von GetYourGuide. Beim Buchen über die Marker erhalten wir eine Provision, du zahlst keinen Cent mehr.",
    en: "* Tours & tickets from GetYourGuide. If you book through the markers we earn a commission, at no extra cost to you.",
  },
  "stay22.live": { de: "Live von Stay22", en: "Live from Stay22" },
  "stay22.nearbyHeading": { de: "Hotels in der Nähe von {name}", en: "Hotels near {name}" },
  "stay22.nearbyLead": {
    de: "Aktuelle Preise und Verfügbarkeit. Alle Hotels im Umkreis von {m} m.",
    en: "Current prices and availability. Hotels within {m} m.",
  },
  "stay22.distanceAway": { de: "{m} m entfernt", en: "{m} m away" },
  "stay22.mapEyebrow": { de: "Hotel-Karte", en: "Hotel map" },
  "stay22.sponsored": {
    de: "* Sponsored - Buchung läuft über Booking.com via Stay22-Affiliate.",
    en: "* Sponsored - bookings are handled by Booking.com via the Stay22 affiliate program.",
  },
  "stay22.sponsoredDated": {
    de: "* Sponsored - Buchung läuft über Booking.com via Stay22-Affiliate. Preise und Verfügbarkeit ändern sich täglich.",
    en: "* Sponsored - bookings are handled by Booking.com via the Stay22 affiliate program. Prices and availability change daily.",
  },
  "map.eyebrow": { de: "Standort-Karte", en: "Location map" },
  "map.attribution": { de: "Karte:", en: "Map:" },

  // About page
  "about.eyebrow": { de: "Über uns", en: "About us" },
  "about.title": { de: "Über {site}-Interaktiv", en: "About {site}-Interaktiv" },
  "about.metaDescription": {
    de: "Wer hinter {site}-Interaktiv steht, redaktionelle Linie und Affiliate-Transparenz.",
    en: "Who is behind {site}-Interaktiv, our editorial standards and transparency about affiliate links.",
  },
  "about.heading": { de: "{site}-Interaktiv - das Stadtportal", en: "{site}-Interaktiv - the city guide" },
  "about.lead": {
    de: "{site}-Interaktiv ist ein unabhängiges Stadtportal für {site} und die umgebende Pfalz. Wir bündeln Sehenswürdigkeiten, Stadtteil-Wissen, Hotels, Restaurants und Stadtfeste - kuratiert, faktengeprüft und lokal verankert.",
    en: "{site}-Interaktiv is an independent city portal for {site} and the surrounding Palatinate. We bring together attractions, neighborhood knowledge, hotels, restaurants and festivals - curated, fact-checked and locally rooted.",
  },
  "about.standardsHeading": { de: "Redaktionelle Linie", en: "Editorial standards" },
  "about.standardsBody": {
    de: "Inhalte werden auf Basis verifizierter Quellen (Stadt {site}, UNESCO, Historisches Museum der Pfalz, pfälzischer Tourismus) recherchiert. Wir kürzen, ordnen und erklären - kein generischer KI-Filler, sondern Texte, die wir selbst gelesen hätten, bevor wir nach {site} fahren.",
    en: "Content is researched from verified sources (the City of {site}, UNESCO, the Historical Museum of the Palatinate, regional tourism boards). We condense, structure and explain - no generic AI filler, just the kind of writing we would want to read before traveling to {site} ourselves.",
  },
  "about.selectionHeading": { de: "Was hier ohne Werbung steht", en: "What stands here without advertising" },
  "about.selectionItem1": {
    de: "Alle Sehenswürdigkeits-, Stadtteil- und Wissenswertes-Texte sind redaktionell und unbezahlt.",
    en: "Every attraction, neighborhood and background text is editorial and unpaid.",
  },
  "about.selectionItem2": {
    de: "Hotel-Bewertungen und -Beschreibungen werden auf Booking.com- und Stay22-Daten gestützt.",
    en: "Hotel ratings and descriptions are based on Booking.com and Stay22 data.",
  },
  "about.selectionItem3": {
    de: "Bilder stammen aus Wikimedia Commons mit voller Autoren- und Lizenznennung.",
    en: "Images come from Wikimedia Commons with full author and license credits.",
  },
  "about.affiliateHeading": { de: "Affiliate-Transparenz", en: "Affiliate transparency" },
  "about.affiliateBody": {
    de: "Wir verdienen Provisionen über Partner - ohne, dass dir Mehrkosten entstehen: Stay22 für Hotelbuchungen (Booking.com-Inventar), GetYourGuide für Touren und Tickets sowie Google AdSense für kontextuelle Anzeigen. Affiliate-Links sind im Kontext gekennzeichnet. Unsere Auswahlentscheidungen treffen wir vor dem Affiliate-Tracking - wir empfehlen nichts, was wir selbst nicht buchen würden. Details im {link}.",
    en: "We earn commissions through partners - at no extra cost to you: Stay22 for hotel bookings (Booking.com inventory), GetYourGuide for tours and tickets, and Google AdSense for contextual ads. Affiliate links are clearly disclosed in context. We make our editorial choices before any affiliate tracking - we never recommend anything we would not book ourselves. Details in our {link}.",
  },
  "about.privacyLinkLabel": { de: "Datenschutz", en: "privacy policy" },
  "about.contactHeading": { de: "Kontakt", en: "Contact" },
  "about.contactBody": {
    de: "Fehler entdeckt? Hinweise zu Öffnungszeiten oder geschlossenen Restaurants? Anbieter und Kontaktmöglichkeiten findest du im {link}. Wir freuen uns über Korrekturen und Vorschläge.",
    en: "Spotted an error? Notes about opening hours or a closed restaurant? You will find the provider and contact options in our {link}. We welcome corrections and suggestions.",
  },
  "about.imprintLinkLabel": { de: "Impressum", en: "imprint" },

  // Imprint page
  "imprint.title": { de: "Impressum", en: "Imprint" },
  "imprint.metaDescription": {
    de: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
    en: "Imprint and provider identification pursuant to Section 5 of the German Telemedia Act (TMG).",
  },
  "imprint.infoHeading": { de: "Angaben gemäß § 5 TMG", en: "Information pursuant to Section 5 TMG" },
  "imprint.registeredOffice": { de: "Eingetragener Geschäftssitz:", en: "Registered office:" },
  "imprint.registerHeading": { de: "Handelsregister", en: "Commercial register" },
  "imprint.registerBody": { de: "Registrar of Companies, Republik Zypern.", en: "Registrar of Companies, Republic of Cyprus." },
  "imprint.contactHeading": { de: "Kontakt", en: "Contact" },
  "imprint.emailLabel": { de: "E-Mail:", en: "Email:" },
  "imprint.vatHeading": { de: "Umsatzsteuer-Identifikationsnummer", en: "VAT identification number" },
  "imprint.vatLabel": { de: "USt-ID:", en: "VAT ID:" },
  "imprint.responsibleHeading": {
    de: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    en: "Responsible for content pursuant to Section 18 (2) MStV",
  },
  "imprint.responsibleSameOffice": { de: "Anschrift wie Geschäftssitz oben.", en: "Address as registered office above." },
  "imprint.liabilityContentHeading": { de: "Haftung für Inhalte", en: "Liability for content" },
  "imprint.liabilityContentBody": {
    de: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
    en: "The content of our pages has been created with the greatest care. However, we cannot guarantee the accuracy, completeness or timeliness of the content.",
  },
  "imprint.liabilityLinksHeading": { de: "Haftung für Links", en: "Liability for links" },
  "imprint.liabilityLinksBody": {
    de: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
    en: "Our offering contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of the linked pages.",
  },
  "imprint.copyrightHeading": { de: "Urheberrecht & Bilder", en: "Copyright & images" },
  "imprint.copyrightBody": {
    de: "Bilder auf {site}-Interaktiv stammen, sofern nicht anders ausgewiesen, von Wikimedia Commons unter Creative-Commons-Lizenzen. Der jeweilige Autor und die Lizenz werden unter jedem Bild ausgewiesen.",
    en: "Unless otherwise stated, images on {site}-Interaktiv are sourced from Wikimedia Commons under Creative Commons licenses. The respective author and license are credited beneath each image.",
  },
  "imprint.affiliateHeading": { de: "Hinweise zur Affiliate-Beteiligung", en: "Affiliate disclosure" },
  "imprint.affiliateBody": {
    de: "Diese Website enthält Affiliate-Links, insbesondere zu Stay22 (Hotel-Buchungen via Booking.com) und GetYourGuide (Touren und Tickets). Wenn du über einen solchen Link buchst, erhalten wir eine Provision. Für dich ändert sich am Preis nichts. Die redaktionelle Auswahl erfolgt unabhängig von Provisionen.",
    en: "This website contains affiliate links, in particular to Stay22 (hotel bookings via Booking.com) and GetYourGuide (tours and tickets). If you book through such a link, we earn a commission. The price stays the same for you. Our editorial selection is made independently of commissions.",
  },

  // Privacy page
  "privacy.title": { de: "Datenschutzerklärung", en: "Privacy Policy" },
  "privacy.metaDescription": {
    de: "Datenschutzerklärung - wie {site}-Interaktiv personenbezogene Daten verarbeitet.",
    en: "Privacy policy - how {site}-Interaktiv processes personal data.",
  },
  "privacy.controllerHeading": { de: "Verantwortlicher", en: "Controller" },
  "privacy.controllerIntro": {
    de: "Verantwortlich für die Datenverarbeitung auf dieser Website nach Art. 4 Abs. 7 DSGVO ist:",
    en: "The controller for data processing on this website pursuant to Art. 4 (7) GDPR is:",
  },
  "privacy.emailLabel": { de: "E-Mail:", en: "Email:" },
  "privacy.generalHeading": { de: "Erhebung allgemeiner Informationen beim Besuch der Website", en: "Collection of general information when visiting the website" },
  "privacy.generalBody": {
    de: "Beim Aufrufen unserer Website werden durch unseren Hosting-Provider (Cloudflare) automatisch Informationen allgemeiner Natur erfasst: Browsertyp, Betriebssystem, Domainname der besuchenden Seite, Datum und Uhrzeit des Zugriffs sowie die IP-Adresse in anonymisierter Form. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
    en: "When you access our website, our hosting provider (Cloudflare) automatically collects information of a general nature: browser type, operating system, referring domain, date and time of access and the IP address in anonymized form. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest).",
  },
  "privacy.gtmHeading": { de: "Google Tag Manager und Google Analytics", en: "Google Tag Manager and Google Analytics" },
  "privacy.gtmBody1": {
    de: "Wir verwenden den Google Tag Manager, um Marketing- und Analyse-Tags zu verwalten. Aktuell sind das u.a. Google Analytics (anonymisierte IP, keine personenbezogene Nachverfolgung) und ggf. Conversion-Pixel für Affiliate-Tracking.",
    en: "We use Google Tag Manager to manage marketing and analytics tags. Currently these include Google Analytics (anonymized IP, no personal tracking) and, where applicable, conversion pixels for affiliate tracking.",
  },
  "privacy.gtmBody2": {
    de: "Google-Dienste starten auf dieser Website im Consent Mode v2 mit abgelehnten Speicher-Einstellungen: Ohne deine Einwilligung werden keine Cookies gesetzt; übertragen werden höchstens cookielose, aggregierte Pings. Rechtsgrundlage einer darüber hinausgehenden Verarbeitung ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, eingeholt über den Einwilligungsdialog von Google. Du kannst sie jederzeit über „Cookie-Einstellungen\" im Seitenfuß widerrufen.",
    en: "Google services on this website start in Consent Mode v2 with all storage settings denied: unless you consent, no cookies are set; at most, cookieless aggregated pings are transmitted. The legal basis for any processing beyond that is your consent pursuant to Art. 6 (1) (a) GDPR, obtained via Google's consent dialog. You can withdraw it at any time via \"Cookie settings\" in the page footer.",
  },
  "privacy.adsenseHeading": { de: "Google AdSense", en: "Google AdSense" },
  "privacy.adsenseBody": {
    de: "Diese Website nutzt Google AdSense zur Auslieferung kontextbezogener Werbung. Werbe-Speicherung ist standardmäßig deaktiviert (Consent Mode v2) und wird erst aktiv, wenn du im Einwilligungsdialog von Google zustimmst; ohne Zustimmung bleibt die Anzeigenauslieferung ohne Cookies und ohne Personalisierung. Mehr Informationen in der {link}.",
    en: "This website uses Google AdSense to deliver contextual advertising. Advertising storage is disabled by default (Consent Mode v2) and only becomes active once you agree in Google's consent dialog; without consent, ads are served without cookies and without personalization. More information in the {link}.",
  },
  "privacy.googlePrivacyLinkLabel": { de: "Google Datenschutzerklärung", en: "Google privacy policy" },
  "privacy.affiliateHeading": { de: "Affiliate-Anbieter: Stay22 und GetYourGuide", en: "Affiliate providers: Stay22 and GetYourGuide" },
  "privacy.affiliateBody": {
    de: "Auf Seiten mit Hotel-Karten oder Tour-Widgets werden Inhalte dieser Anbieter direkt von deren Servern geladen; dabei verarbeitet der jeweilige Anbieter deine IP-Adresse und kann eigene Cookies setzen. Wenn du auf einen Hotel-Buchungs-Link klickst oder ein Tour-Widget nutzt, werden Cookies dieser Anbieter gesetzt, um die Buchung dem Klick zuordnen zu können (Affiliate-Tracking). Für dich entstehen keine Mehrkosten. Die Datenschutzhinweise:",
    en: "On pages with hotel maps or tour widgets, content from these providers is loaded directly from their servers; in doing so, the respective provider processes your IP address and may set its own cookies. When you click a hotel booking link or use a tour widget, cookies from these providers are set to attribute a booking to the click (affiliate tracking). There are no additional costs for you. The privacy notices:",
  },
  "privacy.affiliateStay22": { de: "Stay22 Datenschutz", en: "Stay22 privacy policy" },
  "privacy.affiliateGyg": { de: "GetYourGuide Datenschutz", en: "GetYourGuide privacy policy" },
  "privacy.affiliateBooking": { de: "Booking.com Datenschutz", en: "Booking.com privacy policy" },
  "privacy.serverLogsHeading": { de: "Server-Logs", en: "Server logs" },
  "privacy.serverLogsBody": {
    de: "Cloudflare Pages speichert standardmäßig zur Betriebssicherheit Logs mit anonymisierten IP-Adressen, User-Agent und Request-URL für maximal 30 Tage. Diese Daten werden nicht mit anderen Quellen zusammengeführt.",
    en: "For operational security, Cloudflare Pages stores logs with anonymized IP addresses, user agent and request URL for a maximum of 30 days. This data is not merged with other sources.",
  },
  "privacy.cookiesHeading": { de: "Cookies", en: "Cookies" },
  "privacy.cookiesBody": {
    de: "Technisch notwendige Cookies kommen nur in minimalem Umfang zum Einsatz. Optionale Cookies für Analyse und Werbung (Google) werden erst gesetzt, nachdem du über den Einwilligungsdialog von Google zugestimmt hast — ohne Zustimmung bleiben diese Speicherzugriffe deaktiviert (Consent Mode v2, Standard: abgelehnt). Affiliate-Anbieter können beim Laden bzw. bei der Nutzung ihrer eingebundenen Inhalte eigene Cookies setzen. Eine erteilte Einwilligung kannst du jederzeit über „Cookie-Einstellungen\" im Seitenfuß widerrufen.",
    en: "Technically necessary cookies are used only to a minimal extent. Optional cookies for analytics and advertising (Google) are only set after you have agreed via Google's consent dialog — without consent, these storage accesses remain disabled (Consent Mode v2, default: denied). Affiliate providers may set their own cookies when their embedded content is loaded or used. You can withdraw consent at any time via \"Cookie settings\" in the page footer.",
  },
  "privacy.rightsHeading": { de: "Deine Rechte", en: "Your rights" },
  "privacy.rightsAccess": { de: "Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)", en: "Access to your stored data (Art. 15 GDPR)" },
  "privacy.rightsRectification": { de: "Berichtigung unrichtiger Daten (Art. 16)", en: "Rectification of inaccurate data (Art. 16)" },
  "privacy.rightsErasure": { de: "Löschung deiner Daten (Art. 17)", en: "Erasure of your data (Art. 17)" },
  "privacy.rightsRestriction": { de: "Einschränkung der Verarbeitung (Art. 18)", en: "Restriction of processing (Art. 18)" },
  "privacy.rightsPortability": { de: "Datenübertragbarkeit (Art. 20)", en: "Data portability (Art. 20)" },
  "privacy.rightsObjection": { de: "Widerspruch gegen die Verarbeitung (Art. 21)", en: "Objection to processing (Art. 21)" },
  "privacy.rightsWithdrawal": { de: "Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3)", en: "Withdrawal of consent you have given (Art. 7 (3))" },
  "privacy.rightsContactPre": {
    de: "Zur Ausübung genügt eine formlose Nachricht an",
    en: "To exercise these rights, an informal message is sufficient — send it to",
  },
  "privacy.complaintHeading": { de: "Beschwerderecht bei der Aufsichtsbehörde", en: "Right to lodge a complaint with a supervisory authority" },
  "privacy.complaintBody": {
    de: "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten zu beschweren. Zuständig ist die Datenschutzbehörde am Wohnsitz oder am Arbeitsort.",
    en: "You have the right to lodge a complaint about the processing of your personal data with a data protection supervisory authority. The competent authority is the one at your place of residence or work.",
  },
  "privacy.lastUpdatedHeading": { de: "Stand", en: "Last updated" },
  "privacy.lastUpdatedBody": {
    de: "Diese Datenschutzerklärung wurde zuletzt im August 2026 überarbeitet.",
    en: "This privacy policy was last revised in August 2026.",
  },

  // Terms page
  "terms.title": { de: "AGB / Nutzungsbedingungen", en: "Terms & Conditions" },
  "terms.metaDescription": {
    de: "Nutzungsbedingungen für das Stadtportal {site}-Interaktiv.",
    en: "Terms of use for the {site}-Interaktiv city portal.",
  },
  "terms.heading": { de: "Nutzungsbedingungen", en: "Terms of Use" },
  "terms.scopeHeading": { de: "1. Geltungsbereich", en: "1. Scope" },
  "terms.scopeBody": {
    de: "Diese Nutzungsbedingungen gelten für die Nutzung des Stadtportals {site}-Interaktiv, betrieben von {company}. Mit dem Aufrufen der Website erklärst du dich mit diesen Bedingungen einverstanden.",
    en: "These terms of use apply to the use of the {site}-Interaktiv city portal, operated by {company}. By accessing the website you agree to these terms.",
  },
  "terms.servicesHeading": { de: "2. Leistungen", en: "2. Services" },
  "terms.servicesBody": {
    de: "{site}-Interaktiv ist ein redaktionelles Informationsportal. Wir stellen Informationen zu Sehenswürdigkeiten, Hotels, Restaurants, Stadtteilen und Veranstaltungen bereit. Es besteht kein Anspruch auf Vollständigkeit oder Aktualität.",
    en: "{site}-Interaktiv is an editorial information portal. We provide information about attractions, hotels, restaurants, neighborhoods and events. There is no claim to completeness or timeliness.",
  },
  "terms.affiliateHeading": { de: "3. Affiliate-Links und Buchungen", en: "3. Affiliate links and bookings" },
  "terms.affiliateBody": {
    de: "Buchungen von Hotels, Touren oder Tickets erfolgen ausschließlich beim jeweiligen Drittanbieter (z.B. Booking.com, GetYourGuide). Es kommt kein Vertrag mit {site}-Interaktiv zustande. Es gelten die Bedingungen des jeweiligen Anbieters.",
    en: "Bookings of hotels, tours or tickets are made exclusively with the respective third-party provider (e.g. Booking.com, GetYourGuide). No contract is concluded with {site}-Interaktiv. The terms of the respective provider apply.",
  },
  "terms.liabilityHeading": { de: "4. Haftung", en: "4. Liability" },
  "terms.liabilityBody": {
    de: "Wir haften nicht für Schäden, die aus der Nutzung der bereitgestellten Informationen oder aus Buchungen bei Drittanbietern entstehen. Für externe Links übernehmen wir keine Haftung.",
    en: "We are not liable for damages arising from the use of the information provided or from bookings with third-party providers. We assume no liability for external links.",
  },
  "terms.copyrightHeading": { de: "5. Urheberrecht", en: "5. Copyright" },
  "terms.copyrightBody": {
    de: "Alle Inhalte unterliegen dem Urheberrecht. Bilder werden, sofern nicht anders ausgewiesen, unter Creative-Commons-Lizenzen von Wikimedia Commons verwendet und entsprechend gekennzeichnet.",
    en: "All content is subject to copyright. Unless otherwise stated, images are used under Creative Commons licenses from Wikimedia Commons and credited accordingly.",
  },
  "terms.finalHeading": { de: "6. Schlussbestimmungen", en: "6. Final provisions" },
  "terms.finalBody": {
    de: "Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bedingungen unberührt.",
    en: "German law applies. Should individual provisions be invalid, the validity of the remaining terms shall remain unaffected.",
  },
  "terms.lastUpdated": { de: "Stand: Mai 2026", en: "Last updated: May 2026" },
} as const;

export type UiKey = keyof typeof ui;

export function t(locale: Locale, key: UiKey): string {
  return ui[key]?.[locale] ?? ui[key]?.de ?? String(key);
}

export function tf(locale: Locale, key: UiKey, vars: Record<string, string | number>): string {
  let s = t(locale, key);
  for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}
