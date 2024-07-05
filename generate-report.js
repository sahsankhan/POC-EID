// const report = require('multiple-cucumber-html-reporter');

// report.generate({
//   jsonDir: 'cypress/reports/mocha', // Path of the JSON file
//   reportPath: './cypress/reports/cucumber-html-report.html',
//   metadata: {
//     browser: {
//       name: 'chrome',
//       version: '60',
//     },
//     device: 'Local test machine',
//     platform: {
//       name: 'windows',
//       version: '10',
//     },
//   },
// });

// const report = require('multiple-cucumber-html-reporter');

// report.generate({
//   jsonDir: 'cypress/reports', // Path to the directory containing JSON files
//   reportPath: './cypress/reports/cucumber-html-report.html',
//   metadata: {
//     browser: {
//       name: 'chrome',
//       version: '91', // Update with the actual browser version used in tests
//     },
//     device: 'Local test machine',
//     platform: {
//       name: 'windows',
//       version: '10', // Update with your actual platform version
//     },
//   },
// });



const report = require('multiple-cucumber-html-reporter');


report.generate({
  jsonDir: 'cypress/cucumber-json', // Path to the directory containing JSON files
  reportPath: './cypress/cucumber-json/html', // Path to the directory where HTML report will be generated
  metadata: {
    browser: {
      name: 'chrome',
      version: '126' // Update with the actual browser version used in tests
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress Cucumber Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Execution Start Time', value: new Date().toISOString() },
      { label: 'Execution End Time', value: new Date().toISOString() }
    ]
  }
});








