import React from "react";
import Modal from "react-modal";
import "./vsv-import-vendor-data.scss";
import Dropdown from "../../../../../components/common/simple-dropdown/dropdown.jsx";

const ImportVendorDataModalContent = (props) => {
  let options = [
    { label: "Bloomberg Finance LP.", value: "Bloomberg Finance LP." },
  ];
  let selectedValue = {
    label: "Bloomberg Finance LP.",
    value: "Bloomberg Finance LP.",
  };
  return (
    <div>
      <Dropdown options={options} selectedValue={selectedValue}></Dropdown>
    </div>
  );
};

const ImportVendorData = (props) => {
  return (
    <div className="importVendorModalContentWrapper">
      <div className="headerWrapper">
        <div className="header">Import Data Vendor Selection</div>

        <div className="helpAndCloseIcon"></div>
      </div>
      <div className="body">
        <p></p>
        <div>Please select vendor for input.</div>
        <ImportVendorDataModalContent
          data={props.data}
        ></ImportVendorDataModalContent>
      </div>
      <div className="footer">
        <button id="saveButton" onClick={props.onSave}>
          Import
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
const ImportVendorDataModal = (props) => {
  return (
    <Modal isOpen={props.isModalOpen} style={customStyles}>
      <ImportVendorData
        closeModal={props.closeModal}
        data={props.data}
      ></ImportVendorData>
    </Modal>
  );
};

export { ImportVendorDataModal as ImportVendorDataModal };
