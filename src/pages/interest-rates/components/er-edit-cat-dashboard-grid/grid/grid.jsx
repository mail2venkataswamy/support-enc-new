import React from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
const rowData = [
  {
    exchangeRateEdits: "Large Variance",
    vendorFlaggedRecords: 1,
    correctionsNeeded: 0,
  },
  {
    exchangeRateEdits: "Same as Previous",
    vendorFlaggedRecords: 1,
    correctionsNeeded: 0,
  },
  {
    exchangeRateEdits: "Missing Or Zero Rates",
    vendorFlaggedRecords: 1,
    correctionsNeeded: 0,
  },
  {
    exchangeRateEdits: "Min Max Spread Amount (OIS vis Libor)",
    vendorFlaggedRecords: 1,
    correctionsNeeded: 0,
  },
  /*   {
    exchangeRateEdits: "Total INvalid Exchange Rates",
    vendorFlaggedRecords: 1,
    correctionsNeeded: 0,
  }, */
];
const colDefs = [
  {
    headerName: "Exchange Rate Edits",
    field: "exchangeRateEdits",
    width: 350,
    index: 1,
  },
  {
    headerName: "Vendor Flagged Records",
    field: "vendorFlaggedRecords",
    width: 350,
    index: 1,
  },
  {
    headerName: "Corrections Needed",
    field: "correctionsNeeded",
    width: 299,
    index: 0,
  },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  rowSelection: "multiple",
  index: 1,
};

const Maintenancegrid = () => {
  return (
    <Aggrid
      rowData={rowData}
      colDefsMedalsIncluded={colDefs}
      defaultColDef={defaultColDef}
      gridHeight={"81%"}
      gridWidth="auto"
      rowSelection="multiple"
      rowHeight={25}
    />
  );
};
export default Maintenancegrid;
