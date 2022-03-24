import React, { useContext, useEffect, useState } from "react";
import "./data-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/drp-context.jsx";

const DataGrid = () => {
  const context = useContext(myContext);

  const {
    rowData,
    colDefs,
    defaultColDef,
    //onGridReady,
    //getSelectedRowData,
    //onSelectionChanged,
    //onCellValueChanged,
    navigateToNextCell,
  } = {
    ...context.state.dailyReturnsPricingState,
    ...context,
  };
  return (
    <>
      <div className="drpDailyReturnsPricingWrapper">
        <div className="titleText">Daily Return Details</div>
        <Aggrid
          rowData={rowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={387}
          gridWidth={"auto"}
          rowSelection="multiple"
          //pagination={true}
          //paginationPageSize={100}
          rowHeight={22}
          headerHeight={33}
          //onGridReady={onGridReady}
          //getSelectedRowData={getSelectedRowData}
          //onSelectionChanged={onSelectionChanged}
          //onCellValueChanged={onCellValueChanged}
          navigateToNextCell={navigateToNextCell}
        />
      </div>
    </>
  );
};

export default DataGrid;
