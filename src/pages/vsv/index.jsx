import React, { useState } from "react";

import FilterPanel from "./components/gs-filterscreen/gs-filterscreen.jsx";
import Maintenance from "./components/gs-mainscreen/gs-mainscreen.jsx";
import EditDashboard from "./components/gs-editscreen/gs-editscreen.jsx";
import "./styles.scss";

const Vsv = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const [isEditDashboardVisble, toggleEditDashBoard] = useState(true);
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
        {isEditDashboardVisble ? (
          <>
            <div
              className="editDashboardToggle"
              //onClick={() => toggleEditDashBoard(!isEditDashboardVisble)}
            >
              <p onClick={() => toggleEditDashBoard(!isEditDashboardVisble)}>
                {"^"}
              </p>
            </div>
            <EditDashboard />
          </>
        ) : (
          <div
            className="editDashboardUntoggle"
            onClick={() => toggleEditDashBoard(!isEditDashboardVisble)}
          >
            Edit Dashboard
            <div className="mtToggleIndicator">{"v"}</div>
          </div>
        )}
      </div>
    </div>
  );
};

/*
maintenanceHeaders {
    height: 89%;
}
div#myGrid {
  height:100%
}
#mainVsv .maintenance {

height: 89%;

}
#editMaint, #prsEditMaint {
    height: 100%;
}
*/

export default Vsv;
