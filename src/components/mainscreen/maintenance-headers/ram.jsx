import React from "react";
import "./maintenance-headers.scss";
import ButtonWrapper from "../../../../../Compositions/GlobalConfigurations/Commons/Button/ButtonWrapper.jsx";
import { WarningModal } from "../../../../../Compositions/GlobalConfigurations/Commons/modal/warning-modal.jsx";
import Select from "../../../../../Compositions/GlobalConfigurations/Commons/select/select.jsx";
const Maintenanceheaders = (props) => {
  return (
    <div className="maintenanceHeaders">
      <div className="wrapper">
        <div className="dataHeadersButtonWrapper">
          <ButtonWrapper id="threshold" label={"Threshold"}></ButtonWrapper>
          <ButtonWrapper
            id="supendRestart"
            label={"Supend/Restart Prices"}
          ></ButtonWrapper>
          <ButtonWrapper id="Publish" label={"Publish"}></ButtonWrapper>
          <ButtonWrapper
            id="PriceRollOverride"
            label={"Price Roll Override"}
            onClick={props.onClickPriceRollOverrideButton}
          ></ButtonWrapper>
          <Select id="review"></Select>
        </div>
        <div className="showColumnsPrintRefreshExportWrapper">
          <ButtonWrapper
            id="showAllColumns"
            label={"Show All Columns"}
          ></ButtonWrapper>
          <ButtonWrapper id="refresh" label={"Refresh"}></ButtonWrapper>
          <ButtonWrapper id="print" label={"Print"}></ButtonWrapper>
          <ButtonWrapper id="export" label={"Export"}></ButtonWrapper>
        </div>
      </div>

      <WarningModal
        isModalOpen={
          props.data.maintenanceScreenData.isPriceRollOverrideModalOpen
        }
        closeModal={props.closePriceRollOverrideModal}
        warningMessage={
          props.data.maintenanceScreenData.PriceRollOverrideMModalWarningMessage
        }
      ></WarningModal>
    </div>
  );
};

export default Maintenanceheaders;
