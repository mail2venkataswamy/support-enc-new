import React, { useContext } from "react";
import PvsfContext from "../../../../../components/context/pvsf-context.jsx";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";
import "./st-product-info.scss";

const ProductInfo = () => {
  const context = useContext(PvsfContext);
  const {
    productTypeOptions,
    selectedProductTypeValue,
    onChangeProductTypeValue,
    classificationOptions,
    selectedClassificationValue,
    onChangeClassificationValue,
    subClassificationOptions,
    selectedSubClassificationValue,
    onChangeSubClassificationValue,
    securityTypeOptions,
    selectedSecurityTypeValue,
    onChangeSecurityTypeValue,
    applicationOptions,
    selectedApplicationValue,
    onChangeApplicationValue,
    cycleOptions,
    selectedCycleValue,
    onChangeCycleValue,
    primaryVendorOptions,
    selectedPrimaryVendorValue,
    selectedSecondaryVendorValue,
    selectedTeritaryVendorValue,
    onChangePrimaryVendorValue,
    onChangeSecondaryVendorValue,
    onChangeTeritaryVendorValue,
  } = {
    ...context.state.filterPanelData,
    ...context,
  };
  return (
    <>
      <fieldset className="pvsfProductWrapper">
        <legend>Product</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Product Type:</div>
          <div className="pvsfValue">
            <Dropdown
              options={productTypeOptions}
              selectedValue={selectedProductTypeValue}
              onChange={onChangeProductTypeValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Classification:</div>
          <div className="pvsfValue">
            <Dropdown
              options={classificationOptions}
              selectedValue={selectedClassificationValue}
              onChange={onChangeClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Sub Classification:</div>
          <div className="pvsfValue">
            <Dropdown
              options={subClassificationOptions}
              selectedValue={selectedSubClassificationValue}
              onChange={onChangeSubClassificationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Security Type:</div>
          <div className="pvsfValue">
            <Dropdown
              options={securityTypeOptions}
              selectedValue={selectedSecurityTypeValue}
              onChange={onChangeSecurityTypeValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="pvsfProductWrapper">
        <legend>Applications & Run Time:</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Application:</div>
          <div className="pvsfValue">
            <Dropdown
              options={applicationOptions}
              selectedValue={selectedApplicationValue}
              onChange={onChangeApplicationValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Cycle:</div>
          <div className="pvsfValue">
            <Dropdown
              options={cycleOptions}
              selectedValue={selectedCycleValue}
              onChange={onChangeCycleValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
      <fieldset className="pvsfProductWrapper">
        <legend>Price Source:</legend>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Primary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedPrimaryVendorValue}
              onChange={onChangePrimaryVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Secondary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedSecondaryVendorValue}
              onChange={onChangeSecondaryVendorValue}
            ></Dropdown>
          </div>
        </div>
        <div className="pvsfLabelAndValue">
          <div className="pvsfLabel">Teritary Vendor:</div>
          <div className="pvsfValue">
            <Dropdown
              options={primaryVendorOptions}
              selectedValue={selectedTeritaryVendorValue}
              onChange={onChangeTeritaryVendorValue}
            ></Dropdown>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ProductInfo;
