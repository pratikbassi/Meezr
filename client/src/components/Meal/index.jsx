import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Typography,
  IconButton,
  Chip,
  Link,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  Favorite,
  FavoriteBorder,
  ExpandMore,
  Share,
} from "@material-ui/icons";
import clsx from "clsx";
import { Skeleton } from "@material-ui/lab";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "theme";
// import "./styles.scss";

import Details from "./Details";

const useStyles = makeStyles(() => ({
  meal: {
    display: "grid",
    gridTemplateAreas:
      '"image title" "image content" "image share" "collapse collapse"',
    gridTemplateColumns: "20em auto",
    gridTemplateRows: "6em auto auto auto",
    width: "100%",
    margin: "1em",
    boxShadow: theme.shadows[2],
    "&:hover": {
      boxShadow: theme.shadows[10],
    },
  },
  title: {
    gridArea: "title",
    alignSelf: "end",
  },
  image: {
    gridArea: "image",
    height: "20em",
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto auto auto",
    gridTemplateAreas: '"description description" "calories score" "tags tags"',
    gridArea: "content",
  },
  description: {
    gridArea: "description",
  },
  calories: {
    gridArea: "calories",
  },
  tags: {
    gridArea: "tags",
    alignSelf: "end",
  },
  score: {
    gridArea: "score",
  },
  share: {
    gridArea: "share",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 10fr",
    gridTemplateRows: "auto",
  },
  expandIcon: {
    justifySelf: "end",
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  collapse: {
    gridArea: "collapse",
  },
}));

export default function Meal(props) {
  const [state, setState] = useState(props.props);
  // console.log("Meal props: ", props.props);
  const classes = useStyles();
  const {
    id,
    image,
    title,
    description,
    user,
    tags,
    calories,
    score,
    is_favorited,
  } = state;

  useEffect(() => {
    setState(props.props);
  }, [props.props]);

  const [expanded, setExpanded] = useState(props.props.is_expanded || false);

  const favItem = () => {
    // const newFavState = is_favorited
    setState((prev) => {
      return { ...prev, is_favorited: is_favorited ? false : true };
    });
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={theme}>
      <Card variant="outlined" className={classes.meal}>
        <CardMedia
          className={classes.image}
          image={image.length > 0 ? image[0].image_url : "/default-meal.png"}
          title={title}
        />
        <CardHeader
          className={classes.title}
          title={
            <Link
              component={RouterLink}
              to={"/meals/" + id}
              color="inherit"
              className="btn custom-button"
            >
              {title}
            </Link>
          }
          subheader={`Submitted By ${user}`}
        />
        <CardContent className={classes.content}>
          <Typography variant="body2" className={classes.description}>
            {description}
          </Typography>

          <Typography variant="body2" className={classes.calories}>
            Calories: {calories}
          </Typography>
          <Typography variant="body2" className={classes.score}>
            <span>Score: {score}</span>
          </Typography>

          <Typography variant="body2" className={classes.tags}>
            {tags.map((tag) => (
              <Chip label={tag.category} />
            ))}
          </Typography>
        </CardContent>
        <CardActions className={classes.share}>
          <IconButton
            aria-label="favorite"
            className={classes.favorite}
            onClick={() => favItem()}
          >
            {is_favorited ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <IconButton
            className={clsx(classes.expandIcon, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse className={classes.collapse} in={expanded} timeout="auto">
          <CardContent>
            {expanded && (
              <Details
                className={classes.ingredients}
                props={props}
                state={state}
              />
            )}
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
