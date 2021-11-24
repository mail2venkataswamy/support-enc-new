import React from "react";
import MyContext from "../context/prde-context.jsx";
import DataExport from "../../../src/pages/prde/components/tabs/prde-data-export/prde-data-export.jsx";
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
    };
  }
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default PrdeProvider;
