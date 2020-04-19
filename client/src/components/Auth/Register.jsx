import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import {Grid } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import theme from "theme"
import { ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formItem: {
    margin: theme.spacing(1),
  },
}));




export default function RegisterForm(params) {
  const classes = useStyles(theme);
  const [user_name, setUser_name] = useState(null);
  const [email, setEmail] = useState(null);
  const [user_password, setUser_password] = useState(null);
  const [confirm_password, setConfirm_password] = useState(null);

  

  return (
    <form> 
      <ThemeProvider theme={theme}> 
        <Grid container>
          <Grid className={classes.formItem} item>       
            <TextField required id='user_name' value={user_name} label="Full Name" variant="outlined" onChange={(x) => setUser_name(x.target.value)} />
          </Grid>

          <Grid  className={classes.formItem} item>       
            <TextField required id ='email' value={email} label="Email" type='email' variant="outlined" onChange={(x) => setEmail(x.target.value)}/>
          </Grid>

          <Grid className={classes.formItem} item>       
            <TextField  required id='user_password' value={user_password} label="Password" type='password' variant="outlined" onChange={(x) => setUser_password(x.target.value)}/>
          </Grid>

          <Grid className={classes.formItem} item>       
            <TextField required id='confirm_password' value={confirm_password} label="Confirm Password" type='password' variant="outlined" onChange={(x) => setConfirm_password(x.target.value)}/>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() => params.onClick({
              user_name: user_name,
              email: email,
              user_password: user_password,
              confirm_password: confirm_password,
            })}
          >
            Register
          </Button>
        </Grid>
      </ThemeProvider>
    </form>
  );
}
