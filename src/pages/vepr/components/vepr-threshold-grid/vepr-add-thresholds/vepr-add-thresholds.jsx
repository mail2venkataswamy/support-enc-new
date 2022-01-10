import React, { useContext } from "react";
import Modal from "react-modal";
import "./vepr-add-thresholds.scss";
import myContext from "../../../../../components/context/vepr-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown";
import Inputsuggestion from "../../vepr-input-suggestions/vepr-input-suggestions";
import Datepicker from "../../../../../components/common/datepicker/datepicker";
import ExchangesRadioGroup from "../../../../../components/common/radio-button/radio-button.jsx";
import Aggrid from "../../../../../components/common/ag-grid/ag-grid";
import MultiSelectBox from "../../../../../components/common/multi-select-box/multi-select-box.jsx";
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
    onChanglpafValue,
    selectedLpafValue,
    expOrMaturityDate,
    setAddExpOrMaturityDate,
    onChangeAddPriceResIsInValue,
    onClickAddPriceResIsInSuggestionItem,
    isInSuggestionResult,
    isInValue,
    isInSearchValue,
    onClickStrikePriceLowSuggestionItem,
    onClickStrikePriceHighSuggestionItem,
    onChangeStrikePriceHighValue,
    onChangeStrikePriceLowValue,
    strikePriceLowSuggestionResult,
    strikePriceLowValue,
    strikePriceLowSearchValue,
    strikePriceHighSuggestionResult,
    strikePriceHighValue,
    strikePriceHighSearchValue,
    callPutOptions,
    selectedCallPutValue,
    onChangeAddPriceResCallPutValue,
    onChangeExchangeCat,
    exchangeTypeValue,
    exchangeTypeData,
    exchangeItemsResult,
    setRestrictionStDate,
    setRestrictionEndDate,
    restrictionStDate,
    restrictionEndDate,
    vendorExchangeRowData,
    colDefs,
    defaultColDef,
    onResetAddThresholds,
    onSelectDeSelectExchangesOption,
  } = {
    ...context.state.addThresholdsData,
    ...context,
  };

  return (
    <>
      <fieldset className="addNewPriceRestrictionWrapper">
        <legend>Add NEw Price Restriction</legend>
        <fieldset className="veprProductWrapper">
          <legend>Product Details</legend>
          <div className="sectionOne">
            <div className="veprLabelAndValue">
              <div className="veprLabel">Product Type:</div>
              <div className="veprValue">
                <Dropdown
                  options={productTypeOptions}
                  selectedValue={selectedProductTypeValue}
                  onChange={onChangeAddProductTypeValue}
                ></Dropdown>
              </div>
            </div>
            <div className="veprLabelAndValue">
              <div className="veprLabel">Cusip:</div>
              <div className="veprValue">
                <Inputsuggestion
                  onChange={onChangeAddCuspinValue}
                  results={cuspinSuggestionResult}
                  onClick={onClickAddCuspinSuggestionItem}
                  value={cuspinValue}
                  keySearch={cuspinSearchValue}
                ></Inputsuggestion>
              </div>
            </div>
            <div className="veprLabelAndValue">
              <div className="veprLabel">Expiration/ Maturity Date:</div>
              <div className="veprValue">
                <Datepicker
                  selectedDate={expOrMaturityDate}
                  setDate={setAddExpOrMaturityDate}
                  disabled={false}
                />
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
                  onChange={onChangeAddClassificationValue}
                ></Dropdown>
              </div>
            </div>
            <div className="veprLabelAndValue">
              <div className="veprLabel">ISIN:</div>
              <div className="veprValue">
                <Inputsuggestion
                  onChange={onChangeAddPriceResIsInValue}
                  results={isInSuggestionResult}
                  onClick={onClickAddPriceResIsInSuggestionItem}
                  value={isInValue}
                  keySearch={isInSearchValue}
                ></Inputsuggestion>
              </div>
            </div>
            <div className="veprLabelAndValue">
              <div className="veprLabel">Strike Price Low:</div>
              <div className="veprValue">
                <Inputsuggestion
                  onChange={onChangeStrikePriceLowValue}
                  results={strikePriceLowSuggestionResult}
                  onClick={onClickStrikePriceLowSuggestionItem}
                  value={strikePriceLowValue}
                  keySearch={strikePriceLowSearchValue}
                ></Inputsuggestion>
              </div>
            </div>
            <div className="veprLabelAndValue">
              <div className="veprLabel">Strike Price High:</div>
              <div className="veprValue">
                <Inputsuggestion
                  onChange={onChangeStrikePriceHighValue}
                  results={strikePriceHighSuggestionResult}
                  onClick={onClickStrikePriceHighSuggestionItem}
                  value={strikePriceHighValue}
                  keySearch={strikePriceHighSearchValue}
                ></Inputsuggestion>
              </div>
            </div>
          </div>
          <div className="sectionThree">
            <div className="veprLabelAndValue">
              <div className="veprLabel">Symbol:</div>
              <div className="veprValue">
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
            <div className="veprLabelAndValue">
              <div className="veprLabel">Call Put:</div>
              <div className="veprValue">
                <Dropdown
                  options={callPutOptions}
                  selectedValue={selectedCallPutValue}
                  onChange={onChangeAddPriceResCallPutValue}
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
          </div>
        </fieldset>
        <fieldset className="veprPriceSourceWrapper">
          <legend>Price Source</legend>
          <div className="sectionOne">
            <div className="veprLabelAndValue">
              <div className="veprLabel">Vendor:</div>
              <div className="veprValue">
                <Dropdown
                  type="single"
                  options={vendorOptins}
                  onChange={onChangeAddVendorValue}
                  selectedValue={selectedVendorValue}
                ></Dropdown>
              </div>
            </div>
          </div>
          <div className="sectionTwo">
            <div className="exchangesRadioGroup">
              <ExchangesRadioGroup
                radioButtonsData={exchangeTypeData}
                onChange={onChangeExchangeCat}
                value={exchangeTypeValue}
              ></ExchangesRadioGroup>
            </div>
          </div>
          <fieldset className="sectionThree">
            <legend>Exchanges</legend>
            <MultiSelectBox
              data={exchangeItemsResult}
              toggleSelection={onSelectDeSelectExchangesOption}
            ></MultiSelectBox>
          </fieldset>
        </fieldset>
        <fieldset className="veprResDateWrapper">
          <legend>Restriction Date</legend>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Restriction Start Date:</div>
            <div className="veprValue">
              <Datepicker
                selectedDate={restrictionStDate}
                setDate={setRestrictionStDate}
                disabled={false}
              />
            </div>
          </div>
          <div className="veprLabelAndValue">
            <div className="veprLabel">Restriction Start Date:</div>
            <div className="veprValue">
              <Datepicker
                selectedDate={restrictionEndDate}
                setDate={setRestrictionEndDate}
                disabled={false}
              />
            </div>
          </div>
        </fieldset>
        <div className="okAndClearButton">
          <button className="okButton">OK</button>
          <button className="clearButton" onClick={onResetAddThresholds}>
            Clear
          </button>
        </div>
      </fieldset>

      <fieldset className="veprVendorExchangePriceWrapper">
        <legend>Vendor Exchange Price Restriction</legend>
        <div className="veprAddPriceResGrid">
          <Aggrid
            rowData={vendorExchangeRowData}
            colDefsMedalsIncluded={colDefs}
            defaultColDef={defaultColDef}
            gridHeight={250}
            gridWidth={"100%"}
            rowSelection="multiple"
            rowHeight={22}
            //headerHeight={33}
          />
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
        <div className="header">Add New Price Restriction</div>
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
