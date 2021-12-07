import React from "react";
import "./filterscreen.scss";
import ActivityDateRange from "./activity-date-range/activity-date-range.jsx";
import Productinfo from "./product-info/product-info.jsx";
import Flagsstatus from "./flags-status/flags-status.jsx";
import ResetAndButton from "./filter-and-reset/filter-and-reset.jsx";

const filterscreen = (props) => {
  return (
    <div className="filterPanel left">
      <div className="filterTitleAndToggle">
        {/*     <div className="titleIcon">
        <img
            className="fpIcon"
            src={require("../../../../../assets/iconSecurities.svg")}
            alt="Securities"
          /> */}

        <div className="filterHeaderTitle">Filter Screen</div>
      </div>
      <ActivityDateRange
        data={props.data}
        onChangeCurrHistValue={props.onChangeCurrHistValue}
        setFromDate={props.setFromDate}
        setToDate={props.setToDate}
      ></ActivityDateRange>
      <Productinfo
        onChangeCuspinValue={props.onChangeCuspinValue}
        data={props.data}
        onClickSuggestionItem={props.onClickSuggestionItem}
        onChangeIsinValue={props.onChangeIsinValue}
        onClickIsinSuggestionItem={props.onClickIsinSuggestionItem}
        onChangeOccSymbolValue={props.onChangeOccSymbolValue}
        onClickOccSymbolSuggestionItem={props.onClickOccSymbolSuggestionItem}
        onSelectTypeCheckbox={props.onSelectTypeCheckbox}
        onAllTypeChecked={props.onAllTypeChecked}
        onSelectTireCheckbox={props.onSelectTireCheckbox}
        onAllTireChecked={props.onAllTireChecked}
        onChangeCrossMarginEligibleValue={
          props.onChangeCrossMarginEligibleValue
        }
        onChangeCurrencyValue={props.onChangeCurrencyValue}
        onChangeClearedValue={props.onChangeClearedValue}
        onChangeCorporateAction={props.onChangeCorporateAction}
      ></Productinfo>
      <fieldset>
        <legend>Eligibility</legend>
        <div className="vsEligibilityWrapper">
          <div className="vsEligibilityLabel">RBH:</div>
          <div className="vsEligibilityValue">
            <input
              type="checkbox"
              value="rbhEligible"
              checked={props.data.filterPanelData.isVsfRbhChecked}
              onChange={props.onChangeRbh}
            ></input>
          </div>
        </div>
      </fieldset>

      <Flagsstatus
        data={props.data}
        onChangeFlaggedEditValue={props.onChangeFlaggedEditValue}
        onChangeReviewNeededValue={props.onChangeReviewNeededValue}
        onSelectEditedRecordValue={props.onSelectEditedRecordValue}
      ></Flagsstatus>
      <ResetAndButton
        onClickFiler={props.onClickFiler}
        onClickReset={props.onClickReset}
      ></ResetAndButton>
    </div>
  );
};
export default filterscreen;
