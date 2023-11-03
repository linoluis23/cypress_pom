const data = require("../../fixtures/loginUser.json");

class principalPage {
  elements = {
    //dashboardSpan: () => cy.get('span[class="oxd-topbar-header-breadcrumb"]'),
    dashboardSpan: () => cy.xpath('//div[@class="logo pull-left"]'),
    adminBtn: () => cy.contains("Admin"),
    myInfoBtn: () => cy.contains("My Info"),
    userDropdownIcon: () => cy.get(".toggle"),
  };

  validateBreadcrumbText() {
    this.elements.dashboardSpan().should("have.text", data.expected);
  }

  clickAdminBtn() {
    this.elements.adminBtn().click();
  }

  clickMyInfoBtn() {
    this.elements.myInfoBtn().click();
  }

  navigateToUserDropdown() {
    this.elements.userDropdownIcon().click();
  }
}

module.exports = new principalPage();
