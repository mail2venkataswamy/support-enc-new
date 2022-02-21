import React, { useContext, useEffect, useState } from "react";
import "./data-grid.scss";
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
    ...context.state.dailyReturnsPricingState,
    ...context,
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="drpDailyReturnsPricingWrapper">
       <div className="titleText">Daily Return Details</div>
        <Aggrid
          rowData={rowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={480}
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
      </div>
    </>
  );
};

export default FilterGrid;
