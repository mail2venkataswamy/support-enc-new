import React from "react";
import Aggrid from "../../../../../../components/common/ag-grid/ag-grid.jsx";

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

  {
    headerName: "Edit Category Desc",
    field: "editCategoryDesc",
    width: 300,
    rowGroup: true,
  },
  {
    headerName: "Bound Amount",
    field: "boundAmount",
    width: 200,
    editable: true,
  },
  { headerName: "Threshold", field: "threshold", width: 170, editable: true },
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

const Thresholdgrid = (props) => {
  return (
    <Aggrid
      rowData={props.data.thresholdGridData.rows}
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
