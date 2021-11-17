import React from "react";
import Aggrid from "../../../common/ag-grid/ag-grid.jsx";

const rowData = [];
const colDefsMedalsIncluded = [
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },
  { field: "+", width: 60 },
  { field: "#", width: 60 },

  { field: "Run Time", width: 270 },
  { field: "Status", width: 150 },
  { field: "Vendor", width: 170 },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  //headerCheckboxSelection: isFirstColumn,
  // checkboxSelection: isFirstColumn,
  rowSelection: "multiple",
};

const SuspendRestartRepoGrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={400}
      gridWidth={800}
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default SuspendRestartRepoGrid;
