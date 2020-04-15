import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import {} from "@material-ui/icons";

import useVisualMode from "../../hooks/useVisualMode";

import Header from "../Header";
import Footer from "../Footer";
import Page1 from "./Page1";

const useStyles = makeStyles({});

export default function NewMeal() {
  const classes = useStyles();

  const PAGE1 = "PAGE1";
  const PAGE2 = "PAGE2";
  const PAGE3 = "PAGE3";
  const PAGE4 = "PAGE4";

  const { mode, transition, back } = useVisualMode(PAGE1);
  // super WIP
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h2" className={classes.root}>
          Create a New Meal
        </Typography>
        {mode === PAGE1 && <Page1 />}
        {/* {mode === PAGE2 && <Page2 />}
      {mode === PAGE3 && <Page3 />} */}
        {/* {mode === PAGE4 && (
        <Page4
          interviewers={interviewers}
          onSave={save}
          onCancel={() => back()}
        /> */}
        )}
      </Container>
      <Footer />
    </>
  );
}
