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
  {
    valuedSecurityEdits: "Less Than 90 Days Average",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Missing Or Zero Volume",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Missing Or Zero Volume",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Significant Vendor Difference",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Significant Vendor Difference",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Tier IV to Tier III Change",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Tier IV to Tier III Change",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Total Edited Flages",
    tier: 1,
    reviewNeeded: 0,
  },
  {
    valuedSecurityEdits: "Total Edited Flages",
    tier: 1,
    reviewNeeded: 0,
  },
];
const colDefsMedalsIncluded = [
  {
    headerName: "Valued Security Edits",
    field: "valuedSecurityEdits",
    width: "auto",
    rowGroup: true,
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
      gridHeight={500}
      gridWidth="auto"
      rowSelection="multiple"
    />
  );
};
export default Maintenancegrid;
