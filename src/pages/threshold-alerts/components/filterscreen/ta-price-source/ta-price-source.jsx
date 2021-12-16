import React, { useContext } from "react";
import TaContext from "../../../../../components/context/threshold-alerts-context";
import propTypes from "prop-types";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./ta-price-source.scss";

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
        <div className="atVendorLabelAndValueWrapper">
          <div className="atVendorLabel">Vendor:</div>
          <div className="atVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="atExchangeLabelAndValueWrapper">
          <div className="atExchangeLabel">Exchange:</div>
          <div className="atExchangeValue">
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
