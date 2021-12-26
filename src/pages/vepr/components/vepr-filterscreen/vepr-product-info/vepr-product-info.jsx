import React, { useContext } from "react";
import TaContext from "../../../../../components/context/vepr-context.jsx";
import propTypes from "prop-types";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../vepr-input-suggestions/vepr-input-suggestions.jsx";
import DatePicker from "../../../../../components/common/datepicker/datepicker.jsx";
import "./vepr-product-info.scss";

const ProductInfo = () => {
  const context = useContext(TaContext);
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
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="productWrapper">
        <legend>Product</legend>
        <div className="veprProductTypeLabelAndValue">
          <div className="veprProductTypeLabel">Product Type:</div>
          <div className="veprProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="veprProductTypeLabelAndValue">
          <div className="veprProductTypeLabel">Classification:</div>
          <div className="veprProductTypeValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="veprSymbolToLabelAndValue">
          <div className="veprSymbolToLabel">Symbol:</div>
          <div className="veprSymbolToValue">
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
        <div className="veprCuspinLabelAndValue">
          <div className="veprCuspinLabel">Cusip:</div>
          <div className="veprCuspinValue">
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
        <div className="expMaturityDateLabelAndValue">
          <div className="expMaturityDateLabel">
            Expiration / Maturity Date:
          </div>
          <div className="expMaturityDateValue">
            <DatePicker
              selectedDate={exspirationOrMaturityDate}
              setDate={setExpirationMaturityDate}
              selectsStart
              //includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
              //disabled={isMaturityFromDateDisabled}
            />
          </div>
        </div>
        <div className="callPutLabelAndValue">
          <div className="callPutLabel">Call Put:</div>
          <div className="callPutValue">
            <Dropdown
              options={callPutOptions}
              selectedValue={selectedCallPutValue}
              onChange={onChangeCallPutValue}
              //disabled={isCallPutDisabled}
            ></Dropdown>
          </div>
        </div>
        <div className="strikePriceToLabelAndValue">
          <div className="strikePriceToLabel">Strike Price:</div>
          <div className="strikePriceToValue">
            <Inputsuggestion
              onChange={onChangeStrikePriceFromValue}
              results={strikePriceFromSuggestionResult}
              onClick={onClickStrikePriceFromSuggestionItem}
              value={strikePriceFromValue}
              keySearch={StrikePriceFromSearchValue}
              // disabled={isStrikePriceFromDisabled}
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {};
ProductInfo.defaultProps = {};
