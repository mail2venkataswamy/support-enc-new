import React, { useContext, useEffect, useState } from "react";
import "./vd-grid.scss";
import Aggrid from "../../../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../../../components/context/publishing-statistics-context.jsx";
import WarningModal from "../../../../../../../components/common/modal/warning/warning-modal.jsx";

const VdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);

  const {
    rowData,
    colDefs,
    defaultColDef,
    onGridReady,
    onBtPrint,
    onBtnExport,
    getSelectedRowData,
    onSelectionChanged,
    onCellValueChanged,
  } = {
    ...context.state.validationDetailsData,
    ...context,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
      <div className="vdHeaderActions">
        <div className="vdRighttHeaderSection">
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
      <div className="vdGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={540}
        gridWidth={"auto"}
        rowSelection="multiple"
        //pagination={true}
        //paginationPageSize={100}
        rowHeight={22}
        //headerHeight={33}
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

export default VdGrid;
