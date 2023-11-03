// import dashboardPage from "../../support/objectPages/dashboardPage";
// import adminPage from "../../support/objectPages/adminPage";

// describe("POM implementation for Admin page", () => {
//   before(() => {
//     cy.clearLocalStorage();
//     cy.login("Admin", "admin123");
//     dashboardPage.clickAdminBtn();
//   });

//   describe("Accessibility check ", () => {
//     it("should run accessibility audits", () => {
//       adminPage.elements
//         .adminSpan()
//         .should("be.visible")
//         .and("contain", "Admin");
//       cy.injectAxe(); // inject axe-core runtime
//       cy.checkA11y(); // scan the entire page for accessibility failure
//     });
//   });
// });
