package com.carsguide.steps;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewUsedCarPage;
import com.carsguide.pages.UsedCarPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BuyTestSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }
    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverOnBuyAndSellCar();
    }

    @And("^I click ‘Search Cars’ link$")
    public void iClickSearchCarsLink() {
        new HomePage().clickOnSearchCar();
    }

    @Then("^I navigate to ‘new and used car search’ page$")
    public void iNavigateToNewAndUsedCarSearchPage() {

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make)  {
        new NewUsedCarPage().selectMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model )  {
        new NewUsedCarPage().selectModel(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewUsedCarPage().selectLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price)  {
        new NewUsedCarPage().selectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewUsedCarPage().clickOnFindMyNextCarButton();
    }

    @Then("^I should see the make “(.+)” in results$")
    public void i_should_see_the_make_in_results(String make)  {
    }
    @And("^I click on 'Used' link$")
    public void iClickOnUsedLink() {
        new UsedCarPage().clickOnUsedCar();
    }

    @Then("^I navigate to 'Used Cars for sale' page$")
    public void iNavigateToUsedCarsForSalePage() {

    }

    @Then("^I should verify the result \"([^\"]*)\"$")
    public void iShouldVerifyTheResult(String VerifyMessage)  {
        new NewUsedCarPage().verifyTheResult(VerifyMessage);

    }
}
