Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit(Cypress.config("baseUrl"));

  // Enter the username and password
  //cy.get('input[name="username"]').type(username);
  cy.get('input[name="username"]').type(username);
  cy.xpath('//input[@placeholder="Contraseña"]').type(password);
  //cy.get('input[name="password"]').type(password);

  // Submit the login form
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("panelDeControl", () => {
  cy.contains("Panel de control").click();
});
