import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/vepr-filterscreen/vepr-filterscreen.jsx";
import ThresholGrid from "./components/vepr-threshold-grid/vepr-threshold-grid.jsx";
import PraProvider from "../../components/provider/vepr-provider.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <PraProvider>
      <div id="mainVepr">
        {isFilterPanelVisble ? (
          <>
            <div id="veprFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="veprFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="veprFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="veprFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="veprThresholdGrid">
          <ThresholGrid />
        </div>
      </div>
    </PraProvider>
  );
};

export default vepr;
