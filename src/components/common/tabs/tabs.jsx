import React from "react";
import { Tabs } from "react-simple-tabs-component";
// (Optional) if you don't want to include bootstrap css stylesheet
import "react-simple-tabs-component/dist/index.css";
const TabComponent = (props) => {
  return <Tabs tabs={props.tabs}></Tabs>;
};
export default TabComponent;
