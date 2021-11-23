import React, { useContext, useState } from "react";
import ButtonWrapper from "../../../../../components/common/button/button.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal.jsx";
import "./maintenance-headers.scss";
import Modalpopup from "../../../../../components/common/modal/modal.jsx";
import { ThresholdModal } from "../threshold/threshold.jsx";
import { SusupendRestartModal } from "../suspend-restart-repository/suspend-restart-repo-modal.jsx";
import { PublishSecuritiesModal } from "../publish-valued-securities/publish-valued-securities.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import { PriceRollOverrideModal } from "../price-roll-override/price-roll-override.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import PriceOverridePrompt from "../../../../../components/common/modal/prompt/prompt.jsx";
const staticCellStyle = { color: "red", "background-color": "yellow" };

const dynamicCellStyle = (params) => {
  if (params.value === "Police") {
    //mark police cells as red
    return { color: "red", backgroundColor: "yellow" };
  }
  return null;
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
        {
          headerName: "Fnl Review Neededtype",
          filed: "fnlReviewNeededType",
          width: 80,
        },
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
      selectedGridData: [],
    };
  }

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
                  : this.props.toggleGridMustBePopulateddModal
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
                  : this.props.toggleGridMustBePopulateddModal
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
                  : this.props.toggleGridMustBePopulateddModal
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="PriceRollOverride"
              label={"Price Roll Override"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.data.maintenanceScreenData.selectedGridRows
                      .length < 1
                    ? this.props.toggleRecordMustSelectedPopupWarningModal
                    : () =>
                        this.props.onClickPriceRollOverrideButton(
                          this.props.data.maintenanceScreenData.selectedGridRows
                        )
                  : this.props.toggleGridMustBePopulateddModal
              }
            ></ButtonWrapper>

            <div id="review">
              <Dropdown
                id="review"
                options={this.props.data.maintenanceScreenData.reviewOptions}
                onChange={
                  this.props.data.maintenanceScreenData.maintenanceRowData &&
                  this.props.data.maintenanceScreenData.maintenanceRowData
                    .length > 0
                    ? ""
                    : this.props.toggleGridMustBePopulateddModal
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
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.showLessOrColumns
                  : this.props.toggleGridMustBePopulateddModal
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="refresh"
              label={"Refresh"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onRefreshMaintenanceGridData
                  : this.props.toggleGridMustBePopulateddModal
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="print"
              label={"Print"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onBtPrint
                  : this.props.toggleGridMustBePopulateddModal
              }
            ></ButtonWrapper>
            <ButtonWrapper
              id="export"
              label={"Export"}
              onClick={
                this.props.data.maintenanceScreenData.maintenanceRowData &&
                this.props.data.maintenanceScreenData.maintenanceRowData
                  .length > 0
                  ? this.props.onBtnExport
                  : this.props.toggleGridMustBePopulateddModal
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
          singleClickEdit={true}
          onCellValueChanged={this.props.onCellValueChanged}
          paginationPageSize={10}
          //getSelectedRowData={this.getSelectedRowData}
          onSelectionChanged={this.props.onSelectionChanged}
          onFirstDataRendered={this.props.onFirstDataRendered}
        />
        {/*------- Price Roll Override Warning Modal---------*/}
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
        {/*------- Grid Must be selected  Modal---------*/}
        <WarningModal
          isModalOpen={
            this.props.data.maintenanceScreenData.isRecordMustSelectedPopupOpen
          }
          closeModal={this.props.toggleRecordMustSelectedPopupWarningModal}
          warningMessage={
            this.props.data.maintenanceScreenData
              .RecordMustBeSelectedWarningMessage
          }
        ></WarningModal>
        {/*-------populate Grid Modal---------*/}
        <WarningModal
          isModalOpen={
            this.props.data.maintenanceScreenData.isGridMustPopulatedModalOpen
          }
          closeModal={this.props.toggleGridMustBePopulateddModal}
          warningMessage={
            this.props.data.maintenanceScreenData
              .gridMustBePopulateModalWarningMessage
          }
        ></WarningModal>
        {/*-------Threshold Modal---------*/}
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
        {/*-------Suspend/Restart  Modal---------*/}
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
        {/*-------Publish Securities Modal---------*/}
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
        {/*-------Price Roll Override  Modal---------*/}
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
        {/*-------Threshold Modal---------*/}
        <div className="priceRollOverridePrompt">
          <PriceOverridePrompt
            isModalOpen={
              this.props.data.maintenanceScreenData
                .isPriceOverrideConfirmModalOpen
            }
            closeModal={this.props.togglePriceOverrideConfirmModalOpen}
            warningMessage={
              this.props.data.maintenanceScreenData
                .priceOverrideConfirmWarningMessage
            }
          ></PriceOverridePrompt>
        </div>
      </div>
    );
  }
}

export default Maintenanceheaders;
