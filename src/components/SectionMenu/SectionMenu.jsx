import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionMenu.module.scss";

const SectionMenu = () => {
  return (
    <nav>
      <ul className={classes.menu}>
        <li>
          <NavLink className={classes.menu__item} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.menu__item} to="/about">
            about me
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.menu__item} to="/portfolio">
            portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.menu__item} to="/contact">
            contact
          </NavLink>
        </li>
      </ul>
      <div className={classes.line}></div>
    </nav>
  );
};

export default SectionMenu;
