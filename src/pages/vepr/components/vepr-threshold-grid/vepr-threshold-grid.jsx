import React, { useContext, useEffect, useState } from "react";
import "./vepr-threshold-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/vepr-context.jsx";
import { AddThresholdsModal } from "./vepr-add-thresholds/vepr-add-thresholds.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";
import { ModifyPriceRestriction } from "./modify-price-restriction/modify-price-restriction.jsx";

const ThresholdGrid = () => {
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
    toggleAddThresholdsModal,
    selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    toggleModifyPriceResModal,
  } = {
    ...context.state.gridScreenData,
    ...context,
  };

  let isGridPopulated =
    priceSystemAlertStateRowData && priceSystemAlertStateRowData.length > 0;
  return (
    <>
      <div className="veprGridHeader">
        Vendor/Exchange Price Restriction Grid
      </div>
      <div className="veprHeaderActions">
        <div className="veprLeftHeaderSection">
          <button onClick={toggleAddThresholdsModal}>Add</button>
          <button onClick={toggleModifyPriceResModal}>Modify</button>
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
        <div className="veprRighttHeaderSection">
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
      <div className="veprGridWrapper"></div>
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
      <AddThresholdsModal></AddThresholdsModal>
      <ModifyPriceRestriction></ModifyPriceRestriction>
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
      <div className="veprSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
    </>
  );
};

export default ThresholdGrid;
