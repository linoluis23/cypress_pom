import myInfoPage from "../../support/objectPages/myInfoPage";

describe("POM implementation for My Info page", () => {
  before(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Personal Details tab -- positive scenario", () => {
    it.only("should fill in the form with mandatory data & submit it", () => {
      cy.login("admin", "admin");
      cy.panelDeControl();
      myInfoPage.enterFullName();
      myInfoPage.clickSaveBtn();

      // Verify Confirm pop-up message
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Success");
      });
    });
  });

  describe("Personal Details tab -- negative scenario", () => {
    it("should display error message for submiting empty mandatory field", () => {
      cy.login("Admin", "admin123");
      cy.navigateToMyInfoTab();
      // Clear default data from mandatory field > leave empty > save
      myInfoPage.elements.fullNameField().clear().type(" ");
      myInfoPage.clickSaveBtn();
      // Verify error message
      myInfoPage.elements.requiredFieldErrorMsg().should("be.visible");
    });

    it("should display error message for more than 30 characters in full name", () => {
      cy.login("Admin", "admin123");
      cy.navigateToMyInfoTab();
      // Type 31 characters into First Name field
      myInfoPage.elements
        .fullNameField()
        .clear()
        .type("This is a 31 word-string This i");
      // Verify error message
      myInfoPage.elements.over30charactersErrorMsg().should("be.visible");
    });
  });
});
