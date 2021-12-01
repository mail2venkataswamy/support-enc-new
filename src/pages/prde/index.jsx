import React, { useContext } from "react";
import Tabs from "../../components/common/tabs/tabs.jsx";
import "./styles.scss";
import MyContext from "../../components/context/prde-context";
import Prdeprovider from "../../components/provider/prde-provider.jsx";
import TabComponent from "./components/tabs-component/tabs-component.jsx";

const PriceRepoDataExport = () => {
  const context = useContext(MyContext);
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
