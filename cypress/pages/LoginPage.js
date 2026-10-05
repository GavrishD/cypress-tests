class LoginPage {
  getSignInButton() {
    return cy.contains("button", "Sign In");
  }

  getEmailInput() {
    return cy.get("#signinEmail");
  }

  getPasswordInput() {
    return cy.get("#signinPassword");
  }

  getLoginButton() {
    return cy.contains("button", "Login");
  }

  login(email, password) {
    this.getSignInButton().click();
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}

export default LoginPage;
