import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import PeoGrid from "./peo-grid/peo-grid.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/futures-context.jsx";
import EditCatDahsboard from "./edit-cat-dashboard-grid/edit-cat-dashboard-grid.jsx";
import DeliverablePriceEditGrid from "./deliverable-price-edit-grid/deliverable-price-edit-grid.jsx";

const Futures = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const {
    showDerivativeGrid,
    showEditGridDashBoard,
    showPlaceHolderGrid,
    showDeliverablePriceEditGrid,
  } = {
    ...context.state,
  };
  return (
    <div id="mainFutures">
      {showPlaceHolderGrid ? (
        isFilterPanelVisble ? (
          <>
            <div id="futuresFilterscreen" className="left">
              <FilterPanel />
            </div>
            <div
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
              className="futuresFilterPanelToggle"
              title="Hide Filter Panel"
            >
              <p>{"<<"}</p>
            </div>
            <div id="futuresPlaceHolderGrid">
              <PlaceHolderGrid />
            </div>
          </>
        ) : (
          <>
            <div
              className="futuresFilterPanelUnToggleWrapper"
              onClick={() => toggleFilterPanel(!isFilterPanelVisble)}
            >
              <div
                className="futuresFilterPanelUnToggle"
                title="Show Filter Panel"
              >
                <div className="toggleIndicator">{">"}</div>
                <p>FILTER PANEL</p>
              </div>
            </div>
            <div id="futuresPlaceHolderGrid">
              <PlaceHolderGrid />
            </div>
          </>
        )
      ) : (
        <></>
      )}
      {showDerivativeGrid ? (
        <div id="futuresDerivativeGrid">
          <PeoGrid />
        </div>
      ) : (
        <></>
      )}
      {showEditGridDashBoard ? (
        <div id="futuresPlaceHolderGrid">
          <EditCatDahsboard></EditCatDahsboard>{" "}
        </div>
      ) : (
        <></>
      )}
      {showDeliverablePriceEditGrid ? (
        <div id="futuresPlaceHolderGrid">
          <EditCatDahsboard></EditCatDahsboard>{" "}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Futures;
