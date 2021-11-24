import React from "react";
import "./prde-data-export.scss";

const DataExport = () => {
  return (
    <div className="dataExportWrapper">
      <fieldset className="dateWrapper">
        <legend>Date </legend>
      </fieldset>
      <fieldset className="productInfoWrapper">
        <legend>Product Information </legend>
      </fieldset>
      <div className="runAndResetButtonWrapper">
        <button>RUN</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default DataExport;
