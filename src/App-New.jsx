import React from "react";
import "./App.scss";
import Routes from "./routes";

const NewApp = () => {
  return (
    <div className="app">
      <div className="Nav" style={{ display: "block" }}>
        <Routes />
      </div>
    </div>
  );
};
export default NewApp;
