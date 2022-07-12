import React, { Component } from "react";

import MyContext from "../context/futures-context.jsx";
import PeoData from "./json/futures/futures.json";
import EditCatData from "./json/futures/edit-cat-dashboard.json";
import DeliverablePriceEditData from "./json/futures/deliverable-edit-price.json";
import DividendInfo from "./json/futures/dividend-info-data.json";
import PropTypes from "prop-types";
import ContractPriceEditData from "./json/price-editing-options/contract-price-editing.json";
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

class FuturesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPanelState: {},
      showDerivativeGrid: false,
      showEditGridDashBoard: false,
      showPlaceHolderGrid: true,
      showDeliverablePriceEditGrid: false,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
      showTasks: false,
      deliverablesPage: "",
      tasksData: {
        isTasksModalOpen: false,
      },
      editPricingState: {
        showContractPriceEditingGrid: false,
        isCalculateModalOpen: false,
        isWithoutSmoothingPromptModalOpen: false,
        isSmoothingPromptModalOpen: false,
        isBorrowCostOverrideModalOpen: false,
        isExcludeModalOpen: false,
        isSubstituteModalOpen: false,
        isLockVolatilityModalOpen: false,
        isVolatalityOverrideModalOpen: false,
        selectedSymbolValue: "",
        isEditPriceOpen: false,
        rowData: ContractPriceEditData.rows,
        colDefs: [
          {
            width: 40,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            flex: 0,
          },
          {
            headerName: "Final Call Excl/Subs/Lock",
            field: "intraDayCallExclSubsLock",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Exchange Price Call",
            field: "finalCallExclSubsLock",
            width: 140,
            flex: 0,
          },
          {
            headerName: "EOD Call Monotonicil Violation",
            field: "eodCallMonotonicilViolation",
            width: 160,
            flex: 0,
          },
          {
            headerName: "Final Call Outside NBBO Range",
            field: "FinalCallOutsideNbboRange",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Refinitive Call Price",
            field: "refinitiveCallPrice",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Bloomberg Call Price",
            field: "bloombergCallPrice",
            width: 130,
            flex: 0,
          },
          {
            headerName: "ICE Call Price",
            field: "iceCallPrice",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Bloomberg Call Bid",
            field: "bloombergCallBid",
            width: 130,
            flex: 0,
          },
          {
            headerName: "ICE Call Bid",
            field: "iceCallBid",
            width: 100,
            flex: 0,
          },
          {
            headerName: "EOD Final Call Mark Price",
            field: "eodFinalCallMarkPrice",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Bloomberg Call Ask",
            field: "bloombergCallAsk",
            width: 130,
            flex: 0,
          },
          {
            headerName: "ICE Call Ask",
            field: "iceCallAsk",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Previous Final Call Volatility",
            field: "previousFinalCallVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Primary Vendor Call Volatility",
            field: "primaryVendorCallVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "EOD Vendor Call Volatility",
            field: "eodVendorCallVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "EOD Override Call Volatility",
            field: "eodOverrideCallVolatility",
            width: 150,
            flex: 0,
            cellStyle: staticCellStyle,
          },
          {
            headerName: "EOD Call User ID",
            field: "eodCallUserId",
            width: 130,
            flex: 0,
          },
          {
            headerName: "EOD Call Price Variance",
            field: "eodCallPriceVariance",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Series Date",
            field: "seriesDate",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Div Yield",
            field: "divYield",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Strike",
            field: "strike",
            width: 80,
            flex: 0,
          },
          {
            headerName: "EOD Put Price Variance",
            field: "eodPutPriceVariance",
            width: 130,
            flex: 0,
          },
          {
            headerName: "EOD Put user ID",
            field: "eodPutUserid",
            width: 100,
            flex: 0,
          },
          {
            headerName: "EOD Override Put Volatility",
            field: "eodOverridePutVolatility",
            width: 150,
            flex: 0,
            cellStyle: staticCellStyle,
          },
          {
            headerName: "EOD Override Final Volatility",
            field: "eodOverrideFinalVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Primary Vendor Put Volatility",
            field: "primaryVendorPutVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Previous Final Put Volatility",
            field: "previousFinalPutVolatility",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Bloomberg Put Price",
            field: "bloombergPutPrice",
            width: 130,
            flex: 0,
          },
          {
            headerName: "ICE Put Price",
            field: "icePutPrice",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Bloomberg Put bid",
            field: "bloombergPutBid",
            width: 130,
            flex: 0,
          },
          {
            headerName: "ICE Put bid",
            field: "icePutBid",
            width: 130,
            flex: 0,
          },
          {
            headerName: "EOD Final Put Mark Price",
            field: "eodFinalPutMarkPrice",
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
        /*         selectedGridRowData: [],
        selectedGridRows: [], */
      },
      placeHolderState: {
        isDerivativeGridMinimized: false,
        isContractPriceEditingGridMinimized: false,
        isEditGridDashBoardMinimized: false,
        isDividendInfoGridMinimized: false,
        isDeliverablePriceEditGridMinimized: false,
        isExchangeInfoGridMinimized: false,
        isEditCatDashboardGridMinimized: false,
      },
      exchangeInfoGridState: {
        showExchangeInfoGrid: false,
        rowData: [],
        colDefs: [
          {
            headerName: "Underlying Symbol",
            field: "underlyingSymbol",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Exchange Name",
            field: "exchangeName",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "ExchangePrice",
            field: "exchangePrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Last Recieved Timestamp",
            field: "lastRecievedTimestamp",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Unit Quantiity",
            field: "unitQuantity",
            width: "auto",
            //flex: 0,
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
      dividendInfoGridState: {
        showDividendInfoGrid: false,
        rowData: DividendInfo.rows,
        colDefs: [
          {
            headerName: "Security",
            field: "security",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Dividend Type",
            field: "dividendType",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Published Ex-Date",
            field: "publishedExDate",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Published Frequency",
            field: "publishedFrequency",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Unit Quantiity",
            field: "unitQuantity",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Published Amount",
            field: "publishedAmount",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Published Yield",
            field: "publishedYield",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Dividend Currency",
            field: "dividendCurrency",
            width: "auto",
            //flex: 0,
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
      deliverablePriceEditState: {
        showDeliverablePriceEditGrid: false,
        rowData: DeliverablePriceEditData.rows,
        colDefs: [
          {
            headerName: "Delivery Component Symbol",
            field: "symbol",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Product Type",
            field: "productType",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Refinitiv Price",
            field: "refinitivPrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Bloomberg Price",
            field: "bloombergePrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "ICE Price",
            field: "icePrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Exchange Name",
            field: "exchangeName",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Exchange Price",
            field: "exchangePrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Contract Quality",
            field: "contractQuantity",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Intraday Price",
            field: "intraDayPrice",
            width: "auto",
            //flex: 0,
            hide: true,
          },
          {
            headerName: "EOD Price",
            field: "eodFinalPrice",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: "auto",
            hide: true,
            //flex: 0,
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
      editCatDashboardState: {
        showEditCatDashboardGrid: false,
        rowData: EditCatData.rows,
        colDefs: [
          {
            headerName: "Rule",
            field: "rule",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Final vendor Flagged",
            field: "finalvendorFlagged",
            width: "auto",
            //flex: 0,
          },
          {
            headerName: "Final Review Needed",
            field: "finalReviewNeeded",
            width: "auto",
            //flex: 0,
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
        isEdittedRecordsChecked: false,
        isNegativePriceFuturesChecked: false,
        clearedOptions: [
          { label: "Cleared", value: "cleared" },
          { label: "Not Cleared", value: "notCleared" },
        ],
        selectedClearedValue: { label: "Select", value: "select" },
        categoryLevelOptions: [],
        selectedStatusValue: { label: "Select", value: "select" },
        selectedCategoryLevelValue: { label: "Select", value: "select" },
        selectedReviewNeededValue: { label: "Select", value: "select" },
        statusOptions: [
          { label: "Not Published", value: "notPublished" },
          { label: "Not Suspended", value: "notSuspended" },
          { label: "Published", value: "published" },
          { label: "Suspend", value: "suspend" },
        ],
        reviewNeededOptions: [
          {
            label: "Final - Large Difference Vs Vender",
            value: "Final - Large Difference Vs Vender",
          },
          {
            label: "Final - Large varience Vs previous",
            value: "Final - Large varience Vs previous",
          },
          {
            label: "Final - Missing or Zero Final Price",
            value: "Final - Missing or Zero Final Price",
          },
        ],
      },
      gridState: {
        showDerivativeGrid: false,
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
            headerName: "Ignore Missing Price Flag",
            field: "ignoreMissing",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Description",
            field: "description",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Delivery Class",
            field: "deliveryClass",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Contract Date",
            field: "contractDate",
            width: 100,
            flex: 0,
          },

          {
            headerName: "Expiration Date",
            field: "expirationDate",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Currency",
            field: "currency",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Refinitiv Price",
            field: "refinitivPrice",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Bloomberg Price",
            field: "bloombergePrice",
            width: 90,
            flex: 0,
          },
          {
            headerName: "ICE Price",
            field: "icePrice",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Exchange Name",
            field: "exchangeName",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Exchange Price",
            field: "exchangePrice",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Previous Dirty price",
            field: "previousDirtyprice",
            width: 90,
            flex: 0,
          },

          {
            headerName: "EOD Override Price",
            field: "eodOverridePrice",
            width: 100,
            flex: 0,
          },
          {
            headerName: "EOD Final Price",
            field: "eodFinalPrice",
            width: 100,
            flex: 0,
          },
          {
            headerName: "EOD Timestamp",
            field: "eodTimestamp",
            width: 100,
            flex: 0,
          },
          {
            headerName: "EOD Final Adjusted Dirty Price",
            field: "eodFinalAdjustedDirtyPrice",
            width: 150,
            flex: 0,
          },
          {
            headerName: "EOD User Id",
            field: "eodUserid",
            width: 100,
            flex: 0,
          },
          {
            headerName: "prev CTD Cusip",
            field: "prevCtdCusip",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Futures",
            field: "futures",
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
  onClickExchangeInfo = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: false,
      showDividendInfoGrid: false,
      showExchangeInfogrid: true,
    });
  };
  onCloseExchangeInfoGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: true,
      showPlaceHolderGrid: false,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
    });
  };
  onCloseDividendInfoGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: true,
      showPlaceHolderGrid: false,
      showDividendInfoGrid: false,
    });
  };
  onClickDividendInfo = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: false,
      showDividendInfoGrid: true,
    });
  };
  /*   onCloseDeliverablePriceEditGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
    });
  }; */
  onChangeEdittedRecords = () => {
    let filtersState = this.state.filtersState;
    filtersState.isEdittedRecordsChecked =
      !filtersState.isEdittedRecordsChecked;
    this.setState({
      filtersState,
    });
  };
  onChangeNegativePriceFuturesRecords = () => {
    let filtersState = this.state.filtersState;
    filtersState.isNegativePriceFuturesChecked =
      !filtersState.isNegativePriceFuturesChecked;
    this.setState({
      filtersState,
    });
  };

  toggleTasksModal = () => {
    let tasksData = this.state.tasksData;
    tasksData.isTasksModalOpen = !tasksData.isTasksModalOpen;
    this.setState({
      tasksData,
    });
  };
  onClickEditDashBoardGrid = () => {
    this.setState({
      showEditGridDashBoard: true,
      showDerivativeGrid: false,
      showPlaceHolderGrid: false,
    });
  };

  showPlaceHolderScreen = () => {
    this.setState({
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      showEditGridDashBoard: false,
    });
  };
  onClickFutureContracts = () => {
    this.setState({
      showDerivativeGrid: true,
      showPlaceHolderGrid: false,
      showDeliverablePriceEditGrid: false,
    });
  };
  onClickDeliverablePriceEditGrid = (page) => {
    console.log("onClickDeliverablePriceEditGrid", page);
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: false,
      showDeliverablePriceEditGrid: true,
      deliverablesPage: page,
    });
  };
  onCloseDeliverablePriceEditGrid = (page) => {
    console.log("onCloseDeliverablePriceEditGrid", page);
    let showPlaceHolderGrid = false;
    let showDeliverablePriceEditGrid = false;
    this.state.deliverablesPage === "main"
      ? (showPlaceHolderGrid = true)
      : (showDeliverablePriceEditGrid = true);
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid,
      showDeliverablePriceEditGrid,
      deliverablesPage: page,
    });
  };
  onCloseEditcatDashboard = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      showDeliverablePriceEditGrid: false,
    });
  };
  /*   onCloseDeliverablePriceEditGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      showDeliverablePriceEditGrid: false,
    });
  }; */
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
    filtersState.isCorporateActionChecked =
      !filtersState.isCorporateActionChecked;
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
  /*   onClickFiler = () => {
    let gridState = this.state.gridState;

    let rowData = this.getFilteredGridData();
    gridState.rowData = rowData;
    this.onClickFutureContracts();
    this.setState({
      gridState,
      showTasks: true,
      editCatDashboardState,
    });
  }; */
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
    return PeoData.rows;
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
    console.log(colId);
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
  onClickFiler = () => {
    let gridState = this.state.gridState;
    let rowData = this.getFilteredGridData();
    gridState.rowData = rowData;
    gridState.showDerivativeGrid = true;

    this.setState({
      gridState,
    });
  };
  toggleDerivativeGrid = () => {
    let gridState = this.state.gridState;
    //const placeHolderState = this.state.placeHolderState;
    gridState.showDerivativeGrid = !gridState.showDerivativeGrid;
    //placeHolderState.isShowDerivativeGridMinimized = true;

    this.setState({
      gridState,
      //placeHolderState,
    });
  };
  toggleMinimizeDerivativeGrid = () => {
    const placeHolderState = this.state.placeHolderState;
    placeHolderState.isDerivativeGridMinimized =
      !placeHolderState.isDerivativeGridMinimized;
    const flexible_modal = document.getElementsByClassName(
      "derivativeGridWrapper"
    )[0];
    flexible_modal.setAttribute(
      "style",
      `display:${placeHolderState.isDerivativeGridMinimized ? "none" : "block"}`
    );
    this.setState({
      placeHolderState,
    });
  };
  toggleDividendInfoGrid = () => {
    let dividendInfoGridState = this.state.dividendInfoGridState;
    dividendInfoGridState.showDividendInfoGrid =
      !dividendInfoGridState.showDividendInfoGrid;
    this.setState({
      dividendInfoGridState,
    });
  };
  toggleMinimizeDividendInfoGrid = () => {
    const placeHolderState = this.state.placeHolderState;
    placeHolderState.isDividendInfoGridMinimized =
      !placeHolderState.isDividendInfoGridMinimized;
    const flexible_modal =
      document.getElementsByClassName("dividendInfoGrid")[0];
    flexible_modal.setAttribute(
      "style",
      `display:${
        placeHolderState.isDividendInfoGridMinimized ? "none" : "block"
      }`
    );
    this.setState({
      placeHolderState,
    });
  };
  toggleDeliverablePriceEditingGrid = () => {
    let deliverablePriceEditState = this.state.deliverablePriceEditState;
    deliverablePriceEditState.showDeliverablePriceEditGrid =
      !deliverablePriceEditState.showDeliverablePriceEditGrid;
    this.setState({
      deliverablePriceEditState,
    });
  };
  toggleMinimizeDeliverablePriceEditingGrid = () => {
    const placeHolderState = this.state.placeHolderState;
    placeHolderState.isDeliverablePriceEditGridMinimized =
      !placeHolderState.isDeliverablePriceEditGridMinimized;
    const flexible_modal = document.getElementsByClassName(
      "deliverablePriceEditGrid"
    )[0];
    flexible_modal.setAttribute(
      "style",
      `display:${
        placeHolderState.isDeliverablePriceEditGridMinimized ? "none" : "block"
      }`
    );
    this.setState({
      placeHolderState,
    });
  };
  toggleExchangeInfoGrid = () => {
    let exchangeInfoGridState = this.state.exchangeInfoGridState;
    exchangeInfoGridState.showExchangeInfoGrid =
      !exchangeInfoGridState.showExchangeInfoGrid;
    this.setState({
      exchangeInfoGridState,
    });
  };
  toggleMinimizeExchangeInfoGrid = () => {
    const placeHolderState = this.state.placeHolderState;
    placeHolderState.isExchangeInfoGridMinimized =
      !placeHolderState.isExchangeInfoGridMinimized;
    const flexible_modal = document.getElementsByClassName(
      "deliverablePriceEditGrid"
    )[0];
    flexible_modal.setAttribute(
      "style",
      `display:${
        placeHolderState.isExchangeInfoGridMinimized ? "none" : "block"
      }`
    );
    this.setState({
      placeHolderState,
    });
  };
  toggleEditCatDashboardGrid = () => {
    let editCatDashboardState = this.state.editCatDashboardState;
    editCatDashboardState.showEditCatDashboardGrid =
      !editCatDashboardState.showEditCatDashboardGrid;
    this.setState({
      editCatDashboardState,
    });
  };
  toggleMinimizeEditCatDashboardGrid = () => {
    const placeHolderState = this.state.placeHolderState;
    placeHolderState.isEditCatDashboardGridMinimized =
      !placeHolderState.isEditCatDashboardGridMinimized;
    const flexible_modal = document.getElementsByClassName(
      "editCatDashboardGrid"
    )[0];
    flexible_modal.setAttribute(
      "style",
      `display:${
        placeHolderState.isEditCatDashboardGridMinimized ? "none" : "block"
      }`
    );
    this.setState({
      placeHolderState,
    });
  };
  savegridPosition = (gridName) => {
    console.log("savegridPosition");
    let derivativeGrid = document.getElementsByClassName(gridName)[0];
    let gridPositions = JSON.parse(localStorage.getItem("gridPositions")) || [];
    gridPositions =
      gridPositions &&
      gridPositions.filter((item) => {
        return item.grid !== gridName;
      });

    gridPositions &&
      gridPositions.push({
        grid: gridName,
        position: derivativeGrid.getAttribute("style"),
      });
    localStorage.setItem("gridPositions", JSON.stringify(gridPositions));
    console.log(JSON.parse(localStorage.getItem("gridPositions")));
  };
  setgridPosition() {
    let gridPositions = JSON.parse(localStorage.getItem("gridPositions"));
    //const element = document.getElementsByClassName("derivativeGrid")[0];
    //element && element.setAttribute("style", `${gridPositions[2].position}`)
    if (gridPositions) {
      for (const item of gridPositions) {
        const element = document.getElementsByClassName(item.grid)[0];
        element && element.setAttribute("style", `${item.position}`);
      }
    }
  }
  onCellClicked = (e) => {
    let editPricingState = this.state.editPricingState;
    console.log(e);
    console.log(e.value);
    console.log(e.rowIndex);
    console.log(e.data);
    console.log("column key", e.column.colId);
    /*    console.log(e);
    console.log(e.value);
    console.log(e.rowIndex);
    console.log(e.data);
    console.log("column key", e.column.colId); 
    dailyReturnsPricingState.rowData = dailyReturnsPricingJsonData.rows;
    const data = dailyReturnsPricingState.rowData.filter(
      (row) =>
        row[e.column.colId] &&
        row[e.column.colId].toString() === e.value.toString()
    );
    dailyReturnsPricingState.rowData = data;*/
    //if (e.column.colId && e.column.colId.toLowerCase() === "symbol") {
    editPricingState.selectedSymbolValue = e.value.toString();
    //this.toggleContractEditModal();
    editPricingState.showContractPriceEditingGrid = true;
    //}

    this.setState({
      editPricingState,
    });
  };
  onRefreshEditContractPriceGridData = () => {
    let editPricingState = this.state.editPricingState;
    let agGridState = this.state.agGridState;
    editPricingState.rowData = [];
    agGridState.selectedGridRows = [];
    this.setState({
      editPricingState,
      agGridState,
    });

    setTimeout(() => {
      this.loadDataOnRefreshForContractEditPrice();
    }, 3000);
  };
  toggleExcludeModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isExcludeModalOpen = !editPricingState.isExcludeModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleSubstituteModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isSubstituteModalOpen =
      !editPricingState.isSubstituteModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleLockVolatilityModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isLockVolatilityModalOpen =
      !editPricingState.isLockVolatilityModalOpen;
    this.setState({
      editPricingState,
    });
  };
  onSelectionChangedForContractPriceEdit = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("Grid Rows selected c", selectedRows);
    let agGridState = this.state.agGridState;
    agGridState.selectedGridRows = selectedRows;
    this.setState({
      agGridState,
    });
  };
  onCellValueChanged = (params) => {
    const colId = params.column.getId();
  };
  toggleVolatalityOverrideModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isVolatalityOverrideModalOpen =
      !editPricingState.isVolatalityOverrideModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleBorrowCostOverrideModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isBorrowCostOverrideModalOpen =
      !editPricingState.isBorrowCostOverrideModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleSmoothingPromptModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isSmoothingPromptModalOpen =
      !editPricingState.isSmoothingPromptModalOpen;
    this.setState({
      editPricingState,
    });
  };
  onConfirmSmoothingPropmt = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isWithoutSmoothingPromptModalOpen =
      !editPricingState.isWithoutSmoothingPromptModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleWithoutSmoothingPromptModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isWithoutSmoothingPromptModalOpen =
      !editPricingState.isWithoutSmoothingPromptModalOpen;
    this.setState({
      editPricingState,
    });
  };
  onConfirmWithoutSmoothingPropmt = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isSmoothingPromptModalOpen =
      !editPricingState.isSmoothingPromptModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleCalculateModal = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.isCalculateModalOpen =
      !editPricingState.isCalculateModalOpen;
    this.setState({
      editPricingState,
    });
  };
  toggleContractPriceEditingGrid = () => {
    let editPricingState = this.state.editPricingState;
    editPricingState.showContractPriceEditingGrid =
      !editPricingState.showContractPriceEditingGrid;
    this.setState({
      editPricingState,
    });
  };
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
          onClickFutureContracts: this.onClickFutureContracts,
          onClickEditDashBoardGrid: this.onClickEditDashBoardGrid,
          onCloseEditcatDashboard: this.onCloseEditcatDashboard,
          onClickDeliverablePriceEditGrid: this.onClickDeliverablePriceEditGrid,
          toggleTasksModal: this.toggleTasksModal,
          onChangeEdittedRecords: this.onChangeEdittedRecords,
          onChangeNegativePriceFuturesRecords:
            this.onChangeNegativePriceFuturesRecords,
          onCloseDeliverablePriceEditGrid: this.onCloseDeliverablePriceEditGrid,
          onCloseDividendInfoGrid: this.onCloseDividendInfoGrid,
          onClickDividendInfo: this.onClickDividendInfo,
          onCloseExchangeInfoGrid: this.onCloseExchangeInfoGrid,
          onClickExchangeInfo: this.onClickExchangeInfo,
          //Ag grid methods
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          onGridReady: this.onGridReady,
          onBtPrint: this.onBtPrint,
          onBtnExport: this.onBtnExport,
          getSelectedRowData: this.getSelectedRowData,
          onSelectionChanged: this.onSelectionChanged,
          onCellValueChanged: this.onCellValueChanged,
          toggleDerivativeGrid: this.toggleDerivativeGrid,
          savegridPosition: this.savegridPosition,
          setgridPosition: this.setgridPosition,
          toggleMinimizeDerivativeGrid: this.toggleMinimizeDerivativeGrid,
          toggleDividendInfoGrid: this.toggleDividendInfoGrid,
          toggleMinimizeDividendInfoGrid: this.toggleMinimizeDividendInfoGrid,
          toggleMinimizeDeliverablePriceEditingGrid:
            this.toggleMinimizeDeliverablePriceEditingGrid,
          toggleDeliverablePriceEditingGrid:
            this.toggleDeliverablePriceEditingGrid,
          toggleExchangeInfoGrid: this.toggleExchangeInfoGrid,
          toggleMinimizeExchangeInfoGrid: this.toggleMinimizeExchangeInfoGrid,
          toggleEditCatDashboardGrid: this.toggleEditCatDashboardGrid,
          toggleMinimizeEditCatDashboardGrid:
            this.toggleMinimizeEditCatDashboardGrid,
          onCellClicked: this.onCellClicked,
          toggleExcludeModal: this.toggleExcludeModal,
          toggleSubstituteModal: this.toggleSubstituteModal,
          toggleLockVolatilityModal: this.toggleLockVolatilityModal,
          onSelectionChangedForContractPriceEdit:
            this.onSelectionChangedForContractPriceEdit,
          toggleVolatalityOverrideModal: this.toggleVolatalityOverrideModal,
          toggleBorrowCostOverrideModal: this.toggleBorrowCostOverrideModal,
          toggleSmoothingPromptModal: this.toggleSmoothingPromptModal,
          onConfirmSmoothingPropmt: this.onConfirmSmoothingPropmt,
          toggleWithoutSmoothingPromptModal:
            this.toggleWithoutSmoothingPromptModal,
          onConfirmWithoutSmoothingPropmt: this.onConfirmWithoutSmoothingPropmt,
          toggleCalculateModal: this.toggleCalculateModal,
          toggleContractPriceEditingGrid: this.toggleContractPriceEditingGrid,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
FuturesProvider.propTypes = {
  children: PropTypes.any,
};
export default FuturesProvider;
