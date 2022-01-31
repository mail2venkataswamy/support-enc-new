import React, { useState, useContext } from "react";
import "./styles.scss";
import FilterPanel from "./components/ps-filters/ps-filters.jsx";
import Tabscontainer from "./components/tabs-container/tabs-container.jsx";
import MyContext from "../../components/context/publishing-statistics-context.jsx";

const PubishingStatistics = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const {
  activeTab
  } = {
    ...context.state,
  };
  return (
      <div id="mainPs">
        {activeTab==="tab-1"?<></>:isFilterPanelVisble ? (
          <>
            <div id="psFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              onKeyDown={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="psFilterPanelToggle"
              title="Hide Filter Panel"
              role="button"
              tabIndex={0}
              id="psFilterPanelToggle"
            >
              <p>{"<<"}</p>
            </div>
          </>
        ) : (
          <div
            className="psFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div
              className="psFilterPanelUnToggle"
              title="Show Filter Panel"
            >
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
        )}
        <div id="psGrid">
        <div className="psGridHeader">Publishing Statistics</div>
          <Tabscontainer />
        </div>
      </div>
  );
};

export default PubishingStatistics;
