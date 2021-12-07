import React, { useContext } from "react";
import prdeContext from "../../../../../../components/context/prde-context.jsx";
import "./download-options.scss";
import Inputsuggestion from "../../../../components/tabs/prde-data-export/prde-product-info/prde-input-suggestions/prde-input-suggestions.jsx";

const DownloadOptions = () => {
  const context = useContext(prdeContext);
  const {
    onChangeOptionsDeliveryClassValue,
    optionsDeliveryClassSuggestionResult,
    onClickOptionsDeliveryClassSuggestionItem,
    optionsDeliveryClassValue,
    optionsDeliveryClassSearchValue,
    isOverrideChecked,
    isCyclesChecked,
    onChangeOverride,
    onChangeCycles,
  } = {
    ...context,
    ...context.state.sThreeDownload,
  };
  return (
    <div className="dowloadOptionsWrapper">
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel">Delivery Class:</div>
        <div className="deliveryClassValue">
          <Inputsuggestion
            onChange={onChangeOptionsDeliveryClassValue}
            results={optionsDeliveryClassSuggestionResult}
            onClick={onClickOptionsDeliveryClassSuggestionItem}
            value={optionsDeliveryClassValue}
            keySearch={optionsDeliveryClassSearchValue}
          ></Inputsuggestion>
        </div>
      </div>
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel">Cycle Id:</div>
        <div className="deliveryClassValue">
          <input type="text"></input>
        </div>
      </div>
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel">Time:</div>
        <div className="deliveryClassValue">
          <input type="text"></input>
        </div>
      </div>
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel"></div>
        <div className="deliveryClassValue">
          <label>
            Override:
            <input
              type="checkbox"
              onChange={onChangeOverride}
              checked={isOverrideChecked}
            ></input>
          </label>
        </div>
      </div>
      <div className="deliveryClassLabelAndValue">
        <div className="deliveryClassLabel"></div>
        <div className="deliveryClassValue">
          <label>
            All Cycles:
            <input
              type="checkbox"
              onChange={onChangeCycles}
              checked={isCyclesChecked}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DownloadOptions;
