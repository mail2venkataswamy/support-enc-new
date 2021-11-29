import React, { useContext } from "react";
import prdeContext from "../../../../../../components/context/prde-context.jsx";
import Dropdown from "../../../../../../components/common/simple-dropdown/dropdown.jsx";
import DatePicker from "../../../../../../components/common/datepicker/datepicker.jsx";
import "./prde-download-files-by.scss";

const DownloadFilesBy = () => {
  const context = useContext(prdeContext);
  const {
    deliveryClassOptions,
    deliveryClassValue,
    onChangeDeliveryClassValue,
    businessDate,
    setBusinessDate,
    runDate,
    setRunDate,
  } = {
    ...context,
    ...context.state.sThreeDownload,
  };
  return (
    <div className="dowloadFilesWrapper">
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel">Delivery Class/Exchange Files</div>
        <div className="deliveryClassValue">
          <Dropdown
            options={deliveryClassOptions}
            value={deliveryClassValue}
            onChange={onChangeDeliveryClassValue}
          ></Dropdown>
        </div>
      </div>
      <div className="businessDateLabelAndValue">
        <div className="businessDateLabel">Business Date:</div>
        <div className="businessDateValue">
          <DatePicker
            selectedDate={businessDate}
            setDate={setBusinessDate}
            selectsStart
            //includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
            //disabled={props.isFromAndStDisabled}
          />
        </div>
      </div>
      <div className="runDateLabelAndValue">
        <div className="runDateLabel">Run Date:</div>
        <div className="runDateValue">
          <DatePicker
            selectedDate={runDate}
            setDate={setRunDate}
            selectsStart
            //includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
            //disabled={props.isFromAndStDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadFilesBy;
