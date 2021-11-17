import React from "react";

import "./editscreen.scss";
import Editdashboardgrid from "./edit-dashboard-grid/edit-dashboard-grid.jsx";

const Editscreen = (props) => {
  return (
    <div className="editDashboard">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Edit Category Dashboard</div>
        <div
          id="toggle"
          className="toggle"
          onClick={props.toggleEditDashboardGrid}
        >
          ^
        </div>
      </div>
      {props.data.editDashboardData.showEditDashboardGrid ? (
        <Editdashboardgrid />
      ) : (
        ""
      )}
    </div>
  );
};

export default Editscreen;
