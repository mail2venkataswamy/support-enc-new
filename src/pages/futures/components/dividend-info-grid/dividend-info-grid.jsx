import React, { useContext, useEffect, useState } from "react";
import "./dividend-info-grid.scss";
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
    onGridReady,
    onBtnExport,
    getSelectedRowData,
    onSelectionChanged,
    onCellValueChanged,
    onCloseDividendInfoGrid,

    // getActiveTab,
  } = {
    ...context.state.dividendInfoGridState,
    ...context,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  let [showAllColumns, setShowAllColumns] = useState(false);

  return (
    <>
      <div className="messageAndNavigationWrapper">
        <div className="title">Dividend Info</div>
        <div className="close">
          <button onClick={onCloseDividendInfoGrid} className="closeButton">
            X
          </button>
        </div>
      </div>
      <div className="fEditCatHeaderActions">
        <div className="fEditCatRighttHeaderSection">
          {/*           <button onClick={() => setShowAllColumns(!showAllColumns)}>
            {showAllColumns ? "Show Default Columns" : "Show All Columns"}
          </button>
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
          </button>*/}
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
        gridHeight={"89%"}
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
