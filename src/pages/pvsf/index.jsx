import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/st-filterscreen/st-filterscreen.jsx";
import StGrid from "./components/st-grid/st-grid.jsx";
import StProvider from "../../components/provider/pvsf-provider.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <StProvider>
      <div id="mainSt">
        {isFilterPanelVisble ? (
          <>
            <div id="stFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="stFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="stFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="stFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="stSymbolTranslationGrid">
          <StGrid />
        </div>
      </div>
    </StProvider>
  );
};

export default vepr;
