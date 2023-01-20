Feature: Music Festival and band results On Android and iOS mobile application
 
   @ios @android
  Scenario Outline: Verify that user launches Engery australia coding sample app on IOS and Android platforms. Make sure festival results are displayed.
    Given the user launches the energyaustralia sample mobile application
    When the festival results page is displayed
    Then the user should see a list of <festival names> with <band names>

    Examples:
      | festival names | band names   |
      |Trainerella     | Adrian Venti | 
      | Twisted Tour   | Auditones    | 
      |LOL-palooza     |Frank Jupiter |
      |Small Night In  | Green Mild Cold Capsicum|
      |LOL-palooza     | Jill Black  |
      |Trainerella     |Manish Ditch |
      |Small Night In  |Squint-281   |
      | Twisted Tour   | Squint-281|
      |Twisted Tour    | Twisted Tour|
      |Small Night In  |The Black Dashes|
      |LOL-palooza     |Werewolf Weekday|