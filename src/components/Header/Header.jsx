import classes from "./Header.module.scss";
import React from "react";
import arrow from "../../assets/icons/double_arrow.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
      <div className={classes.header__bottomWrapper}>
        <p className={classes.header__scroll}>scroll down to see more</p>
        <img className={classes.header__img} src={arrow} alt="arrow-icon" />
      </div>
    </header>
  );
};

export default Header;
