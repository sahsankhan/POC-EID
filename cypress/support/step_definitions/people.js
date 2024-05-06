const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');
const CommonLocators = require("../../page-objects/commonLocator");
const PeoplePage = require("../../page-objects/PeoplePage");


Given("I click on Onboard Person on action panel on Person page", () => {
    PeoplePage.OnboardPerson().first().click();
})


Given("I click on Action panel on Person page", () => {
    PeoplePage.personActionPanel().should('be.visible').click();
})

And("I fill in 'Onboard a Person' form with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('FirstName')) {
        PeoplePage.firstName().should('be.visible').type(data.FirstName);
    }

    if (data.hasOwnProperty('LastName')) {
        PeoplePage.LastName().should('be.visible').type(data.LastName);
    }

    if (data.hasOwnProperty('Email')) {
        PeoplePage.emailLocator().should('be.visible').type(data.Email);
    }

    if (data.hasOwnProperty('BusinessRole')) {
        PeoplePage.selectRoleAndLocation().click();
        PeoplePage.searchButtonLocator().eq(0).click({ force: true });
        PeoplePage.getItemByTextLocator(data.BusinessRole).scrollIntoView().should('be.visible').click()

    }
    if (data.hasOwnProperty('Location')) {
        PeoplePage.locationLocator().should('be.visible').click();
        PeoplePage.searchButtonLocator().eq(0).click({ force: true });
        // PeoplePage.getItemByTextLocator(data.Location).eq(1).should('be.visible').click();
        PeoplePage.locationRolelocation().click();
    }

    PeoplePage.selectButtonLocator().should('be.visible').click();

    if (data.hasOwnProperty('Manager')) {
        PeoplePage.managerSearchFieldLocator().type(data.Manager).realType('{enter}');
    }

    CommonLocators.getButtonLocator('Next').click();
    CommonLocators.getButtonLocator('Submit').should('be.visible').click();

})


Then("I should see {string} success message on Person page", (text) => {
    PeoplePage.successMessageLocator(text).should('be.visible');

})