import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import {} from "@material-ui/icons";

import useVisualMode from "../../hooks/useVisualMode";

import Header from "../Header";
import Footer from "../Footer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

const useStyles = makeStyles({});

export default function NewMeal() {
  const classes = useStyles();

  const [state, setState] = useState({
    size: "Medium",
    type: "Breakfast",
    calorieGoal: 500,
    ingredients: [],
    title: "",
    description: "",
    image_url: "https://i.redd.it/ewwlx46f7es41.jpg",
  });

  // const PAGE1 = "PAGE1";
  // const PAGE2 = "PAGE2";
  // const PAGE3 = "PAGE3";
  // const PAGE4 = "PAGE4";
  // const { mode, transition, back, historyVM } = useVisualMode(stepNum);

  const [currentStep, setCurrentStep] = useState(1);
  console.log("currentStep", currentStep);

  const _next = () => {
    console.log("next clicked");
    setCurrentStep((prev) => prev + 1);
  };

  const _back = () => {
    if (currentStep !== 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("submit!");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Input Change!");
    console.log(event);
    const newValue = {
      [name]: value,
    };
    // console.log("Changing Size?", name);
    if (name === "size") {
      if (value === "Small") {
        newValue.calorieGoal = 500;
      } else if (value === "Medium") {
        newValue.calorieGoal = 600;
      } else if (value === "Large") {
        newValue.calorieGoal = 800;
      }
    }
    // console.log("newValue", newValue);
    setState((prev) => {
      return { ...prev, ...newValue };
    });
  };

  // super WIP
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h2" className={classes.root}>
          Create a New Meal
        </Typography>
        <p>Step {currentStep} </p>
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && <Page1 state={state} onChange={handleChange} />}
          {currentStep === 2 && <Page2 state={state} />}
          {currentStep === 3 && <Page3 state={state} />}
          {currentStep === 4 && <Page4 state={state} />}

          {currentStep === 1 && <Button onClick={_next}> Next </Button>}
          {currentStep > 1 && currentStep < 4 && (
            <>
              <Button onClick={_back}> Back </Button>
              <Button onClick={_next}> Next </Button>
            </>
          )}
          {currentStep === 4 && (
            <>
              <Button onClick={_back}> Back </Button>
              <Button onClick={handleSubmit}> Submit </Button>
            </>
          )}
        </form>
      </Container>
      <Footer />
    </>
  );
}
