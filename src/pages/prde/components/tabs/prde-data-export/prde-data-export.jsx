import React, { useContext } from "react";
import "./prde-data-export.scss";
import DateRange from "./prde-date-range/prde-date-range.jsx";
import ProductInfo from "./prde-product-info/prde-product-info.jsx";
import PrdeContext from "../../../../../components/context/prde-context.jsx";

const DataExport = () => {
  const context = useContext(PrdeContext);
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
        <button>EXPORT ALL</button>
        <button onClick={context.onDataExportClickReset}>RESET</button>
      </div>
    </div>
  );
};

export default DataExport;
