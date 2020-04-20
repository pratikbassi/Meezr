import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Cookies from "js-cookie";
import axios from "axios";




const useStyles = makeStyles({});

export default function Profile() {
  const [state, useState] = React.useState()
  const user = Cookies.get('user_id')


  const getMealsForUser = (user) => {
    return Promise.resolve(axios.)
  }

  const classes = useStyles();
  return (
    <div>
      <MealList info={[]} />
    </div>
  );
}
