// // const { defineConfig } = require("cypress");
// // const cucumber = require('cypress-cucumber-preprocessor').default;

// // module.exports = defineConfig({
// //     e2e: {
// //         baseUrl: 'https://demo1.empowerid.net/WebIdPForms/Login/Portal',
// //         specPattern: 'cypress/e2e/**/*.feature', // Update the specPattern to match your feature file location
// //         defaultCommandTimeout: 35000,
// //         viewportWidth: 1920,  // Set the viewport width to 1920 pixels
// //         viewportHeight: 1080, // Set the viewport height to 1080 pixels
// //         reporter: 'cypress-multi-reporters', // Change to cypress-multi-reporters
// //         reporterOptions: {
// //             reporterEnabled: 'spec, mocha-junit-reporter',
// //             mochaJunitReporterReporterOptions: {
// //                 mochaFile: 'cypress/results/cucumber_report.xml'
// //             }
// //         },
// //         setupNodeEvents(on, config) {
// //             on('file:preprocessor', cucumber({
// //                 resolveStepDefinition(definition) {
// //                     return definition;
// //                 },
// //                 featureName: "___GLOBAL_EXECUTION___",
// //                 nonGlobalStepDefinitions: false,
// //                 stepDefinitions: './cypress/support/step-definitions/**/*.js'
// //             }));
// //             return config;
// //         }
// //     }
// // });

// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//     e2e: {
//         baseUrl: 'https://demo1.empowerid.net/WebIdPForms/Login/Portal',
//         specPattern: 'cypress/e2e/**/*.feature',
//         defaultCommandTimeout: 35000,
//         viewportWidth: 1920,
//         viewportHeight: 1080,
//         setupNodeEvents(on, config) {
//             on('file:preprocessor', cucumber());
//             return config;
//         },
//         reporter: 'cypress-multi-reporters',
//         reporterOptions: {
//             reporterEnabled: 'json',
//             jsonReporterOptions: {
//                 outputFile: 'cypress/reports/cucumber-report.json'
//             }
//         }
//     }
// });


const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://demo1.empowerid.net/WebIdPForms/Login/Portal',
        specPattern: 'cypress/e2e/**/*.feature',
        defaultCommandTimeout: 35000,
        viewportWidth: 1920,
        viewportHeight: 1080,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber());
            return config;
        },
        reporter: 'cypress-multi-reporters',
        reporterOptions: {
            reporterEnabled: 'json, mocha-junit-reporter',
            jsonReporterOptions: {
                outputFile: 'cypress/reports/cucumber-report.json'
            },
        }
    }
});



