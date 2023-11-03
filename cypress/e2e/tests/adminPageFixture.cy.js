import dashboardPage from "../../support/objectPages/dashboardPage";
import adminPage from "../../support/objectPages/adminPage";
import Base_PO from "../../support/objectPages/base";

const basePage = new Base_PO();

describe("POM implementation for Admin page", () => {
  before(() => {
    cy.login("Admin", "admin123");
  });

  describe("Fill in the form on General Information tab", () => {
    it("should fill and submit the form", () => {
      dashboardPage.clickAdminBtn();
      adminPage.navigateToGeneralInformationForm();
      adminPage.clickEditToggle();

      cy.fixture("generalInformation.json").then((data) => {
        adminPage.enterRegistrationNumber();
        adminPage.enterTaxId();
        adminPage.enterPhone();
        adminPage.enterEmail();
        adminPage.enterAddress();
        adminPage.enterCity();
        adminPage.enterPostalCode();
        basePage.clickBtn();
        adminPage.getSuccessAlert();
      });
    });
  });
});
