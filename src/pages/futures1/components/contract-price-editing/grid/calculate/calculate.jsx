import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./calculate.scss";
import myContext from "../../../../../../components/context/futures-context1.jsx";
import RadioButton from "../../../../../../components/common/radio-button/radio-button.jsx";
import SimpleDropdown from "../../../../../../components/common/simple-dropdown/dropdown";
import InputSuggestion from "../../../peo-input-suggestions/peo-input-suggestions";
import Datepicker from "../../../../../../components/common/datepicker/datepicker";
const CalculateModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };
  const [callPutValue, setCallPutValue] = useState("");
  const [seriesDate, setSeriesDate] = useState(new Date());
  const [countryValue, setCountryValue] = useState("");
  const callPutData = [
    {
      for: "callPutData",
      name: "callPutData",
      label: "Call",
      type: "radio",
      value: "call",
    },
    {
      for: "callPutData",
      name: "callPutData",
      label: "Put",
      type: "radio",
      value: "put",
    },
  ];
  const countryData = [
    {
      for: "countryData",
      name: "countryData",
      label: "American",
      type: "radio",
      value: "american",
    },
    {
      for: "countryData",
      name: "countryData",
      label: "European",
      type: "radio",
      value: "european",
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
      {/*       <fieldset className="wrapper">
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
      </fieldset> */}
      <div className="wrapper">
        <div className="leftSection">
          <div className="peoLabelAndValue">
            <div className="peoLabel"></div>
            <div className="peoValue">
              <button className="simulateModeButton">Simulate Mode</button>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Underlyning:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Strike:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Series Date:</div>
            <div className="peoValue">
              <Datepicker
                selectedDate={seriesDate}
                onChange={(date) => setSeriesDate(date)}
              ></Datepicker>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel"></div>
            <div className="peoValue">
              <RadioButton
                radioButtonsData={callPutData}
                onChange={(e) => setCallPutValue(e.target.value)}
                value={callPutValue}
              ></RadioButton>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel"></div>
            <div className="peoValue">
              <RadioButton
                radioButtonsData={countryData}
                onChange={(e) => setCountryValue(e.target.value)}
                value={countryValue}
              ></RadioButton>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Days to Exp:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Interest Rate:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Dividend Yield:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Ex. Date:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Dividend:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Frequency:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Dividend Amount:</div>
            <div className="peoValue">
              <InputSuggestion></InputSuggestion>
            </div>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Prior Day Final Vol:</div>
            <div className="peoValue">
              <InputSuggestion disabled={true}></InputSuggestion>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="peoLabelAndValue">
            <div className="peoLabel">Mark Price:</div>
            <div className="peoValue">
              <InputSuggestion disabled={false}></InputSuggestion>
            </div>
            <button className="calcVol">Calc Vol</button>
          </div>
          <div className="peoLabelAndValue">
            <div className="peoLabel">Volatility:</div>
            <div className="peoValue">
              <InputSuggestion disabled={false}></InputSuggestion>
            </div>
            <button className="calcMark">Calc Mark</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Calculate = () => {
  const context = useContext(myContext);

  const { toggleCalculateModal } = {
    ...context,
    ...context.state.editPricingState,
  };
  return (
    <div className="peoCalculateContentWrapper">
      <div className="headerWrapper">
        <div className="header">Calculate</div>
      </div>
      <div className="body">
        <CalculateModalContent></CalculateModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={() => console.log("to be added")}>
          Save
        </button>
        <button id="cancelButton" onClick={toggleCalculateModal}>
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
const CalculateModal = () => {
  const context = useContext(myContext);

  const { isCalculateModalOpen } = {
    ...context.state.editPricingState,
  };
  return (
    <Modal isOpen={isCalculateModalOpen} style={customStyles}>
      <Calculate></Calculate>
    </Modal>
  );
};

export { CalculateModal as CalculateModal };
