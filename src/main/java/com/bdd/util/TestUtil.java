package com.bdd.util;

public class TestUtil extends TestBase {
	
	public static long PAGE_LOAD_TIMEOUT = 25;
	public static long IMPLICIT_WAIT = 25;
	
	public void switchToFrame() {
		driver.switchTo().frame("mainpanel");
	}
}
