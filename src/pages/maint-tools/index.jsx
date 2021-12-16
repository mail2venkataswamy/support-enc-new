import React from "react";
import MaintToolsProvider from "../../components/provider/maint-tools-provider";
import TabContainer from "../maint-tools/components/tabs-container/tabs-container.jsx";
import "./styles.scss";

const MaintenanceToools = () => {
  return (
    <MaintToolsProvider>
      <div className="maintenanceToolsContainer">
        <div className="mtHeader">Maintenance Tools</div>
        <div className="mtTabsContainer">
          <TabContainer></TabContainer>
        </div>
      </div>
    </MaintToolsProvider>
  );
};
export default MaintenanceToools;
