import React, { useContext } from "react";
import PvsfContext from "../../../../../components/context/exchange-rates-context.jsx";
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
    fromCurrencyOptions,
    selectedFromCurrencyValue,
    onChangeFromCurrencyValue,
    toCurrencyOptions,
    selectedToCurrencyValue,
    onChangeToCurrencyValue,

    statusOptions,
    selectedStatusValue,
    onChangeStatusValue,
    flaggedEditsOptions,
    selectedFlaggedEditsValue,
    onChangeFlaggedEditsValue,
    isEdittedChecked,
    onChangeEdittedRates,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="erFiltersWrapper">
        <legend>Activity Date Range</legend>
        <div className="erLabelAndValue dateRange">
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
      <fieldset className="erFiltersWrapper">
        <legend>Currency:</legend>
        <div className="erLabelAndValue">
          <div className="erLabel">From Currency:</div>
          <div className="erValue">
            <Dropdown
              options={fromCurrencyOptions}
              selectedValue={selectedFromCurrencyValue}
              onChange={onChangeFromCurrencyValue}
            ></Dropdown>
          </div>
        </div>
        <div className="erLabelAndValue">
          <div className="erLabel">To Currency:</div>
          <div className="erValue">
            <Dropdown
              options={toCurrencyOptions}
              selectedValue={selectedToCurrencyValue}
              onChange={onChangeToCurrencyValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="erFiltersWrapper">
        <legend>Flags and status Filter:</legend>
        <div className="erLabelAndValue">
          <div className="erLabel">Status:</div>
          <div className="erValue">
            <Dropdown
              options={statusOptions}
              selectedValue={selectedStatusValue}
              onChange={onChangeStatusValue}
            ></Dropdown>
          </div>
        </div>
        <div className="erLabelAndValue">
          <div className="erLabel">Flagged Edits:</div>
          <div className="erValue">
            <Dropdown
              options={flaggedEditsOptions}
              selectedValue={selectedFlaggedEditsValue}
              onChange={onChangeFlaggedEditsValue}
            ></Dropdown>
          </div>
        </div>
        <div className="erLabelAndValue">
          <div className="erLabel">Editted Rates:</div>
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
