package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FindDealerPage extends Utility {
    private static final Logger log = LogManager.getLogger(FindDealerPage.class.getName());
    public FindDealerPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Find a Dealer']")
    WebElement finaADealer;


    public void clickOnFindDealer(){
        clickOnElement(finaADealer);
        log.info("Click on find a dealer link :"+ finaADealer.toString());

    }
}
