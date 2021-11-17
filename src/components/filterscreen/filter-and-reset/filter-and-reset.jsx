import { PropertyKeys } from "ag-grid-community";
import React from "react";
import Buttonwrapper from "../../common/button/button.jsx";
import "./filter-and-reset.scss";

const filterAndReset = (props) => {
  return (
    <div className="filterAndResetButtonWrapper">
      <Buttonwrapper
        id="filter-container"
        label="Filter"
        onClick={props.onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="reset-container"
        label="Reset"
        onClick={props.onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
