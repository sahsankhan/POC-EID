Feature: EIDRiskManagement

    Scenario: I should be  able to create Global Functions
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        Then I should see 'hsdfhsdf' tab on dashboard page
        When I click on 'Compliance' tab on dashboard page
        And I click on 'Risk Policies' tab on dashboard page
        And I wait '5' seconds
        And I click on 'Global Functions' tab
        And I click on add button
        And I fill in 'Global Functions' form with the following data:
            | Name     | DisplayName | Description | FunctionType | RiskLevel | RiskResourceSet  | Location          |
            | CreateGF | Ahsan       | Desc        | Advanced     | Critical  | Active Directory | BusinessStructure |
        And I click on 'save' button on 'Global Functions' page
        Then I should see 'Create Global Function:Ahsan was executed successfully' success message


    Scenario: I should be able to edit Global Functions
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        Then I should see 'Compliance' tab on dashboard page
        When I click on 'Compliance' tab on dashboard page
        And I click on 'Risk Policies' tab on dashboard page
        And I wait '5' seconds
        And I click on 'Global Functions' tab
        And I wait '5' seconds
        And I search 'CreateGF' on 'Global Functions' Page
        And I wait '2' seconds
        And I click on 'Edit' button on Global Functions Page
        And  I edit 'Global Functions' form with the following data:
            | Name     | DisplayName | Description | FunctionType | RiskLevel |
            | EditedGF | EditAhsan   | Desc1       | Financial    | High      |
        And I click on 'save' button on 'Global Functions' page
        And I wait '5' seconds
        Then I should see 'Edit to CreateGF was executed successfully' success message


    Scenario: I should be able to delete Global Functions
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        Then I should see 'Compliance' tab on dashboard page
        When I click on 'Compliance' tab on dashboard page
        And I click on 'Risk Policies' tab on dashboard page
        And I wait '5' seconds
        And I click on 'Global Functions' tab
        And I search 'EditedGF' on 'Global Functions' Page
        And I wait '2' seconds
        And I click on 'Delete' button on Global Functions Page
        And I press 'Yes' button
        Then I should see 'Delete to EditAhsan was executed successfully' success message
