import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/st-filterscreen/st-filterscreen.jsx";
import StGrid from "./components/st-grid/st-grid.jsx";
import StProvider from "../../components/provider/pvsf-provider.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <StProvider>
      <div id="mainPvsf">
        {isFilterPanelVisble ? (
          <>
            <div id="pvsfFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="pvsfFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="pvsfFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="pvsfFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="pvsfSymbolTranslationGrid">
          <StGrid />
        </div>
      </div>
    </StProvider>
  );
};

export default vepr;
