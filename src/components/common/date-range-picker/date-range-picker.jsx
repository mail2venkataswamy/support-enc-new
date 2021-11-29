import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import "./date-range-picker.scss";

function duriationOfDates(fromDate, toDate) {
  const date1 = new Date(fromDate);
  const date2 = new Date(toDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
function getArrayOfDates(fromDate, toDate, numberOfDays = 0) {
  let fromDates = [];
  let toDates = [];

  if (numberOfDays < 0) {
    for (let i = 0; i < Math.abs(numberOfDays); i++) {
      fromDates.push(addDays(fromDate, -i));
    }
  } else {
    let diffDays = duriationOfDates(fromDate, toDate);
    for (let i = 0; i < diffDays; i++) {
      toDates.push(addDays(fromDate, i));
    }
  }

  return numberOfDays < 0 ? fromDates : toDates;
}

const Daterangepicker = (props) => {
  const [fromDate, setStartDate] = useState(new Date());
  const [toDate, setEndDate] = useState(new Date());

  return (
    <>
      <div className="fromDateLabelAndPickerWrapper">
        <div className="label">{props.fromLabel}</div>
        <div className="datePickerWrapper ">
          <DatePicker
            selected={props.fromDate}
            onChange={props.setFromDate}
            selectsStart
            includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
            disabled={props.isFromAndStDisabled}
          />
        </div>
      </div>
      <div className="toDateLabelAndPickerWrapper">
        <div className="label">{props.toLabel}</div>
        <div className="datePickerWrapper">
          <DatePicker
            selected={props.toDate}
            onChange={props.setToDate}
            selectsEnd
            includeDates={getArrayOfDates(props.fromDate, props.toDate)}
            disabled={props.isFromAndStDisabled}
          />
        </div>
      </div>
    </>
  );
};
export default Daterangepicker;
