import React, { forwardRef, useImperativeHandle, useState } from "react";
import "./custom-tooltip.scss";

const FunctionalCustomTooltip = (params) => {
  if (params.node.data.tier === 0) {
    params.reactContainer.classList.add("custom-tooltip");

    const data = params.api.getDisplayedRowAtIndex(params.rowIndex).data;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "white" }}>
        <p>
          <span>Action to be taken</span>
        </p>
      </div>
    );
  } else {
    return null;
  }
};
export default FunctionalCustomTooltip;
