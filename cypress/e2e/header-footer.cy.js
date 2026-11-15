import HomePage from "../pages/HomePage";

const homePage = new HomePage();

describe("Header and Footer Tests", () => {
  beforeEach(() => {
    homePage.visit();
  });

  it("should display header elements", () => {
    homePage.getHeaderLogo().should("be.visible").and("have.attr", "href");

    homePage.getHomeLink().should("be.visible").and("have.attr", "href");

    homePage.getAboutButton().should("be.visible").and("not.be.disabled");

    homePage.getContactsButton().should("be.visible").and("not.be.disabled");

    homePage.getGuestLoginButton().should("be.visible").and("not.be.disabled");

    homePage.getSignInButton().should("be.visible").and("not.be.disabled");
  });

  it("should display contact links", () => {
    homePage.getFacebookLink().should("be.visible").and("have.attr", "href");

    homePage.getTelegramLink().should("be.visible").and("have.attr", "href");

    homePage.getYoutubeLink().should("be.visible").and("have.attr", "href");

    homePage.getInstagramLink().should("be.visible").and("have.attr", "href");

    homePage.getLinkedinLink().should("be.visible").and("have.attr", "href");

    homePage.getIthillelLink().should("be.visible").and("have.attr", "href");

    homePage
      .getSupportEmailLink()
      .should("be.visible")
      .and("have.attr", "href");
  });

  it("should display footer elements", () => {
    homePage.getFooterLogo().should("be.visible").and("have.attr", "href");
  });
});
