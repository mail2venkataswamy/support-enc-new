import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import DividendInfoGrid from "./grid/dividend-info-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context.jsx";
const PeoGridModal = () => {
  const context = useContext(myContext);
  const {
    showDividendInfoGrid,
    toggleDividendInfoGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.dividendInfoGridState,
    ...context,
  };
  useEffect(() => {
    setgridPosition();
  }, [showDividendInfoGrid]);
  const onFocus = () => {
    let derivativeGrid = document.getElementsByClassName("dividendInfoGrid")[0];
    localStorage.setItem(
      "dividendInfoGridLastPosition",
      JSON.stringify(derivativeGrid.getAttribute("style"))
    );
    console.log(
      "dividendInfoGridLastPosition",
      JSON.parse(localStorage.getItem("dividendInfoGridLastPosition"))
    );
  };
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleDividendInfoGrid}
      isOpen={showDividendInfoGrid}
      top={37}
      left={446}
      className="dividendInfoGrid"
      onFocus={(() => savegridPosition("dividendInfoGrid"), onFocus)}
      //onFocus={onFocus}
    >
      <DividendInfoGrid />
    </ReactModal>
  );
};
export default PeoGridModal;
