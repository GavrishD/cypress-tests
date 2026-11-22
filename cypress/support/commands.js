Cypress.Commands.add("login", (email, password) => {
  cy.contains("button", "Sign In").click();

  cy.get("#signinEmail").type(email);
  cy.get("#signinPassword").type(password);

  cy.contains("button", "Login").click();
});

Cypress.Commands.add("register", (name, lastName, email, password) => {
  cy.contains("button", "Sign up").click();

  cy.get("#signupName").type(name);
  cy.get("#signupLastName").type(lastName);
  cy.get("#signupEmail").type(email);
  cy.get("#signupPassword").type(password);
  cy.get("#signupRepeatPassword").type(password);

  cy.contains("button", "Register").click();
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createExpense", (carId, mileage, liters, totalCost) => {
  return cy.request({
    method: "POST",
    url: "/api/expenses",
    body: {
      carId: carId,
      reportedAt: new Date().toISOString(),
      mileage: mileage,
      liters: liters,
      totalCost: totalCost,
      forceMileage: false,
    },
  });
});
