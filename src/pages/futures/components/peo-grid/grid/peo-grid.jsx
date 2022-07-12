import React, { useContext, useEffect, useState } from "react";
import "./peo-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/futures-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../../components/common/modal/prompt/prompt.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);
  const paginationOptions = [
    { value: 50 },
    { value: 100 },
    { value: 500 },
    { value: 1000 },
  ];
  const {
    rowData,
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
    toggleModifyStModal,
    showPlaceHolderScreen,
    onClickDeliverablePriceEditGrid,
    onClickDividendInfo,
    onClickExchangeInfo,
    toggleMinimizeDerivativeGrid,
    toggleDerivativeGrid,
    toggleExchangeInfoGrid,
    onCellClicked,
  } = {
    ...context.state.gridState,
    //...context.state.dividendInfoGridState,
    ...context,
  };
  let isGridPopulated = rowData && rowData.length > 0;
  const [isMax, setMinOrMax] = useState(false);
  const maximizeModal = () => {
    const flexible_modal = document.getElementsByClassName("derivativeGrid")[0];
    flexible_modal.setAttribute(
      "style",
      `${
        isMax
          ? "width: 400px; height: 200px; top: 37px; left: 446px;z-index:1"
          : "top: 32px; left: 12px; width: 99%; height: 584px;z-index:2"
      }`
    );
  };
  return (
    <>
      <div className="peoDerivativeGridContainer">
        <div className="header">
          <div className="title">Future Contracts</div>
          <div className="rightSection">
            <div className="minButton">
              <button onClick={toggleMinimizeDerivativeGrid}>-</button>
            </div>
            <div className="maxButton">
              <button
                onClick={() => {
                  maximizeModal(), setMinOrMax(!isMax);
                }}
              >
                {isMax ? "[[]]" : "[]"}
              </button>
            </div>
            <div className="closeButton">
              <button onClick={toggleDerivativeGrid}>X</button>
            </div>
          </div>
        </div>

        <div className="futuresHeaderActions">
          <div className="futuresLeftHeaderSection">
            <div className="futuresLabelAndValue">
              <div className="futuresLabel"></div>
              <label for="ca">Symbol:</label>
              <div className="futuresValue">
                <input
                  //checked={isCorporateActionChecked}
                  //onChange={onChangeCorporateAction}
                  type="text"
                  className="symbol"
                ></input>
              </div>
            </div>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? context.toggleDeliverablePriceEditingGrid
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Deliverables
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? context.toggleDividendInfoGrid
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Devidend Info
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? toggleExchangeInfoGrid
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Exchange Info
            </button>
            <button
              id="save"
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Save
            </button>
            <button
              id="cancel"
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Cancel
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Init VI Capture
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Export Future Contract
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Review Futures
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Review OOF
            </button>
            <button>Decimal Format</button>
            <button>Implied Format</button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Ignore Missing Exch Flag
            </button>
            <button
              onClick={
                isGridPopulated
                  ? selectedGridRows && selectedGridRows.length > 0
                    ? () => {}
                    : () =>
                        toggleRecordMustBeSelectedModal(
                          !isRecordMustBeselectedModalOpen
                        )
                  : () => toggleWarningModal(!isWarningModalOpen)
              }
            >
              Flag Missing Exch Flag
            </button>
          </div>
          <div className="futuresRighttHeaderSection">
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
      </div>
      <div className="futuresGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={465}
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
        onCellClicked={onCellClicked}
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
    </>
  );
};

export default ThresholdGrid;
