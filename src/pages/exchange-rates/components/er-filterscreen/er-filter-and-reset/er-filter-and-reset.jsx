import React, { useContext } from "react";
import Buttonwrapper from "../../../../../components/common/button/button.jsx";
import "./er-filter-and-reset.scss";
import MyContext from "../../../../../components/context/exchange-rates-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFilter, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <div className="erFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="erFilter-container"
        label="Filter"
        onClick={onClickFilter}
      ></Buttonwrapper>

      <Buttonwrapper
        id="erReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
