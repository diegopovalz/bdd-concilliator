Feature: Cargar datos

    Cargar datos a comparar

    Scenario: Cargar datos
        Given I have two files
        When I load the files
        Then I should see the files loaded