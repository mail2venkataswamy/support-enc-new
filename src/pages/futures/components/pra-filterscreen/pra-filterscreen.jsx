import React, { useContext } from "react";
import PropTypes from "prop-types";
import FilterAndReset from "./pra-filter-and-reset/pra-filter-and-reset.jsx";
import "./pra-filterscreen.scss";
import PriceSource from "./pra-price-source/pra-price-source.jsx";
import ProductInfo from "./pra-product-info/pra-product-info.jsx";
import MyContext from "../../../../components/context/pra-context.jsx";
const Filterscreen = () => {
  const { onToggleFilterScreen } = useContext(MyContext);
  return (
    <>
      <div className="praFilterscreenHeaderWrapper">
        <div className="praFilterscreenTitle">Repository Price Adjustments</div>
      </div>
      <ProductInfo></ProductInfo>
      <PriceSource></PriceSource>
      <FilterAndReset></FilterAndReset>
    </>
  );
};

Filterscreen.propTypes = {};
Filterscreen.defaultProps = {};
export default Filterscreen;
