import React from "react";
import classes from "./display.module.scss";

const Display = (props) => {
  return (
    <section className={classes.display}>
      <div className={classes.number}>
        {props.inputNumber}
      </div>
      <div className={classes.feedback}>
        <h2>{props.feedback}</h2>
      </div>
      <div className={classes.combinations}>
        {props.combinations.map((el) => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </section>
  );
};

export default Display;

