import React from "react";
import MyContext from "../../components/context/maint-tools-context.jsx";
import PriceRepoConfig from "../../pages/maint-tools/components/tabs/price-repo-config/price-repo-config.jsx";
import PriceHierarchy from "../../pages/maint-tools/components/tabs/price-heirarchy/price-heirarchy.jsx";
import DeliveryClassMaintenance from "../../pages/maint-tools/components/tabs/delivery-class-maint/delivery-class-maint.jsx";
import RunTask from "../../pages/maint-tools/components/tabs/run-task/run-task.jsx";
function setPrinterFriendly(api) {
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "580px";
  api.setDomLayout(null);
}
const staticCellStyle = { "background-color": "yellow" };
class MaintToolsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          label: "Price Repository Configuration", // Tab Title - String
          Component: PriceRepoConfig, // Tab Body - JSX.Element
        },
        {
          label: "Price Hierarchy",
          Component: PriceHierarchy,
        },
        {
          label: "Delivery Class Maintenance",
          Component: DeliveryClassMaintenance,
        },
        {
          label: "Run Task",
          Component: RunTask,
        },
      ],
      priceRepoConfigData: {
        priceRepoConfigRowData: [
          {
            paramName: "test1",
            paramValue: "test2",
            paramDesc: "test3",
          },
          {
            paramName: "test1",
            paramValue: "test2",
            paramDesc: "test3",
          },
        ],
        colDefs: [
          {
            headerName: "Param Name",
            field: "paramName",
            width: "auto",
          },
          { headerName: "Param value", field: "paramValue", width: "auto" },
          {
            headerName: "Param Description",
            field: "paramDesc",
            width: "auto",
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
        paramName: "",
        paramValue: "",
        paramDesc: "",
        isAddNewConfigModalOpen: false,
      },
      priceHierarchyData: {
        priceHierarchyRowData: [
          {
            productClsfDescp: "test1",
            tradeHrDescp: "test2",
            priceFieldDescp: "test3",
            priorityNum: "test2",
            lastModifiedBy: "test3",
          },
        ],
        colDefs: [
          {
            headerName: "Product Clsf Descp",
            field: "productClsfDescp",
            width: "auto",
          },
          {
            headerName: "Trade Hr Descp",
            field: "tradeHrDescp",
            width: "auto",
          },
          {
            headerName: "Price Field Descp",
            field: "priceFieldDescp",
            width: "auto",
          },
          {
            headerName: "Priority Num",
            field: "priorityNum",
            width: "auto",
            editable: true,
            cellStyle: staticCellStyle,
          },
          {
            headerName: "Last Modified By",
            field: "lastModifiedBy",
            width: "auto",
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
        edittedRowsData: [],
      },
      delieveryClassMaintData: {
        initialPanelState: {},
        filterPanelData: {
          deliveryClassSearchValue: "",
          deliveryClassData: [
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
          deliveryClassSuggestionResult: [],
          deliveryClassValue: "",
          targetDeliveryClassSearchValue: "",
          targetDeliveryClassData: [
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
          targetDeliveryClassSuggestionResult: [],
          targetDeliveryClassValue: "",
          isAllTargetDeliveryClassChecked: false,
        },
        gridScreenData: {
          priceSystemAlertStateRowData: [],
          colDefs: [
            {
              headerName: "Delivery Calss",
              field: "deliveryCalss",
              width: "auto",
            },
            {
              headerName: "Target Delivery Calss",
              field: "targetDeliveryCalss",
              width: "auto",
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
      },
      runTaskData: {
        publisheDataValue: "",
        publisheData: [
          {
            for: "publishData",
            name: "publishData",
            label: "Non-Published Data",
            type: "radio",
            value: "nonPublishData",
            className: "nonPublishData",
          },
          {
            for: "publishData",
            name: "publishData",
            label: "Published Data",
            type: "radio",
            value: "publishData",
            className: "publishData",
          },
        ],
      },
    };
  }
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
    let priceHierarchyData = this.state.priceHierarchyData;
    priceHierarchyData.edittedRowsData.push(row);
    this.setState({ priceHierarchyData });
    console.log("updated  grid rows", priceHierarchyData.edittedRowsData);
  };
  onChangeParamName = (e) => {
    let priceRepoConfigData = this.state.priceRepoConfigData;
    priceRepoConfigData.paramName = e.target.value;
    this.setState({ priceRepoConfigData });
  };
  onChangeParamValue = (e) => {
    let priceRepoConfigData = this.state.priceRepoConfigData;
    priceRepoConfigData.paramValue = e.target.value;
    this.setState({ priceRepoConfigData });
  };
  onChangeParamDesc = (e) => {
    let priceRepoConfigData = this.state.priceRepoConfigData;
    priceRepoConfigData.paramDesc = e.target.value;
    this.setState({ priceRepoConfigData });
  };

  onSaveNewConfig = () => {
    let priceRepoConfigData = this.state.priceRepoConfigData;
    let itemToAdd = {
      paramName: priceRepoConfigData.paramName,
      paramValue: priceRepoConfigData.paramValue,
      paramDesc: priceRepoConfigData.paramDesc,
    };

    priceRepoConfigData.priceRepoConfigRowData = [
      ...priceRepoConfigData.priceRepoConfigRowData,
      itemToAdd,
    ];
    priceRepoConfigData.paramName = "";
    priceRepoConfigData.paramValue = "";
    priceRepoConfigData.paramDesc = "";
    priceRepoConfigData.isAddNewConfigModalOpen =
      !priceRepoConfigData.isAddNewConfigModalOpen;

    this.setState({ priceRepoConfigData: priceRepoConfigData });
  };
  toggleAddNewConfigModal = () => {
    let priceRepoConfigData = this.state.priceRepoConfigData;
    priceRepoConfigData.isAddNewConfigModalOpen =
      !priceRepoConfigData.isAddNewConfigModalOpen;
    this.setState({
      priceRepoConfigData,
    });
  };

  //============Maint delivery class methods======
  onChangeTargetDeliveryClassValue = (e) => {
    let data =
      this.state.delieveryClassMaintData.filterPanelData
        .targetDeliveryClassData;
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.targetDeliveryClassSuggestionResult = result;
    filterPanelData.targetDeliveryClassSearchValue = e.target.value;
    filterPanelData.targetDeliveryClassValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickTargetDeliveryClassSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;
    filterPanelData.targetDeliveryClassValue = selectedValue;
    filterPanelData.targetDeliveryClassSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeDeliveryClassValue = (e) => {
    let data =
      this.state.delieveryClassMaintData.filterPanelData.deliveryClassData;
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.deliveryClassSuggestionResult = result;
    filterPanelData.deliveryClassSearchValue = e.target.value;
    filterPanelData.deliveryClassValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickDeliveryClassSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;
    filterPanelData.deliveryClassValue = selectedValue;
    filterPanelData.deliveryClassSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onClickReset = () => {
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;
    let delieveryClassMaintData = this.state.delieveryClassMaintData;
    let initialPanelState =
      this.state.delieveryClassMaintData.initialPanelState;
    let data = { ...filterPanelData, ...initialPanelState };
    delieveryClassMaintData.filterPanelData = data;
    this.setState({ delieveryClassMaintData });
  };
  componentDidMount() {
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;
    let delieveryClassMaintData = this.state.delieveryClassMaintData;

    let filterObject = {
      selectedVendorValue: filterPanelData.deliveryClassValue,
      selectedExchangeValue: filterPanelData.targetDeliveryClassValue,
      isAllTargetDeliveryClassChecked:
        filterPanelData.isAllTargetDeliveryClassChecked,
    };
    let data = { ...filterPanelData, ...filterObject };
    delieveryClassMaintData.initialPanelState = data;
    this.setState({
      delieveryClassMaintData,
    });
  }
  onClickFiler = () => {
    let gridScreenData = this.state.delieveryClassMaintData.gridScreenData;
    let priceSystemAlertStateRowData = this.getFilteredGridData();

    gridScreenData.priceSystemAlertStateRowData = priceSystemAlertStateRowData;
    this.setState({
      gridScreenData,
    });
  };
  onRefreshMaintenanceGridData = () => {
    let gridScreenData = this.state.delieveryClassMaintData.gridScreenData;
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
    let gridScreenData = this.state.delieveryClassMaintData.gridScreenData;
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
        deliveryCalss: "test",
        targetDeliveryCalss: "test1",
      },
      {
        deliveryCalss: "test1",
        targetDeliveryCalss: "test2",
      },
    ];
  }
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
  onSelectAllTargetDeliveryClass = () => {
    let filterPanelData = this.state.delieveryClassMaintData.filterPanelData;
    filterPanelData.isAllTargetDeliveryClassChecked =
      !filterPanelData.isAllTargetDeliveryClassChecked;
    this.setState({
      filterPanelData,
    });
  };
  onChangePublishValue = (e) => {
    let runTaskData = this.state.runTaskData;
    runTaskData.publisheDataValue = e.target.value;
    this.setState({ runTaskData });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onGridReady: this.onGridReady,
          onBtPrint: this.onBtPrint,
          onCellValueChanged: this.onCellValueChanged,
          onChangeParamName: (e) => this.onChangeParamName(e),
          onChangeParamValue: (e) => this.onChangeParamValue(e),
          onChangeParamDesc: (e) => this.onChangeParamDesc(e),
          onSaveNewConfig: this.onSaveNewConfig,
          toggleAddNewConfigModal: this.toggleAddNewConfigModal,

          onChangeTargetDeliveryClassValue: (e) =>
            this.onChangeTargetDeliveryClassValue(e),
          onClickTargetDeliveryClassSuggestionItem: (e) =>
            this.onClickTargetDeliveryClassSuggestionItem(e),
          onChangeDeliveryClassValue: (e) => this.onChangeDeliveryClassValue(e),
          onClickDeliveryClassSuggestionItem: (e) =>
            this.onClickDeliveryClassSuggestionItem(e),
          onClickReset: this.onClickReset,
          onClickFiler: this.onClickFiler,
          onRefreshMaintenanceGridData: this.onRefreshMaintenanceGridData,
          onBtPrint: this.onBtPrint,
          onGridReady: this.onGridReady,
          onSelectAllTargetDeliveryClass: this.onSelectAllTargetDeliveryClass,
          onChangePublishValue: this.onChangePublishValue,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MaintToolsProvider;
