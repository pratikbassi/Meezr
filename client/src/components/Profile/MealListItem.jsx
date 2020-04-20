import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
import { Link, ListItem, Grid, ButtonBase, Typography } from "@material-ui/core";

export default function MealListItem(props) {
  let mealPhoto = props.mealPhoto
  let mealTitle = props.mealTitle
  let mealId = props.mealId

  return (
    <div id={mealId}>
      <ListItem>
        <ThemeProvider theme={theme}>
          <Grid container direction="row" justify="space-evenly" alignItems="center">
            <ButtonBase>
              <Link to={`/meals/${mealId}`}>
                <Grid item m>
                    <img alt="MealPhoto" src={mealPhoto}/>
                </Grid>
                <Grid item m>
                  <Typography  variant="h5">
                    {mealTitle}
                  </Typography>
                </Grid>
              </Link>
            </ButtonBase>
          </Grid>
        </ThemeProvider>
      </ListItem>
    </div>
  )
}