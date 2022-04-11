import React, { useContext } from "react";
import "./PlaceHolderGrid.scss";
import myContext from "../../../../components/context/peo-context.jsx";
import { TasksModal } from "./tasks-modal/tasks-modal.jsx";

const PlaceHoldergrid = () => {
  const context = useContext(myContext);
  const {
    onClickEditDashBoardGrid,
    toggleTasksModal,
    toggleMinimizeDerivativeGrid,
    showDerivativeGrid,
    showContractPriceEditingGrid,
    toggleMinimizeContractPriceEditingGrid,
    toggleEditDashboardGrid,
    setgridPosition,
  } = {
    ...context,
    ...context.state.gridState,
    ...context.state.editPricingState,
  };

  return (
    <div className="actionHoldergridContainer">
      <div className="footer">
        <button>Master File Upd</button>
        <button>Smoothing Upd</button>|
        <button onClick={toggleTasksModal}>Tasks</button>
        {showDerivativeGrid ? (
          <button onClick={toggleMinimizeDerivativeGrid}>Derivative</button>
        ) : (
          <></>
        )}
        {showContractPriceEditingGrid ? (
          <button onClick={toggleMinimizeContractPriceEditingGrid}>
            Contract Price Editing
          </button>
        ) : (
          <></>
        )}
        <button onClick={toggleEditDashboardGrid}>
          Edit Category Dashboard
        </button>
      </div>
      <TasksModal></TasksModal>
    </div>
  );
};

export default PlaceHoldergrid;
