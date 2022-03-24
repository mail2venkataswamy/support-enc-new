import React, { Component } from "react";
import MyContext from "../context/drp-context.jsx";
import dailyReturnsPricingJsonData from "./json/daily-return-pricing/grid-data.json";
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
function numberFilters() {
  return [
    {
      //filter: "agTextColumnFilter",
      filter: "agNumberColumnFilter",
      display: "accordion",
      title: "Conditions",

      filterParams: {
        buttons: ["apply", "clear"],
      },
    },
    {
      filter: "agSetColumnFilter",
      display: "accordion",
      title: "Values",
    },
  ];
}
function textFilters() {
  return [
    {
      filter: "agTextColumnFilter",
      //filter: "agNumberColumnFilter",
      display: "accordion",
      title: "Conditions",

      filterParams: {
        buttons: ["apply", "clear"],
      },
    },
    {
      filter: "agSetColumnFilter",
      display: "accordion",
      title: "Values",
    },
  ];
}

class PraProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialFilterState: {},
      selectedGridRowData: [],
      selectedGridRows: [],
      filterGridState: {
        rowData: [],
        colDefs: [
          {
            //headerName: "Tier Level",
            field: "tierLevel",
            width: 110,
            flex: 0,
            //cellStyle: staticCellStyle,
            rowGroup: true,
            hide: false,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            //cellRenderer: "agGroupCellRenderer",
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 100,
            flex: 0,
            //cellStyle: staticCellStyle,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
          },
          {
            headerName: "Security Type",
            field: "securityType",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
          },
          {
            headerName: "Missing Return",
            field: "missingReturn",
            width: 120,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Low Volume",
            field: "lowVolume",
            width: 120,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Precision Mismatch",
            field: "precisionMismatch",
            width: 120,
            flex: 0,
            //rowGroup: true,
            //hide: true,
            enableValue: true,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Review Needed",
            field: "reviewNeeded",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Secondary Review Needed",
            field: "secondaryReviewNeeded",
            width: 140,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Total Flagged",
            field: "totalFlagged",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
          {
            headerName: "Total Returns",
            field: "totalReturns",
            width: 100,
            flex: 0,
            editable: true,
            cellStyle: staticCellStyle,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
            aggFunc: "sum",
            enableValue: true,
          },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          flex: 1,
          menuTabs: ["filterMenuTab"],
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
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: numberFilters(),
            },
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 80,
            flex: 0,
            //cellStyle: staticCellStyle,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 70,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Security Type",
            field: "securityType",
            width: 90,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Close Price",
            field: "closePrice",
            width: 80,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Close Price T-1",
            field: "closePriceT1",
            width: 90,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "BBG Close Price",
            field: "bbgClosePrice",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "BBG Close Price T-1",
            field: "bbgClosePriceT1",
            width: 110,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Open Price",
            field: "openPrice",
            width: 80,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Corporate Price",
            field: "corporateAction",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Dividends",
            field: "dividends",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "ETP",
            field: "etp",
            width: 60,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Pre Corporate Actoion Return",
            field: "preCorporateActoionReturn",
            width: 130,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Close-Open Return",
            field: "closeOpenReturn",
            width: 120,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Close-Open Log Return",
            field: "closeOpenLogReturn",
            width: 120,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "OCC Calc'd Return",
            field: "occCalcdReturn",
            width: 120,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
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
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Absolute Return Diff",
            field: "absoluteReturnDiff",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Final Return",
            field: "finalReturn",
            width: 80,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "SA",
            field: "sa",
            width: 60,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Editted By",
            field: "edittedBy",
            width: 80,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Editted Timestamp",
            field: "edittedTimeStamp",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Primary Reviewer",
            field: "primaryReviewer",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
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
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Secondary Timestamp",
            field: "secondaryTimestamp",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Released By",
            field: "releasedBy",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
          {
            headerName: "Released Timestamp",
            field: "ReleasedTimestamp",
            width: 100,
            flex: 0,
            filter: "agMultiColumnFilter",
            filterParams: {
              filters: textFilters(),
            },
          },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          rowSelection: "multiple",
          flex: 1,
          menuTabs: ["filterMenuTab"],
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
    dailyReturnsPricingState.rowData = dailyReturnsPricingJsonData.rows;

    let filterGridState = this.state.filterGridState;
    filterGridState.rowData = dailyReturnsFilterData.rows;
    this.setState({
      dailyReturnsPricingState,
      filterGridState,
    });
  }

  /*  loadDataOnRefresh() {
    this.showLoading();
    let dailyReturnsPricingState = this.state.dailyReturnsPricingState;
    let data = this.getFilteredGridData();
    console.log(data);
    dailyReturnsPricingState.priceSystemAlertStateRowData = data;
    setTimeout(() => {
      this.setState({
        dailyReturnsPricingState,
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
  } */

  getSelectedRowData = () => {
    let filterGridState = this.state.filterGridState;
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    filterGridState.selectedGridRowData = selectedData;
    this.setState({
      filterGridState,
    });
  };
  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("Grid Rows selected", selectedRows);
    let filterGridState = this.state.filterGridState;
    filterGridState.selectedGridRows = selectedRows;
    this.setState({
      filterGridState,
    });
  };
  onCellValueChanged = (params) => {
    const colId = params.column.getId();
  };

  onCellClicked = (e) => {
    let dailyReturnsPricingState = this.state.dailyReturnsPricingState;
    /*    console.log(e);
    console.log(e.value);
    console.log(e.rowIndex);
    console.log(e.data);
    console.log("column key", e.column.colId); */
    dailyReturnsPricingState.rowData = dailyReturnsPricingJsonData.rows;
    const data = dailyReturnsPricingState.rowData.filter(
      (row) =>
        row[e.column.colId] &&
        row[e.column.colId].toString() === e.value.toString()
    );
    dailyReturnsPricingState.rowData = data;
    this.setState({
      dailyReturnsPricingState,
    });
  };
  navigateToNextCell = (params) => {
    const suggestedNextCell = params.nextCellPosition;
    alert();
    // this is some code
    const KEY_UP = "ArrowUp";
    const KEY_DOWN = 40;
    console.log(params.key);

    const noUpOrDownKeyPressed =
      params.key !== KEY_DOWN && params.key !== KEY_UP;
    if (noUpOrDownKeyPressed) {
      return suggestedNextCell;
    }

    params.api.forEachNode((node) => {
      if (node.rowIndex === suggestedNextCell.rowIndex) {
        node.setSelected(true);
      }
    });

    return suggestedNextCell;
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
          getFocusedCell: (e) => this.getFocusedCell(e),
          onCellClicked: (e) => this.onCellClicked(e),
          //navigateToNextCell: (e) => this.navigateToNextCell(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PraProvider;
