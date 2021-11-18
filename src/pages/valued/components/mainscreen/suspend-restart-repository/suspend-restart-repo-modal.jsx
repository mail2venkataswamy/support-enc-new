import React from "react";
import Modal from "react-modal";
import "./suspend-restart-repo-modal.scss";
import Tier from "../../../../../components/common/tier-level/tier-level.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import SuspendRestartRepoGrid from "./suspend-restart-grid/suspend-restart-grid.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
import InputSuggestions from "../../../../../components/common/suggestions/suggestions.jsx";

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
        <Checkbox
          checkboxData={props.data.suspendRestartTireData}
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
            <div className="cuspinInputWrapper">
              {/*  <InputWrapper onChange={props.onChangeCuspinValue}></InputWrapper> */}
              <InputSuggestions
              //onChange={props.onChangeCuspinValue}
              //results={props.data.filterPanelData.cuspinSuggestionResult}
              //onClick={props.onClickSuggestionItem}
              //value={props.data.filterPanelData.cuspinValue}
              //keySearch={props.data.filterPanelData.cuspinSearchValue}
              ></InputSuggestions>
            </div>
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
          data={props.data}
          onSelectSuspendRestartTireCheckbox={
            props.onSelectSuspendRestartTireCheckbox
          }
          onAllSuspendRestartTireChecked={props.onAllSuspendRestartTireChecked}
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
const SusupendRestartModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      <SuspendRestartRepo
        closeModal={props.closeModal}
        data={props.data}
        onSelectSuspendRestartTireCheckbox={
          props.onSelectSuspendRestartTireCheckbox
        }
        onAllSuspendRestartTireChecked={props.onAllSuspendRestartTireChecked}
      ></SuspendRestartRepo>
    </Modal>
  );
};
export { SusupendRestartModal as SusupendRestartModal };
