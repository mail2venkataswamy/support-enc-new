import React, { useContext } from "react";
import PropTypes from "prop-types";
import FilterAndReset from "../../../pics-thresholds/components/pt-filterscreen/pt-filter-and-reset/pt-filter-and-reset.jsx";
import "./pt-filterscreen.scss";
import PriceSource from "./pt-price-source/pt-price-source.jsx";
import ProductInfo from "./pt-product-info/pt-product-info.jsx";
import MyContext from "../../../../components/context/pics-threshold-context.jsx";
const Filterscreen = () => {
  const { onToggleFilterScreen } = useContext(MyContext);
  return (
    <>
      <div className="ptFilterscreenHeaderWrapper">
        <div className="ptFilterscreenTitle">Pics Threshold Filter</div>
        {/*         <div className="ptToggle" onClick={onToggleFilterScreen}>
          {"<<"}
        </div> */}
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
