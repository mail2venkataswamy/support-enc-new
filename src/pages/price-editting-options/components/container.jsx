import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import PeoGrid from "./peo-grid/peo-grid.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/peo-context.jsx";
import EditCatDahsboard from "./edit-cat-dashboard-grid/edit-cat-dashboard-grid.jsx";
import DividendInfoGrid from "./dividend-info-grid/dividend-info-grid.jsx";
import ExchangeInfoGrid from "./exchange-info-grid/exchange-info-grid.jsx";
import AssociatedProductsGrid from "./associated-products-grid/associated-products-grid.jsx";

const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const {
    showDerivativeGrid,
    showEditGridDashBoard,
    showPlaceHolderGrid,
    showDividendInfoGrid,
    showExchangeInfogrid,
    showAssociatedProductsGrid,
  } = {
    ...context.state,
  };
  return (
    <div id="mainPeo">
      {showPlaceHolderGrid ? (
        showDerivativeGrid ? (
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
        )
      ) : (
        <></>
      )}
      {showEditGridDashBoard ? (
        <div id="peoPlaceHolderGrid">
          <EditCatDahsboard></EditCatDahsboard>{" "}
        </div>
      ) : (
        <></>
      )}
      {showDividendInfoGrid ? (
        <div id="peoPlaceHolderGrid">
          <DividendInfoGrid></DividendInfoGrid>{" "}
        </div>
      ) : (
        <></>
      )}
      {showExchangeInfogrid ? (
        <div id="peoPlaceHolderGrid">
          <ExchangeInfoGrid></ExchangeInfoGrid>{" "}
        </div>
      ) : (
        <></>
      )}
      {showAssociatedProductsGrid ? (
        <div id="peoPlaceHolderGrid">
          <AssociatedProductsGrid></AssociatedProductsGrid>{" "}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default vepr;
