import React from "react";
import "./suggestions.scss";
const Suggestions = (props) => {
  let keySearch = props.keySearch;

  const options =
    props.results &&
    props.results.map((suggestion, index) => {
      return (
        <div className="suggestionLiItemWrapper">
          <div
            onClick={() => props.onClick(suggestion.value)}
            title={suggestion.value}
            key={index}
          >
            {suggestion.value}
          </div>
        </div>
      );
    });
  return options ? (
    <div
      className="suggestionsWrapper"
      style={{ display: keySearch !== "" ? "block" : "none" }}
    >
      <ul>{options}</ul>
    </div>
  ) : (
    <></>
  );
};
Suggestions.defaultProps = {
  options: [],
};
export default Suggestions;
