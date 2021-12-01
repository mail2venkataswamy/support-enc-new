import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import App from "./App-New";
import ValuedProvider from "./components/provider/valued-provider.jsx";
import GovdProvider from "./components/provider/gov-provider.jsx";
import PrdeContext from "./components/provider/prde-provider.jsx";
import VsvContext from "./components/provider/vsv-provider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ValuedProvider>
      <GovdProvider>
        <PrdeContext>
          <VsvContext>
            <App></App>
          </VsvContext>
        </PrdeContext>
      </GovdProvider>
    </ValuedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
