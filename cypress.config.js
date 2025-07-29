const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kasa.live',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
