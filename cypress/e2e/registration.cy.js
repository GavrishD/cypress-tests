// Registration------------------------------------------------
describe("Registration", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.contains("button", "Sign up").click();
  });

  it("should open registration form", () => {
    cy.contains("Registration").should("be.visible");
  });

  it("should show error when Name is empty", () => {
    cy.get("#signupName").click().blur();

    cy.contains("Name required").should("be.visible");
  });

  it("should show error when Name is invalid", () => {
    cy.get("#signupName").type("123");
    cy.get("#signupName").blur();

    cy.contains("Name is invalid").should("be.visible");
  });

  it("should show error when Name is too short", () => {
    cy.get("#signupName").type("A");
    cy.get("#signupName").blur();

    cy.contains("Name has to be from 2 to 20 characters long").should(
      "be.visible"
    );
  });

  it("should show error when Last name is empty", () => {
    cy.get("#signupLastName").click().blur();

    cy.contains("Last name required").should("be.visible");
  });

  it("should show error when Last name is invalid", () => {
    cy.get("#signupLastName").type("123");
    cy.get("#signupLastName").blur();

    cy.contains("Last name is invalid").should("be.visible");
  });

  it("should show error when Email is empty", () => {
    cy.get("#signupEmail").click().blur();

    cy.contains("Email required").should("be.visible");
  });

  it("should show error when Email is invalid", () => {
    cy.get("#signupEmail").type("testemail");
    cy.get("#signupEmail").blur();

    cy.contains("Email is incorrect").should("be.visible");
  });

  it("should show error when Password is empty", () => {
    cy.get("#signupPassword").focus().blur();

    cy.contains("Password required").should("be.visible");
  });

  it("should show error when Password is invalid", () => {
    cy.get("#signupPassword").type("password1").blur();

    cy.contains(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
    ).should("be.visible");
  });

  it("should show error when Re-enter password is empty", () => {
    cy.get("#signupRepeatPassword").focus().blur();

    cy.contains("Re-enter password required").should("be.visible");
  });

  it("should show error when passwords do not match", () => {
    cy.get("#signupPassword").type("Test1234");
    cy.get("#signupRepeatPassword").type("Test12345").blur();

    cy.contains("Passwords do not match").should("be.visible");
  });

  it("should keep Register button disabled when data is invalid", () => {
    cy.contains("button", "Register").should("be.disabled");
  });

  it("should enable Register button when all data is valid", () => {
    cy.get("#signupName").type("Harry");
    cy.get("#signupLastName").type("Potter");
    cy.get("#signupEmail").type("harrytest@example.com");
    cy.get("#signupPassword").type("Test1234");
    cy.get("#signupRepeatPassword").type("Test1234");

    cy.contains("button", "Register").should("be.enabled");
  });

  it("should register a new user successfully", () => {
    const uniqueEmail = `harry${Date.now()}@example.com`;

    cy.get("#signupName").type("Harry");
    cy.get("#signupLastName").type("Potter");
    cy.get("#signupEmail").type(uniqueEmail);
    cy.get("#signupPassword").type("Test1234");
    cy.get("#signupRepeatPassword").type("Test1234");

    cy.contains("button", "Register").click();

    cy.url().should("include", "/panel/garage");
  });
});

//Login custom command------------------------------------------------
describe("Login custom command", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should login using custom command", () => {
    cy.login("potter01@hogwarts.com", "Hahaha1234");

    cy.url().should("include", "/panel/garage");
  });
});

//Register custom command----------------------------------------------
describe("Register custom command", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should register using custom command", () => {
    const uniqueEmail = `harry${Date.now()}@example.com`;

    cy.register("Harry", "Potter", uniqueEmail, "Test1234");

    cy.url().should("include", "/panel/garage");
  });
});
