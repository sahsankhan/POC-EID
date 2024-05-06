Feature: Management

  Scenario: I want to view the list of All Employees
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    Then I should see the following employees on the page:
      | Employees |
      | Ahmed A   |

  Scenario: I want to create a new Employee with only Active Location
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I click on "+ Add New" button
    And I enter "Test" in Employee Name Field
    And I enter "Test+" in Employee Email Field
    And I enter "15" in Employee Wage Field
    And I enter "(515) 297-" in Employee Phone No Field
    And I click on "Active" checkbox
    And I click on "Add" button
    Then I should see "Thank you! The information has been updated" success message on the page

  Scenario: I should be able to see Email error when adding an existing email
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I click on "+ Add New" button
    And I enter "Test" in Employee Name Field
    And I enter "Test+2@lineup.ai" in Employee Email Field
    And I enter "15" in Employee Wage Field
    And I enter "(515) 297-" in Employee Phone No Field
    And I click on "Active" checkbox
    And I click on "Add" button
    Then I should be able to see Email already exist

  Scenario: I want to edit an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test1120" in the search bar on the Employee Page
    And I wait "5" seconds
    And I click on Edit button of the "Test1120" Employee
    And I click on "Active" checkbox
    And I click on "Update" button
    And I wait "1" seconds
    Then I should be able to see Thankyou message

  Scenario: I want to create a new Employee with Exclude Labour
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I click on "+ Add New" button
    And I enter "Test" in Employee Name Field
    And I enter "Test+" in Employee Email Field
    And I enter "15" in Employee Wage Field
    And I enter "(515) 297-" in Employee Phone No Field
    And I click on "Exclude labor" checkbox
    And I click on "Add" button
    Then I should see "Employee successfully added" success message on the page

    Scenario: I want to search an existing employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Ahmed A" in the search bar on the Employee Page
    Then I should see the "Ahmed A" on the Employee Page

Scenario: I want to search an employee and then remove it from search bar
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Ahmed A" in the search bar on the Employee Page
    Then I should see the "Ahmed A" on the Employee Page
    And I clear the text on the search bar on the Employee Page
    Then I should see the "Emma" on the Employee Page

Scenario: I want to see Employee Name heading when editing an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test1120" in the search bar on the Employee Page
    And I wait "5" seconds
    And I click on Edit button of the "Test1120" Employee
    Then I should see "Employee Name" heading on the Edit Employee Page
  
  Scenario: I want to see Email Address heading when editing an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test1120" in the search bar on the Employee Page
    And I wait "5" seconds
    And I click on Edit button of the "Test1120" Employee
    Then I should see "Email Address" heading on the Edit Employee Page

  Scenario: I want to see Phone Number heading when editing an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test1120" in the search bar on the Employee Page
    And I wait "5" seconds
    And I click on Edit button of the "Test1120" Employee
    Then I should see "Phone Number" heading on the Edit Employee Page

  Scenario: I want to see Wage heading when editing an Employee
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Employees" under Management heading
    And I type "Test1120" in the search bar on the Employee Page
    And I wait "5" seconds
    And I click on Edit button of the "Test1120" Employee
    Then I should see "Wage" heading on the Edit Employee Page

  Scenario: I want to view Messages section
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Messages" heading on the top of the Messages Page

  # Scenario: I want send message to All Employees
  #   Given I login in to Lineup.ai
  #   Then I should see Today's Progress Page
  #   When I click on "Management" tab on the dashboard
  #   And I click on "Messages" under Management heading
  #   And I click on "New Message" button
  #   And I enter "Test" Messages textarea
  #   And I click on "Send Message to All Employees" button
  #   Then I should see success message on Messages Page

  Scenario: I want to see Date subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Date" subheading on the top of the Messages Page

  Scenario: I want to see Sender subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Sender" subheading on the top of the Messages Page

  Scenario: I want to see Messages subheading on the Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see "Messages" subheading on the top of the Messages Page

  Scenario: I want to see following date on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following date on the Messages:
      | Date       |
      | 08/19/2023 |

  Scenario: I want to see following Sender on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following sender on the Messages:
      | sender      |
      | Lineup Demo |

  Scenario: I want to see following Message on Messages Page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Messages" under Management heading
    Then I should see the following message on the Messages:
      | message |
      | Test    |

  Scenario: I want to see Schedule Requests Heading
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Schedule Requests" heading on the top of the Request Page

  # Scenario: I want to submit approved request of the Employee Name
  #   Given I login in to Lineup.ai
  #   Then I should see Today's Progress Page
  #   When I click on "Management" tab on the dashboard
  #   And I click on "Requests" under Management heading
  #   Then I should see "Schedule Requests" heading on the top of the Request Page
  #   And I enter "zubair alam'" in the search field on Request Page
  #   And I click on Submit button of the "zubair alam'" Employee
  #   And I click "Submit" button on the confirmation modal
  #   Then I should see "Request submitted and moved to History" success message on the page

  # Scenario: I want to submit request after removing the approve checkbox
  #   Given I login in to Lineup.ai
  #   Then I should see Today's Progress Page
  #   When I click on "Management" tab on the dashboard
  #   And I click on "Requests" under Management heading
  #   Then I should see "Schedule Requests" heading on the top of the Request Page
  #   And I enter "zubair alam'" in the search field on Request Page
  #   And I declined the checkbox of "zubair alam'" Employee
  #   And I enter "Test" in Actions textbox on Request Page
  #   And I click on Submit button of the "zubair alam'" Employee
  #   And I click "Submit" button on the confirmation modal
  #   Then I should see "Request submitted and moved to History" success message on the page

  Scenario: I want to see Employee section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Employee" sub-heading on the Request Page

  Scenario: I want to see Type section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Type" sub-heading on the Request Page

  Scenario: I want to see Employee Notes section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Employee Notes" sub-heading on the Request Page

  Scenario: I want to see Request section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Request" sub-heading on the Request Page

  Scenario: I want to see Actions section on the Requests page
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "Requests" under Management heading
    Then I should see "Actions" sub-heading on the Request Page

  Scenario: I want to see Request History Heading
    Given I login in to Lineup.ai
    Then I should see Today's Progress Page
    When I click on "Management" tab on the dashboard
    And I click on "History" under Management heading
    Then I should see "Request History" heading on the top of the Request Page
