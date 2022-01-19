import React, { useContext, useState } from "react";
import "./er-edit-cat-dashboard-grid.scss";
import Editdashboardgrid from "./grid/grid.jsx";

const Editscreen = () => {
  const [isEditCatDashboardVisible, toggleEditcatDashboard] = useState(true);
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
      {isEditCatDashboardVisible ? <Editdashboardgrid /> : <div></div>}
    </div>
  );
};

export default Editscreen;
