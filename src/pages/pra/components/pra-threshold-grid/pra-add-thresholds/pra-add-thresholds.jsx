import React, { useContext } from "react";
import Modal from "react-modal";
import "./pra-add-thresholds.scss";
import myContext from "../../../../../components/context/pra-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../pra-input-suggestions/pra-input-suggestions";

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
        <div className="praProductTypeLabelAndValue">
          <div className="praProductTypeLabel">Product Type:</div>
          <div className="praProductTypeValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeAddProductTypeValue}
            ></Dropdown>
          </div>
        </div>

        <div className="praProductTypeLabelAndValue">
          <div className="praProductTypeLabel">Classification:</div>
          <div className="praProductTypeValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeAddClassificationValue}
            ></Dropdown>
          </div>
        </div>

        <div className="praProductTypeLabelAndValue">
          <div className="praProductTypeLabel">Change Count:</div>
          <div className="praProductTypeValue">
            <Dropdown
              options={changeCountOptions}
              selectedValue={selectedChangeCountValue}
              onChange={onChangeAddCountValue}
            ></Dropdown>
          </div>
        </div>

        <div className="praCuspinLabelAndValue">
          <div className="praCuspinLabel">Cusip:</div>
          <div className="praCuspinValue">
            <Inputsuggestion
              onChange={onChangeAddCuspinValue}
              results={cuspinSuggestionResult}
              onClick={onClickAddCuspinSuggestionItem}
              value={cuspinValue}
              keySearch={cuspinSearchValue}
            ></Inputsuggestion>
          </div>
        </div>

        <div className="praSymbolToLabelAndValue">
          <div className="praSymbolToLabel">Symbol:</div>
          <div className="praSymbolToValue">
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
        <div className="praVendorLabelAndValueWrapper">
          <div className="praVendorLabel">Vendor:</div>
          <div className="praVendorValue">
            <Dropdown
              type="single"
              options={vendorOptins}
              onChange={onChangeAddVendorValue}
              selectedValue={selectedVendorValue}
            ></Dropdown>
          </div>
        </div>

        <div className="praExchangeLabelAndValueWrapper">
          <div className="praExchangeLabel">Exchange:</div>
          <div className="praExchangeValue">
            <Dropdown
              type="single"
              options={exchangeOptions}
              onChange={onChangeAddExchangeValue}
              selectedValue={selectedExchangeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="praLpafLabelAndValueWrapper">
          <div className="praLpafLabel">Last price Adjustment Factor:</div>
          <div className="praLpafValue">
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
    <div className="mtAddThresholdsModalContentWrapper">
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
