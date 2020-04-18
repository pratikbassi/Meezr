import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, IconButton, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
// import "./styles.scss";

const useStyles = makeStyles({
  meal: {
    display: "grid",
    "grid-template-areas": '"image content favorite" "image content empty"',
    "grid-template-columns": "2fr 7fr 1fr",
    "grid-template-rows": "4em minmax(20em, 30vh)",
    "background-color": "red",
  },
  image: {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    "object-position": "50% 50%",
    "grid-area": "image",
  },
  favorite: {
    "grid-area": "favorite",
  },
  content: {
    "grid-area": "content",
  },
});

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

  return (
    <article className={classes.meal}>
      {image.length > 0 ? (
        <img src={image[0].image_url} className={classes.image}></img>
      ) : null}

      <section className={classes.content}>
        <Typography variant="h3">
          <Link to={"/meal/" + id} className="btn custom-button">
            {title}
          </Link>
        </Typography>
        <Typography variant="subtitle1">Submitted By: {user}</Typography>
        <Typography variant="body2" paragraph={true}>
          <span>{description}</span>
          <br />
          <span>Calories{calories}</span>
          <br />
          <span>Score: {score}</span>
          <br />
          <span>{description}</span>
          <br />
          <span>Prep Time: {prepTime}</span>
          <br />
          <span>Estimated Cost: {cost}</span>
          <br />

          {tags.map((tag) => (
            <Chip label={tag.category_id} />
          ))}
        </Typography>
      </section>
      <IconButton
        aria-label="favorite"
        className={classes.favorite}
        onClick={() => favItem()}
      >
        {is_favorited ? <Favorite /> : <FavoriteBorder />}
      </IconButton>
    </article>
  );
}
