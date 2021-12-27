import React from "react";
import MyContext from "../context/prde-context.jsx";
import DataExport from "../../pages/prde/components/tabs/prde-data-export/prde-data-export.jsx";
import ExportResults from "../../../src/pages/prde/components/tabs/prde-export-results/prde-export-results.jsx";
import PriceOverideData from "../../../src/pages/prde/components/tabs/prde-price-override-data/prde-price-override-data";
import sThreeDownload from "../../../src/pages/prde/components/tabs/prde-s3-download/prde-s3-download.jsx";

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
      initialDataExport: {},
      initialPriceOverrideData: {},
      initialSThreeData: {},
      dataExport: {
        isFromAndStDisabled: false,
        currHistOptions: [
          { label: "CURRENT", value: "Current" },
          { label: "HISTORICAL", value: "Historical" },
        ],
        selectedCurrHistValue: { label: "CURRENT", value: "Current" },
        fromDate: new Date(),
        toDate: new Date(),
        selectedProductTypeValue: { label: "Select", value: "Select" },
        productTypeOptions: [
          { label: "Equity", value: "equity" },
          { label: "Currency", value: "currency" },
          { label: "Debt", value: "debt" },
          { label: "Future", value: "future" },
          { label: "Index/Other", value: "indexOrOther" },
          { label: "Money Markey Mutual Funds", value: "mmmf" },
          { label: "Option", value: "option" },
          { label: "Warrant", value: "warrant" },
        ],
        piClassificationOptions: [{ label: "one", value: "one" }],
        selectedPiClassificationValue: { label: "Select", value: "Select" },
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
        vendorOptins: [
          { label: "IDSI", value: "idsi" },
          { label: "Thomson Reuters Corp.", value: "Thomson Reuters Corp." },
          {
            label: "Markit Financial Information Services",
            value: "Markit Financial Information Services",
          },
          {
            label: "Miami International Securities Exchange",
            value: "Miami International Securities Exchange",
          },
          { label: "Bloomberg Finance L.P.", value: "Bloomberg Finance L.P." },
          { label: "Fidessa Group plc", value: "Fidessa Group plc" },
          { label: "CE DATA SERVICES", value: "CE DATA SERVICES" },
          { label: "Exchange Files", value: "Exchange Files" },
          { label: "BBG/IDC Vendor Group", value: "BBG/IDC Vendor Group" },
          { label: "SunGard ORM", value: "SunGard ORM" },
          {
            label: "Customized Options Pricing Service",
            value: "Customized Options Pricing Service",
          },
          { label: "Bloomberg Polarlake", value: "Bloomberg Polarlake" },
          { label: "CBOE Indicative Price", value: "CBOE Indicative Price" },
          { label: "GTreasury SS, LLC", value: "GTreasury SS, LLC" },
          { label: "Baton Systems Inc.", value: "Baton Systems Inc." },
        ],
        selectedVendorValue: { label: "default", value: "default" },
        callPutOptions: [
          { label: "Call", value: "call" },
          { label: "Put", value: "put" },
        ],

        selectedCallPutValue: { label: "default", value: "default" },
        strikePriceToDate: new Date(),
        strikePriceFromDate: new Date(),
        pricePrecisionOptions: [{ label: 1, value: 1 }],
        selectedpricePrecisionValue: { label: 1, value: 1 },
        isNonClearedOrCrossMarginChecked: false,
        isFmsChecked: false,
        strikePriceFromData: [
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
        strikePriceToData: [
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
        strikePriceFromSuggestionResult: [],
        strikePriceFromValue: "",
        StrikePriceFromSearchValue: "",
        strikePriceToSuggestionResult: [],
        strikePriceToValue: "",
        StrikePriceToSearchValue: "",
        isCallPutDisabled: true,
        isMaturityFromDateDisabled: true,
        isMarutiryToDateDisabled: true,
        //isSymbolFromDisabled: true,
        //isSymbolToDisabled: true,
        isStrikePriceFromDisabled: true,
        isStrikePriceToDisabled: true,
        isClasificationDisabled: true,
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
        optionsDeliveryClassData: [
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
        optionsDeliveryClassSuggestionResult: [],
        optionsDeliveryClassValue: "",
        optionsDeliveryClassSearchValue: "",
        isOverrideChecked: false,
        isCyclesChecked: false,
        timeValue: "",
        cycleIdValue: "",
      },
    };
  }
  //---------------Data Export Methods---------------
  onDataExportClickReset = () => {
    let dataExport = this.state.dataExport;
    let initialDataExport = this.state.initialDataExport;
    let data = { ...dataExport, ...initialDataExport };

    this.setState({
      dataExport: data,
    });
  };

  onChangeCurrHistValue = (e) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedCurrHistValue = e;
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
    alert(selectedValue.label);
    let dataExport = this.state.dataExport;
    dataExport.selectedVendorValue = selectedValue;
    this.setState({ dataExport });
  };
  onChangeProductTypeValue = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.selectedCallPutValue = selectedValue;
    this.setState({ dataExport });
    switch (selectedValue.value.toLowerCase()) {
      case "equity":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = true;
        dataExport.isMarutiryToDateDisabled = true;
        dataExport.isMaturityFromDateDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;
        break;
      case "currency":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = true;
        dataExport.isMarutiryToDateDisabled = true;
        dataExport.isMaturityFromDateDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;
        break;
      case "indexOrOther":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = true;
        dataExport.isMarutiryToDateDisabled = true;
        dataExport.isMaturityFromDateDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;
        break;
      case "mmf":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = true;
        dataExport.isMarutiryToDateDisabled = true;
        dataExport.isMaturityFromDateDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;
        break;
      case "warrant":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = true;
        dataExport.isMarutiryToDateDisabled = true;
        dataExport.isMaturityFromDateDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;

        break;
      case "option":
        dataExport.isClasificationDisabled = false;
        dataExport.isCallPutDisabled = false;
        dataExport.isMarutiryToDateDisabled = false;
        dataExport.isMaturityFromDateDisabled = false;
        dataExport.isStrikePriceFromDisabled = false;
        dataExport.isStrikePriceToDisabled = false;

        break;
      case "debt":
        dataExport.isClasificationDisabled = false;
        dataExport.isMarutiryToDateDisabled = false;
        dataExport.isMaturityFromDateDisabled = false;

        dataExport.isCallPutDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;
        break;
      case "future":
        dataExport.isClasificationDisabled = false;
        dataExport.isMarutiryToDateDisabled = false;
        dataExport.isMaturityFromDateDisabled = false;

        dataExport.isCallPutDisabled = true;
        dataExport.isStrikePriceFromDisabled = true;
        dataExport.isStrikePriceToDisabled = true;

        break;
      default:
        return null;
    }
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
    let dataExport = this.state.dataExport;
    dataExport.strikePriceFromDate = date;
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
  setPriceOverrideBusinessDate = (date) => {
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
  onClickStrikePriceFromSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.strikePriceFromValue = selectedValue;
    dataExport.StrikePriceFromSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeStrikePriceFromValue = (e) => {
    let data = this.state.dataExport.strikePriceFromData;
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
    dataExport.strikePriceFromSuggestionResult = result;
    dataExport.StrikePriceFromSearchValue = e.target.value;
    dataExport.strikePriceFromValue = e.target.value;

    this.setState({
      dataExport,
    });
  };
  onClickStrikePriceToSuggestionItem = (selectedValue) => {
    let dataExport = this.state.dataExport;
    dataExport.strikePriceToValue = selectedValue;
    dataExport.StrikePriceToSearchValue = "";
    this.setState({
      dataExport,
    });
  };
  onChangeStrikePriceToValue = (e) => {
    let data = this.state.dataExport.strikePriceToData;
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
    dataExport.strikePriceToSuggestionResult = result;
    dataExport.StrikePriceToSearchValue = e.target.value;
    dataExport.strikePriceToValue = e.target.value;

    this.setState({
      dataExport,
    });
  };

  //-------------------Sthree download------------------------------
  onChangeDeliveryClassExchangeFilesValue = (selectedValue) => {
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

  onChangeOptionsDeliveryClassValue = (e) => {
    let data = this.state.sThreeDownload.optionsDeliveryClassData;
    let sThreeDownload = this.state.sThreeDownload;

    let result =
      e.target.value &&
      data &&
      data.filter((item) => {
        return item.value
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase());
      });

    sThreeDownload.optionsDeliveryClassSuggestionResult = result;
    sThreeDownload.optionsDeliveryClassSearchValue = e.target.value;
    sThreeDownload.optionsDeliveryClassValue = e.target.value;

    this.setState({
      sThreeDownload,
    });
  };
  onClickOptionsDeliveryClassSuggestionItem = (selectedValue) => {
    let sThreeDownload = this.state.sThreeDownload;
    sThreeDownload.optionsDeliveryClassValue = selectedValue;
    sThreeDownload.optionsDeliveryClassSearchValue = "";
    this.setState({
      sThreeDownload,
    });
  };
  onClickPriceOverrideDataReset = () => {
    let priceOverrideData = this.state.dataExport;
    let initialPriceOverrideData = this.state.initialPriceOverrideData;
    let data = { ...priceOverrideData, ...initialPriceOverrideData };
    this.setState({
      priceOverrideData: data,
    });
  };
  onClickSThreeDowloadReset = () => {
    let sThreeDownload = this.state.sThreeDownload;
    let initialSThreeData = this.state.initialSThreeData;
    let data = { ...sThreeDownload, ...initialSThreeData };
    this.setState({
      sThreeDownload: data,
    });
  };
  componentDidMount() {
    let dataExport = this.state.dataExport;
    let priceOverrideData = this.state.priceOverrideData;
    let sThreeDownload = this.state.sThreeDownload;

    dataExport.isFromAndStDisabled = true;
    let filterObject = {
      fromDate: dataExport.fromDate,
      toDate: dataExport.toDate,
      selectedCurrHistValue: dataExport.selectedCurrHistValue,
      selectedProductTypeValue: dataExport.selectedProductTypeValue,
      selectedPiClassificationValue: dataExport.selectedPiClassificationValue,
      symbolFromValue: dataExport.symbolFromValue,
      symbolToValue: dataExport.symbolToValue,
      cuspinValue: dataExport.cuspinValue,
      deliveryClassValue: dataExport.deliveryClassValue,
      exchangeValue: dataExport.exchangeValue,
      isInValue: dataExport.isInValue,
      onChangeCallPutValue: dataExport.selectedCallPutValue,
      selectedVendorValue: dataExport.selectedVendorValue,
      strikePriceFromDate: dataExport.strikePriceFromDate,
      strikePriceToDate: dataExport.strikePriceToDate,
      selectedpricePrecisionValue: dataExport.selectedpricePrecisionValue,
      isFmsChecked: dataExport.isFmsChecked,
      isNonClearedOrCrossMarginChecked:
        dataExport.isNonClearedOrCrossMarginChecked,
      strikePriceFromDate: dataExport.strikePriceFromDate,
      strikePriceToDate: dataExport.strikePriceToDate,
    };

    //initialPriceOverrideData
    let priceOverrideObject = {
      businessDate: priceOverrideData.businessDate,
      PriceOverideDeliveryClassValue:
        priceOverrideData.PriceOverideDeliveryClassValue,
    };
    let sThreeDownloadObject = {
      deliveryClassValue: sThreeDownload.deliveryClassValue,
      businessDate: sThreeDownload.businessDate,
      runDate: sThreeDownload.runDate,
      optionsDeliveryClassValue: sThreeDownload.optionsDeliveryClassValue,
      isCyclesChecked: sThreeDownload.isCyclesChecked,
      isOverrideChecked: sThreeDownload.isOverrideChecked,
      cycleIdValue: sThreeDownload.cycleIdValue,
      timeValue: sThreeDownload.timeValue,
    };

    let dataExportState = { ...dataExport, ...filterObject };
    let priceDataState = { ...priceOverrideData, ...priceOverrideObject };
    let s3DataState = { ...sThreeDownload, ...sThreeDownloadObject };

    this.setState({
      initialDataExport: dataExportState,
      initialPriceOverrideData: priceDataState,
      initialSThreeData: s3DataState,
    });
  }
  onChangeOverride = (e) => {
    let s3DownloaData = this.state.sThreeDownload;
    s3DownloaData.isOverrideChecked = e.target.value;
    this.setState({
      s3DownloaData,
    });
  };
  onChangeCycles = (e) => {
    let s3DownloaData = this.state.sThreeDownload;
    s3DownloaData.isCyclesChecked = e.target.value;
    this.setState({
      s3DownloaData,
    });
  };
  onChangeCycleIdValue = (e) => {
    let s3DownloaData = this.state.sThreeDownload;
    s3DownloaData.cycleIdValue = e.target.value;
    this.setState({
      s3DownloaData,
    });
  };
  onChangeTimeValue = (e) => {
    let s3DownloaData = this.state.sThreeDownload;
    s3DownloaData.timeValue = e.target.value;
    this.setState({
      s3DownloaData,
    });
  };
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
          setPriceOverrideBusinessDate: (e) =>
            this.setPriceOverrideBusinessDate(e),
          onChangePriceOverideDeliveryClassValue: (e) =>
            this.onChangePriceOverideDeliveryClassValue(e),
          setRunDate: (e) => this.setRunDate(e),
          onDataExportClickReset: this.onDataExportClickReset,
          onChangeStrikePriceFromValue: (e) =>
            this.onChangeStrikePriceFromValue(e),
          onClickStrikePriceFromSuggestionItem: (e) =>
            this.onClickStrikePriceFromSuggestionItem(e),
          onChangeStrikePriceToValue: (e) => this.onChangeStrikePriceToValue(e),
          onClickStrikePriceToSuggestionItem: (e) =>
            this.onClickStrikePriceToSuggestionItem(e),
          onChangeOptionsDeliveryClassValue: (e) =>
            this.onChangeOptionsDeliveryClassValue(e),
          onClickOptionsDeliveryClassSuggestionItem: (e) =>
            this.onClickOptionsDeliveryClassSuggestionItem(e),
          onClickPriceOverrideDataReset: this.onClickPriceOverrideDataReset,
          onClickSThreeDowloadReset: this.onClickSThreeDowloadReset,
          onChangeDeliveryClassExchangeFilesValue: (e) =>
            this.onChangeDeliveryClassExchangeFilesValue(e),
          onChangeProductTypeValue: (e) => this.onChangeProductTypeValue(e),
          onChangeOverride: (e) => this.onChangeOverride(e),
          onChangeCycles: (e) => this.onChangeCycles(e),
          onChangeCycleIdValue: (e) => this.onChangeCycleIdValue(e),
          onChangeTimeValue: (e) => this.onChangeTimeValue(e),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default PrdeProvider;
