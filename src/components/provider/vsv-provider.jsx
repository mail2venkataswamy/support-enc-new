import { Component } from "react";
import React from "react";
import MyGovContext from "../context/gov-context.jsx";
import thresholdGridData from "./json/threshold.json";
import suspendRestartGridData from "./json/suspend-restart.json";
function setPrinterFriendly(api) {
  //const eGridDiv = document.querySelector("#myGrid");
  //eGridDiv.style.height = "";
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "500px";
  api.setDomLayout(null);
}
const staticCellStyle = { color: "red", "background-color": "yellow" };

const dynamicCellStyle = (params) => {
  if (params.value === "Police") {
    //mark police cells as red
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

class VsvProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intialFilterPanelState: {},
      filterPanelData: {
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
        isFromAndStDisabled: false,
        currHistOptions: [
          { label: "CURRENT", value: "Current" },
          { label: "HISTORICAL", value: "Historical" },
        ],
        selectedCurrHistValue: { label: "CURRENT", value: "Current" },
        fromDate: new Date(),
        toDate: new Date(),
        isinData: [
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
        isinSuggestionResult: [],
        isinValue: "",
        isinSearchValue: "",
        occSymbolData: [
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
        occSymbolSuggestionResult: [],
        occSymbolValue: "",
        occSymbolSearchValue: "",

        tierLevelData: [
          { label: "1", value: "one", isChecked: false },
          { label: "2", value: "two", isChecked: false },
          { label: "3", value: "three", isChecked: false },
          { label: "4", value: "four", isChecked: false },
        ],
        isAllTireChecked: false,

        reviewNeededOptions: [
          {
            label: "Significant Vendor Difference",
            value: "Significant Vendor Difference",
          },
          {
            label: "Large Volume Change",
            value: "Large Volume Change",
          },
          {
            label: "Missing Or Zero Volume",
            value: "Missing Or Zero Volume",
          },
          {
            label: "Tier IV to Tier III Change",
            value: "Tier IV to Tier III Change",
          },
          {
            label: "Less Than 90 Days Average",
            value: "Less Than 90 Days Average",
          },
        ],

        selectedreviewNeededValue: {
          label: "All",
          value: "All",
        },
        isEditedRecordChecked: false,
        editedRecordValue: "",

        corporateActionValue: "",
        iscorporateActionChecked: false,
      },
      maintenanceScreenData: {
        isPriceRollOverrideModalOpen: false,
        PriceRollOverrideMModalWarningMessage:
          "A record must be selected to perform this action",
        selectedReviewValue: { label: "Review", value: "review" },
        maintenanceGridData: [],
        isGridMustPopulatedModalOpen: false,
        gridMustBePopulateModalWarningMessage: "Grid must be populated",
        isThresholdModalOpen: false,
        isSuspendRestartRepoModalOpen: false,
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
        isPriceRollOverrideModalOpen: false,
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
        priceRollOverrideValue: "",
        priceRollOverrideTillDate: "",
        priceRollOverridePriceTypeValue: "",
        reviewOptions: [
          { label: "Review", value: "review" },
          { label: "Review Final", value: "reviewFinal" },
          { label: "Review Stock Loan", value: "reviewStockLoan" },
          { label: "Review Both", value: "reviewBoth" },
        ],
        edittedRowsData: [],
        thresholdGridData: [],
        suspendRestartGridData: [],
        suspendRestartTireData: [
          { label: "1", value: "one", isChecked: false },
          { label: "2", value: "two", isChecked: false },
          { label: "3", value: "three", isChecked: false },
          { label: "4", value: "four", isChecked: false },
        ],
        isAllSuspendRestartTireChecked: false,
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
        colDefsMedalsIncluded: [
          {
            width: 60,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
          },
          { field: "#", width: 60, suppressSizeToFit: true },

          { headerName: "Cuspin", field: "cuspin", width: 100 },
          { headerName: "Symbol", field: "symbol", width: 100 },
          { headerName: "Tier", field: "tier", width: 100 },
          { headerName: "Type", field: "type", width: 100 },

          {
            headerName: "Bloomberg Volume",
            field: "bloombergVolume",
            width: 200,
            suppressSizeToFit: true,
          },
          {
            headerName: "Previous Volume",
            field: "previousVolume",
            width: 150,
          },
          {
            headerName: "Final Volume",
            field: "finalVolume",
            width: 150,
          },
          {
            headerName: "Final Volume Override ID",
            field: "finalVolumeOverrideId",
            width: 200,
          },
        ],
        lessDefsMedalsIncluded: [
          {
            width: 60,
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
          },
          { field: "#", width: 60 },

          { headerName: "Cuspin", field: "cuspin", width: 100 },
          { headerName: "Symbol", field: "symbol", width: 100 },
          { headerName: "Tier", field: "tier", width: 100 },
          { headerName: "Type", field: "type", width: 100 },

          {
            headerName: "Bloomberg Volume",
            field: "bloombergVolume",
            width: 150,
          },
          {
            headerName: "Previous Volume",
            field: "previousVolume",
            width: 150,
          },
          {
            headerName: "Final Volume",
            field: "finalVolume",
            width: 150,
          },
          {
            headerName: "Final Volume Override ID",
            field: "finalVolumeOverrideId",
            width: "auto",
          },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          rowSelection: "multiple",
        },
        selectedGridData: [],
        isImportVendorDataModalOpen: false,
      },
      editDashboardData: { showEditDashboardGrid: true },
    };
  }
  //------------------FilterPanel Methods-------------------------------
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
  onClickSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    filterPanelData.cuspinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
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
  onClickIsinSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isinValue = selectedValue;
    filterPanelData.isinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onClickOccSymbolSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.occSymbolValue = selectedValue;
    filterPanelData.occSymbolSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeIsinValue(e) {
    let data = this.state.filterPanelData.isinData;
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
    filterPanelData.isinSuggestionResult = result;
    filterPanelData.isinSearchValue = e.target.value;
    filterPanelData.isinValue = e.target.value;
    this.setState({
      filterPanelData,
    });
  }
  onChangeOccSymbolValue(e) {
    let data = this.state.filterPanelData.occSymbolData;
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
    filterPanelData.occSymbolSuggestionResult = result;
    filterPanelData.occSymbolSearchValue = e.target.value;
    filterPanelData.occSymbolValue = e.target.value;
    this.setState({
      filterPanelData,
    });
  }
  onAllTypeChecked = (event) => {
    let typeData = this.state.filterPanelData.typeData;
    let filterPanelData = this.state.filterPanelData;

    typeData.forEach((type) => {
      return (type.isChecked = event.target.checked);
    });
    filterPanelData.typeData = typeData;
    filterPanelData.isAllTypeChecked = !filterPanelData.isAllTypeChecked;
    this.setState({ filterPanelData });
  };

  onSelectTypeCheckbox = (event) => {
    let typeData = this.state.filterPanelData.typeData;
    let filterPanelData = this.state.filterPanelData;
    let isAllTypeChecked = false;
    let selectionCount = 0;
    typeData.forEach((type) => {
      if (type.value === event.target.value)
        type.isChecked = event.target.checked;

      if (type.isChecked) {
        selectionCount++;
      }
      isAllTypeChecked = selectionCount === typeData.length ? true : false;
    });
    filterPanelData.typeData = typeData;
    filterPanelData.isAllTypeChecked = isAllTypeChecked;
    this.setState({ filterPanelData });
  };
  onAllTireChecked = (event) => {
    let tierLevelData = this.state.filterPanelData.tierLevelData;
    let filterPanelData = this.state.filterPanelData;

    tierLevelData.forEach((tire) => {
      return (tire.isChecked = event.target.checked);
    });
    filterPanelData.tierLevelData = tierLevelData;
    filterPanelData.isAllTireChecked = !filterPanelData.isAllTireChecked;
    this.setState({ filterPanelData });
  };

  onSelectTireCheckbox = (event) => {
    let tierLevelData = this.state.filterPanelData.tierLevelData;
    let filterPanelData = this.state.filterPanelData;
    let isAllTireChecked = false;
    let selectionCount = 0;
    tierLevelData.forEach((tire) => {
      if (tire.value === event.target.value)
        tire.isChecked = event.target.checked;

      if (tire.isChecked) {
        selectionCount++;
      }
      isAllTireChecked = selectionCount === tierLevelData.length ? true : false;
    });
    filterPanelData.tierLevelData = tierLevelData;
    filterPanelData.isAllTireChecked = isAllTireChecked;
    this.setState({ filterPanelData });
  };
  onChangeFlaggedEditValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedFlaggedEditValue = selectedValue;
    this.setState({ filterPanelData });
  };
  onChangeReviewNeededValue = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedreviewNeededValue = selectedValue;
    this.setState({ filterPanelData });
  };

  onSelectEditedRecordValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.editedRecordValue = e.target.value;
    filterPanelData.isEditedRecordChecked =
      !filterPanelData.isEditedRecordChecked;
    this.setState({ filterPanelData });
  };

  onClickFiler = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let filterPanelData = this.state.filterPanelData;
    let data = this.getFilteredGridData();
    console.log(data);
    maintenanceScreenData.maintenanceRowData = data;

    let filterObject = {
      selectedCurrHistValue: filterPanelData.selectedCurrHistValue,
      cuspinValue: filterPanelData.cuspinValue,
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
      isinValue: filterPanelData.isinValue,
      occSymbolValue: filterPanelData.occSymbolValue,
      typeData: filterPanelData.typeData,
      selectedClearedValue: filterPanelData.selectedClearedValue,
      selectedCrossMarginValue: filterPanelData.selectedCrossMarginValue,
      selectedCurrencyValue: filterPanelData.selectedCurrencyValue,
      tierLevelData: filterPanelData.tierLevelData,
      selectedFlaggedEditValue: filterPanelData.selectedFlaggedEditValue,
      selectedreviewNeededValue: filterPanelData.selectedreviewNeededValue,
      isEditedRecordChecked: filterPanelData.isEditedRecordChecked,
    };
    console.log(filterObject);
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickReset = () => {
    let filterPanelData = this.state.filterPanelData;
    let intialFilterPanelState = this.state.intialFilterPanelState;
    //alert(JSON.stringify(intialFilterPanelState));
    let data = { ...filterPanelData, ...intialFilterPanelState };
    console.log("final object is", data);

    //this.setState({ filterPanelData: intialFilterPanelState });
    this.setState({ filterPanelData: data });
  };
  onChangeCurrHistValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedCurrHistValue = e.value;
    if (e.value.toLowerCase() === "CURRENT".toLowerCase()) {
      filterPanelData.isFromAndStDisabled = true;
    } else {
      filterPanelData.isFromAndStDisabled = false;
    }
    this.setState({
      filterPanelData,
    });
  };
  setFromMaturityDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.fromMaturityDate);
    filterPanelData.fromMaturityDate = date;
    this.setState({
      filterPanelData,
    });
  };
  setToMaturityDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.toMaturityDate);
    filterPanelData.toMaturityDate = date;
    this.setState({
      filterPanelData,
    });
  };
  onAllCurrencyChecked = (event) => {
    let currencyData = this.state.filterPanelData.currency;
    let filterPanelData = this.state.filterPanelData;

    currencyData.forEach((currency) => {
      return (currency.isChecked = event.target.checked);
    });
    filterPanelData.currencyData = currencyData;
    filterPanelData.isAllCurrencyChecked =
      !filterPanelData.isAllCurrencyChecked;
    this.setState({ filterPanelData });
  };
  onSelectCurrencyCheckbox = (event) => {
    let currencyData = this.state.filterPanelData.currency;
    let filterPanelData = this.state.filterPanelData;
    let isAllCurrencyChecked = false;
    let selectionCount = 0;
    currencyData.forEach((currency) => {
      if (currency.value === event.target.value)
        currency.isChecked = event.target.checked;

      if (currency.isChecked) {
        selectionCount++;
      }
      isAllCurrencyChecked =
        selectionCount === currencyData.length ? true : false;
    });
    filterPanelData.currencyData = currencyData;
    filterPanelData.isAllCurrencyChecked = isAllCurrencyChecked;
    this.setState({ filterPanelData });
  };
  onSelectIssueTypeCheckbox = (event) => {
    let issueTypeData = this.state.filterPanelData.issueType;
    let filterPanelData = this.state.filterPanelData;
    let isAllIssueTypeChecked = false;
    let selectionCount = 0;
    issueTypeData.forEach((issue) => {
      if (issue.value === event.target.value)
        issue.isChecked = event.target.checked;

      if (issue.isChecked) {
        selectionCount++;
      }
      isAllIssueTypeChecked =
        selectionCount === issueTypeData.length ? true : false;
    });
    filterPanelData.issueTypeData = issueTypeData;
    filterPanelData.isAllIssueTypeChecked = isAllIssueTypeChecked;
    this.setState({ filterPanelData });
  };
  onAllIssueTypeChecked = (event) => {
    let issueTypeData = this.state.filterPanelData.issueType;
    let filterPanelData = this.state.filterPanelData;

    issueTypeData.forEach((issue) => {
      return (issue.isChecked = event.target.checked);
    });
    filterPanelData.issueTypeData = issueTypeData;
    filterPanelData.isAllissueTypeChecked =
      !filterPanelData.isAllissueTypeChecked;
    this.setState({ filterPanelData });
  };
  onSelectCorporateActionValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.corporateActionValue = e.target.value;
    filterPanelData.iscorporateActionChecked =
      !filterPanelData.iscorporateActionChecked;
    this.setState({ filterPanelData });
  };
  //========================Maintenance Methods====================================
  onClickPriceRollOverrideButton = (selectedGridRows) => {
    console.log(selectedGridRows);
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen =
      !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  closePriceRollOverrideWarningModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideWarningModalOpen =
      !maintenanceScreenData.isPriceRollOverrideWarningModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };

  onSelectReview = (e) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.selectedReviewValue = e.value;
    this.setState({
      maintenanceScreenData,
    });
    if (maintenanceScreenData.maintenanceGridData) {
      maintenanceScreenData.openGridMustSelectedModal = true;
      this.setState({
        maintenanceScreenData,
      });
    }
  };
  toggleGridMustBePopulateddModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isGridMustPopulatedModalOpen =
      !maintenanceScreenData.isGridMustPopulatedModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  closeThresholdModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isThresholdModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickThresholdButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isThresholdModalOpen = true;
    maintenanceScreenData.thresholdGridData = thresholdGridData;
    this.setState({
      maintenanceScreenData,
    });
  };

  closeSuspendRestartRepoModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isSuspendRestartRepoModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickSuspendRestartRepoButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isSuspendRestartRepoModalOpen = true;
    maintenanceScreenData.suspendRestartGridData = suspendRestartGridData;
    this.setState({
      maintenanceScreenData,
    });
  };

  closePublishValuedSecuritiesModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPublishValuedSecuritiesModalOpen = false;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickPublishValuedSecuritiesButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPublishValuedSecuritiesModalOpen = true;
    this.setState({
      maintenanceScreenData,
    });
  };

  onRefreshMaintenanceGridData = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.maintenanceRowData = [];
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
    maintenanceScreenData.maintenanceRowData = data;
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
  onAllPublishTireChecked = (event) => {
    let publishTireData = this.state.maintenanceScreenData.publishTireData;
    let maintenanceScreenData = this.state.maintenanceScreenData;

    publishTireData.forEach((tire) => {
      return (tire.isChecked = event.target.checked);
    });
    maintenanceScreenData.publishTireData = publishTireData;
    maintenanceScreenData.isAllPublishTireChecked =
      !maintenanceScreenData.isAllPublishTireChecked;
    this.setState({ maintenanceScreenData });
  };
  onSelectPublishTireCheckbox = (event) => {
    let publishTireData = this.state.maintenanceScreenData.publishTireData;
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let isAllPublishTireChecked = false;
    let selectionCount = 0;
    publishTireData.forEach((tire) => {
      if (tire.value === event.target.value)
        tire.isChecked = event.target.checked;

      if (tire.isChecked) {
        selectionCount++;
      }
      isAllPublishTireChecked =
        selectionCount === publishTireData.length ? true : false;
    });
    maintenanceScreenData.publishTireData = publishTireData;
    maintenanceScreenData.isAllPublishTireChecked = isAllPublishTireChecked;
    this.setState({ maintenanceScreenData });
  };
  onSelectPublishTypeCheckbox = (event) => {
    let publishTypeData = this.state.maintenanceScreenData.publishTypeData;
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let isAllPublishTypeChecked = false;
    let selectionCount = 0;
    publishTypeData.forEach((type) => {
      if (type.value === event.target.value)
        type.isChecked = event.target.checked;

      if (type.isChecked) {
        selectionCount++;
      }
      isAllPublishTypeChecked =
        selectionCount === publishTypeData.length ? true : false;
    });
    maintenanceScreenData.publishTypeData = publishTypeData;
    maintenanceScreenData.isAllPublishTypeChecked = isAllPublishTypeChecked;
    this.setState({ maintenanceScreenData });
  };
  onAllPublishTypeChecked = (event) => {
    let publishTypeData = this.state.maintenanceScreenData.publishTypeData;
    let maintenanceScreenData = this.state.maintenanceScreenData;

    publishTypeData.forEach((type) => {
      return (type.isChecked = event.target.checked);
    });
    maintenanceScreenData.publishTypeData = publishTypeData;
    maintenanceScreenData.isAllPublishTypeChecked =
      !maintenanceScreenData.isAllPublishTypeChecked;
    this.setState({ maintenanceScreenData });
  };
  onResetPublish = () => {
    let publishTireData = this.state.maintenanceScreenData.publishTireData;
    let publishTypeData = this.state.maintenanceScreenData.publishTypeData;
    let maintenanceScreenData = this.state.maintenanceScreenData;
    publishTireData.forEach((tire) => {
      return (tire.isChecked = false);
    });
    publishTypeData.forEach((type) => {
      return (type.isChecked = false);
    });
    maintenanceScreenData.isAllPublishTypeChecked = false;
    maintenanceScreenData.isAllPublishTireChecked = false;
    maintenanceScreenData.publishTypeData = publishTypeData;
    maintenanceScreenData.publishTireData = publishTireData;
    this.setState({ maintenanceScreenData });
  };
  onPublish = () => {
    alert("published");
  };

  closePriceRollOverrideModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let isPriceRollOverrideModalOpen =
      this.state.maintenanceScreenData.isPriceRollOverrideModalOpen;
    maintenanceScreenData.isPriceRollOverrideModalOpen =
      !isPriceRollOverrideModalOpen;
    this.setState({ maintenanceScreenData });
  };
  onChangePriceOverrideValue = (e) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.priceRollOverrideValue = e.target.value;
    this.setState({ maintenanceScreenData });
  };
  setPriceOverrideTillDate = (date) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.priceRollOverrideTillDate = date;
    this.setState({ maintenanceScreenData });
  };
  onChangePriceTypeValue = (e) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.priceRollOverridePriceTypeValue = e.target.value;
    this.setState({ maintenanceScreenData });
  };
  onSavePriceOverrideValue = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let priceRollOverrideObjecttoSave = {
      priceRollOverrideValue: maintenanceScreenData.priceRollOverrideValue,
      priceRollOverrideTillDate:
        maintenanceScreenData.priceRollOverrideTillDate,
      priceRollOverridePriceTypeValue:
        maintenanceScreenData.priceRollOverridePriceTypeValue,
    };

    console.log("price override object", priceRollOverrideObjecttoSave);

    maintenanceScreenData.isPriceOverrideConfirmModalOpen = true;

    this.setState({ maintenanceScreenData });
  };
  togglePriceOverrideConfirmModalOpen = (isConfirmed) => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceOverrideConfirmModalOpen =
      !maintenanceScreenData.isPriceOverrideConfirmModalOpen;
    maintenanceScreenData.isPriceOverrideConfirmed = isConfirmed;
    if (maintenanceScreenData.isPriceOverrideConfirmed) {
      maintenanceScreenData.isPriceRollOverrideModalOpen = false;
    } else {
      maintenanceScreenData.isPriceRollOverrideModalOpen = true;
    }
    this.setState({ maintenanceScreenData });
  };
  onAllSuspendRestartTireChecked = (event) => {
    alert();
    let suspendRestartTireData =
      this.state.maintenanceScreenData.suspendRestartTireData;
    let maintenanceScreenData = this.state.maintenanceScreenData;

    suspendRestartTireData.forEach((tire) => {
      return (tire.isChecked = event.target.checked);
    });
    maintenanceScreenData.suspendRestartTireData = suspendRestartTireData;
    maintenanceScreenData.isAllSuspendRestartTireChecked =
      !maintenanceScreenData.isAllSuspendRestartTireChecked;
    this.setState({ maintenanceScreenData });
  };
  onSelectSuspendRestartTireCheckbox = (event) => {
    let suspendRestartTireData =
      this.state.maintenanceScreenData.suspendRestartTireData;
    let maintenanceScreenData = this.state.maintenanceScreenData;
    let isAllSuspendRestartTireChecked = false;
    let selectionCount = 0;
    suspendRestartTireData.forEach((tire) => {
      if (tire.value === event.target.value)
        tire.isChecked = event.target.checked;

      if (tire.isChecked) {
        selectionCount++;
      }
      isAllSuspendRestartTireChecked =
        selectionCount === suspendRestartTireData.length ? true : false;
    });
    maintenanceScreenData.suspendRestartTireData = suspendRestartTireData;
    maintenanceScreenData.isAllSuspendRestartTireChecked =
      isAllSuspendRestartTireChecked;
    this.setState({ maintenanceScreenData });
  };
  toggleRecordMustSelectedPopupWarningModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isRecordMustSelectedPopupOpen =
      !maintenanceScreenData.isRecordMustSelectedPopupOpen;
    this.setState({
      maintenanceScreenData,
    });
  };

  toggleImportVendorDataModalOpen = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isImportVendorDataModalOpen =
      !maintenanceScreenData.isImportVendorDataModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  onClickImportVendorDataButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isImportVendorDataModalOpen = true;
    this.setState({
      maintenanceScreenData,
    });
  };
  //=========================Edit Dashboard Methods======================================
  toggleEditDashboardGrid = () => {
    let editDashboardData = this.state.editDashboardData;
    editDashboardData.showEditDashboardGrid =
      !this.state.editDashboardData.showEditDashboardGrid;
    this.setState({
      editDashboardData,
    });
    if (editDashboardData.showEditDashboardGrid) {
      document
        .getElementById("toggle")
        .setAttribute("style", "transform:rotate(180deg);left:4px;top:-3px");
    } else {
      document
        .getElementById("toggle")
        .setAttribute("style", "transform:rotate(360deg)");
    }
  };
  //=============================================================================

  getFilteredGridData() {
    return [
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 4455,
        icePrice: 86,
        idsiPrice: 23,
        exchangePrice: 333,
        previousPrice: 33,
        finalPrice: 33,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        cuspin: "test1",
        tier: 1,
        type: 1,
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 11,
        ice_price: 898,
        exchange_price: 446,
        previous_price: 676,
        final_price: 55,
        final_price_end_date: "",
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        activityDate: "test",
        cuspin: "test",
        isin: "test",
        symbol: "test",
        tier: 1,
        type: 1,
        marketSymbol: "",
        micCode: "11",
        currency: "USA",
        thomson_price: 11,
        bloomberg_price: 1234,
        icePrice: 123,
        idsiPrice: 23,
        exchangePrice: 23,
        previousPrice: 33,
        finalPrice: 55,
        finalPriceEndDate: "",
        finalPriceOverrideId: 23,
        stockLoanPrice: 77,
        stockLoanPriceOverrideId: 78,
        intraDayPrice: 887,
        intraDayPriceEndDate: "",
        intraDayPriceOverrideId: 887,
        fnlReviewNeeded: "",
        fnlPrimaryReviewerUserId: "test",
        fnlSecondaryReviewerUserId: "test",
        fnlReviewNeededType: 9,
        slReviewNeeded: 1,
      },
      {
        "#": "",
        cuspin: "test2",
        tier: 1,
        type: 1,
        currency: "USA",
        thomson_price: 99,
        bloomberg_price: 1111,
        ice_price: 445,
        exchange_price: 2653,
        previous_price: 99,
        final_price: 999,
        final_price_end_date: "",
      },
    ];
  }

  //===============AG-GRID=====================================

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
    maintenanceScreenData.showAllColumns =
      !maintenanceScreenData.showAllColumns;
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
  //-----------------------------------

  componentDidMount() {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.isFromAndStDisabled = true;

    let filterObject = {
      selectedCurrHistValue: filterPanelData.selectedCurrHistValue,
      cuspinValue: filterPanelData.cuspinValue,
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
      occSymbolValue: filterPanelData.occSymbolValue,
      tierLevelData: filterPanelData.tierLevelData,
      selectedreviewNeededValue: filterPanelData.selectedreviewNeededValue,
      isEditedRecordChecked: filterPanelData.isEditedRecordChecked,
      editedRecordValue: filterPanelData.editedRecordValue,
      corporateActionValue: filterPanelData.corporateActionValue,
    };
    let data = { ...filterPanelData, ...filterObject };

    this.setState({
      intialFilterPanelState: data,
      filterPanelData,
    });

    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var sumOfRecords = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>500</option></select> Records Per Page</div></div>`;
    sumOfRecords.innerHTML = `Total number of records: ${this.state.maintenanceScreenData.maintenanceRowData.length}`;
    sumOfRecords.className = "sumOfRecWrapper";
    ele.append(div);
    ele.append(sumOfRecords);
  }
  render() {
    return (
      <MyGovContext.Provider
        value={{
          state: this.state,
          //==================Filter-Panel=========================
          onSelectEditedRecordValue: this.onSelectEditedRecordValue,
          onChangeCuspinValue: (e) => this.onChangeCuspinValue(e),
          onClickSuggestionItem: this.onClickSuggestionItem,
          onChangeCurrHistValue: (e) => this.onChangeCurrHistValue(e),
          setFromDate: (e) => this.setFromDate(e),
          setToDate: (e) => this.setToDate(e),
          onChangeIsinValue: (e) => this.onChangeIsinValue(e),
          onClickIsinSuggestionItem: this.onClickIsinSuggestionItem,
          onChangeOccSymbolValue: (e) => this.onChangeOccSymbolValue(e),
          onClickOccSymbolSuggestionItem: this.onClickOccSymbolSuggestionItem,
          onSelectTypeCheckbox: (e) => this.onSelectTypeCheckbox(e),
          onAllTypeChecked: (e) => this.onAllTypeChecked(e),
          onSelectTireCheckbox: (e) => this.onSelectTireCheckbox(e),
          onAllTireChecked: (e) => this.onAllTireChecked(e),
          onChangeFlaggedEditValue: (e) => this.onChangeFlaggedEditValue(e),
          onChangeReviewNeededValue: (e) => this.onChangeReviewNeededValue(e),
          onSelectEditedRecordValue: (e) => this.onSelectEditedRecordValue(e),
          onClickFiler: this.onClickFiler,
          onClickReset: this.onClickReset,
          onAllCurrencyChecked: (e) => this.onAllCurrencyChecked(e),
          onSelectCurrencyCheckbox: (e) => this.onSelectCurrencyCheckbox(e),
          onSelectIssueTypeCheckbox: (e) => this.onSelectIssueTypeCheckbox(e),
          onAllIssueTypeChecked: (e) => this.onAllIssueTypeChecked(e),
          setFromMaturityDate: (e) => this.setFromMaturityDate(e),
          setToMaturityDate: (e) => this.setToMaturityDate(e),
          onSelectCorporateActionValue: (e) =>
            this.onSelectCorporateActionValue(e),
          //=================================================================
          onClickPriceRollOverrideButton: this.onClickPriceRollOverrideButton,
          closePriceRollOverrideWarningModal:
            this.closePriceRollOverrideWarningModal,
          onSelectReview: (e) => this.onSelectReview(e),
          toggleGridMustBePopulateddModal: this.toggleGridMustBePopulateddModal,
          closeThresholdModal: this.closeThresholdModal,
          onClickThresholdButton: this.onClickThresholdButton,
          onClickSuspendRestartRepoButton: this.onClickSuspendRestartRepoButton,
          closeSuspendRestartRepoModal: this.closeSuspendRestartRepoModal,
          closePublishValuedSecuritiesModal:
            this.closePublishValuedSecuritiesModal,
          onClickPublishValuedSecuritiesButton:
            this.onClickPublishValuedSecuritiesButton,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          onAllPublishTireChecked: (e) => this.onAllPublishTireChecked(e),
          onSelectPublishTireCheckbox: (e) =>
            this.onSelectPublishTireCheckbox(e),
          onSelectPublishTypeCheckbox: (e) =>
            this.onSelectPublishTypeCheckbox(e),
          onAllPublishTypeChecked: (e) => this.onAllPublishTypeChecked(e),
          onResetPublish: this.onResetPublish,
          onPublish: this.onPublish,
          closePriceRollOverrideModal: this.closePriceRollOverrideModal,
          onChangePriceOverrideValue: (e) => this.onChangePriceOverrideValue(e),
          setPriceOverrideTillDate: (e) => this.setPriceOverrideTillDate(e),
          onChangePriceTypeValue: (e) => this.onChangePriceTypeValue(e),
          onSavePriceOverrideValue: this.onSavePriceOverrideValue,
          getSelectedRowData: this.getSelectedRowData,
          onGridReady: this.onGridReady,
          onBtnExport: this.onBtnExport,
          onBtPrint: this.onBtPrint,
          onCellValueChanged: this.onCellValueChanged,
          onSelectSuspendRestartTireCheckbox: (e) =>
            this.onSelectSuspendRestartTireCheckbox(e),
          onAllSuspendRestartTireChecked: (e) =>
            this.onAllSuspendRestartTireChecked(e),
          toggleRecordMustSelectedPopupWarningModal:
            this.toggleRecordMustSelectedPopupWarningModal,
          onSelectionChanged: this.onSelectionChanged,
          togglePriceOverrideConfirmModalOpen:
            this.togglePriceOverrideConfirmModalOpen,
          onFirstDataRendered: this.onFirstDataRendered,
          showLessOrColumns: this.showLessOrColumns,
          toggleImportVendorDataModalOpen: this.toggleImportVendorDataModalOpen,
          onClickImportVendorDataButton: this.onClickImportVendorDataButton,

          //=============Edit Dahsboard==============
          toggleEditDashboardGrid: this.toggleEditDashboardGrid,
        }}
      >
        {this.props.children}
      </MyGovContext.Provider>
    );
  }
}

export default VsvProvider;
