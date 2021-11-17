import React from "react";
import "./mainscreen.scss";
import MaintenanceHeaders from "./maintenance-headers/maintenance-headers.jsx";
import Mainscreengrid from "./maintenance-grid/maintenance-grid.jsx";
const mainScreen = (props) => {
  let matenanceDataLastPublishDate = new Date();
  return (
    <div className="maintenance">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Maintenance Screen</div>
      </div>
      <MaintenanceHeaders
        data={props.data}
        onClickPriceRollOverrideButton={props.onClickPriceRollOverrideButton}
        closePriceRollOverrideWarningModal={
          props.closePriceRollOverrideWarningModal
        }
        onSelectReview={props.onSelectReview}
        closeGridMustSelectedModal={props.closeGridMustSelectedModal}
        closeThresholdModal={props.closeThresholdModal}
        onClickThresholdButton={props.onClickThresholdButton}
        onClickThresholdButton={props.onClickThresholdButton}
        onClickSuspendRestartRepoButton={props.onClickSuspendRestartRepoButton}
        closeSuspendRestartRepoModal={props.closeSuspendRestartRepoModal}
        closePublishValuedSecuritiesModal={
          props.closePublishValuedSecuritiesModal
        }
        onClickPublishValuedSecuritiesButton={
          props.onClickPublishValuedSecuritiesButton
        }
        onRefreshMaintenanceGridData={props.onRefreshMaintenanceGridData}
        onAllPublishTireChecked={props.onAllPublishTireChecked}
        onSelectPublishTireCheckbox={props.onSelectPublishTireCheckbox}
        onSelectPublishTypeCheckbox={props.onSelectPublishTypeCheckbox}
        onAllPublishTypeChecked={props.onAllPublishTypeChecked}
        onResetPublish={props.onResetPublish}
        onPublish={props.onPublish}
        closePriceRollOverrideModal={props.closePriceRollOverrideModal}
        onChangePriceOverrideValue={props.onChangePriceOverrideValue}
        setPriceOverrideTillDate={props.setPriceOverrideTillDate}
        onChangePriceTypeValue={props.onChangePriceTypeValue}
        onSavePriceOverrideValue={props.onSavePriceOverrideValue}
        getSelectedRowData={props.getSelectedRowData}
        onGridReady={props.onGridReady}
        onCellValueChanged={props.onCellValueChanged}
      ></MaintenanceHeaders>
      {/*      <Mainscreengrid /> */}
      <div className="saveCancelPublishDateWrapper">
        <div className="publishDateWrapper">
          Last Published Date:
          {props.data.maintenanceScreenData.matenanceDataLastPublishDate}
        </div>
        <div className="cancelAndSaveButtonWrapper">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default mainScreen;
