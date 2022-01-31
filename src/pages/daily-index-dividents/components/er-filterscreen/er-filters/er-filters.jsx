import React, { useContext } from "react";
import PvsfContext from "../../../../../components/context/daily-index-dividend-context.jsx";
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
    symbolOptions,
    selectedSymbolValue,
    onChangeSymbolValue,
    cusipOptions,
    selectedCusipValue,
    onChangeCusipValue,
    tireOptions,
    selectedTireValue,
    onChangeTireValue,
    fmsOptions,
    selectedFmsValue,
    onChangeFmsValue,
    ediitedAmtFromRangeValue,
    onChangeEdiitedAmtFromRangeValue,
    ediitedAmtToRangeValue,
    onChangeEdiitedAmtToRangeValue


  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="didFiltersWrapper">
        <legend>Activity Date Range</legend>
        <div className="didLabelAndValue dateRange">
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
      <fieldset className="didFiltersWrapper">
        <legend>Dividend:</legend>
        <div className="didLabelAndValue">
          <div className="didLabel">Symbol:</div>
          <div className="didValue">
          <Dropdown
              options={symbolOptions}
              selectedValue={selectedSymbolValue}
              onChange={onChangeSymbolValue}
            ></Dropdown>
          </div>
          </div>
          <div className="didLabelAndValue">
          <div className="didLabel">Cusip:</div>
          <div className="didValue">
          <Dropdown
              options={cusipOptions}
              selectedValue={selectedCusipValue}
              onChange={onChangeCusipValue}
            ></Dropdown>
          </div>
          </div>
          <div className="didLabelAndValue">
          <div className="didLabel">Tier:</div>
          <div className="didValue">
          <Dropdown
              options={tireOptions}
              selectedValue={selectedTireValue}
              onChange={onChangeTireValue}
            ></Dropdown>
          </div>
          </div>
          <div className="didLabelAndValue">
          <div className="didLabel">FMS Indicator:</div>
          <div className="didValue">
          <Dropdown
              options={fmsOptions}
              selectedValue={selectedFmsValue}
              onChange={onChangeFmsValue}
            ></Dropdown>
          </div>
          </div>
      </fieldset>
      <fieldset className="didFiltersWrapper">
        <legend>Editted Amount Range:</legend>
        <div className="didLabelAndValue">
          <div className="didLabel">From:</div>
          <div className="didValue">
            <input value={ediitedAmtFromRangeValue} onChange={onChangeEdiitedAmtFromRangeValue}></input>
          
          </div>
          </div>
          <div className="didLabelAndValue">
          <div className="didLabel">To:</div>
          <div className="didValue">
          <input value={ediitedAmtToRangeValue} onChange={onChangeEdiitedAmtToRangeValue}></input>
          </div>
          </div>
          </fieldset>
      <fieldset className="didFiltersWrapper">
        <legend>Flags and status Filter:</legend>
        <div className="didLabelAndValue">
          <div className="didLabel">Status:</div>
          <div className="didValue">
            <Dropdown
              options={statusOptions}
              selectedValue={selectedStatusValue}
              onChange={onChangeStatusValue}
            ></Dropdown>
          </div>
        </div>
        <div className="didLabelAndValue">
          <div className="didLabel">Flagged Edits:</div>
          <div className="didValue">
            <Dropdown
              options={flaggedEditsOptions}
              selectedValue={selectedFlaggedEditsValue}
              onChange={onChangeFlaggedEditsValue}
            ></Dropdown>
          </div>
        </div>
        <div className="didLabelAndValue">
          <div className="didLabel">Editted Rates:</div>
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
