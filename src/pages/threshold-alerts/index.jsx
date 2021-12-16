import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/filterscreen/filterscreen.jsx";
import ThresholGrid from "./components/ta-threshold-grid/ta-threshold-grid.jsx";
import AtProvider from "../../components/provider/threshold-alerts-provider.jsx";

const ThresholdAlerts = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <AtProvider>
      <div id="mainTa">
        {isFilterPanelVisble ? (
          <>
            <div id="taFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="taFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="taFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="taFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="taThresholdGrid">
          <ThresholGrid />
        </div>
      </div>
    </AtProvider>
  );
};

export default ThresholdAlerts;
