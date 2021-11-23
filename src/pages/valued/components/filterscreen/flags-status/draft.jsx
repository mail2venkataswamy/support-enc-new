import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./Components/Providers";
import "font-awesome/css/font-awesome.min.css";
//import { LicenseManager } from "ag-grid-enterprise";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// eslint-disable-next-line
//LicenseManager.setLicenseKey(AG_GRID_KEY);

/**enable React-Axe tor accessibility testing 
if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe')
  axe(React, ReactDOM, 1000)
};
*/

//ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Providers routerBasename="/market-data-editing/">
    <App />
  </Providers>,
  document.getElementById("root")
);
