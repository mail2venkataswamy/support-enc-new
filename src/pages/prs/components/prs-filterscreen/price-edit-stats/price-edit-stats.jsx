import React, { useContext } from "react";
import PropTypes from "prop-types";
import PrsContext from "../../../../../components/context/prs-context";
import Inputsuggestion from "../prs-input-suggestions/prs-input-suggestions.jsx";

import "./price-edit-stats.scss";
const EditCatStats = () => {
  const context = useContext(PrsContext);
  const {
    onChangeCuspinValue,
    cuspinSuggestionResult,
    onClickCuspinSuggestionItem,
    cuspinValue,
    cuspinSearchValue,
    onChangeSymbolValue,
    symbolSuggestionResult,
    onClickSymbolSuggestionItem,
    symbolValue,
    symbolSearchValue,
  } = { ...context.state.filterPanelData, ...context };
  return (
    <>
      <fieldset>
        <legend>Product Editing Stats</legend>
        <div className="prsSymbolLabelAndInputWrapper">
          <div className="prsSymbolLabel">Symbol:</div>
          <div className="prsSymbolInputWrapper">
            <Inputsuggestion
              onChange={onChangeSymbolValue}
              results={symbolSuggestionResult}
              onClick={onClickSymbolSuggestionItem}
              value={symbolValue}
              keySearch={symbolSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="prsCuspinLabelAndInputWrapper">
          <div className="prsCuspinLabel">Cusip:</div>
          <div className="prsCuspinInputWrapper">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
    </>
  );
};
EditCatStats.propTypes = {};
EditCatStats.defaultProps = {
  options: [],
  selectedValue: {},
};

export default EditCatStats;
