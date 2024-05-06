Feature:EIDPerson


    Scenario: I should be able to onboard a person
        Given I visit EmpowerID
        When I enter valid username and password on login page
        And I press login button
        Then I should see 'Which Persona do you want to login' as on Person selection page
        When I click on Ahsan Khan on Person Selection page
        # And I click on navbar toggle
        Then I should see 'Identity Administration' tab on dashboard page
        When I click on 'Identity Administration' tab on dashboard page
        And I click on 'People' tab on dashboard page
        # And I click on Action panel on Person page
        And I click on Onboard Person on action panel on Person page
        And I wait '10' seconds
        And I press 'Next' button
        And I fill in 'Onboard a Person' form with the following data:
            | FirstName | LastName | Email              | BusinessRole   | Location             | Manager    |
            | Test      | Person   | test@EmpowerID.com | Temporary Role | Default Organization | Ahsan Khan |
        Then I should see 'Create Person Ahsan Khan in Temporary Role in Temporary Location was executed successfully.' success message on Person page