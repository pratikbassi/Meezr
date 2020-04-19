import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import {Grid } from "@material-ui/core";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "theme"


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formItem: {
    margin: theme.spacing(1),
  },
}));




export default function LoginForm(params) {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [user_password, setUser_password] = useState(null);



  return (
    <form> 
      <ThemeProvider theme={theme}> 

      <Grid container>

        <Grid className={classes.formItem} item>       
          <TextField required id ='email' value={email} label="Email" type='email' variant="outlined" onChange={(x) => setEmail(x.target.value)}/>
        </Grid>

        <Grid className={classes.formItem} item>       
          <TextField  required id='user_password' value={user_password} label="Password" type='password' variant="outlined" onChange={(x) => setUser_password(x.target.value)}/>
        </Grid>



        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SendRoundedIcon />}
          onClick={() => params.onClick({
            email: email,
            user_password: user_password,
          })}
        >
          Login
        </Button>
      </Grid>
      </ThemeProvider>
    </form>
  );
}