import ExpensesPage from "../pages/ExpensesPage";
import LoginPage from "../pages/LoginPage";
import GaragePage from "../pages/GaragePage";

const loginPage = new LoginPage();
const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe("Cars and Expenses API Tests", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("should create a car and intercept the response", () => {
    cy.env(["email", "password"]).then(({ email, password }) => {
      loginPage.login(email, password);
    });

    cy.intercept("POST", "/api/cars").as("createCar");

    garagePage.addCar("Audi", "TT", "1000");

    cy.wait("@createCar").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);

      const carId = interception.response.body.data.id;
      cy.wrap(carId).as("carId");

      cy.request("GET", "/api/cars").then((response) => {
        expect(response.status).to.eq(200);

        const createdCar = response.body.data.find((car) => car.id === carId);

        expect(createdCar).to.exist;
        expect(createdCar.brand).to.eq("Audi");
        expect(createdCar.model).to.eq("TT");
        expect(createdCar.mileage).to.eq(1000);
      });

      cy.createExpense(carId, 1100, 40, 60).then((response) => {
        expect(response.status).to.eq(200);

        expect(response.body.status).to.eq("ok");
        expect(response.body.data.carId).to.eq(carId);
        expect(response.body.data.mileage).to.eq(1100);
        expect(response.body.data.liters).to.eq(40);
        expect(response.body.data.totalCost).to.eq(60);
      });

      expensesPage.getFuelExpensesLink().click();

      expensesPage.getExpenseRow(1100).within(() => {
        cy.contains("1100").should("be.visible");
        cy.contains("40L").should("be.visible");
        cy.contains("60.00 USD").should("be.visible");
      });
    });
  });
});
