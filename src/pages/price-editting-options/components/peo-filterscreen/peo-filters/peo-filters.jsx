import React, { useContext } from "react";
import PeoContext from "../../../../../components/context/peo-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import Inputsuggestion from "../../peo-input-suggestions/peo-input-suggestions.jsx";
import Datepicker from "../../../../../components/common/datepicker/datepicker.jsx";
import "./peo-filters.scss";

const ProductInfo = () => {
  const context = useContext(PeoContext);
  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeProductTypeValue,
    onChangeSymbolToValue,
    onClickSymbolToSuggestionItem,
    symbolToSuggestionResult,
    symbolToValue,
    symbolToSearchValue,
    classificationOptions,
    selectedClassificationValue,
    onChangeClassificationValue,
    activityData,

    activityOptions,
    activityValue,
    onChangeActivityValue,
    setActivityDate,
    selectedActivityDate,
    SubClassificationOptions,
    selectedSubClassificationValue,
    onChangeSubClassificationValue,

    onChangeExchangeValue,
    onClickExchangeSuggestionItem,
    exchangeSuggestionResult,
    exchangeValue,
    exchangeSearchValue,

    isFmsChecked,
    onChangeFms,
    isCorporateActionChecked,
    onChangeCorporateAction,
    isLateSeriesChecked,
    onChangeLateSeries,
    onChangeClearedValue,
    clearedOptions,
    selectedClearedValue,

    statusOptions,
    categoryLevelOptions,
    reviewNeededOptions,
    selectedStatusValue,
    selectedCategoryLevelValue,
    selectedReviewNeededValue,

    onChangeStatusValue,
    onChangeCategoryLevelValue,
    onChangeReviewNeededValue,
    isEdittedRecordsChecked,
    onChangeEdittedRecords,
    isSpotPriceRecordsChecked,
    onChangeSpotPriceRecords,
  } = {
    ...context.state.filtersState,
    ...context,
  };
  return (
    <div className="filtersContianer">
      <fieldset className="peoFiltersWrapper">
        <legend>Activity Date Range:</legend>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Activity:</div>
          <div className="peoValue">
            <Dropdown
              options={activityOptions}
              selectedValue={activityValue}
              onChange={onChangeActivityValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Activity Date:</div>
          <div className="peoValue">
            <Datepicker
              selectedDate={selectedActivityDate}
              setDate={setActivityDate}
              disabled={false}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="peoFiltersWrapper">
        <legend>Derivative Information:</legend>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Product Type:</div>
          <div className="peoValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Classification:</div>
          <div className="peoValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Sub Class:</div>
          <div className="peoValue">
            <Dropdown
              options={SubClassificationOptions}
              selectedValue={selectedSubClassificationValue}
              onChange={onChangeSubClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Symbol:</div>
          <div className="peoValue">
            <Inputsuggestion
              onChange={onChangeSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
              //disabled={isSymbolToDisabled}
              type="textbox"
            ></Inputsuggestion>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Exchange:</div>
          <div className="peoValue">
            <Inputsuggestion
              onChange={onChangeExchangeValue}
              results={exchangeSuggestionResult}
              onClick={onClickExchangeSuggestionItem}
              value={exchangeValue}
              keySearch={exchangeSearchValue}
              //disabled={isSymbolToDisabled}
              type="textbox"
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
      <fieldset className="peoFiltersWrapper">
        <legend>Product Description:</legend>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="fms"
              checked={isFmsChecked}
              onChange={onChangeFms}
            ></input>
            <label for="fms">FMS</label>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="ca"
              checked={isCorporateActionChecked}
              onChange={onChangeCorporateAction}
            ></input>
            <label for="ca">Corporate Action</label>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="ls"
              checked={isLateSeriesChecked}
              onChange={onChangeLateSeries}
            ></input>
            <label lateSeries="ls">Late Series</label>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Cleared:</div>
          <div className="peoValue">
            <Dropdown
              options={clearedOptions}
              selectedValue={selectedClearedValue}
              onChange={onChangeClearedValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="peoFiltersWrapper">
        <legend>Flag And Status:</legend>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Status:</div>
          <div className="peoValue">
            <Dropdown
              options={statusOptions}
              selectedValue={selectedStatusValue}
              onChange={onChangeStatusValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Category Level:</div>
          <div className="peoValue">
            <Dropdown
              options={categoryLevelOptions}
              selectedValue={selectedCategoryLevelValue}
              onChange={onChangeCategoryLevelValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel">Review Needed:</div>
          <div className="peoValue">
            <Dropdown
              options={reviewNeededOptions}
              selectedValue={selectedReviewNeededValue}
              onChange={onChangeReviewNeededValue}
            ></Dropdown>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="ls"
              checked={isEdittedRecordsChecked}
              onChange={onChangeEdittedRecords}
            ></input>
            <label lateSeries="ls">Editted Records</label>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="ls"
              checked={isSpotPriceRecordsChecked}
              onChange={onChangeSpotPriceRecords}
            ></input>
            <label lateSeries="ls">Theo Spot Price Records</label>
          </div>
        </div>
        <div className="peoLabelAndValue">
          <div className="peoLabel"></div>
          <div className="peoValue">
            <input
              type="checkbox"
              name="ls"
              //checked={isSpotPriceRecordsChecked}
              //onChange={onChangeSpotPriceRecords}
            ></input>
            <label lateSeries="ls">SOO Records</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ProductInfo;
