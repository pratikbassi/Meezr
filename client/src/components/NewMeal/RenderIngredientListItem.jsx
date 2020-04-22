import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Remove, Add } from "@material-ui/icons";

const useStyles = makeStyles({
  ingredientCard: {
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "1fr",
    gridTemplateAreas: '"image name servings"',
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
  servings: {
    gridArea: "servings",
    justifySelf: "end",
  },
});

export default function RenderIngredientListItem(props) {
  const classes = useStyles();
  const { ingredient, onQuantityAdd, onQuantityDecrease, is_editable } = props;
  return (
    <Card key={ingredient.id} className={classes.ingredientCard}>
      <CardMedia
        className={classes.image}
        image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        title={ingredient.name}
      />
      <CardContent className={classes.name}>
        <Typography gutterBottom variant="h5" component="h2">
          {ingredient.name}
        </Typography>
      </CardContent>
      {is_editable ? (
        <CardActions className={classes.servings}>
          <Button onClick={onQuantityDecrease}>
            <Remove />
          </Button>
          <span>{ingredient.servings}</span>

          <Button onClick={onQuantityAdd}>
            <Add />
          </Button>
        </CardActions>
      ) : (
        <div className={classes.servings}>
          <Typography variant="h5">
            {is_editable ? null : `Servings: ${ingredient.servings}  `}
          </Typography>
        </div>
      )}
    </Card>
  );
}
