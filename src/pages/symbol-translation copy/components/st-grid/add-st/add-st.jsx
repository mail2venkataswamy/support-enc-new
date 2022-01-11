import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-st.scss";
import myContext from "../../../../../components/context/st-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../st-input-suggestions/st-input-suggestions";
const AddThresholdsModalContent = () => {
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
  } = {
    ...context.state.addThresholdsData,
    ...context,
  };

  return (
    <>
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
      <div className="stLabelAndValue">
        <div className="stLabel">Symbol:</div>
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
        <div className="stLabel">Vendor:</div>
        <div className="stValue">
          <Dropdown
            type="single"
            options={vendorOptins}
            onChange={onChangeAddVendorValue}
            selectedValue={selectedVendorValue}
          ></Dropdown>
        </div>
      </div>
    </>
  );
};

const AddThresholds = () => {
  const context = useContext(myContext);

  const {
    onSaveAddThresholds,
    onResetAddThresholds,
    toggleAddStModal,
    isEditableModalPopupOpen,
  } = {
    ...context,
    ...context.state.addThresholdsData,
  };
  return (
    <div className="stAddThresholdsModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">
          {isEditableModalPopupOpen
            ? "Edit Symbol Translation"
            : "Add New Symbol Translation"}
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

  const { isAddThresholdsModalOpen } = {
    ...context.state.addThresholdsData,
  };
  return (
    <Modal isOpen={isAddThresholdsModalOpen} style={customStyles}>
      <AddThresholds></AddThresholds>
    </Modal>
  );
};

export { AddOrModifySt as AddOrModifySt };
