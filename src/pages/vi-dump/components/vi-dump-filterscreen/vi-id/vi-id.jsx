import React, { useContext } from "react";
import TaContext from "../../../../../components/context/vi-dump-context.jsx";
import "./vi-id.scss";
import Inputsuggestion from "../../vi-dump-input-suggestions/vi-dump-input-suggestions.jsx";

const ViId = () => {
  const context = useContext(TaContext);
  const {
    onChangeViIdValue,
    viIdSuggestionResult,
    onClickViIdSuggestionItem,
    viIdValue,
    viIdSearchValue,
    isIgnoreNullFields,
    onChangeIgnoreNullFields,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="viDiWrapper">
        <legend></legend>
        <div className="viDumpVendorLabelAndValueWrapper">
          <div className="viDumpVendorLabel">VI ID:</div>
          <div className="viDumpVendorValue">
            <Inputsuggestion
              onChange={onChangeViIdValue}
              results={viIdSuggestionResult}
              onClick={onClickViIdSuggestionItem}
              value={viIdValue}
              keySearch={viIdSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="viDumpExchangeLabelAndValueWrapper">
          <div className="viDumpExchangeLabel">Ignore Null Fields:</div>
          <div className="viDumpExchangeValue">
            <input
              type="checkbox"
              checked={isIgnoreNullFields}
              onChange={onChangeIgnoreNullFields}
            ></input>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ViId;
