import React, { useContext, useEffect, useState, useMemo } from "react";
import "./filter-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/drp-context.jsx";

const FilterGrid = () => {
  const context = useContext(myContext);

  const {
    rowData,
    colDefs,
    defaultColDef,
    onGridReady,
    getSelectedRowData,
    onSelectionChanged,
    onCellValueChanged,
    getFocusedCell,
    onCellClicked,
    autoGroupColumnDef,
  } = {
    ...context.state.filterGridState,
    ...context,
  };

  return (
    <>
      <div className="drpFilterGridWrapper">
        <Aggrid
          rowData={rowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={129}
          gridWidth={"100%"}
          rowSelection="multiple"
          rowHeight={22}
          headerHeight={33}
          onGridReady={onGridReady}
          getSelectedRowData={getSelectedRowData}
          onSelectionChanged={onSelectionChanged}
          onCellValueChanged={onCellValueChanged}
          onCellClicked={onCellClicked}
          autoGroupColumnDef={autoGroupColumnDef}
        />
      </div>
    </>
  );
};

export default FilterGrid;
