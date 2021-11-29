import React from "react";
import MyContext from "../context/prde-context.jsx";
import DataExport from "../../pages/prde/components/tabs/prde-data-export/prde-data-export.jsx";
import ExportResults from "../../../src/pages/prde/components/tabs/prde-export-results/prde-export-results.jsx";
import PriceOverideData from "../../../src/pages/prde/components/tabs/prde-price-override-data/prde-price-override-data";
import sThreeDownload from "../../../src/pages/prde/components/tabs/prde-s3-download/prde-s3-download.jsx";
const FileName = () => {
  return <a>hi</a>;
};
class PrdeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          label: "Data Export", // Tab Title - String
          Component: DataExport, // Tab Body - JSX.Element
        },
        {
          label: "Export Results",
          Component: ExportResults,
        },
        {
          label: "Price Oveeride Data",
          Component: PriceOverideData,
        },
        {
          label: "S3 Download",
          Component: sThreeDownload,
        },
      ],
      dataExport: {
        isFromAndStDisabled: false,
        currHistOptions: [
          { label: "CURRENT", value: "Current" },
          { label: "HISTORICAL", value: "Historical" },
        ],
        selectedCurrHistValue: { label: "CURRENT", value: "Current" },
        fromDate: new Date(),
        toDate: new Date(),
        selectedProductTypeValue: { label: "EQUITY", value: "equity" },
        productTypeOptions: [{ label: "EQUITY", value: "equity" }],
        piClassificationOptions: [{ label: "one", value: "one" }],
        selectedPiClassificationValue: { label: "default", value: "default" },
        symbolFromSearchValue: "",
        symbolFromData: [
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
        symbolFromSuggestionResult: [],
        symbolFromValue: "",
        symbolToSearchValue: "",
        symbolToData: [
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
        symbolToSuggestionResult: [],
        symbolToValue: "",
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
        deliveryClassSearchValue: "",
        deliveryClassData: [
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
        deliveryClassSuggestionResult: [],
        deliveryClassValue: "",
        exchangeSearchValue: "",
        exchangeData: [
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
        exchangeSuggestionResult: [],
        exchangeValue: "",
        isInSearchValue: "",
        isInData: [
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
        isInSuggestionResult: [],
        isInValue: "",

        vendorOptins: [{ label: "one", value: "one" }],
        selectedVendorValue: { label: "default", value: "default" },
        callPutOptions: [{ label: "one", value: "one" }],
        selectedCallPutValue: { label: "default", value: "default" },
        strikePriceToDate: new Date(),
        strikePriceFromDate: new Date(),
        pricePrecisionOptions: [{ label: 1, value: 1 }],
        selectedpricePrecisionValue: { label: 1, value: 1 },
        isNonClearedOrCrossMarginChecked: false,
        isFmsChecked: false,
      },
      exportResult: {
        exportResultRowData: [
          {
            fileName: "test1",
            status: "Completed",
          },
          {
            fileName: "test2",
            status: "Completed",
          },
          {
            fileName: "test3",
            status: "Completed",
          },
        ],
        colDefs: [
          {
            headerName: "#",
            field: "#",
            width: 60,
            flex: 0,
          },
          {
            headerName: "File Name",
            cellRenderer: (params) => {
              var link = document.createElement("a");
              link.href = "#";
              link.innerText = params.value;
              link.addEventListener("click", (e) => {
                e.preventDefault();
                console.log(params.data.fileName);
              });
              return link;
            },
            field: "fileName",
            width: "auto",
          },
          { headerName: "Status", field: "status", width: "auto" },
        ],
        defaultColDef: {
          initialWidth: "auto",
          sortable: true,
          resizable: true,
          filter: true,
          rowSelection: "multiple",
          flex: 1,
        },
        //========
      },
      //===============AG-Grid========
      priceOverrideData: {
        businessDate: new Date(),
        deliveryClassOptions: [{ label: "one", value: "one" }],
        PriceOverideDeliveryClassValue: { label: "default", value: "default" },
      },
      sThreeDownload: {
        businessDate: new Date(),
        deliveryClassOptions: [{ label: "one", value: "one" }],
        deliveryClassValue: { label: "default", value: "default" },
        runDate: new Date(),
      },
    };
  }
  //---------------Data Export Methods---------------
  onChangeCurrHistValue = (e) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedCurrHistValue = e.value;
    if (e.value.toLowerCase() === "CURRENT".toLowerCase()) {
      dataExport.isFromAndStDisabled = true;
    } else {
      dataExport.isFromAndStDisabled = false;
    }
    this.setState({
      dataExport,
    });
  };
  setFromDate = (date) => {
    let dataExport = this.state.dataExport;
    console.log(dataExport.fromDate);
    dataExport.fromDate = date;
    this.setState({
      dataExport,
    });
  };
  setToDate = (date) => {
    let dataExport = this.state.dataExport;
    console.log(dataExport.toDate);
    dataExport.toDate = date;
    this.setState({
      dataExport,
    });
  };
  onChangeCuspinValue = (e) => {
    let data = this.state.dataExport.cuspinData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.cuspinSuggestionResult = result;
    dataExport.cuspinSearchValue = e.target.value;
    dataExport.cuspinValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.cuspinValue = selectedValue;
    dataExport.cuspinSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeSymbolFromValue = (e) => {
    let data = this.state.dataExport.symbolFromData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.symbolFromSuggestionResult = result;
    dataExport.symbolFromSearchValue = e.target.value;
    dataExport.symbolFromValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickSymbolFromSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.symbolFromValue = selectedValue;
    dataExport.symbolFromSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeSymbolToValue = (e) => {
    let data = this.state.dataExport.symbolToData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.symbolToSuggestionResult = result;
    dataExport.symbolToSearchValue = e.target.value;
    dataExport.symbolToValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickSymbolToSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.symbolToValue = selectedValue;
    dataExport.symbolToSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeDeliveryClassValue = (e) => {
    let data = this.state.dataExport.deliveryClassData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.deliveryClassSuggestionResult = result;
    dataExport.deliveryClassSearchValue = e.target.value;
    dataExport.deliveryClassValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickDeliveryClassSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.deliveryClassValue = selectedValue;
    dataExport.deliveryClassSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeExchangeValue = (e) => {
    let data = this.state.dataExport.exchangeData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.exchangeSuggestionResult = result;
    dataExport.exchangeSearchValue = e.target.value;
    dataExport.exchangeValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickExchangeSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.exchangeValue = selectedValue;
    dataExport.exchangeSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeIsInValue = (e) => {
    let data = this.state.dataExport.isInData;
    let dataExport = this.state.dataExport;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });
    console.log(result);
    dataExport.isInSuggestionResult = result;
    dataExport.isInSearchValue = e.target.value;
    dataExport.isInValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickIsInSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.isInValue = selectedValue;
    dataExport.isInSearchValue = "";
    this.setState({
      dataExport,
    });
  };

  onChangeCallPutValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedCallPutValue = selectedValue;
    this.setState({ dataExport });
  };

  onChangeVendorValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedVendorValue = selectedValue;
    this.setState({ dataExport });
  };
  onChangeProductTypeValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedCallPutValue = selectedValue;
    this.setState({ dataExport });
  };

  onChangeClassificationValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedPiClassificationValue = selectedValue;
    this.setState({ dataExport });
  };

  setstrikePriceToDate = (date) => {
    let dataExport = this.state.dataExport;
    dataExport.strikePriceToDate = date;
    this.setState({
      dataExport,
    });
  };

  setstrikePriceFromDate = (date) => {
    const valueOfInput = date.format();
    let dataExport = this.state.dataExport;
    dataExport.strikePriceFromDate = valueOfInput;
    this.setState({
      dataExport,
    });
  };

  onChangepricePrecisionValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedpricePrecisionValue = selectedValue;
    this.setState({ dataExport });
  };
  onSelectNonClearedOrCrossMarginValue = (e) => {
    let dataExport = this.state.dataExport;
    dataExport.isNonClearedOrCrossMarginChecked = e.target.value;
    this.setState({ dataExport });
  };
  onSelectFms = (e) => {
    let dataExport = this.state.dataExport;
    dataExport.isFmsChecked = e.target.value;
    this.setState({ dataExport });
  };
  setBusinessDate = (date) => {
    let priceOverrideData = this.state.priceOverrideData;
    priceOverrideData.businessDate = date;
    this.setState({
      priceOverrideData,
    });
  };

  onChangePriceOverideDeliveryClassValue = (selectedValue) => {
    let priceOverrideData = this.state.priceOverrideData;
    priceOverrideData.PriceOverideDeliveryClassValue = selectedValue;
    this.setState({ priceOverrideData });
  };
  //-------------------Sthree download------------------------------
  onChangeDeliveryClassValue = (selectedValue) => {
    let sThreeDownload = this.state.sThreeDownload;
    sThreeDownload.deliveryClassValue = selectedValue;
    this.setState({ sThreeDownload });
  };
  setBusinessDate = (date) => {
    let sThreeDownload = this.state.sThreeDownload;
    sThreeDownload.businessDate = date;
    this.setState({
      sThreeDownload,
    });
  };
  setRunDate = (date) => {
    let sThreeDownload = this.state.sThreeDownload;
    sThreeDownload.runDate = date;
    this.setState({
      sThreeDownload,
    });
  };

  componentDidMount() {
    let dataExport = this.state.dataExport;
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          //=======PI Methods=======
          setFromDate: (e) => this.setFromDate(e),
          setToDate: (e) => this.setToDate(e),
          onChangeCurrHistValue: (e) => this.onChangeCurrHistValue(e),
          onChangeCuspinValue: (e) => this.onChangeCuspinValue(e),
          onClickSuggestionItem: (e) => this.onClickSuggestionItem(e),
          onChangeSymbolFromValue: (e) => this.onChangeSymbolFromValue(e),
          onClickSymbolFromSuggestionItem: (e) =>
            this.onClickSymbolFromSuggestionItem(e),
          onChangeSymbolToValue: (e) => this.onChangeSymbolToValue(e),
          onClickSymbolToSuggestionItem: (e) =>
            this.onClickSymbolToSuggestionItem(e),
          onChangeDeliveryClassValue: (e) => this.onChangeDeliveryClassValue(e),
          onClickDeliveryClassSuggestionItem: (e) =>
            this.onClickDeliveryClassSuggestionItem(e),
          onChangeExchangeValue: (e) => this.onChangeExchangeValue(e),
          onClickExchangeSuggestionItem: (e) =>
            this.onClickExchangeSuggestionItem(e),
          onClickIsInSuggestionItem: (e) => this.onClickIsInSuggestionItem(e),
          onChangeIsInValue: (e) => this.onChangeIsInValue(e),
          onChangeCallPutValue: (e) => this.onChangeCallPutValue(e),
          onChangeVendorValue: (e) => this.onChangeVendorValue(e),
          setstrikePriceToDate: (e) => this.setstrikePriceToDate(e),
          setstrikePriceFromDate: (e) => this.setstrikePriceFromDate(e),
          onChangepricePrecisionValue: (e) =>
            this.onChangepricePrecisionValue(e),
          onSelectNonClearedOrCrossMarginValue: (e) =>
            this.onSelectNonClearedOrCrossMarginValue(e),
          onSelectFms: (e) => this.onSelectFms(e),
          setBusinessDate: (e) => this.setBusinessDate(e),
          onChangePriceOverideDeliveryClassValue: (e) =>
            this.onChangePriceOverideDeliveryClassValue(e),
          setRunDate: (e) => this.setRunDate(e),

          //=======================
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PrdeProvider;
