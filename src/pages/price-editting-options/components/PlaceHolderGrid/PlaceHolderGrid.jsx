import React, { useContext, useEffect, useState } from "react";
import "./PlaceHolderGrid.scss";
import Aggrid from "../../../../components/common/ag-grid/ag-grid.jsx";
//import myContext from "../../../../components/context/peo-context.jsx";

const PlaceHoldergrid = () => {
  /*  
 const context = useContext(myContext); const {} = {
    ...context.state.gridState,
    ...context,
  }; */

  return (
    <div className="actionHoldergridContainer">
      <div className="footer">
        <button>Master File Upd</button>
        <button>Smoothing Upd</button>|<button>Tasks</button>
      </div>
    </div>
  );
};

export default PlaceHoldergrid;
