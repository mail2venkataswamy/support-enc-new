import React from "react";
import Aggrid from "../../../common/ag-grid/ag-grid.jsx";

const rowData = {
  rows: [
    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Final - Large Difference Vs Vendor",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },
    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Final - Large Variance Vs Previous",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },
    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Intraday - Large Difference Vs Vendor",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },

    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Intraday - Large Variance Vs Previous",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },
    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Stockloan - Large Difference Vs Vendor",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },
    {
      boundAmount: 0.0,
      currency: null,
      debtTypeCode: null,
      editCategoryDesc: "Stockloan - Large Variance Vs Previous",
      editCategoryId: 1400,
      fromCurrencyId: null,
      threshold: 0.802,
      thresholdId: 1,
    },
  ],
};
const colDefsMedalsIncluded = [
  { field: "#", width: 60 },
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },

  { field: "editCategoryDesc", width: 300, rowGroup: true },
  { field: "boundAmount", width: 200 },
  { field: "threshold", width: 170 },
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

const Thresholdgrid = () => {
  return (
    <Aggrid
      rowData={rowData.rows}
      colDefsMedalsIncluded={colDefsMedalsIncluded}
      defaultColDef={defaultColDef}
      gridHeight={400}
      gridWidth={800}
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default Thresholdgrid;
