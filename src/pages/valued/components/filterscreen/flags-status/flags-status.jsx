import React from "react";
import SelectBox from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./flags-status.scss";
//import ValuedContext from "../../../../../components/context/valued-context.jsx";

const Flagsstatus = (props) => {
  const {
    reviewNeededOptions,
    flaggedEditOptions,
    isEditedRecordChecked,
    selectedFlaggedEditValue,
    selectedreviewNeededValue,
  } = props.data.filterPanelData;

  return (
    <>
      <fieldset>
        <legend>Flags And status Filter</legend>

        <div className="labelAndFlaggedWrapper">
          <div className="flaggedEditLabel">Flagged Edits:</div>
          <div className="flaggedEditwrapper">
            <SelectBox
              type="single"
              options={flaggedEditOptions}
              onChange={props.onChangeFlaggedEditValue}
              selectedValue={selectedFlaggedEditValue}
            ></SelectBox>
          </div>
        </div>
        <p></p>
        <div className="labelAndReviewNeededWrapper">
          <div className="reviewNeededLabel">Review Needed:</div>
          <div className="reviewNeededWrapper">
            <SelectBox
              type="single"
              options={reviewNeededOptions}
              onChange={props.onChangeReviewNeededValue}
              selectedValue={selectedreviewNeededValue}
            ></SelectBox>
          </div>
        </div>
        <div className="editedRecordsWrapper">
          <label>
            <input
              id={"editedRecord"}
              type="checkbox"
              value="editedRecord"
              onClick={props.onSelectEditedRecordValue}
              checked={isEditedRecordChecked}
            ></input>
            {"Edited Records"}
          </label>
        </div>
      </fieldset>
    </>
  );
};
export default Flagsstatus;
