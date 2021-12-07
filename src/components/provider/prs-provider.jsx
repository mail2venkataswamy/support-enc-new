import React, { Component } from "react";

import PrsContext from "../context/prs-context.jsx";

class PrsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPanelState: {},
      filterPanelData: {
        reportTypeOptions: [
          {
            label: "Edit Category Statistics",
            value: "Edit Category Statistics",
          },
          {
            label: "Price Editing Statistics",
            value: "Price Editing Statistics",
          },
          {
            label: "Price Runtime Statistics",
            value: "Price Runtime Statistics",
          },
          {
            label: "Smoothing Cycles",
            value: "Smoothing Cycles",
          },
        ],
        selectedReportTypeValue: {
          label: "Select Report",
          value: "Select Report",
        },
        fromDate: new Date(),
        toDate: new Date(),
        productTypeOptions: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ],
        selectedProductTypeValue: { label: "Select", value: "select" },

        editCatNameOptions: [
          { label: "One", value: "one" },
          { label: "Two", value: "tw0" },
        ],
        selectedEditCatNameValue: { label: "Select", value: "select" },
        showEditCatStats: false,
        showPriceEditStats: false,
        showPriceRuntimeStats: false,
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

        symbolSearchValue: "",
        symbolData: [
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
        symbolSuggestionResult: [],
        symbolValue: "",
        exchangeTypeData: [
          { label: "RBH", value: "rbh", isChecked: false },
          {
            label: "MCT",
            value: "mct",
            isChecked: false,
          },
          { label: "OFRA-CFX", value: "ofracfx", isChecked: false },
          { label: "OFRA-ELX", value: "ofraelx", isChecked: false },
          { label: "OFRA-ICE", value: "ofraice", isChecked: false },
          { label: "OFRA-NFX", value: "ofranfx", isChecked: false },
          { label: "OFRA-NYL", value: "ofranyl", isChecked: false },
          { label: "OFRA-OCX", value: "ofraocx", isChecked: false },
        ],

        isAllExchangeChecked: false,
      },
    };
  }
  setFromDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.fromDate);
    filterPanelData.fromDate = date;
    this.setState({
      filterPanelData,
    });
  };
  setToDate = (date) => {
    let filterPanelData = this.state.filterPanelData;
    console.log(filterPanelData.toDate);
    filterPanelData.toDate = date;
    this.setState({
      filterPanelData,
    });
  };
  onChangeReportTypeValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedReportTypeValue = e;

    if (e.value.toLowerCase() === "Edit Category Statistics".toLowerCase()) {
      filterPanelData.showEditCatStats = true;
      filterPanelData.showPriceEditStats = false;
      filterPanelData.showPriceRuntimeStats = false;
    }
    if (e.value.toLowerCase() === "Price Editing Statistics".toLowerCase()) {
      filterPanelData.showEditCatStats = false;
      filterPanelData.showPriceEditStats = true;
      filterPanelData.showPriceRuntimeStats = false;
    }
    if (e.value.toLowerCase() === "Price Runtime Statistics".toLowerCase()) {
      filterPanelData.showEditCatStats = false;
      filterPanelData.showPriceEditStats = false;
      filterPanelData.showPriceRuntimeStats = true;
    }

    this.setState({
      filterPanelData,
    });
  };
  onClickReset = () => {
    let initialPanelState = this.state.initialPanelState;
    let filterPanelData = this.state.filterPanelData;
    let data = { ...filterPanelData, ...initialPanelState };
    console.log(data);
    this.setState({
      filterPanelData: data,
    });
  };
  onChangeCuspinValue = (e) => {
    let data = this.state.filterPanelData.cuspinData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.cuspinSuggestionResult = result;
    filterPanelData.cuspinSearchValue = e.target.value;
    filterPanelData.cuspinValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickCuspinSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.cuspinValue = selectedValue;
    filterPanelData.cuspinSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onChangeSymbolValue = (e) => {
    let data = this.state.filterPanelData.cuspinData;
    let filterPanelData = this.state.filterPanelData;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    filterPanelData.symbolSuggestionResult = result;
    filterPanelData.symbolSearchValue = e.target.value;
    filterPanelData.symbolValue = e.target.value;

    this.setState({
      filterPanelData,
    });
  };
  onClickSymbolSuggestionItem = (selectedValue) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.symbolValue = selectedValue;
    filterPanelData.symbolSearchValue = "";
    this.setState({
      filterPanelData,
    });
  };
  onSelectExchangeCheckbox = (event) => {
    let exchangeTypeData = this.state.filterPanelData.exchangeTypeData;
    let filterPanelData = this.state.filterPanelData;
    exchangeTypeData.forEach((type) => {
      if (type.value === event.target.value)
        type.isChecked = event.target.checked;
    });
    filterPanelData.exchangeTypeData = exchangeTypeData;
    this.setState({ filterPanelData });
  };

  componentDidMount() {
    //let initialPanelState = this.state.initialPanelState;
    let filterPanelData = this.state.filterPanelData;
    let obj = {
      selectedReportTypeValue: filterPanelData.selectedReportTypeValue,
      fromDate: filterPanelData.fromDate,
      toDate: filterPanelData.toDate,
    };
    console.log(obj);
    let data = { ...filterPanelData, ...obj };
    this.setState({
      initialPanelState: data,
    });
  }
  onChangeEditCatNameValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedEditCatNameValue = e;
    this.setState({
      filterPanelData,
    });
  };
  onChangeProductTypeValue = (e) => {
    let filterPanelData = this.state.filterPanelData;
    filterPanelData.selectedProductTypeValue = e;
    this.setState({
      filterPanelData,
    });
  };
  render() {
    return (
      <PrsContext.Provider
        value={{
          state: this.state,
          onChangeReportTypeValue: (e) => this.onChangeReportTypeValue(e),
          setFromDate: (e) => this.setFromDate(e),
          setToDate: (e) => this.setToDate(e),
          onClickReset: this.onClickReset,
          onChangeEditCatNameValue: (e) => this.onChangeEditCatNameValue(e),
          onChangeProductTypeValue: (e) => this.onChangeProductTypeValue(e),
          onChangeCuspinValue: (e) => this.onChangeCuspinValue(e),
          onClickCuspinSuggestionItem: (e) =>
            this.onClickCuspinSuggestionItem(e),
          onChangeSymbolValue: (e) => this.onChangeSymbolValue(e),
          onClickSymbolSuggestionItem: (e) =>
            this.onClickSymbolSuggestionItem(e),
          onSelectExchangeCheckbox: (e) => this.onSelectExchangeCheckbox(e),
        }}
      >
        {this.props.children}
      </PrsContext.Provider>
    );
  }
}

export default PrsProvider;
