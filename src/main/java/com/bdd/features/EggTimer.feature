Feature: Verification of Countdown functionality 

# Using Scenario and inline Element concept to achieve Data driven approach
  
  Scenario: Validate the Countdown timer functionality of eggtimer 
  
    Given User is on the eggtimer home page
    When User enters times and User click Go
    |25 seconds|
    And Countdown timer start
    Then the remaining time decreases for each seconds increment
	

      
#Using Scenario Outline and Parameterization concept(Examples) to achieve Data driven approach
	
  @automated	  
  Scenario Outline: Validate the Countdown timer functionality of eggtimer 
  
    Given User is on the eggtimer home page
    When User enters "<times>" and click Go
    And Countdown timer start
    Then the remaining time decreases for each seconds increment

    Examples:
    |times    |
    |25 seconds|