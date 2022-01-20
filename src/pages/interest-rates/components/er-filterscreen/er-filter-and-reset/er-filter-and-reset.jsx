import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./er-filter-and-reset.scss";
import MyContext from "../../../../../components/context/interest-rates-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFilter, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="irFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="irFilter-container"
        label="Filter"
        onClick={onClickFilter}
      ></Buttonwrapper>

      <Buttonwrapper
        id="irReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
