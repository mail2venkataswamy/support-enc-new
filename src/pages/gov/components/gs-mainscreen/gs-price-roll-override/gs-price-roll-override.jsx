import React, { useContext } from "react";
import Modal from "react-modal";
import "./gs-price-roll-override.scss";
import RadioButton from "../../../../../components/common/radio-button/radio-button.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../gs-filterscreen/gs-input-suggestions/gs-input-suggestions.jsx";

const PriceRollOverrideModalContent = (props) => {
  const {
    priceTypeData,
    priceRollOverridePriceTypeValue,
    onChangeSurpressRestartCuspinValue,
    surpressRestartCuspinSuggestionResult,
    onClickSurpressRestartSuggestionItem,
    surpressRestartCuspinValue,
    surpressRestartCuspinSearchValue,
    onChangePriceTypeValue,
    onChangeDebtTypeValue,
    selectedDebtTypeValue,
    debtTypeOptions,
  } = { ...props.data, ...props };
  return (
    <div>
      <fieldset>
        <legend></legend>
        <div className="priceRollOverContentWrapper">
          <div className="priceTypeLabelTypeWrapper">
            <div className="priceTypeLabel"></div>
            <div className="priceTypeValueWrapper">
              <RadioButton
                radioButtonsData={priceTypeData}
                onChange={onChangePriceTypeValue}
                value={priceRollOverridePriceTypeValue}
              ></RadioButton>
            </div>
          </div>
          <p></p>
          <div className="overrideLabelDatePickerWrapper">
            <div className="overrideDatePickerLabel">Cuspin:</div>
            <div className="datePickerWrapper">
              <Inputsuggestion
                onChange={onChangeSurpressRestartCuspinValue}
                results={surpressRestartCuspinSuggestionResult}
                onClick={onClickSurpressRestartSuggestionItem}
                value={surpressRestartCuspinValue}
                keySearch={surpressRestartCuspinSearchValue}
              ></Inputsuggestion>
            </div>
          </div>
          <p></p>

          <p></p>
          <div className="overrideLabelValueWrapper">
            <div className="overrideValueLabel">Debt Type:</div>
            <div className="overrideValueWrapper">
              <Dropdown
                options={debtTypeOptions}
                //id={"histCurr"}
                selectedValue={selectedDebtTypeValue}
                onChange={onChangeDebtTypeValue}
              ></Dropdown>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

const PriceRollOverride = (props) => {
  return (
    <div className="priceOverrideModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Surpress/Restart Reval Adjustment</div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <PriceRollOverrideModalContent
          data={props.data}
          onChangePriceOverrideValue={props.onChangePriceOverrideValue}
          setPriceOverrideTillDate={props.setPriceOverrideTillDate}
          onChangePriceTypeValue={props.onChangePriceTypeValue}
          onChangeSurpressRestartCuspinValue={
            props.onChangeSurpressRestartCuspinValue
          }
          onClickSurpressRestartSuggestionItem={
            props.onClickSurpressRestartSuggestionItem
          }
          onChangePriceTypeValue={props.onChangePriceTypeValue}
          onChangeDebtTypeValue={props.onChangeDebtTypeValue}
        ></PriceRollOverrideModalContent>
      </div>
      <div className="footer">
        <button id="publishButton" onClick={props.onSavePriceOverrideValue}>
          Save
        </button>
        <button id="resetButton" onClick={props.onClikSurpressRestartReset}>
          Save
        </button>
        <button id="cancelButton" onClick={props.closeModal}>
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
const PriceRollOverrideModal = () => {
  const context = useContext(GovContext);
  const {
    isPriceRollOverrideModalOpen,
    closePriceRollOverrideModal,
    onChangePriceOverrideValue,
    setPriceOverrideTillDate,
    onChangePriceTypeValue,
    onSavePriceOverrideValue,
    priceTypeData,
    priceRollOverrideValue,
    priceRollOverrideTillDate,
    priceRollOverridePriceTypeValue,
    onChangeSurpressRestartCuspinValue,
    surpressRestartCuspinSuggestionResult,
    onClickSurpressRestartSuggestionItem,
    surpressRestartCuspinValue,
    surpressRestartCuspinSearchValue,
    onChangeDebtTypeValue,
    selectedDebtTypeValue,
    debtTypeOptions,
    onClikSurpressRestartReset,
  } = {
    ...context.state.maintenanceScreenData,
    ...context,
  };
  return (
    <Modal isOpen={isPriceRollOverrideModalOpen} style={customStyles}>
      <PriceRollOverride
        closeModal={closePriceRollOverrideModal}
        data={{
          priceTypeData: priceTypeData,
          priceRollOverrideValue: priceRollOverrideValue,
          priceRollOverrideTillDate: priceRollOverrideTillDate,
          priceRollOverridePriceTypeValue: priceRollOverridePriceTypeValue,
          surpressRestartCuspinSuggestionResult:
            surpressRestartCuspinSuggestionResult,
          surpressRestartCuspinValue: surpressRestartCuspinValue,
          surpressRestartCuspinSearchValue: surpressRestartCuspinSearchValue,
          selectedDebtTypeValue: selectedDebtTypeValue,
          debtTypeOptions: debtTypeOptions,
        }}
        onChangePriceOverrideValue={onChangePriceOverrideValue}
        setPriceOverrideTillDate={setPriceOverrideTillDate}
        onChangePriceTypeValue={onChangePriceTypeValue}
        onSavePriceOverrideValue={onSavePriceOverrideValue}
        onChangeSurpressRestartCuspinValue={onChangeSurpressRestartCuspinValue}
        onClickSurpressRestartSuggestionItem={
          onClickSurpressRestartSuggestionItem
        }
        onChangeDebtTypeValue={onChangeDebtTypeValue}
        onClikSurpressRestartReset={onClikSurpressRestartReset}
      ></PriceRollOverride>
    </Modal>
  );
};

export { PriceRollOverrideModal as PriceRollOverrideModal };
