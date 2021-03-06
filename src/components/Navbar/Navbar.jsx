import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="navbar__item" to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__item" to="/about">
              about me
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__item" to="/portfolio">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__item" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
        <div className="line"></div>
      </nav>

      <div className="mobileMenu">
        <input className="mobileMenu__toggle" id="mobileMenu__toggle" type="checkbox" />
        <label className="mobileMenu__btn" htmlFor="mobileMenu__toggle">
          <span className="mobileMenu__menu">∞ menu</span>
        </label>

        <ul className="mobileMenu__wrapper">
          <li>
            <NavLink className="mobileMenu__item" to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink className="mobileMenu__item" to="/about">
              about me
            </NavLink>
          </li>
          <li>
            <NavLink className="mobileMenu__item" to="/portfolio">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="mobileMenu__item" to="/contact">
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
