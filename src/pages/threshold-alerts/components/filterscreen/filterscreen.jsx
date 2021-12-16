import React from "react";
import PropTypes from "prop-types";
import FilterAndReset from "../../../threshold-alerts/components/filterscreen/at-filter-and-reset/at-filter-and-reset.jsx";
import "./filterscreen.scss";
import PriceSource from "./ta-price-source/ta-price-source.jsx";
import ProductInfo from "./ta-product-info/ta-product-info.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="atFilterscreenHeaderWrapper">
        <div className="atFilterscreenTitle">Threshold Alerts Filter</div>
        {/*   <div className="atToggle">{"<<"}</div> */}
      </div>
      <PriceSource></PriceSource>
      <ProductInfo></ProductInfo>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

Filterscreen.propTypes = {};
Filterscreen.defaultProps = {};
export default Filterscreen;
