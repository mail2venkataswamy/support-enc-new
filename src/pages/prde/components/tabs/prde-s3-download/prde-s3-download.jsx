import React from "react";
import DownloadFilesBy from "./prde-download-files-by/prde-download-files-by";

const SThreeDownload = () => {
  return (
    <div className="dataExportWrapper">
      <fieldset className="dateWrapper">
        <legend>Download Files By </legend>
        <DownloadFilesBy></DownloadFilesBy>
      </fieldset>
      <fieldset className="productInfoWrapper">
        <legend>Download Options </legend>
      </fieldset>
      <div className="runAndResetButtonWrapper">
        <button>Download</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

export default SThreeDownload;
