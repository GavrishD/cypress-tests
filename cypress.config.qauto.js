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
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,

    env: {
      email: process.env.CYPRESS_TEST_EMAIL,
      password: process.env.CYPRESS_TEST_PASSWORD,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
