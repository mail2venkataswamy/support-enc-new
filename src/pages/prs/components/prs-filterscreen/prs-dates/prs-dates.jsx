import React, { useContext } from "react";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import PropTypes from "prop-types";
import PrsContext from "../../../../../components/context/prs-context";
const Dates = () => {
  const context = useContext(PrsContext);
  const { fromDate, toDate, setFromDate, setToDate } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <fieldset>
      <legend>Dates</legend>
      <div className="prsDateRangeWrapper">
        <Daterangepicker
          //isFromAndStDisabled={isFromAndStDisabled}
          toDate={toDate}
          fromDate={fromDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
          fromLabel={"From Date:"}
          toLabel={"To Date:"}
        ></Daterangepicker>
      </div>
    </fieldset>
  );
};
Dates.propTypes = {};
Dates.defaultProps = {
  options: [],
  selectedValue: {},
};

export default Dates;
