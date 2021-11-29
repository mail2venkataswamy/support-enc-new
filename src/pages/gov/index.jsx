import React from "react";

import FilterPanel from "./components/gs-filterscreen/gs-filterscreen.jsx";
import Maintenance from "./components/gs-mainscreen/gs-mainscreen.jsx";
import EditDashboard from "./components/gs-editscreen/gs-editscreen.jsx";
import "./styles.scss";
const Gov = () => {
  return (
    <div id="mainGov">
      <FilterPanel />
      <div id="editMaint">
        <Maintenance />
        <EditDashboard />
      </div>
    </div>
  );
};

export default Gov;
