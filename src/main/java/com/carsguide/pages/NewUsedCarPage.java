package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewUsedCarPage extends Utility {
    private static final Logger log = LogManager.getLogger(NewUsedCarPage.class.getName());
    public NewUsedCarPage(){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='models']")
    WebElement modelDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='locations']")
    WebElement locationsDropDown;

    @CacheLookup
    @FindBy (xpath = "//select[@id='priceTo']")
    WebElement priceToDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCarsSearchButton;

    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement resultText;

    public void selectMake(String make){
        selectByVisibleTextFromDropDown(makeDropDown, make);
        log.info("Select make  :"+ makeDropDown.toString());
    }
    public void selectModel(String model){
        selectByVisibleTextFromDropDown(modelDropDown, model);
        log.info("Select model  :"+ modelDropDown.toString());
    }
    public void selectLocation(String location){
        selectByVisibleTextFromDropDown(locationsDropDown, location);
        log.info("Select location  :"+ locationsDropDown.toString());
    }
    public void selectPrice(String price){
        selectByVisibleTextFromDropDown(priceToDropDown, price);
        log.info("Select price  :"+ priceToDropDown.toString());
    }
    public void clickOnFindMyNextCarButton(){
        clickOnElement(findMyNextCarsSearchButton);
        log.info("Click on find my next car search button :"+ findMyNextCarsSearchButton.toString());
    }

    public void verifyTheResult(String expected){
        log.info("Verify the result :" + resultText.toString());
        String actualText=getTextFromElement(resultText);
        String expectedText = expected;

    }
}
