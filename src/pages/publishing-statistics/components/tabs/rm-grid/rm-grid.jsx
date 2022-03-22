import React, { useContext, useEffect, useState } from "react";
import "./rm-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/publishing-statistics-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../../components/common/modal/prompt/prompt.jsx";
import DatePicker from "../../../../../components/common/datepicker/datepicker.jsx";
import { ValidationDetailModal } from "./validation-details/validation-details.jsx";
import Prompt from "./release/prompt/prompt.jsx";

const PsGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);

  const {
    rowData,
    colDefs,
    defaultColDef,
    onGridReady,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    getActiveTab,
    toggleValidationDetailModal,
    isReleaseWarningModelOpen,
    toggleReleasePromptModal,
    onReleaseSelectedRecords,
    openValidationDetails,
    selectedGridRows,
  } = {
    ...context.state.releaseManagerData,
    ...context,
  };
  useEffect(() => {
    getActiveTab("tab-1");
  }, []);
  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
      <div className="psHeaderActions">
        <div className="psLeftHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleReleasePromptModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Release
          </button>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleValidationDetailModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Validation Details
          </button>
          <button
            onClick={
              isGridPopulated
                ? () => {}
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            <div className="dateLabelAndPicker">
              <div>Activity Date:</div>
              <div>
                <DatePicker selectedDate={new Date()}></DatePicker>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="psGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={540}
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
      <ValidationDetailModal></ValidationDetailModal>
      <Prompt
        isModalOpen={isReleaseWarningModelOpen}
        closeModal={toggleReleasePromptModal}
        onConfirm={onReleaseSelectedRecords}
        openValidationDetails={openValidationDetails}
        warningMessage="All Expiring Index Option Underlying Risk Prices have not been published."
        warningMessage1="You are about to certify that selected prices have been edited and published successfully. Do you
        Wish to contnue?"
      ></Prompt>
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
      <div className="psSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
    </>
  );
};

export default PsGrid;
