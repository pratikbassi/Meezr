import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField } from "@material-ui/core";
import {} from "@material-ui/icons";

import Meal from "../Meal";

const useStyles = makeStyles({});

export default function Page4(props) {
  const classes = useStyles();
  const { state, onChange } = props;

  const renderMealPreview = () => {
    const ingredientsArr = [];
    for (const ingredient in state.ingredients) {
      if (state.ingredients.hasOwnProperty(ingredient)) {
        if (state.ingredients[ingredient] > 0) {
          ingredientsArr.push({
            name: ingredient,
            servings: state.ingredients[ingredient],
          });
        }
      }
    }
    console.log("ingredientsArr", ingredientsArr);
    console.log("state.title", state.title);
    console.log("state.description", state.description);

    const newProps = {
      id: 0,
      image: "https://i.redd.it/p3nmpwrls7s41.jpg",
      title: state.title,
      description: state.description,
      user: "user 1",
      ingredients: ingredientsArr,
      tags: ["preview"],
      calories: 500,
      score: 0.6,
      prepTime: 400,
      cost: 500,
      is_favorited: true,
    };
    console.log("newProps", newProps);

    return <Meal props={newProps} />;
  };

  return (
    <section>
      this is page 4<p>neato</p>
      <Typography variant="h4">Publish your meal</Typography>
      <TextField
        name="title"
        id="new-meal-title"
        label="Title"
        value={state.title}
        onChange={onChange}
      />
      <br />
      <TextField
        name="description"
        id="new-meal-description"
        label="Description"
        multiline
        value={state.description}
        onChange={onChange}
      />
      <br />
      <TextField
        name="image_url"
        id="new-meal-image-url"
        label="Image URL"
        value={state.image_url}
        onChange={onChange}
      />
      <Typography variant="h4">Preview</Typography>
      {renderMealPreview()}
    </section>
  );
}
