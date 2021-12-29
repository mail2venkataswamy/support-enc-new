import React, { useEffect, useState } from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";

const rowData = [
  {
    flaggedEdits: "tier 1",
    categoryOne: 13,
    categoryTwo: 1,
    categoryThree: 13,
    categoryFour: 1,
    categoryFive: 13,
    categorySix: 1,
  },
  {
    flaggedEdits: "tier 2",
    categoryOne: 2,
    categoryTwo: 0,
    categoryThree: 2,
    categoryFour: 0,
    categoryFive: 2,
    categorySix: 0,
  },
  {
    flaggedEdits: "tier 3",
    categoryOne: 0,
    categoryTwo: 0,
    categoryThree: 0,
    categoryFour: 0,
    categoryFive: 0,
    categorySix: 0,
  },
  {
    flaggedEdits: "tier 4",
    categoryOne: 0,
    categoryTwo: 0,
    categoryThree: 0,
    categoryFour: 0,
    categoryFive: 0,
    categorySix: 0,
  },
  {
    flaggedEdits: "Total",
    categoryOne: 15,
    categoryTwo: 1,
    categoryThree: 15,
    categoryFour: 1,
    categoryFive: 15,
    categorySix: 1,
  },
];
const colDefsMedalsIncluded = [
  {
    headerName: "Flagged Edits",
    field: "flaggedEdits",
    width: "auto",
    flex: 1,
  },
  { headerName: "Category 1", field: "categoryOne", width: "auto", flex: 1 },
  { headerName: "Category 2", field: "categoryTwo", width: "auto", flex: 1 },
  { headerName: "Category 3", field: "categoryThree", width: "auto", flex: 1 },
  { headerName: "Category 4", field: "categoryFour", width: "auto", flex: 1 },
  { headerName: "Category 5", field: "categoryFive", width: "auto", flex: 1 },
  { headerName: "Category 6", field: "categorySix", width: "auto", flex: 1 },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  rowSelection: "multiple",
  flex: 0,
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
