import React, { useContext, useEffect } from "react";
import ReactModal from "react-modal-resizable-draggable";
import EditDashboardGrid from "../grid/edit-cat-dashboard-grid.jsx";
import "./grid-modal.scss";
import myContext from "../../../../../components/context/futures-context1.jsx";
const EditDashboardGridModal = () => {
  const context = useContext(myContext);
  const {
    showEditDashboardGrid,
    toggleEditDashboardGrid,
    savegridPosition,
    setgridPosition,
  } = {
    ...context.state.editCatDashboardState,
    ...context,
  };
  useEffect(() => {
    setgridPosition();
  }, [showEditDashboardGrid]);
  return (
    <ReactModal
      initWidth={400}
      initHeight={200}
      onRequestClose={toggleEditDashboardGrid}
      isOpen={showEditDashboardGrid}
      top={33}
      left={861}
      className="editDashboardGrid"
      onFocus={() => savegridPosition("editDashboardGrid")}
    >
      <EditDashboardGrid />
    </ReactModal>
  );
};
export default EditDashboardGridModal;
