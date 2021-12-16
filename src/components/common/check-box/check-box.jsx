import React from "react";
import "./check-box.scss";
import PropTypes from "prop-types";

const CheckBox = (props) => {
  return (
    <>
      {props.checkboxData &&
      props.checkboxData.length > 0 &&
      props.checkboxData[0].label.toLowerCase() === "All".toLowerCase() ? (
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
      <div className="listItemWrapper"></div>
      <ul>
        <div className="listItemWrapper">
          {props.checkboxData.map((type, index) => {
            return (
              <div className={type.list}>
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
              </div>
            );
          })}{" "}
        </div>
      </ul>
    </>
  );
};

CheckBox.propTypes = {
  checkboxData: PropTypes.array,
};
CheckBox.defaultProps = {
  checkboxData: [],
};
export default CheckBox;
