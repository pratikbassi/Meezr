import React, { useState } from "react";
import { Container } from "@material-ui/core";
// import "./styles.scss";

export default function Meal(props) {
  console.log(props);
  return (
    <Container>
      <article>
        this is a single meal
        <div>this is a div for image placement</div>
      </article>
    </Container>
  );
}
