import React, { useContext, useEffect, useState } from "react";
import "./dividend-info-grid.scss";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../components/context/futures-context.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal.jsx";

const EditcatGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);

  const {
    rowData,
    colDefs,
    defaultColDef,
    onGridReady,
    onBtnExport,
    toggleDividendInfoGrid,
    toggleMinimizeDividendInfoGrid,
    // getActiveTab,
  } = {
    ...context.state.dividendInfoGridState,
    ...context,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  const [isMax, setMinOrMax] = useState(false);
  const maximizeModal = () => {
    const flexible_modal =
      document.getElementsByClassName("dividendInfoGrid")[0];
    flexible_modal.setAttribute(
      "style",
      `${
        isMax
          ? "width: 400px; height: 200px; top: 252px; left: 825px;z-index:1"
          : "top: 32px; left: 12px; width: 99%; height: 584px;z-index:2"
      }`
    );
  };
  return (
    <>
      <div className="messageAndNavigationWrapper">
        <div className="header">
          <div className="title">Dividend Info</div>
          <div className="rightSection">
            <div className="minButton">
              <button onClick={toggleMinimizeDividendInfoGrid}>-</button>
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
              <button onClick={toggleDividendInfoGrid}>X</button>
            </div>
          </div>
        </div>

        <div className="fEditCatHeaderActions">
          <div className="fEditCatRighttHeaderSection">
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
        //getSelectedRowData={getSelectedRowData}
        //onSelectionChanged={onSelectionChanged}
        //onCellValueChanged={onCellValueChanged}
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
