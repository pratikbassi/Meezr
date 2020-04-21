import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";

import MealListItem from "../Profile/MealListItem";
import { Typography } from "@material-ui/core";

export default function MealList(props) {
  const [state, useState] = React.useState(null);
  const strings = [
    "Aren't you hungry?",
    "Add some meals!",
    "Meez'r is based on 'Mise en place'!",
    "It's a good day to make a meal!",
    "Time to break out the cookbook!",
  ];

  function CheckList() {
    if (props.info) {
      return (
        <ThemeProvider theme={theme}>
          {props.info.map((item) => {
            return (
              <MealListItem
                mealPhoto={item.mealPhoto}
                mealTitle={item.mealTitle}
                mealId={item.mealId}
              />
            );
          })}
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Typography variant="h5">{strings.sample}</Typography>
        </ThemeProvider>
      );
    }
  }

  return <CheckList />;
}
