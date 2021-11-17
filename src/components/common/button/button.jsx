import React from "react";

const ButtonWrapper = (props) => {
  const {} = props;
  return (
    <button id={props.id} className={props.classes} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default ButtonWrapper;
