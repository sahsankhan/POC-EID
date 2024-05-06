class CommonLocatorsPage {
    successMessage(text) {
        return cy.xpath(`//div[contains(.,'${text}')]`)
    }

    todayProgress() {
        return cy.get(`[data-testid="Today's Progress"]`);
    }

    heading(text) {
        return cy.xpath(`//p[contains (., "${text}")]`);
    }

    resetPassword(text) {
        return cy.get(`a[data-testid="${text}"]`);
    }

    dropdown() {
        return cy.get('button[id="nav-dropdown"]').eq(1);
    }

    selectPerson() {
        return cy.xpath(`//h4[text()='Ahsan Khan']`)
    }
    personaSelectionHeader() {
        return cy.xpath(`//h1[text()='Which Persona do you want to login as?']`)
    }

    navbartablocator(text) {
        return cy.xpath(`//span[contains (., "${text}")]`);
    }

    errormessagelocator() {
        return cy.get(`div.ui-state-error.eid-login-error`);
    }

    eidLogoLocator(){
        return cy.get(`logo-img eid-logo`);
    }

    navbarToggleLocator(){
        return cy.get(`a.eid-navbar-toggle img`);
    }

    dashboardtitlelocator(){
        return cy.get(`a[title=Dashboards]`);
    }

    getButtonLocator(text){
        return cy.xpath(`//button[contains(., "${text}")]`);
    }

    userNameIdLocator(){
        return cy.get(`[id='eid-current-user-name']`);
    }

    logoutTextLocator(){
        return cy.xpath(`//a[text()='Logout']`);
    }
}

module.exports = new CommonLocatorsPage;
