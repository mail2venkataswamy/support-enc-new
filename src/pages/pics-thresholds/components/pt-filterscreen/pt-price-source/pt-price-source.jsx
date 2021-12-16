import React, { useContext } from "react";
import TaContext from "../../../../../components/context/pics-threshold-context.jsx";
import propTypes from "prop-types";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./pt-price-source.scss";

const PriceSource = () => {
  const context = useContext(TaContext);
  const {
    vendorOptins,
    onChangeVendorValue,
    selectedVendorValue,
    exchangeOptions,
    onChangeExchangeValue,
    selectedExchangeValue,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="priceSourceWrapper">
        <legend>Price Source</legend>
        <div className="ptVendorLabelAndValueWrapper">
          <div className="ptVendorLabel">Vendor:</div>
          <div className="ptVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="ptExchangeLabelAndValueWrapper">
          <div className="ptExchangeLabel">Exchange:</div>
          <div className="ptExchangeValue">
            <Dropdown
              type="single"
              options={exchangeOptions}
              onChange={onChangeExchangeValue}
              selectedValue={selectedExchangeValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default PriceSource;

PriceSource.propTypes = {};
PriceSource.defaultProps = {};
