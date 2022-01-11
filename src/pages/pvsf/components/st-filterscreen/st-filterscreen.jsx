import React, { useContext } from "react";
import FilterAndReset from "./st-filter-and-reset/st-filter-and-reset.jsx";
import "./st-filterscreen.scss";
import ProductInfo from "./st-product-info/st-product-info.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="stFilterscreenHeaderWrapper">
        <div className="stFilterscreenTitle">Symbol Translation Filter:</div>
      </div>
      <ProductInfo></ProductInfo>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filterscreen;
