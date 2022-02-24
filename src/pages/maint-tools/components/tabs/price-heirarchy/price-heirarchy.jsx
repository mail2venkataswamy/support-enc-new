import React, { useContext, useEffect } from "react";
import MyContext from "../../../../../components/context/maint-tools-context.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import "./price-heirarchy.scss";

const PriceHierarchy = () => {
  const context = useContext(MyContext);
  const {
    priceHierarchyRowData,
    colDefs,
    defaultColDef,
    onGridReady,
    onBtPrint,
    onCellValueChanged,
  } = {
    ...context.state.priceHierarchyData,
    ...context,
  };
  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${priceHierarchyRowData.length}</div>`;
    ele && ele.append(div);
    ele.append(div1);
  }, []);

  return (
    <>
      <div className="priceHeirarchyConfigWrapper">
        <div className="refreshAndPrintWrapper">
          <button className="mtRefresh">Refresh</button>
          <button className="mtPrint" onClick={onBtPrint}>
            Print
          </button>
        </div>
        <Aggrid
          rowData={priceHierarchyRowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={580}
          gridWidth={"auto"}
          rowSelection="multiple"
          pagination={true}
          paginationPageSize={100}
          //onBtPrint={onBtPrint}
          onGridReady={onGridReady}
          rowHeight={22}
          headerHeight={33}
          onCellValueChanged={onCellValueChanged}
        />

        <div className="saveAndCancelWrapper">
          <button className="mtSave primary">Save</button>
          <button className="mtCancel secondary">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default PriceHierarchy;
