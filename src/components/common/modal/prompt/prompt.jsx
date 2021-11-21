import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./prompt.scss";
//import stopIcon from "../../../../resources/images/error-image-icon-23.jpg";
export const Warning = (props) => {
  return (
    <div className="warningWrapper">
      <div className="header"></div>
      <div className="contentAndStopIconWrapper">
        <div className="warningMessage">{props.data.warningMessage}</div>
      </div>
      <div className="okAndCancelButtonWrapper">
        <button className="okButton" onClick={() => props.closeModal(true)}>
          OK
        </button>
        <button
          className="cancelButton"
          onClick={() => props.closeModal(false)}
        >
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
const WarningModal = (props) => {
  //const { ContentComponent } = { props };
  return (
    <Modal
      isOpen={props.isModalOpen}
      contentLabel="Warning"
      style={customStyles}
      contentLabel="Warning"
    >
      <Warning data={props} closeModal={props.closeModal} />
    </Modal>
  );
};

export default WarningModal;
