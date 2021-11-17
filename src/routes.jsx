import React from "react";
import { Route, Switch, BrowserRouter, Link, Routes } from "react-router-dom";
import Valued from "./pages/valued/index.jsx";
import Gov from "./pages/gov/index.jsx";
//import { Security } from "@okta/okta-react";
import NavBar from "../src/components/navbar/nav-bar.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Valued />} />
        <Route path="/gov" element={<Gov />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
