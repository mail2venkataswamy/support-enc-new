import React from "react";
import "./gs-filterscreen.scss";
import ActivityDateRange from "./gs-activity-date-range/gs-activity-date-range.jsx";
import Productinfo from "./gs-product-info/gs-product-info.jsx";
import Flagsstatus from "./gs-flags-status/gs-flags-status.jsx";
import ResetAndButton from "./gs-filter-and-reset/gs-filter-and-reset.jsx";

const filterscreen = () => {
  return (
    <div className="filterPanel left">
      <div className="filterTitleAndToggle">
        <div className="filterHeaderTitle">Goverment Securities</div>
        <div className="filterToggle">{"<<"}</div>
      </div>
      <ActivityDateRange></ActivityDateRange>
      <Productinfo />
      <Flagsstatus />
      <ResetAndButton />
    </div>
  );
};
export default filterscreen;
