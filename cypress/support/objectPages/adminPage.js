const data = require("../../fixtures/generalInformation.json");
class adminPage {
  elements = {
    adminSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    oragnizationTabId: () =>
      cy.xpath("//span[normalize-space()='Organization']"),
    generalInformationTabId: () =>
      cy.xpath("//a[normalize-space()='General Information']"),
    formId: () => cy.xpath("//*[@id='app']/div[1]/div[2]/div[2]/div/div"),
    editBtn: () => cy.get(".oxd-switch-input"),
    registartionNumberId: () =>
      cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]"),
    taxId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'
      ),
    phoneId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/input'
      ),
    emailId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[3]/div/div[2]/input'
      ),
    streetId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[1]/div/div[2]/input'
      ),
    cityId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div[3]/div/div[2]/input'
      ),
    postalCodeId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/div/div[2]/div/div[2]/input'
      ),
    countryId: () =>
      cy.xpath(
        '//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/div/div[3]/div/div[2]/div/div/div[1]'
      ),
  };

  navigateToGeneralInformationForm() {
    this.elements.oragnizationTabId().click();
    this.elements.generalInformationTabId().click();
    this.elements.formId().should("be.visible");
  }

  clickEditToggle() {
    this.elements.editBtn().click({ force: true });
  }

  enterRegistrationNumber() {
    this.elements
      .registartionNumberId()
      .clear({ force: true })
      .type(data.registrationNumber);
  }

  enterTaxId() {
    this.elements.taxId().type(data.tax);
  }

  enterPhone() {
    this.elements.phoneId().clear({ force: true }).type(data.phone);
  }

  enterEmail() {
    this.elements.emailId().clear({ force: true }).type(data.email);
  }

  enterAddress() {
    this.elements.streetId().clear({ force: true }).type(data.street);
  }

  enterCity() {
    this.elements.cityId().clear({ force: true }).type(data.city);
  }

  enterPostalCode() {
    this.elements.postalCodeId().type(data.postalCode);
  }

  getSuccessAlert() {
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Successfully updated");
    });
  }
}
module.exports = new adminPage();
