import React, { useContext } from "react";
import "./styles.scss";
import Prdeprovider from "../../components/provider/prde-provider.jsx";
import TabComponent from "./components/tabs-component/tabs-component.jsx";

const PriceRepoDataExport = () => {
  return (
    <Prdeprovider>
      <div className="priceRepoDataExportContainer">
        <div className="header">Price Repository Data Export</div>
        <div className="tabsContainer">
          <TabComponent></TabComponent>
        </div>
      </div>
    </Prdeprovider>
  );
};
export default PriceRepoDataExport;
