import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-interest-rate.scss";
import myContext from "../../../../../components/context/interest-rates-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
const AddInrModalContent = () => {
  const context = useContext(myContext);

  const {
    currencyOptions,
    selectedAddInrCurrencyValue,
    onChangeAddInrCurrencyValue,
  } = {
    ...context.state.addInrData,
    ...context,
  };

  return (
    <div>
      <fieldset>
        <legend>Add New Interest Rate Information</legend>
        <div className="irLabelAndValue">
          <div className="irLabel">Currency:</div>
          <div className="irValue">
            <Dropdown
              options={currencyOptions}
              selectedValue={selectedAddInrCurrencyValue}
              onChange={onChangeAddInrCurrencyValue}
            ></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Tenor:</div>
          <div className="irValue">
            <Dropdown></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Type:</div>
          <div className="irValue">
            <Dropdown></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Day Count Basis:</div>
          <div className="irValue">
            <Dropdown></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Fix/Float:</div>
          <div className="irValue">
            <Dropdown></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Yearly Payment Frequency:</div>
          <div className="irValue">
            <Dropdown></Dropdown>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Bloomberg Ticker:</div>
          <div className="irValue">
            <input></input>
          </div>
        </div>
        <div className="irLabelAndValue">
          <div className="irLabel">Rate:</div>
          <div className="irValue">
            <input></input>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const Inr = () => {
  const context = useContext(myContext);

  const { onSave, onReset, toggleAddInrModal } = {
    ...context,
    ...context.state.addInrData,
  };
  return (
    <div className="irAddInrModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Add New Interesr Rate</div>
      </div>
      <div className="body">
        <AddInrModalContent></AddInrModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={onSave}>
          Save
        </button>
        <button id="cancelButton" onClick={toggleAddInrModal}>
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
const AddInrModal = () => {
  const context = useContext(myContext);

  const { isAddInrModalOpen } = {
    ...context.state.addInrData,
  };
  return (
    <Modal isOpen={isAddInrModalOpen} style={customStyles}>
      <Inr></Inr>
    </Modal>
  );
};

export { AddInrModal as AddInrModal };
