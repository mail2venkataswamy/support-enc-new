import React, { Component } from "react";
import FilterPanel from "./components/filter-panel/filterPanel";
import Maintenance from "./components/maintenance/maintenance";
import EditDashboard from "./components/edit-dashboard/editDashboard";
import "./style.scss";

class ValuedSecurities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintenanceScreenData: {
        isPriceRollOverrideModalOpen: false,
        PriceRollOverrideMModalWarningMessage:
          "A record must be selected to perform this action",
      },
      publishModalWarningMessage: "",
      editDashboardData: {},
      filterPanelData: {},
    };
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
  render() {
    let data = this.state;
    return (
      <div id="mainVS">
        <FilterPanel />
        <div id="editMaint">
          <Maintenance
            data={data}
            onClickPriceRollOverrideButton={this.onClickPriceRollOverrideButton}
            closePriceRollOverrideModal={this.closePriceRollOverrideModal}
          ></Maintenance>
          <EditDashboard />
        </div>
      </div>
    );
  }
}

export default ValuedSecurities;
