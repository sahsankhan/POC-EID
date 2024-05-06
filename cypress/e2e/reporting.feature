Feature: Reporting

  Scenario: I want to view "Reporting for Week" heading on Reporting Page
    Given I login in to Lineup.ai for Reporting
    Then I should see Today's Progress Page
    When I click on "Reporting" tab on the dashboard
    Then I should see "Reporting for Week" on Reporting page
   
  Scenario: I want to view the Location on the Reporting Page
  Given I login in to Lineup.ai for Reporting
  Then I should see Today's Progress Page
  When I click on "Reporting" tab on the dashboard
  Then I should see "CE - Aventura" location on Reporting page

  Scenario: I want to view the reporting for previous week on the Reporting Page
  Given I login in to Lineup.ai for Reporting
  Then I should see Today's Progress Page
  When I click on "Reporting" tab on the dashboard
  And I click on Previous week Button on the Reporting Page
  Then I should see "Reporting for Week" on Reporting page