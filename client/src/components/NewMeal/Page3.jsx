import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({
  page3: {},
  summary: {},
  details: {},
  ingredientCard: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: '"image name"',
    alignItems: "center",
  },
  image: {
    gridArea: "image",
    height: "100px",
    width: "100px",
    backgroundSize: "contain",
  },
  name: {
    gridArea: "name",
  },
});

export default function Page3(props) {
  const classes = useStyles();
  const { state } = props;
  const { calorieGoal, ingredients, type, size } = state;
  const renderIngredients = () => {
    const ingredients = Object.values(state.ingredients);
    console.log("object Values: ", ingredients);
    return ingredients.map((ingredient) => (
      <Card key={ingredient.id} className={classes.ingredientCard}>
        <CardMedia
          className={classes.image}
          image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
          title={ingredient.name}
        />
        <CardContent className={classes.name}>
          <Typography gutterBottom variant="h5" component="h2">
            {ingredient.servings} serving of {ingredient.name}
          </Typography>
        </CardContent>
      </Card>
    ));
  };
  return (
    <section className={classes.page3}>
      <Typography className={classes.summary} variant="h4">
        Summary
      </Typography>
      <article className={classes.details}>
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
