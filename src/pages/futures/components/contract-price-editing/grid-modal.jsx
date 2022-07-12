import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import Contractgrid from "./grid/contrat-price-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../components/context/futures-context.jsx";
const ContractPriceEditingGridModal = () => {
  const context = useContext(myContext);
  const {
    showContractPriceEditingGrid,
    toggleContractPriceEditingGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.editPricingState,
    ...context,
  };
  useEffect(() => {
    setgridPosition();
  }, [showContractPriceEditingGrid]);
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleContractPriceEditingGrid}
      isOpen={showContractPriceEditingGrid}
      className="contractPriceEditingGrid"
      top={193}
      left={447}
      onFocus={() => savegridPosition("contractPriceEditingGrid")}
    >
      <Contractgrid />
    </ReactModal>
  );
};
export default ContractPriceEditingGridModal;
