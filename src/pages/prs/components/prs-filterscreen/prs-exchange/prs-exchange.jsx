import React, { useContext } from "react";
import PropTypes from "prop-types";
import PrsContext from "../../../../../components/context/prs-context";
import "./prs-exchange.scss";
import Checkbox from "../../../../../components/common/check-box/check-box.jsx";
const Exchange = () => {
  const context = useContext(PrsContext);
  const { isAllExchangeChecked, exchangeTypeData, onSelectExchangeCheckbox } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset>
        <legend>Exchanges</legend>
        <div className="labelAndProductTypeWrapper">
          <div className="exchangeLabel">Exchange:</div>
          <div className="exchangeDropdownWrapper">
            <Checkbox
              isAllChecked={isAllExchangeChecked}
              checkboxData={exchangeTypeData}
              onCheckbox={onSelectExchangeCheckbox}
              //onAllChecked={onAllTypeChecked}
            ></Checkbox>
          </div>
        </div>
      </fieldset>
    </>
  );
};
Exchange.propTypes = {};
Exchange.defaultProps = {
  options: [],
  selectedValue: {},
};

export default Exchange;
