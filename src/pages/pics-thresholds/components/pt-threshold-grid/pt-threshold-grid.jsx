import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "./pt-threshold-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/pics-threshold-context.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const {
    priceSystemAlertStateRowData,
    colDefs,
    defaultColDef,
    onBtPrint,
    onGridReady,
    onBtnExport,
    onRefreshMaintenanceGridData,
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
  return (
    <>
      <div className="ptGridHeader">Pics Thresholds</div>
      <div className="ptHeaderActions">
        <div className="ptLeftHeaderSection">
          <button>Add</button>
          <button>Delete</button>
          <button>PICS disable</button>
        </div>
        <div className="ptRighttHeaderSection">
          <button onClick={onRefreshMaintenanceGridData}>Refresh</button>
          <button onClick={onBtPrint}>Print</button>
          <button onClick={onBtnExport}>Export</button>
        </div>
      </div>
      <div className="ptGridWrapper"></div>
      <Aggrid
        rowData={priceSystemAlertStateRowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={630}
        gridWidth={"auto"}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={100}
        rowHeight={22}
        headerHeight={33}
        onGridReady={onGridReady}
      />
    </>
  );
};

ThresholdGrid.propTypes = {};
ThresholdGrid.defaultProps = {};
export default ThresholdGrid;
