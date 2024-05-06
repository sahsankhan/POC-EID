const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const managementPage = require("../../page-objects/managementPage");

Then("I should see {string} heading on the top of the Messages Page", (heading) => {
    managementPage.messagesHeading(heading).should('exist');
});

And("I enter {string} Messages textarea", (text) => {
    managementPage.messageTextArea().type(text);
});

Then("I should see success message on Messages Page", () => {
    cy.contains('Success! Message has been sent').should('exist');
});

Then("I should see {string} subheading on the top of the Messages Page", (subheading) => {
    managementPage.messagesSubheading(subheading).should('exist');
});

Then('I should see the following date on the Messages:', (dataTable) => {
    const expectedDate = dataTable.raw().slice(1).map(row => row[0]);
    expectedDate.forEach(Date => {
        managementPage.messagesDate(Date).should('exist');
    });
});

Then('I should see the following sender on the Messages:', (dataTable) => {
    const expectedSender = dataTable.raw().slice(1).map(row => row[0]);
    expectedSender.forEach(sender => {
        managementPage.messagesSender(sender).should('exist');
    });
});

Then('I should see the following message on the Messages:', (dataTable) => {
    const expectedMessage = dataTable.raw().slice(1).map(row => row[0]);
    expectedMessage.forEach(message => {
        managementPage.messagesMessage(message).should('exist');
    });
});

Then("I should see {string} heading on the top of the Request Page", (heading) => {
    cy.wait(400)
    managementPage.scheduleRequest(heading).should('exist');
});

And("I click on Submit button of the {string} Employee", (employeeName) => {
    managementPage.submitButton(employeeName).click();
});

And("I enter {string} in the search field on Request Page", (text) => {
    managementPage.employeeSearch().type(text);
});

And("I click {string} button on the confirmation modal", () => {
    managementPage.modalButton().click();
});

And("I declined the checkbox of {string} Employee", (employeeName) => {
    managementPage.approveCheckbox(employeeName).click();
});

And("I enter {string} in Actions textbox on Request Page", (text) => {
    managementPage.actionTextbox().type(text);
});

Then("I should see {string} sub-heading on the Request Page", (subheading) => {
    managementPage.subHeadings(subheading).should('exist');
});

And("I click on {string} under Management heading", (subtab) => {
    managementPage.managementSubtab(subtab).click();
});

Then('I should see the following employees on the page:', (dataTable) => {
    const expectedEmployees = dataTable.raw().slice(1).map(row => row[0]);
    expectedEmployees.forEach(employee => {
        managementPage.employeeNameLocator(employee).should('exist');
    });
});

And("I enter {string} in Employee Name Field", (text) => {
    const randomFourDigitNumber = Math.floor(10 + Math.random() * 9000);
    const combinedText = text + randomFourDigitNumber;
    managementPage.employeeNameField().type(combinedText);
});

And("I enter {string} in Employee Email Field", (text) => {

    if (text === "Test+2@lineup.ai") {
        managementPage.employeeEmailField().type(text);
    } else {
        const randomFourDigitNumber = Math.floor(10 + Math.random() * 9000);
        const combinedText = text + randomFourDigitNumber + "@lineup.ai";
        managementPage.employeeEmailField().type(combinedText);
    }
});

And("I enter {string} in Employee Wage Field", (text) => {
    managementPage.employeeWageField().type(text);
});

And("I enter {string} in Employee Phone No Field", (text) => {
    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    const combinedText = text + randomFourDigitNumber;
    managementPage.employeePhoneNoField().type(combinedText);
});



And("I click on {string} checkbox", (checkboxLabel) => {
    let index;

    if (checkboxLabel === "Exclude labor") {
        index = 0;  // For the first checkbox
    } else if (checkboxLabel === "Active") {
        index = 1;  // For the second checkbox
    } else {
        throw new Error(`Unknown checkbox label: ${checkboxLabel}`);
    }
    managementPage.checkboxByIndex(index).should('exist').click();

});

Then("I should be able to see success message on Add Employee Page", () => {
    cy.contains('Employee successfully added').should('exist');
});

Then("I should be able to see Email already exist", () => {
    managementPage.emailError().should('exist');
});

And("I type {string} in the search bar on the Employee Page", (text) => {
    managementPage.employeeSearch().type(text);
});

And("I click on Edit button of the {string} Employee", (employeeName) => {
    managementPage.editButton(employeeName).click();
});

Then("I should be able to see Thankyou message", () => {
    cy.get('.Toastify__toast-body > :nth-child(2)').should("be.visible");
});

Then("I should see the {string} on the Employee Page", (employeeName) => {
    managementPage.employeeName(employeeName).should("be.visible");
});

And("I clear the text on the search bar on the Employee Page", () => {
    managementPage.employeeSearch().clear();
});

Then("I should see {string} heading on the Edit Employee Page", (heading) => {
    managementPage.editEmployeeSubheading(heading).should("be.visible");
});
