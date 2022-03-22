import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Aggrid = (props) => {
  return (
    <div
      id="myGrid"
      className="ag-theme-alpine"
      style={{ height: props.gridHeight, width: props.gridWidth }}
    >
      <AgGridReact
        ref={props.gridRef}
        rowData={props.rowData}
        columnDefs={props.colDefsMedalsIncluded}
        defaultColDef={props.defaultColDef}
        //onGridReady={this.onGridReady}
        rowSelection={props.rowSelection}
        checkboxSelection={true}
        pagination={props.pagination}
        enableRangeSelection={props.enableRangeSelection}
        onGridReady={props.onGridReady}
        popupParent={props.popupParent}
        onFirstDataRendered={props.onFirstDataRendered}
        groupUseEntireRow={true}
        singleClickEdit={props.singleClickEdit}
        onCellValueChanged={(e) => props.onCellValueChanged(e)}
        paginationPageSize={props.paginationPageSize}
        getSelectedRowData={props.getSelectedRowData}
        onSelectionChanged={props.onSelectionChanged}
        onFirstDataRendered={props.onFirstDataRendered}
        getRowStyle={props.getRowStyle}
        frameworkComponents={{ customTooltip: props.CustomTooltip }}
        //frameworkComponents={{ customTooltip: CustomTooltip }}
        rowHeight={props.rowHeight}
        headerHeight={props.headerHeight}
        onCellClicked={props.onCellClicked}
        autoGroupColumnDef={props.autoGroupColumnDef}
        suppressScrollLag={true}
        rowBuffer={props.rowBuffer}
      ></AgGridReact>
    </div>
  );
};

export default Aggrid;
