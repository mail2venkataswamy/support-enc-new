import React from "react";
import "./style.scss";

import Maintenanceheaders from "./maintenance-headers/maintenance-headers.jsx";

const Maintenance = (props) => {
  return (
    <div id="maintenance">
      <div className="mantainanaceTitle">Maintenance Screen</div>
      <Maintenanceheaders
        data={props.data}
        onClickPriceRollOverrideButton={props.onClickPriceRollOverrideButton}
        closePriceRollOverrideModal={props.closePriceRollOverrideModal}
      ></Maintenanceheaders>
      <div className="gridContainer"></div>
    </div>
  );
};

export default Maintenance;
