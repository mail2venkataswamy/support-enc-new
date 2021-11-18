import React from "react";
import Tierlevel from "../../../../../components/common/tier-level/tier-level.jsx";
import "./product-info.scss";
import Typefilter from "../../../../../components/common/type/type.jsx";
import InputSuggestions from "../input-suggestions/input-suggestions.jsx";
import SelectBox from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";

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
  } = props.data.filterPanelData;
  return (
    <div className="prodcutInfoWrapper">
      <fieldset>
        <legend>Product Info Filter</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            {/*  <InputWrapper onChange={props.onChangeCuspinValue}></InputWrapper> */}
            <InputSuggestions
              onChange={props.onChangeCuspinValue}
              results={props.data.filterPanelData.cuspinSuggestionResult}
              onClick={props.onClickSuggestionItem}
              value={props.data.filterPanelData.cuspinValue}
              keySearch={props.data.filterPanelData.cuspinSearchValue}
            ></InputSuggestions>
          </div>
        </div>
        <p></p>
        <div className="isinLabelAndInputWrapper">
          <div className="isinLabel">ISIN:</div>
          <div className="isinInputWrapper">
            <InputSuggestions
              results={props.data.filterPanelData.isinSuggestionResult}
              onChange={props.onChangeIsinValue}
              //cuspinSearchValue={props.data.filterPanelData.cuspinSearchValue}
              onClick={props.onClickIsinSuggestionItem}
              value={props.data.filterPanelData.isinValue}
              keySearch={props.data.filterPanelData.isinSearchValue}
            ></InputSuggestions>
          </div>
        </div>
        <p></p>
        <div className="occSymbolLabelAndInputWrapper">
          <div className="occSymbolLabel">OCC Symbol:</div>
          <div className="occSymbolInputWrapper">
            <InputSuggestions
              results={props.data.filterPanelData.occSymbolSuggestionResult}
              onChange={props.onChangeOccSymbolValue}
              onClick={props.onClickOccSymbolSuggestionItem}
              value={props.data.filterPanelData.occSymbolValue}
              keySearch={props.data.filterPanelData.occSymbolSearchValue}
            ></InputSuggestions>
          </div>
        </div>
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
          {/* <Typefilter typeData={typeData}></Typefilter> */}
          <Checkbox
            isAllChecked={isAllTypeChecked}
            checkboxData={typeData}
            onCheckbox={props.onSelectTypeCheckbox}
            onAllChecked={props.onAllTypeChecked}
          ></Checkbox>
        </div>
        <p></p>
        <div className="labelAndClearedWrapper">
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
        </div>
      </fieldset>
    </div>
  );
};
export default Productinfo;
