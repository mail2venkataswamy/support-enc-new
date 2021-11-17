import React from "react";
import { SelectBox } from "../../../../../Components/SelectBox/SelectBox.jsx";
//import {BusinessDayPicker} from "../../../../../Components/DatePicker/businessDatePicker.js";
import "react-datepicker/dist/react-datepicker.css";
import "./activity-date-range.scss";
//import DateRangepicker from '../../../../../Compositions/GlobalConfigurations/Commons/date-range-picker/date-range-picker.jsx';
import DateRangepicker from "../date-range-picker/date-range-picker.jsx";

const Activitydaterange = () => {
  let selectOptions = [
    { label: "CURRENT", value: "Current" },
    { label: "HISTORICAL", value: "Historical" },
  ];
  return (
    <>
      <fieldset>
        <legend>Activity Date Range</legend>
        <div className="activitydateRangeWrapper">
          <div className="labelAndHistCurrWrapper">
            <div className="wrapper">
              <div className="label">HIst/Curr</div>
              <SelectBox
                type="single"
                /* label="Hist/Curr   "  */
                selectOptions={selectOptions}
              ></SelectBox>
            </div>
          </div>

          <div className="dateRangeWrapper">
            <DateRangepicker />
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default Activitydaterange;
