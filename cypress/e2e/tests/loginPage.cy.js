import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/principalPage";
import resetPasswordPage from "../../support/objectPages/resetPasswordPage";
const data = require("../../fixtures/loginUser.json");

describe("LOGIN SAI", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Esceneario positivo", () => {
    it.only("iniciai sesión correctamente",()=> {
      //cy.login("admin", "admin");
      loginPage.typeUsername(data.validUser.username);
      loginPage.typePassword(data.validUser.password);
      loginPage.clickLogin();
      //dashboardPage.elements.dashboardSpan().should("have.text", " OSWA - Inventory ");
      dashboardPage.elements.dashboardSpan().should("have.text",data.expected);
    });
  });

  describe("Escenarios negativos", () => {
    it("Desplegar mensaje de usuario incorrecto", () => {
      loginPage.typeUsername("admin");
      loginPage.typePassword("admin123");
      loginPage.clickLogin();

      loginPage.elements.errorMsg().should('contain', "Nombre de usuario y/o contraseña incorrecto.");
    });

    it("Desplegar mensaje de contraseña incorrecto", () => {
      loginPage.typeUsername("Admin");
      loginPage.typePassword("dummy_password");
      loginPage.clickLogin();

      //loginPage.elements.errorMsg().should("have.text", "Invalid credentials");
      loginPage.elements.errorMsg().should('contain', "Nombre de usuario y/o contraseña incorrecto.");
    });

    it("Desplegar mensaje de usuario en blanco", () => {
      //loginPage.typeUsername(" ");
      loginPage.typePassword("admin123");
      loginPage.clickLogin();
      loginPage.elements.errorUsernameMsg().should('contain', "Username No puede estar en blanco.");
      //loginPage.elements.emptyUsernameFieldMsg().should("have.text", "Required");
    });

    it("Desplegar mensaje de contraseña en blanco", () => {
      loginPage.typeUsername("admin");
      //loginPage.typePassword("");
      loginPage.clickLogin();
      loginPage.elements.errorPasswordMsg().should('contain', "Password No puede estar en blanco.");
      //loginPage.elements
       // .emptyPasswordFieldMsg()
       // .should("have.text", "Required");
    });
/*
    it("should be able to reset password", () => {
      loginPage.clickForgotPasswordBtn();

      // Navigate to Reset Password page & verify its title
      resetPasswordPage.elements
        .resetPasswordSpan()
        .should("be.visible")
        .and("have.text", "Reset Password");

      // Enter username credentials & submit
      resetPasswordPage.elements.usernameField().type("Admin");
      resetPasswordPage.elements.resetPasswordBtn().click();

      // Verify reset password link is sent successfully
      resetPasswordPage.elements
        .successfulPasswordResetMsg()
        .should("be.visible")
        .and("have.text", "Reset Password link sent successfully");
    });*/
  });
});
