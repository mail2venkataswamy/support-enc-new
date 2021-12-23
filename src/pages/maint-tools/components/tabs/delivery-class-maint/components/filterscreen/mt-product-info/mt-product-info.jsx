import React, { useContext } from "react";
import MtContext from "../../../../../../../../components/context/maint-tools-context.jsx";
import propTypes from "prop-types";
//import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../mt-input-suggestions/mt-input-suggestions.jsx";

import "./mt-product-info.scss";

const ProductInfo = () => {
  const context = useContext(MtContext);
  const {
    isAllTargetDeliveryClassChecked,
    onSelectAllTargetDeliveryClass,
    onChangeTargetDeliveryClassValue,
    onClickTargetDeliveryClassSuggestionItem,
    onChangeDeliveryClassValue,
    onClickDeliveryClassSuggestionItem,
    deliveryClassSuggestionResult,
    deliveryClassValue,
    deliveryClassSearchValue,
    targetDeliveryClassSuggestionResult,
    targetDeliveryClassValue,
    targetDeliveryClassSearchValue,
  } = {
    ...context.state.delieveryClassMaintData.filterPanelData,
    ...context,
  };

  return (
    <>
      <fieldset className="productWrapper">
        <legend>Product</legend>
        <div className="mtTargetDeliveryClassLabelAndValue">
          <div className="mtTargetDeliveryClassLabel">Delivery Class:</div>
          <div className="mtTargetDeliveryClassValue">
            <Inputsuggestion
              onChange={onChangeDeliveryClassValue}
              results={deliveryClassSuggestionResult}
              onClick={onClickDeliveryClassSuggestionItem}
              value={deliveryClassValue}
              keySearch={deliveryClassSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="mtTargetDeliveryClassLabelAndValue">
          <div className="mtTargetDeliveryClassLabel">
            Target Delivery Class:
          </div>
          <div className="mtTargetDeliveryClassValue">
            <Inputsuggestion
              onChange={onChangeTargetDeliveryClassValue}
              results={targetDeliveryClassSuggestionResult}
              onClick={onClickTargetDeliveryClassSuggestionItem}
              value={targetDeliveryClassValue}
              keySearch={targetDeliveryClassSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="mtAllTargetDeliveryClassLabelAndValue">
          <div className="mtAllTargetDeliveryClassLabel">
            All Target Delivery Class:
          </div>
          <div className="mtAllTargetDeliveryClassValue"></div>
          <input
            type="checkbox"
            checked={isAllTargetDeliveryClassChecked}
            onClick={onSelectAllTargetDeliveryClass}
          />
        </div>
      </fieldset>
    </>
  );
};

export default ProductInfo;

ProductInfo.propTypes = {};
ProductInfo.defaultProps = {};
