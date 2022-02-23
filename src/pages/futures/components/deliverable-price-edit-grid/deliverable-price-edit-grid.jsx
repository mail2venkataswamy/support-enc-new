import React, { useContext, useEffect, useState } from "react";
import "./deliverable-price-edit-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/futures-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal.jsx";

const EditcatGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);

  const {
    rowData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
    getSelectedRowData,
    onSelectionChanged,
    onCellValueChanged,
    onCloseDeliverablePriceEditGrid,
    // getActiveTab,
  } = {
    ...context.state.deliverablePriceEditState,
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
    //getActiveTab("tab-0");
  }, []);
  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
      <div className="messageAndNavigationWrapper">
        <div className="title">Deliverable - price Editting</div>
        <div className="close">
          <button
            onClick={onCloseDeliverablePriceEditGrid}
            className="closeButton"
          >
            X
          </button>
        </div>
      </div>
      <div className="fEditCatHeaderActions">
        <div className="fEditCatRighttHeaderSection">
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
      <div className="fEditCatGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={635}
        gridWidth={"auto"}
        rowSelection="multiple"
        //pagination={true}
        //paginationPageSize={100}
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
    </>
  );
};

export default EditcatGrid;
