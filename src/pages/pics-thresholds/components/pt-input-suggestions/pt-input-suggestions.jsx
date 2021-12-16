import React from "react";
import Suggestions from "../../../../components/common/suggestions/suggestions.jsx";
import "./pt-input-suggestions.scss";
import PropTypes from "prop-types";
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
InputSuggestion.propTypes = {
  results: PropTypes.any,
  keySearch: PropTypes.any,
  onClick: PropTypes.any,
  value: PropTypes.any,
  disabled: PropTypes.any,
  onChange: PropTypes.any,
};
InputSuggestion.defaultProps = {};
export default InputSuggestion;
