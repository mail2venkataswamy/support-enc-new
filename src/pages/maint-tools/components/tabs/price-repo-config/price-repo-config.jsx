import React, { useContext, useEffect, useState } from "react";
import MyContext from "../../../../../components/context/maint-tools-context.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import "./price-repo-config.scss";
import { AddNewConfigModal } from "./add-new-configuration-modal/add-new-configuration-modal.jsx";

const PriceRepoConfig = () => {
  const context = useContext(MyContext);
  const {
    priceRepoConfigRowData,
    colDefs,
    defaultColDef,
    isAddNewConfigModalOpen,
    toggleAddNewConfigModal,
  } = {
    ...context.state.priceRepoConfigData,
    ...context,
  };

  useEffect(() => {
    let ele = document.getElementsByClassName("ag-paging-panel")[0];
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    div.innerHTML = `<div><div class="displayLabel">Display <select><option>10</option><option>50</option><option>100</option><option>150</option><option>200</option><option>500</option><option>1000</option></select> Records Per Page</div></div>`;
    div1.innerHTML = `<div class="noOfRecs">Total number of records:${priceRepoConfigRowData.length}</div>`;
    ele.append(div);
    ele.append(div1);
  }, []);
  // const [isAddNewConfigModalOpen, toggleAddNewConfigModal] = useState(false);

  return (
    <>
      <div className="priceRepoConfigWrapper">
        <button onClick={toggleAddNewConfigModal}>Add New Configuration</button>
        <Aggrid
          rowData={priceRepoConfigRowData}
          colDefsMedalsIncluded={colDefs}
          defaultColDef={defaultColDef}
          gridHeight={615}
          gridWidth={"auto"}
          rowSelection="multiple"
          pagination={true}
          paginationPageSize={100}
          rowHeight={22}
          headerHeight={33}
        />
      </div>
      <AddNewConfigModal
        toggleAddNewConfigModal={toggleAddNewConfigModal}
        isAddNewConfigModalOpen={isAddNewConfigModalOpen}
      />
    </>
  );
};

export default PriceRepoConfig;
