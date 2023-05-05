Feature: Exportar resultados

    Exportación a archivo de una concilicación de datos

    Scenario: Escribir resultado en archivo
        Given I have two different values
        When I compare them
        Then I should get the result in a file