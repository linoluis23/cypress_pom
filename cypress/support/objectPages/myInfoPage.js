class MyInfoPage {
  elements = {
    requiredFieldErrorMsg: () => cy.contains("Required"),
    over30charactersErrorMsg: () => cy.contains("Should not exceed 30 characters"),
    fullNameField: () => cy.get('input[name="firstName"]'),
    employeeIdField: () => cy.xpath('//input[@class="oxd-input oxd-input--active"]'),
    driverLicenceField: () => cy.get('input[name="firstName"]'),
    saveBtn: () => cy.get('button[type="submit"]'),
  };

  clickEmployeeImage() {
    this.elements.employeeImageAvatar().click();
  }

  clickEmployeeImageBtn() {
    this.elements.employeeImageBtn().click();
  }

  enterFullName() {
    this.elements.fullNameField().clear().type("Magdalena Lozowska-Pereira");
  }

  enterFullName2() {
    this.elements.fullNameField().clear();
  }

  clickSaveBtn() {
    this.elements.saveBtn().eq(0).click({ force: true });
  }
}

module.exports = new MyInfoPage();
