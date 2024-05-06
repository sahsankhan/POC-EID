Feature: Logout

Scenario: User log out successfully
Given I login in to Lineup.ai
Then I should see Today's Progress Page
When I click on the profile dropdown button
And I click on "Log Out" button
Then I should see "Welcome to" heading on Login Page