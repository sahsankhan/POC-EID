require('cypress-xpath');

class ManagementPage {

    messagesHeading(heading) {
        return cy.xpath(`//p[contains(.,'${heading}')]`)
    }

    messageTextArea() {
        return cy.get('[data-testid="rejection-message"]');
    }

    messagesSubheading(subheading) {
        return cy.xpath(`//th[contains(.,'${subheading}')]`)
    }

    messagesDate(date) {
        return cy.xpath(`//span[contains(.,'${date}')]`).eq(0)
    }

    messagesSender(sender) {
        return cy.xpath(`//div[contains(@class, 'sc-hKhKOZ cDAWdf') and contains(., '${sender}')]`).eq(0)
    }

    messagesMessage(message) {
        return cy.xpath(`//div[contains(@class, 'sc-hKhKOZ cDAWdf') and contains(., '${message}')]`).eq(0)
    }

    scheduleRequest(heading) {
        return cy.xpath(`//p[contains(.,'${heading}')]`)
    }

    submitButton(employeeName) {
        return cy.xpath(`//tr[contains(.,"${employeeName}")]//button[contains(.,'Submit')]`).eq(0);
    }

    modalButton() {
        return cy.get(`[data-testid="confirm-submit-modal"]`)
    }

    approveCheckbox(employeeName) {
        return cy.xpath(`//tr[contains(.,"${employeeName}")]//label[contains(.,'Approve')]`).eq(0);
    }

    actionTextbox() {
        return cy.get(`[data-testid="rejection-message"]`)
    }

    subHeadings(subheading) {
        return cy.xpath(`//th[contains(., '${subheading}')]`).eq(0);
    }

    managementSubtab(subtab) {
        return cy.xpath(`//a[contains(.,"${subtab}")]`);
    }

    employeeNameLocator(employeeName) {
        return cy.xpath(`//td[contains(.,'${employeeName}')]`);
    }

    employeeNameField() {
        return cy.get('[data-testid="Employee Name* input"]');
    }

    employeeEmailField() {
        return cy.get('[data-testid="Email Address* input"]');
    }

    employeeWageField() {
        return cy.get('[data-testid="Wage input"]');
    }

    employeePhoneNoField() {
        return cy.get('[data-testid="Phone Number input"]');
    }

    checkboxByIndex(index) {
        return cy.xpath('//td[contains(@class, "sc-guKdVK oYSre")]//input[@type="checkbox"]').eq(index);
    }

    emailError() {
        return cy.get('[data-testid="Email Address* input-error"]');
    }

    editButton(employeeName) {
        return cy.xpath(`//tr[contains(.,'${employeeName}')]//button[contains(.,'Edit')]`).eq(0);
    }

    employeeSearch() {
        return cy.get(`input[placeholder='Search']`);
    }
    
    employeeName(employeeName) {
        return cy.xpath(`//td[contains(.,'${employeeName}')]`).eq(0);
    }

    editEmployeeSubheading(heading) {
        return cy.xpath(`//p[contains(.,'${heading}')]`).eq(0);
    }
}

module.exports = new ManagementPage;
