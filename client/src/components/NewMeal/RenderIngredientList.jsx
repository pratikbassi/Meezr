import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { } from "@material-ui/icons";

const useStyles = makeStyles({})



export default function RenderIngredientList() {
  const classes = useStyles();
  const createAddedIngredients = (state) => {
    const ingredients = state.ingredients;
    console.log("ingredients", ingredients);

    const output = [];
    for (const ingredient in ingredients) {
      if (ingredients.hasOwnProperty(ingredient)) {
        if (ingredients[ingredient].servings > 0) {
          output.push(
            <Card className={classes.ingredientCard}>
              <CardMedia
                className={classes.image}
                image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredients[ingredient].image}`}
                title={ingredient}
              />
              <CardContent className={classes.name}>
                <Typography gutterBottom variant="h5" component="h2">
                  {ingredient}
                </Typography>
              </CardContent>
              <CardActions className={classes.servings}>
                <Button
                  onClick={() => onQuantityChange(ingredients[ingredient], -1)}
                >
                  <Remove />
                </Button>
                <span>{ingredients[ingredient].servings}</span>
                <Button
                  onClick={() => onQuantityChange(ingredients[ingredient], 1)}
                >
                  <Add />
                </Button>
              </CardActions>
            </Card>
          );
        }
      }
    }
    console.log("outputting ingredients added", output);
    return output;
  };
  return ()
}