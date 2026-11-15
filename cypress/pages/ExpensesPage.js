class ExpensesPage {
  getFuelExpensesLink() {
    return cy.contains("a", "Fuel expenses");
  }

  getAddExpenseButton() {
    return cy.contains("button", "Add an expense");
  }

  getMileageInput() {
    return cy.get("#addExpenseMileage");
  }

  getLitersInput() {
    return cy.get("#addExpenseLiters");
  }

  getTotalCostInput() {
    return cy.get("#addExpenseTotalCost");
  }

  getAddButton() {
    return cy.contains("button", /^Add$/);
  }

  addExpense(mileage, liters, totalCost) {
    this.getFuelExpensesLink().click();
    this.getAddExpenseButton().click();
    this.getMileageInput().clear().type(mileage);
    this.getLitersInput().type(liters);
    this.getTotalCostInput().type(totalCost);
    this.getAddButton().click();
  }

  getExpensesTable() {
    return cy.get("table");
  }

  getExpenseRow(mileage) {
    return this.getExpensesTable().contains("td", mileage).parent("tr");
  }
}

export default ExpensesPage;
