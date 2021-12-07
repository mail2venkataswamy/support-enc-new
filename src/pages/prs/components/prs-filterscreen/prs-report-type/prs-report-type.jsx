import React, { useContext } from "react";
import PropTypes from "prop-types";
import PrsContext from "../../../../../components/context/prs-context";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./prs-report-type.scss";
const ReportType = () => {
  const context = useContext(PrsContext);
  const {
    reportTypeOptions,
    selectedReportTypeValue,
    onChangeReportTypeValue,
  } = { ...context.state.filterPanelData, ...context };
  return (
    <div className="labelAndReportTypeWrapper">
      <div className="reportTypeLabel">Report Type</div>
      <div className="reportTypeDropdownWrapper">
        <Dropdown
          options={reportTypeOptions}
          id={"reportType"}
          selectedValue={selectedReportTypeValue}
          onChange={onChangeReportTypeValue}
        ></Dropdown>
      </div>
    </div>
  );
};
ReportType.propTypes = {};
ReportType.defaultProps = {
  options: [],
  selectedValue: {},
};

export default ReportType;
