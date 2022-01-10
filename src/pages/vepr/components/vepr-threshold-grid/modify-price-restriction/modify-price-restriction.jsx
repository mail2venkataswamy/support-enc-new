import React, { useContext } from "react";
import Modal from "react-modal";
import "./modify-price-restriction.scss";
import myContext from "../../../../../components/context/vepr-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../vepr-input-suggestions/vepr-input-suggestions";
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
      <fieldset className="veprPriceSourceWrapper">
        <legend>Price Source</legend>
        <div className="sectionOne">
          <div className="veprLabelAndValue">
            <div className="veprLabel">Vendor:</div>
            <div className="veprValue">
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
          <div className="veprLabelAndValue">
            <div className="veprLabel">Exchange:</div>
            <div className="veprValue">
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
      <fieldset className="veprProductWrapper">
        <legend>Product Details</legend>
        <div className="sectionOne">
          <div className="veprLabelAndValue">
            <div className="veprLabel">Product Type:</div>
            <div className="veprValue">
              <Dropdown
                options={productTypeOptions}
                selectedValue={selectedProductTypeValue}
                onChange={onChangeModifyPriceResProductTypeValue}
              ></Dropdown>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Cusip:</div>
            <div className="veprValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResCuspinValue}
                results={cuspinSuggestionResult}
                onClick={onClickModifyPriceResCuspinSuggestionItem}
                value={cuspinValue}
                keySearch={cuspinSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Call Put:</div>
            <div className="veprValue">
              <Dropdown
                options={callPutOptions}
                selectedValue={selectedCallPutValue}
                onChange={onChangeModifyPriceResCallPutValue}
                //disabled={isCallPutDisabled}
              ></Dropdown>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Price Value:</div>
            <div className="veprValue">
              <input
                onChange={onChanglpafValue}
                value={selectedLpafValue}
              ></input>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Strike Price:</div>
            <div className="veprValue">
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
          <div className="veprLabelAndValue">
            <div className="veprLabel">Classification:</div>
            <div className="veprValue">
              <Dropdown
                options={classificationOptions}
                selectedValue={selectedClassificationValue}
                onChange={onChangeModifyPriceResClassificationValue}
              ></Dropdown>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Symbol:</div>
            <div className="veprValue">
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
          <div className="veprLabelAndValue">
            <div className="veprLabel">ISIN:</div>
            <div className="veprValue">
              <Inputsuggestion
                onChange={onChangeModifyPriceResIsInValue}
                results={isInSuggestionResult}
                onClick={onClickModifyPriceResIsInSuggestionItem}
                value={isInValue}
                keySearch={isInSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Expiration/ Maturity Date:</div>
            <div className="veprValue">
              <Datepicker
                selectedDate={expOrMaturityDate}
                setDate={setModifyPriceResExpOrMaturityDate}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="veprResDateWrapper">
        <legend>Restriction Date</legend>
        <div className="veprLabelAndValue">
          <div className="veprLabel">Restriction Start Date:</div>
          <div className="veprValue">
            <Datepicker
              selectedDate={restrictionStDate}
              setDate={setModifyPriceRestrictionStDate}
              disabled={false}
            />
          </div>
        </div>
        <div className="veprLabelAndValue">
          <div className="veprLabel">Restriction Start Date:</div>
          <div className="veprValue">
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
    <div className="veprModifyPriceResModalContentWrapper">
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
