import React, { useContext } from "react";
import "./PlaceHolderGrid.scss";
import myContext from "../../../../components/context/futures-context.jsx";
import { TasksModal } from "./tasks-modal/tasks-modal.jsx";

const PlaceHoldergrid = () => {
  const context = useContext(myContext);
  const {
    onClickFutureContracts,
    onClickEditDashBoardGrid,
    onClickDeliverablePriceEditGrid,
    toggleTasksModal,
    showTasks
  } = {
    ...context.state,
    ...context,
  };

  return (
    <div className="actionHoldergridContainer">
      <div className="footer">
        <button>Master File Upd</button>
        <button>Smoothing Upd</button>|
        <button onClick={toggleTasksModal}>Tasks</button>
        {showTasks?(<><button onClick={onClickFutureContracts}>Future Contracts</button>
        <button onClick={onClickEditDashBoardGrid}>
          Edit Category Dashboard
        </button>
        <button onClick={()=>onClickDeliverablePriceEditGrid("main")}>
          Deliverable - Price Editing
        </button></>):<></>}
      </div>
      <TasksModal></TasksModal>
    </div>
  );
};

export default PlaceHoldergrid;
