import React, { useContext, useEffect, useState } from "react";
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
  } = {
    ...context.state.filterGridState,
    ...context,
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="drpFilterGridWrapper">
        <Aggrid
          rowData={rowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={160}
          gridWidth={"80%"}
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
      </div>
    </>
  );
};

export default FilterGrid;
