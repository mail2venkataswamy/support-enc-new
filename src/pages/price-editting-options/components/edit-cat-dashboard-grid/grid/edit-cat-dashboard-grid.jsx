import React, { useContext, useEffect, useState } from "react";
import "./edit-cat-dashboard-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/peo-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal.jsx";

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
    toggleMinimizeEditDashboardGridGrid,
    toggleEditDashboardGrid,
    // getActiveTab,
    savegridPosition,
  } = {
    ...context.state.editCatDashboardState,
    ...context,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  const [isMax, setMinOrMax] = useState(false);
  const maximizeModal = () => {
    const flexible_modal =
      document.getElementsByClassName("editDashboardGrid")[0];
    flexible_modal.setAttribute(
      "style",
      `${
        isMax
          ? "width: 400px; height: 200px; top: 33px; left: 861px; z-index: 0;"
          : "top: 32px; left: 12px; width: 99%; height: 584px;z-index:3"
      }`
    );
    savegridPosition("editDashboardGrid");
  };
  return (
    <div className="editDashboardContainer">
      <div className="header">
        <div className="title">Edit Category Dashboard</div>
        <div className="rightSection">
          <div className="minButton">
            <button onClick={toggleMinimizeEditDashboardGridGrid}>-</button>
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
            <button onClick={toggleEditDashboardGrid}>X</button>
          </div>
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
        gridHeight={510}
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
    </div>
  );
};

export default EditcatGrid;
