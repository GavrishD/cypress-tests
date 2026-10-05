class GaragePage {
  getAddCarButton() {
    return cy.contains("button", "Add car");
  }

  getBrandSelect() {
    return cy.get("#addCarBrand");
  }

  getModelSelect() {
    return cy.get("#addCarModel");
  }

  getMileageInput() {
    return cy.get("#addCarMileage");
  }

  getAddButton() {
    return cy.contains("button", /^Add$/);
  }

  addCar(brand, model, mileage) {
    this.getAddCarButton().click();
    this.getBrandSelect().select(brand);
    this.getModelSelect().select(model);
    this.getMileageInput().type(mileage);
    this.getAddButton().click();
  }
}

export default GaragePage;
