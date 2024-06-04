require('cypress-xpath');

class commonLocator {
    cookieConsentButton() {
        return cy.xpath('//div[contains(@class, "eid-cookie-close-icon")]')
    }

    usernameField() {
        return cy.get('input[id=eid-username-input]');
    }

    passwordField() {
        return cy.get('input[id=eid-password-input]');
    }

    submit() {
        return cy.get('.sc-bgqQcB').click();

    }

    enterPassword(){
        return cy.xpath(`//span[text()='Enter password']`).click();
    }


    login(username, password) {
        this.usernameField().type(username);
        this.enterPassword();
        this.passwordField().type(password);
    }

    loginbutton() {
        return cy.get('button[type=submit]');
    }

    personaSelectionHeader() {
        return cy.xpath(`//h1[text()='Which Persona do you want to login as?']`)
    }

    selectPerson() {
        return cy.xpath(`//h4[text()='Ahsan Khan']`)
    }

    navbarToggleLocator() {
        return cy.get(`a.eid-navbar-toggle img`);
    }

    dashboardtitlelocator() {
        return cy.get(`a[title=Dashboards]`);
    }

    errormessagelocator() {
        return cy.get(`.eid-workflow-title`);
    }

    loginPageLocator() {
        return cy.get(`.login-text`);
    }

    userNameIdLocator() {
        return cy.get(`[id='eid-current-user-name']`);
    }

    logoutTextLocator() {
        return cy.xpath(`//a[text()='Logout']`);
    }

    navbartablocator(text) {
        return cy.xpath(`//span[contains (., "${text}")]`);
    }

    OnboardPerson() {
        return cy.get(`a[title="Onboard Person"]`)
    }

    getButtonLocator(text) {
        return cy.xpath(`//button[contains(., "${text}")]`);
    }
    firstName() {
        return cy.get(`input[name='FirstName']`)
    }

    LastName() {
        return cy.get(`input[name='LastName']`)
    }
    emailLocator() {
        return cy.get(`input[name='Email']`)
    }

    selectRoleAndLocation() {
        return cy.xpath(`//a[text()='Select a Role and Location']`)
    }

    searchButtonLocator() {
        return cy.xpath(`//div[contains(@class, 'eid-OrgRoleOrgZoneTree-accordion')]//button[contains(.,'Search')]`);
    }

    searchFieldLocator() {
        return cy.get(`.eid-input-group-left-buttons input[placeholder='Enter search']`);
    }

    getItemByTextLocator(text) {
        return cy.xpath(`//span//span[contains(., "${text}") and contains(@class,'jstree-searchresult')]`)
    }

    browse(){
        return cy.xpath(`//span[@data-bind="text: Title" and text()="Browse"]`)
    }

    temporaryRoleLocator() {
        return cy.get(`a[title='Temporary Role']`);
    }

    locationLocator() {
        return cy.xpath(`//h4//a[contains(., 'Location')]`);
    }

    successMessageLocator(text){
        return cy.xpath(`//li[contains(., "${text}")]`);
    }

    selectButtonLocator(){
        return cy.get(`div.eid-OrgRoleOrgZoneTree-button`);
    }
}

module.exports = new commonLocator;
