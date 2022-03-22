import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./pt-threshold-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/pics-threshold-context.jsx";
import { PicsDisableModal } from "./pics-disable-modal/pics-disable-modal.jsx";
import { AddThresholdsModal } from "./pt-add-thresholds/pt-add-thresholds.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);
  //const [, togglePromptModal] = useState(false);

  const {
    priceSystemAlertStateRowData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
    isDisablePicsModalOpen,
    toggleDisablePicsModal,
    toggleAddThresholdsModal,
    selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
  } = {
    ...context.state.gridScreenData,
    ...context,
  };
  let isGridPopulated =
    priceSystemAlertStateRowData && priceSystemAlertStateRowData.length > 0;
  return (
    <>
      <div className="ptGridHeader">Pics Thresholds</div>
      <div className="ptHeaderActions">
        <div className="ptLeftHeaderSection">
          <button onClick={toggleAddThresholdsModal}>Add</button>
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
                ? toggleDisablePicsModal
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            PICS disable
          </button>
        </div>
        <div className="ptRighttHeaderSection">
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
      <div className="ptGridWrapper"></div>
      <Aggrid
        rowData={priceSystemAlertStateRowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={630}
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
      <PicsDisableModal
        isDisablePicsModalOpen={isDisablePicsModalOpen}
        toggleDisablePicsModal={toggleDisablePicsModal}
      ></PicsDisableModal>
      <AddThresholdsModal></AddThresholdsModal>
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
    </>
  );
};

ThresholdGrid.propTypes = {};
ThresholdGrid.defaultProps = {};
export default ThresholdGrid;
