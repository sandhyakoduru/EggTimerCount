package com.bdd.util;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class TestBase {

	public static WebDriver driver;
	public static String Title;
	

	public TestBase() {

	}

	public static void initialization() {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\DELL\\Documents\\Selenium downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get("https://e.ggtimer.com/");
		Title = driver.getTitle();
		System.out.println("Title:"+Title);
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);

	}

	public static void closeBrowser() {
		driver.close();

	}

}