import React, { useContext, useEffect, useState } from "react";
import "./peo-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/peo-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal";
import RecordMustBeSelected from "../../../../components/common/modal/prompt/prompt.jsx";
import { AssociatedProducts } from "../../components/associated-products-grid/grid-modal.jsx";
import { DividendInfoModal } from "../../components/dividend-info-grid/grid-modal.jsx";
import { ExchangeInfoModal } from "../../components/exchange-info-grid/grid-modal.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const [isRecordMustBeselectedModalOpen, toggleRecordMustBeSelectedModal] =
    useState(false);
  const paginationOptions = [
    { value: 50 },
    { value: 100 },
    { value: 500 },
    { value: 1000 },
  ];

  const {
    rowData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
    selectedGridRows,
    getSelectedRowData,
    onSelectionChanged,
    onDeleteSelectedRecords,
    isDeleteGridRecordPromptModalOpen,
    toggleDeletePromptModal,
    onCellValueChanged,
    toggleAssociatedProductsModal,
    toggleDividendInfoModalOpenModal,
    toggleExchangeInfoGridModal,
    onCellClicked,
    onPageSizeChanged,
    CustomTooltip,
    paginationPageSize,
  } = {
    ...context.state.gridState,
    ...context,
  };

  let isGridPopulated = rowData && rowData.length > 0;
  return (
    <>
      <div className="peoGridHeader">Derivative</div>
      <div className="messageAndNavigationWrapper">
        <div className="title">Messages</div>
      </div>
      <div className="peoHeaderActions">
        <div className="peoLeftHeaderSection">
          <div className="peoLabelAndValue">
            <div className="peoLabel"></div>
            <label for="ca">Corporate Action</label>
            <div className="peoValue">
              <input
                //checked={isCorporateActionChecked}
                //onChange={onChangeCorporateAction}
                className="corporateAction"
              ></input>
            </div>
          </div>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleAssociatedProductsModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="big"
          >
            Asssociated Products
          </button>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleDividendInfoModalOpenModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="medium"
          >
            Devidend Info
          </button>
          <button
            onClick={
              isGridPopulated
                ? selectedGridRows && selectedGridRows.length > 0
                  ? toggleExchangeInfoGridModal
                  : () =>
                      toggleRecordMustBeSelectedModal(
                        !isRecordMustBeselectedModalOpen
                      )
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="medium"
          >
            Exchange Info
          </button>
          <button id="medium">SOO Info</button>
          <button id="small">Save</button>
          <button id="small">Cancel</button>
          <button id="big">Init VI Capture</button>
          <button id="big">Export Derivative</button>
          <button id="big">Review Final</button>
          <button id="big">Review Contracts</button>
          <button id="medium">Review Risk</button>
          <button id="big">Borrow Cost Limit</button>
        </div>
        <div className="peoRighttHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? onRefreshMaintenanceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Refresh
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtPrint
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Print
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtnExport
                : () => toggleWarningModal(!isWarningModalOpen)
            }
            id="small"
          >
            Export
          </button>
        </div>
      </div>
      <div className="peoGridWrapper"></div>
      <Aggrid
        rowData={rowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={465}
        gridWidth={"auto"}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={paginationPageSize}
        rowHeight={22}
        headerHeight={33}
        onGridReady={onGridReady}
        getSelectedRowData={getSelectedRowData}
        onSelectionChanged={onSelectionChanged}
        onCellValueChanged={onCellValueChanged}
        onCellClicked={onCellClicked}
        CustomTooltip={CustomTooltip}
        rowBuffer={paginationPageSize}
      />
      <div id="page-size-container">
        <div>
          {" "}
          <p>Display</p>
        </div>
        <div>
          <select onChange={onPageSizeChanged} id="page-size">
            {paginationOptions.map((option) => {
              return <option value={option.value}>{option.value}</option>;
            })}
          </select>
        </div>
        <div>
          {" "}
          <p>Records Per Page</p>
        </div>
      </div>
      <WarningModal
        warningMessage="Grid must be populated"
        isModalOpen={isWarningModalOpen}
        closeModal={toggleWarningModal}
      ></WarningModal>
      <WarningModal
        warningMessage="Record must be selected"
        isModalOpen={isRecordMustBeselectedModalOpen}
        closeModal={toggleRecordMustBeSelectedModal}
      ></WarningModal>
      <RecordMustBeSelected
        isModalOpen={isDeleteGridRecordPromptModalOpen}
        closeModal={toggleDeletePromptModal}
        onConfirm={onDeleteSelectedRecords}
        warningMessage="Are you sure to delete the record?"
      ></RecordMustBeSelected>
      <AssociatedProducts></AssociatedProducts>
      <DividendInfoModal></DividendInfoModal>
      <ExchangeInfoModal></ExchangeInfoModal>
    </>
  );
};

export default ThresholdGrid;
