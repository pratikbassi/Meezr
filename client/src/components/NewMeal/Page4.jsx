import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import {} from "@material-ui/icons";

import Meal from "../Meal";

const useStyles = makeStyles({});

export default function Page4(props) {
  const classes = useStyles();
  const { state, onChange, onBoolChange } = props;

  const { is_public, ingredients, image_url, description, title } = state;

  const renderMealPreview = () => {
    const ingredientsArr = [];
    for (const ingredient in ingredients) {
      if (ingredients.hasOwnProperty(ingredient)) {
        if (ingredients[ingredient] > 0) {
          ingredientsArr.push({
            product: ingredient,
            servings: ingredients[ingredient],
          });
        }
      }
    }

    const imageArr = [image_url].map((image_url) => {
      return {
        id: 0,
        image_url: image_url,
        meal_id: 0,
      };
    });

    const newProps = {
      id: 0,
      image: imageArr,
      title: title,
      description: description,
      user: "You",
      ingredients: ingredientsArr,
      tags: ["preview"],
      calories: 500,
      score: 0.6,
      prepTime: 400,
      cost: 500,
      is_favorited: false,
    };
    console.log("newProps", newProps);

    return <Meal props={newProps} />;
  };

  /**
   {
  "id": 22,
  "image": [],
  "title": "Soup - Campbells Chicken",
  "description": "Crab Brie In PhylloCrab Brie In PhylloCrab Brie In PhylloCrab Brie In PhylloCrab Brie In Phyllo",
  "user": "Allayne Cassey",
  "ingredients": [],
  "tags": [],
  "calories": 0,
  "score": 0,
  "prepTime": 0,
  "cost": 0,
  "is_favorited": false
}
   */

  const addImage = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
  };

  useEffect(() => {
    renderMealPreview();
  }, [state]);

  return (
    <section>
      <Typography variant="h4">Publish your meal</Typography>
      <TextField
        name="title"
        id="new-meal-title"
        label="Title"
        value={title}
        onChange={onChange}
      />
      <br />
      <TextField
        name="description"
        id="new-meal-description"
        label="Description"
        multiline
        value={description}
        onChange={onChange}
      />
      <br />
      <FormGroup onSubmit={addImage} preventDefault>
        <TextField
          name="image_url"
          id="new-meal-image-url"
          label="Image URL"
          value={image_url}
          onChange={onChange}
        />
        <Button type="submit">Add Image URL</Button>
      </FormGroup>
      <FormControl component="fieldset">
        <FormLabel component="legend">Meal Privacy Setting</FormLabel>
        <RadioGroup
          aria-label="meal-privacy"
          name="is_public"
          value={is_public}
          onChange={onBoolChange}
        >
          <FormControlLabel value={false} control={<Radio />} label="Private" />
          <FormControlLabel value={true} control={<Radio />} label="Public" />
        </RadioGroup>
      </FormControl>
      <Typography variant="h4">Preview</Typography>
      {renderMealPreview()}
    </section>
  );
}
