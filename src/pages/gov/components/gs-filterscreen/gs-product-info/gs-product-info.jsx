import React, { useContext } from "react";
import "./gs-product-info.scss";
import Inputsuggestion from "../gs-input-suggestions/gs-input-suggestions.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
import DateRangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

const Productinfo = () => {
  let context = useContext(GovContext);
  const {
    onChangeCuspinValue,
    cuspinSuggestionResult,
    onClickSuggestionItem,
    cuspinValue,
    cuspinSearchValue,
    tierLevelData,
    typeData,
    isAllTypeChecked,
    isAllTireChecked,
    currency,
    issueType,
    isAllCurrencyChecked,
    isAllIssueTypeChecked,
    onSelectTireCheckbox,
    onAllTireChecked,
    onSelectTypeCheckbox,
    onAllTypeChecked,
    onSelectCurrencyCheckbox,
    onAllCurrencyChecked,
    onSelectIssueTypeCheckbox,
    onAllIssueTypeChecked,
    isFromMaturityAndToMaturityDisabled,
    toMaturityDate,
    fromMaturityDate,
    setFromMaturityDate,
    setToMaturityDate,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset>
        <legend>Product Info</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="tierLabelAndValue">
          <div className="label">Tier:</div>
          <Checkbox
            checkboxData={tierLevelData}
            isAllChecked={isAllTireChecked}
            onCheckbox={onSelectTireCheckbox}
            onAllChecked={onAllTireChecked}
          ></Checkbox>
        </div>

        <div className="typeLabelAndValue">
          <div className="label">Type:</div>
          <Checkbox
            isAllChecked={isAllTypeChecked}
            checkboxData={typeData}
            onCheckbox={onSelectTypeCheckbox}
            onAllChecked={onAllTypeChecked}
          ></Checkbox>
        </div>

        <div className="typeLabelAndValue">
          <div className="label">Currency:</div>
          <Checkbox
            isAllChecked={isAllCurrencyChecked}
            checkboxData={currency}
            onCheckbox={onSelectCurrencyCheckbox}
            onAllChecked={onAllCurrencyChecked}
          ></Checkbox>
        </div>

        <div className="typeLabelAndValue">
          <div className="label">Issue Type:</div>
          <Checkbox
            isAllChecked={isAllIssueTypeChecked}
            checkboxData={issueType}
            onCheckbox={onSelectIssueTypeCheckbox}
            onAllChecked={onAllIssueTypeChecked}
          ></Checkbox>
        </div>

        <div className="dateRangeWrapper">
          <DateRangepicker
            isFromAndStDisabled={isFromMaturityAndToMaturityDisabled}
            toDate={toMaturityDate}
            fromDate={fromMaturityDate}
            setFromDate={setFromMaturityDate}
            setToDate={setToMaturityDate}
            fromLabel="From Maturity Date"
            toLabel="To Maturity Date"
          />
        </div>
      </fieldset>
    </>
  );
};
export default Productinfo;
