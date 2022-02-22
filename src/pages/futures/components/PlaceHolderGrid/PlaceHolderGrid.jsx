import React, { useContext, useEffect, useState } from "react";
import "./PlaceHolderGrid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/futures-context.jsx";
import { TasksModal } from "./tasks-modal/tasks-modal.jsx";

const PlaceHoldergrid = () => {
  const context = useContext(myContext);
  const {
    onClickFutureContracts,
    onClickEditDashBoardGrid,
    onClickDeliverablePriceEditGrid,
    toggleTasksModal,
  } = {
    ...context,
  };

  return (
    <div className="actionHoldergridContainer">
      <div className="footer">
        <button>Master File Upd</button>
        <button>Smoothing Upd</button>|
        <button onClick={toggleTasksModal}>Tasks</button>
        <button onClick={onClickFutureContracts}>Future Contracts</button>
        <button onClick={onClickEditDashBoardGrid}>
          Edit Category Dashboard
        </button>
        <button onClick={onClickDeliverablePriceEditGrid}>
          Deliverable - Price Editing
        </button>
      </div>
      <TasksModal></TasksModal>
    </div>
  );
};

export default PlaceHoldergrid;
