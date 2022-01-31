import React, { useContext, useState } from "react";
import "./er-edit-cat-dashboard-grid.scss";
import Editdashboardgrid from "./grid/grid.jsx";
import MyContext from "../../../../components/context/exchange-rates-context.jsx";

const Editscreen = () => {
  const [isEditCatDashboardVisible, toggleEditcatDashboard] = useState(true);
  const context = useContext(MyContext);
  const { lastImportTime, lastPublishTime } = {
    ...context.state.editDashboardData,
    ...context,
  };
  return (
    <div className="er-editDashboard">
      <div className="er-mainscreenTitleAndToggle">
        <div className="er-mainscreenHeaderTitle">Edit Category Dashboard</div>

        <div
          id="er-toggle"
          className="er-toggle"
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
