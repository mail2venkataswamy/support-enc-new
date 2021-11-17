import React from "react";
import Modal from "react-modal";
import "./suspend-restart-repo-modal.scss";
import Tier from "../../../../../components/common/tier-level/tier-level.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import SuspendRestartRepoGrid from "./suspend-restart-grid/suspend-restart-grid.jsx";
let tierLevelData = [
  { label: "All", value: "All" },
  { label: "1", value: "one" },
  { label: "2", value: "two" },
  { label: "3", value: "three" },
  { label: "4", value: "four" },
];
let vendorOptions = [
  { label: "CURRENT", value: "Current" },
  { label: "HISTORICAL", value: "Historical" },
];
const SusupendRestartModalContent = (props) => {
  return (
    <div>
      <fieldset>
        <legend>Tier Designation</legend>
        <div className="label">Tier:</div>
        <Tier tierLevelData={tierLevelData}></Tier>
      </fieldset>
      <div className="vendorExchangeProductWrapper">
        <fieldset style={{ width: "33%" }}>
          <legend>Vendor</legend>
          <Dropdown options={vendorOptions}></Dropdown>
        </fieldset>
        <fieldset style={{ width: "33%" }}>
          <legend>Exchange</legend>
          <Dropdown options={vendorOptions}></Dropdown>
        </fieldset>
        <fieldset style={{ width: "33%" }}>
          <legend>Product Symbol</legend>
          <Dropdown options={vendorOptions}></Dropdown>
        </fieldset>
      </div>

      <div className="suspendRestartButtonsWrapper">
        <button className="suspendButton">Suspend</button>
        <button className="RestartButton">Restart</button>
      </div>
      <div className="refreshAndDeleteButtonsWrapper">
        <button className="deleteButton">Delete</button>
        <button className="refreshButton">Refresh</button>
      </div>
      <SuspendRestartRepoGrid></SuspendRestartRepoGrid>
    </div>
  );
};

const SuspendRestartRepo = (props) => {
  return (
    <div className="modalContentWrapper">
      <div className="headerWrapper">
        <div className="header">
          Valued Securities Suspend/Restart Repositories
        </div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <SusupendRestartModalContent></SusupendRestartModalContent>
      </div>
      <div className="footer">
        <button id="resetButton" onClick={props.onReset}>
          Reset
        </button>
        <button id="cancelButton" onClick={props.closeModal}>
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
const SusupendRestartModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      {/*       <ModalContent data={props} closeModal={props.closeModal} /> */}
      <SuspendRestartRepo closeModal={props.closeModal}></SuspendRestartRepo>
    </Modal>
  );
};

export { SusupendRestartModal as SusupendRestartModal };
