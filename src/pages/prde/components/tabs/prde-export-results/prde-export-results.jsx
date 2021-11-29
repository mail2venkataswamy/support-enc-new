import React, { useContext } from "react";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid.jsx";
import MyContext from "../../../../../components/context/prde-context.jsx";

const ExportResults = () => {
  const context = useContext(MyContext);
  const { exportResultRowData, colDefs, defaultColDef } = {
    ...context.state.exportResult,
  };
  return (
    <div>
      <Aggrid
        rowData={exportResultRowData}
        colDefsMedalsIncluded={colDefs}
        defaultColDef={defaultColDef}
        gridHeight={678}
        gridWidth={"auto"}
        rowSelection="multiple"
      />
    </div>
  );
};

export default ExportResults;
