import React, { useContext } from "react";
import Modal from "react-modal";
import "./validation-details.scss";
import myContext from "../../../../../../components/context/publishing-statistics-context.jsx";
import VdGrid from "./vd-grid/vd-grid.jsx";
const ValidationDetailModalContent = () => {
  return (
    <div>
      <VdGrid></VdGrid>
    </div>
  );
};

const ValidationDetail = () => {
  const context = useContext(myContext);

  const { toggleValidationDetailModal } = {
    ...context,
  };
  return (
    <div className="vdModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Validation Details</div>
      </div>
      <div className="body">
        <ValidationDetailModalContent />
      </div>
      <div className="footer">
        <button id="cancelButton" onClick={toggleValidationDetailModal}>
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
const ValidationDetailModal = () => {
  const context = useContext(myContext);

  const { isvalidationDetailOpen } = {
    ...context.state.validationDetailsData,
  };
  return (
    <Modal isOpen={isvalidationDetailOpen} style={customStyles}>
      <ValidationDetail></ValidationDetail>
    </Modal>
  );
};

export { ValidationDetailModal as ValidationDetailModal };
