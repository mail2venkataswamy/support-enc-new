import React, { useContext } from "react";
import PropTypes from "prop-types";
import PrsContext from "../../../../../components/context/prs-context";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./edit-cat-stats.scss";
const EditCatStats = () => {
  const context = useContext(PrsContext);
  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeProductTypeValue,
    editCatNameOptions,
    selectedEditCatNameValue,
    onChangeEditCatNameValue,
  } = { ...context.state.filterPanelData, ...context };
  return (
    <>
      <fieldset>
        <legend>Edit Category Stats</legend>
        <div className="labelAndProductTypeWrapper">
          <div className="productTypeLabel">Product Type</div>
          <div className="productTypeDropdownWrapper">
            <Dropdown
              options={productTypeOptions}
              id={"ProductType"}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="labelAndEditCatNameWrapper">
          <div className="editCatNameLabel">Edit Category Name</div>
          <div className="editCatNameDropdownWrapper">
            <Dropdown
              options={editCatNameOptions}
              id={"editCatName"}
              selectedValue={selectedEditCatNameValue}
              onChange={onChangeEditCatNameValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
    </>
  );
};
EditCatStats.propTypes = {};
EditCatStats.defaultProps = {
  options: [],
  selectedValue: {},
};

export default EditCatStats;
