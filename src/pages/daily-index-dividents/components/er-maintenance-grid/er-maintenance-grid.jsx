import React, { useContext, useEffect, useState } from "react";
import "./er-maintenance-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/daily-index-dividend-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";
import Dropdown from "../../../../components/common/simple-dropdown/dropdown.jsx";
import { ThresholdModal } from "./er-threshold/er-threshold.jsx";
import { AddInrModal } from "./add-interest-rate/add-interest-rate.jsx";

const SymbolTranslationGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [
    isRecordMustBeselectedModalOpen,
    toggleRecordMustBeSelectedModal,
  ] = useState(false);

  const {
    maintenanceGridData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
    selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    setEdittedToPrevOptions,
    selectedSetEdittedToPrevValue,
    onChangeSetEdittedToPrevValue,
    isInvalidPublishRateWarningModalOpen,
    toggleInvalidPublishRateWarningModal,
    isVendorDataDownloadPromptModalOpen,
    toggleVendorDataDownloadPromptModal,
    onConfirmVendorDataDownload,
    toggleThresholdModal,
    toggleAddInrModal,
  } = {
    ...context.state.maintenanceScreenData,
    ...context,
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${maintenanceGridData.length}</div>`;
    ele && ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated = maintenanceGridData && maintenanceGridData.length > 0;
  return (
    <div className="didMaintGridWrapper">
      <div className="didGridHeader">Maintenance Screen</div>
      <div className="didHeaderActions">
        <div className="didLeftHeaderSection">
          <button>
            <Dropdown
              options={setEdittedToPrevOptions}
              selectedValue={selectedSetEdittedToPrevValue}
              onChange={onChangeSetEdittedToPrevValue}
              id="setEdittedToPrev"
            ></Dropdown>
          </button>
          <button
            onClick={
              isGridPopulated
                ? toggleThresholdModal
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Thresholds
          </button>
          <button
            onClick={
              isGridPopulated
                ? toggleAddInrModal
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Add
          </button>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleDeletePromptModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Delete
          </button>
          <button
            onClick={
              isGridPopulated
                ? toggleInvalidPublishRateWarningModal
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Publish
          </button>
          <button
            onClick={
              isGridPopulated
                ? toggleVendorDataDownloadPromptModal
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Import Vendor Data
          </button>
        </div>
        <div className="didRighttHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? onRefreshMaintenanceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Refresh
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtPrint
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Print
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtnExport
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Export
          </button>
        </div>
      </div>
      <ThresholdModal></ThresholdModal>
      <AddInrModal></AddInrModal>
      <div className="didGridWrapper"></div>
      <Aggrid
        rowData={maintenanceGridData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={"73%"}
        gridWidth={"auto"}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={100}
        rowHeight={22}
        headerHeight={33}
        onGridReady={onGridReady}
        getSelectedRowData={getSelectedRowData}
        onSelectionChanged={onSelectionChanged}
        onCellValueChanged={onCellValueChanged}
      />
      <WarningModal
        warningMessage="Grid must be populated"
        isModalOpen={isWarningModalOpen}
        closeModal={toggleWarningModal}
      ></WarningModal>
      <WarningModal
        warningMessage="Record must be selected"
        isModalOpen={isRecordMustBeselectedModalOpen}
        closeModal={toggleRecordMustBeSelectedModal}
      ></WarningModal>
      <RecordMustBeSelected
        isModalOpen={isDeleteGridRecordPromptModalOpen}
        closeModal={toggleDeletePromptModal}
        onConfirm={onDeleteSelectedRecords}
        warningMessage="Are you sure to delete the record?"
      ></RecordMustBeSelected>
      <div className="didSaveAndCancelWrapper">
        <button className="mtCancel secondary">Cancel</button>
        <button className="mtSave primary">Save</button>
      </div>
      <WarningModal
        warningMessage="All Daily Discrete Index Dividends will be Published. Do you want to continue?"
        isModalOpen={isInvalidPublishRateWarningModalOpen}
        closeModal={toggleInvalidPublishRateWarningModal}
      ></WarningModal>
      <RecordMustBeSelected
        isModalOpen={isVendorDataDownloadPromptModalOpen}
        closeModal={toggleVendorDataDownloadPromptModal}
        onConfirm={onConfirmVendorDataDownload}
        warningMessage="Latest Vendor Data will be downloaded from Vendor, Continue?"
      ></RecordMustBeSelected>
    </div>
  );
};

export default SymbolTranslationGrid;
