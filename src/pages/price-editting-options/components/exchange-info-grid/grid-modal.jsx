import React, { useContext } from "react";
import Modal from "react-modal";
import "./grid-modal.scss";
import myContext from "../../../../components/context/peo-context.jsx";
import ExchangenfoGird from "./grid/exchange-info-grid.jsx";
const ExchangenfoModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.exchangeInfoGridState,
    ...context,
  };

  return (
    <div>
      <ExchangenfoGird></ExchangenfoGird>
    </div>
  );
};

const Exchangenfo = () => {
  const context = useContext(myContext);

  const { toggleExchangeInfoGridModal } = {
    ...context,
    ...context.state.exchangeInfoGridState,
  };
  return (
    <div className="peoExchangeInfoContentWrapper">
      <div className="headerWrapper">
        <div className="header">Exchange Info</div>
        <div className="cancelButton"><button id="cancelButton" onClick={toggleExchangeInfoGridModal}>
          x
        </button></div>
      </div>
      <div className="body">
        <ExchangenfoModalContent></ExchangenfoModalContent>
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
const ExchangeInfoModal = () => {
  const context = useContext(myContext);

  const { isExchangeInfoModalOpen } = {
    ...context.state.exchangeInfoGridState,
  };
  return (
    <Modal isOpen={isExchangeInfoModalOpen} style={customStyles}>
      <Exchangenfo></Exchangenfo>
    </Modal>
  );
};

export { ExchangeInfoModal as ExchangeInfoModal };
