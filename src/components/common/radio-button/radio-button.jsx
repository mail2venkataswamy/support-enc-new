import React from "react";

const RadioButton = (props) => {
  return (
    <>
      {props.radioButtonsData.map((radioItem) => {
        return (
          <label>
            <input
              for={radioItem.for}
              type={radioItem.type}
              name={radioItem.name}
              value={radioItem.value}
              onChange={props.onChange}
            ></input>
            {radioItem.label}
          </label>
        );
      })}
    </>
  );
};
export default RadioButton;
