import React, { useContext, useState } from "react";
import "./styles.scss";
import FilterPanel from "./peo-filterscreen/peo-filterscreen.jsx";
import DerivativeGrid from "./peo-grid/grid-modal/grid-modal.jsx";
import PlaceHolderGrid from "./PlaceHolderGrid/PlaceHolderGrid.jsx";
import MyContext from "../../../components/context/peo-context.jsx";
/* import EditCatDahsboard from "./edit-cat-dashboard-grid/edit-cat-dashboard-grid.jsx";
import DividendInfoGrid from "./dividend-info-grid/grid/dividend-info-grid.jsx";
import ExchangeInfoGrid from "./exchange-info-grid/exchange-info-grid.jsx";
import AssociatedProductsGrid from "./associated-products-grid/grid/associated-products-grid.jsx"; */
//import { PriceEditModal } from "./contract-price-editing/grid-modal.jsx";
import ContractPriceEditing from "./contract-price-editing/grid-modal.jsx";
import EditDashboardGrid from "./edit-cat-dashboard-grid/grid-modal/grid-modal.jsx";
const vepr = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  const context = useContext(MyContext);
  const { isDerivativeGridMinimized } = {
    ...context,
    ...context.state.placeHolderState,
  };
  return (
    <div id="mainPeo">
      {isFilterPanelVisble ? (
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
        </>
      )}
      <div id="peoDerivativeGrid">
        <PlaceHolderGrid />
      </div>
      <div className="derivativeGridWrapper">
        <DerivativeGrid />
      </div>
      <div className="contractPriceEditingWrapper">
        <ContractPriceEditing />
      </div>
      <div className="EditDashboardGridWrapper">
        <EditDashboardGrid />
      </div>
    </div>
  );
};

export default vepr;
