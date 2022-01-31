import React from "react";
import Aggrid from "../../../../../../components/common/ag-grid/ag-grid.jsx";
const staticCellStyle = {
  color: "red",
  "background-color": "yellow",
};
const rowData = {
  rows: [
    {
      currency: "CAD",
      largeVarianceThresholdProportion: "6.0000%",
      minMaxSpreadAdditiveOISVSLibor: "5.00000%",
    },
    {
      currency: "USA",
      largeVarianceThresholdProportion: "6.0000%",
      minMaxSpreadAdditiveOISVSLibor: "5.00000%",
    },
    {
      currency: "IND",
      largeVarianceThresholdProportion: "9.0000%",
      minMaxSpreadAdditiveOISVSLibor: "7.00000%",
    },

    {
      currency: "USD",
      largeVarianceThresholdProportion: "9.0000%",
      minMaxSpreadAdditiveOISVSLibor: "5.00000%",
    },
    {
      currency: "CAD",
      largeVarianceThresholdProportion: "6.0000%",
      minMaxSpreadAdditiveOISVSLibor: "5.00000%",
    },
    {
      currency: "USD",
      largeVarianceThresholdProportion: "6.0000%",
      minMaxSpreadAdditiveOISVSLibor: "5.00000%",
    },
  ],
};
const colDefsMedalsIncluded = [
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
  },
  { field: "#", width: 60 },

  {
    headerName: "Currency",
    field: "currency",
    width: 120,
  },

  {
    headerName: "Large Variance Threshold Proportion",
    field: "largeVarianceThresholdProportion",
    width: 280,
    editable: true,
    cellStyle: staticCellStyle,
  },
  {
    headerName: "Min-Max Spread Additive OIS VS Libor",
    field: "minMaxSpreadAdditiveOISVSLibor",
    width: 280,
    editable: true,
    cellStyle: staticCellStyle,
  },
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
      gridHeight={320}
      gridWidth={800}
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default Thresholdgrid;
