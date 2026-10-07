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
