import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  Card,
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

export default function Page2(props) {
  const classes = useStyles();
  const { state, onAdd, onQuantityChange } = props;

  const [searchValue, setSearchValue] = useState("");
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const createAddedIngredients = () => {
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
            {ingredient.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.servings}>
          <Button onClick={() => onQuantityChange(ingredient, -1)}>
            <Remove />
          </Button>
          <span>{ingredient.servings}</span>
          <Button onClick={() => onQuantityChange(ingredient, 1)}>
            <Add />
          </Button>
        </CardActions>
      </Card>
    ));
  };

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

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <section className={classes.page2}>
      <Autocomplete
        onChange={(event, value) => {
          if (value) {
            return onAdd(value);
          }
        }}
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
      <div className={classes.list}>{createAddedIngredients()}</div>
    </section>
  );
}
