import React, { useContext } from "react";
import ViDumpContext from "../../../../../components/context/vi-dump-context.jsx";
import Inputsuggestion from "../../vi-dump-input-suggestions/vi-dump-input-suggestions.jsx";
import "./vi-dump-product-info.scss";

const ProductInfo = () => {
  const context = useContext(ViDumpContext);
  const {
    cuspinValue,
    cuspinSearchValue,
    cuspinSuggestionResult,
    onClickCuspinSuggestionItem,
    onChangeCuspinValue,
    onChangeSymbolToValue,
    onClickSymbolToSuggestionItem,
    symbolToSuggestionResult,
    symbolToValue,
    symbolToSearchValue,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="productWrapper">
        <legend>VI Lookup</legend>
        <div className="viDumpSymbolToLabelAndValue">
          <div className="viDumpSymbolToLabel">Symbol:</div>
          <div className="viDumpSymbolToValue">
            <Inputsuggestion
              onChange={onChangeSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="viDumpCuspinLabelAndValue">
          <div className="viDumpCuspinLabel">Cusip:</div>
          <div className="viDumpCuspinValue">
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

export default ProductInfo;

ProductInfo.propTypes = {};
ProductInfo.defaultProps = {};
