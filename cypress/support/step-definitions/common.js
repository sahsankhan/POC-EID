const { Given, When, Then, And } = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');
const commonLocator = require("../../page-objects/common-locators");


Given("I visit EmpowerID", () => {
    cy.visit("https://api.empoweriam.com");
    commonLocator.cookieConsentButton().should('be.visible', { timeout: 10000 }).click();
});

When("I enter valid username and password on login page", () => {
    cy.fixture("user").then((user) => {
        commonLocator.login(user.username, user.password);
    });
});

And("I press login button", () => {
    commonLocator.loginbutton().click();
});

Then("I should see 'Which Persona do you want to login' as on Person selection page", () => {
    commonLocator.personaSelectionHeader().should("be.visible");
});

When('I click on Ahsan Khan on Person Selection page', () => {
    commonLocator.selectPerson().should('be.visible').click();
});

When('I click on navbar toggle', () => {
    commonLocator.navbarToggleLocator().should('be.visible').click();
});

Then('I should see dashboard tab on navigation bar', () => {
    commonLocator.dashboardtitlelocator().should('be.visible');
});

When("I enter invalid valid username and password on login page", () => {
    cy.fixture("user").then((user) => {
        commonLocator.login(user.username2, user.password2);
    });
});

Then("I should see change password screen", () => {
    commonLocator.errormessagelocator().should("be.visible").should("have.text",'Change Password');
});

Then("I should see login screen", () => {
    commonLocator.loginPageLocator().should("be.visible").should("have.text",'Login');
});

When("I click on profile button", () => {
    commonLocator.userNameIdLocator().click();
});

And("I click on logout button", () => {
    commonLocator.logoutTextLocator().click();
});

Then("I should see {string} tab on dashboard page", (text) => {
    commonLocator.navbartablocator(text).should("be.visible");
});

And("I click on {string} tab on dashboard page", (text) => {
    commonLocator.navbartablocator(text).click();
});

Given("I click on Onboard Person on action panel on Person page", () => {
    commonLocator.OnboardPerson().first().click();
});

And("I wait {string} seconds", (time) => {
    cy.wait(time * 1000);
});

And("I press {string} button", (text) => {
    commonLocator.getButtonLocator(text).should('be.visible').click();
});

And("I fill in 'Onboard a Person' form with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('FirstName')) {
        commonLocator.firstName().should('be.visible').type(data.FirstName);
    }

    if (data.hasOwnProperty('LastName')) {
        commonLocator.LastName().should('be.visible').type(data.LastName);
    }

    if (data.hasOwnProperty('Email')) {
        commonLocator.emailLocator().should('be.visible').type(data.Email);
    }

    if (data.hasOwnProperty('BusinessRole')) {
        commonLocator.selectRoleAndLocation().click();
        commonLocator.browse().eq(2).click({ force: true });
        cy.wait(2000);
        commonLocator.searchFieldLocator().type(data.BusinessRole);
        commonLocator.searchButtonLocator().eq(1).click();
        cy.wait(3000);
        commonLocator.getItemByTextLocator(data.BusinessRole).scrollIntoView().should('be.visible').click();
    }

    if (data.hasOwnProperty('Location')) {
        commonLocator.locationLocator().should('be.visible').click();
        commonLocator.browse().eq(3).click({ force: true });
        cy.wait(2000);
        commonLocator.searchFieldLocator().eq(2).type(data.Location);
        commonLocator.searchButtonLocator().eq(4).click();
        cy.wait(3000);
        commonLocator.getItemByTextLocator(data.Location).should('be.visible').click();
    }

    commonLocator.selectButtonLocator().should('be.visible').click();
    commonLocator.getButtonLocator('Next').click();
});

Then("I should see {string} success message on Person page", (text) => {
    commonLocator.successMessageLocator(text).should('be.visible');
});
