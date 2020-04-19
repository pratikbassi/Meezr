import React from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import RegisterForm from "components/Auth/Register";
import LoginForm from "components/Auth/Login";

import theme from "theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({}));

export default function RenderAuth(props) {
  const { registerUser, loginUser } = props;
  const handleClose = () => {
    props.onClose();
  };

  if (props.buttonType === "register") {
    return (
      <ThemeProvider theme={theme}>
        <Dialog
          onClose={handleClose}
          aria-labelledby="simple-dialog-title"
          open={props.open}
        >
          <DialogTitle id="simple-dialog-title">Welcome to Meez'r!</DialogTitle>
          <RegisterForm onSubmit={registerUser} />
        </Dialog>
      </ThemeProvider>
    );
  }
  if (props.buttonType === "login") {
    return (
      <ThemeProvider theme={theme}>
        <Dialog
          onClose={handleClose}
          open={props.open}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">Welcome back!</DialogTitle>
          <LoginForm onSubmit={loginUser} />
        </Dialog>
      </ThemeProvider>
    );
  }
  return null;
}
