import React, { Component } from "react";

import MyContext from "../context/pics-threshold-context.jsx";
function setPrinterFriendly(api) {
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "630px";
  api.setDomLayout(null);
}
class PicsThresholdProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPanelState: {},
      filterPanelData: {
        vendorOptins: [
          { label: "IDSI", value: "idsi" },
          { label: "Thomson Reuters Corp.", value: "Thomson Reuters Corp." },
          {
            label: "Markit Financial Information Services",
            value: "Markit Financial Information Services",
          },
          {
            label: "Miami International Securities Exchange",
            value: "Miami International Securities Exchange",
          },
          { label: "Bloomberg Finance L.P.", value: "Bloomberg Finance L.P." },
          { label: "Fidessa Group plc", value: "Fidessa Group plc" },
          { label: "CE DATA SERVICES", value: "CE DATA SERVICES" },
          { label: "Exchange Files", value: "Exchange Files" },
          { label: "BBG/IDC Vendor Group", value: "BBG/IDC Vendor Group" },
          { label: "SunGard ORM", value: "SunGard ORM" },
          {
            label: "Customized Options Pricing Service",
            value: "Customized Options Pricing Service",
          },
          { label: "Bloomberg Polarlake", value: "Bloomberg Polarlake" },
          { label: "CBOE Indicative Price", value: "CBOE Indicative Price" },
          { label: "GTreasury SS, LLC", value: "GTreasury SS, LLC" },
          { label: "Baton Systems Inc.", value: "Baton Systems Inc." },
        ],
        selectedVendorValue: { label: "All", value: "all" },
        exchangeOptions: [],
        selectedExchangeValue: { label: "All", value: "all" },
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
        selectedProductTypeValue: { label: "Select", value: "Select" },
        productTypeOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Debt", value: "debt" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
          { label: "Money Markey Mutual Funds", value: "mmmf" },
          { label: "Option", value: "option" },
          { label: "Warrant", value: "warrant" },
        ],
        isFilterScreenVisible: true,
      },
      gridScreenData: {
        priceSystemAlertStateRowData: [],
        colDefs: [
          {
            width: 60,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            flex: 0,
          },
          {
            headerName: "Vendor",
            field: "vendor",
            width: 100,
            flex: 0,
          },
          { headerName: "Exchange", field: "exchange", width: 110, flex: 0 },
          {
            headerName: "Product Type",
            field: "productType",
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
            headerName: "Pre Market Thresholds (secs)",
            field: "preMarketThresholds",
            width: 220,
            flex: 0,
          },
          {
            headerName: "Market Thresholds (secs)",
            field: "marketThresholds",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Post Thresholds (secs)",
            field: "postMarketThresholds",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Change Count",
            field: "changeCount",
            width: 140,
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

  onChangeExchangeValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedExchangeValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeVendorValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedVendorValue = selectedValue;
    this.setState({ filterPanelData });
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
  onChangeProductTypeValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedProductTypeValue = selectedValue;
    this.setState({ filterPanelData });
  };
  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;

    let filterObject = {
      selectedVendorValue: filterPanelData.selectedVendorValue,
      selectedExchangeValue: filterPanelData.selectedExchangeValue,
      selectedProductTypeValue: filterPanelData.selectedProductTypeValue,
      cuspinValue: filterPanelData.cuspinValue,
      symbolToValue: filterPanelData.symbolToValue,
    };
    let data = { ...filterPanelData, ...filterObject };

    this.setState({
      initialPanelState: data,
    });
  }
  onClickFiler = () => {
    let gridScreenData = this.state.gridScreenData;
    let priceSystemAlertStateRowData = this.getFilteredGridData();
    gridScreenData.priceSystemAlertStateRowData = priceSystemAlertStateRowData;
    this.setState({
      gridScreenData,
    });
  };
  onRefreshMaintenanceGridData = () => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.priceSystemAlertStateRowData = [];
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
        vendor: "test1",
        exchange: "test",
        productType: "test2",
        symbol: "test3",
        cusip: "test1",
        preMarketThresholds: "test2",
        marketThresholds: "test",
        postMarketThresholds: "test",
        changeCount: "test",
      },
      {
        vendor: "test1",
        exchange: "test",
        productType: "test2",
        symbol: "test3",
        cusip: "test1",
        preMarketThresholds: "test2",
        marketThresholds: "test",
        postMarketThresholds: "test",
        changeCount: "test",
      },
    ];
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onChangeExchangeValue: (e) => this.onChangeExchangeValue(e),
          onChangeVendorValue: (e) => this.onChangeVendorValue(e),
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
          onChangeProductTypeValue: (e) => this.onChangeProductTypeValue(e),
          onClickReset: this.onClickReset,
          onClickFiler: this.onClickFiler,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PicsThresholdProvider;
