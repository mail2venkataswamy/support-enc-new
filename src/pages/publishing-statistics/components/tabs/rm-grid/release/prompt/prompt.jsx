import React, { useContext } from "react";
import Modal from "react-modal";
import "./prompt.scss";
//import stopIcon from "../../../../resources/images/error-image-icon-23.jpg";
export const Warning = (props) => {
  return (
    <div className="psWrningWrapper">
      <div className="header"></div>
      <div className="psContentAndStopIconWrapper">
        <div className="warningMessage">{props.data.warningMessage}</div>
        <div className="warningMessage1">{props.data.warningMessage1}</div>
      </div>
      <div className="okAndCancelButtonWrapper">
        <button className="okButton" onClick={() => props.onConfirm(true)}>
          Yes
        </button>
        <button
          className="cancelButton"
          onClick={() => props.closeModal(false)}
        >
          No
        </button>
        <button
          className="cancelButton"
          onClick={() => props.openValidationDetails()}
        >
          Validation Details
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
const WarningModal = (props) => {
  //const { ContentComponent } = { props };
  return (
    <Modal
      isOpen={props.isModalOpen}
      contentLabel="Warning"
      style={customStyles}
      contentLabel="Warning"
    >
      <Warning
        data={props}
        closeModal={props.closeModal}
        onConfirm={props.onConfirm}
        openValidationDetails={props.openValidationDetails}
      />
    </Modal>
  );
};

export default WarningModal;
