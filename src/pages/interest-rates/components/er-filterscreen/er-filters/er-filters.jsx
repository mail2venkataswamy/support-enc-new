import React, { useContext } from "react";
import PvsfContext from "../../../../../components/context/interest-rates-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import "./er-filters.scss";

const filters = () => {
  const context = useContext(PvsfContext);
  const {
    toDate,
    fromDate,
    setToDate,
    setFromDate,
    statusOptions,
    selectedStatusValue,
    onChangeStatusValue,
    flaggedEditsOptions,
    selectedFlaggedEditsValue,
    onChangeFlaggedEditsValue,
    isEdittedChecked,
    onChangeEdittedRates,
    interestForOptions,
    selectedInterestForCurrencyValue,
    onChangeInterestForCurrencyValue,
    currencyTypeOptions,
    selectedCurrencyTypeValue,
    onChangeCurrencyTypeValue,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="irFiltersWrapper">
        <legend>Activity Date Range</legend>
        <div className="irLabelAndValue dateRange">
          <Daterangepicker
            isFromAndStDisabled={false}
            toDate={toDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            fromLabel={"From:"}
            toLabel={"To:"}
          ></Daterangepicker>
        </div>
      </fieldset>
      <fieldset className="irFiltersWrapper">
        <legend>Currency:</legend>
        <div className="irLabelAndValue">
          <div className="irLabel">Interest For Currency:</div>
          <div className="irValue">
            <Dropdown
              options={interestForOptions}
              selectedValue={selectedInterestForCurrencyValue}
              onChange={onChangeInterestForCurrencyValue}
            ></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Type:</div>
          <div className="irValue">
            <Dropdown
              options={currencyTypeOptions}
              selectedValue={selectedCurrencyTypeValue}
              onChange={onChangeCurrencyTypeValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="irFiltersWrapper">
        <legend>Flags and status Filter:</legend>
        <div className="irLabelAndValue">
          <div className="irLabel">Status:</div>
          <div className="irValue">
            <Dropdown
              options={statusOptions}
              selectedValue={selectedStatusValue}
              onChange={onChangeStatusValue}
            ></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Flagged Edits:</div>
          <div className="irValue">
            <Dropdown
              options={flaggedEditsOptions}
              selectedValue={selectedFlaggedEditsValue}
              onChange={onChangeFlaggedEditsValue}
            ></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Editted Rates:</div>
          <div className="editedRateValue">
            <input
              type="checkbox"
              checked={isEdittedChecked}
              onChange={onChangeEdittedRates}
            ></input>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default filters;
