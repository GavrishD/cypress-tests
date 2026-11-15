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
    baseUrl: "https://qauto2.forstudy.space",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,

    env: {
      email: "granger02@hogwarts.com",
      password: "Test1234!",
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
