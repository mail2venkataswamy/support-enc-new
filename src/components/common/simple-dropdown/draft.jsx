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