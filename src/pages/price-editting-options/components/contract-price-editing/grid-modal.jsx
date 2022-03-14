import React, { useContext } from "react";
import Modal from "react-modal";
import "./grid-modal.scss";
import myContext from "../../../../components/context/peo-context.jsx";
import DividendInfoGird from "./grid/contrat-price-grid.jsx";
const DividendInfoModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.editPricingState,
    ...context,
  };

  return (
    <div>
      <DividendInfoGird></DividendInfoGird>
    </div>
  );
};

const DividendInfo = () => {
  const context = useContext(myContext);

  const { toggleContractEditModal,selectedSymbolValue } = {
    ...context,
    ...context.state.editPricingState,
  };
  return (
    <div className="peoPriceEditContentWrapper">
      <div className="headerWrapper">
        <div className="header">Contract - Price Editing - {selectedSymbolValue}</div>
        <div className="cancelButton"><button id="cancelButton" onClick={toggleContractEditModal}>
          x
        </button></div>
      </div>
      <div className="body">
        <DividendInfoModalContent></DividendInfoModalContent>
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
const PriceEditModal = () => {
  const context = useContext(myContext);

  const { isEditPriceOpen } = {
    ...context.state.editPricingState,
  };
  return (
    <Modal isOpen={isEditPriceOpen} style={customStyles}>
      <DividendInfo></DividendInfo>
    </Modal>
  );
};

export { PriceEditModal as PriceEditModal };
