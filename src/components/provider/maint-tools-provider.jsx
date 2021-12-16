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
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MaintToolsProvider;
