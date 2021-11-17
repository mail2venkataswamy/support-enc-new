import React from "react";

const Select = (props) => {
  return (
    <select
      id={props.id}
      onChange={props.onChange}
      value={props.data.selectedReviewValue}
    >
      <option value={"Review"}>Review</option>
      <option value={"Review Final"}>Review Final</option>
      <option value={"Review Stocl Loan"}>Review Stock Loan</option>
      <option value={"Review Both"}>Review Both </option>
    </select>
  );
};

export default Select;
