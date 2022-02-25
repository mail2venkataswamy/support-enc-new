import React from "react";
import Aggrid from "../../../../../../components/common/ag-grid/ag-grid.jsx";
const staticCellStyle = {
  color: "red",
  "background-color": "yellow",
};
const rowData = {
  rows: [
    {
      task: "Edit Category Dashboard",
    },
  ],
};
const colDef = [
  {
    width: 60,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    flex: 0,
  },

  {
    headerName: "Task",
    field: "task",
    width: "auto",
  },
];
const defaultColDef = {
  initialWidth: "auto",
  sortable: true,
  resizable: true,
  filter: true,
  rowSelection: "multiple",
  flex: 1,
};

const TasksGrid = () => {
  return (
    <Aggrid
      rowData={rowData.rows}
      colDefsMedalsIncluded={colDef}
      defaultColDef={defaultColDef}
      gridHeight={200}
      gridWidth={400}
      suppressRowClickSelection={true}
      rowSelection="multiple"
    />
  );
};
export default TasksGrid;
