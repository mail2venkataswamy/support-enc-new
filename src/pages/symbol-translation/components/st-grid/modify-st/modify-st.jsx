import React, { useContext } from "react";
import Modal from "react-modal";
import "./modify-st.scss";
import myContext from "../../../../../components/context/st-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../st-input-suggestions/st-input-suggestions";
import Datepicker from "../../../../../components/common/datepicker/datepicker";
const AddThresholdsModalContent = () => {
  const context = useContext(myContext);
  const {
    vendorOptins,
    selectedVendorValue,
    productTypeOptions,
    selectedProductTypeValue,
    cuspinValue,
    cuspinSearchValue,
    cuspinSuggestionResult,
    symbolToSuggestionResult,
    symbolToValue,
    symbolToSearchValue,
    classificationOptions,
    selectedClassificationValue,
    onChanglpafValue,
    selectedLpafValue,
    expOrMaturityDate,
    isInSuggestionResult,
    isInValue,
    isInSearchValue,
    strikePriceLowSuggestionResult,
    strikePriceLowValue,
    strikePriceLowSearchValue,
    callPutOptions,
    selectedCallPutValue,
    exchangeCatValue,
    exchangeCatData,
    restrictionStDate,
    restrictionEndDate,
    onChangeModifyPriceResExchangeValue,
    onChangeModifyPriceResVendorValue,
    onChangeModifyPriceResCuspinValue,
    onClickModifyPriceResCuspinSuggestionItem,
    onChangeModifyPriceResClassificationValue,
    onChangeModifyPriceResSymbolToValue,
    onClickModifyPriceResSymbolToSuggestionItem,
    onChangeModifyPriceResProductTypeValue,
    onChangeModifyPriceResIsInValue,
    onClickModifyPriceResIsInSuggestionItem,
    onChangeModifyPriceResStrikePriceLowValue,
    onClickModifyPriceResStrikePriceLowSuggestionItem,
    setModifyPriceResExpOrMaturityDate,
    onChangeModifyPriceResCallPutValue,
    setModifyPriceRestrictionStDate,
    setModifyPriceRestrictionEndDate,
    exchangeModifyPriceResOptions,
    onChangeModifyPriceRestrictionExchangeValue,
    selectedModifyPriceResExchangeValue,
  } = {
    ...context.state.modifyPriceResData,
    ...context,
  };

  return (
    <>
      <fieldset className="stPriceSourceWrapper">
        <legend>Price Source</legend>
        <div className="sectionOne">
          <div className="stLabelAndValue">
            <div className="stLabel">Vendor:</div>
            <div className="stValue">
              <Dropdown
                type="single"
                options={vendorOptins}
                onChange={onChangeModifyPriceResVendorValue}
                selectedValue={selectedVendorValue}
              ></Dropdown>
            </div>
          </div>
        </div>
        <div className="sectionOne">
          <div className="stLabelAndValue">
            <div className="stLabel">Exchange:</div>
            <div className="stValue">
              <Dropdown
                type="single"
                options={exchangeModifyPriceResOptions}
                onChange={onChangeModifyPriceRestrictionExchangeValue}
                selectedValue={selectedModifyPriceResExchangeValue}
              ></Dropdown>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="stProductWrapper">
        <legend>Product Details</legend>
        <div className="sectionOne">
          <div className="stLabelAndValue">
            <div className="stLabel">Product Type:</div>
            <div className="stValue">
              <Dropdown
                options={productTypeOptions}
                selectedValue={selectedProductTypeValue}
                onChange={onChangeModifyPriceResProductTypeValue}
              ></Dropdown>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Cusip:</div>
            <div className="stValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResCuspinValue}
                results={cuspinSuggestionResult}
                onClick={onClickModifyPriceResCuspinSuggestionItem}
                value={cuspinValue}
                keySearch={cuspinSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Call Put:</div>
            <div className="stValue">
              <Dropdown
                options={callPutOptions}
                selectedValue={selectedCallPutValue}
                onChange={onChangeModifyPriceResCallPutValue}
                //disabled={isCallPutDisabled}
              ></Dropdown>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Price Value:</div>
            <div className="stValue">
              <input
                onChange={onChanglpafValue}
                value={selectedLpafValue}
              ></input>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Strike Price:</div>
            <div className="stValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResStrikePriceLowValue}
                results={strikePriceLowSuggestionResult}
                onClick={onClickModifyPriceResStrikePriceLowSuggestionItem}
                value={strikePriceLowValue}
                keySearch={strikePriceLowSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
        </div>
        <div className="sectionTwo">
          <div className="stLabelAndValue">
            <div className="stLabel">Classification:</div>
            <div className="stValue">
              <Dropdown
                options={classificationOptions}
                selectedValue={selectedClassificationValue}
                onChange={onChangeModifyPriceResClassificationValue}
              ></Dropdown>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Symbol:</div>
            <div className="stValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResSymbolToValue}
                results={symbolToSuggestionResult}
                onClick={onClickModifyPriceResSymbolToSuggestionItem}
                value={symbolToValue}
                keySearch={symbolToSearchValue}
                //disabled={isSymbolToDisabled}
              ></Inputsuggestion>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">ISIN:</div>
            <div className="stValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResIsInValue}
                results={isInSuggestionResult}
                onClick={onClickModifyPriceResIsInSuggestionItem}
                value={isInValue}
                keySearch={isInSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
          <div className="stLabelAndValue">
            <div className="stLabel">Expiration/ Maturity Date:</div>
            <div className="stValue">
              <Datepicker
                selectedDate={expOrMaturityDate}
                setDate={setModifyPriceResExpOrMaturityDate}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="stResDateWrapper">
        <legend>Restriction Date</legend>
        <div className="stLabelAndValue">
          <div className="stLabel">Restriction Start Date:</div>
          <div className="stValue">
            <Datepicker
              selectedDate={restrictionStDate}
              setDate={setModifyPriceRestrictionStDate}
              disabled={false}
            />
          </div>
        </div>
        <div className="stLabelAndValue">
          <div className="stLabel">Restriction Start Date:</div>
          <div className="stValue">
            <Datepicker
              selectedDate={restrictionEndDate}
              setDate={setModifyPriceRestrictionEndDate}
              disabled={false}
            />
          </div>
        </div>
      </fieldset>
    </>
  );
};

const AddThresholds = () => {
  const context = useContext(myContext);

  const {
    onSaveModifyPriceRes,
    onResetModifyPriceResThresholds,
    toggleModifyPriceResModal,
  } = {
    ...context,
  };
  return (
    <div className="stModifyPriceResModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Modify Price Restriction</div>
      </div>
      <div className="body">
        <AddThresholdsModalContent></AddThresholdsModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={onSaveModifyPriceRes}>
          Save
        </button>
        <button id="resetButton" onClick={onResetModifyPriceResThresholds}>
          Reset
        </button>
        <button id="cancelButton" onClick={toggleModifyPriceResModal}>
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
const ModifyPriceRestriction = () => {
  const context = useContext(myContext);

  const { isModifyPriceRestrictionModalOpen } = {
    ...context.state.modifyPriceResData,
  };
  return (
    <Modal isOpen={isModifyPriceRestrictionModalOpen} style={customStyles}>
      <AddThresholds></AddThresholds>
    </Modal>
  );
};

export { ModifyPriceRestriction as ModifyPriceRestriction };
