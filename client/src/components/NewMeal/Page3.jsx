import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({});

export default function Page3(props) {
  const classes = useStyles();
  const { state } = props;
  const { calorieGoal, ingredients, type, size } = state;
  const renderIngredients = () => {
    const output = [];
    for (const ingredient in ingredients) {
      if (ingredients.hasOwnProperty(ingredient)) {
        if (ingredients[ingredient] > 0) {
          const rendered = (
            <p>
              {ingredients[ingredient]} servings of {ingredient}
            </p>
          );
          output.push(rendered);
        }
      }
    }
    return output;
  };
  return (
    <section>
      <Typography variant="h4">Summary</Typography>
      <article>
        <Typography variant="h5">Meal Details</Typography>
        <p>
          Type: {type}
          <br />
          Size: {size}
        </p>
        <Typography variant="h5">Calorie Goal</Typography>
        <p>
          Actual Calories: {"some calculated value"}
          <br />
          Calorie Goal: {calorieGoal}
        </p>
        <Typography variant="h5">Ingredients</Typography>
        {renderIngredients()}
      </article>
    </section>
  );
}
