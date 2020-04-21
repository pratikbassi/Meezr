import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  filter: {
    height: "100vh",
    // backgroundColor: "orange",
    width: "100%",
  },
});
export default function Footer() {
  const classes = useStyles();
  return <div className={classes.filter}></div>;
}
