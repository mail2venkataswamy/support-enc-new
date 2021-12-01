import React from "react";

import FilterPanel from "./components/gs-filterscreen/gs-filterscreen.jsx";
import Maintenance from "./components/gs-mainscreen/gs-mainscreen.jsx";
import EditDashboard from "./components/gs-editscreen/gs-editscreen.jsx";

const Vsv = () => {
  return (
    <div id="mainVsv">
      <FilterPanel />
      <div id="editMaint">
        <Maintenance />
        <EditDashboard />
      </div>
    </div>
  );
};

export default Vsv;
