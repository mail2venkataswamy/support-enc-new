import React, { useContext, useState } from "react";
import ButtonWrapper from "../../../../../components/common/button/button.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal.jsx";
//import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import Select from "../../../../../components/common/select/select.jsx";
import "./maintenance-headers.scss";
import Modalpopup from "../../../../../components/common/modal/modal.jsx";
import { ThresholdModal } from "../threshold/threshold.jsx";
import { SusupendRestartModal } from "../suspend-restart-repository/suspend-restart-repo-modal.jsx";
import { PublishSecuritiesModal } from "../publish-valued-securities/publish-valued-securities.jsx";
import Maintenancegrid from "../maintenance-grid/maintenance-grid.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import { PriceRollOverrideModal } from "../price-roll-override/price-roll-override.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
function setPrinterFriendly(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.height = "";
  api.setDomLayout("print");
}
function setNormal(api) {
  const eGridDiv = document.querySelector("#myGrid");
  eGridDiv.style.width = "auto";
  eGridDiv.style.height = "500px";
  api.setDomLayout(null);
}
/* gridOptions.api.startEditingCell({
  rowIndex: 0,
  colKey: "country",
});

// stop editing
gridOptions.api.stopEditing();

// print details of editing cell
const cellDefs = gridOptions.api.getEditingCells();

cellDefs.forEach((cellDef) => {
  console.log(cellDef.rowIndex);
  console.log(cellDef.column.getId());
  console.log(cellDef.floating);
}); */
class Maintenanceheaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popupParent: document.body,
      showAllColumns: true,
      colDefsMedalsIncluded: [
        {
          width: 60,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },
        { field: "#", width: 60 },
        { field: "cuspin", width: 100 },
        { field: "tier", width: 100 },
        { field: "type", width: 100 },
        { field: "currency", width: 150 },
        { field: "thomson_price", width: 160 },
        { field: "bloomberg_price", width: 170 },
        { field: "bloomberg_price", width: 170 },
        { field: "exchange_price", width: 200 },
        { field: "previous_price", width: 200 },
        { field: "final_price", width: 200, editable: true },
        { field: "final_price_end_date", width: 200 },
      ],
      lessDefsMedalsIncluded: [
        {
          width: 60,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },

        { field: "cuspin", width: 100 },
        { field: "tier", width: 100 },
        { field: "type", width: 100 },
        { field: "currency", width: 150 },
        { field: "thomson_price", width: 160 },
        { field: "bloomberg_price", width: 170 },
        { field: "bloomberg_price", width: 170 },
        { field: "exchange_price", width: 200 },
        { field: "previous_price", width: 200 },
        { field: "final_price", width: 200, editable: true },
        { field: "final_price_end_date", width: 200 },
      ],
      defaultColDef: {
        initialWidth: "auto",
        sortable: true,
        resizable: true,
        filter: true,
        //headerCheckboxSelection: isFirstColumn,
        // checkboxSelection: isFirstColumn,
        rowSelection: "multiple",
      },
    };
  }
  //------GR Grid functionalities------

  onFirstDataRendered = (params) => {
    params.api.expandAll();
  };

  onBtnExport = () => {
    this.gridApi.exportDataAsCsv();
  };
  onBtPrint = () => {
    const api = this.gridApi;
    setPrinterFriendly(api);
    setTimeout(function () {
      this.print();
      setNormal(api);
    }, 2000);
  };
  showLessOrColumns = () => {
    let showAllColumns = this.state.showAllColumns;
    this.setState({
      showAllColumns: !showAllColumns,
    });
    this.props.getSelectedRowData();
  };

  //-----------------------------------
  render() {
    return (
      <div className="maintenanceHeaders">
        <div className="wrapper">
          <div className="dataHeadersButtonWrapper">
            <ButtonWrapper
              id="threshold"
              label={"Threshold"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onClickThresholdButton
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="supendRestart"
              label={"Supend/Restart Prices"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onClickSuspendRestartRepoButton
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="Publish"
              label={"Publish"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onClickPublishValuedSecuritiesButton
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="PriceRollOverride"
              label={"Price Roll Override"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onClickPriceRollOverrideButton
                  : this.props.closePriceRollOverrideWarningModal
              }
            ></ButtonWrapper>
            {/*             <Select
              id="review"
              data={this.props.data.maintenanceScreenData}
              onChange={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? ""
                  : this.props.onSelectReview
              }
            ></Select> */}
            <div id="review">
              <Dropdown
                id="review"
                options={this.props.data.maintenanceScreenData.reviewOptions}
                onChange={
                  this.props.data.maintenanceScreenData.maintenanceRowData &&
                  this.props.data.maintenanceScreenData.maintenanceRowData
                    .length > 0
                    ? ""
                    : this.props.onSelectReview
                }
                selectedValue={
                  this.props.data.maintenanceScreenData.selectedReviewValue
                }
              ></Dropdown>
            </div>
          </div>
          <div className="showColumnsPrintRefreshExportWrapper">
            <ButtonWrapper
              id="showAllColumns"
              label={"Show All Columns"}
              onClick={() => this.showLessOrColumns()}
            ></ButtonWrapper>
            <ButtonWrapper
              id="refresh"
              label={"Refresh"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onRefreshMaintenanceGridData
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="print"
              label={"Print"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.onBtPrint
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="export"
              label={"Export"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.onBtnExport
                  : this.props.onSelectReview
              }
            ></ButtonWrapper>
          </div>
        </div>

        <Aggrid
          rowData={this.props.data.maintenanceScreenData.maintenanceRowData}
          colDefsMedalsIncluded={
            this.state.showAllColumns
              ? this.state.colDefsMedalsIncluded
              : this.state.lessDefsMedalsIncluded
          }
          defaultColDef={this.state.defaultColDef}
          gridHeight={500}
          gridWidth="auto"
          suppressRowClickSelection={true}
          rowSelection="multiple"
          pagination={true}
          enableRangeSelection={true}
          onGridReady={this.props.onGridReady}
          popupParent={this.state.popupParent}
          suppressExcelExport={true}
          onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          singleClickEdit={true}
          onCellValueChanged={this.props.onCellValueChanged}
          paginationPageSize={10}
        />
        <WarningModal
          isModalOpen={
            this.props.data.maintenanceScreenData
              .isPriceRollOverrideWarningModalOpen
          }
          closeModal={this.props.closePriceRollOverrideWarningModal}
          warningMessage={
            this.props.data.maintenanceScreenData
              .PriceRollOverrideMModalWarningMessage
          }
        ></WarningModal>
        <WarningModal
          isModalOpen={
            this.props.data.maintenanceScreenData.openGridMustSelectedModal
          }
          closeModal={this.props.closeGridMustSelectedModal}
          warningMessage={
            this.props.data.maintenanceScreenData
              .gridMustBePopulateModalWarningMessage
          }
        ></WarningModal>
        <Modalpopup
          isModalOpen={
            this.props.data.maintenanceScreenData.isThresholdModalOpen
          }
          closeModal={this.props.closeThresholdModal}
        ></Modalpopup>
        <ThresholdModal
          isModalOpen={
            this.props.data.maintenanceScreenData.isThresholdModalOpen
          }
          closeModal={this.props.closeThresholdModal}
        />
        <SusupendRestartModal
          isModalOpen={
            this.props.data.maintenanceScreenData.isSuspendRestartRepoModalOpen
          }
          closeModal={this.props.closeSuspendRestartRepoModal}
        />

        <PublishSecuritiesModal
          data={this.props.data.maintenanceScreenData}
          isModalOpen={
            this.props.data.maintenanceScreenData
              .isPublishValuedSecuritiesModalOpen
          }
          closeModal={this.props.closePublishValuedSecuritiesModal}
          onAllPublishTireChecked={this.props.onAllPublishTireChecked}
          onSelectPublishTireCheckbox={this.props.onSelectPublishTireCheckbox}
          onSelectPublishTypeCheckbox={this.props.onSelectPublishTypeCheckbox}
          onAllPublishTypeChecked={this.props.onAllPublishTypeChecked}
          onResetPublish={this.props.onResetPublish}
          onPublish={this.props.onPublish}
        ></PublishSecuritiesModal>
        <div className="priceRollOverrideModalContainer">
          <PriceRollOverrideModal
            data={this.props.data.maintenanceScreenData}
            isModalOpen={
              this.props.data.maintenanceScreenData.isPriceRollOverrideModalOpen
            }
            closeModal={this.props.closePriceRollOverrideModal}
            onChangePriceOverrideValue={this.props.onChangePriceOverrideValue}
            setPriceOverrideTillDate={this.props.setPriceOverrideTillDate}
            onChangePriceTypeValue={this.props.onChangePriceTypeValue}
            onSavePriceOverrideValue={this.props.onSavePriceOverrideValue}
          ></PriceRollOverrideModal>
        </div>
      </div>
    );
  }
}

export default Maintenanceheaders;
