import React from "react";
import Aggrid from "../../../../../../components/common/ag-grid/ag-grid.jsx";

const colDefsMedalsIncluded = [
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },
  { field: "+", width: 60 },
  { field: "#", width: 60 },

  { headerName: "Run Time", field: "runTime", width: 270 },
  { headerName: "Status", field: "status", width: 150 },
  { headerName: "Vendor", field: "vendor", width: 170 },
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

const SuspendRestartRepoGrid = (props) => {
  return (
    <Aggrid
      rowData={props.data.suspendRestartGridData.rows}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={400}
      gridWidth={800}
      suppressRowClickSelection={true}
      rowSelection="multiple"
      pagination={true}
      paginationPageSize={10}
    />
  );
};
export default SuspendRestartRepoGrid;
