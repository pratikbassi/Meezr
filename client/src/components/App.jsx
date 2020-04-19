import React from "react";
import Routes from "../routes/Index";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../components/Navbar/index";

const useStyles = makeStyles({
  fabNew: {
    float: "right",
    position: "fixed",
    bottom: "3em",
    right: "3em",
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      {Routes}
      <Fab color="primary" aria-label="Add" className={classes.fabNew}>
        <Add />
      </Fab>
    </>
  );
};
