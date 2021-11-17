import React from "react";
import "./tier-level.scss";

const Tierlevel = (props) => {
  return (
    <div className="tierLevelWrapper">
      {props.tierLevelData.map((tier, index) => {
        return (
          <div className={tier.value}>
            <input id={tier.value} type="checkbox"></input>
            <label>{tier.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Tierlevel;
