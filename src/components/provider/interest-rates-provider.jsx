import { Component } from "react";
import React from "react";
import MyContext from "../context/interest-rates-context.jsx";
import thresholdGridData from "./json/threshold.json";
function setPrinterFriendly(api) {
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "55%";
  api.setDomLayout(null);
}
const staticCellStyle = { color: "red", "background-color": "yellow" };

const dynamicCellStyle = (params) => {
  if (params.value === "Police") {
    return { color: "red", backgroundColor: "yellow" };
  }
  return null;
};

const getCurrentDateTime = () => {
  let currentdate = new Date();
  let datetime =
    " " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear();
  return datetime;
};

class ErProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intialFilterPanelState: {},
      filterPanelData: {
        fromDate: new Date(),
        toDate: new Date(),
        interestForOptions: [
          { label: "All", value: "all" },
          { label: "USD", value: "usd" },
        ],
        selectedInterestForCurrencyValue: { label: "All", value: "all" },
        currencyTypeOptions: [
          { label: "All", value: "all" },
          { label: "Libor", value: "libor" },
        ],
        selectedCurrencyTypeValue: { label: "All", value: "all" },

        statusOptions: [],
        selectedStatusValue: { label: "All", value: "all" },
        flaggedEditsOptions: [
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
        selectedFlaggedEditsValue: { label: "Select", value: "select" },
        isEdittedChecked: false,
      },
      maintenanceScreenData: {
        isDeleteGridRecordPromptModalOpen: false,
        setEdittedToPrevOptions: [
          { label: "Set Editted = Previous", value: "setEdittedToPrev" },
          { label: "All", value: "all" },
          { label: "Selected", value: "selected" },
        ],
        selectedSetEdittedToPrevValue: {
          label: "Set Editted = Previous",
          value: "setEdittedToPrev",
        },

        maintenanceGridData: [],
        isGridMustPopulatedModalOpen: false,
        gridMustBePopulateModalWarningMessage: "Grid must be populated",
        isThresholdModalOpen: false,
        isPublishValuedSecuritiesModalOpen: false,
        matenanceDataLastPublishDate: getCurrentDateTime(),
        maintenanceRowData: [],
        publishTireData: [
          { label: "1", value: "one", isChecked: false },
          { label: "2", value: "two", isChecked: false },
          { label: "3", value: "three", isChecked: false },
          { label: "4", value: "four", isChecked: false },
        ],
        isAllPublishTypeChecked: false,
        publishTypeData: [
          { label: "Common Stock", value: "commonStock", isChecked: false },
          {
            label: "Preffered Stock",
            value: "prefferedStock",
            isChecked: false,
          },
          { label: "Index", value: "index", isChecked: false },
          { label: "Corporate Debt", value: "corporateDebt", isChecked: false },
          { label: "FMS", value: "fms", isChecked: false },
        ],

        isAllPublishTireChecked: false,
        priceTypeData: [
          {
            for: "priceType",
            name: "priceType",
            label: "Final",
            type: "radio",
            value: "final",
          },
          {
            for: "priceType",
            name: "priceType",
            label: "Intraday",
            type: "radio",
            value: "intraDay",
          },
        ],
        reviewOptions: [
          { label: "Review", value: "review" },
          { label: "Review Final", value: "reviewFinal" },
          { label: "Review Stock Loan", value: "reviewStockLoan" },
          { label: "Review Both", value: "reviewBoth" },
        ],
        edittedRowsData: [],
        thresholdGridData: [],
        selectedGridRowData: [],
        selectedGridRows: [],
        isRecordMustSelectedPopupOpen: false,
        RecordMustBeSelectedWarningMessage:
          "Record must be selected to override",
        isPriceOverrideConfirmModalOpen: false,
        priceOverrideConfirmWarningMessage:
          "Are you sure to ovveride the value",
        //------AGGRID state--------------------
        popupParent: document.body,
        showAllColumns: true,
        colDefs: [
          {
            width: 60,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            flex: 0,
          },
          { field: "#", width: 40, suppressSizeToFit: true, flex: 0 },

          { headerName: "Currency", field: "currency", width: 90, flex: 0 },
          { headerName: "Tenor", field: "tenor", width: 90, flex: 0 },
          { headerName: "Type", field: "type", width: 90, flex: 0 },
          {
            headerName: "Day/Count basis",
            field: "dayCountBasis",
            width: 100,
            flex: 0,
          },
          { headerName: "Fix/Float", field: "fixFloat", width: 100, flex: 0 },
          {
            headerName: "Payment Frequency",
            field: "paymentFrequency",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Activity Date",
            field: "activityDate",
            width: 80,
            flex: 0,
          },
          {
            headerName: "Previous Rate(%)",
            field: "prevRate",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Vendor Rate(%)",
            field: "vendorRate",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Published",
            field: "published",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Status",
            field: "status",
            width: 80,
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
        selectedGridData: [],
        isImportVendorDataModalOpen: false,
      },
      editDashboardData: {
        showEditDashboardGrid: true,
        lastImportTime: new Date(),
        lastPublishDate: new Date(),
      },
      thresholdData: {
        isThresholdModalOpen: false,
      },
      addInrData: {
        isAddInrModalOpen: false,
        currencyOptions: [
          { label: "All", value: "all" },
          { label: "USD", value: "usd" },
        ],
        selectedAddInrCurrencyValue: { label: "Select", value: "select" },
      },
    };
  }
  //=====Add New Inr Rate
  onChangeAddInrCurrencyValue = (selectedValue) => {
    let addInrData = this.state.addInrData;
    addInrData.selectedAddInrCurrencyValue = selectedValue;
    this.setState({ addInrData });
  };
  //================Threshold=========
  toggleThresholdModal = () => {
    let thresholdData = this.state.thresholdData;
    thresholdData.isThresholdModalOpen = !thresholdData.isThresholdModalOpen;
    this.setState({
      thresholdData,
    });
  };
  toggleAddInrModal = () => {
    let addInrData = this.state.addInrData;
    addInrData.isAddInrModalOpen = !addInrData.isAddInrModalOpen;
    this.setState({
      addInrData,
    });
  };
  //------------------FilterPanel Methods-------------------------------

  setFromDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.fromDate);
    filterPanelData.fromDate = date;
    this.setState({
      filterPanelData,
    });
  };
  setToDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.toDate);
    filterPanelData.toDate = date;
    this.setState({
      filterPanelData,
    });
  };

  onClickReset = () => {
    let filterPanelData = this.state.filterPanelData;
    let intialFilterPanelState = this.state.intialFilterPanelState;
    let data = { ...filterPanelData, ...intialFilterPanelState };
    this.setState({ filterPanelData: data });
  };
  onChangeInterestForCurrencyValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedInterestForCurrencyValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeCurrencyTypeValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCurrencyTypeValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeEdittedRates = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isEdittedChecked = e.target.checked;
    this.setState({ filterPanelData });
  };
  onChangeStatusValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedStatusValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeFlaggedEditsValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedFlaggedEditsValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeSetEdittedToPrevValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedSetEdittedToPrevValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onClickFilter = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let maintenanceGridData = this.getFilteredGridData();
    maintenanceScreenData.maintenanceGridData = maintenanceGridData;
    this.setState({
      maintenanceScreenData,
    });
  };
  getFilteredGridData() {
    return [
      {
        id: 1,
        currency: "USA",
        tenor: "1 year",
        type: "Libor",
        dayCountBasis: "ACT/365",
        fixFloat: "Fix",
        paymentFrequency: 2,
        activityDate: new Date(),
        prevRate: 1,
        vendorRate: 2,
        published: "tets",
        status: "tets",
      },
      {
        id: 2,
        currency: "IND",
        tenor: "2 year",
        type: "Libor",
        dayCountBasis: "ACT/365",
        fixFloat: "Fix",
        paymentFrequency: 2,
        activityDate: new Date(),
        prevRate: 2,
        vendorRate: 3,
        published: "tets",
        status: "tets",
      },
    ];
  }
  //===============AG-GRID=====================================
  toggleDeletePromptModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isDeleteGridRecordPromptModalOpen = !maintenanceScreenData.isDeleteGridRecordPromptModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  onFirstDataRendered = (params) => {
    params.api.expandAll();
    params.api.sizeColumnsToFit();
  };

  onBtnExport = () => {
    this.gridApi.exportDataAsCsv();
  };
  onBtPrint = () => {
    const api = this.gridApi;
    setPrinterFriendly(api);
    setTimeout(function () {
      print();
      setNormal(api);
    }, 2000);
  };
  showLessOrColumns = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.showAllColumns = !maintenanceScreenData.showAllColumns;
    this.setState({
      maintenanceScreenData,
    });
  };
  getSelectedRowData = () => {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node) => node.data);
    alert(`Selected Nodes:\n${JSON.stringify(selectedData)}`);
    this.setState({
      selectedGridRowData: selectedData,
    });
  };
  onSelectionChanged = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log("Grid Rows selected", selectedRows);
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.selectedGridRows = selectedRows;
    this.setState({
      maintenanceScreenData,
    });
  };
  getEditingCells() {
    var cellDefs = this.gridApi.getEditingCells();
    console.log(JSON.stringify(cellDefs));
  }
  onCellValueChanged = (item) => {
    let row = {
      ...item.data,
      oldValue: item.oldValue,
      newValue: item.newValue,
      type: item.type,
      rowIndex: item.rowIndex,
      column: item.column.colId,
    };
    alert(
      `Cell value of ${row.column} of row index ${row.rowIndex} --------> ${row.oldValue} to ${row.newValue}`
    );
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.edittedRowsData.push(row);
    this.setState({ maintenanceScreenData });
    console.log("updated  grid rows", maintenanceScreenData.edittedRowsData);
  };
  onRefreshMaintenanceGridData = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.maintenanceGridData = [];
    this.setState({
      maintenanceScreenData,
    });

    setTimeout(() => {
      this.loadDataOnRefresh();
    }, 3000);
  };
  loadDataOnRefresh() {
    this.showLoading();
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let data = this.getFilteredGridData();
    console.log(data);
    maintenanceScreenData.maintenanceGridData = data;
    setTimeout(() => {
      this.setState({
        maintenanceScreenData,
      });
    }, 1000);
  }
  showLoading() {
    let ele = document.getElementsByClassName("ag-overlay-no-rows-center")[0];
    ele.innerText = "loading...";
  }
  //-----------------------------------
  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isFromAndStDisabled = true;

    let filterObject = {
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
    };
    let data = { ...filterPanelData, ...filterObject };
    console.log(data);

    this.setState({
      intialFilterPanelState: data,
      filterPanelData,
    });
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          //==================Filter-Panel=========================
          setFromDate: (e) => this.setFromDate(e),
          setToDate: (e) => this.setToDate(e),
          onClickReset: (e) => this.onClickReset(e),
          onClickFilter: (e) => this.onClickFilter(e),
          onChangeInterestForCurrencyValue: (e) =>
            this.onChangeInterestForCurrencyValue(e),
          onChangeCurrencyTypeValue: (e) => this.onChangeCurrencyTypeValue(e),
          onChangeEdittedRates: (e) => this.onChangeEdittedRates(e),
          onChangeStatusValue: (e) => this.onChangeStatusValue(e),
          onChangeFlaggedEditsValue: (e) => this.onChangeFlaggedEditsValue(e),
          onChangeSetEdittedToPrevValue: (e) =>
            this.onChangeSetEdittedToPrevValue(e),

          //======================

          onSelectEditedRecordValue: (e) => this.onSelectEditedRecordValue(e),
          getSelectedRowData: this.getSelectedRowData,
          onGridReady: this.onGridReady,
          onBtnExport: this.onBtnExport,
          onBtPrint: this.onBtPrint,
          onCellValueChanged: this.onCellValueChanged,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          toggleDeletePromptModal: this.toggleDeletePromptModal,
          //====Threhold====
          toggleThresholdModal: this.toggleThresholdModal,
          toggleAddInrModal: this.toggleAddInrModal,
          //=====Add NEw Inr
          onChangeAddInrCurrencyValue: (e) =>
            this.onChangeAddInrCurrencyValue(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ErProvider;
