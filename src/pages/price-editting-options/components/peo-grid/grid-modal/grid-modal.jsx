import React, { useContext } from "react";
import ReactModal from "react-modal-resizable-draggable";
import Peogrid from "../grid/peo-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/peo-context.jsx";
const PeoGridModal = () => {
  const context = useContext(myContext);
  const { showDerivativeGrid, toggleDerivativeGrid } = {
    ...context.state.gridState,
    ...context,
  };
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleDerivativeGrid}
      isOpen={showDerivativeGrid}
      top={37}
      left={446}
      className="derivativeGrid"
    >
      <Peogrid />
    </ReactModal>
  );
};
export default PeoGridModal;
