import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

import Meal from "./Meal";
const useStyles = makeStyles({});

export default function SingleMeal(props) {
  const classes = useStyles();

  const [state, setState] = useState([]);
  const { history, location, match } = props.props;
  console.log("props", props);
  console.log("props", match.params.id);

  // reloads data from the database, and then setState
  function getData() {
    return Promise.resolve(axios.get(`/api/${location.pathname}`)).then(
      (res) => {
        return setState([res.data]);
      }
    );
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
      is_extended: true,
    };
    return <Meal key={id} props={props} />;
  });

  return (
    <>
      <Container>{meals}</Container>
    </>
  );
}
