import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

import Meal from "./Meal";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles();

export default function SingleMeal() {
  const classes = useStyles();

  const [state, setState] = useState({
    id: 0,
    image: "https://i.redd.it/p3nmpwrls7s41.jpg",
    title: "Title 1",
    description:
      "description 1 description 1 description 1 description 1 description 1 description 1 description 1 description 1 ",
    user: "user 1",
    ingredients: [
      {
        id: 1001,
        original: "butter",
        originalName: "butter",
        name: "butter",
        amount: 1.0,
        unit: "serving",
        unitShort: "serving",
        unitLong: "serving",
        possibleUnits: [
          "pat",
          "knob",
          "g",
          "stick",
          "oz",
          "teaspoon",
          "cup",
          "serving",
          "tablespoon",
        ],
        estimatedCost: {
          value: 4.29,
          unit: "US Cents",
        },
        consistency: "solid",
        shoppingListUnits: ["ounces", "pounds"],
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        meta: [],
        nutrition: {
          nutrients: [
            {
              title: "Calories",
              amount: 35.85,
              unit: "cal",
              percentOfDailyNeeds: 1.79,
            },
            {
              title: "Fat",
              amount: 4.06,
              unit: "g",
              percentOfDailyNeeds: 6.24,
            },
            {
              title: "Saturated Fat",
              amount: 2.57,
              unit: "g",
              percentOfDailyNeeds: 16.05,
            },
            {
              title: "Carbohydrates",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              title: "Net Carbohydrates",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              title: "Sugar",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              title: "Cholesterol",
              amount: 10.75,
              unit: "mg",
              percentOfDailyNeeds: 3.58,
            },
            {
              title: "Sodium",
              amount: 35.7,
              unit: "mg",
              percentOfDailyNeeds: 1.55,
            },
            {
              title: "Protein",
              amount: 0.04,
              unit: "g",
              percentOfDailyNeeds: 0.09,
            },
            {
              title: "Vitamin A",
              amount: 124.95,
              unit: "IU",
              percentOfDailyNeeds: 2.5,
            },
          ],
          caloricBreakdown: {
            percentProtein: 0.46,
            percentFat: 99.5,
            percentCarbs: 0.04,
          },
          weightPerServing: {
            amount: 5,
            unit: "g",
          },
        },
      },
      {
        id: 9003,
        original: "apple",
        originalName: "apple",
        name: "apple",
        amount: 1.0,
        unit: "serving",
        unitShort: "serving",
        unitLong: "serving",
        possibleUnits: [
          "small",
          "large",
          "piece",
          "slice",
          "g",
          "extra small",
          "medium",
          "oz",
          "cup slice",
          "NLEA serving",
          "cup",
          "serving",
        ],
        estimatedCost: {
          value: 20.69,
          unit: "US Cents",
        },
        consistency: "solid",
        shoppingListUnits: ["pieces"],
        aisle: "Produce",
        image: "apple.jpg",
        meta: [],
        nutrition: {
          nutrients: [
            {
              title: "Calories",
              amount: 32.5,
              unit: "cal",
              percentOfDailyNeeds: 1.63,
            },
            {
              title: "Fat",
              amount: 0.11,
              unit: "g",
              percentOfDailyNeeds: 0.16,
            },
            {
              title: "Saturated Fat",
              amount: 0.02,
              unit: "g",
              percentOfDailyNeeds: 0.11,
            },
            {
              title: "Carbohydrates",
              amount: 8.63,
              unit: "g",
              percentOfDailyNeeds: 2.88,
            },
            {
              title: "Net Carbohydrates",
              amount: 7.13,
              unit: "g",
              percentOfDailyNeeds: 2.59,
            },
            {
              title: "Sugar",
              amount: 6.49,
              unit: "g",
              percentOfDailyNeeds: 7.22,
            },
            {
              title: "Cholesterol",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              title: "Sodium",
              amount: 0.63,
              unit: "mg",
              percentOfDailyNeeds: 0.03,
            },
            {
              title: "Protein",
              amount: 0.16,
              unit: "g",
              percentOfDailyNeeds: 0.33,
            },
            {
              title: "Fiber",
              amount: 1.5,
              unit: "g",
              percentOfDailyNeeds: 6.0,
            },
            {
              title: "Vitamin C",
              amount: 2.88,
              unit: "mg",
              percentOfDailyNeeds: 3.48,
            },
            {
              title: "Potassium",
              amount: 66.88,
              unit: "mg",
              percentOfDailyNeeds: 1.91,
            },
            {
              title: "Vitamin K",
              amount: 1.38,
              unit: "µg",
              percentOfDailyNeeds: 1.31,
            },
            {
              title: "Vitamin B6",
              amount: 0.03,
              unit: "mg",
              percentOfDailyNeeds: 1.28,
            },
            {
              title: "Manganese",
              amount: 0.02,
              unit: "mg",
              percentOfDailyNeeds: 1.09,
            },
          ],
          caloricBreakdown: {
            percentProtein: 1.8,
            percentFat: 2.65,
            percentCarbs: 95.55,
          },
          weightPerServing: {
            amount: 63,
            unit: "g",
          },
        },
      },
      {
        id: 1041009,
        original: "cheese",
        originalName: "cheese",
        name: "cheese",
        amount: 1.0,
        unit: "serving",
        unitShort: "serving",
        unitLong: "serving",
        possibleUnits: [
          "cubic inch",
          "slice",
          "g",
          "ounce",
          "oz",
          "cup",
          "serving",
          "tablespoon",
        ],
        estimatedCost: {
          value: 32.14,
          unit: "US Cents",
        },
        consistency: "solid",
        shoppingListUnits: ["ounces", "pounds"],
        aisle: "Cheese",
        image: "cheddar-cheese.png",
        meta: [],
        nutrition: {
          nutrients: [
            {
              title: "Calories",
              amount: 120.9,
              unit: "cal",
              percentOfDailyNeeds: 6.05,
            },
            {
              title: "Fat",
              amount: 9.94,
              unit: "g",
              percentOfDailyNeeds: 15.3,
            },
            {
              title: "Saturated Fat",
              amount: 6.33,
              unit: "g",
              percentOfDailyNeeds: 39.55,
            },
            {
              title: "Carbohydrates",
              amount: 0.38,
              unit: "g",
              percentOfDailyNeeds: 0.13,
            },
            {
              title: "Net Carbohydrates",
              amount: 0.38,
              unit: "g",
              percentOfDailyNeeds: 0.14,
            },
            {
              title: "Sugar",
              amount: 0.16,
              unit: "g",
              percentOfDailyNeeds: 0.17,
            },
            {
              title: "Cholesterol",
              amount: 31.5,
              unit: "mg",
              percentOfDailyNeeds: 10.5,
            },
            {
              title: "Sodium",
              amount: 186.3,
              unit: "mg",
              percentOfDailyNeeds: 8.1,
            },
            {
              title: "Protein",
              amount: 7.47,
              unit: "g",
              percentOfDailyNeeds: 14.94,
            },
            {
              title: "Calcium",
              amount: 216.3,
              unit: "mg",
              percentOfDailyNeeds: 21.63,
            },
            {
              title: "Phosphorus",
              amount: 153.6,
              unit: "mg",
              percentOfDailyNeeds: 15.36,
            },
            {
              title: "Vitamin B2",
              amount: 0.11,
              unit: "mg",
              percentOfDailyNeeds: 6.62,
            },
            {
              title: "Zinc",
              amount: 0.93,
              unit: "mg",
              percentOfDailyNeeds: 6.22,
            },
            {
              title: "Vitamin A",
              amount: 300.6,
              unit: "IU",
              percentOfDailyNeeds: 6.01,
            },
            {
              title: "Selenium",
              amount: 4.17,
              unit: "µg",
              percentOfDailyNeeds: 5.96,
            },
            {
              title: "Vitamin B12",
              amount: 0.25,
              unit: "µg",
              percentOfDailyNeeds: 4.15,
            },
            {
              title: "Magnesium",
              amount: 8.4,
              unit: "mg",
              percentOfDailyNeeds: 2.1,
            },
            {
              title: "Folate",
              amount: 5.4,
              unit: "µg",
              percentOfDailyNeeds: 1.35,
            },
            {
              title: "Vitamin B5",
              amount: 0.12,
              unit: "mg",
              percentOfDailyNeeds: 1.24,
            },
            {
              title: "Vitamin D",
              amount: 0.18,
              unit: "µg",
              percentOfDailyNeeds: 1.2,
            },
            {
              title: "Iron",
              amount: 0.2,
              unit: "mg",
              percentOfDailyNeeds: 1.13,
            },
            {
              title: "Vitamin B6",
              amount: 0.02,
              unit: "mg",
              percentOfDailyNeeds: 1.11,
            },
          ],
          caloricBreakdown: {
            percentProtein: 24.72,
            percentFat: 74.01,
            percentCarbs: 1.27,
          },
          weightPerServing: {
            amount: 30,
            unit: "g",
          },
        },
      },
    ],
    tags: ["keto"],
    calories: 500,
    score: 0.6,
    prepTime: 400,
    cost: 500,
    is_favorited: true,
  });

  console.log("this is SingleMeal state: ", state);

  function getData() {
    // return Promise.all([Promise.resolve(axios.get("/api/meal/1"))]).then(
    //   (all) => {
    //     return setState((prev) => ({
    //       ...prev,
    //       all,
    //     }));
    //   }
    // );
    // return setState();
  }

  useEffect(() => {
    console.log("useEffect Fired");
    // getData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Meal props={state} />
      </Container>
      <Footer />
    </>
  );
}
