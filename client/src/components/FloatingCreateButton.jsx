import React from "react";
import { Fab, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  fabNew: {
    float: "right",
    position: "fixed",
    bottom: "3em",
    right: "3em",
  },
});

export default function FloatingCreateButton(props) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Tooltip title="Create a new meal">
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fabNew}
        onClick={() => history.push(`/create`)}
      >
        <Add />
      </Fab>
    </Tooltip>
  );
}
