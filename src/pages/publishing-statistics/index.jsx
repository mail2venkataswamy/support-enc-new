import React, { useState } from "react";
import "./styles.scss";
import FilterPanel from "./components/ps-filters/ps-filters.jsx";
import PsGrid from "./components/tabs/ps-grid/ps-grid.jsx";
import PsProvider from "../../components/provider/publishing-statistics-provider.jsx";
import Tabscontainer from "./components/tabs-container/tabs-container.jsx";
import PsContainer from "./ps-container.jsx";

const PubishingStatistics = () => {
  const [isFilterPanelVisble, toggleFilterPanel] = useState(true);
  return (
    <PsProvider>
    <PsContainer></PsContainer>
    </PsProvider>
  );
};

export default PubishingStatistics;
