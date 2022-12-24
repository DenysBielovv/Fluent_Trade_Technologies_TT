const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'voqggn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://nitecore.ua/ua'
  },
});
