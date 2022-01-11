import React, { useContext } from "react";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import StContext from "../../../../../components/context/st-context.jsx";
import "./st-date-range.scss";
const DateRange = () => {
  let context = useContext(StContext);
  const { endDate, startDate, setStartDate, setEndDate } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <fieldset className="restrictionDateWrapper">
      <legend>Restriction Date </legend>
      <div className="stDateRangeWrapper">
        <div className="dateRangeWrapper">
          <Daterangepicker
            //isFromAndStDisabled={isFromAndStDisabled}
            toDate={endDate}
            fromDate={startDate}
            setFromDate={setStartDate}
            setToDate={setEndDate}
            toLabel="Start Date"
            fromLabel="End Date"
          ></Daterangepicker>
        </div>
      </div>
    </fieldset>
  );
};
export default DateRange;
