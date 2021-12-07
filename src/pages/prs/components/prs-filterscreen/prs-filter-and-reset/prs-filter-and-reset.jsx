import React, { useContext } from "react";
import "./prs-filter-and-reset.scss";
import PrsContext from "../../../../../components/context/prs-context.jsx";

const FilterAndReset = () => {
  const context = useContext(PrsContext);
  const { onClickFiler, onClickReset } = {
    ...context.state.filterPanelData,
    ...context,
  };

  return (
    <div className="prsFilterAndResetButtonWrapper">
      <button onClick={onClickFiler}>Filtre</button>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
  a;
};
FilterAndReset.propTypes = {};
FilterAndReset.defaultProps = {};
export default FilterAndReset;
