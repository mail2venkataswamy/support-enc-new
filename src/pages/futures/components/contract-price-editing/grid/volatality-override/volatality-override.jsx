import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./volatality-override.scss";
import myContext from "../../../../../../components/context/futures-context.jsx";
import RadioButton from "../../../../../../components/common/radio-button/radio-button.jsx";
import Datepicker from "../../../../../../components/common/datepicker/datepicker";
import WarningModal from "../../../../../../components/common/modal/warning/warning-modal";
import Prompt from "../../../../../../components/common/modal/prompt/prompt.jsx";

/* const VolatalityOverrideModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };


  return (
    
  );
}; */

const VolatalityOverride = () => {
  const context = useContext(myContext);
  const { toggleVolatalityOverrideModal } = {
    ...context,
    ...context.state.editPricingState,
  };
  const [isWarningModalOpen, toggleWarningModal] = useState(false);

  const [smoothingValue, setSmoothingValue] = useState("");
  const [contractsValue, setContractsValue] = useState("");
  const [eodIntradayValue, setEodIntradayValue] = useState("");
  const [isChecked, setClearValue] = useState(false);
  const [overrideDate, setOverrideDate] = useState(new Date());
  const [overrideValue, setOverrideValue] = useState("");
  const [isPromptModalOpen, togglePromptModal] = useState(false);

  const smoothingData = [
    {
      for: "smoothing",
      name: "smoothing",
      label: "Smoothing",
      type: "radio",
      value: "smoothing",
    },
    {
      for: "smoothing",
      name: "smoothing",
      label: "No Smoothing",
      type: "radio",
      value: "noSmoothing",
    },
  ];
  const contractsData = [
    {
      for: "contractsData",
      name: "contractsData",
      label: "All Contracts for Selected tenor",
      type: "radio",
      value: "allContracts",
    },
    {
      for: "contractsData",
      name: "contractsData",
      label: "Selected Option Contracts",
      type: "radio",
      value: "selectedContracts",
    },
  ];
  const eodIntradayData = [
    {
      for: "eodIntradayData",
      name: "eodIntradayData",
      label: "Apply to Intraday",
      type: "checkbox",
      value: "intraday",
    },
    {
      for: "eodIntradayData",
      name: "eodIntradayData",
      label: "Apply to EOD",
      type: "checkbox",
      value: "eod",
    },
  ];
  return (
    <div className="peoVolatalityOverrideContentWrapper">
      <div className="headerWrapper">
        <div className="header">Volatility Override</div>
      </div>
      <div className="body">
        <div>
          <fieldset className="wrapper">
            <legend></legend>
            <div className="peoLabelAndValue">
              <div className="peoLabel">Override Value:</div>
              <div className="peoValue">
                <input
                  type={"text"}
                  value={overrideValue}
                  onChange={(e) => setOverrideValue(e.target.value)}
                ></input>
                <div className="clearFiled">
                  <label>
                    <input
                      type={"checkbox"}
                      value={isChecked}
                      onChange={(e) => {
                        setClearValue(e.target.checked), setOverrideValue("");
                      }}
                    ></input>
                    Clear
                  </label>
                </div>
              </div>
            </div>
            <div className="peoLabelAndValue">
              <div className="peoLabel">Override End Date:</div>
              <div className="peoValue">
                <Datepicker
                  selectedDate={overrideDate}
                  onChange={(date) => setOverrideDate(date)}
                ></Datepicker>
              </div>
            </div>
          </fieldset>
          <fieldset className="wrapper">
            <legend></legend>
            <RadioButton
              radioButtonsData={contractsData}
              onChange={(e) => setContractsValue(e.target.value)}
              value={contractsValue}
            ></RadioButton>
          </fieldset>
          <fieldset className="wrapper">
            <legend></legend>
            <RadioButton
              radioButtonsData={eodIntradayData}
              onChange={(e) => setEodIntradayValue(e.target.value)}
              value={eodIntradayValue}
            ></RadioButton>
          </fieldset>
          <fieldset className="wrapper">
            <legend></legend>
            <RadioButton
              radioButtonsData={smoothingData}
              onChange={(e) => setSmoothingValue(e.target.value)}
              value={smoothingValue}
            ></RadioButton>
          </fieldset>
        </div>
      </div>
      <div className="footer">
        <button
          id="cancelButton"
          onClick={
            overrideValue !== ""
              ? () => togglePromptModal(!isPromptModalOpen)
              : () => toggleWarningModal(!isWarningModalOpen)
          }
        >
          Save
        </button>
        <button id="cancelButton" onClick={toggleVolatalityOverrideModal}>
          Cancel
        </button>
      </div>
      <WarningModal
        warningMessage="Please enter Volatility Override Value"
        isModalOpen={isWarningModalOpen}
        closeModal={toggleWarningModal}
      ></WarningModal>
      <Prompt
        isModalOpen={isPromptModalOpen}
        closeModal={togglePromptModal}
        onConfirm={() => togglePromptModal(false)}
        warningMessage="Are you sure, you want to save changes?"
      ></Prompt>
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
const VolatalityOverrideModal = () => {
  const context = useContext(myContext);

  const { isVolatalityOverrideModalOpen } = {
    ...context.state.editPricingState,
  };

  return (
    <>
      <Modal isOpen={isVolatalityOverrideModalOpen} style={customStyles}>
        <VolatalityOverride></VolatalityOverride>
      </Modal>
    </>
  );
};

export { VolatalityOverrideModal as VolatalityOverrideModal };
