import React, { useContext } from "react";
import FilterAndReset from "./peo-filter-and-reset/peo-filter-and-reset.jsx";
import "./peo-filterscreen.scss";
import Filters from "./peo-filters/peo-filters.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="futuresFilterscreenHeaderWrapper">
        <div className="futuresFilterscreenTitle">Futures:</div>
      </div>
      <Filters></Filters>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filterscreen;
