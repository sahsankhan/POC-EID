Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the specific error and don't fail the test
    if (err.message.includes("Cannot read properties of undefined (reading 'serverMin')")) {
        return false;
    }
    // Throw other errors
    throw err;
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message is about the 'rules' property
    if (err.message.includes("Cannot read properties of undefined (reading 'rules')")) {
        console.log('Ignoring undefined rules error');
        return false; // Prevents Cypress from failing the test
    }
    // Allow other errors to fail the test
    return true;
  });

  // cypress/support/index.js
Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message is about the 'AutoSubmit' property
    if (err.message.includes("Cannot read properties of undefined (reading 'AutoSubmit')")) {
        console.log('Ignoring undefined AutoSubmit error');
        return false; // Prevents Cypress from failing the test
    }
    // Allow other errors to fail the test
    return true;
});
