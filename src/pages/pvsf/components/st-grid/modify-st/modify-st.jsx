import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-st.scss";
import myContext from "../../../../../components/context/pvsf-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
const AddSymbolTranslationsModalContent = () => {
  const context = useContext(myContext);

  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeAddProductTypeValue,
    classificationOptions,
    selectedClassificationValue,
    onChangeAddClassificationValue,
    subClassificationOptions,
    selectedSubClassificationValue,
    onChangeAddSubClassificationValue,
    securityTypeOptions,
    selectedSecurityTypeValue,
    onChangeAddSecurityTypeValue,
    applicationOptions,
    selectedApplicationValue,
    onChangeAddApplicationValue,
    cycleOptions,
    selectedCycleValue,
    onChangeAddCycleValue,
    primaryVendorOptions,
    selectedPrimaryVendorValue,
    selectedSecondaryVendorValue,
    selectedTeritaryVendorValue,
    onChangeAddPrimaryVendorValue,
    onChangeAddSecondaryVendorValue,
    onChangeAddTeritaryVendorValue,
    isModifyPrimaryVendorSelectoionsModalOpen,
  } = {
    ...context.state.addPrimaryVendorSelectoionsData,
    ...context,
  };

  return (
    <>
      <fieldset className="pvsfProductWrapper">
        <legend>Product</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Product Type:</div>
          <div className="pvsfValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeAddProductTypeValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Classification:</div>
          <div className="pvsfValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeAddClassificationValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Sub Classification:</div>
          <div className="pvsfValue">
            <Dropdown
              options={subClassificationOptions}
              selectedValue={selectedSubClassificationValue}
              onChange={onChangeAddSubClassificationValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Security Type:</div>
          <div className="pvsfValue">
            <Dropdown
              options={securityTypeOptions}
              selectedValue={selectedSecurityTypeValue}
              onChange={onChangeAddSecurityTypeValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="pvsfProductWrapper">
        <legend>Applications & Run Time:</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Application:</div>
          <div className="pvsfValue">
            <Dropdown
              options={applicationOptions}
              selectedValue={selectedApplicationValue}
              onChange={onChangeAddApplicationValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Cycle:</div>
          <div className="pvsfValue">
            <Dropdown
              options={cycleOptions}
              selectedValue={selectedCycleValue}
              onChange={onChangeAddCycleValue}
              disabled={
                isModifyPrimaryVendorSelectoionsModalOpen ? true : false
              }
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="pvsfProductWrapper">
        <legend>Price Source:</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Primary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedPrimaryVendorValue}
              onChange={onChangeAddPrimaryVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Secondary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedSecondaryVendorValue}
              onChange={onChangeAddSecondaryVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Teritary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedTeritaryVendorValue}
              onChange={onChangeAddTeritaryVendorValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
    </>
  );
};

const AddSymbolTranslations = () => {
  const context = useContext(myContext);
  const {
    onSaveModifyPrimaryVendorSelectoions,
    onResetModifyPrimaryVendorSelectoions,
    toggleModifyPrimaryVendorSelectoionModal,
    isEditableModalPopupOpen,
  } = {
    ...context,
    ...context.state.addPrimaryVendorSelectoionsData,
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
        <button id="saveButton" onClick={onSaveModifyPrimaryVendorSelectoions}>
          Save
        </button>
        <button
          id="resetButton"
          onClick={onResetModifyPrimaryVendorSelectoions}
        >
          Reset
        </button>
        <button
          id="cancelButton"
          onClick={toggleModifyPrimaryVendorSelectoionModal}
        >
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
const ModifySt = () => {
  const context = useContext(myContext);

  const { isModifyPrimaryVendorSelectoionsModalOpen } = {
    ...context.state.modifyPrimaryVendorSelectoionsData,
  };
  return (
    <Modal
      isOpen={isModifyPrimaryVendorSelectoionsModalOpen}
      style={customStyles}
    >
      <AddSymbolTranslations></AddSymbolTranslations>
    </Modal>
  );
};

export { ModifySt as ModifySt };
