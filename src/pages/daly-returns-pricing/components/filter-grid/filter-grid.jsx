import React, { useContext, useEffect, useState } from "react";
import "./st-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/drp-context.jsx";

const FilterGrid = () => {
  const context = useContext(myContext);

  const {
    filterRowData,
    colDefs,
    defaultColDef,
    onGridReady,
    getSelectedRowData,
    onSelectionChanged,
    onCellValueChanged,
  } = {
    ...context.state.filterScreenState,
    ...context,
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="drpFilterGridWrapper">
        <Aggrid
          rowData={filterRowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={150}
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
      </div>
    </>
  );
};

export default FilterGrid;
