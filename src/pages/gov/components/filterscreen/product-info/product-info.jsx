import React from "react";
import Tierlevel from "../../../../../components/common/tier-level/tier-level.jsx";
import "./product-info.scss";
import Typefilter from "../../../../../components/common/type/type.jsx";
import Inputsuggestion from "../input-suggestions/input-suggestions.jsx";
import SelectBox from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
import DateRangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";

const Productinfo = (props) => {
  const {
    selectClearedOptions,
    selectCrossMarginOptions,
    selectCurrencyOptions,
    tierLevelData,
    typeData,
    isAllTypeChecked,
    isAllTireChecked,
    selectedCurrencyValue,
    selectedCrossMarginValue,
    selectedClearedValue,
    currency,
    issueType,
    isAllCurrencyChecked,
    isAllIssueTypeChecked,
  } = props.data.filterPanelData;
  return (
    <>
      <fieldset>
        <legend>Product Info</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            <Inputsuggestion
              onChange={props.onChangeCuspinValue}
              results={props.data.filterPanelData.cuspinSuggestionResult}
              onClick={props.onClickSuggestionItem}
              value={props.data.filterPanelData.cuspinValue}
              keySearch={props.data.filterPanelData.cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <p></p>
        {/*                 <div className="isinLabelAndInputWrapper">
                <div className="isinLabel">ISIN:</div>
                <div className="isinInputWrapper">
                    <Inputsuggestion
                        results={props.data.filterPanelData.isinSuggestionResult}
                        onChange={props.onChangeIsinValue}
                        //cuspinSearchValue={props.data.filterPanelData.cuspinSearchValue}
                        onClick={props.onClickIsinSuggestionItem}
                        value={props.data.filterPanelData.isinValue}
                        keySearch={props.data.filterPanelData.isinSearchValue}></Inputsuggestion>
                </div>
            </div> 
            <p></p>
            <div className="occSymbolLabelAndInputWrapper">
                <div className="occSymbolLabel">OCC Symbol:</div>
                <div className="occSymbolInputWrapper">
                    <Inputsuggestion
                        results={props.data.filterPanelData.occSymbolSuggestionResult}
                        onChange={props.onChangeOccSymbolValue}
                        onClick={props.onClickOccSymbolSuggestionItem}
                        value={props.data.filterPanelData.occSymbolValue}
                        keySearch={props.data.filterPanelData.occSymbolSearchValue}
                    ></Inputsuggestion>
                </div>
            </div>*/}
        <p></p>
        <div className="tierLabelAndValue">
          <div className="label">Tier:</div>
          <Checkbox
            checkboxData={tierLevelData}
            isAllChecked={isAllTireChecked}
            onCheckbox={props.onSelectTireCheckbox}
            onAllChecked={props.onAllTireChecked}
          ></Checkbox>
        </div>
        <p></p>
        <div className="typeLabelAndValue">
          <div className="label">Type:</div>
          <Checkbox
            isAllChecked={isAllTypeChecked}
            checkboxData={typeData}
            onCheckbox={props.onSelectTypeCheckbox}
            onAllChecked={props.onAllTypeChecked}
          ></Checkbox>
        </div>
        <p></p>
        <div className="typeLabelAndValue">
          <div className="label">Currency:</div>
          <Checkbox
            isAllChecked={isAllCurrencyChecked}
            checkboxData={currency}
            onCheckbox={props.onSelectCurrencyCheckbox}
            onAllChecked={props.onAllCurrencyChecked}
          ></Checkbox>
        </div>
        <p></p>
        <div className="typeLabelAndValue">
          <div className="label">Issue Type:</div>
          <Checkbox
            isAllChecked={isAllIssueTypeChecked}
            checkboxData={issueType}
            onCheckbox={props.onSelectIssueTypeCheckbox}
            onAllChecked={props.onAllIssueTypeChecked}
          ></Checkbox>
        </div>
        <p></p>
        {/* <div className="labelAndClearedWrapper">
                <div className="Clearedlabel">Cleared:</div>
                <div className="clearedwrapper">
                    <SelectBox
                        type="single"
                        options={selectClearedOptions}
                        onChange={props.onChangeClearedValue}
                        selectedValue={selectedClearedValue}
                    ></SelectBox>
                </div>
            </div>
            <p></p>
            <div className="labelAndCrossMarginWrapper">
                <div className="crossMarginLabel">Cross Margin Eligible:</div>
                <div className="crossMarginWrapper">
                    <SelectBox
                        type="single"
                        options={selectCrossMarginOptions}
                        onChange={props.onChangeCrossMarginEligibleValue}
                        selectedValue={selectedCrossMarginValue}
                    ></SelectBox>
                </div>
            </div>
            <p></p>
            <div className="labelAndCurrencyWrapper">
                <div className="currencyLabel">Currency:</div>
                <div className="currencyWrapper">
                    <SelectBox
                        type="single"
                        options={selectCurrencyOptions}
                        onChange={props.onChangeCurrencyValue}
                        selectedValue={selectedCurrencyValue}
                    ></SelectBox>
                </div> 
            </div>*/}
        <div className="dateRangeWrapper">
          <DateRangepicker
            isFromAndStDisabled={
              props.data.filterPanelData.isFromMaturityAndToMaturityDisabled
            }
            toDate={props.data.filterPanelData.toMaturityDate}
            fromDate={props.data.filterPanelData.fromMaturityDate}
            setFromDate={props.setFromMaturityDate}
            setToDate={props.setToMaturityDate}
            fromLabel="From Maturity Date"
            toLabel="To Maturity Date"
          />
        </div>
      </fieldset>
    </>
  );
};
export default Productinfo;
