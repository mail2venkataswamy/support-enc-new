import React from "react";
import "./check-box.scss";

const CheckBox = (props) => {
  return (
    <>
      {props.checkboxData && props.checkboxData.length > 0 ? (
        <label>
          <input
            type="checkbox"
            onClick={props.onAllChecked}
            value="checkedall"
            checked={props.isAllChecked}
          ></input>
          All
        </label>
      ) : (
        ""
      )}
      <ul>
        {props.checkboxData.map((type, index) => {
          return (
            <li>
              <label>
                <input
                  key={index}
                  onClick={props.onCheckbox}
                  type="checkbox"
                  checked={type.isChecked}
                  value={type.value}
                />
                {type.label}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CheckBox;
