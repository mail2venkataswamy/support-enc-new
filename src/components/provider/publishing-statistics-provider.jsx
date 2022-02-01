import React, { Component } from "react";

import MyContext from "../context/publishing-statistics-context.jsx";
import PriceEditing from "../../pages/publishing-statistics/components/tabs/ps-grid/ps-grid.jsx";
import ReleaseManager from "../../pages/publishing-statistics/components/tabs/rm-grid/rm-grid.jsx";
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
      activeTab: "tab-0",
      initialPanelState: {},
      initialPicsThresholdDate: {},
      initialAddThresholdsData: {},
      validationDetailsData: {
        isvalidationDetailOpen: false,
        rowData: [
          {
            priceType: "test",
            productType: "test",
            cusip: "test",
            securityTier: "tets",
            classification: "test",
            subClass: "test",
            expirationDate: "test",
            contractDate: "test",
            callOrPutCode: "tets",
            strikePrice: "test",
            price: "test",
            volatility: "tets",
            priceUpdateDate: "test",
          },
          {
            priceType: "test",
            productType: "test",
            cusip: "test",
            securityTier: "tets",
            classification: "test",
            subClass: "test",
            expirationDate: "test",
            contractDate: "test",
            callOrPutCode: "tets",
            strikePrice: "test",
            price: "test",
            volatility: "tets",
            priceUpdateDate: "test",
          },
        ],
        colDefs: [
          {
            headerName: "Price Type",
            field: "priceType",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Product Type",
            field: "productType",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Cusip",
            field: "cusip",
            width: 90,
            flex: 0,
          },
          {
            headerName: "Security Tier",
            field: "securityTier",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Classification",
            field: "classification",
            width: 140,
            flex: 0,
          },
          {
            headerName: "SubClass",
            field: "subClass",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Expiration Date",
            field: "expirationDate",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Contract Date",
            field: "contractDate",
            width: 120,
            flex: 0,
          },
          {
            headerName: "call/Put Code",
            field: "callOrPutCode",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Strike Price",
            field: "strikePrice",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Price",
            field: "price",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Volatility",
            field: "volatility",
            width: 110,
            flex: 0,
          },
          {
            headerName: "Price Update Date",
            field: "priceUpdateDate",
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
        //onGridReady,
        //onBtnExport,
      },
      filterPanelData: {
        publishedBySearchValue: "",
        publishedByData: [
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
        pusblishedBySuggestionResult: [],
        publishedByValue: "",
        publishTypeOptions: [],
        selectedPublishTypeValue: {},
        isFilterScreenVisible: true,
        selectedPricePublishDate: new Date(),
      },
      tabs: [
        {
          label: "Price Editing", // Tab Title - String
          Component: PriceEditing, // Tab Body - JSX.Element
        },
        {
          label: "Release Manager",
          Component: ReleaseManager,
        },
      ],
      releaseManagerData: {
        selectedGridRows: [],
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
            headerName: "Group",
            field: "group",
            width: 400,
            flex: 0,
            rowGroup: true,
          },
          {
            headerName: "Process",
            field: "process",
            width: 400,
            flex: 0,
          },
          {
            headerName: "Status",
            field: "status",
            width: 160,
            flex: 0,
          },
          {
            headerName: "Released By",
            field: "releasedBy",
            width: 160,
            flex: 0,
          },
          {
            headerName: "Start Date",
            field: "stDate",
            width: 324,
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
        isReleaseWarningModelOpen: false,
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
            headerName: "Publish Request Id",
            field: "publishRequestId",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Publish Type",
            field: "publishType",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Request Total",
            field: "requestTotal",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Published Total",
            field: "publishedTotal",
            width: 100,
            flex: 0,
          },
          {
            headerName: "Encore Total",
            field: "encoreTotal",
            width: 120,
            flex: 0,
          },
          {
            headerName: "Statu",
            field: "status",
            width: 140,
            flex: 0,
          },
          {
            headerName: "Published By",
            field: "publishedBy",
            width: 150,
            flex: 0,
          },
          {
            headerName: "Start Time",
            field: "startTime",
            width: 150,
            flex: 0,
          },
          {
            headerName: "End Time",
            field: "endTime",
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

  onChangePublishedByValue = (e) => {
    let data = this.state.filterPanelData.publishedByData;
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
    filterPanelData.pusblishedBySuggestionResult = result;
    filterPanelData.publishedBySearchValue = e.target.value;
    filterPanelData.publishedByValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickPublishedBySuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.publishedByValue = selectedValue;
    filterPanelData.publishedBySearchValue = "";
    this.setState({
      filterPanelData,
    });
  };

  onChangePricePublishDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedPricePublishDate = date;
    this.setState({
      filterPanelData,
    });
  };
  onPublishTypeChange = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedPublishTypeValue = selectedValue;
    this.setState({ filterPanelData });
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
    filterPanelData.isFilterScreenVisible = !filterPanelData.isFilterScreenVisible;
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
    let releaseManagerData = this.state.releaseManagerData;
    releaseManagerData.rowData = [
      {
        group: "Certified EOD Final Price Files",
        process: "Equity Open Total Underlying Prices",
        status: "INIT",
        releasedBy: "test",
        stDate: new Date(),
      },
      {
        group: "Certified EOD Final Price Files",
        process: "Equity Open Total Underlying Prices",
        status: "INIT",
        releasedBy: "test1",
        stDate: new Date(),
      },
      {
        group: "Cleared Futures",
        process: "Cleared Option on Future/Option Mark",
        status: "INIT",
        releasedBy: "test2",
        stDate: new Date(),
      },
      {
        group: "Cleared Futures",
        process: "Cleared Future Contract Settlement Prices",
        status: "INIT",
        releasedBy: "test",
        stDate: new Date(),
      },
      {
        group: "Equity/Index",
        process: "Cleared Option on Future/Option Mark",
        status: "INIT",
        releasedBy: "test2",
        stDate: new Date(),
      },
      {
        group: "Equity/Index",
        process: "Cleared Future Contract Settlement Prices",
        status: "INIT",
        releasedBy: "test",
        stDate: new Date(),
      },
      {
        group: "FMS",
        process: "fms",
        status: "INIT",
        releasedBy: "test2",
        stDate: new Date(),
      },
      {
        group: "FMS",
        process: "fms",
        status: "INIT",
        releasedBy: "test",
        stDate: new Date(),
      },
    ];
    let data = { ...filterPanelData };
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
        publishRequestId: "test1",
        publishType: "test1",
        requestTotal: "test1",
        publishedTotal: "test1",
        encoreTotal: "test1",
        status: "test1",
        publishedBy: "test1",
        startTime: "test1",
        endTime: "test1",
      },
      {
        id: 2,
        publishRequestId: "test2",
        publishType: "test2",
        requestTotal: "test2",
        publishedTotal: "test2",
        encoreTotal: "test2",
        status: "test2",
        publishedBy: "test2",
        startTime: "test2",
        endTime: "test2",
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
    let releaseManagerData = this.state.releaseManagerData;
    gridScreenData.selectedGridRows = selectedRows;
    releaseManagerData.selectedGridRows = selectedRows;
    this.setState({
      gridScreenData,
      releaseManagerData,
    });
  };
  onCellValueChanged = (params) => {
    const colId = params.column.getId();
  };
  getActiveTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };
  //==========VD Methods======
  toggleValidationDetailModal = () => {
    let validationDetailsData = this.state.validationDetailsData;
    validationDetailsData.isvalidationDetailOpen = !validationDetailsData.isvalidationDetailOpen;
    this.setState({
      validationDetailsData,
    });
  };
  //=========Release Methods====
  toggleReleasePromptModal = () => {
    let releaseManagerData = this.state.releaseManagerData;
    releaseManagerData.isReleaseWarningModelOpen = !releaseManagerData.isReleaseWarningModelOpen;
    this.setState({
      releaseManagerData,
    });
  };
  onReleaseSelectedRecords = () => {
    let releaseManagerData = this.state.releaseManagerData;
    releaseManagerData.isReleaseWarningModelOpen = !releaseManagerData.isReleaseWarningModelOpen;

    releaseManagerData.rowData = releaseManagerData.rowData.filter(
      (row) => !releaseManagerData.selectedGridRows.includes(row)
    );
    this.setState({
      releaseManagerData,
    });

    this.setState({
      releaseManagerData,
    });
  };
  openValidationDetails = () => {
    let validationDetailsData = this.state.validationDetailsData;
    let releaseManagerData = this.state.releaseManagerData;
    releaseManagerData.isReleaseWarningModelOpen = false;
    validationDetailsData.isvalidationDetailOpen = !validationDetailsData.isvalidationDetailOpen;
    this.setState({
      validationDetailsData,
      releaseManagerData,
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
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
          onChangePublishedByValue: (e) => this.onChangePublishedByValue(e),
          onClickPublishedBySuggestionItem: (e) =>
            this.onClickPublishedBySuggestionItem(e),
          onChangePricePublishDate: (e) => this.onChangePricePublishDate(e),
          onPublishTypeChange: (e) => this.onPublishTypeChange(e),
          getActiveTab: this.getActiveTab,
          toggleValidationDetailModal: this.toggleValidationDetailModal,
          toggleReleasePromptModal: this.toggleReleasePromptModal,
          onReleaseSelectedRecords: this.onReleaseSelectedRecords,
          openValidationDetails: this.openValidationDetails,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ViDumpProvider;
