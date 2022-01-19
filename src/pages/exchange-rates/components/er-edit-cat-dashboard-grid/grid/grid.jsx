import React from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
const rowData = [
  {
    valuedSecurityEdits: "Large Volume Change",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Large Volume Change",
    tier: 2,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Less Than 90 Days Average",
    tier: 1,
    reviewNeeded: 0,
  },

];
const colDefs = [
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
      colDefsMedalsIncluded={colDefs}
      defaultColDef={defaultColDef}
      gridHeight={"90%"}
      gridWidth="auto"
      rowSelection="multiple"
      rowHeight={25}
    />
  );
};
export default Maintenancegrid;
