import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({});

export default function Page2() {
  const classes = useStyles();

  return (
    <section>
      <FormControl>
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
    </section>
  );
}
