describe("Header and Footer Tests", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should display header elements", () => {
    cy.get(".header_logo").should("be.visible").and("have.attr", "href");

    cy.contains("a", "Home").should("be.visible").and("have.attr", "href");

    cy.contains("button", "About").should("be.visible").and("not.be.disabled");

    cy.contains("button", "Contacts")
      .should("be.visible")
      .and("not.be.disabled");

    cy.contains("button", "Guest log in")
      .should("be.visible")
      .and("not.be.disabled");

    cy.contains("button", "Sign In")
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("should display contact links", () => {
    cy.get(".socials_icon.icon-facebook")
      .should("be.visible")
      .parent("a")
      .should("have.attr", "href");

    cy.get(".socials_icon.icon-telegram")
      .should("be.visible")
      .parent("a")
      .should("have.attr", "href");

    cy.get(".socials_icon.icon-youtube")
      .should("be.visible")
      .parent("a")
      .should("have.attr", "href");

    cy.get(".socials_icon.icon-instagram")
      .should("be.visible")
      .parent("a")
      .should("have.attr", "href");

    cy.get(".socials_icon.icon-linkedin")
      .should("be.visible")
      .parent("a")
      .should("have.attr", "href");

    cy.contains("a.contacts_link", "ithillel.ua")
      .should("be.visible")
      .and("have.attr", "href");

    cy.contains("a.contacts_link", "support@ithillel.ua")
      .should("be.visible")
      .and("have.attr", "href");
  });

  it("should display footer elements", () => {
    cy.get(".footer_logo").should("be.visible").and("have.attr", "href");
  });
});
