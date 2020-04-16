import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// import "./styles.scss";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
// import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles({});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton className={classes.menuButton}></IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/">Meez'r</Link>
        </Typography>
        <Button border="1em solid red">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
