import React, { useContext } from "react";
import Modal from "react-modal";
import "./gs-publish-valued-securities.scss";
import CheckBox from "../../../../../components/common/check-box/check-box.jsx";
import GovContext from "../../../../../components/context/gov-context.jsx";

const PublishSecuritiesModalContent = (props) => {
  const {
    publishTireData,
    publishTypeData,
    isAllPublishTireChecked,
    isAllPublishTypeChecked,
  } = props.data;
  return (
    <div>
      <fieldset>
        <legend>Tiers</legend>
        <div className="label">Tier:</div>

        <CheckBox
          checkboxData={publishTireData}
          isAllChecked={isAllPublishTireChecked}
          onCheckbox={props.onSelectPublishTireCheckbox}
          onAllChecked={props.onAllPublishTireChecked}
        ></CheckBox>
      </fieldset>
      <fieldset>
        <legend>Product Type</legend>
        <div className="label">Type:</div>

        <CheckBox
          checkboxData={publishTypeData}
          isAllChecked={isAllPublishTypeChecked}
          onCheckbox={props.onSelectPublishTypeCheckbox}
          onAllChecked={props.onAllPublishTypeChecked}
        ></CheckBox>
      </fieldset>
      <fieldset>
        <legend>Eligibility</legend>
        <div className="label">RBH Eligible:</div>
        <label>
          <input type="checkbox" value="rbhEligible"></input>
        </label>
      </fieldset>
    </div>
  );
};

const PublishSecurities = (props) => {
  return (
    <div className="modalContentWrapper">
      <div className="headerWrapper">
        <div className="header">
          Valued Securities Suspend/Restart Repositories
        </div>
        <div className="helpAndCloseIcon">
          <div className="help">?</div>
          <div className="close">X</div>
        </div>
      </div>
      <div className="body">
        <PublishSecuritiesModalContent
          data={props.data}
          onAllPublishTireChecked={props.onAllPublishTireChecked}
          onSelectPublishTireCheckbox={props.onSelectPublishTireCheckbox}
          onSelectPublishTypeCheckbox={props.onSelectPublishTypeCheckbox}
          onAllPublishTypeChecked={props.onAllPublishTypeChecked}
        ></PublishSecuritiesModalContent>
      </div>
      <div className="footer">
        <button id="publishButton" onClick={props.onPublish}>
          Publish
        </button>
        <button id="resetButton" onClick={props.onReset}>
          Reset
        </button>
        <button id="cancelButton" onClick={props.closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const PublishSecuritiesModal = (props) => {
  const context = useContext(GovContext);
  const {
    isPublishValuedSecuritiesModalOpen,
    closePublishValuedSecuritiesModal,
    onAllPublishTireChecked,
    onSelectPublishTireCheckbox,
    onSelectPublishTypeCheckbox,
    onAllPublishTypeChecked,
    onResetPublish,
    onPublish,
    publishTireData,
    publishTypeData,
    isAllPublishTireChecked,
    isAllPublishTypeChecked,
  } = {
    ...context.state.maintenanceScreenData,
    ...context,
  };
  return (
    <Modal isOpen={isPublishValuedSecuritiesModalOpen} style={customStyles}>
      <PublishSecurities
        closeModal={closePublishValuedSecuritiesModal}
        data={{
          publishTireData: publishTireData,
          publishTypeData: publishTypeData,
          isAllPublishTireChecked: isAllPublishTireChecked,
          isAllPublishTypeChecked: isAllPublishTypeChecked,
        }}
        onAllPublishTireChecked={onAllPublishTireChecked}
        onSelectPublishTireCheckbox={onSelectPublishTireCheckbox}
        onSelectPublishTypeCheckbox={onSelectPublishTypeCheckbox}
        onAllPublishTypeChecked={onAllPublishTypeChecked}
        onReset={onResetPublish}
        onPublish={onPublish}
      ></PublishSecurities>
    </Modal>
  );
};

export { PublishSecuritiesModal as PublishSecuritiesModal };
