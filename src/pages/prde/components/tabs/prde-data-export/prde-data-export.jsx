import React, { useContext } from "react";
import "./prde-data-export.scss";
import DateRange from "./prde-date-range/prde-date-range.jsx";
import ProductInfo from "./prde-product-info/prde-product-info.jsx";

const DataExport = () => {
  return (
    <div className="dataExportWrapper">
      <fieldset className="dateWrapper">
        <legend>Date </legend>
        <DateRange></DateRange>
      </fieldset>
      <fieldset className="productInfoWrapper">
        <legend>Product Information </legend>
        <ProductInfo></ProductInfo>
      </fieldset>
      <div className="runAndResetButtonWrapper">
        <button>RUN</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default DataExport;
