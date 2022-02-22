import React, { useContext } from "react";
import PeoContext from "../../../../../components/context/futures-context.jsx";
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
  } = {
    ...context.state.filtersState,
    ...context,
  };
  return (
    <div className="filtersContianer">
      <fieldset className="futuresFiltersWrapper">
        <legend>Activity Date Range:</legend>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Activity:</div>
          <div className="futuresValue">
            <Dropdown
              options={activityOptions}
              selectedValue={activityValue}
              onChange={onChangeActivityValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Activity Date:</div>
          <div className="futuresValue">
            <Datepicker
              selectedDate={selectedActivityDate}
              setDate={setActivityDate}
              disabled={false}
            />
          </div>
        </div>
      </fieldset>
      <fieldset className="futuresFiltersWrapper">
        <legend>Derivative Information:</legend>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Product Type:</div>
          <div className="futuresValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Classification:</div>
          <div className="futuresValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Symbol:</div>
          <div className="futuresValue">
            <Inputsuggestion
              onChange={onChangeSymbolToValue}
              results={symbolToSuggestionResult}
              onClick={onClickSymbolToSuggestionItem}
              value={symbolToValue}
              keySearch={symbolToSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Exchange:</div>
          <div className="futuresValue">
            <Inputsuggestion
              onChange={onChangeExchangeValue}
              results={exchangeSuggestionResult}
              onClick={onClickExchangeSuggestionItem}
              value={exchangeValue}
              keySearch={exchangeSearchValue}
              //disabled={isSymbolToDisabled}
            ></Inputsuggestion>
          </div>
        </div>
      </fieldset>
      <fieldset className="futuresFiltersWrapper">
        <legend>Product Designation:</legend>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Cleared:</div>
          <div className="futuresValue">
            <Dropdown
              options={clearedOptions}
              selectedValue={selectedClearedValue}
              onChange={onChangeClearedValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel"></div>
          <div className="futuresValue">
            <input
              type="checkbox"
              name="ca"
              checked={isCorporateActionChecked}
              onChange={onChangeCorporateAction}
            ></input>
            <label for="ca">Corporate Action</label>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel"></div>
          <div className="futuresValue">
            <input
              type="checkbox"
              name="ls"
              checked={isLateSeriesChecked}
              onChange={onChangeLateSeries}
            ></input>
            <label lateSeries="ls">Late Series</label>
          </div>
        </div>
      </fieldset>
      <fieldset className="futuresFiltersWrapper">
        <legend>Flag And Status:</legend>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Status:</div>
          <div className="futuresValue">
            <Dropdown
              options={statusOptions}
              selectedValue={selectedStatusValue}
              onChange={onChangeStatusValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel">Review Needed:</div>
          <div className="futuresValue">
            <Dropdown
              options={reviewNeededOptions}
              selectedValue={selectedReviewNeededValue}
              onChange={onChangeReviewNeededValue}
            ></Dropdown>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel"></div>
          <div className="futuresValue">
            <input
              type="checkbox"
              name="ls"
              checked={isLateSeriesChecked}
              onChange={onChangeLateSeries}
            ></input>
            <label lateSeries="ls">Editted Records</label>
          </div>
        </div>
        <div className="futuresLabelAndValue">
          <div className="futuresLabel"></div>
          <div className="futuresValue">
            <input
              type="checkbox"
              name="ls"
              checked={isLateSeriesChecked}
              onChange={onChangeLateSeries}
            ></input>
            <label lateSeries="ls">Negative Price Futures</label>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ProductInfo;
