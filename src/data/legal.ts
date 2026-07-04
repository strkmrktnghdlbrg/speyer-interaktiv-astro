/**
 * Rechtliche Stammdaten — pro Projekt individuell.
 * --------------------------------------------------
 * Wird im Impressum und in der Datenschutzerklärung referenziert.
 * Pflichtangaben nach §5 TMG und §18 MStV (Deutschland) bzw.
 * Register-Pflichten der Betreibergesellschaft.
 *
 * Betreiber: Webmagics Ltd., Republik Zypern (Registrar of Companies).
 */

export const legal = {
  // Betreibergesellschaft
  companyName: "Webmagics Ltd.",
  companyType: "Limited (Republik Zypern)",

  // Registerbehörde + Registered Office
  companyNumber: "",                          // Registrar of Companies, Republik Zypern
  registeredOffice: {
    street: "Gladstonos 12-14",
    postcode: "8046",
    city: "Paphos",
    country: "Republik Zypern",
  },

  // Vertretungsberechtigte (kein Name hinterlegt)
  directors: [],

  // Kontakt
  email: "kontakt@speyer-interaktiv.de",
  phone: "TODO_PHONE",                        // TODO

  // USt-ID (gilt global für alle Webmagics-Sites)
  vatId: "CY10400045Y",

  // Verantwortlich für Inhalte i.S.v. §18 Abs. 2 MStV
  contentResponsible: {
    name: "Webmagics Ltd.",
    address: "TODO_ADRESSE_FALLS_ABWEICHEND", // leer/TODO → Anschrift = registeredOffice
  },

  // Aufsichtsbehörde (falls anwendbar — bei reinen Content-Portalen meist nicht)
  supervisoryAuthority: null,
};
