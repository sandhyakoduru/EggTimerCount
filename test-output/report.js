$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/Downloads/TimerEggAutomate-master/TimerEggAutomate-master/src/main/java/com/qa/features/EggTimer.feature");
formatter.feature({
  "line": 1,
  "name": "Verification of Countdown functionality",
  "description": "",
  "id": "verification-of-countdown-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 15,
      "value": "#Using Scenario Outline and Parameterization concept(Examples) to achieve Data driven approach"
    }
  ],
  "line": 18,
  "name": "Validate the Countdown timer functionality of eggtimer",
  "description": "",
  "id": "verification-of-countdown-functionality;validate-the-countdown-timer-functionality-of-eggtimer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@automated"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on the eggtimer home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"\u003ctimes\u003e\" and click Go",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Countdown timer start",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the remaining time decreases for each seconds increment",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "verification-of-countdown-functionality;validate-the-countdown-timer-functionality-of-eggtimer;",
  "rows": [
    {
      "cells": [
        "times"
      ],
      "line": 26,
      "id": "verification-of-countdown-functionality;validate-the-countdown-timer-functionality-of-eggtimer;;1"
    },
    {
      "cells": [
        "25 seconds"
      ],
      "line": 27,
      "id": "verification-of-countdown-functionality;validate-the-countdown-timer-functionality-of-eggtimer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Validate the Countdown timer functionality of eggtimer",
  "description": "",
  "id": "verification-of-countdown-functionality;validate-the-countdown-timer-functionality-of-eggtimer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@automated"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on the eggtimer home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters \"25 seconds\" and click Go",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Countdown timer start",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the remaining time decreases for each seconds increment",
  "keyword": "Then "
});
formatter.match({
  "location": "EggTimer.User_is_on_the_eggtimer_home_page()"
});
formatter.result({
  "duration": 137366697300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 seconds",
      "offset": 13
    }
  ],
  "location": "EggTimer.user_enters_times_and_Click_Go(String)"
});
formatter.result({
  "duration": 8097872100,
  "status": "passed"
});
formatter.match({
  "location": "EggTimer.countdown_timer_Start()"
});
formatter.result({
  "duration": 16723200,
  "status": "passed"
});
formatter.match({
  "location": "EggTimer.the_remaining_time_decreases_for_each_seconds_increment()"
});
formatter.result({
  "duration": 25528779000,
  "status": "passed"
});
});