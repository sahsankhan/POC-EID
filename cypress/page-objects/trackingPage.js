require('cypress-xpath');

class TrackingPage {

    salesActual(value) {
        return cy.xpath(`//div[contains(@data-testid,"sales-actual")]//p[contains(.,'${value}')]`);
    }

    salesPredicted(value) {
        return cy.xpath(`//div[contains(@data-testid,"sales-predicted")]//p[contains(.,'${value}')]`);
    }

    laborPlanned(value) {
        return cy.xpath(`//div[contains(@data-testid,"labor-planned")]//p[contains(.,'${value}')]`);
    }

    laborActual(value) {
        return cy.xpath(`//div[contains(@data-testid,"labor-actual")]//p[contains(.,'${value}')]`);
    }

    laborSuggested(value) {
        return cy.xpath(`//div[contains(@data-testid,"labor-suggested")]//p[contains(.,'${value}')]`);
    }

    weatherLocator(value) {
        return cy.xpath(`//div[contains(@data-testid,"Today's Progress")]//div//div//div//div//div[contains (.,'${value}')]`)
    }

    breakdownlocator() {
        return cy.get('[data-testid="Breakdown"]');
    }
  
    LastweekRecap() {
        return cy.get('[data-testid="Yesterday\'s Recap"]')

    }
    
}

module.exports = new TrackingPage;