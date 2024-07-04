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
    commonLocator.selectPerson().should('be.visible').click({ force: true });
});

When('I click on navbar toggle', () => {
    commonLocator.navbarToggleLocator().should('be.visible').click({ force: true });
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
    commonLocator.userNameIdLocator().click({ force: true });
});

And("I click on logout button", () => {
    commonLocator.logoutTextLocator().click({ force: true });
});

Then("I should see {string} tab on dashboard page", (text) => {
    commonLocator.navbartablocator(text).should("be.visible");
});

And("I click on {string} tab on dashboard page", (text) => {
    commonLocator.navbartablocator(text).click({ force: true });
});

Given("I click on Onboard Person on action panel on Person page", () => {
    commonLocator.OnboardPerson().first().click({ force: true });
});

And("I wait {string} seconds", (time) => {
    cy.wait(time * 1000);
});

And("I press {string} button", (text) => {
    commonLocator.getButtonLocator(text).should('be.visible').click({ force: true });
});

And("I fill in 'Onboard a Person' form with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('FirstName')) {
        commonLocator.firstName().should('be.visible').type(data.FirstName, { force: true });
    }

    if (data.hasOwnProperty('LastName')) {
        commonLocator.LastName().should('be.visible').type(data.LastName, { force: true });
    }

    if (data.hasOwnProperty('Email')) {
        commonLocator.emailLocator().should('be.visible').type(data.Email, { force: true });
    }

    if (data.hasOwnProperty('BusinessRole')) {
        commonLocator.selectRoleAndLocation().click({ force: true });
        commonLocator.browse().eq(2).click({ force: true });
        cy.wait(2000);
        commonLocator.searchFieldLocator().type(data.BusinessRole, { force: true });
        commonLocator.searchButtonLocator().eq(1).click({ force: true });
        cy.wait(3000);
        commonLocator.getItemByTextLocator(data.BusinessRole).scrollIntoView().should('be.visible').click({ force: true });
    }

    if (data.hasOwnProperty('Location')) {
        commonLocator.locationLocator().should('be.visible').click({ force: true });
        commonLocator.browse().eq(3).click({ force: true });
        cy.wait(2000);
        commonLocator.searchFieldLocator().eq(2).type(data.Location, { force: true });
        commonLocator.searchButtonLocator().eq(4).click({ force: true });
        cy.wait(3000);
        commonLocator.getItemByTextLocator(data.Location).should('be.visible').click({ force: true });
    }

    commonLocator.selectButtonLocator().should('be.visible').click({ force: true });
    commonLocator.getButtonLocator('Next').click({ force: true });
});

Then("I should see {string} success message on Person page", (text) => {
    commonLocator.successMessageLocator(text).should('be.visible');
});

And("I click on {string} tab", (text) => {
    commonLocator.navbartablocator(text).click({ force: true });
});

And("I fill in 'Global Functions' form with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('Name')) {
        commonLocator.nameLocator().should('be.visible').type(data.Name, { force: true });
    }
    if (data.hasOwnProperty('DisplayName')) {
        commonLocator.friendlyNameLocator().should('be.visible').type(data.DisplayName, { force: true });
    }

    if (data.hasOwnProperty('Description')) {
        commonLocator.descriptionLocator().should('be.visible').type(data.Description, { force: true });
    }

    if (data.hasOwnProperty('FunctionType')) {
        commonLocator.functionTypeLocator().type(data.FunctionType, { force: true }).type('{enter}');
    }

    if (data.hasOwnProperty('RiskLevel')) {
        commonLocator.riskLevelLocator().type(data.RiskLevel, { force: true }).type('{enter}');
    }

    if (data.hasOwnProperty('RiskResourceSet')) {
        commonLocator.riskResourceSetLocator().type(data.RiskResourceSet, { force: true }).type('{enter}');
    }

    if (data.hasOwnProperty('Location')) {
        commonLocator.selectLocationLocator().should('be.visible').click({ force: true });
        commonLocator.browse().eq(1).click({ force: true });
        cy.wait(2000);
        commonLocator.getLocationItemByText(data.Location).should('be.visible').click({ force: true });
    }
});

And("I click on add button", () => {
    commonLocator.eidAddButtonLocator().click({ force: true });
});

And("I click on 'save' button on 'Global Functions' page", () => {
    commonLocator.saveButtonLocatorForEidGrid().click({ force: true});
});


Then("I should see {string} success message", (text) => {
    commonLocator.successNotificationlocator(text).should('be.visible');
});

And("I collapse location panel", () => {
    commonLocator.locationPanelLocator().eq(1).click({ force: true });
});

And("I search {string} on 'Global Functions' Page", (text) => {
    commonLocator.globalFunctionSearchFieldLocator().eq(2).type(text);
    commonLocator.globalFunctionSearchButtonLocator().eq(1).click();
});

And("I click on {string} button on Global Functions Page", (buttonName) => {
    if (buttonName.toLowerCase() === "edit") {
        commonLocator.globalFunctionEditButtonLocator().eq(10).click({ force: true });
    } else if (buttonName.toLowerCase() === "delete") {
        commonLocator.globalFunctionRemoveButtonLocator().eq(10).click({ force: true });
    }
});

And("I edit 'Global Functions' form with the following data:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('Name')) {
        commonLocator.nameLocator().should('be.visible').clear().type(data.Name, { force: true });
    }
    if (data.hasOwnProperty('DisplayName')) {
        commonLocator.friendlyNameLocator().should('be.visible').clear().type(data.DisplayName, { force: true });
    }

    if (data.hasOwnProperty('Description')) {
        commonLocator.descriptionLocator().should('be.visible').clear().type(data.Description, { force: true });
    }

    if (data.hasOwnProperty('FunctionType')) {
        commonLocator.functionTypeLocator().clear().type(data.FunctionType, { force: true }).type('{enter}');
    }

    if (data.hasOwnProperty('RiskLevel')) {
        commonLocator.riskLevelLocator().clear().type(data.RiskLevel, { force: true }).type('{enter}');
    }

    if (data.hasOwnProperty('RiskResourceSet')) {
        commonLocator.riskResourceSetLocator().clear().type(data.RiskResourceSet, { force: true }).type('{enter}');
    }
});
