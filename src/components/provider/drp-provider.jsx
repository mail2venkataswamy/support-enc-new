import React, { Component } from "react";
import MyContext from "../context/drp-context.jsx";
import dailyReturnsPricingData from "./json/daily-return-pricing/grid-data.json";
import dailyReturnsFilterData from "./json/daily-return-pricing/filter-data.json";
function setPrinterFriendly(api) {
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "590px";
  api.setDomLayout(null);
}
const staticCellStyle = { "background-color": "yellow" };

class PraProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialFilterState: {},
      filterGridState: {
        rowData: [],
        colDefs: [
          {
            //headerName: "Tier Level",
            field: "tierLevel",
            width: 80,
            flex: 0,
            //cellStyle: staticCellStyle,
            rowGroup: true,
            hide: false,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 80,
            flex: 0,
            //cellStyle: staticCellStyle,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Security Type",
            field: "securityType",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Missing Return",
            field: "missingReturn",
            width: 100,
            flex: 0,
            aggFunc: "sum",
          },
          {
            headerName: "Low Volume",
            field: "lowVolume",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Precision Mismatch",
            field: "precisionMismatch",
            width: 130,
            flex: 0,
            //rowGroup: true,
            //hide: true,
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Review Needed",
            field: "reviewNeeded",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Secondary Review Needed",
            field: "secondaryReviewNeeded",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Total Flagged",
            field: "totalFlagged",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Total Returns",
            field: "totalReturns",
            width: 110,
            flex: 0,
            editable: true,
            cellStyle: staticCellStyle,
          },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          rowSelection: "multiple",
          flex: 1,
        },
        selectedGridRowData: [],
        selectedGridRows: [],
      },
      dailyReturnsPricingState: {
        rowData: [],
        colDefs: [
          {
            headerName: "Tier Level",
            field: "tierLevel",
            width: 80,
            flex: 0,
            //cellStyle: staticCellStyle,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 80,
            flex: 0,
            //cellStyle: staticCellStyle,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 70,
            flex: 0,
          },
          {
            headerName: "Security Type",
            field: "securityType",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Close Price",
            field: "closePrice",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Close Price T-1",
            field: "closePriceT1",
            width: 90,
            flex: 0,
          },
          {
            headerName: "BBG Close Price",
            field: "bbgClosePrice",
            width: 95,
            flex: 0,
          },
          {
            headerName: "BBG Close Price T-1",
            field: "bbgClosePriceT1",
            width: 95,
            flex: 0,
          },
          {
            headerName: "Open Price",
            field: "openPrice",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Corporate Price",
            field: "corporateAction",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Dividends",
            field: "dividends",
            width: 90,
            flex: 0,
          },
          {
            headerName: "ETP",
            field: "etp",
            width: 60,
            flex: 0,
          },
          {
            headerName: "Pre Corporate Actoion Return",
            field: "preCorporateActoionReturn",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Close-Open Return",
            field: "closeOpenReturn",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Close-Open Log Return",
            field: "closeOpenLogReturn",
            width: 120,
            flex: 0,
          },
          {
            headerName: "OCC Calc'd Return",
            field: "occCalcdReturn",
            width: 120,
            flex: 0,
          },
          {
            headerName: "BBG Close-Close Return",
            field: "bbgCloseCloseReturn",
            width: 120,
            flex: 0,
          },
          {
            headerName: "% Return Diff",
            field: "percentageReturnDiff",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Absolute Return Diff",
            field: "absoluteReturnDiff",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Final Return",
            field: "finalReturn",
            width: 80,
            flex: 0,
          },
          {
            headerName: "SA",
            field: "sa",
            width: 60,
            flex: 0,
          },
          {
            headerName: "Editted By",
            field: "edittedBy",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Editted Timestamp",
            field: "edittedTimeStamp",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Primary Reviewer",
            field: "primaryReviewer",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Primary Timestamp",
            field: "primaryTimestamp",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Secondary Reviewer",
            field: "secondaryReviewer",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Secondary Timestamp",
            field: "secondaryTimestamp",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Released By",
            field: "releasedBy",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Released Timestamp",
            field: "ReleasedTimestamp",
            width: 100,
            flex: 0,
          },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          rowSelection: "multiple",
          flex: 1,
        },
        selectedGridRowData: [],
        selectedGridRows: [],
      },
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onBtPrint = () => {
    const api = this.gridApi;
    setPrinterFriendly(api);
    setTimeout(function () {
      print();
      setNormal(api);
    }, 2000);
  };
  onBtnExport = () => {
    this.gridApi.exportDataAsCsv();
  };

  componentDidMount() {
    let dailyReturnsPricingState = this.state.dailyReturnsPricingState;
    dailyReturnsPricingState.rowData = dailyReturnsPricingData.rows;

    let filterGridState = this.state.filterGridState;
    filterGridState.rowData = dailyReturnsFilterData.rows;
    this.setState({
      dailyReturnsPricingState,
      filterGridState,
    });
  }

  loadDataOnRefresh() {
    this.showLoading();
    let gridScreenData = this.state.gridScreenData;
    let data = this.getFilteredGridData();
    console.log(data);
    gridScreenData.priceSystemAlertStateRowData = data;
    setTimeout(() => {
      this.setState({
        gridScreenData,
      });
    }, 1000);
  }
  showLoading() {
    let ele = document.getElementsByClassName("ag-overlay-no-rows-center")[0];
    ele.innerText = "loading...";
  }
  getFilteredGridData() {
    return [
      {
        id: 1,
        symbol: "test3",
        symbolDesc: "tetv",
        cusip: "test1",
        productType: "test2",
        classification: "test2",
        vendor: "test1",
        exchange: "test",
        priceAdjustor: "123",
      },
    ];
  }

  getSelectedRowData = () => {
    alert();
    let gridScreenData = this.state.gridScreenData;
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    gridScreenData.selectedGridRowData = selectedData;
    this.setState({
      gridScreenData,
    });
  };
  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("Grid Rows selected", selectedRows);
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.selectedGridRows = selectedRows;
    this.setState({
      gridScreenData,
    });
  };
  onCellValueChanged = (params) => {
    const colId = params.column.getId();
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onGridReady: this.onGridReady,
          onBtPrint: this.onBtPrint,
          onBtnExport: this.onBtnExport,
          getSelectedRowData: this.getSelectedRowData,
          onSelectionChanged: this.onSelectionChanged,
          onCellValueChanged: this.onCellValueChanged,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PraProvider;
