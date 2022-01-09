import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/vi-dump-filterscreen/vi-dump-filterscreen.jsx";
import ViDumpGrid from "./components/vi-dump-grid/vi-dump-grid.jsx";
import ViDumpProvider from "../../components/provider/vi-dump-provider.jsx";

const ViDump = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <ViDumpProvider>
      <div id="mainViDump">
        {isFilterPanelVisble ? (
          <>
            <div id="viDumpFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="viDumpFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="viDumpFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div
              className="viDumpFilterPanelUnToggle"
              title="Show Filter Panel"
            >
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="viDumpThresholdGrid">
          <ViDumpGrid />
        </div>
      </div>
    </ViDumpProvider>
  );
};

export default ViDump;
