import React, { useContext } from "react";
import FilterAndReset from "./st-filter-and-reset/st-filter-and-reset.jsx";
import "./st-filterscreen.scss";
import ProductInfo from "./st-product-info/st-product-info.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="pvsfFilterscreenHeaderWrapper">
        <div className="pvsfFilterscreenTitle">
          Primary Vendor Selection Filter:
        </div>
      </div>
      <ProductInfo></ProductInfo>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filterscreen;
