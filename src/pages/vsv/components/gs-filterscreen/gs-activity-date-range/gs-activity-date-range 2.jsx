import React, { useContext } from "react";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./gs-activity-date-range.scss";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";
const ActivityDateRange = () => {
  let context = useContext(GovContext);
  const {
    currHistOptions,
    selectedCurrHistValue,
    onChangeCurrHistValue,
    isFromAndStDisabled,
    toDate,
    fromDate,
    setFromDate,
    setToDate,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <fieldset>
      <legend>Activity Date Range </legend>
      <div className="activitydateRangeWrapper">
        <div className="labelAndHistCurrWrapper">
          <div className="wrapper">
            <div className="currHistLabel">CURR/HIST</div>
            <div className="dropdownWrapper">
              <Dropdown
                options={currHistOptions}
                id={"histCurr"}
                selectedValue={selectedCurrHistValue}
                onChange={onChangeCurrHistValue}
              ></Dropdown>
            </div>
          </div>
        </div>
        <div className="dateRangeWrapper">
          <Daterangepicker
            isFromAndStDisabled={isFromAndStDisabled}
            toDate={toDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          ></Daterangepicker>
        </div>
      </div>
    </fieldset>
  );
};
export default ActivityDateRange;
