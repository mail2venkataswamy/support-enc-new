import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./st-filter-and-reset.scss";
import MyContext from "../../../../../components/context/pvsf-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="pvsfFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="pvsfFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="pvsfReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
