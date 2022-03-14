import React, { useContext, useEffect, useState } from "react";
import "./contrat-price-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/peo-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../../components/common/modal/prompt/prompt.jsx";
import {ExcludeModal} from "./exclude/exclude.jsx";
import {SubstituteModal} from "./substitute/substitute.jsx";
const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [
    isRecordMustBeselectedModalOpen,
    toggleRecordMustBeSelectedModal,
  ] = useState(false);

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
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    toggleExcludeModal,
    toggleSubstituteModal
  } = {
    ...context.state.editPricingState,
    ...context,
    ...context.state.agGridState
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${rowData.length}</div>`;
    ele && ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
   {/*    <div className="peoPriceEditGridHeader">Derivative</div> */}
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
          <button id="medium"    onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleSubstituteModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }>Substitute</button>
          <button id="medium">Lock Volatility</button>
          <button id="small">Calculate</button>
          <button id="big">Volatility Override</button>
          <button id="big">Borrow Cost Override</button>
          <button id="big">Save-Smoothing</button>
          <button id="big">Save-No Smoothing</button>
          <button id="medium">Cancel</button>
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
{/*           <button
            onClick={
              isGridPopulated
                ? onBtPrint
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Print
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtnExport
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Export
          </button> */}
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
      <ExcludeModal></ExcludeModal>
      <SubstituteModal></SubstituteModal>
    </>
  );
};

export default ThresholdGrid;