import React, { useContext, useEffect, useState } from "react";
import "./contrat-price-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/futures-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../../components/common/modal/prompt/prompt.jsx";
import { ExcludeModal } from "./exclude/exclude.jsx";
import { SubstituteModal } from "./substitute/substitute.jsx";
import { LockVolatilityModal } from "./lock-volatility/lock-volatility.jsx";
import { VolatalityOverrideModal } from "./volatality-override/volatality-override.jsx";
import { BorrowCostOverrideModal } from "./borrow-cost-override/borrow-cost-override.jsx";
import SmoothingPrompt from "../../../../../components/common/modal/prompt/prompt.jsx";
import WithoutSmoothingPrompt from "../../../../../components/common/modal/prompt/prompt.jsx";
import { CalculateModal } from "./calculate/calculate.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);

  const {
    rowData,
    colDefs,
    defaultColDef,
    //onBtPrint,
    onGridReady,
    //onBtnExport,
    onRefreshEditContractPriceGridData,
    selectedGridRows,
    getSelectedRowData,
    //onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    toggleExcludeModal,
    toggleSubstituteModal,
    toggleLockVolatilityModal,
    onSelectionChangedForContractPriceEdit,
    toggleVolatalityOverrideModal,
    toggleBorrowCostOverrideModal,
    isSmoothingPromptModalOpen,
    toggleSmoothingPromptModal,
    onConfirmSmoothingPropmt,
    isWithoutSmoothingPromptModalOpen,
    toggleWithoutSmoothingPromptModal,
    onConfirmWithoutSmoothingPropmt,
    toggleCalculateModal,
    toggleContractPriceEditingGrid,
    selectedSymbolValue,
    toggleMinimizeContractPriceEditingGrid,
    savegridPosition,
  } = {
    ...context.state.editPricingState,
    ...context,
    ...context.state.agGridState,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  const [isMax, setMinOrMax] = useState(false);
  const maximizeModal = () => {
    const flexible_modal = document.getElementsByClassName(
      "contractPriceEditingGrid"
    )[0];
    flexible_modal.setAttribute(
      "style",
      `${
        isMax
          ? "width: 400px; height: 200px; top: 193px; left: 447px; z-index: 1;"
          : "top: 32px; left: 12px; width: 99%; height: 584px;z-index:2"
      }`
    );

    savegridPosition("contractPriceEditingGrid");
  };
  return (
    <div className="cpdContainer">
      {/*    <div className="peoPriceEditGridHeader">Derivative</div> */}
      <div className="header">
        <div className="title">Option on Future Series - Price Editing</div>
        <div className="rightSection">
          <div className="minButton">
            <button onClick={toggleMinimizeContractPriceEditingGrid}>-</button>
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
            <button onClick={toggleContractPriceEditingGrid}>X</button>
          </div>
        </div>
      </div>
      <div className="messageAndNavigationWrapper">
        {/*         <div className="title">Messages</div> */}
      </div>
      <div className="peoPriceEditHeaderActions">
        <div className="peoPriceEditLeftHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? onRefreshEditContractPriceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="big"
          >
            Previous Derivative
          </button>
          <button
            onClick={
              isGridPopulated
                ? onRefreshEditContractPriceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="big"
          >
            Previous Derivative
          </button>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleExcludeModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="medium"
          >
            Exclude
          </button>
          <button
            id="medium"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleSubstituteModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Substitute
          </button>
          <button
            id="medium"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleLockVolatilityModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Lock Volatility
          </button>
          <button
            id="big"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleLockVolatilityModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Unlock Volatility
          </button>
          <button
            id="small"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleCalculateModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Calculate
          </button>
          <button
            id="big"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleVolatalityOverrideModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Volatility Override
          </button>
          <button
            id="big"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleBorrowCostOverrideModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Borrow Cost Override
          </button>
          <button
            id="big"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleSmoothingPromptModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Save-Smoothing
          </button>
          <button
            id="big"
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleWithoutSmoothingPromptModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Save-No Smoothing
          </button>
          <button
            id="medium"
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
          {/*           <button id="big">Refresh</button> */}
        </div>
        <div className="peoPriceEditRighttHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? onRefreshEditContractPriceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Refresh
          </button>
        </div>
      </div>
      <div className="peoPriceEditGridWrapper"></div>
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
        onSelectionChanged={onSelectionChangedForContractPriceEdit}
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
      <SmoothingPrompt
        isModalOpen={isSmoothingPromptModalOpen}
        closeModal={toggleSmoothingPromptModal}
        onConfirm={onConfirmSmoothingPropmt}
        warningMessage="Are you saving edits with smoothing?"
      ></SmoothingPrompt>
      <WithoutSmoothingPrompt
        isModalOpen={isWithoutSmoothingPromptModalOpen}
        closeModal={toggleWithoutSmoothingPromptModal}
        onConfirm={onConfirmWithoutSmoothingPropmt}
        warningMessage="Are you saving edits without smoothing?"
      ></WithoutSmoothingPrompt>
      <ExcludeModal></ExcludeModal>
      <SubstituteModal></SubstituteModal>
      <LockVolatilityModal></LockVolatilityModal>
      <VolatalityOverrideModal></VolatalityOverrideModal>
      <BorrowCostOverrideModal></BorrowCostOverrideModal>
      <CalculateModal></CalculateModal>
    </div>
  );
};

export default ThresholdGrid;
