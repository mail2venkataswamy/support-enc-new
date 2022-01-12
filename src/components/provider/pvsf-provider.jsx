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
      editObject: {},
      initialPanelState: {},
      initialAddPrimaryVendorSelectoionsData: {},
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
        subClassificationOptions: [
          { label: "Flex", value: "flex" },
          { label: "Index/Other", value: "indexOrOther" },
          { label: "Not Cleared", value: "notCleared" },
          { label: "Standard", value: "standard" },
        ],
        selectedSubClassificationValue: { label: "Select", value: "Select" },
        securityTypeOptions: [
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
        ],
        selectedSecurityTypeValue: { label: "Select", value: "Select" },
        applicationOptions: [
          { label: "SOSA", value: "sosa" },
          { label: "Stock Loan", value: "stockLoan" },
          { label: "VS 3M Avg Vol", value: "vs3mAvgVol" },
        ],
        selectedApplicationValue: { label: "Select", value: "Select" },
        cycleOptions: [
          { label: "Intra-Day and Final", value: "intraDayAndFinal" },
          { label: "End of Day", value: "endOfDay" },
          { label: "Intra Day", value: "intraDay" },
        ],
        selectedCycleValue: { label: "Select", value: "Select" },
        primaryVendorOptions: [
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
        selectedPrimaryVendorValue: { label: "Select", value: "Select" },
        selectedSecondaryVendorValue: { label: "Select", value: "Select" },
        selectedTeritaryVendorValue: { label: "Select", value: "Select" },
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
            headerName: "Sub Classification",
            field: "subClassification",
            width: 120,
            flex: 0,
          },

          {
            headerName: "Security Type",
            field: "securityType",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Application",
            field: "application",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Cycle",
            field: "cycle",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Primary Vendor",
            field: "primaryVendor",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Secondary Vendor",
            field: "secondaryVendor",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Teritary Vendor",
            field: "teritaryVendor",
            width: 120,
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
      addPrimaryVendorSelectoionsData: {
        isAddPrimaryVendorSelectoionsModalOpen: false,
        isModifyPrimaryVendorSelectoionsModalOpen: false,
        vendorOptins: [
          { label: "IDSI", value: "idsi" },
          { label: "Thomson Reuters Corp.", value: "Thomson Reuters Corp." },
          { label: "Bloomberg Finance L.P.", value: "Bloomberg Finance L.P." },
          { label: "Exchange Files", value: "Exchange Files" },
          { label: "ICE Data Services", value: "iceDataServices" },
        ],
        selectedVendorValue: { label: "All", value: "all" },
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
        subClassificationOptions: [
          { label: "Flex", value: "flex" },
          { label: "Index/Other", value: "indexOrOther" },
          { label: "Not Cleared", value: "notCleared" },
          { label: "Standard", value: "standard" },
        ],
        selectedSubClassificationValue: { label: "Select", value: "Select" },
        securityTypeOptions: [
          { label: "1", value: 1 },
          { label: "2", value: 2 },
          { label: "3", value: 3 },
          { label: "4", value: 4 },
        ],
        selectedSecurityTypeValue: { label: "Select", value: "Select" },
        applicationOptions: [
          { label: "SOSA", value: "sosa" },
          { label: "Stock Loan", value: "stockLoan" },
          { label: "VS 3M Avg Vol", value: "vs3mAvgVol" },
        ],
        selectedApplicationValue: { label: "Select", value: "Select" },
        cycleOptions: [
          { label: "Intra-Day and Final", value: "intraDayAndFinal" },
          { label: "End of Day", value: "endOfDay" },
          { label: "Intra Day", value: "intraDay" },
        ],
        selectedCycleValue: { label: "Select", value: "Select" },
        primaryVendorOptions: [
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
        selectedPrimaryVendorValue: { label: "Select", value: "Select" },
        selectedSecondaryVendorValue: { label: "Select", value: "Select" },
        selectedTeritaryVendorValue: { label: "Select", value: "Select" },
      },
    };
  }
  //==================Grid Methods=================
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
        productType: "Currency",
        classification: "Future",
        subClassification: "Flex",
        securityType: "1",
        application: "Stock Loan",
        cycle: "Intra Day",
        primaryVendor: "IDSI",
        secondaryVendor: "IDSI",
        teritaryVendor: "IDSI",
      },
      {
        id: 2,
        productType: "Debt",
        classification: "Currency",
        subClassification: "Standard",
        securityType: "2",
        application: "SOSA",
        cycle: "End of Day",
        primaryVendor: "Exchange Files",
        secondaryVendor: "Exchange Files",
        teritaryVendor: "Exchange Files",
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
    console.log(colId);
  };
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
  //================Filter Panel Methods=========
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
  onChangeSubClassificationValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedSubClassificationValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeSecurityTypeValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedSecurityTypeValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeApplicationValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedApplicationValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeCycleValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCycleValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangePrimaryVendorValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedPrimaryVendorValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeSecondaryVendorValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedSecondaryVendorValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeTeritaryVendorValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedTeritaryVendorValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onClickFiler = () => {
    let gridScreenData = this.state.gridScreenData;
    let priceSystemAlertStateRowData = this.getFilteredGridData();
    gridScreenData.priceSystemAlertStateRowData = priceSystemAlertStateRowData;
    this.setState({
      gridScreenData,
    });
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

  toggleDeletePromptModal = () => {
    let gridScreenData = this.state.gridScreenData;
    gridScreenData.isDeleteGridRecordPromptModalOpen =
      !gridScreenData.isDeleteGridRecordPromptModalOpen;
    this.setState({
      gridScreenData,
    });
  };
  //===========Add Primary Vendor Selection Methods===
  onChangeAddProductTypeValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedProductTypeValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddClassificationValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedClassificationValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddSubClassificationValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedSubClassificationValue =
      selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddSecurityTypeValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedSecurityTypeValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddApplicationValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedApplicationValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddCycleValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedCycleValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddPrimaryVendorValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedPrimaryVendorValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddSecondaryVendorValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedSecondaryVendorValue =
      selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };
  onChangeAddTeritaryVendorValue = (selectedValue) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.selectedTeritaryVendorValue = selectedValue;
    this.setState({ addPrimaryVendorSelectoionsData });
  };

  //===========Modify Methods========
  toggleAddPrimaryVendorSelectoionModal = () => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    let initialAddPrimaryVendorSelectoionsData =
      this.state.initialAddPrimaryVendorSelectoionsData;
    let resetObject = {
      selectedProductTypeValue:
        initialAddPrimaryVendorSelectoionsData.selectedProductTypeValue,
      selectedClassificationValue:
        initialAddPrimaryVendorSelectoionsData.selectedClassificationValue,
      selectedSubClassificationValue:
        initialAddPrimaryVendorSelectoionsData.selectedSubClassificationValue,
      selectedSecurityTypeValue:
        initialAddPrimaryVendorSelectoionsData.selectedSecurityTypeValue,
      selectedApplicationValue:
        initialAddPrimaryVendorSelectoionsData.selectedApplicationValue,
      selectedCycleValue:
        initialAddPrimaryVendorSelectoionsData.selectedCycleValue,
      selectedPrimaryVendorValue:
        initialAddPrimaryVendorSelectoionsData.selectedPrimaryVendorValue,
      selectedSecondaryVendorValue:
        initialAddPrimaryVendorSelectoionsData.selectedSecondaryVendorValue,
      selectedTeritaryVendorValue:
        initialAddPrimaryVendorSelectoionsData.selectedTeritaryVendorValue,
    };
    addPrimaryVendorSelectoionsData = {
      ...addPrimaryVendorSelectoionsData,
      ...resetObject,
    };
    addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen =
      !addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen;
    addPrimaryVendorSelectoionsData.isModifyPrimaryVendorSelectoionsModalOpen = false;

    this.setState({
      addPrimaryVendorSelectoionsData,
    });
  };
  onResetAddPrimaryVendorSelectoions = () => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    let initialAddPrimaryVendorSelectoionsData =
      this.state.initialAddPrimaryVendorSelectoionsData;

    let data = {
      ...addPrimaryVendorSelectoionsData,
      ...(addPrimaryVendorSelectoionsData.isModifyPrimaryVendorSelectoionsModalOpen
        ? this.state.editObject
        : initialAddPrimaryVendorSelectoionsData),
    };
    data.isAddPrimaryVendorSelectoionsModalOpen = true;

    this.setState({
      addPrimaryVendorSelectoionsData: data,
    });
  };
  onSaveAddPrimaryVendorSelectoions = () => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    let gridScreenData = this.state.gridScreenData;

    let itemToSave = {
      productType:
        addPrimaryVendorSelectoionsData.selectedProductTypeValue.label,
      classification:
        addPrimaryVendorSelectoionsData.selectedClassificationValue.label,
      subClassification:
        addPrimaryVendorSelectoionsData.selectedSubClassificationValue.label,
      securityType:
        addPrimaryVendorSelectoionsData.selectedSecurityTypeValue.label,
      application:
        addPrimaryVendorSelectoionsData.selectedApplicationValue.label,
      cycle: addPrimaryVendorSelectoionsData.selectedCycleValue.label,
      primaryVendor:
        addPrimaryVendorSelectoionsData.selectedPrimaryVendorValue.label,
      secondaryVendor:
        addPrimaryVendorSelectoionsData.selectedSecondaryVendorValue.label,
      teritaryVendor:
        addPrimaryVendorSelectoionsData.selectedTeritaryVendorValue.label,
    };
    gridScreenData.priceSystemAlertStateRowData = [
      ...gridScreenData.priceSystemAlertStateRowData,
      itemToSave,
    ];
    addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen =
      !addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen;
    addPrimaryVendorSelectoionsData.isModifyPrimaryVendorSelectoionsModalOpen = false;

    this.setState({
      gridScreenData,
      addPrimaryVendorSelectoionsData,
    });
  };
  //==========MOdify Methods===================
  getObject = (options, objLabel) => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    let selectedGridRow = this.state.gridScreenData.selectedGridRows;
    let obj =
      addPrimaryVendorSelectoionsData[options] &&
      addPrimaryVendorSelectoionsData[options].find(
        (option) =>
          option.label.toLowerCase() ===
          selectedGridRow[selectedGridRow.length - 1][objLabel].toLowerCase()
      );
    return obj;
  };

  toggleModifyPvsfModal = () => {
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;
    addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen =
      !addPrimaryVendorSelectoionsData.isAddPrimaryVendorSelectoionsModalOpen;
    addPrimaryVendorSelectoionsData.isModifyPrimaryVendorSelectoionsModalOpen =
      !addPrimaryVendorSelectoionsData.isModifyPrimaryVendorSelectoionsModalOpen;

    let editObject = {
      selectedProductTypeValue: this.getObject(
        "productTypeOptions",
        "productType"
      ),
      selectedClassificationValue: this.getObject(
        "classificationOptions",
        "classification"
      ),
      selectedSubClassificationValue: this.getObject(
        "subClassificationOptions",
        "subClassification"
      ),
      selectedSecurityTypeValue: this.getObject(
        "securityTypeOptions",
        "securityType"
      ),
      selectedApplicationValue: this.getObject(
        "applicationOptions",
        "application"
      ),

      selectedCycleValue: this.getObject("cycleOptions", "cycle"),
      selectedPrimaryVendorValue: this.getObject(
        "primaryVendorOptions",
        "primaryVendor"
      ),
      selectedSecondaryVendorValue: this.getObject(
        "primaryVendorOptions",
        "secondaryVendor"
      ),
      selectedTeritaryVendorValue: this.getObject(
        "primaryVendorOptions",
        "teritaryVendor"
      ),
    };
    addPrimaryVendorSelectoionsData = {
      ...addPrimaryVendorSelectoionsData,
      ...editObject,
    };

    this.setState({
      addPrimaryVendorSelectoionsData,
      editObject,
    });
  };

  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;

    let initialPanelState = { ...filterPanelData };
    let addPrimaryVendorSelectoionsData =
      this.state.addPrimaryVendorSelectoionsData;

    let initialAddPrimaryVendorSelectoionsData = {
      ...addPrimaryVendorSelectoionsData,
    };

    this.setState({
      initialPanelState,
      initialAddPrimaryVendorSelectoionsData,
    });
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onGridReady: this.onGridReady,
          onBtPrint: this.onBtPrint,
          onBtnExport: this.onBtnExport,
          onToggleFilterScreen: this.onToggleFilterScreen,
          onChangeProductTypeValue: (e) => this.onChangeProductTypeValue(e),
          onClickReset: this.onClickReset,
          onClickFiler: this.onClickFiler,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          toggleAddPrimaryVendorSelectoionModal:
            this.toggleAddPrimaryVendorSelectoionModal,
          onResetAddPrimaryVendorSelectoions:
            this.onResetAddPrimaryVendorSelectoions,

          onSaveAddPrimaryVendorSelectoions: (e) =>
            this.onSaveAddPrimaryVendorSelectoions(e),
          getSelectedRowData: this.getSelectedRowData,
          onSelectionChanged: this.onSelectionChanged,
          onDeleteSelectedRecords: this.onDeleteSelectedRecords,
          toggleDeletePromptModal: this.toggleDeletePromptModal,
          onCellValueChanged: this.onCellValueChanged,
          onChangeClassificationValue: (e) =>
            this.onChangeClassificationValue(e),
          toggleModifyPvsfModal: this.toggleModifyPvsfModal,
          onChangeSubClassificationValue: (e) =>
            this.onChangeSubClassificationValue(e),
          onChangeSecurityTypeValue: (e) => this.onChangeSecurityTypeValue(e),
          onChangeApplicationValue: (e) => this.onChangeApplicationValue(e),
          onChangeCycleValue: (e) => this.onChangeCycleValue(e),
          onChangePrimaryVendorValue: (e) => this.onChangePrimaryVendorValue(e),
          onChangeSecondaryVendorValue: (e) =>
            this.onChangeSecondaryVendorValue(e),
          onChangeTeritaryVendorValue: (e) =>
            this.onChangeTeritaryVendorValue(e),

          onChangeAddProductTypeValue: (e) =>
            this.onChangeAddProductTypeValue(e),
          onChangeAddClassificationValue: (e) =>
            this.onChangeAddClassificationValue(e),
          onChangeAddSubClassificationValue: (e) =>
            this.onChangeAddSubClassificationValue(e),
          onChangeAddSecurityTypeValue: (e) =>
            this.onChangeAddSecurityTypeValue(e),
          onChangeAddApplicationValue: (e) =>
            this.onChangeAddApplicationValue(e),
          onChangeAddCycleValue: (e) => this.onChangeAddCycleValue(e),
          onChangeAddPrimaryVendorValue: (e) =>
            this.onChangeAddPrimaryVendorValue(e),
          onChangeAddSecondaryVendorValue: (e) =>
            this.onChangeAddSecondaryVendorValue(e),
          onChangeAddTeritaryVendorValue: (e) =>
            this.onChangeAddTeritaryVendorValue(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default StProvider;
