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
        // PeoplePage.browse().click();
        cy.wait(2000);
        PeoplePage.searchFieldLocator().eq(1).type(data.BusinessRole);
        PeoplePage.searchButtonLocator().eq(0).click();
        cy.wait(3000);
        PeoplePage.getItemByTextLocator(data.BusinessRole).scrollIntoView().should('be.visible').click()

    }
    if (data.hasOwnProperty('Location')) {
        PeoplePage.locationLocator().should('be.visible').click();
        cy.wait(2000);
        PeoplePage.searchFieldLocator().eq(2).type(data.Location);
        PeoplePage.searchButtonLocator().eq(1).click();
        cy.wait(3000);
        PeoplePage.getItemByTextLocator(data.Location).should('be.visible').click();
        // PeoplePage.locationRolelocation().click();
    }

    PeoplePage.selectButtonLocator().should('be.visible').click();

    // if (data.hasOwnProperty('Manager')) {
    //     PeoplePage.managerSearchFieldLocator().type(data.Manager).realType('{enter}');
    // }

    CommonLocators.getButtonLocator('Next').click();
    // CommonLocators.getButtonLocator('Submit').should('be.visible').click();

})


Then("I should see {string} success message on Person page", (text) => {
    PeoplePage.successMessageLocator(text).should('be.visible');

})