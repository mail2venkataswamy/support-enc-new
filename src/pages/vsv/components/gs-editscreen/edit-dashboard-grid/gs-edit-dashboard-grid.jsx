import React from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
const rowData = [
  {
    valuedSecurityEdits: "test",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "test1",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "test2",
    tier: 1,
    reviewNeeded: 0,
  },
];
const colDefsMedalsIncluded = [
  {
    headerName: "Valued Security Edits",
    field: "valuedSecurityEdits",
    width: "auto",
  },
  { headerName: "Tier", field: "tier", width: "auto" },
  { headerName: "Review Needed", field: "reviewNeeded", width: "auto" },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  rowSelection: "multiple",
};

const Maintenancegrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={240}
      gridWidth="auto"
      rowSelection="multiple"
    />
  );
};
export default Maintenancegrid;
