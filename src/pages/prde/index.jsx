import React, { useContext } from "react";
import Tabs from "../../components/common/tabs/tabs.jsx";
import "./styles.scss";
import MyContext from "../../components/context/prde-context";

const PriceRepoDataExport = () => {
  const context = useContext(MyContext);
  return (
    <div className="priceRepoDataExportContainer">
      <div className="header">Price Repository Data Export</div>
      <div className="tabsContainer">
        <Tabs tabs={context.state.tabs}></Tabs>
      </div>
    </div>
  );
};
export default PriceRepoDataExport;
