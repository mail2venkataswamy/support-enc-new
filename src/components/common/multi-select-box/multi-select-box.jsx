import React from "react";
import PropTypes from "prop-types";
import "./multi-select-box.scss";

const MultiSelectBox = (props) => {
  return (
    <div className="multiSelectBoxItemsWrapper">
      {props.data.map((option) => {
        return (
          <div
            className={`option ${
              option.isSelected ? "selected" : "unSelected"
            }`}
            onClick={() => props.toggleSelection(option)}
            onKeyDown={() => props.toggleSelection(option)}
            role="button"
            tabIndex={0}
            id="option"
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
MultiSelectBox.defaultProps = {
  data: [
    { label: "test", value: "test" },
    { label: "test1", value: "test1" },
    { label: "test2", value: "test2" },
    { label: "test3", value: "test3" },
    { label: "test4", value: "test4" },
    { label: "test5", value: "test5" },
    { label: "test6", value: "test6" },
  ],
};
MultiSelectBox.propTypes = {
  data: PropTypes.array,
  onSelectDeSelectOption: PropTypes.func,
};
export default MultiSelectBox;
