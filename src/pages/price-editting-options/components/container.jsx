import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import PeoGrid from "./peo-grid/peo-grid.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/peo-context.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const { showDerivativeGrid } = { ...context.state };
  return (
    <div id="mainPeo">
      {showDerivativeGrid ? (
        <div id="peoDerivativeGrid">
          <PeoGrid />
        </div>
      ) : isFilterPanelVisble ? (
        <>
          <div id="peoFilterscreen" className="left">
            <FilterPanel />
          </div>
          <div
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
            className="peoFilterPanelToggle"
            title="Hide Filter Panel"
          >
            <p>{"<<"}</p>
          </div>
          <div id="peoPlaceHolderGrid">
            <PlaceHolderGrid />
          </div>
        </>
      ) : (
        <>
          <div
            className="peoFilterPanelUnToggleWrapper"
            onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
          >
            <div className="peoFilterPanelUnToggle" title="Show Filter Panel">
              <div className="toggleIndicator">{">"}</div>
              <p>FILTER PANEL</p>
            </div>
          </div>
          <div id="peoPlaceHolderGrid">
            <PlaceHolderGrid />
          </div>
        </>
      )}
    </div>
  );
};

export default vepr;
