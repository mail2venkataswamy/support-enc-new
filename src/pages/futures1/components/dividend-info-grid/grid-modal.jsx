import React, { useContext } from "react";
import Modal from "react-modal";
import "./grid-modal.scss";
import myContext from "../../../../components/context/futures-context1.jsx";
import DividendInfoGird from "./grid/dividend-info-grid.jsx";
const DividendInfoModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.dividendInfoGridState,
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

  const { toggleDividendInfoModalOpenModal } = {
    ...context,
    ...context.state.dividendInfoGridState,
  };
  return (
    <div className="peoDividendInfoContentWrapper">
      <div className="headerWrapper">
        <div className="header">Dividend Info</div>
        <div className="cancelButton">
          <button id="cancelButton" onClick={toggleDividendInfoModalOpenModal}>
            x
          </button>
        </div>
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
const DividendInfoModal = () => {
  const context = useContext(myContext);

  const { isDividendInfoModalOpen } = {
    ...context.state.dividendInfoGridState,
  };
  return (
    <Modal isOpen={isDividendInfoModalOpen} style={customStyles}>
      <DividendInfo></DividendInfo>
    </Modal>
  );
};

export { DividendInfoModal as DividendInfoModal };
