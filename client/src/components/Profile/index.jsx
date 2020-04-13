import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
// import { } from "@material-ui/icons";

const useStyles = makeStyles();

export default function Profile() {
  const classes = useStyles();
  return (
    <div>
      this is the profiles page
      <p>this is a p tag</p>
    </div>
  );
}
