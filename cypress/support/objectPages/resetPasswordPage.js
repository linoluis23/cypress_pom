class resetPasswordPage {
  elements = {
    resetPasswordSpan: () => cy.get(".oxd-text--h6"),
    usernameField: () => cy.get('input[name="username"]'),
    resetPasswordBtn: () => cy.get('button[type="submit"]'),
    successfulPasswordResetMsg: () => cy.get(".oxd-text--h6"),
  };
}

module.exports = new resetPasswordPage();
