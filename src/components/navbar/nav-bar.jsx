import React from "react";
import { Route, Switch, BrowserRouter, Link, NavLink } from "react-router-dom";
import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <ul className="wrapper">
        <li className="pages">
          <NavLink isActive={true} exact to="/">
            Valued
          </NavLink>
        </li>
        {""}
        <li className="pages">
          <NavLink to="/Gov" isActive={true}>
            Gov
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/Prde" isActive={true}>
            PRDE
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/Vsv" isActive={true}>
            VSV
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/prs" isActive={true}>
            PRS
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/mt" isActive={true}>
            MT
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/ta" isActive={true}>
            TA
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/pt" isActive={true}>
            PT
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/pra" isActive={true}>
            PRA
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/vepr" isActive={true}>
            VEPR
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/viDump" isActive={true}>
            VIDUMP
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/st" isActive={true}>
            ST
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/pvsf" isActive={true}>
            PVSF
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/er" isActive={true}>
            ER
          </NavLink>
        </li>
        <li className="pages">
          <NavLink to="/ps" isActive={true}>
            PS
            </NavLink>
          <NavLink to="/ir" isActive={true}>
            IR
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
