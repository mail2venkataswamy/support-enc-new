import React, { useContext } from "react";
import { Tabs } from "react-simple-tabs-component";
// (Optional) if you don't want to include bootstrap css stylesheet
import "react-simple-tabs-component/dist/index.css";
import "./tabs-container.scss";
import MyContext from "../../../../components/context/maint-tools-context.jsx";
const Tabscontainer = () => {
  const context = useContext(MyContext);
  return <Tabs tabs={context.state.tabs}></Tabs>;
};
export default Tabscontainer;
