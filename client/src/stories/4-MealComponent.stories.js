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

  return (
    <MemoryRouter>
      <Meal props={data} />
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
