import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import Peogrid from "../grid/edit-cat-dashboard-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context.jsx";

const PeoGridModal = () => {
  const context = useContext(myContext);
  console.log(context.state.editCatDashboardState.showEditCatDashboardGrid);
  const {
    showEditCatDashboardGrid,
    toggleEditCatDashboardGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.editCatDashboardState,
    ...context,
    ...context.state.reactDragResizeModalState,
  };
  useEffect(() => {
    setgridPosition();
  }, [showEditCatDashboardGrid]);
  const onFocus = () => {
    let derivativeGrid = document.getElementsByClassName(
      "editCatDashboardGrid"
    )[0];
    localStorage.setItem(
      "editCatDashboardGridLastPosition",
      JSON.stringify(derivativeGrid.getAttribute("style"))
    );
    console.log(
      "editCatDashboardGridLastPosition",
      JSON.parse(localStorage.getItem("editCatDashboardGridLastPosition"))
    );
  };
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleEditCatDashboardGrid}
      isOpen={showEditCatDashboardGrid}
      top={37}
      left={446}
      className="editCatDashboardGrid"
      onFocus={(() => savegridPosition("editCatDashboardGrid"), onFocus)}
      //onFocus={onFocus}
    >
      <Peogrid />
    </ReactModal>
  );
};
export default PeoGridModal;
