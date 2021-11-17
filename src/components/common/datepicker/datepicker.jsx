import React from "react";
//import DatePicker from "react-date-picker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = (props) => {
  return (
    <DatePicker
      selected={props.selectedDate}
      onChange={props.setDate}
      selectsStart
      //includeDates={getArrayOfDates(props.fromDate, props.toDate, -30)}
      //disabled={props.isFromAndStDisabled}
    />
  );
};
/* const Datepicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}; */

export default Datepicker;
