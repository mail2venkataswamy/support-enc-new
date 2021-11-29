import React, { useContext } from "react";
import Modal from "react-modal";
import "./gs-price-roll-override.scss";
import Datepicker from "../../../../../components/common/datepicker/datepicker.jsx";
import RadioButton from "../../../../../components/common/radio-button/radio-button.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

const PriceRollOverrideModalContent = (props) => {
  const {
    priceTypeData,
    priceRollOverrideValue,
    priceRollOverrideTillDate,
    priceRollOverridePriceTypeValue,
  } = props.data;
  return (
    <div>
      <fieldset>
        <legend></legend>
        <div className="priceRollOverContentWrapper">
          <div className="overrideLabelValueWrapper">
            <div className="overrideValueLabel">Override Value:</div>
            <div className="overrideValueWrapper">
              <input
                type="text"
                value={priceRollOverrideValue}
                onChange={props.onChangePriceOverrideValue}
              ></input>
            </div>
          </div>
          <p></p>
          <div className="overrideLabelDatePickerWrapper">
            <div className="overrideDatePickerLabel">Till Date:</div>
            <div className="datePickerWrapper">
              <Datepicker
                setDate={props.setPriceOverrideTillDate}
                selectedDate={priceRollOverrideTillDate}
              ></Datepicker>
            </div>
          </div>
          <p></p>
          <div className="priceTypeLabelTypeWrapper">
            <div className="priceTypeLabel">Price Type:</div>
            <div className="priceTypeValueWrapper">
              <RadioButton
                radioButtonsData={priceTypeData}
                onChange={props.onChangePriceTypeValue}
                value={priceRollOverridePriceTypeValue}
              ></RadioButton>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const PriceRollOverride = (props) => {
  return (
    <div className="priceOverrideModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">VS Price Roll Override</div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <PriceRollOverrideModalContent
          data={props.data}
          onChangePriceOverrideValue={props.onChangePriceOverrideValue}
          setPriceOverrideTillDate={props.setPriceOverrideTillDate}
          onChangePriceTypeValue={props.onChangePriceTypeValue}
        ></PriceRollOverrideModalContent>
      </div>
      <div className="footer">
        <button id="publishButton" onClick={props.onSavePriceOverrideValue}>
          Save
        </button>
        <button id="cancelButton" onClick={props.closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const PriceRollOverrideModal = () => {
  const context = useContext(GovContext);
  const {
    isPriceRollOverrideModalOpen,
    closePriceRollOverrideModal,
    onChangePriceOverrideValue,
    setPriceOverrideTillDate,
    onChangePriceTypeValue,
    onSavePriceOverrideValue,
    priceTypeData,
    priceRollOverrideValue,
    priceRollOverrideTillDate,
    priceRollOverridePriceTypeValue,
  } = {
    ...context.state.maintenanceScreenData,
    ...context,
  };
  return (
    <Modal isOpen={isPriceRollOverrideModalOpen} style={customStyles}>
      <PriceRollOverride
        closeModal={closePriceRollOverrideModal}
        data={{
          priceTypeData: priceTypeData,
          priceRollOverrideValue: priceRollOverrideValue,
          priceRollOverrideTillDate: priceRollOverrideTillDate,
          priceRollOverridePriceTypeValue: priceRollOverridePriceTypeValue,
        }}
        onChangePriceOverrideValue={onChangePriceOverrideValue}
        setPriceOverrideTillDate={setPriceOverrideTillDate}
        onChangePriceTypeValue={onChangePriceTypeValue}
        onSavePriceOverrideValue={onSavePriceOverrideValue}
      ></PriceRollOverride>
    </Modal>
  );
};

export { PriceRollOverrideModal as PriceRollOverrideModal };
