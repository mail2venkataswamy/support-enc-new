import React, { Component } from "react";

import MyContext from "../context/peo-context.jsx";
import PeoData from "./json/price-editing-options/price-editing-options.json";
import EditCatData from "./json/futures/edit-cat-dashboard.json";
import DividendInfo from "./json/futures/dividend-info-data.json";
import AssociatedProductsData from "./json/price-editing-options/associated-products-info.json";
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
      showEditGridDashBoard: false,
      showPlaceHolderGrid: true,
      //showDeliverablePriceEditGrid: false,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
      showAssociatedProductsGrid: false,
      associatedProductsState: {
        rowData: AssociatedProductsData.rows,
        colDefs: [
          {
            headerName: "#",
            field: "index",
            width: "auto",
            flex: 0,
            width: 60,
          },
          {
            headerName: "Symbol",
            field: "symbol",
            width: "auto",
            flex: 0,
          },
          {
            headerName: "Description",
            field: "description",
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
      tasksData: {
        isTasksModalOpen: false,
      },
      editCatDashboardState: {
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
        isSpotPriceRecordsChecked: false,
        clearedOptions: [
          { label: "Cleared", value: "cleared" },
          { label: "Not Cleared", value: "notCleared" },
        ],
        selectedClearedValue: { label: "Select", value: "select" },
        statusOptions: [
          { label: "Not Published", value: "notPublished" },
          { label: "Not Suspended", value: "notSuspended" },
          { label: "Published", value: "published" },
          { label: "Suspend", value: "suspend" },
        ],
        categoryLevelOptions: [
          { label: "Product", value: "product" },
          { label: "Contract", value: "contract" },
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
            headerName: "SOO",
            field: "sso",
            width: 70,
            flex: 0,
          },
          {
            headerName: "Theo Spot price Application",
            field: "theoSpotPriceApp",
            width: 140,
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
            headerName: "Underlying Symbol",
            field: "underlyingsymbol",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Excercise Style",
            field: "excerciseStyle",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Delivery Class",
            field: "deliveryClass",
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
            headerName: "Final NBBO With This Thrs Count",
            field: "finalNBBOWithThisThrsCount",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Final NBBO Without This Thrs Count",
            field: "finalNBBOWithoutThisThrsCount",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Final Monotonicity Violation Count",
            field: "finalMonotonicityViolationCount",
            width: 150,
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
            width: 110,
            flex: 0,
          },
          {
            headerName: "Previous Adjustment Dirty price",
            field: "previousAdjustmentDirtyprice",
            width: 170,
            flex: 0,
          },
          {
            headerName: "Accured Interest",
            field: "accuredInterest",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Theo Spot Price Override",
            field: "theoSpotPriceOverride",
            width: 130,
            flex: 0,
            cellStyle: staticCellStyle,
          },
          {
            headerName: "Theo Spot Price ",
            field: "theoSpotPrice",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Theo Spot Price User ID",
            field: "theoSpotPriceUserId",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Theo Spot Price Timestamp",
            field: "theoSpotPriceTimestamp",
            width: 140,
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
            headerName: "EOD Timestamp",
            field: "eodTimestamp",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Final Price Review Needed",
            field: "finalPriceReviewNeeded",
            width: 130,
            flex: 0,
          },
          {
            headerName: "Risk Review Needed",
            field: "riskReviewNeeded",
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
      exchangeInfoGridState: {
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
    };
  }
  onCloseAssociatedProductsGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
      showAssociatedProductsGrid: false,
    });
  };
  onClickAssociatedProductsGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: false,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
      showAssociatedProductsGrid: true,
    });
  };
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
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      showDividendInfoGrid: false,
      showExchangeInfogrid: false,
    });
  };
  onCloseDividendInfoGrid = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
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
  onCloseEditcatDashboard = () => {
    this.setState({
      showEditGridDashBoard: false,
      showDerivativeGrid: false,
      showPlaceHolderGrid: true,
      //showDeliverablePriceEditGrid: false,
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
  onChangeEdittedRecords = () => {
    let filtersState = this.state.filtersState;
    filtersState.isEdittedRecordsChecked = !filtersState.isEdittedRecordsChecked;
    this.setState({
      filtersState,
    });
  };
  onChangeSpotPriceRecords = () => {
    let filtersState = this.state.filtersState;
    filtersState.isSpotPriceRecordsChecked = !filtersState.isSpotPriceRecordsChecked;
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
          onChangeEdittedRecords: this.onChangeEdittedRecords,
          onChangeSpotPriceRecords: this.onChangeSpotPriceRecords,
          onClickEditDashBoardGrid: this.onClickEditDashBoardGrid,
          toggleTasksModal: this.toggleTasksModal,
          onCloseEditcatDashboard: this.onCloseEditcatDashboard,
          onCloseDividendInfoGrid: this.onCloseDividendInfoGrid,
          onClickDividendInfo: this.onClickDividendInfo,
          onCloseExchangeInfoGrid: this.onCloseExchangeInfoGrid,
          onClickExchangeInfo: this.onClickExchangeInfo,
          onCloseAssociatedProductsGrid: this.onCloseAssociatedProductsGrid,
          onClickAssociatedProductsGrid: this.onClickAssociatedProductsGrid,
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
