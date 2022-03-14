import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./exclude.scss";
import myContext from "../../../../../../components/context/peo-context.jsx";
import RadioButton from "../../../../../../components/common/radio-button/radio-button.jsx";


const ExcludeModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };
  const [actionValue,setActionValue]=useState('');
  const [itemstosxcludeValue,setItemstosxcludeData]=useState('');
  const [callsPutsValue,setCallsPutsValue]=useState('');
  const [askBidValue,setAskBidValue]=useState('');
  const actionData = [
    {
        for: "action",
        name: "action",
        label: "Enable Exclusion",
        type: "radio",
        value: "enableAction",
      },
      {
        for: "action",
        name: "action",
        label: "Disable Exclusion",
        type: "radio",
        value: "disableAction",
      },
  ];
  const itemstosxcludeData = [
    {
        for: "itemstosxclude",
        name: "itemstoexclude",
        label: "All Contracts For Current Option Seriies",
        type: "radio",
        value: "allContracts",
      },
      {
        for: "itemstoexclude",
        name: "itemstoexclude",
        label: "Selected Option Contracts",
        type: "radio",
        value: "selectedContracts",
      },
  ];
  const callsPutsData = [
    {
        for: "callsPuts",
        name: "callsPuts",
        label: "Apply to CALLS",
        type: "radio",
        value: "applyToCalls",
      },
      {
        for: "callsPuts",
        name: "callsPuts",
        label: "Apply to PUTS",
        type: "radio",
        value: "applyToPuts",
      },
  ];
  const askBidData = [
    {
        for: "askBid",
        name: "askBid",
        label: "Apply to Ask",
        type: "checkbox",
        value: "applyToAsk",
      },
      {
        for: "askBid",
        name: "askBid",
        label: "Apply to Bid",
        type: "checkbox",
        value: "applyToBid",
      },
  ];


  return (
    <div>
      <fieldset className="wrapper">
        <legend>Action</legend>
        <RadioButton
                radioButtonsData={actionData}
                onChange={e=>setActionValue(e.target.value)}
                value={actionValue}
              ></RadioButton>
        </fieldset>
        <fieldset className="wrapper">
        <legend>Items to Exclude</legend>
        <RadioButton
                radioButtonsData={itemstosxcludeData}
                onChange={e=>setItemstosxcludeData(e.target.value)}
                value={itemstosxcludeValue}
              ></RadioButton>
        </fieldset>
        <fieldset className="wrapper">
        <legend></legend>
        <RadioButton
                radioButtonsData={callsPutsData}
                onChange={e=>setCallsPutsValue(e.target.value)}
                value={callsPutsValue}
              ></RadioButton>
        </fieldset>
        <fieldset className="wrapper">
        <legend></legend>

                   <RadioButton
                radioButtonsData={askBidData}
                onChange={e=>setAskBidValue(e.target.value)}
                value={askBidValue}
              ></RadioButton>
        </fieldset>
    </div>
  );
};

const Exclude = () => {
  const context = useContext(myContext);

  const { toggleExcludeModal } = {
    ...context,
    ...context.state.editPricingState,
  };
  return (
    <div className="peoExcludeContentWrapper">
      <div className="headerWrapper">
        <div className="header">Exclude</div>
      </div>
      <div className="body">
        <ExcludeModalContent></ExcludeModalContent>
      </div>
      <div className="footer">
      <button id="cancelButton" onClick={()=>console.log("to be added")}>
          Save
        </button>
        <button id="cancelButton" onClick={toggleExcludeModal}>
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
const ExcludeModal = () => {
  const context = useContext(myContext);

  const { isExcludeModalOpen } = {
    ...context.state.editPricingState,
  };
  return (
    <Modal isOpen={isExcludeModalOpen} style={customStyles}>
      <Exclude></Exclude>
    </Modal>
  );
};

export { ExcludeModal as ExcludeModal };
