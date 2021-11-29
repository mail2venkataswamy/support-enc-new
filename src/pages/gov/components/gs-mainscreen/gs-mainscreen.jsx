import React, { useContext } from "react";
import "./gs-mainscreen.scss";
import MaintenanceHeaders from "./gs-maintenance-headers/gs-maintenance-headers.jsx";
//import context from "../../../../components/context/gov-context.jsx";

const mainScreen = () => {
  //const context = useContext(context);
  //let matenanceDataLastPublishDate = new Date();
  return (
    <div className="maintenance">
      <div className="mainscreenTitleAndToggle">
        <div className="mantainanaceTitle">Maintenance Screen</div>
      </div>
      <MaintenanceHeaders></MaintenanceHeaders>
      <div className="saveCancelPublishDateWrapper">
        <div className="publishDateWrapper">Last Published Date:</div>
        <div className="cancelAndSaveButtonWrapper">
          <button className="secondary">Cancel</button>
          <button className="primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default mainScreen;
