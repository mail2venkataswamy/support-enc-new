import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./lock-volatility.scss";
import myContext from "../../../../../../components/context/futures-context.jsx";
import RadioButton from "../../../../../../components/common/radio-button/radio-button.jsx";
import SimpleDropdown from "../../../../../../components/common/simple-dropdown/dropdown";

const LockVolatilityModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };
  const [lockValue, setLockValue] = useState("");

  const lockData = [
    {
      for: "lockData",
      name: "lockData",
      label: "EOD",
      type: "radio",
      value: "eod",
    },
    {
      for: "lockData",
      name: "lockData",
      label: "Indefinite",
      type: "radio",
      value: "indefinite",
    },
  ];
  const lockOptions = [
    {
      label: "CALL",
      value: "call",
    },
    {
      label: "PUT",
      value: "put",
    },
  ];

  return (
    <div>
      <fieldset className="wrapper">
        <legend></legend>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Select to apply:</div>
          <div className="peoValue">
            <SimpleDropdown options={lockOptions}></SimpleDropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Lock Till:</div>
          <div className="peoValue">
            <RadioButton
              radioButtonsData={lockData}
              onChange={(e) => setLockValue(e.target.value)}
              value={lockValue}
            ></RadioButton>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const LockVolatility = () => {
  const context = useContext(myContext);

  const { toggleLockVolatilityModal } = {
    ...context,
    ...context.state.editPricingState,
  };
  return (
    <div className="peoLockVolatilityContentWrapper">
      <div className="headerWrapper">
        <div className="header">Call/Put Selector</div>
      </div>
      <div className="body">
        <LockVolatilityModalContent></LockVolatilityModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={() => console.log("to be added")}>
          Save
        </button>
        <button id="resetButton" onClick={() => console.log("to be added")}>
          Reset
        </button>
        <button id="cancelButton" onClick={toggleLockVolatilityModal}>
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
const LockVolatilityModal = () => {
  const context = useContext(myContext);

  const { isLockVolatilityModalOpen } = {
    ...context.state.editPricingState,
  };
  return (
    <Modal isOpen={isLockVolatilityModalOpen} style={customStyles}>
      <LockVolatility></LockVolatility>
    </Modal>
  );
};

export { LockVolatilityModal as LockVolatilityModal };
