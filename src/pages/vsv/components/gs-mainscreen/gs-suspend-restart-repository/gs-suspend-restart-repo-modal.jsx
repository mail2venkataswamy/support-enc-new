import React, { useContext } from "react";
import Modal from "react-modal";
import "./gs-suspend-restart-repo-modal.scss";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import SuspendRestartRepoGrid from "./gs-suspend-restart-grid/gs-suspend-restart-grid.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

let vendorOptions = [
  { label: "CURRENT", value: "Current" },
  { label: "HISTORICAL", value: "Historical" },
];
const SusupendRestartModalContent = (props) => {
  const { suspendRestartTireData } = props.data;
  return (
    <div>
      <fieldset>
        <legend>Tier Designation</legend>
        <div className="label">Tier:</div>
        <Checkbox
          checkboxData={suspendRestartTireData}
          onCheckbox={props.onSelectSuspendRestartTireCheckbox}
          onAllCheked={props.onAllSuspendRestartTireChecked}
          isAllChecked={props.data.isAllSuspendRestartTireChecked}
        ></Checkbox>
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
          <div className="cuspinLabelAndInputWrapper">
            <div className="cuspinLabel">Cusip:</div>
            <div className="cuspinInputWrapper"></div>
          </div>
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
      <SuspendRestartRepoGrid data={props.data}></SuspendRestartRepoGrid>
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
        <SusupendRestartModalContent
          onSelectSuspendRestartTireCheckbox={
            props.onSelectSuspendRestartTireCheckbox
          }
          onAllSuspendRestartTireChecked={props.onAllSuspendRestartTireChecked}
          data={props.data}
        ></SusupendRestartModalContent>
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
const SusupendRestartModal = () => {
  const context = useContext(GovContext);
  const {
    isSuspendRestartRepoModalOpen,
    closeSuspendRestartRepoModal,
    onSelectSuspendRestartTireCheckbox,
    onAllSuspendRestartTireChecked,
    suspendRestartTireData,
    suspendRestartGridData,
  } = {
    ...context.state.maintenanceScreenData,
    ...context,
  };
  return (
    <Modal isOpen={isSuspendRestartRepoModalOpen} style={customStyles}>
      <SuspendRestartRepo
        closeModal={closeSuspendRestartRepoModal}
        data={{
          suspendRestartTireData: suspendRestartTireData,
          suspendRestartGridData: suspendRestartGridData,
        }}
        onSelectSuspendRestartTireCheckbox={onSelectSuspendRestartTireCheckbox}
        onAllSuspendRestartTireChecked={onAllSuspendRestartTireChecked}
      ></SuspendRestartRepo>
    </Modal>
  );
};
export { SusupendRestartModal as SusupendRestartModal };
