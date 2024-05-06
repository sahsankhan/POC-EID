Feature: Tracking

  Scenario: I want to visit the tracking page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    And I should see day view calculations with the following data on 'Tracking' page:
      | sales actual | sales predicted | labor planned | labor actual | labor suggested | weather |
      |     –        | $0              |      –        |    0 hr      |  7 hr           | 73      |
    And I should see Breakdown Table


  Scenario: I want to see week's progress on the tracking page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Week" button
    Then I should see week view calculations with the following data on 'Tracking' page:
      | sales actual | sales predicted | labor planned | labor actual | labor suggested |
      |       –      |   $415          | –             | 0 hr         |   7 hr          |
    And I should see last week Recap
    And I should see Breakdown Table      




