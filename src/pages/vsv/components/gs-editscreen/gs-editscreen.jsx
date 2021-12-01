import React, { useContext } from "react";

import "./gs-editscreen.scss";
import Editdashboardgrid from "./edit-dashboard-grid/gs-edit-dashboard-grid.jsx";
import GovContext from "../../../../components/context/gov-context.jsx";

const Editscreen = () => {
  const context = useContext(GovContext);
  return (
    <div className="editDashboard">
      <div className="mainscreenTitleAndToggle">
        <div className="mainscreenHeaderTitle">Edit Category Dashboard</div>
        <div
          id="toggle"
          className="toggle"
          onClick={context.toggleEditDashboardGrid}
        >
          ^
        </div>
      </div>
      {context.state.editDashboardData.showEditDashboardGrid ? (
        <Editdashboardgrid />
      ) : (
        ""
      )}
    </div>
  );
};

export default Editscreen;
