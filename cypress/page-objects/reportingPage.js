class ReportingPage{

    heading(heading) {
        return cy.xpath(`//p[contains(.,"${heading}")]`)
    }

    location(location) {
        return cy.xpath(`//tr[contains(@class, 'sc-hDGEDG bqyaEB')]//div[contains(.,'${location}')]`).eq(0)
    }

    previousWeekButton() {
        return cy.get(`[data-testid="Last Week Link"]`)
    }
    
    
}

module.exports = new ReportingPage;