import React, { useContext } from "react";
import "./prs-filterscreen.scss";
import PrsReportingType from "./prs-report-type/prs-report-type.jsx";
import Dates from "./prs-dates/prs-dates.jsx";
import FilterAndReset from "./prs-filter-and-reset/prs-filter-and-reset.jsx";
import PriceEditCatStats from "./edit-cat-stats/edit-cat-stats.jsx";
import PrsContext from "../../../../components/context/prs-context";
import PriceEditStats from "./price-edit-stats/price-edit-stats.jsx";
import Exchange from "./prs-exchange/prs-exchange.jsx";

const FilterScreen = () => {
  const context = useContext(PrsContext);
  const { showEditCatStats, showPriceEditStats, showPriceRuntimeStats } = {
    ...context.state.filterPanelData,
  };
  return (
    <div className="prsFilterPanel left">
      <div className="prsFilterTitleAndToggle">
        <div className="prsFilterHeaderTitle">STATISTICS FILTER</div>
        <PrsReportingType></PrsReportingType>
        <Dates></Dates>
        {showEditCatStats ? <PriceEditCatStats></PriceEditCatStats> : <></>}
        {showPriceEditStats ? <PriceEditStats></PriceEditStats> : <></>}
        {showPriceRuntimeStats ? <Exchange></Exchange> : <></>}
        <FilterAndReset></FilterAndReset>
      </div>
    </div>
  );
};
export default FilterScreen;
