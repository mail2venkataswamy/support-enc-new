import React, { useState } from "react";

import FilterPanel from "./components/gs-filterscreen/gs-filterscreen.jsx";
import Maintenance from "./components/gs-mainscreen/gs-mainscreen.jsx";
import EditDashboard from "./components/gs-editscreen/gs-editscreen.jsx";
import "./styles.scss";

const Vsv = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <div id="mainVsv">
      {isFilterPanelVisble ? (
        <>
          <FilterPanel></FilterPanel>
          <div
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
            className="vsvFilterPanelToggle"
            title="Hide Filter Panel"
          >
            <p>{"<<"}</p>
          </div>
        </>
      ) : (
        <div
          className="vsvFilterPanelUnToggleWrapper"
          onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
        >
          <div className="vsvFilterPanelUnToggle" title="Show Filter Panel">
            <div className="toggleIndicator">{">"}</div>
            <p>FILTER PANEL</p>
          </div>
        </div>
      )}
      <div id="editMaint">
        <Maintenance />
        <EditDashboard />
      </div>
    </div>
  );
};

export default Vsv;
