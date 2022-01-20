import React, { useContext, useState } from "react";
import "./er-edit-cat-dashboard-grid.scss";
import Editdashboardgrid from "./grid/grid.jsx";
import MyContext from "../../../../components/context/interest-rates-context.jsx";

const Editscreen = () => {
  const [isEditCatDashboardVisible, toggleEditcatDashboard] = useState(true);
  const context = useContext(MyContext);
  const { lastImportTime, lastPublishTime } = {
    ...context.state.editDashboardData,
    ...context,
  };
  return (
    <div className="ir-editDashboard">
      <div className="ir-mainscreenTitleAndToggle">
        <div className="ir-mainscreenHeaderTitle">Edit Category Dashboard</div>

        <div
          id="ir-toggle"
          className="ir-toggle"
          //onClick={() => toggleEditcatDashboard(!isEditCatDashboardVisible)}
        ></div>
      </div>
      <div className="toggleAndTimingsWrapper">
        <p className="timeStamp">Last Imported Time:</p>
        <p className="timeStamp1">Last Published Time:</p>
      </div>

      {isEditCatDashboardVisible ? <Editdashboardgrid /> : <div></div>}
    </div>
  );
};

export default Editscreen;
