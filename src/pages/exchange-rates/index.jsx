import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/er-filterscreen/er-filterscreen.jsx";
import MaintenanceGrid from "./components/er-maintenance-grid/er-maintenance-grid.jsx";
import ErProvider from "../../components/provider/exchange-rates-provider.jsx";

const ExchangeRates = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <ErProvider>
      <div id="mainEr">
        {isFilterPanelVisble ? (
          <>
            <div id="erFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="erFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="erFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="erFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="erGrid">
          <MaintenanceGrid></MaintenanceGrid>
        </div>
      </div>
    </ErProvider>
  );
};

export default ExchangeRates;
