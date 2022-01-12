import React, { useContext, useEffect, useState } from "react";
import "./st-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/pvsf-context.jsx";
import { AddOrModifySt } from "./add-st/add-st.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";

const SymbolTranslationGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);

  const {
    priceSystemAlertStateRowData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
    toggleAddPrimaryVendorSelectoionModal,
    selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    toggleModifyPvsfModal,
  } = {
    ...context.state.gridScreenData,
    ...context,
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${priceSystemAlertStateRowData.length}</div>`;
    ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated =
    priceSystemAlertStateRowData && priceSystemAlertStateRowData.length > 0;
  return (
    <>
      <div className="pvsfGridHeader">Primary Vendor Selection Grid</div>
      <div className="pvsfHeaderActions">
        <div className="pvsfLeftHeaderSection">
          <button onClick={toggleAddPrimaryVendorSelectoionModal}>Add</button>
          <button onClick={toggleModifyPvsfModal}>Modify</button>
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
        </div>
        <div className="pvsfRighttHeaderSection">
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
      <div className="pvsfGridWrapper"></div>
      <Aggrid
        rowData={priceSystemAlertStateRowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={590}
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
      <AddOrModifySt></AddOrModifySt>
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
      <div className="pvsfSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
    </>
  );
};

export default SymbolTranslationGrid;
