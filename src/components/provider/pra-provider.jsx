import { GridApi } from "ag-grid-community";
import React, { Component } from "react";

import MyContext from "../context/pra-context.jsx";
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
      initialPanelState: {},
      initialPicsThresholdDate: {},
      initialAddThresholdsData: {},
      filterPanelData: {
        vendorOptins: [
          { label: "IDSI", value: "idsi" },
          { label: "Thomson Reuters Corp.", value: "Thomson Reuters Corp." },
          { label: "Bloomberg Finance L.P.", value: "Bloomberg Finance L.P." },
          { label: "Exchange Files", value: "Exchange Files" },
          { label: "ICE Data Services", value: "iceDataServices" },
        ],
        selectedVendorValue: { label: "All", value: "all" },
        exchangeOptions: [
          { label: "CBOE Cboe options Exchange", value: "cboe" },
          { label: "CBT Chicago Board of Trade", value: "CBT" },
          { label: "CME Chicago Mercantile Exchange", value: "CME" },
          { label: "CMPST Composite Exchange", value: "CMPST" },
        ],
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
          { label: "Debt", value: "debt" },
          { label: "Future", value: "future" },
          { label: "Option", value: "option" },
        ],
        isFilterScreenVisible: true,
        classificationOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
        ],
        selectedClassificationValue: { label: "Select", value: "Select" },
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
            headerName: "#",
            field: "#",
            width: 40,
            flex: 0,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Symbol Description",
            field: "symbolDesc",
            width: 150,
            flex: 0,
          },

          {
            headerName: "Cusip",
            field: "cusip",
            width: 100,
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
          {
            headerName: "Vendor",
            field: "vendor",
            width: 90,
            flex: 0,
          },
          { headerName: "Exchange", field: "exchange", width: 90, flex: 0 },

          {
            headerName: "Price Adjustor",
            field: "priceAdjustor",
            width: 130,
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

        disableFromDate: new Date(),
        disableFromTimeOptions: [
          { label: "01:00", value: "01:00" },
          { label: "02:00", value: "02:00" },
        ],
        disableToDate: new Date(),
        disableToTimeOptions: [
          { label: "01:00", value: "01:00" },
          { label: "02:00", value: "02:00" },
        ],
        selectedToTime: { label: "00:00", value: "00:00" },
        selectedFromTime: { label: "00:00", value: "00:00" },
        isDisablePicsModalOpen: false,
        selectedGridRowData: [],
        selectedGridRows: [],
        isDeleteGridRecordPromptModalOpen: false,
      },
      addThresholdsData: {
        isAddThresholdsModalOpen: false,
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
        exchangeOptions: [
          { label: "CBOE Cboe options Exchange", value: "cboe" },
          { label: "CBT Chicago Board of Trade", value: "CBT" },
          { label: "CME Chicago Mercantile Exchange", value: "CME" },
          { label: "CMPST Composite Exchange", value: "CMPST" },
        ],
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
        changeCountOptions: [
          { label: "Y", value: "Y" },
          { label: "N", value: "N" },
        ],
        selectedChangeCountValue: { label: "Y", value: "Y" },
        preMarketThresholdValue: "",
        postMarketThresholdValue: "",
        MarketThresholdValue: "",
        classificationOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
        ],
        selectedClassificationValue: { label: "Select", value: "Select" },
        selectedLpafValue: "",
      },
    };
  }
  onChangeDisableFromDate = (date) => {
    let gridScreenData = this.state.gridScreenData;
    console.log(gridScreenData.disableFromDate);
    gridScreenData.disableFromDate = date;
    this.setState({
      gridScreenData,
    });
  };
  onChangeDisableFromTime = (time) => {
    let gridScreenData = this.state.gridScreenData;
    console.log(gridScreenData.selectedFromTime);
    gridScreenData.selectedFromTime = time;
    this.setState({
      gridScreenData,
    });
  };
  onChangeDisableToDate = (date) => {
    let gridScreenData = this.state.gridScreenData;
    console.log(gridScreenData.disableToDate);
    gridScreenData.disableToDate = date;
    this.setState({
      gridScreenData,
    });
  };
  onChangeDisableToTime = (time) => {
    let gridScreenData = this.state.gridScreenData;
    console.log(gridScreenData.selectedToTime);
    gridScreenData.selectedToTime = time;
    this.setState({
      gridScreenData,
    });
  };
  toggleDisablePicsModal = () => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.isDisablePicsModalOpen =
      !gridScreenData.isDisablePicsModalOpen;
    this.setState({
      gridScreenData,
    });
  };
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
  onChangeClassificationValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedClassificationValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeAddClassificationValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedClassificationValue = selectedValue;
    this.setState({ addThresholdsData });
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
    let gridScreenData = this.state.gridScreenData;
    let addThresholdsData = this.state.addThresholdsData;
    //let initialPicsThresholdDate = this.state.initialPicsThresholdDate;
    let obj = {
      selectedToTime: gridScreenData.selectedToTime,
      selectedFromTime: gridScreenData.selectedFromTime,
      disableFromDate: gridScreenData.disableFromDate,
      disableToDate: gridScreenData.disableToDate,
    };
    let tempAddThresholdsObj = {
      selectedVendorValue: addThresholdsData.selectedVendorValue,
      selectedExchangeValue: addThresholdsData.selectedExchangeValue,
      selectedProductTypeValue: addThresholdsData.selectedProductTypeValue,
      cuspinValue: addThresholdsData.cuspinValue,
      symbolToValue: addThresholdsData.symbolToValue,
      selectedChangeCountValue: addThresholdsData.selectedChangeCountValue,
      preMarketThresholdValue: addThresholdsData.preMarketThresholdValue,
      postMarketThresholdValue: addThresholdsData.postMarketThresholdValue,
      MarketThresholdValue: addThresholdsData.MarketThresholdValue,
      selectedClassificationValue:
        addThresholdsData.selectedClassificationValue,
      selectedLpafValue: addThresholdsData.selectedLpafValue,
    };
    let picsDisableData = { ...gridScreenData, ...obj };
    let addThresholdData = { ...addThresholdsData, ...tempAddThresholdsObj };

    this.setState({
      initialPanelState: data,
      initialPicsThresholdDate: picsDisableData,
      initialAddThresholdsData: addThresholdData,
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
      {
        id: 2,
        symbol: "test3",
        symbolDesc: "test",
        cusip: "test1",
        productType: "test2",
        classification: "test2",
        vendor: "test1",
        exchange: "test",
        priceAdjustor: "123",
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
  //================Add Threshold Methods=========
  onChangeAddExchangeValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedExchangeValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onChangeAddVendorValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedVendorValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onChangeAddCuspinValue = (e) => {
    let data = this.state.addThresholdsData.cuspinData;
    let addThresholdsData = this.state.addThresholdsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addThresholdsData.cuspinSuggestionResult = result;
    addThresholdsData.cuspinSearchValue = e.target.value;
    addThresholdsData.cuspinValue = e.target.value;

    this.setState({
      addThresholdsData,
    });
  };
  onClickAddCuspinSuggestionItem = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.cuspinValue = selectedValue;
    addThresholdsData.cuspinSearchValue = "";
    this.setState({
      addThresholdsData,
    });
  };
  onChangeAddSymbolToValue = (e) => {
    let data = this.state.addThresholdsData.symbolToData;
    let addThresholdsData = this.state.addThresholdsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addThresholdsData.symbolToSuggestionResult = result;
    addThresholdsData.symbolToSearchValue = e.target.value;
    addThresholdsData.symbolToValue = e.target.value;

    this.setState({
      addThresholdsData,
    });
  };
  onClickAddSymbolToSuggestionItem = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.symbolToValue = selectedValue;
    addThresholdsData.symbolToSearchValue = "";
    this.setState({
      addThresholdsData,
    });
  };
  toggleAddThresholdsModal = () => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.isAddThresholdsModalOpen =
      !addThresholdsData.isAddThresholdsModalOpen;
    this.setState({
      addThresholdsData,
    });
  };
  onChangeAddCountValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedChangeCountValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onChangePreMarketThreshold = (e) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.preMarketThresholdValue = e.target.value;
    this.setState({ addThresholdsData });
  };
  onChangeMarketThreshold = (e) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.MarketThresholdValue = e.target.value;
    this.setState({ addThresholdsData });
  };
  onChangePostMarketThreshold = (e) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.postMarketThresholdValue = e.target.value;
    this.setState({ addThresholdsData });
  };

  onResetAddThresholds = () => {
    let addThresholdsData = this.state.addThresholdsData;
    let initialAddThresholdsData = this.state.initialAddThresholdsData;
    let data = { ...addThresholdsData, ...initialAddThresholdsData };
    data.isAddThresholdsModalOpen = true;
    this.setState({
      addThresholdsData: data,
    });
  };
  onChangeAddProductTypeValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedProductTypeValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onSaveAddThresholds = () => {
    let addThresholdsData = this.state.addThresholdsData;
    let gridScreenData = this.state.gridScreenData;

    let itemToSave = {
      vendor: addThresholdsData.selectedVendorValue.value,
      exchange: addThresholdsData.selectedExchangeValue.value,
      productType: addThresholdsData.selectedProductTypeValue.value,
      cusip: addThresholdsData.cuspinValue,
      symbol: addThresholdsData.symbolToValue,
      changeCount: addThresholdsData.selectedChangeCountValue.value,
      preMarketThresholds: addThresholdsData.preMarketThresholdValue,
      postMarketThresholds: addThresholdsData.postMarketThresholdValue,
      marketThresholds: addThresholdsData.MarketThresholdValue,
      priceAdjustor: addThresholdsData.selectedLpafValue,
    };
    gridScreenData.priceSystemAlertStateRowData = [
      ...gridScreenData.priceSystemAlertStateRowData,
      itemToSave,
    ];
    addThresholdsData.isAddThresholdsModalOpen =
      !addThresholdsData.isAddThresholdsModalOpen;
    addThresholdsData.selectedVendorValue = { label: "All", value: "all" };
    addThresholdsData.selectedExchangeValue = { label: "All", value: "all" };
    addThresholdsData.selectedProductTypeValue = {
      label: "Select",
      value: "select",
    };
    addThresholdsData.cuspinValue = "";
    addThresholdsData.symbolToValue = "";
    addThresholdsData.selectedChangeCountValue = { label: "Y", value: "Y" };
    addThresholdsData.preMarketThresholdValue = "";
    addThresholdsData.postMarketThresholdValue = "";
    addThresholdsData.MarketThresholdValue = "";

    this.setState({
      gridScreenData,
      addThresholdsData,
    });
  };
  //==========================================
  onDeleteSelectedRecords = (isConfirmed) => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.isDeleteGridRecordPromptModalOpen = false;

    gridScreenData.priceSystemAlertStateRowData =
      gridScreenData.priceSystemAlertStateRowData.filter(
        (row) => !gridScreenData.selectedGridRows.includes(row)
      );
    this.setState({
      gridScreenData,
    });
  };
  toggleDeletePromptModal = (isConfirmed) => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.isDeleteGridRecordPromptModalOpen =
      !gridScreenData.isDeleteGridRecordPromptModalOpen;
    this.setState({
      gridScreenData,
    });
  };
  onChanglpafValue = (e) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedLpafValue = e.target.value;
    this.setState({
      addThresholdsData,
    });
  };
  onPageSizeChanged=()=>{
    var value = document.getElementById('page-size').value;
    this.gridApi.paginationSetPageSize(Number(value));
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
          onChangeDisableFromDate: (e) => this.onChangeDisableFromDate(e),
          onChangeDisableFromTime: (e) => this.onChangeDisableFromTime(e),
          onChangeDisableToDate: (e) => this.onChangeDisableToDate(e),
          onChangeDisableToTime: (e) => this.onChangeDisableToTime(e),
          toggleDisablePicsModal: this.toggleDisablePicsModal,
          onResetDisablePics: this.onResetDisablePics,

          onChangeAddExchangeValue: (e) => this.onChangeAddExchangeValue(e),
          onChangeAddVendorValue: (e) => this.onChangeAddVendorValue(e),
          onChangeAddCuspinValue: (e) => this.onChangeAddCuspinValue(e),
          onClickAddCuspinSuggestionItem: (e) =>
            this.onClickAddCuspinSuggestionItem(e),
          onChangeAddSymbolToValue: (e) => this.onChangeAddSymbolToValue(e),
          onClickAddSymbolToSuggestionItem: (e) =>
            this.onClickAddSymbolToSuggestionItem(e),
          toggleAddThresholdsModal: this.toggleAddThresholdsModal,
          onChangeAddCountValue: this.onChangeAddCountValue,
          onChangePreMarketThreshold: (e) => this.onChangePreMarketThreshold(e),
          onChangeMarketThreshold: (e) => this.onChangeMarketThreshold(e),
          onChangePostMarketThreshold: (e) =>
            this.onChangePostMarketThreshold(e),
          onResetAddThresholds: this.onResetAddThresholds,
          onChangeAddProductTypeValue: (e) =>
            this.onChangeAddProductTypeValue(e),
          onSaveAddThresholds: (e) => this.onSaveAddThresholds(e),
          getSelectedRowData: this.getSelectedRowData,
          onSelectionChanged: this.onSelectionChanged,
          onDeleteSelectedRecords: this.onDeleteSelectedRecords,
          toggleDeletePromptModal: this.toggleDeletePromptModal,
          onCellValueChanged: this.onCellValueChanged,
          onChangeClassificationValue: (e) =>
            this.onChangeClassificationValue(e),
          onChangeAddClassificationValue: (e) =>
            this.onChangeAddClassificationValue(e),
          onChanglpafValue: (e) => this.onChanglpafValue(e),
          onPageSizeChanged:this.onPageSizeChanged
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PraProvider;
