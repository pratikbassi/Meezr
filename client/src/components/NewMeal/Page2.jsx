import React, { useState, useEffect, useCallback } from "react";
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
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CircularProgress,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Add, Remove } from "@material-ui/icons";

import { useDebounce } from "use-debounce";
import axios from "axios";

const useStyles = makeStyles({
  page2: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "6em 1fr",
    gridTemplateAreas: '"search summary" "list summary"',
  },
  search: {
    gridArea: "search",
  },
  list: {
    gridArea: "list",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
  },
  summary: {
    gridArea: "summary",
  },
  ingredientCard: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "1fr",
    gridTemplateAreas: '"image name servings"',
    alignContent: "center",
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

export default function Page2(props) {
  const classes = useStyles();
  const { state, onAdd, onQuantityChange } = props;

  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);

  useEffect(() => {
    console.log("search value updated!");
  }, [searchValue]);

  useEffect(() => {
    if (debouncedSearchValue != "") {
      console.log("search call updated!");
      axios
        .get("/api/ingredients/autocomplete", {
          params: {
            query: debouncedSearchValue,
          },
        })
        .then((res) => setOptions(res.data));
    }
  }, [debouncedSearchValue]);

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
      <MenuItem value={entry}>{entry.name}</MenuItem>
    ));
    // return output;
    return autocompletedata;
  };

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

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  // useEffect(() => {
  //   // let active = true;

  //   // if (!loading) {
  //   //   return undefined;
  //   // }

  //   // return () => {
  //   //   active = false;
  //   // };
  // }, [debouncedSearchValue]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <section className={classes.page2}>
      {/* <FormControl className={classes.search}>
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
      </FormControl> */}
      <Autocomplete
        onChange={(event, value) => onAdd(value)}
        id="asynchronous-demo"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Ingredient"
            variant="outlined"
            onChange={(event) => setSearchValue(event.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <div className={classes.list}>{createAddedIngredients(state)}</div>
    </section>
  );
}
