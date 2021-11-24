import { Component } from "react";
import React from "react";
import MyContext from "../context/valued-context.jsx";

class ValuedProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterPanelData: {
        cuspinSearchValue: "",
        cuspinData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        cuspinSuggestionResult: [],
        cuspinValue: "",
        isFromAndStDisabled: false,
        currHistOptions: [
          { label: "CURRENT", value: "Current" },
          { label: "HISTORICAL", value: "Historical" },
        ],
        selectedCurrHistValue: { label: "CURRENT", value: "Current" },
        fromDate: new Date(),
        toDate: new Date(),
        isinData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        isinSuggestionResult: [],
        isinValue: "",
        isinSearchValue: "",
        occSymbolData: [
          { id: 1, value: "AA001200" },
          { id: 2, value: "AA001201" },
          { id: 3, value: "AA001202" },
          { id: 4, value: "AA001203" },
          { id: 5, value: "AB001204" },
          { id: 6, value: "BB001205" },
          { id: 7, value: "BA001206" },
          { id: 8, value: "CC001207" },
          { id: 9, value: "BC001208" },
          { id: 10, value: "CA001209" },
        ],
        occSymbolSuggestionResult: [],
        occSymbolValue: "",
        occSymbolSearchValue: "",
        isAllTypeChecked: false,
        typeData: [
          {
            label: "Common Stock",
            value: "commonStock",
            isChecked: false,
            list: "list1",
          },
          {
            label: "Preffered Stock",
            value: "prefferedStock",
            isChecked: false,
            list: "list1",
          },

          {
            label: "Corporate Debt",
            value: "corporateDebt",
            isChecked: false,
            list: "list1",
          },
          { label: "Index", value: "index", isChecked: false, list: "list2" },
          { label: "FMS", value: "fms", isChecked: false, list: "list2" },
        ],
        selectClearedOptions: [
          { label: "BOTH", value: "ClearedAndNonCleared" },
          { label: "Cleared", value: "Cleared" },
          { label: "Non Cleared", value: "Non Cleared" },
        ],
        selectedClearedValue: { label: "BOTH", value: "ClearedAndNonCleared" },
        selectCrossMarginOptions: [
          { label: "BOTH", value: "CrossMarginAndNonCrossMragin" },
          { label: "Cross Margin Eligible", value: "CrossMargin" },
          { label: "Non Cross Margin Eligible", value: "NonCrossMargin" },
        ],
        selectedCrossMarginValue: {
          label: "BOTH",
          value: "CrossMarginAndNonCrossMragin",
        },
        selectCurrencyOptions: [
          { label: "ALL", value: "All" },
          { label: "USD", value: "USD" },
          { label: "AUD", value: "Aud" },
          { label: "CAD", value: "Cad" },
        ],
        selectedCurrencyValue: { label: "USD", value: "USD" },
        tierLevelData: [
          { label: "1", value: "one", isChecked: false },
          { label: "2", value: "two", isChecked: false },
          { label: "3", value: "three", isChecked: false },
          { label: "4", value: "four", isChecked: false },
        ],
        isAllTireChecked: false,
        flaggedEditOptions: [
          {
            label: "Final - Large Difference Vs Vender",
            value: "Final - Large Difference Vs Vender",
          },
          {
            label: "Final - Large varience Vs previous",
            value: "Final - Large varience Vs previous",
          },
          {
            label: "Final - Missing or Zero Final Price",
            value: "Final - Missing or Zero Final Price",
          },
        ],
        selectedFlaggedEditValue: {
          label: "Final - Large Difference Vs Vender",
          value: "Final - Large Difference Vs Vender",
        },
        reviewNeededOptions: [
          {
            label: "Final - Large Difference Vs Vender",
            value: "Final - Large Difference Vs Vender",
          },
          {
            label: "Final - Large varience Vs previous",
            value: "Final - Large varience Vs previous",
          },
          {
            label: "Final - Missing or Zero Final Price",
            value: "Final - Missing or Zero Final Price",
          },
        ],
        selectedreviewNeededValue: {
          label: "Final - Large Difference Vs Vender",
          value: "Final - Large Difference Vs Vender",
        },
        isEditedRecordChecked: false,
        editedRecordValue: "",
      },
    };
    this.onSelectEditedRecordValue = this.onSelectEditedRecordValue.bind(this);
  }
  onSelectEditedRecordValue = (e) => {
    alert(" valued called contect");
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.editedRecordValue = e.target.value;
    filterPanelData.isEditedRecordChecked =
      !filterPanelData.isEditedRecordChecked;
    this.setState({ filterPanelData });
  };
  componentDidMount() {}
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          onSelectEditedRecordValue: this.onSelectEditedRecordValue,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default ValuedProvider;
