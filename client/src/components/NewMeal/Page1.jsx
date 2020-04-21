import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({
  page1: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
  },
  textFields: {
    width: "15em",
    maxWidth: "90vw",
    marginBottom: "2em",
  },
});

export default function Page2(props) {
  const classes = useStyles();
  const { state, onChange } = props;

  return (
    <section className={classes.page1}>
      <FormControl className={classes.textFields}>
        <InputLabel id="new-meal-type">Meal Type</InputLabel>
        <Select
          name="type"
          defaultValue="Breakfast"
          labelId="new-meal-type"
          id="new-meal-type"
          value={state.type}
          onChange={onChange}
        >
          <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
          <MenuItem value={"Lunch"}>Lunch</MenuItem>
          <MenuItem value={"Dinner"}>Dinner</MenuItem>
          <MenuItem value={"Brunch"}>Brunch</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.textFields}>
        <InputLabel id="new-meal-size">Meal Size</InputLabel>
        <Select
          name="size"
          defaultValue="Medium"
          labelId="new-meal-size"
          id="new-meal-size"
          value={state.size}
          onChange={onChange}
        >
          <MenuItem value={"Large"}>Large</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"Small"}>Small</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={classes.textFields}
        id="standard-basic"
        label="Calorie Goal"
        name="calorieGoal"
        type="number"
        value={state.calorieGoal}
        onChange={onChange}
      />
    </section>
  );
}
