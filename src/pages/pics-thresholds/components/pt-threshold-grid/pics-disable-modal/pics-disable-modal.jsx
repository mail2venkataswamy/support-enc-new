import React, { useContext } from "react";
import Modal from "react-modal";
import "./pics-disable-modal.scss";
import myContext from "../../../../../components/context/pics-threshold-context.jsx";
import PropTypes from "prop-types";
import Datepicker from "../../../../../components/common/datepicker/datepicker";
import SimpleDropdown from "../../../../../components/common/simple-dropdown/dropdown";

const PicsDisableModalContent = (props) => {
  const {
    onChangeDisableFromDate,
    onChangeDisableFromTime,
    onChangeDisableToDate,
    onChangeDisableToTime,
    disableFromDate,
    disableToDate,
    disableFromTimeOptions,
    disableToTimeOptions,
    selectedFromTime,
    selectedToTime,
  } = props;

  return (
    <fieldset className="mtDateTimeWrapper">
      <legend>Date/Time</legend>
      <div className="fromSection">
        <div className="fromDateLabelValueWrapper">
          <div className="fromDateLabel">From Date:</div>
          <div className="fromDateValue">
            <Datepicker
              setDate={onChangeDisableFromDate}
              selectedDate={disableFromDate}
            ></Datepicker>
          </div>
        </div>

        <div className="fromTimeLabelValueWrapper">
          <div className="fromTimeLabel">From Time:</div>
          <div className="fromTimeValue">
            <SimpleDropdown
              onChange={onChangeDisableFromTime}
              options={disableFromTimeOptions}
              selectedValue={selectedFromTime}
            ></SimpleDropdown>
          </div>
        </div>
      </div>
      <div className="toSection">
        <div className="toDateLabelValueWrapper">
          <div className="toDateLabel">To Date:</div>
          <div className="toDateValue">
            <Datepicker
              setDate={onChangeDisableToDate}
              selectedDate={disableToDate}
            ></Datepicker>
          </div>
        </div>

        <div className="toTimeLabelValueWrapper">
          <div className="toTimeLabel">To Time:</div>
          <div className="toTimeValue">
            <SimpleDropdown
              onChange={onChangeDisableToTime}
              options={disableToTimeOptions}
              selectedValue={selectedToTime}
            ></SimpleDropdown>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

const PicsDisable = (props) => {
  return (
    <div className="mtPicsDisableModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Disable PICS</div>
      </div>
      <div className="body">
        <PicsDisableModalContent
          onChangeDisableFromDate={props.onChangeDisableFromDate}
          onChangeDisableFromTime={props.onChangeDisableFromTime}
          onChangeDisableToDate={props.onChangeDisableToDate}
          onChangeDisableToTime={props.onChangeDisableToTime}
          disableFromDate={props.disableFromDate}
          disableToDate={props.disableToDate}
          disableFromTimeOptions={props.disableFromTimeOptions}
          disableToTimeOptions={props.disableToTimeOptions}
          selectedFromTime={props.selectedFromTime}
          selectedToTime={props.selectedToTime}
        ></PicsDisableModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={props.onSave}>
          Save
        </button>
        <button id="resetButton" onClick={props.onResetDisablePics}>
          Reset
        </button>
        <button id="cancelButton" onClick={props.toggleDisablePicsModal}>
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
const PicsDisableModal = (props) => {
  const context = useContext(myContext);

  const {
    onChangeDisableFromDate,
    onChangeDisableFromTime,
    onChangeDisableToDate,
    onChangeDisableToTime,
    disableFromDate,
    disableToDate,
    disableFromTimeOptions,
    disableToTimeOptions,
    selectedToTime,
    selectedFromTime,
    onResetDisablePics,
  } = {
    ...context.state.gridScreenData,
    ...context,
  };
  return (
    <Modal isOpen={props.isDisablePicsModalOpen} style={customStyles}>
      <PicsDisable
        onChangeDisableFromDate={onChangeDisableFromDate}
        onChangeDisableFromTime={onChangeDisableFromTime}
        onChangeDisableToDate={onChangeDisableToDate}
        onChangeDisableToTime={onChangeDisableToTime}
        disableFromDate={disableFromDate}
        disableToDate={disableToDate}
        disableFromTimeOptions={disableFromTimeOptions}
        disableToTimeOptions={disableToTimeOptions}
        selectedFromTime={selectedFromTime}
        selectedToTime={selectedToTime}
        toggleDisablePicsModal={props.toggleDisablePicsModal}
        onResetDisablePics={onResetDisablePics}
      ></PicsDisable>
    </Modal>
  );
};
PicsDisable.propTypes = {
  onChangeDisableFromDate: PropTypes.any,
  onChangeDisableFromTime: PropTypes.any,
  onChangeDisableToDate: PropTypes.any,
  onChangeDisableToTime: PropTypes.any,
  disableFromDate: PropTypes.any,
  disableToDate: PropTypes.any,
  disableFromTimeOptions: PropTypes.any,
  disableToTimeOptions: PropTypes.any,
  selectedFromTime: PropTypes.any,
  selectedToTime: PropTypes.any,
  onResetDisablePics: PropTypes.any,
  onSave: PropTypes.any,
  toggleDisablePicsModal: PropTypes.any,
};
PicsDisableModalContent.propTypes = {};
PicsDisableModal.propTypes = {};
export { PicsDisableModal as PicsDisableModal };
