Feature: autoScheduling

  Scenario: I want to add shift in non submitted plan
    Given I visit lineup.ai
    Then I should see Today's Progress Page
    When I click on "Planning" tab on the dashboard
    Then I should see "Weekly Planning" page
    When I click on non submitted plan with date "Apr 15 - Apr 21"
    And I click on "Create Schedule" button
    And I click on Start from Scratch option
    And I click on Add a Shift
    Then I should see "Add a Shift" modal
    When I fill in 'Add a Shift' modal with the following data:
      | role   | Start Time | End Time | employee  | date         | shift break |
      | Grill  |  10:45 AM  | 12:45 PM | zubair 12 | Mon, Apr 15  | 20          |
    And I click on Add button
    Then I "should" see shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"
    When I click shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"
    Then I should see "Update a Shift" modal
    When I click on "Delete" button
    Then I should see 'Delete Shift' modal
    When I click on "Delete Shift" button
    And I refresh page
    Then I "should not" see shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"

  Scenario: I want to create a plan using Auto-Schedule
    Given I visit lineup.ai
    Then I should see Today's Progress Page
    When I click on "Planning" tab on the dashboard
    Then I should see "Weekly Planning" page
    When I click on non submitted plan with date "Apr 15 - Apr 21"
    And I click on "Create Schedule" button
    And I click on "Auto-Schedule" button
    And I click on Add a Shift
    Then I should see "Add a Shift" modal
    When I fill in 'Add a Shift' modal with the following data:
      | role  | Start Time | End Time | employee  | date       | shift break |
      | Grill | 10:30 AM   | 12:30 PM | zubair 12 |Mon, Apr 15 | 20          |
    And I click on Add button
    Then I "should" see shift card with employee name "zubair 12" and shift time "10:30am-12:30pm"
    When I click shift card with employee name "zubair 12" and shift time "10:30am-12:30pm"
    Then I should see "Update a Shift" modal
    When I click on "Delete" button
    Then I should see "Delete Shift" modal
    When I click on "Delete Shift" button
    And I refresh page
    Then I "should not" see shift card with employee name "zubair 12" and shift time "10:30am-12:30pm"

  Scenario: I want to update shift in non submitted plan
    Given I visit lineup.ai
    Then I should see Today's Progress Page
    When I click on "Planning" tab on the dashboard
    Then I should see "Weekly Planning" page
    When I click on non submitted plan with date "Apr 15 - Apr 21"
    And I click on "Create Schedule" button
    And I click on "Auto-Schedule" button
    And I click on Add a Shift
    Then I should see "Add a Shift" modal
    When I fill in 'Add a Shift' modal with the following data:
      | role  | Start Time | End Time | employee  | date       | shift break |
      | Grill | 10:45 AM   | 12:45 PM | zubair 12 |Mon, Apr 15 | 20          |
    And I click on Add button
    Then I "should" see shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"
    When I click shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"
    Then I should see "Update a Shift" modal
    When I fill in 'Add a Shift' modal with the following data:
      | role | Start Time | End Time | employee  | date       | shift break |
      | Prep | 11:45 AM   | 1:45 PM  | zubair 12 |Mon, Apr 15 | 30          |
    And I click on "Update" button
    Then I "should" see shift card with employee name "zubair 12" and shift time "11:45am-1:45pm"
    When I click shift card with employee name "zubair 12" and shift time "11:45am-1:45pm"
    Then I should see "Update a Shift" modal
    When I click on "Delete" button
    Then I should see "Delete Shift" modal
    When I click on "Delete Shift" button
    And I refresh page
    Then I "should not" see shift card with employee name "zubair 12" and shift time "10:45am-12:45pm"

