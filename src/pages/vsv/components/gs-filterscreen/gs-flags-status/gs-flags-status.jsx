import React, { useContext } from "react";
import SelectBox from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./gs-flags-status.scss";
import GovContext from "../../../../../components/context/gov-context.jsx";

const Flagsstatus = () => {
  const context = useContext(GovContext);
  const {
    reviewNeededOptions,
    onChangeReviewNeededValue,
    selectedreviewNeededValue,
    onSelectEditedRecordValue,
    isEditedRecordChecked,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };

  return (
    <>
      <fieldset>
        <legend>Flags And status Filter</legend>
        <div className="labelAndReviewNeededWrapper">
          <div className="reviewNeededLabel">Review Needed:</div>
          <div className="reviewNeededWrapper">
            <SelectBox
              type="single"
              options={reviewNeededOptions}
              onChange={onChangeReviewNeededValue}
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
              onClick={(e) => onSelectEditedRecordValue(e)}
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
