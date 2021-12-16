import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/pt-filterscreen/pt-filterscreen.jsx";
import ThresholGrid from "./components/pt-threshold-grid/pt-threshold-grid.jsx";
import AtProvider from "../../components/provider/pics-threshold-provider.jsx";

const ThresholdAlerts = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <AtProvider>
      <div id="mainPt">
        {isFilterPanelVisble ? (
          <>
            <div id="ptFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="ptFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="ptFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="ptFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="ptThresholdGrid">
          <ThresholGrid />
        </div>
      </div>
    </AtProvider>
  );
};

export default ThresholdAlerts;
