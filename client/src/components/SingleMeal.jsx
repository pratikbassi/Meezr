import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

import Meal from "./Meal";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles({});

export default function SingleMeal(props) {
  const classes = useStyles();

  const [state, setState] = useState([]);
  console.log("props", props);
  console.log("props", props.match.params.id);

  // reloads data from the database, and then setState
  function getData() {
    return Promise.resolve(
      axios.get(`/api/meals/${props.match.params.id}`)
    ).then((res) => {
      return setState([res.data]);
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
    return <Meal key={id} props={props} />;
  });

  useEffect(() => {
    console.log("useEffect Fired");
    // getData();
  }, []);

  return (
    <>
      <Header />
      <Container>{meals}</Container>
      <Footer />
    </>
  );
}
