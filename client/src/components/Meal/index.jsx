import React, { useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import "./styles.scss";

const useStyles = makeStyles({
  meal: {
    display: "grid",
    "grid-template-areas": '"image content favorite" "image content favorite"',
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
  console.log(props.props);
  const classes = useStyles();
  const { image, title, description } = props.props;
  return (
    <article className={classes.meal}>
      <img src={image} className={classes.image}></img>
      <section className={classes.content}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="p">{description}</Typography>
      </section>
    </article>
  );
}
