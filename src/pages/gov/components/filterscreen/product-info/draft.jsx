import React from "react";
import { SelectBox } from "../../../../../Components/SelectBox/SelectBox.jsx";
import InputWrapper from "../../../../../Compositions/GlobalConfigurations/Commons/Input/InputWrapper.jsx";
import "./product-info.scss";
import Tierlevel from "../tier-level/tier-level.jsx";
import "./product-info.scss";

const ProductInfo = () => {
  let selectClearedOptions = [
    { label: "BOTH", value: "ClearedAndNonCleared" },
    { label: "Cleared", value: "Cleared" },
    { label: "Non Cleared", value: "Non Cleared" },
  ];
  let selectCrossMarginOptions = [
    { label: "BOTH", value: "CrossMarginAndNonCrossMragin" },
    { label: "Cross Margin Eligible", value: "CrossMargin" },
    { label: "Non Cross Margin Eligible", value: "NonCrossMargin" },
  ];
  let selectCurrencyOptions = [
    { label: "ALL", value: "All" },
    { label: "USD", value: "USD" },
    { label: "AUD", value: "Aud" },
    { label: "CAD", value: "Cad" },
  ];
  let tierLevelData = [
    { label: "All", value: "All" },
    { label: "1", value: "one" },
    { label: "2", value: "two" },
    { label: "3", value: "three" },
    { label: "4", value: "four" },
  ];
  return (
    <>
      <fieldset>
        <legend>Product Info</legend>
        <div className="cuspinLabelAndInputWrapper">
          <div className="cuspinLabel">Cusip:</div>
          <div className="cuspinInputWrapper">
            <InputWrapper></InputWrapper>
          </div>
        </div>
        <div className="isinLabelAndInputWrapper">
          <div className="isinLabel">ISIN:</div>
          <div className="isinInputWrapper">
            <InputWrapper></InputWrapper>
          </div>
        </div>
        <div className="occSymbolLabelAndInputWrapper">
          <div className="occSymbolLabel">OCC Symbol:</div>
          <div className="occSymbolInputWrapper">
            <InputWrapper></InputWrapper>
          </div>
        </div>
        <div className="tierLabelAndValue">
          <div className="label">Tier:</div>
          <Tierlevel tierLevelData={tierLevelData}></Tierlevel>
        </div>
        <div className="labelAndClearedWrapper">
          <div className="Clearedwrapper">
            <div className="Clearedlabel">Cleared:</div>
            <SelectBox
              type="single"
              selectOptions={selectClearedOptions}
            ></SelectBox>
          </div>
        </div>
        <div className="labelAndCrossMarginWrapper">
          <div className="wrapper">
            <div className="label">Cross Margin Eligible:</div>
            <SelectBox
              type="single"
              selectOptions={selectCrossMarginOptions}
            ></SelectBox>
          </div>
        </div>
        <div className="labelAndCurrencyWrapper">
          <div className="wrapper">
            <div className="label">Currency:</div>
            <SelectBox
              type="single"
              selectOptions={selectCurrencyOptions}
            ></SelectBox>
          </div>
        </div>
      </fieldset>
    </>
  );
};
export default ProductInfo;
