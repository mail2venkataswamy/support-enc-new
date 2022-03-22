import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./peo-custom-tooltip.scss";

const FunctionalCustomTooltip = (params) => {
  if (params.node.data.symbol === "IAAL") {
    params.reactContainer.classList.add("custom-tooltip");

    const data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "white" }}>
        <p>Action to be taken</p>
      </div>
    );
  } else {
    return null;
  }
};
export default FunctionalCustomTooltip;
