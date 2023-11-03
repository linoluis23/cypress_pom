import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage";

const tests = require("../../fixtures/loginUsers.json");

describe("Login Page correct & incorrect login credentials", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  // data driven only valid credentials from json
  it.only("should login to Dashboard Page", () => {
    cy.fixture("loginUser").then((data) => {
      loginPage.typeUsername(data.username);
      loginPage.typePassword(data.password);
      loginPage.clickLogin();
      dashboardPage.validateBreadcrumbText();
    });
  });

  // data driven valid & invalid credentials
  tests.forEach((test) => {
    it.only(test.name, () => {
      loginPage.typeUsername(test.username);
      loginPage.typePassword(test.password);
      loginPage.clickLogin();

      if (test.name === "should login to Dashboard page") {
        dashboardPage.validateBreadcrumbText();
      } else {
        loginPage.getErrorMsg();
      }
    });
  });
});
