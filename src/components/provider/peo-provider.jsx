import React, { Component } from "react";

import MyContext from "../context/peo-context.jsx";
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

class StProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPanelState: {},
      showDerivativeGrid: false,
      filtersState: {
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

        selectedProductTypeValue: { label: "Select", value: "Select" },
        productTypeOptions: [
          { label: "Currency", value: "currency" },
          { label: "Equity", value: "equity" },
          { label: "Index/Other", value: "indexOrOther" },
          { label: "OTC Options", value: "otcOptions" },
          { label: "Debt", value: "debt" },
          { label: "Future", value: "future" },
          { label: "Option", value: "option" },
          { label: "Warrant", value: "warrant" },
        ],
        isFilterScreenVisible: true,
        classificationOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
        ],
        selectedClassificationValue: { label: "Select", value: "Select" },
        SubClassificationOptions: [
          { label: "Flex", value: "flex" },
          { label: "Standard", value: "standard" },
        ],
        selectedSubClassificationValue: { label: "Select", value: "Select" },

        activityOptions: [
          { label: "CURRENT", value: "curr" },
          { label: "HISTORICAL", value: "hist" },
        ],
        activityValue: { label: "CURRENT", value: "curr" },
        selectedActivityDate: new Date(),
        exchangeSearchValue: "",
        exchangeData: [
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
        exchangeSuggestionResult: [],
        exchangeValue: "",
        isFmsChecked: false,
        isCorporateActionChecked: false,
        isLateSeriesChecked: false,
        clearedOptions: [
          { label: "Cleared", value: "cleared" },
          { label: "Not Cleared", value: "notCleared" },
        ],
        selectedClearedValue: { label: "Select", value: "select" },
        statusOptions: [],
        categoryLevelOptions: [],
        reviewNeededOptions: [],
        selectedStatusValue: { label: "Select", value: "select" },
        selectedCategoryLevelValue: { label: "Select", value: "select" },
        selectedReviewNeededValue: { label: "Select", value: "select" },
      },
      gridState: {
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
            headerName: "#",
            field: "#",
            width: 40,
            flex: 0,
          },
          {
            headerName: "Product Type",
            field: "productType",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Classification",
            field: "classification",
            width: 130,
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

  showPlaceHolderScreen = () => {
    this.setState({
      showDerivativeGrid: false,
    });
  };

  onChangeStatusValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedStatusValue = selectedValue;
    this.setState({
      filtersState,
    });
  };
  onChangeCategoryLevelValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedCategoryLevelValue = selectedValue;
    this.setState({
      filtersState,
    });
  };
  onChangeReviewNeededValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedReviewNeededValue = selectedValue;
    this.setState({
      filtersState,
    });
  };
  onChangeClearedValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedClearedValue = selectedValue;
    this.setState({
      filtersState,
    });
  };
  onChangeFms = () => {
    let filtersState = this.state.filtersState;
    filtersState.isFmsChecked = !filtersState.isFmsChecked;
    this.setState({
      filtersState,
    });
  };
  onChangeCorporateAction = () => {
    let filtersState = this.state.filtersState;
    filtersState.isCorporateActionChecked = !filtersState.isCorporateActionChecked;
    this.setState({
      filtersState,
    });
  };
  onChangeLateSeries = () => {
    let filtersState = this.state.filtersState;
    filtersState.isLateSeriesChecked = !filtersState.isLateSeriesChecked;
    this.setState({
      filtersState,
    });
  };

  onChangeActivityValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.activityValue = selectedValue;
    this.setState({
      filtersState,
    });
  };
  onChangeSymbolToValue = (e) => {
    let data = this.state.filtersState.symbolToData;
    let filtersState = this.state.filtersState;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filtersState.symbolToSuggestionResult = result;
    filtersState.symbolToSearchValue = e.target.value;
    filtersState.symbolToValue = e.target.value;

    this.setState({
      filtersState,
    });
  };
  onClickSymbolToSuggestionItem = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.symbolToValue = selectedValue;
    filtersState.symbolToSearchValue = "";
    this.setState({
      filtersState,
    });
  };
  onChangeExchangeValue = (e) => {
    let data = this.state.filtersState.exchangeData;
    let filtersState = this.state.filtersState;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    filtersState.exchangeSuggestionResult = result;
    filtersState.exchangeSearchValue = e.target.value;
    filtersState.exchangeValue = e.target.value;

    this.setState({
      filtersState,
    });
  };
  onClickExchangeSuggestionItem = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.exchangeValue = selectedValue;
    filtersState.exchangeSearchValue = "";
    this.setState({
      filtersState,
    });
  };

  onToggleFilterScreen = () => {
    let filtersState = this.state.filtersState;
    filtersState.isFilterScreenVisible = !filtersState.isFilterScreenVisible;
    this.setState({ filtersState });
  };
  onClickReset = () => {
    let filtersState = this.state.filtersState;
    let initialPanelState = this.state.initialPanelState;
    let data = { ...filtersState, ...initialPanelState };
    console.log("final object is", data);
    this.setState({ filtersState: data });
  };
  onChangeProductTypeValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedProductTypeValue = selectedValue;
    if (selectedValue.value !== "option") {
      filtersState.isCallPutDisabled = true;
    } else {
      filtersState.isCallPutDisabled = false;
    }
    this.setState({ filtersState });
  };
  onChangeClassificationValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedClassificationValue = selectedValue;
    this.setState({ filtersState });
  };
  onChangeSubClassificationValue = (selectedValue) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedSubClassificationValue = selectedValue;
    this.setState({ filtersState });
  };

  onClickFiler = () => {
    let gridState = this.state.gridState;
    let rowData = this.getFilteredGridData();
    gridState.rowData = rowData;
    this.setState({
      gridState,
      showDerivativeGrid: true,
    });
  };
  onRefreshMaintenanceGridData = () => {
    let gridState = this.state.gridState;
    gridState.rowData = [];
    this.setState({
      gridState,
    });

    setTimeout(() => {
      this.loadDataOnRefresh();
    }, 3000);
  };

  setActivityDate = (date) => {
    let filtersState = this.state.filtersState;
    filtersState.selectedActivityDate = date;
    this.setState({
      filtersState,
    });
  };

  //Ag grid
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
  loadDataOnRefresh() {
    this.showLoading();
    let gridState = this.state.gridState;
    let data = this.getFilteredGridData();
    console.log(data);
    gridState.rowData = data;
    setTimeout(() => {
      this.setState({
        gridState,
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
        productType: "test2",
        classification: "test2",
        occSymbol: "test3",
        vendorExchangeSymbol: "tetv",
        vendorName: "test1",
        exchange: "test",
        cusip: "test1",
        isIN: "test",
        vendorProductId: "123",
      },
      {
        id: 2,
        productType: "test2",
        classification: "test2",
        occSymbol: "test3",
        vendorExchangeSymbol: "tetv",
        vendorName: "test1",
        exchange: "test",
        cusip: "test1",
        isIN: "test",
        vendorProductId: "123",
      },
    ];
  }
  getSelectedRowData = () => {
    let gridState = this.state.gridState;
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    gridState.selectedGridRowData = selectedData;
    this.setState({
      gridState,
    });
  };
  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("Grid Rows selected", selectedRows);
    let gridState = this.state.gridState;
    gridState.selectedGridRows = selectedRows;
    this.setState({
      gridState,
    });
  };
  onCellValueChanged = (params) => {
    const colId = params.column.getId();
  };
  //----------------
  componentDidMount() {
    let filtersState = this.state.filtersState;

    let filterObject = {
      selectedProductTypeValue: filtersState.selectedProductTypeValue,
      symbolToValue: filtersState.symbolToValue,
    };
    let data = { ...filtersState, ...filterObject };

    this.setState({
      initialPanelState: data,
    });
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          //Filters Methods
          onChangeSymbolToValue: (e) => this.onChangeSymbolToValue(e),
          onClickSymbolToSuggestionItem: (e) =>
            this.onClickSymbolToSuggestionItem(e),
          onChangeProductTypeValue: (e) => this.onChangeProductTypeValue(e),
          onChangeClassificationValue: (e) =>
            this.onChangeClassificationValue(e),
          onChangeSubClassificationValue: (e) =>
            this.onChangeSubClassificationValue(e),
          onChangeAddClassificationValue: (e) =>
            this.onChangeAddClassificationValue(e),
          setActivityDate: (e) => this.setActivityDate(e),
          onClickReset: this.onClickReset,
          onClickFiler: this.onClickFiler,
          onToggleFilterScreen: this.onToggleFilterScreen,
          onChangeActivityValue: (e) => this.onChangeActivityValue(e),
          onClickExchangeSuggestionItem: (e) =>
            this.onClickExchangeSuggestionItem(e),
          onChangeExchangeValue: (e) => this.onChangeExchangeValue(e),
          onChangeFms: this.onChangeFms,
          onChangeCorporateAction: this.onChangeCorporateAction,
          onChangeLateSeries: this.onChangeLateSeries,
          onChangeClearedValue: (e) => this.onChangeClearedValue(e),
          onChangeStatusValue: (e) => this.onChangeStatusValue(e),
          onChangeCategoryLevelValue: (e) => this.onChangeCategoryLevelValue(e),
          onChangeReviewNeededValue: (e) => this.onChangeReviewNeededValue(e),
          showPlaceHolderScreen: this.showPlaceHolderScreen,
          //Ag grid methods
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
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

export default StProvider;
