import React from "react";
import { MemoryRouter } from "react-router-dom";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Meal from "../components/Meal/index";

export default {
  component: Meal,
  title: "Meal",
};

export const Basic = () => {
  const data = {
    id: 21,
    image: [
      {
        id: 11,
        image_url: "http://dummyimage.com/342x675.png/dddddd/000000",
        meal_id: 21,
        created_at: "2020-04-17T23:31:57.972Z",
        updated_at: "2020-04-17T23:31:57.972Z",
      },
      {
        id: 55,
        image_url: "http://dummyimage.com/450x414.jpg/cc0000/ffffff",
        meal_id: 21,
        created_at: "2020-04-17T23:32:14.939Z",
        updated_at: "2020-04-17T23:32:14.939Z",
      },
    ],
    title: "Wine - Pinot Noir Pond Haddock",
    description: "Tuna - LoinTuna - LoinTuna - LoinTuna - LoinTuna - Loin",
    user: "Frank Tunnacliffe",
    ingredients: [
      {
        id: 61,
        meal_id: 21,
        ingredient_id: 81,
        serving_size: 11,
        created_at: "2020-04-17T23:32:44.122Z",
        updated_at: "2020-04-17T23:32:44.122Z",
      },
      {
        id: 80,
        meal_id: 21,
        ingredient_id: 51,
        serving_size: 40,
        created_at: "2020-04-17T23:32:49.347Z",
        updated_at: "2020-04-17T23:32:49.347Z",
      },
    ],
    tags: [
      {
        id: 48,
        meal_id: 21,
        category_id: 43,
        created_at: "2020-04-17T23:33:41.356Z",
        updated_at: "2020-04-17T23:33:41.356Z",
      },
      {
        id: 66,
        meal_id: 21,
        category_id: 51,
        created_at: "2020-04-17T23:33:49.009Z",
        updated_at: "2020-04-17T23:33:49.009Z",
      },
    ],
    calories: 0,
    score: 0,
    prepTime: 0,
    cost: 0,
    is_favorited: false,
  };

  const data2 = {
    id: 9,
    image: [
      {
        id: 36,
        image_url: "http://dummyimage.com/850x459.jpg/dddddd/000000",
        meal_id: 9,
        created_at: "2020-04-19T04:43:00.213Z",
        updated_at: "2020-04-19T04:43:00.213Z",
      },
      {
        id: 71,
        image_url: "http://dummyimage.com/699x309.jpg/ff4444/ffffff",
        meal_id: 9,
        created_at: "2020-04-19T04:43:18.141Z",
        updated_at: "2020-04-19T04:43:18.141Z",
      },
    ],
    title: "Veal - Inside Round / Top, Lean",
    description:
      "Mix - Cocktail Strawberry DaiquiriMix - Cocktail Strawberry DaiquiriMix - Cocktail Strawberry DaiquiriMix - Cocktail Strawberry DaiquiriMix - Cocktail Strawberry Daiquiri",
    user: "Harland Cornuau",
    ingredients: [
      {
        id: 73,
        meal_id: 9,
        product: "Sauce - Soya, Light",
        nut_info: {
          nutrients: [
            {
              title: "Calories",
              amount: 357,
              unit: "cal",
              percentOfDailyNeeds: 2.5,
            },
            { title: "Fat", amount: 794, unit: "g", percentOfDailyNeeds: 0.18 },
            {
              title: "Saturated Fat",
              amount: 33,
              unit: "g",
              percentOfDailyNeeds: 0.06,
            },
            {
              title: "Carbohydrates",
              amount: 840,
              unit: "g",
              percentOfDailyNeeds: 4.37,
            },
            {
              title: "Net Carbohydrates",
              amount: 363,
              unit: "g",
              percentOfDailyNeeds: 4.26,
            },
            {
              title: "Sugar",
              amount: 121,
              unit: "g",
              percentOfDailyNeeds: 10.94,
            },
            {
              title: "Cholesterol",
              amount: 0,
              unit: "mg",
              percentOfDailyNeeds: 0,
            },
            {
              title: "Sodium",
              amount: 350,
              unit: "mg",
              percentOfDailyNeeds: 0.04,
            },
            {
              title: "Protein",
              amount: 333,
              unit: "g",
              percentOfDailyNeeds: 1.08,
            },
            {
              title: "Vitamin C",
              amount: 508,
              unit: "mg",
              percentOfDailyNeeds: 57.94,
            },
            {
              title: "Manganese",
              amount: 867,
              unit: "mg",
              percentOfDailyNeeds: 46.35,
            },
            {
              title: "Vitamin B6",
              amount: 315,
              unit: "mg",
              percentOfDailyNeeds: 5.6,
            },
            {
              title: "Fiber",
              amount: 902,
              unit: "g",
              percentOfDailyNeeds: 5.6,
            },
            {
              title: "Copper",
              amount: 730,
              unit: "mg",
              percentOfDailyNeeds: 5.5,
            },
            {
              title: "Vitamin B1",
              amount: 87,
              unit: "mg",
              percentOfDailyNeeds: 5.27,
            },
            {
              title: "Folate",
              amount: 265,
              unit: "µg",
              percentOfDailyNeeds: 4.5,
            },
            {
              title: "Potassium",
              amount: 162,
              unit: "mg",
              percentOfDailyNeeds: 3.11,
            },
            {
              title: "Magnesium",
              amount: 78,
              unit: "mg",
              percentOfDailyNeeds: 3,
            },
            {
              title: "Vitamin B3",
              amount: 5,
              unit: "mg",
              percentOfDailyNeeds: 2.5,
            },
            {
              title: "Vitamin B5",
              amount: 524,
              unit: "mg",
              percentOfDailyNeeds: 2.13,
            },
            {
              title: "Vitamin B2",
              amount: 820,
              unit: "mg",
              percentOfDailyNeeds: 1.88,
            },
            {
              title: "Iron",
              amount: 804,
              unit: "mg",
              percentOfDailyNeeds: 1.61,
            },
            {
              title: "Calcium",
              amount: 787,
              unit: "mg",
              percentOfDailyNeeds: 1.3,
            },
            {
              title: "Vitamin A",
              amount: 693,
              unit: "IU",
              percentOfDailyNeeds: 1.16,
            },
          ],
          caloricBreakdown: {
            percentProtein: 3.88,
            percentFat: 1.94,
            percentCarbs: 94.18,
          },
          weightPerServing: { amount: 100, unit: "g" },
        },
        serving_size: 67,
        created_at: "2020-04-19T04:43:57.320Z",
        updated_at: "2020-04-19T04:43:57.320Z",
      },
    ],
    tags: [],
    calories: 0,
    score: 0,
    prepTime: 0,
    cost: 0,
    is_favorited: false,
  };

  return (
    <MemoryRouter>
      <Meal props={data2} />
    </MemoryRouter>
  );
};

// export const emoji = () => (
//   <Button onClick={action("clicked")}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
