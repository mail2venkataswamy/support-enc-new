import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import PeoGrid from "./peo-grid/peo-grid.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/futures-context.jsx";
import EditCatDahsboard from "./edit-cat-dashboard-grid/edit-cat-dashboard-grid.jsx";
import DeliverablePriceEditGrid from "./deliverable-price-edit-grid/deliverable-price-edit-grid.jsx";
import DividendInfoGrid from "./dividend-info-grid/dividend-info-grid.jsx";
import ExchangeInfoGrid from "./exchange-info-grid/exchange-info-grid.jsx";

const Futures = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const {
    showDerivativeGrid,
    showEditGridDashBoard,
    showPlaceHolderGrid,
    showDeliverablePriceEditGrid,
    showDividendInfoGrid,
    showExchangeInfogrid,
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
          <DeliverablePriceEditGrid></DeliverablePriceEditGrid>{" "}
        </div>
      ) : (
        <></>
      )}
      {showDividendInfoGrid ? (
        <div id="futuresPlaceHolderGrid">
          <DividendInfoGrid></DividendInfoGrid>{" "}
        </div>
      ) : (
        <></>
      )}
      {showExchangeInfogrid ? (
        <div id="futuresPlaceHolderGrid">
          <ExchangeInfoGrid></ExchangeInfoGrid>{" "}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Futures;
