const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const autoSchedulingPage = require("../../page-objects/autoSchedulingPage");

Then("I should see {string} error", () => {
    cy.contains('Incorrect email or password').should("be.visible");
});

Then("I should see {string} page", (pagename) => {
    autoSchedulingPage.pageNamesLocator(pagename).should("be.visible");
});

And("I click on {string} tab on the dashboard", (tab) => {
    autoSchedulingPage.tabsLocator(tab).click();
});

And("I click on non submitted plan with date {string}", (date) => {
    autoSchedulingPage.plansRowLocator(date).click();
});

Then("I should see {string} tab on the dashboard", (tab) => {
    autoSchedulingPage.tabsLocator(tab).should("be.visible");
});

And("I click on {string} button", (name) => {
    autoSchedulingPage.getButtonLocator(name).click();
});


And("I click on Start from Scratch option", () => {
    autoSchedulingPage.startfromascretch().click();
});

And("I click on Add a Shift", () => {
    autoSchedulingPage.addAShift().click();
});

And("I click on Add button", () => {
    autoSchedulingPage.addShiftButton().click();
});

Then("I should see {string} modal", (name) => {
    autoSchedulingPage.getModalLocator(name).should("be.visible");
});

And("I fill in 'Add a Shift' modal with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('role')) {
        autoSchedulingPage.selectRoleLocator().select(data.role)
    }

    if (data.hasOwnProperty('Start Time')) {
        autoSchedulingPage.selectStartTimeLocator().click();
        cy.contains(data['Start Time']).click()
    }
    
    if (data.hasOwnProperty('End Time')) {
        autoSchedulingPage.selectEndTimeLocator().click();
        cy.contains(data['End Time']).click()
    }

    if (data.hasOwnProperty('employee')) {
        autoSchedulingPage.selectEmployeeLocator().select(data.employee)
    }
    if (data.hasOwnProperty('date')) {
        autoSchedulingPage.selectDateLocator().select(data.date)
    }

    if (data.hasOwnProperty('shift break')) {
        autoSchedulingPage.selectShiftLocator(data["shift break"]).click()
    }

    if (data.hasOwnProperty('shift note')) {
        autoSchedulingPage.selectNotesLocator().type(data["shift note"]);
    }
    
})

Then("I {string} see shift card with employee name {string} and shift time {string}", (state, employee, shift) => {
    if (state === "should") {
        autoSchedulingPage.shiftCardLocator(employee, shift).should("be.visible");
    } else {
        autoSchedulingPage.shiftCardLocator(employee, shift).should("not.exist");
    }
});

Then("I click shift card with employee name {string} and shift time {string}", (employee, shift) => {
    autoSchedulingPage.shiftCardLocator(employee, shift).should("be.visible").click({ force: true });
});
