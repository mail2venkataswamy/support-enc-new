import React, { useContext } from "react";
import Dropdown from "../../../../../../components/common/simple-dropdown/dropdown.jsx";
import prdeContext from "../../../../../../components/context/prde-context.jsx";
import "./prde-product-info.scss";
import Inputsuggestion from "./prde-input-suggestions/prde-input-suggestions.jsx";
import DatePicker from "../../../../../../components/common/datepicker/datepicker.jsx";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const ProductInfo = () => {
  const context = useContext(prdeContext);
  const {
    selectedProductTypeValue,
    productTypeOptions,
    piClassificationOptions,
    selectedPiClassificationValue,
    symbolFromSearchValue,
    symbolFromSuggestionResult,
    symbolFromValue,
    symbolToSearchValue,
    symbolToSuggestionResult,
    symbolToValue,
    cuspinValue,
    cuspinSearchValue,
    cuspinSuggestionResult,
    deliveryClassSearchValue,
    deliveryClassSuggestionResult,
    deliveryClassValue,
    exchangeSearchValue,
    exchangeSuggestionResult,
    exchangeValue,
    onChangeIsInValue,
    isInSearchValue,
    isInSuggestionResult,
    isInValue,
    onChangeCuspinValue,
    onClickSuggestionItem,
    onChangeSymbolFromValue,
    onClickSymbolFromSuggestionItem,
    onChangeSymbolToValue,
    onClickSymbolToSuggestionItem,
    onChangeDeliveryClassValue,
    onClickDeliveryClassSuggestionItem,
    onChangeExchangeValue,
    onClickExchangeSuggestionItem,
    onClickIsInSuggestionItem,
    vendorOptins,
    selectedVendorValue,
    onChangeVendorValue,
    callPutOptions,
    selectedCallPutValue,
    onChangeCallPutValue,
    onChangeProductTypeValue,
    onChangeClassificationValue,
    setstrikePriceToDate,
    strikePriceToDate,
    strikePriceFromDate,
    setstrikePriceFromDate,
    pricePrecisionOptions,
    selectedpricePrecisionValue,
    onChangepricePrecisionValue,
    onSelectNonClearedOrCrossMarginValue,
    isNonClearedOrCrossMarginChecked,
    onSelectFms,
    isFmsChecked,

    strikePriceFromSuggestionResult,
    onChangeStrikePriceFromValue,
    onClickStrikePriceFromSuggestionItem,
    strikePriceFromValue,
    StrikePriceFromSearchValue,

    strikePriceToSuggestionResult,
    onChangeStrikePriceToValue,
    onClickStrikePriceToSuggestionItem,
    strikePriceToValue,
    StrikePriceToSearchValue,
  } = {
    ...context.state.dataExport,
    ...context,
  };
  return (
    <div className="piLeftRightSectionWrapper">
      <div className="piLeftSection">
        <div className="productTypeLabelAndValue">
          <div className="productTypeLabel">Product Type:</div>
          <div className="productTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="symbolFromLabelAndValue">
          <div className="symbolFromLabel">Symbol From:</div>
          <div className="symbolFromValue">
            <Inputsuggestion
              onChange={onChangeSymbolFromValue}
              results={symbolFromSuggestionResult}
              onClick={onClickSymbolFromSuggestionItem}
              value={symbolFromValue}
              keySearch={symbolFromSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="cuspinLabelAndValue">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinValue">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="exchangeLabelAndValue">
          <div className="exchangeLabel">Exchange:</div>
          <div className="exchangeValue">
            <Inputsuggestion
              onChange={onChangeExchangeValue}
              results={exchangeSuggestionResult}
              onClick={onClickExchangeSuggestionItem}
              value={exchangeValue}
              keySearch={exchangeSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="callPutLabelAndValue">
          <div className="callPutLabel">Call Put:</div>
          <div className="callPutValue">
            <Dropdown
              options={callPutOptions}
              selectedValue={selectedCallPutValue}
              onChange={onChangeCallPutValue}
            ></Dropdown>
          </div>
        </div>
        <div className="strikePriceFromLabelAndValue">
          <div className="strikePriceFromlabel">
            Expiration/Maturity Date From
          </div>
          <div className="strikePriceFromValue">
            <DatePicker
              selectedDate={strikePriceFromDate}
              setDate={setstrikePriceFromDate}
              selectsStart
              //includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
              //disabled={props.isFromAndStDisabled}
            />
          </div>
        </div>
        <div className="strikePriceToLabelAndValue">
          <div className="strikePriceToLabel">Strike Price From</div>
          <div className="strikePriceToValue">
            <Inputsuggestion
              onChange={onChangeStrikePriceFromValue}
              results={strikePriceFromSuggestionResult}
              onClick={onClickStrikePriceFromSuggestionItem}
              value={strikePriceFromValue}
              keySearch={StrikePriceFromSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="pricePrecisionLabelAndValue">
          <div className="pricePrecisionLabel">Price Precision:</div>
          <div className="pricePrecisionValue">
            <Dropdown
              options={pricePrecisionOptions}
              selectedValue={selectedpricePrecisionValue}
              onChange={onChangepricePrecisionValue}
            ></Dropdown>
          </div>
        </div>
        <div className="prdeFmsWrapper">
          <label>
            <input
              id={"prdeFms"}
              type="checkbox"
              value="fms"
              onClick={(e) => onSelectFms(e)}
              checked={isFmsChecked}
            ></input>
            {" FMS"}
          </label>
        </div>
      </div>
      <div className="piRightSection">
        <div className="classificationLabelAndValue">
          <div className="classificationLabel">Classification:</div>
          <div className="classificationValue">
            <Dropdown
              options={piClassificationOptions}
              selectedValue={selectedPiClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="symbolToLabelAndValue">
          <div className="symbolToLabel">Symbol To:</div>
          <div className="symbolToValue">
            <Inputsuggestion
              onChange={onChangeSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="deliveryClassLabelAndValue">
          <div className="deliveryClassLabel">Delivery Class:</div>
          <div className="deliveryClassValue">
            <Inputsuggestion
              onChange={onChangeDeliveryClassValue}
              results={deliveryClassSuggestionResult}
              onClick={onClickDeliveryClassSuggestionItem}
              value={deliveryClassValue}
              keySearch={deliveryClassSearchValue}
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
        <div className="vendorLabelAndValue">
          <div className="vendorLabel">Vendor:</div>
          <div className="vendorValue">
            <Dropdown
              options={vendorOptins}
              selectedValue={selectedVendorValue}
              onChange={onChangeVendorValue}
            ></Dropdown>
          </div>
        </div>

        <div className="strikePriceToLabelAndValue">
          <div className="strikePriceToLabel">Expiration/maturity Date To</div>
          <div className="strikePriceToValue">
            <DatePicker
              selectedDate={strikePriceToDate}
              setDate={setstrikePriceToDate}
              //selectsEnd
              //includeDates={getArrayOfDates(props.fromDate, props.toDate)}
              //disabled={props.isFromAndStDisabled}
            />
          </div>
        </div>
        <div className="strikePriceToLabelAndValue">
          <div className="strikePriceToLabel">Strike Price To</div>
          <div className="strikePriceToValue">
            <Inputsuggestion
              onChange={onChangeStrikePriceToValue}
              results={strikePriceToSuggestionResult}
              onClick={onClickStrikePriceToSuggestionItem}
              value={strikePriceToValue}
              keySearch={StrikePriceToSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="nonClearedOrCrossMarginWrapper">
          <label>
            <input
              id={"nonClearedOrCrossMargin"}
              type="checkbox"
              value="nonClearedOrCrossMargin"
              onClick={(e) => onSelectNonClearedOrCrossMarginValue(e)}
              checked={isNonClearedOrCrossMarginChecked}
            ></input>
            {" Non Cleared / CrossMargin"}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
