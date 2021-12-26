import React from "react";
import { Route, Switch, BrowserRouter, Link, Routes } from "react-router-dom";
import Valued from "./pages/valued/index.jsx";
import Gov from "./pages/gov/index.jsx";
//import { Security } from "@okta/okta-react";
import NavBar from "../src/components/navbar/nav-bar.jsx";
import Prde from "./pages/prde/index.jsx";
import Vsv from "./pages/vsv/index.jsx";
import Prs from "./pages/prs/index.js";
import Mt from "./pages/maint-tools/index.jsx";
import Ta from "./pages/threshold-alerts/index.jsx";
import Pt from "./pages/pics-thresholds/index.jsx";
import Pra from "./pages/pra/index.jsx";
import Vepr from "./pages/vepr/index.jsx";

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
        <Route path="/Mt" element={<Mt />} />
        <Route path="/ta" element={<Ta />} />
        <Route path="/pt" element={<Pt />} />
        <Route path="/pra" element={<Pra />} />
        <Route path="/vepr" element={<Vepr />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
