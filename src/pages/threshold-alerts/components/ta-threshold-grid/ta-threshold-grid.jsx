import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import "./ta-threshold-grid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
import myContext from "../../../../components/context/threshold-alerts-context.jsx";

const ThresholdGrid = () => {
  const context = useContext(myContext);
  const { priceSystemAlertStateRowData, colDefs, defaultColDef } = {
    ...context.state.gridScreenData,
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
      <div className="atGridHeader">Threshold Alets Grid</div>
      <div className="atGridTitle">Price System Alert State:</div>
      <div className="atGridWrapper"></div>
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
      />
    </>
  );
};

ThresholdGrid.propTypes = {};
ThresholdGrid.defaultProps = {};
export default ThresholdGrid;
