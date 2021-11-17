import React from "react";
import Modal from "react-modal";
import "./threshold.scss";
import Thresholdgrid from "./threshold-grid/threshold-grid.jsx";
const ThresholdModalContent = (props) => {
  return (
    <div>
      <div className="addAndDeleteButtonsWrapper">
        <button className="addButton">Add</button>
        <button className="deleteButton">Delete</button>
      </div>
      <Thresholdgrid />
    </div>
  );
};

const Threshold = (props) => {
  return (
    <div className="modalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Thresholds</div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <ThresholdModalContent></ThresholdModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={props.onSave}>
          Save
        </button>
        <button id="resetButton" onClick={props.onReset}>
          Reset
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
const ThresholdModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      {/*       <ModalContent data={props} closeModal={props.closeModal} /> */}
      <Threshold closeModal={props.closeModal}></Threshold>
    </Modal>
  );
};

export { ThresholdModal as ThresholdModal };
