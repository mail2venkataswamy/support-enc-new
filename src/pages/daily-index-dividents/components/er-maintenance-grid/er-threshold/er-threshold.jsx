import React, { useContext } from "react";
import Modal from "react-modal";
import "./er-threshold.scss";
import myContext from "../../../../../components/context/exchange-rates-context.jsx";
import ThresholdGrid from "./er-threshold-grid/er-threshold-grid.jsx";
const ThresholdModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.thresholdData,
    ...context,
  };

  return (
    <div>
      <div className="addAndDeleteButtonsWrapper">
        <button className="addButton">Add</button>
        <button className="deleteButton">Delete</button>
      </div>
      <ThresholdGrid></ThresholdGrid>
    </div>
  );
};

const Threshold = () => {
  const context = useContext(myContext);

  const { onSave, onReset, toggleThresholdModal } = {
    ...context,
    ...context.state.thresholdData,
  };
  return (
    <div className="erAddSymbolTranslationsModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">View Thresholds</div>
      </div>
      <div className="body">
        <ThresholdModalContent></ThresholdModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={onSave}>
          Save
        </button>
        <button id="resetButton" onClick={onReset}>
          Reset
        </button>
        <button id="cancelButton" onClick={toggleThresholdModal}>
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
const ThresholdModal = () => {
  const context = useContext(myContext);

  const { isThresholdModalOpen } = {
    ...context.state.thresholdData,
  };
  return (
    <Modal isOpen={isThresholdModalOpen} style={customStyles}>
      <Threshold></Threshold>
    </Modal>
  );
};

export { ThresholdModal as ThresholdModal };
