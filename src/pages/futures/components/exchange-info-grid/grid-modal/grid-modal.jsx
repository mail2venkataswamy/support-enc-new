import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import Peogrid from "../grid/exchange-info-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context.jsx";

const PeoGridModal = () => {
  const context = useContext(myContext);
  const {
    showExchangeInfoGrid,
    toggleExchangeInfoGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.exchangeInfoGridState,
    ...context,
    ...context.state.reactDragResizeModalState,
  };
  useEffect(() => {
    setgridPosition();
  }, [showExchangeInfoGrid]);
  const onFocus = () => {
    let derivativeGrid = document.getElementsByClassName(
      "showExchangeInfoGrid"
    )[0];
    localStorage.setItem(
      "showExchangeInfoGridLastPosition",
      JSON.stringify(derivativeGrid.getAttribute("style"))
    );
    console.log(
      "showExchangeInfoGridLastPosition",
      JSON.parse(localStorage.getItem("showExchangeInfoGridLastPosition"))
    );
  };
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleExchangeInfoGrid}
      isOpen={showExchangeInfoGrid}
      top={321}
      left={1105}
      className="showExchangeInfoGrid"
      onFocus={(() => savegridPosition("showExchangeInfoGrid"), onFocus)}
      //onFocus={onFocus}
    >
      <Peogrid />
    </ReactModal>
  );
};
export default PeoGridModal;
