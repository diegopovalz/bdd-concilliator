Feature: Guardar resultados

  Scenario: Escribir nombre del archivo
    Given I compared two different values
    When I press Save
    Then I should see a message asking for a file name