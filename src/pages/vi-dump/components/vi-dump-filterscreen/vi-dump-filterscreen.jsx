import React, { useContext } from "react";
import PropTypes from "prop-types";
import FilterAndReset from "./vi-dump-filter-and-reset/vi-dump-filter-and-reset.jsx";
import "./vi-dump-filterscreen.scss";
import ViId from "./vi-id/vi-id.jsx";
import ProductInfo from "./vi-dump-product-info/vi-dump-product-info.jsx";
import MyContext from "../../../../components/context/vi-dump-context.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="viDumpFilterscreenHeaderWrapper">
        <div className="viDumpFilterscreenTitle">VI Dump Filter</div>
      </div>
      <ViId></ViId>
      <ProductInfo></ProductInfo>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filterscreen;
