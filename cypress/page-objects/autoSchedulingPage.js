require('cypress-xpath');

class autoSchedulingPage {
    basketButton() {
        return cy.get("#shopping_cart_container");
    }

    tabsLocator(tabname) {
        return cy.xpath(`//a[contains(.,"${tabname}")]`)
    }

    pageNamesLocator(pagename) {
        return cy.xpath(`//p[contains(.,"${pagename}")]`)
    }

    plansRowLocator(date) {
        return cy.get(`[data-testid="plans-row-${date}"]`)
    }

    submitShippingDetails(firstName, lastName, postalCode) {
        // TODO split up into separate objects
        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#postal-code").type(postalCode);
        cy.get("#continue").click();
    }

    getButtonLocator(name) {
         return cy.xpath(`//button[contains(.,'${name}')]`).eq(0);
    }

    startfromascretch() {
        return cy.xpath(`//a[contains(text(), 'Start a Schedule from Scratch')]`);
   }

    addAShift() {
        return cy.xpath('//span[contains(., "Add a shift")]').eq(0)
    }

    getModalLocator(name) {
        return cy.xpath(`//div[contains(@class,'modal-header')]//div[contains(.,'${name}')]`)
    }

    selectRoleLocator() {
        return cy.get('[data-testid="Role input"]')
    }

    selectStartTimeLocator() {
        return cy.xpath(`//label[contains(text(), 'Start Time')]/following-sibling::div`)
    }

    selectEndTimeLocator() {
        return cy.xpath(`//label[contains(text(), 'End Time')]/following-sibling::div`)
    }

    selectEmployeeLocator() {
        return cy.get('[data-testid="Employee input"]')
    }

    selectDateLocator() {
        return cy.get('[data-testid="Date input"]')
    }

    selectShiftLocator(shift) {
        return cy.get(`[data-testid="shift-break-${shift}"]`)
    }

    selectNotesLocator() {
        return cy.get(`[data-testid="shift-note"]`)
    }

    shiftCardLocator(employee, shift) {
        return cy.xpath(`//div//button[contains(.,'${employee}')and contains (@data-testid,'shift-card-${shift}')]`)

    }

    deleteShiftButton() {
        return cy.get('[data-testid="request-delete-shift"]')
    }

    deleteShiftButtonOnModal() {
        return cy.get('[data-testid="confirm-submit-modal"]')
    }

    updateShiftButton() {
        return cy.get('[data-testid="submit-button"]')
    }

    // weeklyTotalHourLocator(hour, row) {
    //     return cy.xpath(`//tr[contains(.,'${row}')]//td[contains(.,'${hour}')]`)
    // }

    addShiftButton() {
        return cy.get('[data-testid="submit-button"]')
    }

    // employeeAvailabilityCheckBoxLocator() {
    //     return cy.get('[data-testid="Show all employees regardless of availability"]')
    // }

    // employeeNameLocator(employeeName) {
    //     return cy.xpath(`//option[contains(.,'${employeeName}')]`);
    // }

    // clickDropdownLocator() {
    //     return cy.get('div.form-group').eq(3)
    // }
}

module.exports = new autoSchedulingPage;
