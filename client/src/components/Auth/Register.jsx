import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Input } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));




export default function RegisterForm(params) {
  const classes = useStyles();


  
  return (
    <form> 
      <Grid container>
        <Grid item>       
          <TextField required id='user_name' label="Full Name" variant="outlined" />
        </Grid>

        <Grid item>       
          <TextField required id ='email' label="Email" type='email' variant="outlined" />
        </Grid>

        <Grid item>       
          <TextField  required id='user_password' label="Password" type='password' variant="outlined" />
        </Grid>

        <Grid item>       
          <TextField required id='confirm_password' label="Confirm Password" type='password' variant="outlined" />
        </Grid>

        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={params.onClick}
        >
          Register
        </Button>
      </Grid>
    </form>
  );
}
