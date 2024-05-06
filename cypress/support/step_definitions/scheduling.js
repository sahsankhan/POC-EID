const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const SchedulingPage = require("../../page-objects/schedulingPage");

Then("I should see {string} error", () => {
    cy.contains('Incorrect email or password').should("be.visible");
});

Then("I should see {string} page", (pagename) => {
    SchedulingPage.pageNamesLocator(pagename).should("be.visible");
});

And("I click on {string} tab on the dashboard", (tab) => {
    SchedulingPage.tabsLocator(tab).click();
});

And("I click on non submitted plan with date {string}", (date) => {
    SchedulingPage.plansRowLocator(date).click();
});

Then("I should see {string} tab on the dashboard", (tab) => {
    SchedulingPage.tabsLocator(tab).should("be.visible");
});

And("I click on {string} button", (name) => {
    SchedulingPage.getButtonLocator(name).click();
});

And("I click on Add a Shift", () => {
    SchedulingPage.addAShift().click();
});

And("I click on Add button", () => {
    SchedulingPage.addShiftButton().click();
});

Then("I should see {string} modal", (name) => {
    SchedulingPage.getModalLocator(name).should("be.visible");
});

And("I fill in 'Add a Shift' modal with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('role')) {
        SchedulingPage.selectRoleLocator().select(data.role)
    }

    if (data.hasOwnProperty('Start Time')) {
        SchedulingPage.selectStartTimeLocator().click();
        cy.contains(data['Start Time']).click()
    }
    
    if (data.hasOwnProperty('End Time')) {
        SchedulingPage.selectEndTimeLocator().click();
        cy.contains(data['End Time']).click()
    }

    if (data.hasOwnProperty('employee')) {
        SchedulingPage.selectEmployeeLocator().select(data.employee)
    }
    if (data.hasOwnProperty('date')) {
        SchedulingPage.selectDateLocator().select(data.date)
    }

    if (data.hasOwnProperty('shift break')) {
        SchedulingPage.selectShiftLocator(data["shift break"]).click()
    }
})

Then("I {string} see shift card with employee name {string} and shift time {string}", (state, employee, shift) => {
    if (state === "should") {
        SchedulingPage.shiftCardLocator(employee, shift).should("be.visible");
    } else {
        SchedulingPage.shiftCardLocator(employee, shift).should("not.exist");
    }
});

Then("I click shift card with employee name {string} and shift time {string}", (employee, shift) => {
    SchedulingPage.shiftCardLocator(employee, shift).should("be.visible").click({ force: true });
});

Then("I should see weekly total {string} for row {string}", (hour, row) => {
    SchedulingPage.weeklyTotalHourLocator(hour, row).should("be.visible");

});

And("I click on Employee dropdown", () => {
    SchedulingPage.selectEmployeeLocator().realClick();
});

When("I {string} the checkbox", (action) => {
    if (action === 'check') {
        SchedulingPage.employeeAvailabilityCheckBoxLocator().check().should('be.checked');
    } else if (action === 'uncheck') {
        SchedulingPage.employeeAvailabilityCheckBoxLocator().uncheck().should('not.be.checked');
    }
});

Then('I should see the following data on the employee dropdown:', (dataTable) => {
    const expectedEmployees = dataTable.raw().slice(1).map(row => row[0]);
    expectedEmployees.forEach(employee => {
        SchedulingPage.employeeNameLocator(employee).should('exist');
    });
});
