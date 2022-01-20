import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-st.scss";
import myContext from "../../../../../components/context/st-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../st-input-suggestions/st-input-suggestions";
const AddSymbolTranslationsModalContent = () => {
  const context = useContext(myContext);

  const {
    vendorOptins,
    onChangeAddVendorValue,
    selectedVendorValue,
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
    classificationOptions,
    selectedClassificationValue,
    onChangeAddClassificationValue,
    onChangeAddPriceResIsInValue,
    onClickAddPriceResIsInSuggestionItem,
    isInSuggestionResult,
    isInValue,
    isInSearchValue,
    onChangeAddStVendorExchangeSymbolValue,
    vendorExchangeSymbolSuggestionResult,
    onClickAddStVendorExchangeSymbolSuggestionItem,
    vendorExchangeSymbolValue,
    vendorExchangeSymbolSearchValue,
  } = {
    ...context.state.addSymbolTranslationsData,
    ...context,
  };

  return (
    <div>
      <div className="stLabelAndValue">
        <div className="stLabel">Product Type:</div>
        <div className="stValue">
          <Dropdown
            options={productTypeOptions}
            selectedValue={selectedProductTypeValue}
            onChange={onChangeAddProductTypeValue}
          ></Dropdown>
        </div>
      </div>
      <div className="stLabelAndValue">
        <div className="stLabel">Classification:</div>
        <div className="stValue">
          <Dropdown
            options={classificationOptions}
            selectedValue={selectedClassificationValue}
            onChange={onChangeAddClassificationValue}
          ></Dropdown>
        </div>
      </div>
      <div className="stLabelAndValue">
        <div className="stLabel">OCC Symbol:</div>
        <div className="stValue">
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
      <div className="stLabelAndValue">
        <div className="stLabel">Vendor / Exchange Symbol:</div>
        <div className="stValue">
          <Inputsuggestion
            onChange={onChangeAddStVendorExchangeSymbolValue}
            results={vendorExchangeSymbolSuggestionResult}
            onClick={onClickAddStVendorExchangeSymbolSuggestionItem}
            value={vendorExchangeSymbolValue}
            keySearch={vendorExchangeSymbolSearchValue}
            //disabled={isSymbolToDisabled}
          ></Inputsuggestion>
        </div>
      </div>
      <div className="stLabelAndValue">
        <div className="stLabel">Vendor Name:</div>
        <div className="stValue">
          <Dropdown
            type="single"
            options={vendorOptins}
            onChange={onChangeAddVendorValue}
            selectedValue={selectedVendorValue}
          ></Dropdown>
        </div>
      </div>

      <div className="stLabelAndValue">
        <div className="stLabel">Cusip:</div>
        <div className="stValue">
          <Inputsuggestion
            onChange={onChangeAddCuspinValue}
            results={cuspinSuggestionResult}
            onClick={onClickAddCuspinSuggestionItem}
            value={cuspinValue}
            keySearch={cuspinSearchValue}
          ></Inputsuggestion>
        </div>
      </div>

      <div className="stLabelAndValue">
        <div className="stLabel">ISIN:</div>
        <div className="stValue">
          <Inputsuggestion
            onChange={onChangeAddPriceResIsInValue}
            results={isInSuggestionResult}
            onClick={onClickAddPriceResIsInSuggestionItem}
            value={isInValue}
            keySearch={isInSearchValue}
          ></Inputsuggestion>
        </div>
      </div>
    </div>
  );
};

const AddSymbolTranslations = () => {
  const context = useContext(myContext);

  const {
    onSaveAddSymbolTranslations,
    onResetAddSymbolTranslations,
    toggleAddStModal,
    isEditableModalPopupOpen,
  } = {
    ...context,
    ...context.state.addSymbolTranslationsData,
  };
  return (
    <div className="stAddSymbolTranslationsModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">
          {isEditableModalPopupOpen
            ? "Edit Symbol Translation"
            : "Add New Symbol Translation"}
        </div>
      </div>
      <div className="body">
        <AddSymbolTranslationsModalContent></AddSymbolTranslationsModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={onSaveAddSymbolTranslations}>
          Save
        </button>
        <button id="resetButton" onClick={onResetAddSymbolTranslations}>
          Reset
        </button>
        <button id="cancelButton" onClick={toggleAddStModal}>
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
const AddOrModifySt = () => {
  const context = useContext(myContext);

  const { isAddSymbolTranslationsModalOpen } = {
    ...context.state.addSymbolTranslationsData,
  };
  return (
    <Modal isOpen={isAddSymbolTranslationsModalOpen} style={customStyles}>
      <AddSymbolTranslations></AddSymbolTranslations>
    </Modal>
  );
};

export { AddOrModifySt as AddOrModifySt };
