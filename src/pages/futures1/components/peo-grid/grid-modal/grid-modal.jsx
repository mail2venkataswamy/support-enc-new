import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import Peogrid from "../grid/peo-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context1.jsx";
import { useState } from "react";
const PeoGridModal = () => {
  const context = useContext(myContext);
  const {
    showDerivativeGrid,
    toggleDerivativeGrid,
    savegridPosition,
    setgridPosition,
    isDerivateGridMax,
  } = {
    ...context.state.gridState,
    ...context,
    ...context.state.reactDragResizeModalState,
  };
  useEffect(() => {
    setgridPosition();
  }, [showDerivativeGrid]);
  const onFocus = () => {
    if (isDerivateGridMax) {
      let derivativeGrid = document.getElementsByClassName("derivativeGrid")[0];
      localStorage.setItem(
        "derivativeGridLastPosition",
        JSON.stringify(derivativeGrid.getAttribute("style"))
      );
      console.log(
        "derivativeGridLastPosition",
        JSON.parse(localStorage.getItem("derivativeGridLastPosition"))
      );
    }
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
      onFocus={(() => savegridPosition("derivativeGrid"), onFocus)}
      //onFocus={onFocus}
    >
      <Peogrid />
    </ReactModal>
  );
};
export default PeoGridModal;
