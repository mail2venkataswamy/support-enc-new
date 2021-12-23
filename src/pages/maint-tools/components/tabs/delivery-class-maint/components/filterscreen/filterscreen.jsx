import React from "react";
import PropTypes from "prop-types";
import FilterAndReset from "./mt-filter-and-reset/mt-filter-and-reset.jsx";
import "./filterscreen.scss";
import ProductInfo from "./mt-product-info/mt-product-info.jsx";
const Filterscreen = () => {
  return (
    <>
      <div className="mtFilterscreenHeaderWrapper">
        <div className="mtFilterscreenTitle">
          Delivery Class Maintenance Filter:
        </div>
      </div>
      <ProductInfo></ProductInfo>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

Filterscreen.propTypes = {};
Filterscreen.defaultProps = {};
export default Filterscreen;
