import React, { useContext } from "react";
import Modal from "react-modal";
import "./vepr-add-thresholds.scss";
import myContext from "../../../../../components/context/vepr-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../vepr-input-suggestions/vepr-input-suggestions";

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
    classificationOptions,
    selectedClassificationValue,
    onChangeAddClassificationValue,
    onChanglpafValue,
    selectedLpafValue,
  } = {
    ...context.state.addThresholdsData,
    ...context,
  };

  return (
    <>
      <fieldset className="productWrapper">
        <legend>Product</legend>
        <div className="veprProductTypeLabelAndValue">
          <div className="veprProductTypeLabel">Product Type:</div>
          <div className="veprProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeAddProductTypeValue}
            ></Dropdown>
          </div>
        </div>

        <div className="veprProductTypeLabelAndValue">
          <div className="veprProductTypeLabel">Classification:</div>
          <div className="veprProductTypeValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeAddClassificationValue}
            ></Dropdown>
          </div>
        </div>

        <div className="veprProductTypeLabelAndValue">
          <div className="veprProductTypeLabel">Change Count:</div>
          <div className="veprProductTypeValue">
            <Dropdown
              options={changeCountOptions}
              selectedValue={selectedChangeCountValue}
              onChange={onChangeAddCountValue}
            ></Dropdown>
          </div>
        </div>

        <div className="veprCuspinLabelAndValue">
          <div className="veprCuspinLabel">Cusip:</div>
          <div className="veprCuspinValue">
            <Inputsuggestion
              onChange={onChangeAddCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickAddCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="veprSymbolToLabelAndValue">
          <div className="veprSymbolToLabel">Symbol:</div>
          <div className="veprSymbolToValue">
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
      <fieldset className="priceSourceWrapper">
        <legend>Price Source</legend>
        <div className="veprVendorLabelAndValueWrapper">
          <div className="veprVendorLabel">Vendor:</div>
          <div className="veprVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeAddVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>

        <div className="veprExchangeLabelAndValueWrapper">
          <div className="veprExchangeLabel">Exchange:</div>
          <div className="veprExchangeValue">
            <Dropdown
              type="single"
              options={exchangeOptions}
              onChange={onChangeAddExchangeValue}
              selectedValue={selectedExchangeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="veprLpafLabelAndValueWrapper">
          <div className="veprLpafLabel">Last price Adjustment Factor:</div>
          <div className="veprLpafValue">
            <input
              onChange={onChanglpafValue}
              value={selectedLpafValue}
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
    <div className="veprAddThresholdsModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Add Thresholds</div>
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
