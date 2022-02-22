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
import ViDump from "./pages/vi-dump/index.jsx";
import St from "./pages/symbol-translation/index.jsx";
import Pvsf from "./pages/pvsf/index.jsx";
import Er from "./pages/exchange-rates/index.jsx";
import Ps from "./pages/publishing-statistics/index.jsx";
import Ir from "./pages/interest-rates/index.jsx";
import Did from "./pages/daily-index-dividents/index.jsx";
import Drp from "./pages/daly-returns-pricing/index.jsx";
import Peo from "./pages/price-editting-options/index.jsx";
import Futures from "./pages/futures/index.jsx";

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
        <Route path="/viDump" element={<ViDump />} />
        <Route path="/st" element={<St />} />
        <Route path="/pvsf" element={<Pvsf />} />
        <Route path="/er" element={<Er />} />
        <Route path="/ps" element={<Ps />} />
        <Route path="/ir" element={<Ir />} />
        <Route path="/did" element={<Did />} />
        <Route path="/drp" element={<Drp />} />
        <Route path="/peo" element={<Peo />} />
        <Route path="/futures" element={<Futures />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
