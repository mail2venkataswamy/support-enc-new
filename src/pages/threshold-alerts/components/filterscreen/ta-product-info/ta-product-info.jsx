import React, { useContext } from "react";
import TaContext from "../../../../../components/context/threshold-alerts-context";
import propTypes from "prop-types";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../ta-input-suggestions/at-input-suggestions.jsx";

import "./ta-product-info.scss";

const ProductInfo = () => {
  const context = useContext(TaContext);
  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeProductTypeValue,
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
        <legend>Product</legend>
        <div className="atProductTypeLabelAndValue">
          <div className="atProductTypeLabel">Product Type:</div>
          <div className="atProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="atCuspinLabelAndValue">
          <div className="atCuspinLabel">Cusip:</div>
          <div className="atCuspinValue">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="atSymbolToLabelAndValue">
          <div className="atSymbolToLabel">Symbol:</div>
          <div className="atSymbolToValue">
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
      </fieldset>
    </>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {};
ProductInfo.defaultProps = {};
