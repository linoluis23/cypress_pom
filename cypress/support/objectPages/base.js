// <reference types="cypress" />

class Base_PO {
  clickBtn() {
    cy.get("button").click({ multiple: true });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }
}

export default Base_PO;
