import React from "react";

const Select = (props) => {
  return (
    <select id={props.id} onChange={props.onChange} value={props.selectedValue}>
      {props.options.map((option) => {
        return <option value={option.value}>{option.label}</option>;
      })}
    </select>
  );
};

export default Select;
