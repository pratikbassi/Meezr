import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Button } from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

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
    ingredients: {
      butter: 1,
      butterscotch: 3,
    },
    title: "Default Title",
    description: "Default Description",
    image_url: "https://i.redd.it/ewwlx46f7es41.jpg",
    is_public: false,
  });
  console.log("state", state);

  const [submitMsg, setSubmitMsg] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  // console.log("currentStep", currentStep);

  const _next = () => {
    if (currentStep <= 3) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const _back = () => {
    if (currentStep !== 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("submit!");
    console.log("state!", state);
    axios
      .post("/api/meals", state)
      .then(function (response) {
        console.log(response);
        setSubmitMsg(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
        setSubmitMsg(error.data.message);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Input Change!");
    console.log(event.target);
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
    console.log("newValue", newValue);
    setState((prev) => ({ ...prev, ...newValue }));
  };

  const handleBoolChange = (event) => {
    const { name, value } = event.target;
    console.log("Input Bool Change!");
    console.log(event.target);
    const newValue = {
      [name]: value === "true" ? true : false,
    };
    setState((prev) => ({ ...prev, ...newValue }));
  };

  const handleAdd = (event) => {
    const { name, value } = event.target;
    // console.log("Input Add!");
    // console.log(event);
    // console.log(state);
    setState((prev) => {
      return {
        ...prev,
        ingredients: {
          ...prev[name],
          [value]: 1,
        },
      };
    });
  };

  const handleQuantityAdd = (name) => {
    // console.log("Input Modify Add!");
    // console.log("name", name);

    setState((prev) => {
      // console.log("prev", prev);
      return {
        ...prev,
        ingredients: {
          ...prev.ingredients,
          [name]: prev.ingredients[name] + 1,
        },
      };
    });
  };

  const handleQuantityDecrease = (name) => {
    // console.log("Input Modify Decrease!");
    // console.log("name", name);

    setState((prev) => {
      // console.log("prev", prev);
      return {
        ...prev,
        ingredients: {
          ...prev.ingredients,
          [name]: prev.ingredients[name] - 1,
        },
      };
    });
  };

  return (
    <>
      <Container>
        <Typography variant="h2" className={classes.root}>
          Create a New Meal
        </Typography>
        <p>Step {currentStep} </p>
        <form onSubmit={handleSubmit}>
          {/* Check and render appropiate view */}
          {currentStep === 1 && <Page1 state={state} onChange={handleChange} />}
          {currentStep === 2 && (
            <Page2
              state={state}
              onAdd={handleAdd}
              onQuantityAdd={handleQuantityAdd}
              onQuantityDecrease={handleQuantityDecrease}
            />
          )}
          {currentStep === 3 && <Page3 state={state} />}
          {currentStep === 4 && (
            <Page4
              state={state}
              onChange={handleChange}
              onBoolChange={handleBoolChange}
            />
          )}

          {/* Check and render appropiate buttons */}
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
          <Typography variant="button">{submitMsg}</Typography>
        </form>
      </Container>
    </>
  );
}
