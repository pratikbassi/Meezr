import React, { useState } from "react";
import { Link } from "react-router-dom";
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
} from "@material-ui/core";
import {} from "@material-ui/icons";

const useStyles = makeStyles({});

export default function Template() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    size: "Medium",
    type: "Breakfast",
    calorieGoal: 0,
  });

  const handleSubmit = () => {
    console.log("submit!");
  };

  const handleChange = (event) => {
    console.log("Input Change!");
    console.log(event);
    const newValue = {
      [event.target.name]: event.target.value,
    };
    // console.log("Changing Size?", event.target.name);
    if (event.target.name === "size") {
      if (event.target.value === "Small") {
        newValue.calorieGoal = 500;
      } else if (event.target.value === "Medium") {
        newValue.calorieGoal = 600;
      } else if (event.target.value === "Large") {
        newValue.calorieGoal = 800;
      }
    }
    // console.log("newValue", newValue);
    setState((prev) => {
      return { ...prev, ...newValue };
    });
  };
  // console.log("state", state);

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel id="new-meal-type">Meal Type</InputLabel>
          <Select
            name="type"
            defaultValue="Breakfast"
            labelId="new-meal-type"
            id="new-meal-type"
            value={state.type}
            onChange={handleChange}
          >
            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
            <MenuItem value={"Lunch"}>Lunch</MenuItem>
            <MenuItem value={"Dinner"}>Dinner</MenuItem>
            <MenuItem value={"Brunch"}>Brunch</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel id="new-meal-size">Meal Size</InputLabel>
          <Select
            name="size"
            defaultValue="Medium"
            labelId="new-meal-size"
            id="new-meal-size"
            value={state.size}
            onChange={handleChange}
          >
            <MenuItem value={"Large"}>Large</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"Small"}>Small</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Calorie Goal"
          name="calorieGoal"
          type="number"
          value={state.calorieGoal}
          onChange={handleChange}
        />
      </form>
    </article>
  );
}
