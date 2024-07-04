const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://demo1.empowerid.net/WebIdPForms/Login/Portal',
        specPattern: 'cypress/e2e/**/*.feature', // Update the specPattern to match your feature file location
        defaultCommandTimeout: 35000,
        viewportWidth: 1920,  // Set the viewport width to 1920 pixels
        viewportHeight: 1080, // Set the viewport height to 1080 pixels
        reporter: 'mochawesome', // Set Mochawesome as the reporter
        reporterOptions: {
            reportDir: 'cypress/reports/mocha', // Directory to save the report
            overwrite: false,
            html: false,
            json: true
        },
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber({
                resolveStepDefinition(definition) {
                    return definition;
                },
                featureName: "___GLOBAL_EXECUTION___",
                nonGlobalStepDefinitions: false,
                stepDefinitions: './cypress/support/step-definitions/**/*.js'
            }));
        }
    }
});
