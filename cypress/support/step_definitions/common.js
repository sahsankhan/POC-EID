const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');
const CommonLocators = require("../../page-objects/commonLocator");
const LoginPage = require("../../page-objects/loginPage");

Given("I visit EmpowerID", () => {
    cy.visit("https://demo1.empowerid.net/Ui");
    LoginPage.cookieConsentButton().should('be.visible', { timeout: 10000 }).click();
});


When("I enter valid username and password on login page", () => {
    cy.fixture("user").then((user) => {
    LoginPage.login(user.username, user.password);
    });
});

And("I press login button", () => {
    LoginPage.loginbutton().click();
});

When("I enter invalid valid username and password on login page", () => {
    cy.fixture("user").then((user) => {
        LoginPage.login(user.username2, user.password2);
    });
});

When('I click on Ahsan Khan on Person Selection page', () => {
    CommonLocators.selectPerson().should('be.visible').click();
});

When('I click on navbar toggle', () => {
CommonLocators.navbarToggleLocator().should('be.visible').click();
})

Then('I should see dashboard tab on navigation bar', () => {
    CommonLocators.dashboardtitlelocator().should('be.visible')
})


// Then("I should see {string} success message on the page", (text) => {
//     CommonLocators.successMessage(text).should('exist');
// });

Then("I should see 'Which Persona do you want to login' as on Person selection page", () => {
    CommonLocators.personaSelectionHeader().should("be.visible");
});

Then("I should see {string} tab on dashboard page", (text) => {
    CommonLocators.navbartablocator(text).should("be.visible");
});

And("I click on {string} tab on dashboard page", (text) => {
    CommonLocators.navbartablocator(text).click();
});

Then("I should see error message on login page", () => {
    CommonLocators.errormessagelocator().should("be.visible");
});

And("I enter email {string} and password {string}", (email, password) => {
    LoginPage.login(email, password);
});

And("I refresh page", () => {
    cy.reload();
});

And("I wait {string} seconds", (time) => {
    cy.wait(time * 1000);
});

Then('I should see {string} heading on Login Page', (text) => {
CommonLocators.heading(text).should("be.visible");
});

When('I click on the profile dropdown button', () => {
    CommonLocators.dropdown().click();
});

And("I press {string} button", (text) =>{
    CommonLocators.getButtonLocator(text).should('be.visible').click();
})

And("I click on profile button", () =>{
    CommonLocators.userNameIdLocator().click();
})

And ("I click on logout button", () => {
    CommonLocators.logoutTextLocator().click();
})

