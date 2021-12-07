import React from "react";
import "./styles.scss";

import PrsProvider from "../../components/provider/prs-provider.jsx";
import FilterScreen from "./components/prs-filterscreen/prs-filterscreen.jsx";
const Prs = () => {
  return (
    <PrsProvider>
      <div id="mainPrs">
        <FilterScreen />
        <div id="prsEditMaint"></div>
      </div>
    </PrsProvider>
  );
};

export default Prs;
