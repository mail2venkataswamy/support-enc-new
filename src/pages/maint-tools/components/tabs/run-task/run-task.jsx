import React, { useContext } from "react";
import PublishRadioGroup from "../../../../../components/common/radio-button/radio-button.jsx";
import "./run-task.scss";
import MtContext from "../../../../../components/context/maint-tools-context.jsx";

const Runtask = () => {
  const context = useContext(MtContext);
  const { publisheDataValue, onChangePublishValue, publisheData } = {
    ...context.state.runTaskData,
    ...context,
  };
  return (
    <div className="runtaskWrapper">
      <div className="publishNonPublishDataWrapper">
        <div className="publishRadioGroup">
          <PublishRadioGroup
            radioButtonsData={publisheData}
            onChange={onChangePublishValue}
            value={publisheDataValue}
          ></PublishRadioGroup>
        </div>
        <div className="jobPlan">
          <button>9IV Job Plan</button>
        </div>
      </div>
      <div className="masterFileUplodaWrapper">
        <button>Master File Update</button>
      </div>
    </div>
  );
};

export default Runtask;
