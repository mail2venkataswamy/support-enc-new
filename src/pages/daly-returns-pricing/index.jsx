import React, { useState } from "react";
import "./styles.scss";
import Drprovider from "../../components/provider/drp-provider.jsx";
import FilterGrid from "./components/filter-grid/filter-grid.jsx";
import DataGrid from "./components/data-grid/data-grid.jsx";

const ExchangeRates = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
  <Drprovider>
  <div id="mainDrp">
    <FilterGrid></FilterGrid>
    <DataGrid></DataGrid>
    </div>
  </Drprovider>
  )
};

export default ExchangeRates;
