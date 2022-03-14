import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./substitute.scss";
import myContext from "../../../../../../components/context/peo-context.jsx";
import RadioButton from "../../../../../../components/common/radio-button/radio-button.jsx";
import SimpleDropdown from "../../../../../../components/common/simple-dropdown/dropdown";


const SubstituteModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };
  const [actionValue,setActionValue]=useState('');
  const [itemstosxcludeValue,setItemstosxcludeData]=useState('');
  const [callsPutsValue,setCallsPutsValue]=useState('');
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
        name: "itemstoSubstitute",
        label: "All Contracts For Current Option Seriies",
        type: "radio",
        value: "allContracts",
      },
      {
        for: "itemstoSubstitute",
        name: "itemstoSubstitute",
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
  const priceTouseOptions=[{
    label:"Bloomberg Finance LP.",value:"bloombergFinanceLp"
  },
  {
    label:"Exchange Files",value:"exchangeFiles"
  },
  {
    label:"ICE DATA SERVICES",value:"iceDataServices"
  },
  {
    label:"Thomson Reuters Corp.",value:"thomsonReutersCopr"
  }]



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
        <legend>Items to Substitute</legend>
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
        <legend>Price To Use</legend>
<SimpleDropdown options={priceTouseOptions}></SimpleDropdown>
        </fieldset>
    </div>
  );
};

const Substitute = () => {
  const context = useContext(myContext);

  const { toggleSubstituteModal } = {
    ...context,
    ...context.state.editPricingState,
  };
  return (
    <div className="peoSubstituteContentWrapper">
      <div className="headerWrapper">
        <div className="header">Substitute</div>
      </div>
      <div className="body">
        <SubstituteModalContent></SubstituteModalContent>
      </div>
      <div className="footer">
      <button id="cancelButton" onClick={()=>console.log("to be added")}>
          Save
        </button>
        <button id="cancelButton" onClick={toggleSubstituteModal}>
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
const SubstituteModal = () => {
  const context = useContext(myContext);

  const { isSubstituteModalOpen } = {
    ...context.state.editPricingState,
  };
  return (
    <Modal isOpen={isSubstituteModalOpen} style={customStyles}>
      <Substitute></Substitute>
    </Modal>
  );
};

export { SubstituteModal as SubstituteModal };
