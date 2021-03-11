/// <reference types="cypress" />

import { address as fixtures } from "@ideal-postcodes/api-fixtures";
const address = fixtures.jersey;

declare global {
  interface Window {
    apiKey: string;
  }
}

describe("Webpack test", () => {
  beforeEach(() => {
    cy.visit("/index.html", {
      onBeforeLoad: (window) => {
        window.apiKey = Cypress.env("API_KEY");
      },
    });
  });

  it("populates address fields", () => {
    cy.wait(2000);
    cy.get("#input")
      .clear({ force: true })
      .type(address.line_1, { force: true });
    cy.wait(2000);
    cy.get(".idpc_ul li").first().click({ force: true });
    cy.get("#line_1").should("have.value", address.line_1);
  });
});
