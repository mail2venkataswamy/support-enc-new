import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./er-filter-and-reset.scss";
import MyContext from "../../../../../components/context/daily-index-dividend-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFilter, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="didFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="didFilter-container"
        label="Filter"
        onClick={onClickFilter}
      ></Buttonwrapper>

      <Buttonwrapper
        id="didReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
