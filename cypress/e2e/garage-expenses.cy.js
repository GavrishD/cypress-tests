import LoginPage from "../pages/LoginPage";
import GaragePage from "../pages/GaragePage";
import ExpensesPage from "../pages/ExpensesPage";

const loginPage = new LoginPage();
const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe("Garage and Fuel Expenses Tests", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should add a car and fuel expense", () => {
    cy.env(["email", "password"]).then(({ email, password }) => {
      loginPage.login(email, password);
    });

    garagePage.addCar("Audi", "TT", "1000");
    cy.contains("Audi TT").should("be.visible");

    expensesPage.addExpense("1100", "40", "60");
    cy.contains("1100").should("be.visible");
    cy.contains("40L").should("be.visible");
    cy.contains(/60(\.00)? USD/).should("be.visible");
  });
});
