const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: "https://example.cypress.io",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
