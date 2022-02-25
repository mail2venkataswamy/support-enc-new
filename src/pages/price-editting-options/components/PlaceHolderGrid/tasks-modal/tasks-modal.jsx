import React, { useContext } from "react";
import Modal from "react-modal";
import "./tasks-modal.scss";
import myContext from "../../../../../components/context/peo-context.jsx";
import TasksGrid from "./task-grid/task-grid.jsx";
const TasksModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.tasksData,
    ...context,
  };

  return (
    <div>
      <div className="addAndDeleteButtonsWrapper">
        <button className="deleteButton">Tasks</button>
        <button className="deleteButton">Price Editting</button>
      </div>
      <TasksGrid></TasksGrid>
    </div>
  );
};

const Tasks = () => {
  const context = useContext(myContext);

  const { toggleTasksModal } = {
    ...context,
    ...context.state.tasksData,
  };
  return (
    <div className="peoTasksContentWrapper">
      <div className="headerWrapper">
        <div className="header">Tasks</div>
      </div>
      <div className="body">
        <TasksModalContent></TasksModalContent>
      </div>
      <div className="footer">
        <button id="cancelButton" onClick={toggleTasksModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TasksModal = () => {
  const context = useContext(myContext);

  const { isTasksModalOpen } = {
    ...context.state.tasksData,
  };
  return (
    <Modal isOpen={isTasksModalOpen} style={customStyles}>
      <Tasks></Tasks>
    </Modal>
  );
};

export { TasksModal as TasksModal };
