import dashboardPage from "../../support/objectPages/principalPage";
import adminPage from "../../support/objectPages/adminPage";
import loginPage from "../../support/objectPages/loginPage";
import updatePasswordPage from "../../support/objectPages/updatePasswordPage";

describe("Implementacion pagina principal", () => {
  before(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Login logunt implementacion", () => {
    it.only("logout implementacion", () => {
      cy.login("admin", "admin");
      dashboardPage.navigateToUserDropdown();
      cy.get('.info-menu > .profile > .dropdown-menu > .last > a').click();
      //children("li").eq('//a[normalize-space()="Salir"]').click();

      // Verify user is logged out
      loginPage.elements.loginTitle().should("have.text", "Bienvenido");
    });

    it("should display About alert", () => {
      cy.login("Admin", "admin123");
      dashboardPage.navigateToUserDropdown();
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(0).click();

      // Verify alert is displayed
      loginPage.elements.dropdownAboutAlert().should("have.text", "About");
    });

    it("should change password", () => {
      cy.login("Admin", "admin123");
      dashboardPage.navigateToUserDropdown();
      cy.get('ul[class="oxd-dropdown-menu"]').children("li").eq(2).click();

      // Type current & new passwords
      updatePasswordPage.elements.currentPwdField().type("admin123");
      updatePasswordPage.elements.newPwdField().type("NewPassword123!");
      updatePasswordPage.elements.confirmPwdField().type("NewPassword123!");
      updatePasswordPage.elements.submitBtn().click();

      // Verify confirm pop-up - saved successfully
      cy.on("window:alert", (str) => {
        expect(str).to.equal("Sucess");
      });
    });
  });

  describe("Navigate to other pages", () => {
    it("should navigate to Admin page", () => {
      cy.login("admin", "admin");
      dashboardPage.clickAdminBtn();
      adminPage.elements.adminSpan().should("contain", "Admin");
    });

    it("should navigate to My Info page", () => {
      cy.login("Admin", "admin123");

      dashboardPage.clickMyInfoBtn();
      dashboardPage.elements.dashboardSpan().should("have.text", "PIM");
    });
  });
});
