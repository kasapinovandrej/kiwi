import React from "react";
import classes from "./button.module.scss";

const Button = ({ data }) => (
  <button className={classes.button}>
    <h3>{data.title}</h3>
    <p>{data.subtitle}</p>
  </button>
);

export default Button;
