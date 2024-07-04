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

    enterPassword() {
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

    // getButtonLocator(text) {
    //     return cy.xpath(`//button[contains(., "${text}")]:visible`);
    // }

    getButtonLocator(text) {
        return cy.xpath(`//button[contains(., "${text}")]`).filter(':visible');
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

    browse() {
        return cy.xpath(`//span[@data-bind="text: Title" and text()="Browse"]`)
    }

    temporaryRoleLocator() {
        return cy.get(`a[title='Temporary Role']`);
    }

    locationLocator() {
        return cy.xpath(`//h4//a[contains(., 'Location')]`);
    }

    successMessageLocator(text) {
        return cy.xpath(`//li[contains(., "${text}")]`);
    }

    selectButtonLocator() {
        return cy.get(`div.eid-OrgRoleOrgZoneTree-button`);
    }

    nameLocator() {
        return cy.get(`input[name='Name']`);
    }

    friendlyNameLocator() {
        return cy.get(`input[name='FriendlyName']`);
    }

    descriptionLocator() {
        return cy.get(`input[name='Description']`);
    }

    functionTypeLocator() {
        return cy.get(`input[name='AzFunctionTypeID-combobox']`);
    }

    riskLevelLocator() {
        return cy.get(`input[name='AzRiskLevelID-combobox']`);
    }

    riskResourceSetLocator(){
        return cy.get(`input[name='AzRiskResourceSetID-combobox']`)
    }

    selectLocationLocator() {
        return cy.xpath(`//a[text()='Select a Location']`)
    }

    eidAddButtonLocator(){
        // return cy.xpath(`//button[contains(@id,'eid-grid-add-button')]`);
        return cy.get(`button.eid-grid-add-button[data-bind*="click: addRow"]:visible`);
    }

    successNotificationlocator(text) {
        return cy.xpath(`//span[contains (., "${text}")]`);
    }

    locationPanelLocator(){
        return cy.xpath(`//a[contains(@class, 'eid-panel-collapse-button eid-icon')]`)
    }

    getLocationItemByText(text){
        return cy.xpath(`//div[contains(@class, 'eid-jstree-outer-div')]//span[contains(text(), '${text}')]`);
    }

    LocationTreeSaveButtonLocator(){
        return cy.get(`div.eid-float-right.eid-tree-save > button:visible`);
    }
 
    saveButtonLocatorForEidGrid(){
        // return cy.get(`div.eid-grid-edit-popup-buttons > button:visible`);
        return cy.get(`button[data-bind*="SaveRowCommand"]`).eq(1);
    }

    globalFunctionSearchFieldLocator(){
        return cy.get(`input[data-bind*="Searcher.QueryValue"]`);
    }

    globalFunctionSearchButtonLocator(){
        // return cy.get(`button.eid-input-group-button[data-bind*="click: search"]:visible`);
       return  cy.get('button.eid-input-group-button');
    }

    globalFunctionEditButtonLocator(){
        return cy.get(`td[data-bind*="EidGridColumnEdit"] .eid-grid-edit-button`);
    }

    globalFunctionRemoveButtonLocator(){
        return cy.get(`td[data-bind*="EidGridColumnEdit"] .eid-grid-remove-button`);
    }
}

module.exports = new commonLocator;
