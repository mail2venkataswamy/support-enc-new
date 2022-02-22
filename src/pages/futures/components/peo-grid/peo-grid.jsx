import React, { useContext, useEffect, useState } from "react";
import "./peo-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/futures-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";

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
  } = {
    ...context.state.gridState,
    ...context,
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${rowData.length}</div>`;
    ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
      <div className="futuresGridHeader">Future Contracts</div>
      <div className="messageAndNavigationWrapper">
        <div className="title">Messages</div>
        <div className="close">
          <button onClick={showPlaceHolderScreen} className="closeButton">
            X
          </button>
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
              ></input>
            </div>
          </div>
          <button>Deliverables</button>
          <button>Devidend Info</button>
          <button>Exchange Info</button>
          <button>Save</button>
          <button>Cancel</button>
          <button>Init VI Capture</button>
          <button>Export Derivative</button>
          <button>Review Futures</button>
          <button>Review OOF</button>
          <button>Decimal Format</button>
          <button>Implied Format</button>
          <button>Ignore Missing Exch Flag</button>
          <button>Flag Missing Exch Flag</button>
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
      <div className="futuresGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={553}
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
      <div className="futuresSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
    </>
  );
};

export default ThresholdGrid;
