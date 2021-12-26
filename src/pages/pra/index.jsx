import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/pra-filterscreen/pra-filterscreen.jsx";
import ThresholGrid from "./components/pra-threshold-grid/pra-threshold-grid.jsx";
import PraProvider from "../../components/provider/pra-provider.jsx";

const ThresholdAlerts = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <PraProvider>
      <div id="mainPra">
        {isFilterPanelVisble ? (
          <>
            <div id="praFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="praFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="praFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="praFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="praThresholdGrid">
          <ThresholGrid />
        </div>
      </div>
    </PraProvider>
  );
};

export default ThresholdAlerts;
