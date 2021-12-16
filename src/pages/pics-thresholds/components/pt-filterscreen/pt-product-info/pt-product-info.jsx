import React, { useContext } from "react";
import TaContext from "../../../../../components/context/pics-threshold-context.jsx";
import propTypes from "prop-types";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../pt-input-suggestions/pt-input-suggestions.jsx";

import "./pt-product-info.scss";

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
        <div className="ptProductTypeLabelAndValue">
          <div className="ptProductTypeLabel">Product Type:</div>
          <div className="ptProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="ptCuspinLabelAndValue">
          <div className="ptCuspinLabel">Cusip:</div>
          <div className="ptCuspinValue">
            <Inputsuggestion
              onChange={onChangeCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="ptSymbolToLabelAndValue">
          <div className="ptSymbolToLabel">Symbol:</div>
          <div className="ptSymbolToValue">
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
