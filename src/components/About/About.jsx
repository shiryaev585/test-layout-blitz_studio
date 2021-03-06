import React from "react";
import classes from "./About.module.scss";
// import photo from "../../assets/images/jason_wood_15.png";
import arrow from "../../assets/icons/double_arrow_grey.png";

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.about__wrapper}>
          <div className={classes.about__imgBlock}></div>
        {/* <img className={classes.about__img} src={photo} alt="img" /> */}
        <div className={classes.about__textBlock}>
          <h1 className={classes.about__title}>About Me</h1>
          <p className={classes.about__textFirst}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequar.
          </p>
          <p className={classes.about__textSecond}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla paritur.
          </p>
          <h3 className={classes.about__sign}>Jason Wood</h3>
        </div>
      </div>
      <div className={classes.about__bottomWrapper}>
        <p className={classes.about__scroll}>keep scrolling, there is still more to come.</p>
        <img
          className={classes.about__arrowImg}
          src={arrow}
          alt="arrow-icon"
        />
      </div>
    </section>
  );
};

export default About;
