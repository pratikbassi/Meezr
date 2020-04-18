import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Container } from "@material-ui/core";
// import AddIcon from "@material-ui/icons/Add";
import { Add } from "@material-ui/icons";
// import "./App.scss";
import axios from "axios";

import Meal from "../Meal";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "./Filter";

const useStyles = makeStyles({
  fabNew: {
    float: "right",
    position: "fixed",
    bottom: "3em",
    right: "3em",
  },
  browse: {
    display: "grid",
    "grid-template-columns": "1fr 3fr 1fr",
  },
});

export default function App() {
  const classes = useStyles();
  const [state, setState] = useState([]);

  // reloads data from the database, and then setState
  function getData() {
    return Promise.resolve(axios.get("/api/meals")).then((res) => {
      return setState(res.data);
    });
  }
  console.log("index state", state);

  useEffect(() => {
    console.log("index GetData", state);

    getData();
  }, []);

  const meals = state.map((meal) => {
    const {
      id,
      title,
      desc,
      user_id,
      updated_at,
      meal_photos,
      meal_ingredients,
      meal_categories,
      user,
    } = meal;
    const props = {
      id: id,
      image: meal_photos,
      title: title,
      description: desc,
      user: user.user_name,
      ingredients: meal_ingredients,
      tags: meal_categories,
      calories: 0,
      score: 0,
      prepTime: 0,
      cost: 0,
      is_favorited: false,
    };
    return <Meal props={props} />;
  });

  return (
    <>
      <Header />
      <div className={classes.browse}>
        <Filter />
        <Container>{meals}</Container>
      </div>
      <Fab color="primary" aria-label="Add" className={classes.fabNew}>
        <Add />
      </Fab>
      <Footer />
    </>
  );
}
