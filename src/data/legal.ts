/**
 * Rechtliche Stammdaten — pro Projekt individuell.
 * --------------------------------------------------
 * Wird im Impressum und in der Datenschutzerklärung referenziert.
 * Pflichtangaben nach §5 TMG und §18 MStV (Deutschland) bzw.
 * Companies-House-Pflichten (UK Ltd.).
 *
 * Felder mit "// TODO" müssen vor Go-Live vom Projekt-Owner gefüllt
 * werden — sonst sind Impressum/Datenschutz unvollständig.
 */

export const legal = {
  // Betreibergesellschaft
  companyName: "Webmagics Ltd.",
  companyType: "Limited Company (UK)",

  // Companies-House-Nummer + Registered Office
  companyNumber: "TODO_HOUSE_NUMBER",      // TODO: ergänzen
  registeredOffice: {
    street: "TODO_STREET",                  // TODO
    postcode: "TODO_POSTCODE",              // TODO
    city: "TODO_CITY",                      // TODO
    country: "United Kingdom",
  },

  // Vertretungsberechtigte
  directors: ["TODO_DIRECTOR_NAME"],         // TODO

  // Kontakt
  email: "kontakt@speyer-interaktiv.de",    // anpassen falls anderer
  phone: "TODO_PHONE",                       // TODO

  // USt-ID (UK VAT-Number falls vorhanden, oder DE-USt-ID falls
  // umsatzsteuerlich in DE registriert)
  vatId: "TODO_VAT_ID",                      // TODO

  // Verantwortlich für Inhalte i.S.v. §18 Abs. 2 MStV
  contentResponsible: {
    name: "TODO_NAME",                       // TODO
    address: "TODO_ADRESSE_FALLS_ABWEICHEND", // TODO oder leer falls = registeredOffice
  },

  // Aufsichtsbehörde (falls anwendbar — bei reinen Content-Portalen meist nicht)
  supervisoryAuthority: null,
};
