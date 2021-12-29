import React, { useContext } from "react";
import PropTypes from "prop-types";
import FilterAndReset from "./vepr-filter-and-reset/vepr-filter-and-reset.jsx";
import "./vepr-filterscreen.scss";
import PriceSource from "./vepr-price-source/vepr-price-source.jsx";
import ProductInfo from "./vepr-product-info/vepr-product-info.jsx";
import MyContext from "../../../../components/context/vepr-context.jsx";
import RestrictionDate from "./vepr-date-range/vepr-date-range.jsx";
const Filterscreen = () => {
  const { onToggleFilterScreen } = useContext(MyContext);
  return (
    <>
      <div className="praFilterscreenHeaderWrapper">
        <div className="praFilterscreenTitle">
          Vendor/Exchange Price Restriction Filter:
        </div>
      </div>
      <ProductInfo></ProductInfo>
      <PriceSource></PriceSource>
      <FilterAndReset></FilterAndReset>
      <RestrictionDate></RestrictionDate>
    </>
  );
};

Filterscreen.propTypes = {};
Filterscreen.defaultProps = {};
export default Filterscreen;
