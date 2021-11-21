import React from "react";
import "./maintenance-headers.scss";
import ButtonWrapper from "../../../../../Compositions/GlobalConfigurations/Commons/Button/ButtonWrapper.jsx";
import { WarningModal } from "../../../../../Compositions/GlobalConfigurations/Commons/modal/warning-modal.jsx";
import { ThresholdModal } from "../threshold/threshold.jsx";
import { SusupendRestartModal } from "../suspend-restart-repository/suspend-restart-repository.jsx";
import { PublishSecuritiesModal } from "../publish-valued-securities/publish-valued-securities.jsx";
import PropTypes from "prop-types";
import Dropdown from "../../../../../Compositions/GlobalConfigurations/Commons/simple-dropdown/dropdown.jsx";
import Aggrid from "../../../../../Compositions/GlobalConfigurations/Commons/ag-grid/ag-grid.jsx";
import { PriceRollOverrideModal } from "../price-roll-override/price-roll-override.jsx";
import Modalpopup from "../../../../../Compositions/GlobalConfigurations/Commons/modal/modal.jsx";
const staticCellStyle = {
  color: "red",
  "background-color": "rgb(67, 155, 193)",
};

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

        { headerName: "Activity Date", field: "activityDate", width: 100 },
        { headerName: "Cuspin", field: "cuspin", width: 100 },
        { headerName: "ISIN", field: "isin", width: 100 },
        { headerName: "Symbol", field: "symbol", width: 80 },
        { headerName: "Tier", field: "tier", width: 80 },
        { headerName: "Type", field: "type", width: 80 },
        { headerName: "Market Symbol", field: "marketSymbol", width: 100 },
        { headerName: "MIC Code", field: "micCode", width: 100 },
        { headerName: "Currency", field: "currency", width: 80 },
        { headerName: "Thomson price", field: "thomson_price", width: 100 },
        { headerName: "Bloomberg Price", field: "bloomberg_price", width: 100 },
        { headerName: "ICE Price", field: "icePrice", width: 100 },
        { headerName: "IDSI price", field: "idsiPrice", width: 100 },
        { headerName: "Exchange Price", field: "exchangePrice", width: 120 },
        { headerName: "previous_price", field: "previousPrice", width: 120 },
        {
          headerName: "Final Price",
          field: "finalPrice",
          width: 120,
          editable: true,
          cellStyle: staticCellStyle,
        },
        {
          headername: "Final Price End Date",
          field: "finalPriceEndDate",
          width: 150,
        },
        {
          headerName: "FInal Price Override ID",
          field: "finalPriceOverrideId",
          width: 100,
        },
        {
          headerName: "Final Price Change",
          field: "finalPriceChange",
          width: 120,
        },
        {
          headerName: "Stock Loan Price",
          field: "stockLoanPrice",
          width: 100,
        },
        {
          headerName: "Stock Loan Price Override ID",
          field: "stockLoanPriceOverrideId",
          width: 100,
        },
        {
          headerName: "Intraday Price",
          field: "intraDayPrice",
          width: 100,
        },
        {
          headerName: "Intraday Price End Date",
          field: "intraDayPriceEndDate",
          width: 100,
        },
        {
          headerName: "Intraday Price Override ID",
          field: "intraDayPriceOverrideId",
          width: 99,
        },
        {
          headerName: "Fnl Review Needed",
          field: "fnlReviewNeeded",
          width: 100,
        },
        {
          headerName: "Fnl Primary Reviewer UserId",
          field: "fnlPrimaryReviewerUserId",
          width: 100,
        },
        {
          headerName: "Fnl Secondary Reviewer UserId",
          field: "fnlSecondaryReviewerUserId",
          width: 100,
        },
        {
          headerName: "S.L Review Needed",
          field: "slReviewNeeded",
          width: 100,
        },
        {
          headerName: "S.L Primary Reviewer UserId",
          field: "fnlPrimaryReviewerUserId",
          width: 100,
        },
        {
          headerName: "S.L Secondary Reviewer UserId",
          field: "fnlSecondaryReviewerUserId",
          width: 100,
        },
      ],
      lessDefsMedalsIncluded: [
        {
          width: 60,
          headerCheckboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          checkboxSelection: true,
        },

        { headerName: "Cuspin", field: "cuspin", width: 100 },
        { headerName: "Symbol", field: "symbol", width: 80 },
        { headerName: "Tier", field: "tier", width: 80 },
        { headerName: "Type", field: "type", width: 80 },
        { headerName: "Currency", field: "currency", width: 80 },
        { headerName: "Thomson price", field: "thomson_price", width: 100 },
        { headerName: "Bloomberg Price", field: "bloomberg_price", width: 100 },
        { headerName: "ICE Price", field: "icePrice", width: 100 },
        { headerName: "IDSI price", field: "idsiPrice", width: 100 },
        { headerName: "Exchange Price", field: "exchangePrice", width: 120 },
        { headerName: "previous_price", field: "previousPrice", width: 120 },
        {
          headerName: "Final Price",
          field: "finalPrice",
          width: 120,
          editable: true,
          cellStyle: staticCellStyle,
        },
        {
          headername: "Final Price End Date",
          field: "finalPriceEndDate",
          width: 150,
        },
        {
          headerName: "FInal Price Override ID",
          field: "finalPriceOverrideId",
          width: 100,
        },
        {
          headerName: "Stock Loan Price",
          field: "stockLoanPrice",
          width: 100,
          editable: true,
        },
        {
          headerName: "Stock Loan Price Override ID",
          field: "stockLoanPriceOverrideId",
          width: 100,
        },
        {
          headerName: "Intraday Price",
          field: "intraDayPrice",
          width: 100,
          editable: true,
        },
        {
          headerName: "Intraday Price End Date",
          field: "intraDayPriceEndDate",
          width: 100,
        },
        {
          headerName: "Intraday Price Override ID",
          field: "intraDayPriceOverrideId",
          width: 100,
        },
        { headerName: "Fnl Review Neededtype", width: 80 },
        { headerName: "", field: "fnlReviewNeeded", width: 100 },
        {
          headerName: "S.L Review Needed",
          field: "slReviewNeeded",
          width: 100,
        },
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
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

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
              label={
                this.state.showAllColumns
                  ? "Show All Columns"
                  : "Show Default Columns"
              }
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
              ? this.state.lessDefsMedalsIncluded
              : this.state.colDefsMedalsIncluded
          }
          defaultColDef={this.state.defaultColDef}
          gridHeight={500}
          gridWidth="auto"
          suppressRowClickSelection={true}
          rowSelection="multiple"
          pagination={true}
          enableRangeSelection={true}
          onGridReady={this.onGridReady}
          popupParent={this.state.popupParent}
          suppressExcelExport={true}
          onFirstDataRendered={this.onFirstDataRendered.bind(this)}
          singleClickEdit={true}
          onCellValueChanged={this.props.onCellValueChanged}
          paginationPageSize={10}
          getSelectedRowData={this.props.getSelectedRowData}
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
          data={this.props.data.maintenanceScreenData}
        />
        <SusupendRestartModal
          isModalOpen={
            this.props.data.maintenanceScreenData.isSuspendRestartRepoModalOpen
          }
          closeModal={this.props.closeSuspendRestartRepoModal}
          data={this.props.data.maintenanceScreenData}
          onSelectSuspendRestartTireCheckbox={
            this.props.onSelectSuspendRestartTireCheckbox
          }
          onAllSuspendRestartTireChecked={
            this.props.onAllSuspendRestartTireChecked
          }
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
Maintenanceheaders.propTypes = {
  closeGridMustSelectedModal: PropTypes.any,
  closePriceRollOverrideModal: PropTypes.any,
  closePublishValuedSecuritiesModal: PropTypes.any,
  closeSuspendRestartRepoModal: PropTypes.any,
  closeThresholdModal: PropTypes.any,

  data: PropTypes.any,
  "data.maintenanceScreenData": PropTypes.any,
  "data.maintenanceScreenData.PriceRollOverrideMModalWarningMessage":
    PropTypes.any,
  "data.maintenanceScreenData.gridMustBePopulateModalWarningMessage":
    PropTypes.any,
  "data.maintenanceScreenData.isPriceRollOverrideModalOpen": PropTypes.any,
  "data.maintenanceScreenData.isPublishValuedSecuritiesModalOpen":
    PropTypes.any,
  "data.maintenanceScreenData.isSuspendRestartRepoModalOpen": PropTypes.any,
  "data.maintenanceScreenData.isThresholdModalOpen": PropTypes.any,
  "data.maintenanceScreenData.openGridMustSelectedModal": PropTypes.any,
  onClickPriceRollOverrideButton: PropTypes.any,
  onClickPublishValuedSecuritiesButton: PropTypes.any,
  onClickSuspendRestartRepoButton: PropTypes.any,
  onClickThresholdButton: PropTypes.any,
  onSelectReview: PropTypes.any,
  onSelectSuspendRestartTireCheckbox: PropTypes.any,
  onAllSuspendRestartTireChecked: PropTypes.any,
  onRefreshMaintenanceGridData: PropTypes.any,
  onAllPublishTireChecked: PropTypes.any,
  onSelectPublishTireCheckbox: PropTypes.any,
  onSelectPublishTypeCheckbox: PropTypes.any,
  onAllPublishTypeChecked: PropTypes.any,
  onResetPublish: PropTypes.any,
  onPublish: PropTypes.any,
  onChangePriceOverrideValue: PropTypes.any,
  setPriceOverrideTillDate: PropTypes.any,
  onChangePriceTypeValue: PropTypes.any,
  onSavePriceOverrideValue: PropTypes.any,
  closePriceRollOverrideWarningModal: PropTypes.any,
  onCellValueChanged: PropTypes.any,
  getSelectedRowData: PropTypes.any,
};
export default Maintenanceheaders;
