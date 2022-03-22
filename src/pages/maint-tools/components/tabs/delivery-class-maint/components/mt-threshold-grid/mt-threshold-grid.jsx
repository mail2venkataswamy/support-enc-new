import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./mt-threshold-grid.scss";
import Aggrid from "../../../../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../../../../components/context/maint-tools-context.jsx";
import WarningModal from "../../../../../../../components/common/modal/warning/warning-modal.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const [isWarningModalOpen, toggleWarningModal] = useState(false);
  const {
    priceSystemAlertStateRowData,
    colDefs,
    defaultColDef,
    onRefreshMaintenanceGridData,
    onBtPrint,
    onGridReady,
  } = {
    ...context.state.delieveryClassMaintData.gridScreenData,
    ...context,
  };
  let isGridPopulated =
    priceSystemAlertStateRowData && priceSystemAlertStateRowData.length > 0;
  return (
    <>
      <div className="mtGridHeader">Delivery Class Maintenance Grid</div>

      <div className="ptHeaderActions">
        <div className="mtGridTitle"></div>
        <div className="ptRighttHeaderSection">
          <button
            onClick={
              isGridPopulated
                ? onRefreshMaintenanceGridData
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Refresh
          </button>
          <button
            onClick={
              isGridPopulated
                ? onBtPrint
                : () => toggleWarningModal(!isWarningModalOpen)
            }
          >
            Print
          </button>
        </div>
      </div>
      <Aggrid
        rowData={priceSystemAlertStateRowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={"83%"}
        gridWidth={"auto"}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={100}
        rowHeight={22}
        headerHeight={33}
        onGridReady={onGridReady}
      />
      <div className="mtSaveAndCancelWrapper">
        <button className="mtSave primary">Save</button>
        <button className="mtCancel secondary">Cancel</button>
      </div>
      <WarningModal
        warningMessage="Grid must be populated"
        isModalOpen={isWarningModalOpen}
        closeModal={toggleWarningModal}
      ></WarningModal>
    </>
  );
};

ThresholdGrid.propTypes = {};
ThresholdGrid.defaultProps = {};
export default ThresholdGrid;
