import React from "react";
import { Route, Switch, BrowserRouter, Link, NavLink } from "react-router-dom";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <ul className="wrapper">
        <li>
          <NavLink isActive={true} exact to="/">
            Valued
          </NavLink>
        </li>
        {""}
        <li>
          <NavLink to="/Gov" isActive={true}>
            Gov
          </NavLink>
        </li>
        <li>
          <NavLink to="/Prde" isActive={true}>
            PRDE
          </NavLink>
        </li>
        <li>
          <NavLink to="/Vsv" isActive={true}>
            VSV
          </NavLink>
        </li>
        <li>
          <NavLink to="/prs" isActive={true}>
            PRS
          </NavLink>
        </li>
        <li>
          <NavLink to="/mt" isActive={true}>
            MT
          </NavLink>
        </li>
        <li>
          <NavLink to="/ta" isActive={true}>
            TA
          </NavLink>
        </li>
        <li>
          <NavLink to="/pt" isActive={true}>
            PT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
