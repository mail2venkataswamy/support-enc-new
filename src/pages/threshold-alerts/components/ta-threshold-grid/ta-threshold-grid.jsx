import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ta-threshold-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/threshold-alerts-context.jsx";
import WarningModal from "../../../../components/common/modal/warning/warning-modal.jsx";

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
    ...context.state.gridScreenData,
    ...context,
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${priceSystemAlertStateRowData.length}</div>`;
    ele.append(div);
    ele.append(div1);
  }, []);
  let isGridPopulated =
    priceSystemAlertStateRowData && priceSystemAlertStateRowData.length > 0;
  return (
    <>
      <div className="atGridHeader">Threshold Alets Grid</div>

      <div className="ptHeaderActions">
        <div className="atGridTitle">Price System Alert State:</div>
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
        gridHeight={615}
        gridWidth={"auto"}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={100}
        rowHeight={22}
        headerHeight={33}
        onGridReady={onGridReady}
        getSelectedRowData={getSelectedRowData}
      />
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
