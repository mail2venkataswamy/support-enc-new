import React, { useContext } from "react";
import "./PlaceHolderGrid.scss";
import myContext from "../../../../components/context/peo-context.jsx";
import { TasksModal } from "./tasks-modal/tasks-modal.jsx";

const PlaceHoldergrid = () => {
  const context = useContext(myContext);
  const { onClickEditDashBoardGrid, toggleTasksModal } = {
    ...context,
  };

  return (
    <div className="actionHoldergridContainer">
      <div className="footer">
        <button>Master File Upd</button>
        <button>Smoothing Upd</button>|
        <button onClick={toggleTasksModal}>Tasks</button>
        <button onClick={onClickEditDashBoardGrid}>
          Edit Category Dashboard
        </button>
      </div>
      <TasksModal></TasksModal>
    </div>
  );
};

export default PlaceHoldergrid;
