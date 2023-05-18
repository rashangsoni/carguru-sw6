$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"\u003cVerifyMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price",
        "VerifyMessage"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Kia",
        "Niro",
        "NT - All",
        "$45,000",
        "2 Kia Niros for Sale under $45,000 in NT"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "HR-V",
        "NSW - Hunter",
        "$25,000",
        "2 Honda HR-Vs for Sale under $25,000 in Hunter, NSW"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Land Rover",
        "Range Rover",
        "NSW - Central West",
        "$70,000",
        "5 Land Rover Range Rovers for Sale under $70,000 in Central West, NSW"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "Q5",
        "NSW - Newcastle",
        "$60,000",
        "6 Audi Q5s for Sale under $60,000 in Newcastle, NSW"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Hyundai",
        "I30",
        "NSW - Far West",
        "$45,000",
        "14 Hyundai I30s for Sale under $45,000 in Far West, NSW"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Ford",
        "Mustang",
        "NT - All",
        "$60,000",
        "3 Ford Mustangs for Sale under $60,000 in NT"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16637065900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Niro\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"2 Kia Niros for Sale under $45,000 in NT\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 381014700,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 801676600,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3623086800,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 53000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 587654500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Niro",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 301382800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 279676500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 245522900,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3755166500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Kia Niros for Sale under $45,000 in NT",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 355131000,
  "status": "passed"
});
formatter.after({
  "duration": 979908500,
  "status": "passed"
});
formatter.before({
  "duration": 6920820000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"HR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"2 Honda HR-Vs for Sale under $25,000 in Hunter, NSW\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 54400,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1094431400,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3880600200,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 57900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 591070500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HR-V",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 274297700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 252144200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 289434800,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2854017700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Honda HR-Vs for Sale under $25,000 in Hunter, NSW",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 376340000,
  "status": "passed"
});
formatter.after({
  "duration": 1003132400,
  "status": "passed"
});
formatter.before({
  "duration": 7413173800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Land Rover\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Range Rover\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Central West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"5 Land Rover Range Rovers for Sale under $70,000 in Central West, NSW\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 1536503200,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2785485800,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Land Rover",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 452237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Range Rover",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 326339900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central West",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 266664400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 234194100,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3509869900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 Land Rover Range Rovers for Sale under $70,000 in Central West, NSW",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 376238400,
  "status": "passed"
});
formatter.after({
  "duration": 934764200,
  "status": "passed"
});
formatter.before({
  "duration": 6632630400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Q5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"6 Audi Q5s for Sale under $60,000 in Newcastle, NSW\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38300,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 746236600,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 4830091000,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 651693700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Q5",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 266760500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 253552900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 228610600,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4003317000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6 Audi Q5s for Sale under $60,000 in Newcastle, NSW",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 347144000,
  "status": "passed"
});
formatter.after({
  "duration": 963269800,
  "status": "passed"
});
formatter.before({
  "duration": 6498252600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"I30\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Far West\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"14 Hyundai I30s for Sale under $45,000 in Far West, NSW\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42500,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 748159400,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2181671000,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 68300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 453482300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "I30",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 311243300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Far West",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 257200800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 237084000,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2767885600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14 Hyundai I30s for Sale under $45,000 in Far West, NSW",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 321694300,
  "status": "passed"
});
formatter.after({
  "duration": 947868400,
  "status": "passed"
});
formatter.before({
  "duration": 6591708000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click ‘Search Cars’ link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to ‘new and used car search’ page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Mustang\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should verify the result \"3 Ford Mustangs for Sale under $60,000 in NT\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55500,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 854980500,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 3577919000,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 126700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuyTestSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 688120700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustang",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 281685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NT - All",
      "offset": 19
    }
  ],
  "location": "BuyTestSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 301168500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuyTestSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 253408800,
  "status": "passed"
});
formatter.match({
  "location": "BuyTestSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3501519000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 Ford Mustangs for Sale under $60,000 in NT",
      "offset": 28
    }
  ],
  "location": "BuyTestSteps.iShouldVerifyTheResult(String)"
});
formatter.result({
  "duration": 367888100,
  "status": "passed"
});
formatter.after({
  "duration": 982522000,
  "status": "passed"
});
});