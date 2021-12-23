import React, { useState } from "react";
import "./delivery-class-maint.scss";
import FilterPanel from "./components/filterscreen/filterscreen.jsx";
import ThresholGrid from "./components/mt-threshold-grid/mt-threshold-grid.jsx";
import MtProvider from "../../../../../../src/components/provider/maint-tools-provider.jsx";

const DeliveryClassMaintenance = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <MtProvider>
      <div id="mainDmt">
        {isFilterPanelVisble ? (
          <>
            <div id="mtFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="mtFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="mtFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="mtFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="mtThresholdGrid">
          <ThresholGrid />
        </div>
      </div>
    </MtProvider>
  );
};

export default DeliveryClassMaintenance;
