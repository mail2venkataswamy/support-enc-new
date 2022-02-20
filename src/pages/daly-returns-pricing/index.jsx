import React, { useState } from "react";
import "./styles.scss";
import Drprovider from "../../components/provider/drp-provider.jsx";

const ExchangeRates = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return <Drprovider></Drprovider>;
};

export default ExchangeRates;
