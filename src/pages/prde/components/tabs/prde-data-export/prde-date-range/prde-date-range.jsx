import React, { useContext } from "react";
import Dropdown from "../../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./prde-date-range.scss";
import Daterangepicker from "../../../../../../components/common/date-range-picker/date-range-picker.jsx";
import GovContext from "../../../../../../components/context/prde-context.jsx";
const DateRange = () => {
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
    ...context.state.dataExport,
    ...context,
  };
  return (
    <div className="dateRangeAndHistCurrWrapper">
      <div className="labelAndHistCurrWrapper">
        <div className="currHistLabel">CURR/HIST</div>
        <div className="currHistValue">
          <Dropdown
            options={currHistOptions}
            id={"histCurr"}
            selectedValue={selectedCurrHistValue}
            onChange={onChangeCurrHistValue}
          ></Dropdown>
        </div>
      </div>
      {isFromAndStDisabled ? (
        ""
      ) : (
        <div className="dateRangeWrapper">
          <Daterangepicker
            isFromAndStDisabled={isFromAndStDisabled}
            toDate={toDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
            toLabel="To Date"
            fromLabel="From Date"
          ></Daterangepicker>
        </div>
      )}
    </div>
  );
};
export default DateRange;
