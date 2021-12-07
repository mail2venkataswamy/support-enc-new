import React, { useContext } from "react";
import DownloadFilesBy from "./prde-download-files-by/prde-download-files-by";
import DownloadOptions from "./download-options/download-options.jsx";
import PrdeContext from "../../../../../components/context/prde-context";

const SThreeDownload = () => {
  const context = useContext(PrdeContext);
  return (
    <div className="dataExportWrapper">
      <fieldset className="dateWrapper">
        <legend>Download Files By </legend>
        <DownloadFilesBy></DownloadFilesBy>
      </fieldset>
      <fieldset className="productInfoWrapper">
        <legend>Download Options </legend>
        <DownloadOptions></DownloadOptions>
      </fieldset>
      <div className="runAndResetButtonWrapper">
        <button>Download</button>
        <button onClick={context.onClickSThreeDowloadReset}>RESET</button>
      </div>
    </div>
  );
};

export default SThreeDownload;
