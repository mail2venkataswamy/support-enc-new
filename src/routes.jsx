import React from "react";
import { Route, Switch, BrowserRouter, Link, Routes } from "react-router-dom";
import Valued from "./pages/valued/index.jsx";
import Gov from "./pages/gov/index.jsx";
//import { Security } from "@okta/okta-react";
import NavBar from "../src/components/navbar/nav-bar.jsx";
import Prde from "./pages/prde/index.jsx";
import Vsv from "./pages/vsv/index.jsx";
import Prs from "./pages/prs/index.js";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Valued />} />
        <Route path="/gov" element={<Gov />} />
        <Route path="/prde" element={<Prde />} />
        <Route path="/Vsv" element={<Vsv />} />
        <Route path="/prs" element={<Prs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
