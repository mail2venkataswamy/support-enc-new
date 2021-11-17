import React, { useContext } from "react";
import Modal from "react-modal";
import "./modal.scss";
export const ModalContent = (props) => {
  return (
    <div className="modalContentWrapper">
      <div className="header">Thresholds</div>
      <div className="contentWrapper"></div>
      <div className="buttonsWrapper">
        <button>Save</button>
        <button>Reset</button>
        <button onClick={props.closeModal}>Cancel</button>
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
const Modalpopup = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      <ModalContent data={props} closeModal={props.closeModal} />
    </Modal>
  );
};

export default Modalpopup;
