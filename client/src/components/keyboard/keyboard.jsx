import React from "react";
import classes from "./keyboard.module.scss";
import Button from "../button/button";
import { buttonsData } from "../../data/buttons-data";

const Keyboard = () => {
  return (
    <section className={classes.keyboard}>
      <div className={classes.buttonsbox}>
        {buttonsData.map((data) => (
          <div className={classes.buttonbox} key={data.title}>
            <Button data={data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
