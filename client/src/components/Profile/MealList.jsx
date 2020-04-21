import React from "react";

<<<<<<< HEAD
import MealListItem from "../Profile/MealListItem"
import { Typography, List, ListItem, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    justifyContent:"center"
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



export default function MealList(props) {
  const classes = useStyles();
  const strings = ["Aren't you hungry?", "Add some meals!", "Meez'r is based on 'Mise en place'!", "It's a good day to make a meal!", "Time to break out the cookbook!"]

  function MakeList() {
    return(
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {props.info.map((item) => {
          return (<Grid item > 
            <MealListItem key={item.id } image_url={item.image_url} title={item.title} id={item.id} category={item.category}/>
          </Grid>)
        })}
      </Grid>
    )

  }
    if(props.info) {
      console.log(props.info)
      return (<MakeList/>)
    } else {
      return (
          
              <Typography  variant="h5">
                {strings[Math.floor(Math.random() * strings.length)]}
              </Typography>


      )
=======
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";

import MealListItem from "../Profile/MealListItem";
import { Typography } from "@material-ui/core";

export default function MealList(props) {
  const [state, useState] = React.useState(null);
  const strings = [
    "Aren't you hungry?",
    "Add some meals!",
    "Meez'r is based on 'Mise en place'!",
    "It's a good day to make a meal!",
    "Time to break out the cookbook!",
  ];

  function CheckList() {
    if (props.info) {
      return (
        <ThemeProvider theme={theme}>
          {props.info.map((item) => {
            return (
              <MealListItem
                mealPhoto={item.mealPhoto}
                mealTitle={item.mealTitle}
                mealId={item.mealId}
              />
            );
          })}
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <Typography variant="h5">{strings.sample}</Typography>
        </ThemeProvider>
      );
>>>>>>> 85c7688f9a1dc32cfc83260f8a52cce3ed6e9420
    }
  }
<<<<<<< HEAD
=======

  return <CheckList />;
}
>>>>>>> 85c7688f9a1dc32cfc83260f8a52cce3ed6e9420
