import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./warning-modal.scss";
import stopIcon from "../../../../resources/images/error-image-icon-23.jpg";
export const Warning = (props) => {
  return (
    <div className="warningWrapper">
      <div className="header">
        <div className="headerCode">COMM0032</div>
        <div className="closeIcon">X</div>
      </div>
      <p></p>
      <div className="contentAndStopIconWrapper">
        <div className="stopIcon">
          <img src={stopIcon}></img>
        </div>
        <div className="warningMessage">{props.data.warningMessage}</div>
      </div>

      <button className="okButton" onClick={props.closeModal}>
        OK
      </button>
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
