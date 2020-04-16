import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({});

export default function Page2(props) {
  const classes = useStyles();
  const { state, onAdd, onChange, onQuantityAdd, onQuantityDecrease } = props;

  const createAutocompleteEntries = () => {
    let autocompletedata = [
      {
        name: "butter",
        image: "butter-sliced.jpg",
      },
      {
        name: "buttermilk",
        image: "buttermilk.jpg",
      },
      {
        name: "butterscotch",
        image: "caramel-sauce.jpg",
      },
      {
        name: "butter beans",
        image: "dry-cannellini-beans.jpg",
      },
      {
        name: "butter lettuce",
        image: "Butter-or-Boston-Bibb-lettuce.jpg",
      },
      {
        name: "butternut squash",
        image: "butternut-squash.jpg",
      },
      {
        name: "butterscotch chips",
        image: "peanut-butter-or-butterscotch-chips.jpg",
      },
      {
        name: "butter crackers",
        image: "crackers.jpg",
      },
      {
        name: "buttermilk biscuits",
        image: "buttermilk-biscuits.jpg",
      },
      {
        name: "butterfinger",
        image: "butterfinger.png",
      },
    ];
    const output = autocompletedata.map((entry) => (
      <MenuItem value={entry.name}>{entry.name}</MenuItem>
    ));
    return output;
  };

  const createAddedIngredients = () => {
    const ingredients = state.ingredients;
    const output = [];
    for (const ingredient in ingredients) {
      if (ingredients.hasOwnProperty(ingredient)) {
        if (ingredients[ingredient] > 0) {
          output.push(
            <div>
              <Button onClick={() => onQuantityDecrease(ingredient)}>-</Button>
              <span>{ingredients[ingredient]}</span>
              <Button onClick={() => onQuantityAdd(ingredient)}>+</Button>
              <span>of {ingredient}</span>
            </div>
          );
        }
      }
    }
    console.log("outputting ingredients added", output);
    return output;
  };

  return (
    <section>
      <FormControl>
        <InputLabel id="new-ingredient">Ingredient Search</InputLabel>
        <Select
          name="ingredients"
          labelId="new-ingredient"
          id="new-ingredient"
          value={state.type}
          onChange={onAdd}
        >
          {createAutocompleteEntries()}
        </Select>
      </FormControl>
      <br />
      {createAddedIngredients()}
    </section>
  );
}
