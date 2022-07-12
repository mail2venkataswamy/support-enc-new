import React, { useContext } from "react";
import Modal from "react-modal";
import "./pt-add-thresholds.scss";
import myContext from "../../../../../components/context/pics-threshold-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../pt-input-suggestions/pt-input-suggestions";

const AddThresholdsModalContent = () => {
  const context = useContext(myContext);

  const {
    vendorOptins,
    onChangeAddVendorValue,
    selectedVendorValue,
    exchangeOptions,
    onChangeAddExchangeValue,
    selectedExchangeValue,
    productTypeOptions,
    selectedProductTypeValue,
    onChangeAddProductTypeValue,
    cuspinValue,
    cuspinSearchValue,
    cuspinSuggestionResult,
    onClickAddCuspinSuggestionItem,
    onChangeAddCuspinValue,
    onChangeAddSymbolToValue,
    onClickAddSymbolToSuggestionItem,
    symbolToSuggestionResult,
    symbolToValue,
    symbolToSearchValue,
    changeCountOptions,
    selectedChangeCountValue,
    onChangeAddCountValue,
    onChangePreMarketThreshold,
    onChangeMarketThreshold,
    onChangePostMarketThreshold,
    preMarketThresholdValue,
    postMarketThresholdValue,
    MarketThresholdValue,
  } = {
    ...context.state.addThresholdsData,
    ...context,
  };

  return (
    <>
      <fieldset className="priceSourceWrapper">
        <legend>Price Source</legend>
        <div className="ptVendorLabelAndValueWrapper">
          <div className="ptVendorLabel">Vendor:</div>
          <div className="ptVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeAddVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>
        <p></p>
        <div className="ptExchangeLabelAndValueWrapper">
          <div className="ptExchangeLabel">Exchange:</div>
          <div className="ptExchangeValue">
            <Dropdown
              type="single"
              options={exchangeOptions}
              onChange={onChangeAddExchangeValue}
              selectedValue={selectedExchangeValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="productWrapper">
        <legend>Product</legend>
        <div className="ptProductTypeLabelAndValue">
          <div className="ptProductTypeLabel">Product Type:</div>
          <div className="ptProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeAddProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <p></p>
        <div className="ptProductTypeLabelAndValue">
          <div className="ptProductTypeLabel">Change Count:</div>
          <div className="ptProductTypeValue">
            <Dropdown
              options={changeCountOptions}
              selectedValue={selectedChangeCountValue}
              onChange={onChangeAddCountValue}
            ></Dropdown>
          </div>
        </div>
        <p></p>
        <div className="ptCuspinLabelAndValue">
          <div className="ptCuspinLabel">Cusip:</div>
          <div className="ptCuspinValue">
            <Inputsuggestion
              onChange={onChangeAddCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickAddCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        <p></p>
        <div className="ptSymbolToLabelAndValue">
          <div className="ptSymbolToLabel">Symbol:</div>
          <div className="ptSymbolToValue">
            <Inputsuggestion
              onChange={onChangeAddSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickAddSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
      <fieldset className="productWrapper">
        <legend>Thresholds</legend>

        <div className="ptCuspinLabelAndValue">
          <div className="ptCuspinLabel">Pre Market Thresholds (secs):</div>
          <div className="ptCuspinValue">
            <input
              type="text"
              onChange={onChangePreMarketThreshold}
              value={preMarketThresholdValue}
            ></input>
          </div>
        </div>
        <div className="ptCuspinLabelAndValue">
          <div className="ptCuspinLabel">Market Thresholds (secs):</div>
          <div className="ptCuspinValue">
            <input
              type="text"
              value={MarketThresholdValue}
              onChange={onChangeMarketThreshold}
            ></input>
          </div>
        </div>
        <div className="ptCuspinLabelAndValue">
          <div className="ptCuspinLabel">Post Market Thresholds (secs):</div>
          <div className="ptCuspinValue">
            <input
              type="text"
              value={postMarketThresholdValue}
              onChange={onChangePostMarketThreshold}
            ></input>
          </div>
        </div>
      </fieldset>
    </>
  );
};

const AddThresholds = () => {
  const context = useContext(myContext);

  const {
    onSaveAddThresholds,
    onResetAddThresholds,
    toggleAddThresholdsModal,
  } = {
    ...context,
  };
  return (
    <div className="mtAddThresholdsModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Add Threshold</div>
        <div className="xMarkCloseButton">
          <button onClick={toggleAddThresholdsModal}>X</button>
        </div>
      </div>

      <div className="body">
        <AddThresholdsModalContent></AddThresholdsModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={onSaveAddThresholds}>
          Save
        </button>
        <button id="resetButton" onClick={onResetAddThresholds}>
          Reset
        </button>
        <button id="cancelButton" onClick={toggleAddThresholdsModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AddThresholdsModal = () => {
  const context = useContext(myContext);

  const { isAddThresholdsModalOpen } = {
    ...context.state.addThresholdsData,
  };
  return (
    <Modal isOpen={isAddThresholdsModalOpen} style={customStyles}>
      <AddThresholds></AddThresholds>
    </Modal>
  );
};

export { AddThresholdsModal as AddThresholdsModal };
