const {Given, When, Then, And} = require("cypress-cucumber-preprocessor/steps");
require('cypress-real-events/support');

const TrackingPage = require("../../page-objects/trackingPage");


Then("I should see day view calculations with the following data on 'Tracking' page:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('sales actual')) {
        TrackingPage.salesActual(data["sales actual"]).should("be.visible");
    }

    if (data.hasOwnProperty('sales predicted')) {
        TrackingPage.salesPredicted(data["sales predicted"]).should("be.visible");
    }
    if (data.hasOwnProperty('labor planned')) {
        TrackingPage.laborPlanned(data["labor planned"]).should("be.visible");
    }

    if (data.hasOwnProperty('labor actual')) {
        TrackingPage.laborActual(data["labor actual"]).should("be.visible");
    }
    if (data.hasOwnProperty('labor suggested')) {
        TrackingPage.laborSuggested(data["labor suggested"]).should("be.visible");
    }

    if (data.hasOwnProperty('weather')) {
        TrackingPage.weatherLocator(data["weather"]).should("be.visible");
    }
})

Then("I should see Breakdown Table", () => { {
        TrackingPage.breakdownlocator().should('exist');
    }
})

Then("I should see last week Recap", () => { {
    TrackingPage.LastweekRecap().should('exist');
}
})

Then("I should see week view calculations with the following data on 'Tracking' page:", (dataTable) => {
    const data = dataTable.hashes()[0];
    if (data.hasOwnProperty('sales actual')) {
        TrackingPage.salesActual(data["sales actual"]).should("be.visible");
    }

    if (data.hasOwnProperty('sales predicted')) {
        TrackingPage.salesPredicted(data["sales predicted"]).should("be.visible");
    }
    if (data.hasOwnProperty('labor planned')) {
        TrackingPage.laborPlanned(data["labor planned"]).should("be.visible");
    }

    if (data.hasOwnProperty('labor actual')) {
        TrackingPage.laborActual(data["labor actual"]).should("be.visible");
    }
    if (data.hasOwnProperty('labor suggested')) {
        TrackingPage.laborSuggested(data["labor suggested"]).should("be.visible");
    }

})

