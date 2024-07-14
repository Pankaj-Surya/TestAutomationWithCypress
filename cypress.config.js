const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
   
  // },
  // supportFile: false,

  e2e: {
    baseUrl: 'https://dev-fe.buttonshift.com',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true,
  },
  // defaultCommandTimeout: 10000,
});
