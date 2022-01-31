import React, { useContext } from "react";
import psContext from "../../../../components/context/publishing-statistics-context.jsx";
import Inputsuggestion from "../ps-input-suggestions/ps-input-suggestions.jsx";
import "./ps-filters.scss";
import DatePicker from "../../../../components/common/datepicker/datepicker.jsx";
import FilterAndReset from "./ps-filter-and-reset/ps-filter-and-reset.jsx";
import Dropdown from "../../../../components/common/simple-dropdown/dropdown.jsx";

const Filters = () => {
  const context = useContext(psContext);
  const {
    selectedPricePublishDate,
    onChangePricePublishDate,
    publishTypeOptions,
    onPublishTypeChange,
    selectedPublishTypeValue,
    onChangePublishedByValue,
    pusblishedBySuggestionResult,
    onClickPublishedBySuggestionItem,
    publishedByValue,
    publishedBySearchValue

  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <div className="psDumpFilterscreenHeaderWrapper">
        <div className="psDumpFilterscreenTitle">Publishing Statistics</div>
      </div>
      <fieldset className="filtersWrapper">
        <legend>Price Publish Date:</legend>
        <div className="psLabelAndValue">
          <div className="psLabel">Date:</div>
          <div className="psValue">
            <DatePicker
              selectedDate={selectedPricePublishDate}
              setDate={onChangePricePublishDate}>
            </DatePicker>
          </div>
        </div>
        </fieldset>
        <fieldset className="filtersWrapper">
        <legend>Publish Details</legend>
        <div className="psLabelAndValue">
          <div className="psLabel">Publish type:</div>
          <div className="psValue">
          <Dropdown
                options={publishTypeOptions}
                onChange={onPublishTypeChange}
                value={selectedPublishTypeValue}
                placeholder="Select"
                //disabled={disabled}
                />
          </div>
        </div>
        <div className="psLabelAndValue">
          <div className="psLabel">Published By:</div>
          <div className="psValue">
            <Inputsuggestion
              onChange={onChangePublishedByValue}
              results={pusblishedBySuggestionResult}
              onClick={onClickPublishedBySuggestionItem}
              value={publishedByValue}
              keySearch={publishedBySearchValue}
            ></Inputsuggestion>
          </div>
        </div>
        </fieldset>
        <FilterAndReset></FilterAndReset>
    </>
  );
};

export default Filters;
