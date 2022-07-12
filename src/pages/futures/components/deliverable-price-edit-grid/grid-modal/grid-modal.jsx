import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import DividendInfoGrid from "../grid/deliverable-price-edit-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context.jsx";
const PeoGridModal = () => {
  const context = useContext(myContext);
  const {
    showDeliverablePriceEditGrid,
    toggleDeliverablePriceEditingGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.deliverablePriceEditState,
    ...context,
  };
  useEffect(() => {
    setgridPosition();
  }, [showDeliverablePriceEditGrid]);
  const onFocus = () => {
    let derivativeGrid = document.getElementsByClassName(
      "deliverablePriceEditGrid"
    )[0];
    localStorage.setItem(
      "deliverablePriceEditGridLastPosition",
      JSON.stringify(derivativeGrid.getAttribute("style"))
    );
    console.log(
      "deliverablePriceEditGridLastPosition",
      JSON.parse(localStorage.getItem("deliverablePriceEditGridLastPosition"))
    );
  };
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleDeliverablePriceEditingGrid}
      isOpen={showDeliverablePriceEditGrid}
      top={38}
      left={823}
      className="deliverablePriceEditGrid"
      onFocus={(() => savegridPosition("deliverablePriceEditGrid"), onFocus)}
      //onFocus={onFocus}
    >
      <DividendInfoGrid />
    </ReactModal>
  );
};
export default PeoGridModal;
