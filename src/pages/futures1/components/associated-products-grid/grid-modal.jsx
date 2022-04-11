import React, { useContext } from "react";
import Modal from "react-modal";
import "./grid-modal.scss";
import myContext from "../../../../components/context/futures-context1.jsx";
import TasksGrid from "./grid/associated-products-grid.jsx";
const TasksModalContent = () => {
  const context = useContext(myContext);

  const {} = {
    ...context.state.associatedProductsState,
    ...context,
  };

  return (
    <div>
      <TasksGrid></TasksGrid>
    </div>
  );
};

const Tasks = () => {
  const context = useContext(myContext);

  const { toggleAssociatedProductsModal } = {
    ...context,
    ...context.state.associatedProductsState,
  };
  return (
    <div className="peoAssociatedProductsContentWrapper">
      <div className="headerWrapper">
        <div className="header">Associated Products</div>
        <div className="cancelButton">
          <button id="cancelButton" onClick={toggleAssociatedProductsModal}>
            x
          </button>
        </div>
      </div>
      <div className="body">
        <TasksModalContent></TasksModalContent>
      </div>
      {/*       <div className="footer">
        <button id="cancelButton" onClick={toggleAssociatedProductsModal}>
          Cancel
        </button>
      </div> */}
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
const AssociatedProducts = () => {
  const context = useContext(myContext);

  const { isAssociatedProductsModalOpen } = {
    ...context.state.associatedProductsState,
  };
  return (
    <Modal isOpen={isAssociatedProductsModalOpen} style={customStyles}>
      <Tasks></Tasks>
    </Modal>
  );
};

export { AssociatedProducts as AssociatedProducts };
