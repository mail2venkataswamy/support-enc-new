import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import PeoGrid from "../components/peo-grid/grid-modal/grid-modal.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/futures-context.jsx";
import EditCatDahsboard from "../components/edit-cat-dashboard-grid/grid-modal/grid-modal.jsx";
import DeliverablePriceEditGrid from "../components/deliverable-price-edit-grid/grid-modal/grid-modal.jsx";
import DividendInfoGrid from "../components/dividend-info-grid/grid-modal/grid-modal.jsx";
import ExchangeInfoGrid from "../components/exchange-info-grid/grid-modal/grid-modal.jsx";
import ContractPriceEditing from "./contract-price-editing/grid-modal.jsx";

const Futures = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const { showPlaceHolderGrid } = {
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
              onKeyDown={() => toggleFilterPanel(!isFilterPanelVisble)}
              role="button"
              tabIndex={0}
              id="futuresFilterPanelToggle"
            >
              <p>{"<<"}</p>
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
                onKeyDown={() => toggleFilterPanel(!isFilterPanelVisble)}
                role="button"
                tabIndex={0}
                id="futuresFilterPanelToggle"
              >
                <div className="toggleIndicator">{">"}</div>
                <p>FILTER PANEL</p>
              </div>
            </div>
          </>
        )
      ) : (
        <></>
      )}
      <div id="futuresPlaceHolderGrid">
        <PlaceHolderGrid />
      </div>
      <PeoGrid />
      <DividendInfoGrid></DividendInfoGrid>
      <DeliverablePriceEditGrid></DeliverablePriceEditGrid>
      <ExchangeInfoGrid></ExchangeInfoGrid>
      <EditCatDahsboard></EditCatDahsboard>
      <ContractPriceEditing />
    </div>
  );
};

export default Futures;
