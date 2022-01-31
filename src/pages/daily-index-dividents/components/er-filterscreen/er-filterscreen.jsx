import React from "react";
import FilterAndReset from "./er-filter-and-reset/er-filter-and-reset.jsx";
import "./er-filterscreen.scss";
import Filters from "./er-filters/er-filters.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="didFilterscreenHeaderWrapper">
        <div className="didFilterscreenTitle">Daily Index Dividends:</div>
      </div>
      <Filters></Filters>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filterscreen;
