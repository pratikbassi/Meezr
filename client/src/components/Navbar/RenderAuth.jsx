import React from "react";


import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import RegisterForm from "components/Auth/Register";
import LoginForm from "components/Auth/Login";
import Profile from "../Profile/index"

import theme from "theme";
import { ThemeProvider } from "@material-ui/core/styles";


export default function RenderAuth(props) {
  const { registerUser, loginUser } = props;
  const handleClose = () => {
    props.onClose();
  };

  if (props.buttonType === "register") {
    return (
      <ThemeProvider theme={theme}>
        <Dialog
          onClose={() => handleClose()}
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
          onClose={() => handleClose()}
          open={props.open}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">Welcome back!</DialogTitle>
          <LoginForm onSubmit={loginUser} />
        </Dialog>
      </ThemeProvider>
    );
  }
  if (props.buttonType === "profile") {
    return (
      
      <ThemeProvider theme={theme}>
        <Dialog
          onClose={handleClose}
          open={props.open}
          aria-labelledby="simple-dialog-title"
        >
          <DialogTitle id="simple-dialog-title">Hi {props.profileData.user_name}!</DialogTitle>
          <Profile user_name={props.profileData.user_name} meals={props.profileData.meals} favorites={props.profileData.favorites}/>
        </Dialog>
      </ThemeProvider>
    );
  }
  return null;
}
