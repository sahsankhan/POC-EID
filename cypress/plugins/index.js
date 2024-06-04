const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());

  return config;
};

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('An uncaught error was detected: ', err);
  return false; // Returning false here prevents Cypress from failing the test
});


Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore the specific error and don't fail the test
  if (err.message.includes("Cannot read properties of undefined (reading 'serverMin')")) {
      return false;
  }
  // Throw other errors
  throw err;
});

// cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // Check if the error message is about the 'rules' property
  if (err.message.includes("Cannot read properties of undefined (reading 'rules')")) {
      console.log('Ignoring undefined rules error');
      return false; // Prevents Cypress from failing the test
  }
  // Allow other errors to fail the test
  return true;
});
