package com.bdd.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( features = "C:\\EggTimer-Countdown\\EggTimer-Countdown\\src\\main\\java\\com\\bdd\\features\\EggTimer.feature",
                 glue = {"com.bdd.StepDefinition"},
                // plugin = {"html:test-output","json:json-output/cucumber.json","junit:junit-output/cucumber.junit"},
                 dryRun = false, // to check the mapping is proper between feature file and Step definition
                 monochrome = true, // display the console output in a proper readable format
                 strict = true, // it will check if any step is not defined in Step definition File
                 tags = {"@automated"}
		)


public class TestRunner {

}
