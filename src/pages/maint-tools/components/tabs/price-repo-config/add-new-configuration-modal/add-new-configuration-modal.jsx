import React, { useContext } from "react";
import Modal from "react-modal";
import "./add-new-configuration-modal.scss";
import myContext from "../../../../../../components/context/maint-tools-context.jsx";
import PropTypes from "prop-types";

const AddNewConfigModalContent = (props) => {
  const {
    onChangeParamName,
    onChangeParamValue,
    onChangeParamDesc,
    paramDesc,
    paramName,
    paramValue,
  } = props;

  return (
    <div>
      <div className="mtAddNewConfigContentWrapper">
        <div className="mtParamNameLabelValueWrapper">
          <div className="mtPramNameLabel">Param Name:</div>
          <div className="mtParamNameValue">
            <textarea value={paramName} onChange={onChangeParamName}></textarea>
          </div>
        </div>

        <div className="mtParamValueLabelValueWrapper">
          <div className="mtPramValueLabel">Param Value:</div>
          <div className="mtParamValueValue">
            <textarea
              value={paramValue}
              onChange={onChangeParamValue}
            ></textarea>
          </div>
        </div>
        <div className="mtParamDescLabelValueWrapper">
          <div className="mtPramDescLabel">Param Desc:</div>
          <div className="mtParamDescValue">
            <textarea value={paramDesc} onChange={onChangeParamDesc}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddNewConfig = (props) => {
  return (
    <div className="mtAddNewRepoConfigModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Add New Repository Configuration</div>
      </div>
      <div className="body">
        <AddNewConfigModalContent
          onChangeParamName={props.onChangeParamName}
          onChangeParamValue={props.onChangeParamValue}
          onChangeParamDesc={props.onChangeParamDesc}
          paramName={props.paramName}
          paramValue={props.paramValue}
          paramDesc={props.paramDesc}
        ></AddNewConfigModalContent>
      </div>
      <div className="footer">
        <button id="publishButton" onClick={props.onSaveNewConfig}>
          Save
        </button>
        <button id="cancelButton" onClick={props.toggleAddNewConfigModal}>
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
const AddNewConfigModal = (props) => {
  const context = useContext(myContext);

  const {
    onSaveNewConfig,
    onChangeParamName,
    onChangeParamValue,
    onChangeParamDesc,
    paramName,
    paramValue,
    paramDesc,
  } = {
    ...context.state.priceRepoConfigData,
    ...context,
  };
  return (
    <Modal isOpen={props.isAddNewConfigModalOpen} style={customStyles}>
      <AddNewConfig
        toggleAddNewConfigModal={props.toggleAddNewConfigModal}
        onSaveNewConfig={onSaveNewConfig}
        onChangeParamName={onChangeParamName}
        onChangeParamValue={onChangeParamValue}
        onChangeParamDesc={onChangeParamDesc}
        paramName={paramName}
        paramValue={paramValue}
        paramDesc={paramDesc}
      ></AddNewConfig>
    </Modal>
  );
};
AddNewConfigModal.propTypes = {
  isAddNewConfigModalOpen: PropTypes.any,
  toggleAddNewConfigModal: PropTypes.any,
};
AddNewConfig.propTypes = {
  onChangeParamName: PropTypes.any,
  onChangeParamValue: PropTypes.any,
  onChangeParamDesc: PropTypes.any,
  paramName: PropTypes.any,
  paramValue: PropTypes.any,
  paramDesc: PropTypes.any,
  onSaveNewConfig: PropTypes.any,
};
AddNewConfigModalContent.propTypes = {
  onChangeParamName: PropTypes.any,
  onChangeParamValue: PropTypes.any,
  onChangeParamDesc: PropTypes.any,
  paramName: PropTypes.any,
  paramValue: PropTypes.any,
  paramDesc: PropTypes.any,
  onSaveNewConfig: PropTypes.any,
};
export { AddNewConfigModal as AddNewConfigModal };
