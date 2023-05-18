@regression
Feature: Find the dealer and verify

  Scenario Outline: Find the dealer and verify that they are on list
    Given I am on car guide homepage
    When  I mouseHover on buy+sell link
    And   I click on 'Find a dealer'
    And   I navigate to 'car-dealer' page
    Then  I should see the dealers name <dealerName> on page

    Examples:

      | dealerName              |
      | 3 Point Motor           |
      | 4WD Specialist          |
      | 5 Star Auto             |
      | A & M Car Sales Pty Ltd |
      | A1 MOTOR COMPANY        |
      | ANDREA MOTOR SERVICE    |
      | Oxford Motors           |