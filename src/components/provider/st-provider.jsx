import React, { Component } from "react";

import MyContext from "../context/st-context.jsx";
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
      initialPicsThresholdDate: {},
      initialAddThresholdsData: {},
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
        callPutOptions: [
          { label: "Call", value: "call" },
          { label: "Put", value: "put" },
        ],

        selectedCallPutValue: { label: "default", value: "default" },
        isCallPutDisabled: false,
        isMaturityFromDateDisabled: false,
        exspirationOrMaturityDate: new Date(),
        strikePriceData: [
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
        strikePriceFromSuggestionResult: [],
        strikePriceFromValue: "",
        StrikePriceFromSearchValue: "",
        endDate: new Date(),
        startDate: new Date(),
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
        expOrMaturityDate: new Date(),
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
        callPutOptions: [
          { label: "Call", value: "call" },
          { label: "Put", value: "put" },
        ],

        selectedCallPutValue: { label: "default", value: "default" },
        isCallPutDisabled: false,
        strikePriceLowSearchValue: "",
        strikePriceLowData: [
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
        strikePriceLowSuggestionResult: [],
        strikePriceLowValue: "",
        strikePriceHighSearchValue: "",
        strikePriceHighData: [
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
        strikePriceHighSuggestionResult: [],
        strikePriceHighValue: "",
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
        restrictionStDate: new Date(),
        restrictionEndDate: new Date(),
        vendorExchangeRowData: [],
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
            headerName: "Vendor",
            field: "vendor",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Exchange",
            field: "exchange",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Product Type",
            field: "productType",
            width: 170,
            flex: 0,
          },
          {
            headerName: "Classification",
            field: "classification",
            width: 170,
            flex: 0,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 120,
            flex: 0,
          },
          {
            headerName: "ISIN",
            field: "isIn",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Start D",
            field: "stDate",
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
      modifyPriceResData: {
        isModifyPriceRestrictionModalOpen: false,
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
        expOrMaturityDate: new Date(),
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
        callPutOptions: [
          { label: "Call", value: "call" },
          { label: "Put", value: "put" },
        ],

        selectedCallPutValue: { label: "default", value: "default" },
        isCallPutDisabled: false,
        strikePriceLowSearchValue: "",
        strikePriceLowData: [
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
        strikePriceLowSuggestionResult: [],
        strikePriceLowValue: "",
        strikePriceHighSearchValue: "",
        strikePriceHighData: [
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
        strikePriceHighSuggestionResult: [],
        strikePriceHighValue: "",
        exchangeTypeValue: "",
        exchangeTpeData: [
          {
            for: "exchangeTpeData",
            name: "exchangeTpeData",
            label: "All Exchanges",
            type: "radio",
            value: "allExchanges",
            className: "allExchangesData",
          },
          {
            for: "exchangeTpeData",
            name: "exchangeTpeData",
            label: "US Exchanges Only",
            type: "radio",
            value: "usExchangesOnly",
            className: "usExchangesOnly",
          },
        ],
        restrictionStDate: new Date(),
        restrictionEndDate: new Date(),
        exchangeModifyPriceResOptions: [
          {
            label: "New York Mercantile Exchange",
            value: "nyMercantileExchange",
          },
        ],
        selectedModifyPriceResExchangeValue: {
          label: "Select",
          value: "select",
        },
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
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedClassificationValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onChangeModifyPriceResClassificationValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedClassificationValue = selectedValue;
    this.setState({ modifyPriceResData });
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
    let data = { ...filterPanelData, ...filterObject };
    let gridScreenData = this.state.gridScreenData;
    let addThresholdsData = this.state.addThresholdsData;
    let modifyPriceResData = this.state.modifyPriceResData;

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
      exchangeItemsResult: addThresholdsData.exchangeItemsData,
    };
    let tempAddModifyPriceResObj = {
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
    };
    let picsDisableData = { ...gridScreenData, ...obj };
    let addThresholdData = { ...addThresholdsData, ...tempAddThresholdsObj };
    let modifyPriceRestrictionData = {
      ...modifyPriceResData,
      ...tempAddModifyPriceResObj,
    };

    let exChangeData = addThresholdsData.exchangeItemsData;
    addThresholdsData.exchangeItemsResult = exChangeData;

    this.setState({
      initialPanelState: data,
      initialPicsThresholdDate: picsDisableData,
      initialAddThresholdsData: addThresholdData,
      initialModifyPriceResData: modifyPriceRestrictionData,
      addThresholdsData,
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
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedLpafValue = e.target.value;
    this.setState({
      addThresholdsData,
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

  onChangeCallPutValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCallPutValue = selectedValue;
    this.setState({ filterPanelData });
  };
  setExpirationMaturityDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.exspirationOrMaturityDate = date;
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
  onChangeStrikePriceFromValue = (e) => {
    let data = this.state.filterPanelData.strikePriceData;
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
    filterPanelData.strikePriceFromSuggestionResult = result;
    filterPanelData.StrikePriceFromSearchValue = e.target.value;
    filterPanelData.strikePriceFromValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  setStartDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.startDate = date;
    this.setState({
      filterPanelData,
    });
  };
  setEndDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.endDate = date;
    this.setState({
      filterPanelData,
    });
  };
  //===========Add New Price Methods========
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
  onChangeAddPriceResIsInValue = (e) => {
    let data = this.state.addThresholdsData.isInData;
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
    addThresholdsData.isInSuggestionResult = result;
    addThresholdsData.isInSearchValue = e.target.value;
    addThresholdsData.isInValue = e.target.value;

    this.setState({
      addThresholdsData,
    });
  };
  onClickAddPriceResIsInSuggestionItem = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.isInValue = selectedValue;
    addThresholdsData.isInSearchValue = "";
    this.setState({
      addThresholdsData,
    });
  };
  onChangeStrikePriceLowValue = (e) => {
    let data = this.state.addThresholdsData.strikePriceLowData;
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
    addThresholdsData.strikePriceLowSuggestionResult = result;
    addThresholdsData.strikePriceLowSearchValue = e.target.value;
    addThresholdsData.strikePriceLowValue = e.target.value;

    this.setState({
      addThresholdsData,
    });
  };
  onClickStrikePriceLowSuggestionItem = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.strikePriceLowValue = selectedValue;
    addThresholdsData.strikePriceLowSearchValue = "";
    this.setState({
      addThresholdsData,
    });
  };
  onChangeStrikePriceHighValue = (e) => {
    let data = this.state.addThresholdsData.strikePriceHighData;
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
    addThresholdsData.strikePriceHighSuggestionResult = result;
    addThresholdsData.strikePriceHighSearchValue = e.target.value;
    addThresholdsData.strikePriceHighValue = e.target.value;

    this.setState({
      addThresholdsData,
    });
  };
  onClickStrikePriceHighSuggestionItem = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.strikePriceHighValue = selectedValue;
    addThresholdsData.strikePriceHighSearchValue = "";
    this.setState({
      addThresholdsData,
    });
  };
  setAddExpOrMaturityDate = (date) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.expOrMaturityDate = date;
    this.setState({
      addThresholdsData,
    });
  };
  onChangeAddPriceResCallPutValue = (selectedValue) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.selectedCallPutValue = selectedValue;
    this.setState({ addThresholdsData });
  };
  onChangeExchangeCat = (e) => {
    let addThresholdsData = this.state.addThresholdsData;
    let exChangeData = this.state.addThresholdsData.exchangeItemsData;
    addThresholdsData.exchangeTypeValue = e.target.value;
    if (e.target.value.toLowerCase() === "usOnly".toLowerCase()) {
      addThresholdsData.exchangeItemsResult = [];
      for (const item of exChangeData) {
        if (
          item.exchange &&
          item.exchange.toLowerCase() === "usOnly".toLowerCase()
        ) {
          addThresholdsData.exchangeItemsResult.push(item);
        }
      }
    } else {
      addThresholdsData.exchangeItemsResult = exChangeData;
    }
    this.setState({ addThresholdsData });
  };
  setRestrictionStDate = (date) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.restrictionStDate = date;
    this.setState({
      addThresholdsData,
    });
  };
  setRestrictionEndDate = (date) => {
    let addThresholdsData = this.state.addThresholdsData;
    addThresholdsData.restrictionEndDate = date;
    this.setState({
      addThresholdsData,
    });
  };
  onSelectDeSelectExchangesOption = (selectedItem) => {
    console.log("selected item", selectedItem);
    let addThresholdsData = this.state.addThresholdsData;
    let options = this.state.addThresholdsData.exchangeItemsData;
    for (const option of options) {
      if (selectedItem.value === option.value) {
        option.isSelected = !option.isSelected;
      }
    }
    this.setState({
      addThresholdsData,
    });
    console.log(this.state.addThresholdsData.exchangeItemsData);
  };
  //==========MOdify Price Res Methods===================
  toggleModifyPriceResModal = () => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.isModifyPriceRestrictionModalOpen =
      !modifyPriceResData.isModifyPriceRestrictionModalOpen;
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResExchangeValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedExchangeValue = selectedValue;
    this.setState({ modifyPriceResData });
  };
  onChangeModifyPriceResVendorValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedVendorValue = selectedValue;
    this.setState({ modifyPriceResData });
  };
  onChangeModifyPriceResCuspinValue = (e) => {
    let data = this.state.modifyPriceResData.cuspinData;
    let modifyPriceResData = this.state.modifyPriceResData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    modifyPriceResData.cuspinSuggestionResult = result;
    modifyPriceResData.cuspinSearchValue = e.target.value;
    modifyPriceResData.cuspinValue = e.target.value;

    this.setState({
      modifyPriceResData,
    });
  };
  onClickModifyPriceResCuspinSuggestionItem = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.cuspinValue = selectedValue;
    modifyPriceResData.cuspinSearchValue = "";
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResSymbolToValue = (e) => {
    let data = this.state.modifyPriceResData.symbolToData;
    let modifyPriceResData = this.state.modifyPriceResData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    modifyPriceResData.symbolToSuggestionResult = result;
    modifyPriceResData.symbolToSearchValue = e.target.value;
    modifyPriceResData.symbolToValue = e.target.value;

    this.setState({
      modifyPriceResData,
    });
  };
  onClickModifyPriceResSymbolToSuggestionItem = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.symbolToValue = selectedValue;
    modifyPriceResData.symbolToSearchValue = "";
    this.setState({
      modifyPriceResData,
    });
  };
  onResetModifyPriceResThresholds = () => {
    let modifyPriceResData = this.state.modifyPriceResData;
    let initialModifyPriceResData = this.state.initialModifyPriceResData;
    let data = { ...modifyPriceResData, ...initialModifyPriceResData };
    data.isModifyPriceRestrictionModalOpen = true;
    this.setState({
      modifyPriceResData: data,
    });
  };
  onChangeModifyPriceResProductTypeValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedProductTypeValue = selectedValue;
    this.setState({ modifyPriceResData });
  };
  onSaveModifyPriceRes = () => {
    let modifyPriceResData = this.state.modifyPriceResData;
    let gridScreenData = this.state.gridScreenData;

    let itemToSave = {
      vendor: modifyPriceResData.selectedVendorValue.value,
      exchange: modifyPriceResData.selectedExchangeValue.value,
      productType: modifyPriceResData.selectedProductTypeValue.value,
      cusip: modifyPriceResData.cuspinValue,
      symbol: modifyPriceResData.symbolToValue,
      changeCount: modifyPriceResData.selectedChangeCountValue.value,
      preMarketThresholds: modifyPriceResData.preMarketThresholdValue,
      postMarketThresholds: modifyPriceResData.postMarketThresholdValue,
      marketThresholds: modifyPriceResData.MarketThresholdValue,
      priceAdjustor: modifyPriceResData.selectedLpafValue,
    };
    gridScreenData.priceSystemAlertStateRowData = [
      ...gridScreenData.priceSystemAlertStateRowData,
      itemToSave,
    ];
    modifyPriceResData.isModifyPriceRestrictionModalOpen =
      !modifyPriceResData.isModifyPriceRestrictionModalOpen;
    modifyPriceResData.selectedVendorValue = { label: "All", value: "all" };
    modifyPriceResData.selectedExchangeValue = { label: "All", value: "all" };
    modifyPriceResData.selectedProductTypeValue = {
      label: "Select",
      value: "select",
    };
    modifyPriceResData.cuspinValue = "";
    modifyPriceResData.symbolToValue = "";
    modifyPriceResData.selectedChangeCountValue = { label: "Y", value: "Y" };
    modifyPriceResData.preMarketThresholdValue = "";
    modifyPriceResData.postMarketThresholdValue = "";
    modifyPriceResData.MarketThresholdValue = "";

    this.setState({
      gridScreenData,
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResIsInValue = (e) => {
    let data = this.state.modifyPriceResData.isInData;
    let modifyPriceResData = this.state.modifyPriceResData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    modifyPriceResData.isInSuggestionResult = result;
    modifyPriceResData.isInSearchValue = e.target.value;
    modifyPriceResData.isInValue = e.target.value;

    this.setState({
      modifyPriceResData,
    });
  };
  onClickModifyPriceResIsInSuggestionItem = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.isInValue = selectedValue;
    modifyPriceResData.isInSearchValue = "";
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResStrikePriceLowValue = (e) => {
    let data = this.state.modifyPriceResData.strikePriceLowData;
    let modifyPriceResData = this.state.modifyPriceResData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    modifyPriceResData.strikePriceLowSuggestionResult = result;
    modifyPriceResData.strikePriceLowSearchValue = e.target.value;
    modifyPriceResData.strikePriceLowValue = e.target.value;

    this.setState({
      modifyPriceResData,
    });
  };
  onClickModifyPriceResStrikePriceLowSuggestionItem = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.strikePriceLowValue = selectedValue;
    modifyPriceResData.strikePriceLowSearchValue = "";
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResStrikePriceHighValue = (e) => {
    let data = this.state.modifyPriceResData.strikePriceHighData;
    let modifyPriceResData = this.state.modifyPriceResData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    modifyPriceResData.strikePriceHighSuggestionResult = result;
    modifyPriceResData.strikePriceHighSearchValue = e.target.value;
    modifyPriceResData.strikePriceHighValue = e.target.value;

    this.setState({
      modifyPriceResData,
    });
  };
  onClickModifyPriceResStrikePriceHighSuggestionItem = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.strikePriceHighValue = selectedValue;
    modifyPriceResData.strikePriceHighSearchValue = "";
    this.setState({
      modifyPriceResData,
    });
  };
  setModifyPriceResExpOrMaturityDate = (date) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.expOrMaturityDate = date;
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceResCallPutValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedCallPutValue = selectedValue;
    this.setState({ modifyPriceResData });
  };

  setModifyPriceRestrictionStDate = (date) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.restrictionStDate = date;
    this.setState({
      modifyPriceResData,
    });
  };
  setModifyPriceRestrictionEndDate = (date) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.restrictionEndDate = date;
    this.setState({
      modifyPriceResData,
    });
  };
  onChangeModifyPriceRestrictionExchangeValue = (selectedValue) => {
    let modifyPriceResData = this.state.modifyPriceResData;
    modifyPriceResData.selectedModifyPriceResExchangeValue = selectedValue;
    this.setState({ modifyPriceResData });
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
          onClickIsInSuggestionItem: (e) => this.onClickIsInSuggestionItem(e),
          onChangeIsInValue: (e) => this.onChangeIsInValue(e),
          onChangeCallPutValue: (e) => this.onChangeCallPutValue(e),
          setExpirationMaturityDate: (e) => this.setExpirationMaturityDate(e),
          onChangeStrikePriceFromValue: (e) =>
            this.onChangeStrikePriceFromValue(e),
          onClickStrikePriceFromSuggestionItem: (e) =>
            this.onClickStrikePriceFromSuggestionItem(e),
          setStartDate: (e) => this.setStartDate(e),
          setEndDate: (e) => this.setEndDate(e),
          setAddExpOrMaturityDate: (e) => this.setAddExpOrMaturityDate(e),
          onChangeAddPriceResIsInValue: (e) =>
            this.onChangeAddPriceResIsInValue(e),
          onClickAddPriceResIsInSuggestionItem: (e) =>
            this.onClickAddPriceResIsInSuggestionItem(e),
          onClickStrikePriceLowSuggestionItem: (e) =>
            this.onClickStrikePriceLowSuggestionItem(e),
          onClickStrikePriceHighSuggestionItem: (e) =>
            this.onClickStrikePriceHighSuggestionItem(e),
          onChangeStrikePriceHighValue: (e) =>
            this.onChangeStrikePriceHighValue(e),
          onChangeStrikePriceLowValue: (e) =>
            this.onChangeStrikePriceLowValue(e),
          onChangeAddPriceResCallPutValue: (e) =>
            this.onChangeAddPriceResCallPutValue(e),
          onChangeExchangeCat: (e) => this.onChangeExchangeCat(e),
          setRestrictionStDate: (e) => this.setRestrictionStDate(e),
          setRestrictionEndDate: (e) => this.setRestrictionEndDate(e),
          toggleModifyPriceResModal: this.toggleModifyPriceResModal,
          onSelectDeSelectExchangesOption: (e) =>
            this.onSelectDeSelectExchangesOption(e),
          //==========Modify==========
          onChangeModifyPriceResExchangeValue: (e) =>
            this.onChangeModifyPriceResExchangeValue(e),
          onChangeModifyPriceResVendorValue: (e) =>
            this.onChangeModifyPriceResVendorValue(e),
          onChangeModifyPriceResCuspinValue: (e) =>
            this.onChangeModifyPriceResCuspinValue(e),
          onClickModifyPriceResCuspinSuggestionItem: (e) =>
            this.onClickModifyPriceResCuspinSuggestionItem(e),
          onChangeModifyPriceResSymbolToValue: (e) =>
            this.onChangeModifyPriceResSymbolToValue(e),
          onClickModifyPriceResSymbolToSuggestionItem: (e) =>
            this.onClickModifyPriceResSymbolToSuggestionItem(e),
          onResetModifyPriceResThresholds: (e) =>
            this.onResetModifyPriceResThresholds(e),
          onChangeModifyPriceResProductTypeValue: (e) =>
            this.onChangeModifyPriceResProductTypeValue(e),
          onSaveModifyPriceRes: (e) => this.onSaveModifyPriceRes(e),
          onChangeModifyPriceResIsInValue: (e) =>
            this.onChangeModifyPriceResIsInValue(e),
          onClickModifyPriceResIsInSuggestionItem: (e) =>
            this.onClickModifyPriceResIsInSuggestionItem(e),
          onChangeModifyPriceResStrikePriceLowValue: (e) =>
            this.onChangeModifyPriceResStrikePriceLowValue(e),
          onClickModifyPriceResStrikePriceLowSuggestionItem: (e) =>
            this.onClickModifyPriceResStrikePriceLowSuggestionItem(e),
          onChangeModifyPriceResStrikePriceHighValue: (e) =>
            this.onChangeModifyPriceResStrikePriceHighValue(e),
          onClickModifyPriceResStrikePriceHighSuggestionItem: (e) =>
            this.onClickModifyPriceResStrikePriceHighSuggestionItem(e),
          setModifyPriceResExpOrMaturityDate: (e) =>
            this.setModifyPriceResExpOrMaturityDate(e),
          onChangeModifyPriceResCallPutValue: (e) =>
            this.onChangeModifyPriceResCallPutValue(e),
          setModifyPriceRestrictionStDate: (e) =>
            this.setModifyPriceRestrictionStDate(e),
          setModifyPriceRestrictionEndDate: (e) =>
            this.setModifyPriceRestrictionEndDate(e),
          onChangeModifyPriceResClassificationValue: (e) =>
            this.onChangeModifyPriceResClassificationValue(e),
          onChangeModifyPriceRestrictionExchangeValue: (e) =>
            this.onChangeModifyPriceRestrictionExchangeValue(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default StProvider;
