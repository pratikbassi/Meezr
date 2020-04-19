import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import {
  Container,
  Typography,
  IconButton,
  Chip,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
// import "./styles.scss";

const useStyles = makeStyles(() => ({
  expand_panel: {
    backgroundColor: theme.palette.primary.light,
    margin: "1em",
    boxShadow: theme.shadows[10],
    borderRadius: "8px",
  },
  expand_summary: {
    margin: 0,
    padding: 0,
  },
  meal: {
    display: "grid",
    gridTemplateAreas:
      '"image title title favorite" "image description description empty" "image stats stats stats"',
    gridTemplateColumns: "20em 1fr 1fr 6em",
    gridTemplateRows: "6em auto 6em",
    gridGap: "1em",
    height: "20em",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "50% 50%",
    gridArea: "image",
    padding: "1em 0.4em",
    borderRadius: "4em",
  },
  favorite: {
    gridArea: "favorite",
  },
  title: {
    gridArea: "title",
    alignSelf: "end",
  },
  description: {
    gridArea: "description",
  },
  ingredients: {
    gridArea: "ingredients",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: '"calories score" "tags tags"',
    gridArea: "stats",
  },
  calories: {
    gridArea: "calories",
  },
  score: {
    gridArea: "score",
  },
  preptime: {
    gridArea: "preptime",
  },
  tags: {
    gridArea: "tags",
    alignSelf: "end",
  },
  cost: {
    gridArea: "cost",
  },
}));

export default function Meal(props) {
  const [state, setState] = useState(props.props);

  console.log("Meal props: ", props.props);
  const classes = useStyles();
  const {
    id,
    image,
    title,
    description,
    user,
    ingredients,
    tags,
    calories,
    score,
    prepTime,
    cost,
    is_favorited,
  } = state;

  useEffect(() => {
    setState(props.props);
  }, []);

  const favItem = () => {
    // const newFavState = is_favorited
    setState((prev) => {
      return { ...prev, is_favorited: is_favorited ? false : true };
    });
  };

  const expanded = true;

  const renderIngredients = () => {
    return (
      <div className={classes.ingredients}>
        <Typography variant="body2">Ingredients here</Typography>
        <Typography variant="body2" className={classes.cost}>
          Approx Cost: {cost}
        </Typography>
        <Typography variant="body2" className={classes.preptime}>
          Prep Time: {prepTime}
        </Typography>
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <ExpansionPanel className={classes.expand_panel}>
        <ExpansionPanelSummary className={classes.expand_summary}>
          <article className={classes.meal}>
            {image.length > 0 ? (
              <img src={image[0].image_url} className={classes.image} />
            ) : (
              <img className={classes.image} />
            )}

            <div className={classes.title}>
              <Typography variant="h5">
                <Link
                  href={"/meal/" + id}
                  color="inherit"
                  className="btn custom-button"
                >
                  {title}
                </Link>
              </Typography>
              <Typography variant="subtitle2">Submitted By {user}</Typography>
            </div>
            <Typography variant="body2" className={classes.description}>
              {description}
            </Typography>
            <div className={classes.stats}>
              <Typography variant="body2" className={classes.calories}>
                Calories: {calories}
              </Typography>
              <Typography variant="body2" className={classes.score}>
                <span>Score: {score}</span>
              </Typography>

              <Typography variant="body2" className={classes.tags}>
                {tags.map((tag) => (
                  <Chip label={tag.category_id} />
                ))}
              </Typography>
            </div>
            <IconButton
              aria-label="favorite"
              className={classes.favorite}
              onClick={() => favItem()}
              size="large"
            >
              {is_favorited ? <Favorite /> : <FavoriteBorder />}
            </IconButton>
          </article>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {expanded ? renderIngredients() : null}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ThemeProvider>
  );
}
