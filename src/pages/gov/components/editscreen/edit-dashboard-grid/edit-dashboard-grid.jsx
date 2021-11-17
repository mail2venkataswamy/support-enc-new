import React from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
const rowData = [
  {
    ValuedSecurityEdits: "test",
    Intraday_Flagged_Records: 0,
    Intraday_Review_Needed: 1,
    Stock_Loan_Flagged_Records: 0,
    Stock_Loan_Review_Needed: 0,
    Final_Flagged_Records: 0,
    Final_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Stock_Loan_Primary_Review_Needed: 0,
    Stock_Loan_Secondary_Review_Needed: 0,
  },
  {
    ValuedSecurityEdits: "test1",
    Intraday_Flagged_Records: 0,
    Intraday_Review_Needed: 1,
    Stock_Loan_Flagged_Records: 0,
    Stock_Loan_Review_Needed: 0,
    Final_Flagged_Records: 0,
    Final_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Stock_Loan_Primary_Review_Needed: 0,
    Stock_Loan_Secondary_Review_Needed: 0,
  },
  {
    ValuedSecurityEdits: "test2",
    Intraday_Flagged_Records: 0,
    Intraday_Review_Needed: 1,
    Stock_Loan_Flagged_Records: 0,
    Stock_Loan_Review_Needed: 0,
    Final_Flagged_Records: 0,
    Final_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Final_Secondary_Review_Needed: 0,
    Stock_Loan_Primary_Review_Needed: 0,
    Stock_Loan_Secondary_Review_Needed: 0,
  },
];
const colDefsMedalsIncluded = [
  /*   {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  }, */
  { field: "ValuedSecurityEdits", width: "auto" },
  { field: "Intraday_Flagged_Records", width: "auto" },
  { field: "Intraday_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Flagged_Records", width: "auto" },
  { field: "Stock_Loan_Review_Needed", width: "auto" },
  { field: "Final_Flagged_Records", width: "auto" },
  { field: "Final_Review_Needed", width: "auto" },
  { field: "Final_Primary_Review_Needed", width: "auto" },
  { field: "Final_Secondary_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Primary_Review_Needed", width: "auto" },
  { field: "Stock_Loan_Secondary_Review_Needed", width: "auto" },
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
