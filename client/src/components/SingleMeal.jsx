import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import {} from "@material-ui/icons";
import axios from "axios";

import Meal from "./Meal";

const useStyles = makeStyles();

export default function Template() {
  const classes = useStyles();

  const [state, setState] = useState({});

  function getData() {
    return Promise.all([Promise.resolve(axios.get("/api/meal/1"))]).then(
      (all) => {
        return setState((prev) => ({
          ...prev,
          all,
        }));
      }
    );
  }

  useEffect(() => {
    console.log("useEffect Fired");
    getData();
  }, []);

  return (
    <Container>
      <Meal props={state} />
    </Container>
  );
}
