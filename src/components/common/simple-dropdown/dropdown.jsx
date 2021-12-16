import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import PropTypes from "prop-types";

const SimpleDropdown = (props) => {
  //const defaultOption = props.options[0];

  return (
    <Dropdown
      id={props.id}
      options={props.options}
      onChange={props.onChange}
      value={props.selectedValue}
      placeholder="Select an option"
      disabled={props.disabled}
    />
  );
};
SimpleDropdown.propTypes = {
  options: PropTypes.array,
};
SimpleDropdown.defaultProps = {
  options: [],
};

export default SimpleDropdown;
