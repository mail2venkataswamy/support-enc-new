import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-interest-rate.scss";
import myContext from "../../../../../components/context/daily-index-dividend-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Datepicker from "../../../../../components/common/datepicker/datepicker.jsx";
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
        <legend>Dividend Information</legend>
        <div className="didLabelAndValue">
          <div className="didLabel">Cusip:</div>
          <div className="didValue">
           <input></input>
          </div>
        </div>
        <div className="didLabelAndValue">
          <div className="didLabel">Symbol:</div>
          <div className="didValue">
          <input></input>
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend>Dividend Details</legend>
        <div className="didLabelAndValue">
          <div className="didLabel">Dividend Currency:</div>
          <div className="didValue">
            <Dropdown
              options={currencyOptions}
              selectedValue={selectedAddInrCurrencyValue}
              onChange={onChangeAddInrCurrencyValue}
            ></Dropdown>
          </div>
        </div>
        <div className="didLabelAndValue">
          <div className="didLabel">Ex Date:</div>
          <div className="didValue">
             <Datepicker selectedDate={new Date()}></Datepicker>
          </div>
        </div>
        <div className="didLabelAndValue">
          <div className="didLabel">Amount:</div>
          <div className="didValue">
            <input></input>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const Inr = () => {
  const context = useContext(myContext);

  const { onSave, toggleAddInrModal } = {
    ...context,
    ...context.state.addInrData,
  };
  return (
    <div className="didAddInrModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Add Dividend</div>
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
