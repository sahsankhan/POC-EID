const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const reportingPage = require("../../page-objects/reportingPage");

Then("I should see {string} on Reporting page", (heading) => {
    reportingPage.heading(heading).should("be.visible");
});

Then("I should see {string} location on Reporting page", (location) => {
    reportingPage.location(location).should("be.visible");
});

And("I click on Previous week Button on the Reporting Page", () => {
    reportingPage.previousWeekButton().click();
});