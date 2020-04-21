import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, LinearProgress } from "@material-ui/core";
import axios from "axios";

import Meal from "../Meal";
import Filter from "./Filter";

const useStyles = makeStyles({
  browse: {
    display: "grid",
    "grid-template-columns": "1fr 3fr 1fr",
  },
});

export default function Browse(props) {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const { history, location, match } = props.props;
  console.log("props", props);

  // reloads data from the database, and then setState
  function getData() {
    return Promise.resolve(
      axios.get(
        `/api/${location.pathname === "/" ? "/meals" : location.pathname}`
      )
    ).then((res) => {
      return setState(res.data);
    });
  }
  // console.log("index state", state);

  useEffect(() => {
    // console.log("index GetData", state);
    getData();
  }, [match.params]);

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
    const mealProps = {
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
    return <Meal key={id} props={mealProps} />;
  });

  return (
    <>
      <div className={classes.browse}>
        <Filter />
        <Container>{meals.length === 0 ? <LinearProgress /> : meals}</Container>
      </div>
    </>
  );
}
