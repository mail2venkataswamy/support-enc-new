import React from "react";
import Suggestions from "../../../../../../../components/common/suggestions/suggestions.jsx";
import "./mt-input-suggestions.scss";
const InputSuggestion = (props) => {
  return (
    <div className="inputSuggestionWrapper">
      <input
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
      ></input>
      <Suggestions
        results={props.results}
        keySearch={props.keySearch}
        onClick={props.onClick}
        value={props.value}
      ></Suggestions>
    </div>
  );
};
export default InputSuggestion;
