import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/er-filterscreen/er-filterscreen.jsx";
import MaintenanceGrid from "./components/er-maintenance-grid/er-maintenance-grid.jsx";
import ErProvider from "../../components/provider/daily-index-dividend-provider.jsx";
import EditCatDashboardGrid from "./components/er-edit-cat-dashboard-grid/er-edit-cat-dashboard-grid.jsx";

const ExchangeRates = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <ErProvider>
      <div id="mainDid">
        {isFilterPanelVisble ? (
          <>
            <div id="didFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="didFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="didFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="didFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="didGrid">
          <MaintenanceGrid></MaintenanceGrid>
          <EditCatDashboardGrid></EditCatDashboardGrid>
        </div>
      </div>
    </ErProvider>
  );
};

export default ExchangeRates;
