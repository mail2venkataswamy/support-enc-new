import React, { useContext } from "react";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import VeprContext from "../../../../../components/context/vepr-context.jsx";
import "./vepr-date-range.scss";
const DateRange = () => {
  let context = useContext(VeprContext);
  const { endDate, startDate, setStartDate, setEndDate } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <fieldset className="restrictionDateWrapper">
      <legend>Restriction Date </legend>
      <div className="veprDateRangeWrapper">
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
