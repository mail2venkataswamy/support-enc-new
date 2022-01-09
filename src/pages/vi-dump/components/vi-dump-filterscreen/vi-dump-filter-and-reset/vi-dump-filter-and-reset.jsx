import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./vi-dump-filter-and-reset.scss";
import MyContext from "../../../../../components/context/vi-dump-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="viDumpFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="viDumpFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="viDumpReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
