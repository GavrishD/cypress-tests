class HomePage {
  visit() {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  }

  getHeaderLogo() {
    return cy.get(".header_logo");
  }

  getHomeLink() {
    return cy.contains("a", "Home");
  }

  getAboutButton() {
    return cy.contains("button", "About");
  }

  getContactsButton() {
    return cy.contains("button", "Contacts");
  }

  getGuestLoginButton() {
    return cy.contains("button", "Guest log in");
  }

  getSignInButton() {
    return cy.contains("button", "Sign In");
  }

  getFacebookLink() {
    return cy.get(".socials_icon.icon-facebook").parent("a");
  }

  getTelegramLink() {
    return cy.get(".socials_icon.icon-telegram").parent("a");
  }

  getYoutubeLink() {
    return cy.get(".socials_icon.icon-youtube").parent("a");
  }

  getInstagramLink() {
    return cy.get(".socials_icon.icon-instagram").parent("a");
  }

  getLinkedinLink() {
    return cy.get(".socials_icon.icon-linkedin").parent("a");
  }

  getIthillelLink() {
    return cy.contains("a.contacts_link", "ithillel.ua");
  }

  getSupportEmailLink() {
    return cy.contains("a.contacts_link", "support@ithillel.ua");
  }
  getFooterLogo() {
    return cy.get(".footer_logo");
  }
}

export default HomePage;
