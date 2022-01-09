import React, { Component } from "react";

import MyContext from "../context/vi-dump-context.jsx";
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

class ViDumpProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPanelState: {},
      initialPicsThresholdDate: {},
      initialAddThresholdsData: {},
      filterPanelData: {
        symbolToSearchValue: "",
        symbolToData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        symbolToSuggestionResult: [],
        symbolToValue: "",
        cuspinSearchValue: "",
        cuspinData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        cuspinSuggestionResult: [],
        cuspinValue: "",
        isFilterScreenVisible: true,
        viIdSuggestionResult: [],
        viIdData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        viIdValue: "",
        viIdSearchValue: "",
        isIgnoreNullFields: false,
      },
      gridScreenData: {
        rowData: [],
        colDefs: [
          {
            width: 60,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            flex: 0,
          },
          {
            headerName: "VI ID",
            field: "viId",
            width: 100,
            flex: 0,
          },
          {
            headerName: "VI Type Code",
            field: "viTypeCd",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 100,
            flex: 0,
          },
          {
            headerName: "FMS Flag",
            field: "fmsFlag",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Delivery Class",
            field: "deliveryClass",
            width: 140,
            flex: 0,
          },

          {
            headerName: "Status Code",
            field: "statusCd",
            width: 150,
            flex: 0,
          },

          {
            headerName: "Margin Risk Factor",
            field: "marginRiskFactor",
            width: 150,
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
      },
    };
  }

  onChangeIgnoreNullFields = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isIgnoreNullFields = e.target.checked;
    this.setState({
      filterPanelData,
    });
  };

  onChangeViIdValue = (e) => {
    let data = this.state.filterPanelData.viIdData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.viIdSuggestionResult = result;
    filterPanelData.viIdSearchValue = e.target.value;
    filterPanelData.viIdValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickViIdSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.viIdValue = selectedValue;
    filterPanelData.viIdSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeCuspinValue = (e) => {
    let data = this.state.filterPanelData.cuspinData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.cuspinSuggestionResult = result;
    filterPanelData.cuspinSearchValue = e.target.value;
    filterPanelData.cuspinValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickCuspinSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    filterPanelData.cuspinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeSymbolToValue = (e) => {
    let data = this.state.filterPanelData.symbolToData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.symbolToSuggestionResult = result;
    filterPanelData.symbolToSearchValue = e.target.value;
    filterPanelData.symbolToValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickSymbolToSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.symbolToValue = selectedValue;
    filterPanelData.symbolToSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };

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
  onToggleFilterScreen = () => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isFilterScreenVisible =
      !filterPanelData.isFilterScreenVisible;
    this.setState({ filterPanelData });
  };
  onClickReset = () => {
    let filterPanelData = this.state.filterPanelData;
    let initialPanelState = this.state.initialPanelState;
    let data = { ...filterPanelData, ...initialPanelState };
    console.log("final object is", data);
    this.setState({ filterPanelData: data });
  };

  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;

    let filterObject = {
      cuspinValue: filterPanelData.cuspinValue,
      symbolToValue: filterPanelData.symbolToValue,
      isIgnoreNullFields: filterPanelData.isIgnoreNullFields,
      viIdSearchValue: filterPanelData.viIdSearchValue,
      viIdValue: filterPanelData.viIdValue,
    };
    let data = { ...filterPanelData, ...filterObject };

    this.setState({
      initialPanelState: data,
    });
  }
  onClickFiler = () => {
    let gridScreenData = this.state.gridScreenData;
    let rowData = this.getFilteredGridData();
    gridScreenData.rowData = rowData;
    this.setState({
      gridScreenData,
    });
  };
  onRefreshMaintenanceGridData = () => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.rowData = [];
    this.setState({
      gridScreenData,
    });

    setTimeout(() => {
      this.loadDataOnRefresh();
    }, 3000);
  };
  loadDataOnRefresh() {
    this.showLoading();
    let gridScreenData = this.state.gridScreenData;
    let data = this.getFilteredGridData();
    console.log(data);
    gridScreenData.rowData = data;
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
        viId: "1",
        viTypeCd: "tets",
        symbol: "test3",
        cusip: "test1",
        fmsFlag: "test2",
        deliveryClass: "test2",
        statusCd: "test1",
        statusCd: "test",
        marginRiskFactor: "123",
      },
      {
        id: 2,
        viId: "1",
        viTypeCd: "tets",
        symbol: "test3",
        cusip: "test1",
        fmsFlag: "test2",
        deliveryClass: "test2",
        statusCd: "test1",
        statusCd: "test",
        marginRiskFactor: "123",
      },
    ];
  }
  onResetDisablePics = () => {
    let gridScreenData = this.state.gridScreenData;
    let initialPicsThresholdDate = this.state.initialPicsThresholdDate;
    let data = { ...gridScreenData, ...initialPicsThresholdDate };
    data.isDisablePicsModalOpen = true;
    this.setState({
      gridScreenData: data,
    });
  };
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
          onChangeCuspinValue: (e) => this.onChangeCuspinValue(e),
          onClickCuspinSuggestionItem: (e) =>
            this.onClickCuspinSuggestionItem(e),
          onChangeSymbolToValue: (e) => this.onChangeSymbolToValue(e),
          onClickSymbolToSuggestionItem: (e) =>
            this.onClickSymbolToSuggestionItem(e),
          onGridReady: this.onGridReady,
          onBtPrint: this.onBtPrint,
          onBtnExport: this.onBtnExport,
          onToggleFilterScreen: this.onToggleFilterScreen,
          onClickReset: this.onClickReset,
          onClickFiler: this.onClickFiler,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          getSelectedRowData: this.getSelectedRowData,
          onSelectionChanged: this.onSelectionChanged,
          onCellValueChanged: this.onCellValueChanged,
          onChangeViIdValue: (e) => this.onChangeViIdValue(e),
          onClickViIdSuggestionItem: (e) => this.onClickViIdSuggestionItem(e),
          onChangeIgnoreNullFields: (e) => this.onChangeIgnoreNullFields(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ViDumpProvider;
