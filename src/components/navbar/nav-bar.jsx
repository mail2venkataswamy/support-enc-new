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
      </ul>
    </div>
  );
};

export default NavBar;
