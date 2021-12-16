import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./at-filter-and-reset.scss";
import MyContext from "../../../../../components/context/threshold-alerts-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="atFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="atFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="atReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
