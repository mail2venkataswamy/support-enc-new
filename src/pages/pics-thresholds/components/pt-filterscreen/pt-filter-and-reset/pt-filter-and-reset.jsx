import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./pt-filter-and-reset.scss";
import MyContext from "../../../../../components/context/pics-threshold-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="ptFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="ptFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="ptReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
