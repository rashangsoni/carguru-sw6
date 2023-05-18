package com.carsguide.steps;

import com.carsguide.pages.FindDealerPage;
import com.carsguide.pages.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class FindDealerSteps {

    @Given("^I am on car guide homepage$")
    public void iAmOnCarGuideHomepage() {

    }

    @When("^I mouseHover on buy\\+sell link$")
    public void iMouseHoverOnBuySellLink() {
        new HomePage().mouseHoverOnBuyAndSellCar();
    }

    @And("^I click on 'Find a dealer'$")
    public void iClickOnFindADealer() {
        new FindDealerPage().clickOnFindDealer();
    }

    @And("^I navigate to 'car-dealer' page$")
    public void iNavigateToCarDealerPage() {
    }

    @Then("^I should see the dealers name <dealerName> on page$")
    public void iShouldSeeTheDealersNameDealerNameOnPage(DataTable dataTable) {
        List<List<String>> userList = dataTable.asLists(String.class);
        for (List<String> e : userList) {
            System.out.println(e.get(0));
        }
    }
}