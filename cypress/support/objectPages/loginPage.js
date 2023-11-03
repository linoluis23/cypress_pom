const data = require("../../fixtures/loginUser.json");

class loginPage {
  elements = {
    loginTitle: () => cy.xpath('//h1[normalize-space()="Bienvenido"]'),
    usernameInput: () => cy.get('input[name="username"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    //errorMsg: () => cy.get('div[role="alert"]'),
    errorMsg: () => cy.xpath('//div[@class="alert alert-danger"]'),
    //emptyUsernameFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    errorUsernameMsg: () => cy.xpath('//div[@class="alert alert-danger"]'),
    errorPasswordMsg: () => cy.xpath('//div[@class="alert alert-danger"]'),
    //emptyPasswordFieldMsg: () => cy.get(".oxd-input-group > .oxd-text"),
    //forgotPasswordBtn: () => cy.contains("Forgot your password?"),
    //dropdownAboutAlert: () => cy.get(".orangehrm-modal-header > .oxd-text"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

}

module.exports = new loginPage();
