import React, { Component } from "react";
import ReactModal from "react-modal-resizable-draggable";
import "./App.scss";
class MySidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleBottom: false,
      visible: false,
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <div>
          <button
            label="Show Dialog"
            icon="pi pi-info-circle"
            onClick={this.openModal}
          />
          <ReactModal
            initWidth={400}
            initHeight={200}
            onRequestClose={this.closeModal}
            isOpen={this.state.modalIsOpen}
          >
            <div style={{ marginLeft: "10px" }}>
              <button label="Close Dialog" onClick={this.closeModal} />
            </div>
          </ReactModal>
          <button
            label={(this.state.visibleBottom ? "Close" : "Open") + " BottomBar"}
            iconPos="right"
            onClick={e =>
              this.setState({ visibleBottom: !this.state.visibleBottom })
            }
            style={{ position: "fixed", right: "5px" }}
          />
          <br />
          <br />
          <label>Field : </label>
          <input/>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default MySidebar;
