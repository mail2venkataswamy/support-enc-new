import React, { useContext } from "react";
import Buttonwrapper from "../../../../../../../../components/common/button/button.jsx";
import "./mt-filter-and-reset.scss";
import MyContext from "../../../../../../../../components/context/maint-tools-context.jsx";

const filterAndReset = () => {
  const context = useContext(MyContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.delieveryClassMaintData.filterPanelData,
    ...context,
  };
  return (
    <div className="mtFilterAndResetButtonWrapper">
      <Buttonwrapper
        id="mtFilter-container"
        label="Filter"
        onClick={onClickFiler}
      ></Buttonwrapper>

      <Buttonwrapper
        id="mtReset-container"
        label="Reset"
        onClick={onClickReset}
      ></Buttonwrapper>
    </div>
  );
};

export default filterAndReset;
