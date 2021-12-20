import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./modal.scss";

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
  const [isOpen, setOpenModal] = useState(false);
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className={props.contentWrapperClass}>
        <div className="message"></div>
        <div>
          <button onClick={() => setOpenModal(!isOpen)}>OK</button>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
