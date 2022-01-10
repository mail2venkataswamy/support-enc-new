import React, { useContext } from "react";
import StContext from "../../../../../components/context/st-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../st-input-suggestions/st-input-suggestions.jsx";
import DatePicker from "../../../../../components/common/datepicker/datepicker.jsx";
import "./st-product-info.scss";

const ProductInfo = () => {
  const context = useContext(StContext);
  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeProductTypeValue,
    cuspinValue,
    cuspinSearchValue,
    cuspinSuggestionResult,
    onClickCuspinSuggestionItem,
    onChangeCuspinValue,
    onChangeSymbolToValue,
    onClickSymbolToSuggestionItem,
    symbolToSuggestionResult,
    symbolToValue,
    symbolToSearchValue,
    classificationOptions,
    selectedClassificationValue,
    onChangeClassificationValue,
    onChangeIsInValue,
    isInSearchValue,
    isInSuggestionResult,
    isInValue,
    onClickIsInSuggestionItem,
    setExpirationMaturityDate,
    exspirationOrMaturityDate,
    callPutOptions,
    selectedCallPutValue,
    onChangeCallPutValue,
    strikePriceFromSuggestionResult,
    onChangeStrikePriceFromValue,
    onClickStrikePriceFromSuggestionItem,
    strikePriceFromValue,
    StrikePriceFromSearchValue,
    isCallPutDisabled,
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
      <fieldset className="productWrapper">
        <legend>Product</legend>
        <div className="stProductTypeLabelAndValue">
          <div className="stProductTypeLabel">Product Type:</div>
          <div className="stProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="stProductTypeLabelAndValue">
          <div className="stProductTypeLabel">Classification:</div>
          <div className="stProductTypeValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="stSymbolToLabelAndValue">
          <div className="stSymbolToLabel">OCC Symbol:</div>
          <div className="stSymbolToValue">
            <Inputsuggestion
              onChange={onChangeSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="stVendorLabelAndValueWrapper">
          <div className="stVendorLabel">Vendor Name:</div>
          <div className="stVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="stExchangeLabelAndValueWrapper">
          <div className="stExchangeLabel">Exchange:</div>
          <div className="stExchangeValue">
            <Dropdown
              type="single"
              options={exchangeOptions}
              onChange={onChangeExchangeValue}
              selectedValue={selectedExchangeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="stCuspinLabelAndValue">
          <div className="stCuspinLabel">Cusip:</div>
          <div className="stCuspinValue">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="isInLabelAndValue">
          <div className="isInLabel">ISIN:</div>
          <div className="isInValue">
            <Inputsuggestion
              onChange={onChangeIsInValue}
              results={isInSuggestionResult}
              onClick={onClickIsInSuggestionItem}
              value={isInValue}
              keySearch={isInSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ProductInfo;
