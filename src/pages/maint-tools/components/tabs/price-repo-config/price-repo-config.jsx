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

        <AddNewConfigModal
          toggleAddNewConfigModal={toggleAddNewConfigModal}
          isAddNewConfigModalOpen={isAddNewConfigModalOpen}
        />
      </div>
    </>
  );
};

export default PriceRepoConfig;
