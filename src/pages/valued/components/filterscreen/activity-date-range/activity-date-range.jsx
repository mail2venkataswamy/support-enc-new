import React from "react";
import "./activity-date-range.scss";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./styles.scss";
//import DatePicker from "react-date-picker";
import Datepicker from "../../../../../components/common/datepicker/datepicker.jsx";
import ReactDatePicker from "react-datepicker";
import Daterangepicker from "../../../../../components/common/date-range-picker/date-range-picker.jsx";
import Select from "../../../../../components/common/select/simple-select.jsx";

const ActivityDateRange = (props) => {
  return (
    <fieldset>
      <legend>Activity Date Range </legend>
      <div className="activitydateRangeWrapper">
        <div className="labelAndHistCurrWrapper">
          <div className="wrapper">
            <div className="currHistLabel">CURR/HIST</div>
            <div className="dropdownWrapper">
              {/*<Select
                options={props.data.filterPanelData.currHistOptions}
                id={"histCurr"}
                selectedValue={props.data.filterPanelData.selectedCurrHistValue}
                onChange={props.onChangeCurrHistValue}
                ></Select> */}
              <Dropdown
                options={props.data.filterPanelData.currHistOptions}
                id={"histCurr"}
                selectedValue={props.data.filterPanelData.selectedCurrHistValue}
                onChange={props.onChangeCurrHistValue}
              ></Dropdown>
            </div>
          </div>
          {/*</div>*/}
        </div>
        <div className="dateRangeWrapper">
          <Daterangepicker
            isFromAndStDisabled={props.data.filterPanelData.isFromAndStDisabled}
            toDate={props.data.filterPanelData.toDate}
            fromDate={props.data.filterPanelData.fromDate}
            setFromDate={props.setFromDate}
            setToDate={props.setToDate}
          ></Daterangepicker>
        </div>
      </div>
    </fieldset>
  );
};
export default ActivityDateRange;
