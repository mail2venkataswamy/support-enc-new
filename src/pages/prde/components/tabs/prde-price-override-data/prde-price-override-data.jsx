import React, { useContext } from "react";
import prdeContext from "../../../../../components/context/prde-context.jsx";
import DatePicker from "../../../../../components/common/datepicker/datepicker.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./prde-price-override-data.scss";

const PriceOverrideData = () => {
  const context = useContext(prdeContext);
  const {
    businessDate,
    setBusinessDate,
    deliveryClassOptions,
    PriceOverideDeliveryClassValue,
    onChangePriceOverideDeliveryClassValue,
  } = {
    ...context.state.priceOverrideData,
    ...context,
  };
  return (
    <div className="priceOverrideWrapper">
      <fieldset>
        <legend>Price Override Download </legend>
        <div className="businessDtAndDeliveryClass">
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
          <div className="deliveryClassLabelAndValue">
            <div className="deliveryClassLabel">Delivery Class:</div>
            <div className="deliveryClassValue">
              <Dropdown
                options={deliveryClassOptions}
                value={PriceOverideDeliveryClassValue}
                onChange={onChangePriceOverideDeliveryClassValue}
              ></Dropdown>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="downloadAndResetButtonWrapper">
        <button>Download</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default PriceOverrideData;
