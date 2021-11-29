import React, { useContext } from "react";
import ButtonWrapper from "../../../../../components/common/button/button.jsx";
import WarningModal from "../../../../../components/common/modal/warning/warning-modal.jsx";
import "./gs-maintenance-headers.scss";
import Modalpopup from "../../../../../components/common/modal/modal.jsx";
import { ThresholdModal } from "../gs-threshold/gs-threshold.jsx";
import { SusupendRestartModal } from "../gs-suspend-restart-repository/gs-suspend-restart-repo-modal.jsx";
import { PublishSecuritiesModal } from "../gs-publish-valued-securities/gs-publish-valued-securities.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import { PriceRollOverrideModal } from "../gs-price-roll-override/gs-price-roll-override.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import PriceOverridePrompt from "../../../../../components/common/modal/prompt/prompt.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

const Maintenanceheaders = () => {
  const context = useContext(GovContext);
  const {
    maintenanceRowData,
    onClickThresholdButton,
    toggleGridMustBePopulateddModal,
    onClickSuspendRestartRepoButton,
    onClickPublishValuedSecuritiesButton,
    selectedGridRows,
    toggleRecordMustSelectedPopupWarningModal,
    reviewOptions,
    selectedReviewValue,
    showLessOrColumns,
    onRefreshMaintenanceGridData,
    onClickPriceRollOverrideButton,
    onBtnExport,
    showAllColumns,
    onBtPrint,
    colDefsMedalsIncluded,
    lessDefsMedalsIncluded,
    defaultColDef,
    onGridReady,
    popupParent,
    onCellValueChanged,
    onSelectionChanged,
    onFirstDataRendered,
    isPriceRollOverrideWarningModalOpen,
    closePriceRollOverrideWarningModal,
    PriceRollOverrideMModalWarningMessage,
    isRecordMustSelectedPopupOpen,
    RecordMustBeSelectedWarningMessage,
    isGridMustPopulatedModalOpen,
    gridMustBePopulateModalWarningMessage,
    //============
    closeThresholdModal,
    isThresholdModalOpen,
    maintenanceScreenData,
    //=====
    isPriceOverrideConfirmModalOpen,
    togglePriceOverrideConfirmModalOpen,
    priceOverrideConfirmWarningMessage,
    getRowStyle,
    CustomTooltip,
    priceTypeData,
    priceRollOverridePriceTypeValue,
    onChangeSurpressRestartCuspinValue,
    SurpressRestartCuspinSuggestionResult,
    onClickSurpressRestartSuggestionItem,
    SurpressRestartCuspinValue,
    SurpressRestartCuspinSearchValue,
    onChangePriceTypeValue,
    onChangeDebtTypeValue,
    selectedDebtTypeValue,
    debtTypeOptions,
  } = {
    ...context.state.maintenanceScreenData,
    ...context.state,
    ...context,
  };
  return (
    <div className="maintenanceHeaders">
      <div className="wrapper">
        <div className="dataHeadersButtonWrapper">
          <ButtonWrapper
            id="threshold"
            label={"Threshold"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onClickThresholdButton
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="supendRestart"
            label={"Supend/Restart Prices"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onClickSuspendRestartRepoButton
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="Publish"
            label={"Publish"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onClickPublishValuedSecuritiesButton
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="PriceRollOverride"
            label={"Price Roll Override"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? selectedGridRows.length < 1
                  ? toggleRecordMustSelectedPopupWarningModal
                  : () => onClickPriceRollOverrideButton(selectedGridRows)
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>

          <div id="review">
            <Dropdown
              id="review"
              options={reviewOptions}
              onChange={
                maintenanceRowData && maintenanceRowData.length > 0
                  ? ""
                  : toggleGridMustBePopulateddModal
              }
              selectedValue={selectedReviewValue}
            ></Dropdown>
          </div>
        </div>
        <div className="showColumnsPrintRefreshExportWrapper">
          <ButtonWrapper
            id="showAllColumns"
            label={showAllColumns ? "Show All Columns" : "Show Default Columns"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? showLessOrColumns
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="refresh"
            label={"Refresh"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onRefreshMaintenanceGridData
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="print"
            label={"Print"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onBtPrint
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
          <ButtonWrapper
            id="export"
            label={"Export"}
            onClick={
              maintenanceRowData && maintenanceRowData.length > 0
                ? onBtnExport
                : toggleGridMustBePopulateddModal
            }
          ></ButtonWrapper>
        </div>
      </div>

      <Aggrid
        rowData={maintenanceRowData}
        colDefsMedalsIncluded={
          showAllColumns ? colDefsMedalsIncluded : lessDefsMedalsIncluded
        }
        defaultColDef={defaultColDef}
        gridHeight={500}
        gridWidth="auto"
        suppressRowClickSelection={true}
        rowSelection="multiple"
        pagination={true}
        enableRangeSelection={true}
        onGridReady={onGridReady}
        popupParent={popupParent}
        suppressExcelExport={true}
        singleClickEdit={true}
        onCellValueChanged={onCellValueChanged}
        paginationPageSize={10}
        onSelectionChanged={onSelectionChanged}
        onFirstDataRendered={onFirstDataRendered}
        getRowStyle={getRowStyle}
        CustomTooltip={CustomTooltip}
      />
      {/*------- Price Roll Override Warning Modal---------*/}
      <WarningModal
        isModalOpen={isPriceRollOverrideWarningModalOpen}
        closeModal={closePriceRollOverrideWarningModal}
        warningMessage={PriceRollOverrideMModalWarningMessage}
      ></WarningModal>
      {/*------- Grid Must be selected  Modal---------*/}
      <WarningModal
        isModalOpen={isRecordMustSelectedPopupOpen}
        closeModal={toggleRecordMustSelectedPopupWarningModal}
        warningMessage={RecordMustBeSelectedWarningMessage}
      ></WarningModal>
      {/*-------populate Grid Modal---------*/}
      <WarningModal
        isModalOpen={isGridMustPopulatedModalOpen}
        closeModal={toggleGridMustBePopulateddModal}
        warningMessage={gridMustBePopulateModalWarningMessage}
      ></WarningModal>
      {/*-------Threshold Modal---------*/}
      <Modalpopup
        isModalOpen={isThresholdModalOpen}
        closeModal={closeThresholdModal}
      ></Modalpopup>
      <ThresholdModal
        isModalOpen={isThresholdModalOpen}
        closeModal={closeThresholdModal}
        data={maintenanceScreenData}
      />
      <SusupendRestartModal />
      <PublishSecuritiesModal />
      <div className="priceRollOverrideModalContainer">
        <PriceRollOverrideModal />
      </div>
      <div className="priceRollOverridePrompt">
        <PriceOverridePrompt
          isModalOpen={isPriceOverrideConfirmModalOpen}
          closeModal={togglePriceOverrideConfirmModalOpen}
          warningMessage={priceOverrideConfirmWarningMessage}
        ></PriceOverridePrompt>
      </div>
    </div>
  );
};

export default Maintenanceheaders;
