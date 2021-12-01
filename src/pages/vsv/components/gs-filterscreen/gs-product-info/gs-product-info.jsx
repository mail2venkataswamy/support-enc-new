import React, { useContext } from "react";
import "./gs-product-info.scss";
import Inputsuggestion from "../gs-input-suggestions/gs-input-suggestions.jsx";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

const Productinfo = () => {
  let context = useContext(GovContext);
  const {
    onChangeCuspinValue,
    cuspinSuggestionResult,
    onClickSuggestionItem,
    cuspinValue,
    cuspinSearchValue,
    tierLevelData,
    isAllTireChecked,
    onSelectTireCheckbox,
    onAllTireChecked,
    occSymbolSuggestionResult,
    onChangeOccSymbolValue,
    onClickOccSymbolSuggestionItem,
    occSymbolValue,
    occSymbolSearchValue,
    iscorporateActionChecked,
    onSelectCorporateActionValue,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset>
        <legend>Product Info</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="occSymbolLabelAndInputWrapper">
          <div className="occSymbolLabel">OCC Symbol:</div>
          <div className="occSymbolInputWrapper">
            <Inputsuggestion
              results={occSymbolSuggestionResult}
              onChange={onChangeOccSymbolValue}
              onClick={onClickOccSymbolSuggestionItem}
              value={occSymbolValue}
              keySearch={occSymbolSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="tierLabelAndValue">
          <div className="label">Tier:</div>
          <Checkbox
            checkboxData={tierLevelData}
            isAllChecked={isAllTireChecked}
            onCheckbox={onSelectTireCheckbox}
            onAllChecked={onAllTireChecked}
          ></Checkbox>
        </div>
        <div className="corporateActionWrapper">
          <label>
            <input
              id={"corporateAction"}
              type="checkbox"
              value="corporateAction"
              onClick={(e) => onSelectCorporateActionValue(e)}
              checked={iscorporateActionChecked}
            ></input>
            {"Corporate Action"}
          </label>
        </div>
      </fieldset>
    </>
  );
};
export default Productinfo;
