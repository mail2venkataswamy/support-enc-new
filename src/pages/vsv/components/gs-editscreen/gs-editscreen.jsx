import React, { useContext, useState } from "react";
import "./gs-editscreen.scss";
import Editdashboardgrid from "./edit-dashboard-grid/gs-edit-dashboard-grid.jsx";

const Editscreen = () => {
  const [isEditCatDashboardVisible, toggleEditcatDashboard] = useState(true);
  return (
    <div className="editDashboard">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Edit Category Dashboard</div>
        <div
          id="toggle"
          className="toggle"
          //onClick={() => toggleEditcatDashboard(!isEditCatDashboardVisible)}
        ></div>
      </div>
      {isEditCatDashboardVisible ? <Editdashboardgrid /> : <div></div>}
    </div>
  );
};

export default Editscreen;
