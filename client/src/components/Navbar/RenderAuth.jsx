import React from 'react';
import axios from "axios"

import { makeStyles } from '@material-ui/core/styles';


import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import RegisterForm from 'components/Auth/Register';
import LoginForm from 'components/Auth/Login';

import theme from "theme"
import { ThemeProvider } from '@material-ui/core/styles';
import Cookies from 'js-cookie'

const useStyles = makeStyles((theme) => ({


}))

const setCookie = (cookieID) => {
  Cookies.set('user_id', cookieID)
}

const registerUser = (data) => {

  if (data.user_password === data.confirm_password) {
    return Promise.resolve(
      axios({
        method: "post",
        url: "/api/users",
        data: {
          user_name: `${data.user_name}`,
          email: `${data.email}`,
          user_password: `${data.user_password}`,
        }
      }).then((res) => {
        setCookie(res.data['user_id'])
        location.reload();

      }).catch((err) => {console.log(err)})
    )
    
  }
}

const loginUser = (data) => {

  if (data.user_password && data.email) {
    return Promise.resolve(
      axios({
        method: "post",
        url: "/api/login",
        data: {
          email: `${data.email}`,
          user_password: `${data.user_password}`,
        }
      }).then((res) => {
        setCookie(res.data['user_id'])
        location.reload();

      }).catch((err) => {console.log(err)})
    )
  } 
}

export default function RenderAuth(props) {

  const handleClose = () => {
    props.onClose();
  };

  if (props.buttonType === "register"){
    return (
      <ThemeProvider theme={theme} >
        <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
          <DialogTitle id="simple-dialog-title">Welcome to Meez'r!</DialogTitle>
          <RegisterForm  onClick={registerUser}/>
        </Dialog>
      </ThemeProvider>
    )
  }
  if (props.buttonType === "login"){
    return (
      <ThemeProvider theme={theme}>
        <Dialog onClose={handleClose} open={props.open} aria-labelledby="simple-dialog-title">
          <DialogTitle  id="simple-dialog-title">Welcome back!</DialogTitle>
          <LoginForm  onClick={loginUser}/>
        </Dialog>
      </ThemeProvider>
    )
  }
  return null
}