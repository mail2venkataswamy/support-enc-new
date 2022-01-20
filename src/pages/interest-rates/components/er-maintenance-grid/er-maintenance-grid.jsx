import React, { useContext, useEffect, useState } from "react";
import "./er-maintenance-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/interest-rates-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";
import Dropdown from "../../../../components/common/simple-dropdown/dropdown.jsx";
import { ThresholdModal } from "./ir-threshold/ir-threshold.jsx";
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
    //selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    setEdittedToPrevOptions,
    selectedSetEdittedToPrevValue,
    onChangeSetEdittedToPrevValue,
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
    ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated = maintenanceGridData && maintenanceGridData.length > 0;
  return (
    <div className="erMaintGridWrapper">
      <div className="erGridHeader">Maintenance Grid</div>
      <div className="erHeaderActions">
        <div className="erLeftHeaderSection">
          <button>
            <Dropdown
              options={setEdittedToPrevOptions}
              selectedValue={selectedSetEdittedToPrevValue}
              onChange={onChangeSetEdittedToPrevValue}
              id="setEdittedToPrev"
            ></Dropdown>
          </button>
          <button onClick={toggleThresholdModal}>Thresholds</button>
          <button onClick={toggleAddInrModal}>Add</button>
          <button>Delete</button>
          <button>Publish</button>
          <button>Import Vendor Data</button>
        </div>
        <div className="erRighttHeaderSection">
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
      <div className="erGridWrapper"></div>
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
      <div className="erSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
    </div>
  );
};

export default SymbolTranslationGrid;
