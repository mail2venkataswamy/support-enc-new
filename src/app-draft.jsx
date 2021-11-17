import React from "react";
import FilterPanel from "./components/filter-panel/filterPanel";
import Maintenance from "./components/maintenance/maintenance";
import EditDashboard from "./components/edit-dashboard/editDashboard";
import "./style.scss";

class ValuedSecurities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maintenanceScreenData: {
        isPriceRollOverrideModalOpen: false,
        PriceRollOverrideMModalWarningMessage:
          "A record must be selected to perform this action",
      },
      editDashboardData: {},
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
      },
    };
    this.onChangeCuspinValue = this.onChangeCuspinValue.bind(this);
  }
  onClickPriceRollOverrideButton = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  closePriceRollOverrideModal = () => {
    let maintenanceScreenData = this.state.maintenanceScreenData;
    maintenanceScreenData.isPriceRollOverrideModalOpen = !maintenanceScreenData.isPriceRollOverrideModalOpen;
    this.setState({
      maintenanceScreenData,
    });
  };
  onChangeCuspinValue(e) {
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
  }
  onClickSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    filterPanelData.cuspinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  render() {
    let data = this.state;
    return (
      <div id="mainVS">
        <FilterPanel
          onChangeCuspinValue={(e) => this.onChangeCuspinValue(e)}
          data={this.state}
          onClickSuggestionItem={this.onClickSuggestionItem}
        />
        <div id="editMaint">
          <Maintenance />
          <EditDashboard />
        </div>
      </div>
    );
  }
}

export default ValuedSecurities;

onGridReady = (params) => {
  this.gridApi = params.api;
  this.gridColumnApi = params.columnApi;

  const httpRequest = new XMLHttpRequest();
  const updateData = (data) => {
    data.length = 10;
    data = data.map((row, index) => {
      return { ...row, id: index + 1 };
    });
    this.setState({ rowData: data, backupRowData: data });
  };

  httpRequest.open(
    "GET",
    "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
  );
  httpRequest.send();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      updateData(JSON.parse(httpRequest.responseText));
    }
  };
};
