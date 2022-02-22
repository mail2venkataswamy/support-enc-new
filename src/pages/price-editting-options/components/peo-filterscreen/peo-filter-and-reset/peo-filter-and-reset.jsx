import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./peo-filter-and-reset.scss";
import MyContext from "../../../../../components/context/peo-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="peoFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="peoFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="peoReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
