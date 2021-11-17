import React from "react";
import Modal from "react-modal";
import "./publish-valued-securities.scss";
import Tier from "../../../../../components/common/tier-level/tier-level.jsx";
import Type from "../../../../../components/common/type/type.jsx";
import CheckBox from "../../../../../components/common/check-box/check-box.jsx";

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
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      {/*       <ModalContent data={props} closeModal={props.closeModal} /> */}
      <PublishSecurities
        closeModal={props.closeModal}
        data={props.data}
        onAllPublishTireChecked={props.onAllPublishTireChecked}
        onSelectPublishTireCheckbox={props.onSelectPublishTireCheckbox}
        onSelectPublishTypeCheckbox={props.onSelectPublishTypeCheckbox}
        onAllPublishTypeChecked={props.onAllPublishTypeChecked}
        onReset={props.onResetPublish}
        onPublish={props.onPublish}
      ></PublishSecurities>
    </Modal>
  );
};

export { PublishSecuritiesModal as PublishSecuritiesModal };
