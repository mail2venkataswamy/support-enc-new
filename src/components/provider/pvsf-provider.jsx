import React, { Component } from "react";

import MyContext from "../context/pvsf-context.jsx";
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
      initialPicsSymbolTranslationDate: {},
      initialAddSymbolTranslationsData: {},
      initialModifyPriceResData: {},
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
        vendorExchangeSymbolSearchValue: "",
        vendorExchangeSymbolData: [
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
        vendorExchangeSymbolSuggestionResult: [],
        vendorExchangeSymbolValue: "",

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
        isInSearchValue: "",
        isInData: [
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
        isInSuggestionResult: [],
        isInValue: "",
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
            headerName: "Product Type",
            field: "productType",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Classification",
            field: "classification",
            width: 120,
            flex: 0,
          },
          {
            headerName: "OCC Symbol",
            field: "occSymbol",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Vendor Exchange Symbol",
            field: "vendorExchangeSymbol",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Vendor Name",
            field: "vendorName",
            width: 90,
            flex: 0,
          },
          { headerName: "Exchange", field: "exchange", width: 90, flex: 0 },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 70,
            flex: 0,
          },
          {
            headerName: "ISIN",
            field: "isIN",
            width: 70,
            flex: 0,
          },
          {
            headerName: "Vendor Product ID",
            field: "vendorProductId",
            width: 103,
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
        isDeleteGridRecordPromptModalOpen: false,
      },
      addSymbolTranslationsData: {
        vendorExchangeSymbolSearchValue: "",
        vendorExchangeSymbolData: [
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
        vendorExchangeSymbolSuggestionResult: [],
        vendorExchangeSymbolValue: "",
        exchangeItemsData: [
          {
            label: "test",
            value: "test",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test1",
            value: "test1",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test2",
            value: "test2",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test3",
            value: "test3",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test4",
            value: "test4",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test5",
            value: "test5",
            isSelected: false,
            exchange: "usOnly",
          },
          {
            label: "test6",
            value: "test6",
            isSelected: false,
            exchange: "usOnly",
          },
          { label: "test7", value: "test7", isSelected: false },
          { label: "test8", value: "test8", isSelected: false },
          { label: "test9", value: "test9", isSelected: false },
          { label: "test10", value: "test10", isSelected: false },
          { label: "test11", value: "test11", isSelected: false },
          {
            label: "test13",
            value: "test13",
            isSelected: false,
            exchange: "usOnly",
          },
          { label: "test14", value: "test14", isSelected: false },
          { label: "test15", value: "test15", isSelected: false },
          { label: "test16", value: "test16", isSelected: false },
        ],
        exchangeItemsResult: [],
        isAddSymbolTranslationsModalOpen: false,
        isEditableModalPopupOpen: false,
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
        classificationOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
        ],
        selectedClassificationValue: { label: "Select", value: "Select" },
        isInSearchValue: "",
        isInData: [
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
        isInSuggestionResult: [],
        isInValue: "",
        exchangeTypeValue: "",
        exchangeTypeData: [
          {
            for: "exchangeTypeData",
            name: "exchangeTypeData",
            label: "All Exchanges",
            type: "radio",
            value: "allExchanges",
            className: "allExchangesData",
          },
          {
            for: "exchangeTypeData",
            name: "exchangeTypeData",
            label: "US Exchanges Only",
            type: "radio",
            value: "usOnly",
            className: "usExchangesOnly",
          },
        ],
        vendorExchangeRowData: [],
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
  onChangeVendorExchangeSymbolValue = (e) => {
    let data = this.state.filterPanelData.vendorExchangeSymbolData;
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
    filterPanelData.vendorExchangeSymbolSuggestionResult = result;
    filterPanelData.vendorExchangeSymbolSearchValue = e.target.value;
    filterPanelData.vendorExchangeSymbolValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickVendorExchangeSymbolSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.vendorExchangeSymbolValue = selectedValue;
    filterPanelData.vendorExchangeSymbolSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };

  onChangeAddStVendorExchangeSymbolValue = (e) => {
    let data = this.state.addSymbolTranslationsData.vendorExchangeSymbolData;
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addSymbolTranslationsData.vendorExchangeSymbolSuggestionResult = result;
    addSymbolTranslationsData.vendorExchangeSymbolSearchValue = e.target.value;
    addSymbolTranslationsData.vendorExchangeSymbolValue = e.target.value;

    this.setState({
      addSymbolTranslationsData,
    });
  };
  onClickAddStVendorExchangeSymbolSuggestionItem = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.vendorExchangeSymbolValue = selectedValue;
    addSymbolTranslationsData.vendorExchangeSymbolSearchValue = "";
    this.setState({
      addSymbolTranslationsData,
    });
  };

  onChangeExchangeValue = (e) => {
    let data = this.state.filterPanelData.exchangeData;
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
    filterPanelData.exchangeSuggestionResult = result;
    filterPanelData.exchangeSearchValue = e.target.value;
    filterPanelData.exchangeValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickExchangeSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.exchangeValue = selectedValue;
    filterPanelData.exchangeSearchValue = "";
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
    if (selectedValue.value !== "option") {
      filterPanelData.isCallPutDisabled = true;
    } else {
      filterPanelData.isCallPutDisabled = false;
    }
    this.setState({ filterPanelData });
  };
  onChangeClassificationValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedClassificationValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeAddClassificationValue = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.selectedClassificationValue = selectedValue;
    this.setState({ addSymbolTranslationsData });
  };

  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;

    let filterObject = {
      selectedVendorValue: filterPanelData.selectedVendorValue,
      selectedExchangeValue: filterPanelData.selectedExchangeValue,
      selectedProductTypeValue: filterPanelData.selectedProductTypeValue,
      cuspinValue: filterPanelData.cuspinValue,
      symbolToValue: filterPanelData.symbolToValue,
      isInValue: filterPanelData.isInValue,
      exspirationOrMaturityDate: filterPanelData.exspirationOrMaturityDate,
      selectedCallPutValue: filterPanelData.selectedCallPutValue,
      strikePriceFromValue: filterPanelData.strikePriceFromValue,
    };
    let panelData = { ...filterPanelData, ...filterObject };
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;

    let tempAddSymbolTranslationsObj = {
      selectedVendorValue: addSymbolTranslationsData.selectedVendorValue,
      selectedExchangeValue: addSymbolTranslationsData.selectedExchangeValue,
      selectedProductTypeValue:
        addSymbolTranslationsData.selectedProductTypeValue,
      cuspinValue: addSymbolTranslationsData.cuspinValue,
      symbolToValue: addSymbolTranslationsData.symbolToValue,
      selectedClassificationValue:
        addSymbolTranslationsData.selectedClassificationValue,
      exchangeItemsResult: addSymbolTranslationsData.exchangeItemsData,
    };
    let addSymbolTranslationData = {
      ...addSymbolTranslationsData,
      ...tempAddSymbolTranslationsObj,
    };

    let exChangeData = addSymbolTranslationsData.exchangeItemsData;
    addSymbolTranslationsData.exchangeItemsResult = exChangeData;

    this.setState({
      initialPanelState: panelData,
      initialAddSymbolTranslationsData: addSymbolTranslationData,
      addSymbolTranslationsData,
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
  //================Add SymbolTranslation Methods=========

  //==========================================
  onDeleteSelectedRecords = () => {
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
  toggleDeletePromptModal = () => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.isDeleteGridRecordPromptModalOpen =
      !gridScreenData.isDeleteGridRecordPromptModalOpen;
    this.setState({
      gridScreenData,
    });
  };
  onChanglpafValue = (e) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.selectedLpafValue = e.target.value;
    this.setState({
      addSymbolTranslationsData,
    });
  };
  onChangeIsInValue = (e) => {
    let data = this.state.filterPanelData.isInData;
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
    filterPanelData.isInSuggestionResult = result;
    filterPanelData.isInSearchValue = e.target.value;
    filterPanelData.isInValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickIsInSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isInValue = selectedValue;
    filterPanelData.isInSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onClickStrikePriceFromSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.strikePriceFromValue = selectedValue;
    filterPanelData.StrikePriceFromSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  //===========Add New Price Methods========
  onChangeAddExchangeValue = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.selectedExchangeValue = selectedValue;
    this.setState({ addSymbolTranslationsData });
  };
  onChangeAddVendorValue = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.selectedVendorValue = selectedValue;
    this.setState({ addSymbolTranslationsData });
  };
  onChangeAddCuspinValue = (e) => {
    let data = this.state.addSymbolTranslationsData.cuspinData;
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addSymbolTranslationsData.cuspinSuggestionResult = result;
    addSymbolTranslationsData.cuspinSearchValue = e.target.value;
    addSymbolTranslationsData.cuspinValue = e.target.value;

    this.setState({
      addSymbolTranslationsData,
    });
  };
  onClickAddCuspinSuggestionItem = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.cuspinValue = selectedValue;
    addSymbolTranslationsData.cuspinSearchValue = "";
    this.setState({
      addSymbolTranslationsData,
    });
  };
  onChangeAddSymbolToValue = (e) => {
    let data = this.state.addSymbolTranslationsData.symbolToData;
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addSymbolTranslationsData.symbolToSuggestionResult = result;
    addSymbolTranslationsData.symbolToSearchValue = e.target.value;
    addSymbolTranslationsData.symbolToValue = e.target.value;

    this.setState({
      addSymbolTranslationsData,
    });
  };
  onClickAddSymbolToSuggestionItem = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.symbolToValue = selectedValue;
    addSymbolTranslationsData.symbolToSearchValue = "";
    this.setState({
      addSymbolTranslationsData,
    });
  };
  toggleAddStModal = () => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.isAddSymbolTranslationsModalOpen =
      !addSymbolTranslationsData.isAddSymbolTranslationsModalOpen;
    addSymbolTranslationsData.isEditableModalPopupOpen = false;
    this.setState({
      addSymbolTranslationsData,
    });
  };
  onResetAddSymbolTranslations = () => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    let initialAddSymbolTranslationsData =
      this.state.initialAddSymbolTranslationsData;
    let data = {
      ...addSymbolTranslationsData,
      ...initialAddSymbolTranslationsData,
    };
    data.isAddSymbolTranslationsModalOpen = true;
    this.setState({
      addSymbolTranslationsData: data,
    });
  };
  onChangeAddProductTypeValue = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.selectedProductTypeValue = selectedValue;
    this.setState({ addSymbolTranslationsData });
  };
  onSaveAddSymbolTranslations = () => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    let gridScreenData = this.state.gridScreenData;

    let itemToSave = {
      vendor: addSymbolTranslationsData.selectedVendorValue.value,
      exchange: addSymbolTranslationsData.selectedExchangeValue.value,
      productType: addSymbolTranslationsData.selectedProductTypeValue.value,
      cusip: addSymbolTranslationsData.cuspinValue,
      symbol: addSymbolTranslationsData.symbolToValue,
      changeCount: addSymbolTranslationsData.selectedChangeCountValue.value,
      preMarketSymbolTranslations:
        addSymbolTranslationsData.preMarketSymbolTranslationValue,
      postMarketSymbolTranslations:
        addSymbolTranslationsData.postMarketSymbolTranslationValue,
      marketSymbolTranslations:
        addSymbolTranslationsData.MarketSymbolTranslationValue,
      priceAdjustor: addSymbolTranslationsData.selectedLpafValue,
    };
    gridScreenData.priceSystemAlertStateRowData = [
      ...gridScreenData.priceSystemAlertStateRowData,
      itemToSave,
    ];
    addSymbolTranslationsData.isAddSymbolTranslationsModalOpen =
      !addSymbolTranslationsData.isAddSymbolTranslationsModalOpen;
    addSymbolTranslationsData.selectedVendorValue = {
      label: "All",
      value: "all",
    };
    addSymbolTranslationsData.selectedExchangeValue = {
      label: "All",
      value: "all",
    };
    addSymbolTranslationsData.selectedProductTypeValue = {
      label: "Select",
      value: "select",
    };
    addSymbolTranslationsData.cuspinValue = "";
    addSymbolTranslationsData.symbolToValue = "";
    addSymbolTranslationsData.selectedChangeCountValue = {
      label: "Y",
      value: "Y",
    };
    addSymbolTranslationsData.preMarketSymbolTranslationValue = "";
    addSymbolTranslationsData.postMarketSymbolTranslationValue = "";
    addSymbolTranslationsData.MarketSymbolTranslationValue = "";

    this.setState({
      gridScreenData,
      addSymbolTranslationsData,
    });
  };
  onChangeAddPriceResIsInValue = (e) => {
    let data = this.state.addSymbolTranslationsData.isInData;
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    addSymbolTranslationsData.isInSuggestionResult = result;
    addSymbolTranslationsData.isInSearchValue = e.target.value;
    addSymbolTranslationsData.isInValue = e.target.value;

    this.setState({
      addSymbolTranslationsData,
    });
  };
  onClickAddPriceResIsInSuggestionItem = (selectedValue) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.isInValue = selectedValue;
    addSymbolTranslationsData.isInSearchValue = "";
    this.setState({
      addSymbolTranslationsData,
    });
  };

  onChangeExchangeCat = (e) => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    let exChangeData = this.state.addSymbolTranslationsData.exchangeItemsData;
    addSymbolTranslationsData.exchangeTypeValue = e.target.value;
    if (e.target.value.toLowerCase() === "usOnly".toLowerCase()) {
      addSymbolTranslationsData.exchangeItemsResult = [];
      for (const item of exChangeData) {
        if (
          item.exchange &&
          item.exchange.toLowerCase() === "usOnly".toLowerCase()
        ) {
          addSymbolTranslationsData.exchangeItemsResult.push(item);
        }
      }
    } else {
      addSymbolTranslationsData.exchangeItemsResult = exChangeData;
    }
    this.setState({ addSymbolTranslationsData });
  };
  onSelectDeSelectExchangesOption = (selectedItem) => {
    console.log("selected item", selectedItem);
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    let options = this.state.addSymbolTranslationsData.exchangeItemsData;
    for (const option of options) {
      if (selectedItem.value === option.value) {
        option.isSelected = !option.isSelected;
      }
    }
    this.setState({
      addSymbolTranslationsData,
    });
    console.log(this.state.addSymbolTranslationsData.exchangeItemsData);
  };
  //==========MOdify Price Res Methods===================
  toggleModifyStModal = () => {
    let addSymbolTranslationsData = this.state.addSymbolTranslationsData;
    addSymbolTranslationsData.isAddSymbolTranslationsModalOpen =
      !addSymbolTranslationsData.isAddSymbolTranslationsModalOpen;
    addSymbolTranslationsData.isEditableModalPopupOpen = true;
    let editObject = {};
    this.setState({
      addSymbolTranslationsData,
    });
  };

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
          onChangeAddExchangeValue: (e) => this.onChangeAddExchangeValue(e),
          onChangeAddVendorValue: (e) => this.onChangeAddVendorValue(e),
          onChangeAddCuspinValue: (e) => this.onChangeAddCuspinValue(e),
          onClickAddCuspinSuggestionItem: (e) =>
            this.onClickAddCuspinSuggestionItem(e),
          onChangeAddSymbolToValue: (e) => this.onChangeAddSymbolToValue(e),
          onClickAddSymbolToSuggestionItem: (e) =>
            this.onClickAddSymbolToSuggestionItem(e),
          toggleAddStModal: this.toggleAddStModal,
          onChangePreMarketSymbolTranslation: (e) =>
            this.onChangePreMarketSymbolTranslation(e),
          onResetAddSymbolTranslations: this.onResetAddSymbolTranslations,
          onChangeAddProductTypeValue: (e) =>
            this.onChangeAddProductTypeValue(e),
          onSaveAddSymbolTranslations: (e) =>
            this.onSaveAddSymbolTranslations(e),
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
          onClickIsInSuggestionItem: (e) => this.onClickIsInSuggestionItem(e),
          onChangeIsInValue: (e) => this.onChangeIsInValue(e),
          onChangeAddPriceResIsInValue: (e) =>
            this.onChangeAddPriceResIsInValue(e),
          onClickAddPriceResIsInSuggestionItem: (e) =>
            this.onClickAddPriceResIsInSuggestionItem(e),
          onChangeExchangeCat: (e) => this.onChangeExchangeCat(e),
          toggleModifyStModal: this.toggleModifyStModal,
          onSelectDeSelectExchangesOption: (e) =>
            this.onSelectDeSelectExchangesOption(e),
          onChangeVendorExchangeSymbolValue: (e) =>
            this.onChangeVendorExchangeSymbolValue(e),
          onClickVendorExchangeSymbolSuggestionItem: (e) =>
            this.onClickVendorExchangeSymbolSuggestionItem(e),

          onClickExchangeSuggestionItem: (e) =>
            this.onClickExchangeSuggestionItem(e),
          onChangeExchangeValue: (e) => this.onChangeExchangeValue(e),
          onChangeAddStVendorExchangeSymbolValue: (e) =>
            this.onChangeAddStVendorExchangeSymbolValue(e),
          onClickAddStVendorExchangeSymbolSuggestionItem: (e) =>
            this.onClickAddStVendorExchangeSymbolSuggestionItem(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default StProvider;
